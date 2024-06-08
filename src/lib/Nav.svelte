<script>
    export let sidebarExpanded = false;
</script>

<style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>


<div class="navbar flex flex-col">
    <!-- Collapse Button -->
    <div class="mt-2 mb-2 flex items-cente">
        <div class="divider text-white text-xl font-bold flex items-center">
            <span class="material-icons">menu</span>
        </div>
    </div>

    <!-- Home Button -->
    <div class="mt-2 mb-2 flex items-center hover:scale-110 transition duration-300 w-full">
        <a class="ease-in duration-300 bg-transparent flex items-center" href="/" rel="noreferrer noopener">
            <span class="material-icons text-white text-xl">home</span>
            {#if sidebarExpanded}
                <span class="ml-2">Home</span>
            {/if}
        </a>
    </div>

    <!-- Education & Jobs Button -->
    <div class="mt-2 mb-2 flex items-center hover:scale-110 transition duration-300 w-full">
        <a class="ease-in duration-300 bg-transparent flex items-center" href="/education" rel="noreferrer noopener">
            <span class="material-icons text-white text-xl">work</span>
            {#if sidebarExpanded}
                <span class="ml-2">Education & Jobs</span>
            {/if}
        </a>
    </div>

    <!-- Projects Button -->
    <div class="mt-2 mb-2 flex items-center hover:scale-110 transition duration-300 w-full">
        <a class="ease-in duration-300 bg-transparent flex items-center" href="/projects" rel="noreferrer noopener">
            <span class="material-icons text-white text-xl">code</span>
            {#if sidebarExpanded}
                <span class="ml-2">Projects</span>
            {/if}
        </a>
    </div>

    <!-- Skills Button -->
    <div class="mt-2 mb-2 flex items-center hover:scale-110 transition duration-300  w-full">
        <a class="ease-in duration-300 bg-transparent flex items-center" href="/skills" rel="noreferrer noopener">
            <span class="material-icons text-white text-xl">build</span>
            {#if sidebarExpanded}
                <span class="ml-2">Skills</span>
            {/if}
        </a>
    </div>

    <!-- About Button -->
    <div class="mt-2 mb-2 flex items-center hover:scale-110 transition duration-300  w-full">
        <a class="ease-in duration-300 bg-transparent flex items-center" href="/about" rel="noreferrer noopener">
            <span class="material-icons text-white text-xl">info</span>
            {#if sidebarExpanded}
                <span class="ml-2">About</span>
            {/if}
        </a>
    </div>

    <!-- Linkedin Button -->
    <div class="mt-2 mb-2 flex items-center hover:scale-110 transition duration-300  w-full">
        <a class="ease-in duration-300 bg-transparent flex items-center" href="https://www.linkedin.com/in/yann-paillard/?locale=en_US" rel="noreferrer noopener" target="_blank">
            <img src="linkedin-box-fill.svg" class="h-6 w-6" alt="LinkedIn">
            {#if sidebarExpanded}
                <span class="ml-2">LinkedIn</span>
            {/if}
        </a>
    </div>

    <!-- Github Button -->
    <div class="mt-2 mb-2 flex items-center hover:scale-110 transition duration-300  w-full">
        <a class="ease-in duration-300 bg-transparent flex items-center" href="https://github.com/Payll" rel="noreferrer noopener" target="_blank">
            <span class="material-icons text-white text-xl">code</span>
            {#if sidebarExpanded}
                <span class="ml-2">GitHub</span>
            {/if}
        </a>
    </div>
</div>