<script>
    import { slide } from 'svelte/transition';
    import Folder from "../lib/Folder.svelte";
    
    let root = [
        { type: 'file', name: 'TODO.md' },
        { type: 'file', name: 'TODO.md' }
    ];
</script>

<div class="flex-col items-center mx-40 shadowEvrywhere">
    <div id="S1" class="my-section"></div>
    <div class="whiteGradient w-full rounded-md flex py-">
        <!-- Image on the left -->
        <div class="w-1/2 flex justify-center items-end px-10 h-full">
            <img src="file.png" alt="Yann Paillard" class="h-3/4">
        </div>

        <!-- Text on the right -->
        <div class="w-1/2 flex flex-col justify-center items-center">
            <!-- small line -->
            <div class="w-1/4 h-1 bg-black rounded-full"></div>

            <!-- Name -->
            <div class="text-8xl text-black font-bold mt-5">
                Yann Paillard
            </div>

            <!-- Job -->
            <div class="text-3xl text-black font-bold mt-2">
                Software Engineer
            </div>

            <!-- Description -->
            <div class="text-xl text-black mt-2 text-center px-4">
                I'm a french student in software engineering. I'm currently in my last year of studies at the <a class="hover:underline" href="https://esir.univ-rennes.fr/" target="_blank" rel="noreferrer noopener">ESIR</a>.
            </div>

            <!-- Button for downloading CV -->
            <div class="mt-4">
                <a href="/download" rel="noreferrer noopener" target="_blank">
                    <button class="blackColorButton text-white font-bold py-4 px-10 rounded-3xl hover:scale-110 transition duration-300">
                        Download CV
                    </button>
                </a>
            </div>
        </div>
    </div>

    <div id="S2" class="my-section"></div>
    <div class="blackGradient w-full rounded-b-md flex justify-evenly items-center py-10">
        <!-- Icon 1 -->
        <div class="flex w-1/4 flex-col items-center hover:scale-110 transition duration-300">
            <div class="bg-slate-700 rounded-full p-5 shadowEvrywhereWhite border-2 border-white flex justify-center items-center" style="width: 100px; height: 100px;">
                <img src="school-line.svg" alt="Icon 1" class="h-16 w-16">
            </div>
            <div class="text-3xl text-white font-bold mt-2 text-center">
                Education & Job
            </div>
            <div class="text-xl text-white mt-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
        </div>

        <!-- Icon 2 -->
        <div class="flex w-1/4 flex-col items-center hover:scale-110 transition duration-300">
            <div class="bg-slate-700 rounded-full p-5 shadowEvrywhereWhite border-2 border-white flex justify-center items-center" style="width: 100px; height: 100px;">
                <img src="archive-stack-line.svg" alt="Icon 2" class="h-16 w-16">
            </div>
            <div class="text-3xl text-white font-bold mt-2 text-center">
                Projects
            </div>
            <div class="text-xl text-white mt-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
        </div>

        <!-- Icon 3 -->
        <div class="flex w-1/4 flex-col items-center hover:scale-110 transition duration-300">
            <div class="bg-slate-700 rounded-full p-5 shadowEvrywhereWhite border-2 border-white flex justify-center items-center" style="width: 100px; height: 100px;">
                <img src="pencil-ruler-2-line.svg" alt="Icon 3" class="h-16 w-16">
            </div>
            <div class="text-3xl text-white font-bold mt-2 text-center">
                Skills
            </div>
            <div class="text-xl text-white mt-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
        </div>
    </div>

    <!-- Current Status and Research -->
    <div id="S3" class="my-section"></div>
    <div class="whiteGradient w-full rounded-t-md flex justify-evenly items-center py-10">
        <!-- Current Status -->
        <div class="flex w-1/4 flex-col items-center">
            <div class="text-3xl text-black font-bold mt-2 text-center">
                Current Status
            </div>
            <div class="text-xl text-black mt-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
        </div>

        <!-- Research -->
        <div class="flex w-1/4 flex-col items-center">
            <div class="text-3xl text-black font-bold mt-2 text-center">
                Research
            </div>
            <div class="text-xl text-black mt-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
        </div>
    </div>

    <!-- Contact me form -->
    <div id="S4" class="my-section"></div>
    <div class="blackGradient w-full rounded-b-md flex justify-evenly items-center py-10">
        <div class="flex w-5/6 flex-col items-center">
            <div class="text-3xl text-white font-bold mt-2 text-center">
                Contact me
            </div>
            <div class="text-xl text-white mt-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>

            <!-- Email and Subject on the same line -->
            <div class="mt-4 w-full flex justify-between space-x-4">
                <input class="rounded-3xl border-2 border-white py-4 px-10 text-white w-1/2" type="text" placeholder="Email">
                <input class="rounded-3xl border-2 border-white py-4 px-10 text-white w-1/2" type="text" placeholder="Subject">
            </div>

            <div class="mt-4 w-full h-full">
                <textarea class="rounded-3xl border-2 border-white py-4 px-10 text-white w-full overflow-y-scroll h-48 resize-none" placeholder="Message"></textarea>
            </div>

            <div class="mt-4 w-full">
                <button class="blackColorButton text-white font-bold py-4 px-10 rounded-3xl hover:scale-110 transition duration-300 w-full">
                    Send
                </button>
            </div>
        </div>
    </div>
</div>
