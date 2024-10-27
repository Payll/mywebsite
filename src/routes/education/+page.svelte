<script>
	import { onMount } from 'svelte';

	// Function to check visibility of each container
	function reveal() {
		const containers = document.querySelectorAll('.container');
		for (let i = 0; i < containers.length; i++) {
			const windowHeight = window.innerHeight;
			const elementTop = containers[i].getBoundingClientRect().top;
			const elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				containers[i].style.opacity = 1;
				containers[i].style.transform = 'translateY(0)';
			}
		}
	}

	// Function to toggle the expanded state of a container
	function toggleExpand(event) {
		const container = event.currentTarget;
		const content = container.querySelector('.expanded-content');
		const indicator = container.querySelector('.expand-indicator');
		const logos = container.querySelector('.language-logos');

		if (content.style.display === 'block') {
			content.style.display = 'none';
			indicator.textContent = '+';
			logos.style.display = 'none';
		} else {
			content.style.display = 'block';
			indicator.textContent = '-';
			logos.style.display = 'flex';
		}
	}

	// Use Svelte's onMount lifecycle function to add the scroll event listener
	onMount(() => {
		window.addEventListener('scroll', reveal);

		// Initial check to see if any element is already visible
		reveal();

		return () => {
			window.removeEventListener('scroll', reveal);
		};
	});
</script>

<div class="whiteGradient w-full rounded-md relative items-center">
	<h1 class="text-4xl text-center lg:text-8xl lg:mb-5 text-black font-bold mt-5">Degrees & Jobs</h1>
	<div class="divider" />
	<div class="mb-5 text-2xl text-black">
		Discover my journey through education and professional milestones, showcasing the skills and
		experiences that shaped my career.
	</div>
	<div class="xl:text-xl text-sm text-black mt-2 text-center">🚧🚧🚧 work in progress 🚧🚧🚧</div>
	<div class="xl:text-xl text-sm text-black mt-2 text-center">
		🚧🚧🚧 All the information below is correct, but some details are still being added. Please
		check back soon for more updates. 🚧🚧🚧
	</div>
	<div class="mt-5 text-gray-500 text-sm text-center italic">
		Tip: Click on the logos below the descriptions for more details about the projects, experiences,
		and where I gained these skills.
	</div>
	<div class="justify-around hidden sm:flex">
		<div class="text-xl text-black font-bold">Degrees</div>
		<div class="text-xl text-black font-bold">Jobs</div>
	</div>
</div>

<div class="timeline">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="container right" on:click={toggleExpand}>
		<div class="content">
			<h2 class="text-xl font-semibold text-gray-800">
				👨‍💻 Software engineer & full stack developer<span class="expand-indicator">+</span>
			</h2>
			<a class="text-blue-700 hover:underline" href="https://www.wi6labs.com/" target="_blank"
				>Wi6labs, Cesson-Sévigné, France
			</a>
			<p class="text-gray-500">Sept 2024 - Dec 2024</p>
			<p class="text-gray-900">
				Full-stack development and maintenance of software architecture for a cloud IoT and an
				embedded solution.
			</p>
			<div class="expanded-content">
				<p class="text-black">
					As a Full Stack Developer, I work on both cloud-based and embedded IoT solutions, taking
					charge of development, maintenance, and adaptation of the system's software architecture,
					both of which follow a PUB/SUB (message-driven) architecture.
				</p>
				<div class="text-black text-lg font-bold my-4">Cloud Solution</div>
				<p class="text-black">
					For the cloud solution, I handle the backend using PHP and C++ and the frontend with
					Angular, ensuring a responsive and user-friendly experience. The system is monitored using
					ELK (Elasticsearch, Logstash, Kibana) and Grafana to maintain high levels of supervision
					and reliability. Additionally, I manage codec processing using JavaScript, Python, and
					PHP, and implement a JSON-to-JSON templating system using Twig.
				</p>
				<div class="text-black text-lg font-bold my-4">Embedded Solution</div>
				<p class="text-black">
					On the embedded solution side, I work primarily with C++ for backend development,
					incorporating various communication libraries such as Modbus, BACnet, and MQTT to
					facilitate efficient data exchange. Output control is managed through C and C++ to handle
					the embedded hardware communication seamlessly.
				</p>
			</div>
			<div class="language-logos">
				<a href="skills"><img src="/icons/C.png" alt="C Logo" /></a>
				<a href="skills"><img src="/icons/CPP.png" alt="C++ Logo" /></a>
				<a href="skills"><img src="/icons/PHP.png" alt="PHP Logo" /></a>
				<a href="skills"><img src="/icons/python.png" alt="python Logo" /></a>
				<a href="skills"><img src="/icons/js.png" alt="js Logo" /></a>
				<a href="skills"><img src="/icons/twig.png" alt="twig Logo" /></a>
				<a href="skills"><img src="/icons/gitlab.png" alt="gitlab Logo" /></a>
				<a href="skills"><img src="/icons/gitea.png" alt="gitea Logo" /></a>
				<a href="skills"><img src="/icons/sonarqube.png" alt="sonarqube Logo" /></a>
				<a href="skills"><img src="/icons/jenkins.png" alt="jenkins Logo" /></a>
				<a href="skills"><img src="/icons/kibana.png" alt="kibana Logo" /></a>
				<a href="skills"><img src="/icons/logstash.png" alt="logstash Logo" /></a>
				<a href="skills"><img src="/icons/elasticsearch.png" alt="elasticsearch Logo" /></a>
				<a href="skills"><img src="/icons/grafana.png" alt="grafana Logo" /></a>
				<a href="skills"><img src="/icons/bacnet.png" alt="bacnet Logo" /></a>
				<a href="skills"><img src="/icons/modbus.png" alt="modbus Logo" /></a>
				<a href="skills"><img src="/icons/mqtt.png" alt="mqtt Logo" /></a>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="container left" on:click={toggleExpand}>
		<div class="content">
			<h2 class="text-xl font-semibold text-gray-800">
				🎓 Engineer's degree in IT<span class="expand-indicator">+</span>
			</h2>
			<a class="text-blue-700 hover:underline" href="https://esir.univ-rennes.fr/" target="_blank"
				>ESIR (Graduate School of Engineering), Rennes 1 University, France</a
			>
			<p class="text-gray-600">Sep 2021 - Sep 2024</p>
			<p class="text-gray-500">
				My three-year engineering journey at ESIR equipped me with strong skills in software
				development, systems and data management, and software architecture, along with essential
				professional competencies.
			</p>
			<div class="expanded-content">
				<p class="text-black">
					My engineering program specializing in Information Systems at ESIR provided me with a wide
					range of technical and professional skills over three years
				</p>
				<div class="text-black text-lg font-bold my-4">Year 1: Technical Foundations</div>
				<p class="text-black">
					I explored the fundamentals of software development with Java (OOP), as well as C and ASM
					for low-level algorithmics. I also studied electronics, graph algorithms, databases (SQL),
					mathematics, physics, and took my first steps in artificial intelligence (AI). I also
					developed cross-disciplinary skills such as communication, management, and English.
				</p>
				<div class="text-black text-lg font-bold my-4">Year 2: Deepening and Specialization</div>
				<p class="text-black">
					I deepened my skills in C++, algorithm and complexity, and software architecture to design
					robust systems. I also studied software verification and validation, compiled languages,
					parallel programming, mobile web, developed a web application (backend: NestJS, frontend:
					Angular), and worked on mobile development using Android Studio (Java, Kotlin) and
					Flutter, and DevOps. A 6-month software project allowed me to apply project management and
					work in a team on a defined topic, culminating in a final audit.
				</p>
				<div class="text-black text-lg font-bold my-4">Year 3: Mastery and Future Vision</div>
				<p class="text-black">
					In the third year, I developed expertise in big data management, distributed systems, and
					systems and data security. I studied model-driven engineering, high-performance software
					engineering using graphics cards, and deepened my knowledge in AI. I also strengthened my
					skills in scientific methodology, management, labor law, communication, and English.
				</p>
				<div class="text-black text-lg font-bold my-4">Engineering Skills and Competencies</div>
				<p class="text-black">
					As an engineer, I have acquired all the necessary skills to fulfill the responsibilities
					associated with this status. My training has equipped me to handle complex technical
					challenges, lead projects, and contribute effectively to cross-functional teams.
				</p>
			</div>
			<div class="language-logos">
				<a href="skills"><img src="/icons/C.png" alt="C Logo" /></a>
				<a href="skills"><img src="/icons/CPP.png" alt="C++ Logo" /></a>
				<a href="skills"><img src="/icons/java.png" alt="Java Logo" /></a>
				<a href="skills"><img src="/icons/asm.png" alt="ASM Logo" /></a>
				<a href="skills"><img src="/icons/sql.png" alt="sql Logo" /></a>
				<a href="skills"><img src="/icons/Kotlin.png" alt="Kotlin Logo" /></a>
				<a href="skills"><img src="/icons/js.png" alt="js Logo" /></a>
				<a href="skills"><img src="/icons/typescript.png" alt="typescript Logo" /></a>
				<a href="skills"><img src="/icons/nestjs.png" alt="nestjs Logo" /></a>
				<a href="skills"><img src="/icons/angularjs.png" alt="angularjs Logo" /></a>
				<a href="skills"><img src="/icons/Flutter.png" alt="Flutter Logo" /></a>
				<a href="skills"><img src="/icons/python.png" alt="python Logo" /></a>
				<a href="skills"><img src="/icons/spring_boot.png" alt="spring boot Logo" /></a>
				<a href="skills"><img src="/icons/arduino.png" alt="arduino Logo" /></a>
				<a href="skills"><img src="/icons/docker.png" alt="docker Logo" /></a>
				<a href="skills"><img src="/icons/git.png" alt="git Logo" /></a>
				<a href="skills"><img src="/icons/kubernetes.png" alt="kubernetes Logo" /></a>
				<a href="skills"><img src="/icons/maven.png" alt="maven Logo" /></a>
				<a href="skills"><img src="/icons/github.png" alt="github Logo" /></a>
				<a href="skills"><img src="/icons/gitlab.png" alt="gitlab Logo" /></a>
				<a href="skills"><img src="/icons/sonarqube.png" alt="sonarqube Logo" /></a>
				<a href="skills"><img src="/icons/jenkins.png" alt="jenkins Logo" /></a>
				<a href="skills"><img src="/icons/kibana.png" alt="kibana Logo" /></a>
				<a href="skills"><img src="/icons/logstash.png" alt="logstash Logo" /></a>
				<a href="skills"><img src="/icons/elasticsearch.png" alt="elasticsearch Logo" /></a>
				<a href="skills"><img src="/icons/grafana.png" alt="grafana Logo" /></a>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="container right" on:click={toggleExpand}>
		<div class="content">
			<h2 class="text-xl font-semibold text-gray-800">
				👨‍🏫 Software development engineering apprenticeship<span class="expand-indicator">+</span>
			</h2>
			<a class="text-blue-700 hover:underline" href="https://www.wi6labs.com/" target="_blank"
				>Wi6labs, Cesson-Sévigné, France
			</a>
			<p class="text-gray-600">Sep 2023 - Sep 2024</p>
			<p class="text-gray-500">
				Full Stack Developer apprentice focusing on embedded IoT solutions, specializing in
				integrating new output features using BACnet and enhancing backend communication efficiency.
			</p>
			<div class="expanded-content">
				<p class="text-black">
					As a Full Stack Developer apprentice, I worked primarily on embedded IoT solutions,
					contributing to the development, maintenance, and adaptation of the system's software
					architecture, which followed a PUB/SUB (message-driven) architecture, while also
					supporting cloud-based components.
				</p>
				<div class="text-black text-lg font-bold my-4">Cloud Solution</div>
				<p class="text-black">
					For the cloud solution, I worked on the backend using PHP and C++ and the frontend with
					Angular. I used ELK (Elasticsearch, Logstash, Kibana) for monitoring, handled codec
					processing with JavaScript, Python, and PHP, and implemented JSON-to-JSON templating with
					Twig.
				</p>
				<div class="text-black text-lg font-bold my-4">Embedded Solution</div>
				<p class="text-black">
					On the embedded solution side, I primarily worked with C++ for backend development,
					incorporating various communication libraries such as Modbus, BACnet, and MQTT to
					facilitate efficient data exchange. During my apprenticeship, I focused mainly on
					expanding the embedded solution by adding a new output option through BACnet integration,
					utilizing C++ to seamlessly manage communication with the embedded hardware.
				</p>
			</div>
			<div class="language-logos">
				<a href="skills"><img src="/icons/C.png" alt="C Logo" /></a>
				<a href="skills"><img src="/icons/CPP.png" alt="C++ Logo" /></a>
				<a href="skills"><img src="/icons/PHP.png" alt="PHP Logo" /></a>
				<a href="skills"><img src="/icons/python.png" alt="python Logo" /></a>
				<a href="skills"><img src="/icons/js.png" alt="js Logo" /></a>
				<a href="skills"><img src="/icons/typescript.png" alt="typescript Logo" /></a>
				<a href="skills"><img src="/icons/twig.png" alt="twig Logo" /></a>
				<a href="skills"><img src="/icons/git.png" alt="git Logo" /></a>
				<a href="skills"><img src="/icons/gitea.png" alt="gitea Logo" /></a>
				<a href="skills"><img src="/icons/sonarqube.png" alt="sonarqube Logo" /></a>
				<a href="skills"><img src="/icons/jenkins.png" alt="jenkins Logo" /></a>
				<a href="skills"><img src="/icons/kibana.png" alt="kibana Logo" /></a>
				<a href="skills"><img src="/icons/logstash.png" alt="logstash Logo" /></a>
				<a href="skills"><img src="/icons/elasticsearch.png" alt="elasticsearch Logo" /></a>
				<a href="skills"><img src="/icons/grafana.png" alt="grafana Logo" /></a>
				<a href="skills"><img src="/icons/bacnet.png" alt="bacnet Logo" /></a>
				<a href="skills"><img src="/icons/modbus.png" alt="modbus Logo" /></a>
				<a href="skills"><img src="/icons/mqtt.png" alt="mqtt Logo" /></a>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="container right" on:click={toggleExpand}>
		<div class="content">
			<h2 class="text-xl font-semibold text-gray-800">
				👨‍🏫 Engineering Intern in Mobile Application Development
				<span class="expand-indicator">+</span>
			</h2>
			<a class="text-blue-700 hover:underline" href="https://infoscope.gr/" target="_blank"
				>Infoscope Hellas, Thessaloniki, Greece</a
			>
			<p class="text-gray-600">Jun 2023 - Sep 2023</p>
			<p class="text-gray-500">
				This internship was my first professional experience abroad, during which I developed a
				mobile application for monitoring IoT equipment.
			</p>
			<div class="expanded-content">
				<p class="text-black">
					During my internship, I developed a mobile application called
					<a
						class="text-blue-700 hover:underline"
						href="https://play.google.com/store/apps/details?id=gr.infoscope.meterscopeMobileAppX"
						target="_blank">"Meterscope Mobile"</a
					>, designed to monitor and track IoT equipment. This was my first professional experience
					abroad. This new application was a modern continuation of an older, existing version,
					aimed at enhancing both functionality and user experience. My role involved conducting a
					detailed analysis of the initial application to identify key requirements and
					improvements. For the development process, I utilized React Native and Expo, ensuring the
					app was versatile and compatible across platforms. Finally, I successfully deployed the
					application on both Android and Apple devices, making it accessible to a wide range of
					users.
				</p>
			</div>
			<div class="language-logos">
				<a href="skills"><img src="/icons/js.png" alt="js Logo" /></a>
				<a href="skills"><img src="/icons/typescript.png" alt="typescript Logo" /></a>
				<a href="skills"><img src="/icons/expo.png" alt="expo Logo" /></a>
				<a href="skills"><img src="/icons/react.png" alt="react Logo" /></a>
				<a href="skills"><img src="/icons/git.png" alt="git Logo" /></a>
				<a href="skills"><img src="/icons/gitlab.png" alt="gitlab Logo" /></a>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="container right" on:click={toggleExpand}>
		<div class="content">
			<h2 class="text-xl font-semibold text-gray-800">
				👨‍🏫 Assistant Quality Engineer<span class="expand-indicator">+</span>
			</h2>
			<a class="text-blue-700 hover:underline" href="https://www.keolis-rennes.com/" target="_blank"
				>Keolis Rennes, Rennes, France</a
			>
			<p class="text-gray-600">Jun 2022 - Sep 2022</p>
			<p class="text-gray-500">
				Assisted in quality assurance processes to enhance software reliability.
			</p>
			<div class="expanded-content">
				<p class="text-black">
					During my recent internship, I worked on the digitalization and automation of the quality
					control process for Parc Relais. My main responsibilities involved analyzing the current
					procedures and developing automated workflows to enhance efficiency. Specifically, I
					digitized forms using Kizeo Forms, allowing for seamless data collection, and created an
					advanced analysis tool in Excel to facilitate more effective data interpretation. This
					project also gave me the opportunity to simulate direct interactions with customers,
					enhancing my communication skills. By the end of the internship, I successfully
					implemented a fully automated process that covered everything from data entry to analysis,
					significantly improving the efficiency of the quality control system.
				</p>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="container left" on:click={toggleExpand}>
		<div class="content">
			<h2 class="text-xl font-semibold text-gray-800">
				🎓 DUT (Two-year technical degree) in Electrical Engineering and Industrial Computing<span
					class="expand-indicator">+</span
				>
			</h2>
			<p class="text-blue-700">Rennes 1 University, France</p>
			<p class="text-gray-600">Sep 2019 - Sep 2021</p>
			<p class="text-gray-500">
				My two years of DUT GEII gave me a strong foundation in electronics, programming, and
				practical engineering, preparing me well for further studies in engineering.
			</p>
			<div class="expanded-content">
				<p class="text-black">
					During my two years of DUT, I built a strong foundation in math, physics, and electronics.
					I worked on both analog and digital circuits, which gave me a good understanding of modern
					technology. I learned programming in Python, C, Microcontroller C, Arduino, C#, Visual
					Basic, and VHDL. I used these skills to develop software, create prototypes, and design
					hardware. I also gained experience in microcontrollers and embedded systems, learning how
					to make hardware interact with the real world. Courses in communication and English helped
					me improve my ability to work in teams and communicate clearly. Overall, my DUT gave me
					strong technical skills and hands-on experience, preparing me for engineering school.
				</p>
			</div>
			<div class="language-logos">
				<a href="skills"><img src="/icons/python.png" alt="python Logo" /></a>
				<a href="skills"><img src="/icons/C.png" alt="C Logo" /></a>
				<a href="skills"><img src="/icons/arduino.png" alt="arduino Logo" /></a>
				<a href="skills"><img src="/icons/Csharp.png" alt="C# Logo" /></a>
				<a href="skills"><img src="/icons/vb.png" alt="Visual Basic Logo" /></a>
				<a href="skills"><img src="/icons/vhdl.png" alt="VHDL Logo" /></a>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="container right" on:click={toggleExpand}>
		<div class="content">
			<h2 class="text-xl font-semibold text-gray-800">
				👨‍🏫 Wiotys Production Automation Assistant<span class="expand-indicator">+</span>
			</h2>
			<a class="text-blue-700 hover:underline" href="https://www.wi6labs.com/"
				>Wi6labs, Cesson-Sévigné, France
			</a>
			<p class="text-gray-600">Apr 2021 - Aug 2021</p>
			<p class="text-gray-500">
				Worked on automation solutions to streamline production processes.
			</p>
			<div class="expanded-content">
				<p class="text-black">
					During my internship, I was responsible for implementing a new production system, a
					project that allowed me to apply a range of technical and collaborative skills. I
					developed a production program using Python, focusing on creating efficient and scalable
					processes. To ensure effective progress, I utilized the Agile methodology for project
					management, which facilitated iterative improvements and regular feedback. Additionally, I
					played a key role in designing and establishing the production processes, ensuring they
					aligned with the company's needs. My work also involved close collaboration with an
					external audit firm, which enriched the project with expert insights and strengthened the
					overall design. The outcome of my efforts was a scalable production tool that was
					ultimately adopted by the company, significantly improving their production efficiency.
				</p>
			</div>
			<div class="language-logos">
				<a href="skills"><img src="/icons/python.png" alt="python Logo" /></a>
				<a href="skills"><img src="/icons/git.png" alt="git Logo" /></a>
				<a href="skills"><img src="/icons/gitea.png" alt="gitea Logo" /></a>
				<a href="skills"><img src="/icons/jenkins.png" alt="jenkins Logo" /></a>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="container left" on:click={toggleExpand}>
		<div class="content">
			<h2 class="text-xl font-semibold text-gray-800">
				🎓 Technological high school diplomas in Industry and Sustainable Development (STI2D)<span
					class="expand-indicator">+</span
				>
			</h2>
			<p class="text-blue-700">Bréquigny High School, Rennes, France</p>
			<p class="text-gray-600">Sep 2017 - Jul 2019</p>
			<p class="text-gray-500">
				A technical program focused on industry, sustainable development, and engineering.
			</p>
			<div class="expanded-content">
				<p class="text-black">
					I completed the STI2D high school diploma, which focused on industrial sciences and
					sustainable development. During this period, I gained a solid understanding of technology,
					engineering, and environmental innovation. I also learned programming skills, working with
					Arduino, Python, and C, which helped me develop a practical approach to solving technical
					problems.
				</p>
			</div>
			<div class="language-logos">
				<a href="skills"><img src="/icons/arduino.png" alt="arduino Logo" /></a>
				<a href="skills"><img src="/icons/python.png" alt="python Logo" /></a>
				<a href="skills"><img src="/icons/C.png" alt="C Logo" /></a>
			</div>
		</div>
	</div>
</div>

<style>
	.timeline {
		position: relative;
		max-width: 100%;
		margin: 50px auto;
	}

	.timeline::after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 10px 20px 10px;
		border-color: transparent transparent #fff transparent;
		top: -15px;
		left: 50%;
		margin-left: -10px;
	}

	.timeline::before {
		content: '';
		position: absolute;
		width: 6px;
		background-color: #fff;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
	}

	@media (min-width: 768px) {
		.timeline::before {
			top: -10px;
			bottom: 20px;
		}
	}

	.container {
		padding: 20px;
		position: relative;
		background-color: inherit;
		width: 100%;
		opacity: 0;
		transform: translateY(50px);
		transition: all 0.6s ease-in-out;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.container {
			width: 50%;
		}

		.container.left {
			left: 0;
		}

		.container.right {
			left: 50%;
		}
	}

	@media (min-width: 768px) {
		.container::before {
			content: ' ';
			position: absolute;
			top: 22px;
			width: 25px;
			height: 25px;
			border-radius: 50%;
			background-color: #333;
			border: 4px solid #f0f0f0;
		}
	}

	@media (min-width: 768px) {
		.container.left::before {
			right: -12px;
		}

		.container.right::before {
			left: -12px;
		}
	}

	.content {
		padding: 20px;
		background-color: white;
		position: relative;
		border-radius: 6px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.expanded-content {
		display: none;
		margin-top: 10px;
		padding: 10px;
		background-color: #f0f0f0;
		border-radius: 6px;
	}

	.expand-indicator {
		float: right;
		font-size: 1.5em;
		font-weight: bold;
		color: #666;
	}

	.language-logos {
		display: none;
		margin-top: 10px;
		gap: 10px;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.language-logos img {
		width: 30px;
		height: 30px;
	}

	.whiteGradient {
		padding: 20px;
		background: linear-gradient(to right, #f9f9f9, #ffffff);
		margin: 20px 0;
		text-align: center;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}

	.whiteGradient .divider {
		width: 50%;
		height: 4px;
		background-color: #000;
		margin: 10px auto;
		border-radius: 2px;
	}
</style>
