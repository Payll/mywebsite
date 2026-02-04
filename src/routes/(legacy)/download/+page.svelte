<script lang="ts">
	import { slide } from 'svelte/transition';
	import Folder from '../../../lib/Folder.svelte';

	type FileNode = {
		type: 'file';
		name: string;
		downloadPath: string;
	};

	type FolderNode = {
		type: 'folder';
		name: string;
		files: FileNode[];
	};

	let selectedFile: string | null = null;

	function selectFile(file: string) {
		selectedFile = file;
	}

	const root: FolderNode[] = [
		{
			type: 'folder',
			name: 'CV / RESUME',
			files: [
				{
					type: 'file',
					name: 'CV_FR.pdf',
					downloadPath: '/download/CV_FR.pdf'
				}
			]
		}
	];
</script>

<div class="flex h-screen">
	<!-- Colonne de l'arbre de dossiers -->
	<div class="w-1/2 bg-black overflow-auto">
		<Folder name="Home" files={root} expanded />
	</div>
	<!-- Colonne de l'aperçu PDF -->
	<div class="w-1/2 flex justify-center items-center bg-gray-200">
		<!-- Remplacez 'path_to_your_pdf' par le chemin réel vers le fichier PDF -->
		{#if selectedFile}
			<object
				data={selectedFile}
				type="application/pdf"
				id="pdf-preview"
				aria-label="PDF Preview"
				title="{name} Document"
			>
				Aucun fichier sélectionné
			</object>
		{:else}
			<div>Aucun fichier sélectionné</div>
		{/if}
	</div>
</div>

<style>
	/* Assurez-vous que le PDF prend toute la hauteur et largeur de sa colonne */
	#pdf-preview {
		width: 100%;
		height: 100%;
	}
</style>
