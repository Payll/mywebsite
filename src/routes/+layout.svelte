<script>
	import '../app.css';
	import Nav from '../lib/Nav.svelte';
	import Footer from '../lib/Footer.svelte';
	import { onMount } from 'svelte';

	/** @type {HTMLElement[]} */
	let sections = [];
	let currentActive = '';
	let sidebarExpanded = false;

	onMount(() => {
		sections = Array.from(document.querySelectorAll('.my-section'));
		/** @type {{ [key: string]: number }} */
		let ratios = {};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					ratios[entry.target.id] = entry.intersectionRatio;
				});

				let maxRatio = 0;
				let maxSection = '';
				for (const [section, ratio] of Object.entries(ratios)) {
					if (ratio > maxRatio) {
						maxRatio = ratio;
						maxSection = section;
					}
				}

				currentActive = maxSection; // Updating the active section
			},
			{
				rootMargin: '0px 0px -40% 0px', // Adjusted root margin
				threshold: [0, 0.5, 1]
			}
		);

		sections.forEach((section) => observer.observe(section));

		// Fallback for when user scrolls to the bottom
		window.addEventListener('scroll', () => {
			const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
			if (window.scrollY >= scrollTotal && sections.length) {
				currentActive = sections[sections.length - 1].id; // Set the last section as active
			}
		});
	});

	function handleMouseEnter() {
		sidebarExpanded = true;
	}

	function handleMouseLeave() {
		sidebarExpanded = false;
	}
</script>

<div class="flex h-full">
	<!-- Left Sidebar -->
	<div
		class="fixed top-0 left-0 h-screen border-2 border-gray-500 rounded-l-md shadowRight z-10 transition-all duration-300 {sidebarExpanded
			? 'w-40 sidebar-expanded-background'
			: 'w-10'}"
		on:mouseenter={() => (sidebarExpanded = true)}
		on:mouseleave={() => (sidebarExpanded = false)}
	>
		<Nav {sidebarExpanded} />
	</div>

	<!-- Main Content -->
	<div class="flex-col flex-1 h-full pl-14 pr-5 md:pl-14 md:pr-14 pt-10">
		<slot />
		<Footer />
	</div>

	<!-- Right Sidebar with animation -->
	<div
		class="fixed top-0 right-0 h-screen w-10 border-2 border-gray-500 rounded-r-md z-10 hidden md:block"
	>
		<div class="flex flex-col items-center justify-center h-1/2">
			<div class="animated-dot" />
			<div class="animated-dot" />
			<div class="animated-dot" />
			<div class="animated-dot" />
			<div class="animated-dot" />
		</div>

		<div class="flex flex-col items-center justify-center h-1/2">
			{#each sections as section (section.id)}
				<a href={`#${section.id}`} class="nav-dot {currentActive === section.id ? 'active' : ''}"
					>&#8226;</a
				>
			{/each}
		</div>
	</div>
</div>

<style>
	/* CSS for the dots */
	.nav-dot {
		transition: transform 0.3s;
		font-size: 1rem; /* Normal size */
	}

	.nav-dot.active {
		transform: scale(1.5); /* Larger when active */
		font-size: 1.5rem; /* or any other transformation you want */
		margin-bottom: 5px;
		margin-top: 5px;
		transition: transform 0.3s;
		color: #ffffff;
	}

	/* CSS for the animated dots */
	.animated-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #ffffff;
		margin: 5px;
		animation: bounce 1s infinite;
	}

	.animated-dot:nth-child(2) {
		animation-delay: 0.1s;
	}

	.animated-dot:nth-child(3) {
		animation-delay: 0.2s;
	}

	.animated-dot:nth-child(4) {
		animation-delay: 0.3s;
	}

	.animated-dot:nth-child(5) {
		animation-delay: 0.4s;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	/* Background for the sidebar when expanded */
	.sidebar-expanded-background {
		background-color: rgba(38, 43, 50, 0.9); /* Example background color */
	}
</style>
