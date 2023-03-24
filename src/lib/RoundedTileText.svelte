<script>
    import ImageModule from "$lib/ImageModule.svelte";
    
    export let title;
    export let subTitle;
    export let colorFont;
    export let colorBackground;
    export let behaviour="";

    export let textCenter="";
    export let textCenterPolice="text-xl";

    export let w;
    export let minW;

    export let logoUp="";
    export let logoUpAlt=" ";
    export let logoUpWidth="50";
    export let logoUpHeight="50";

    export let logoDown="";
    export let logoDownAlt=" ";
    export let logoDownWidth="50";
    export let logoDownHeight="50";
</script>





<div class=" rounded-[80px] p-10 {behaviour} {colorBackground} h-[500px] md:{w} {minW}">

    <div class="flex relative h-full">
        <h1 class="text-3xl left-0 top-0 absolute {colorFont} font-bold">
            {title}
        </h1>

        <div class="right-0 top-0 absolute">
            <ImageModule src={logoUp} alt={logoUpAlt} width={logoUpWidth} height={logoUpHeight}></ImageModule>
        </div>

        <div class="{colorFont} my-auto {textCenterPolice} overflow-hidden">
            {textCenter}
        </div>

        <h2 class="left-0 bottom-0 absolute {colorFont} font-bold">
            {subTitle}
        </h2>
        <div class="right-0 bottom-0 absolute">
            <ImageModule src={logoDown} alt={logoDownAlt} width={logoDownWidth} height={logoDownHeight}></ImageModule>
        </div>

    </div>
</div>
