<script>
    import ImageModule from "$lib/ImageModule.svelte";
	import RoundedTileButton from "$lib/RoundedTileButton.svelte";
    import RoundedTileText from "$lib/RoundedTileText.svelte";
</script>




<div class = "grid ">
    <div class = " mb-10 my-36">

        <div class = "ml-5 mr-5 text-center ">
            <p class = "text-7xl mb-5 text-white">
                <hover_ class = "font-bold"> Yann Paillard</hover_>
            </p>

            <p class = "text-4xl mt-7 text-gray-400">
                <hover_ class = "frenchFlag hover:font-bold"> French</hover_>
                <hover_ class = "hover:text-white hover:font-bold"> engineering</hover_>
                <hover_ class = "hover:text-white hover:font-bold"> student</hover_>
                <hover_ class = "hover:text-white hover:font-bold"> in</hover_>
                <hover_ class = "hover:text-white hover:font-bold"> software</hover_>
                <hover_ class = "hover:text-white hover:font-bold"> development</hover_>
                <hover_ class = "hover:text-white hover:font-bold"> and</hover_>
                <hover_ class = "hover:text-white hover:font-bold"> full</hover_>
                <hover_ class = "hover:text-white hover:font-bold"> stack</hover_>
                <hover_ class = "hover:text-white hover:font-bold"> developer.</hover_>
            </p>
        </div>
        
    </div>

    <div class = "md:flex md:justify-around inline-grid ">

        <RoundedTileButton title="Current Status" 
        subTitle="Student"
        textCenter="Second year in software engineering school at ESIR Located at Rennes1 University From France."
        colorFont="text-white"
        w="w-1/2"
        minW="min-w-[50%]"
        colorBackground="bg-blue-700" 
        behaviour="md:flex-1 overflow-hidden m-2 " 
        logoDown ="arrow-down-line-white.svg#white" 
        logoDownHeight=50
        logoDownWidth=50
        logoUp="pencil-ruler-line-white.svg#white"
        logoUpHeight=75
        logoUpWidth=75
        buttonLink="#S1"
        ></RoundedTileButton>


        <RoundedTileButton title="Current Research"
        subTitle="Internship" 
        textCenter="Searching an internship abroad (out of France) for 4 months in software or web developement."
        colorFont="text-black"
        w="w-1/2"
        minW="min-w-[50%]"
        colorBackground="bg-white" 
        behaviour="md:flex-1 overflow-hidden m-2 " 
        logoDown ="arrow-down-line.svg#black" 
        logoDownHeight=50 
        logoDownWidth=50
        logoUp="building-line.svg#black"
        logoUpHeight=75
        logoUpWidth=75
        buttonLink="#S2"
        ></RoundedTileButton>
    </div>

</div>



<div id="S1"></div>
<div>
    <RoundedTileText title="Student"
    subTitle=""
    colorFont="text-black"
    colorBackground="bg-yellow-200"
    textCenterPolice="text-3xl"
    behaviour="md:h-[600px] h-[600px] m-2" 
    textCenter="I am currently in my second year of engineering studies at ESIR (École Supérieure d'Ingénieurs de Rennes), where I am specializing in computer science and software developmen. I am taking an in-depth training in computer science, with courses on programming in C, C++, Python and Java, operating systems, the AGILE and DevOps method, and networks. Through this training, I have developed a solid foundation of technical skills and a deep understanding of the various aspects of computer science."
    ></RoundedTileText>
</div>


<div id="S2"></div>
<div>
    <RoundedTileText title="Internship"
    subTitle=""
    colorFont="text-white"
    colorBackground="bg-gray-800"
    textCenterPolice="text-3xl"
    behaviour="md:h-[600px] h-[600px] m-2" 
    textCenter="I am looking for an opportunity in software development to expand my skills and apply my theoretical knowledge in a professional environment. I am available for a four-month internship from June 1 to September 30, 2023. Having already gained work experience through previous internships as an Assistant Quality Engineer and Production Automation Assistant, I have developed skills in analysis, creating automated processes, and communicating with customers and external auditors. All in all, I am a motivated student looking to gain hands-on experience and contribute to a software development focused organization."
    ></RoundedTileText>
</div>


