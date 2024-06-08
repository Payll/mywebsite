<script>
    import { slide } from 'svelte/transition';
    import Folder from "../../lib/Folder.svelte";

	let selectedFile = null;

	function selectFile(file) {
        selectedFile = file;
    }
    
    let root = [
		{
			type: 'folder',
			name: 'CV / RESUME',
			files: [
				{ 
					type: 'file', 
					name: 'CV de Yann Paillard.pdf',
					downloadPath: '/download/CV de Yann Paillard.pdf'
				},
				{ 
					type: 'file', 
					name: 'Resume Yann Paillard.pdf',
					downloadPath: '/download/Resume Yann Paillard.pdf'
				}
			]
		}
	];
</script>


<style>
    /* Assurez-vous que le PDF prend toute la hauteur et largeur de sa colonne */
    #pdf-preview {
        width: 100%;
        height: 100%;
    }
</style>


<div class="flex h-screen">
    <!-- Colonne de l'arbre de dossiers -->
    <div class="w-1/2 bg-black overflow-auto">
        <Folder name="Home" files={root} expanded />
    </div>
    <!-- Colonne de l'aperçu PDF -->
    <div class="w-1/2 flex justify-center items-center bg-gray-200">
        <!-- Remplacez 'path_to_your_pdf' par le chemin réel vers le fichier PDF -->
        {#if selectedFile}
			<object data={selectedFile} type="application/pdf" id="pdf-preview" aria-label="PDF Preview" title="{name} Document">
				Aucun fichier sélectionné
			</object>
		{:else}
			<div>Aucun fichier sélectionné</div>
		{/if}
    </div>
</div>