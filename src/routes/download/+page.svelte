<script>
	/** @type {string | null} */
	let selectedFile = null;
	/** @type {string | null} */
	let selectedFileName = null;
	/** @type {Record<string, boolean>} */
	let openFolders = {};

	let root = [
		{
			type: 'folder',
			name: 'CV / RESUME',
			files: [
				{
					type: 'file',
					name: 'CV de Yann Paillard.pdf',
					downloadPath: '/download/CV_de_Yann_Paillard.pdf'
				}
				//,
				//{
				//    type: 'file',
				//    name: 'Resume Yann Paillard.pdf',
				//    downloadPath: '/download/Resume_Yann_Paillard.pdf'
				//}
			]
		}
	];

	// Initialize openFolders with all folder names set to true
	root.forEach((folder) => {
		openFolders[folder.name] = true;
	});

	/**
	 * @param {{ type: string, name: string, downloadPath: string }} file
	 */
	function selectFile(file) {
		selectedFile = file.downloadPath;
		selectedFileName = file.name;
	}

	/**
	 * @param {string} folderName
	 */
	function toggleFolder(folderName) {
		openFolders[folderName] = !openFolders[folderName];
	}
</script>

<div class="flex flex-col md:flex-row h-screen">
	<!-- Colonne de l'arborescence des dossiers -->
	<div class="w-full md:w-1/4 lg:w-1/5 text-white overflow-auto p-4 bg-gray-900">
		{#each root as folder}
			<div class="folder">
				<div
					class="folder-name"
					role="button"
					tabindex="0"
					on:click={() => toggleFolder(folder.name)}
					on:keydown={(event) =>
						event.key === 'Enter' || event.key === ' ' ? toggleFolder(folder.name) : null}
				>
					<span class="folder-icon">{openFolders[folder.name] ? '📂' : '📁'}</span>
					<!-- Folder Icon -->
					{folder.name}
				</div>
				<div class:hidden={!openFolders[folder.name]}>
					{#each folder.files as file}
						{#if file.type === 'file'}
							<button class="file" on:click={() => selectFile(file)}>
								<span class="file-icon">📄</span>
								<!-- File Icon -->
								{file.name}
							</button>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<!-- Colonne de l'aperçu PDF -->
	<div class="w-full md:w-3/4 lg:w-4/5 flex flex-col justify-center items-center bg-gray-200 p-4">
		{#if selectedFile}
			<object data={selectedFile} type="application/pdf" id="pdf-preview" aria-label="PDF Preview">
				<p>
					Votre navigateur ne supporte pas l'affichage du PDF. Veuillez <a href={selectedFile}
						>télécharger le fichier</a
					> pour le visualiser.
				</p>
			</object>
			<div class="selected-file-name">Fichier sélectionné : {selectedFileName}</div>
			<a href={selectedFile} download>
				<button class="download-button">Télécharger le fichier</button>
			</a>
		{:else}
			<div class="text-center text-gray-600">Aucun fichier sélectionné</div>
		{/if}
	</div>
</div>

<style>
	#pdf-preview {
		width: 100%;
		height: 100%;
	}
	.file {
		cursor: pointer;
		color: #61dafb;
		padding: 8px;
		background: none;
		border: none;
		text-align: left;
		display: flex;
		align-items: center;
		transition: background 0.2s;
	}
	.file:hover {
		text-decoration: underline;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 5px;
	}
	.folder {
		margin-top: 15px;
		padding: 10px;
		border-radius: 8px;
		background: rgba(0, 0, 0, 0.2);
	}
	.folder-name {
		font-weight: bold;
		margin-bottom: 10px;
		color: #ffffff;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.folder-icon {
		margin-right: 8px;
	}
	.file-icon {
		margin-right: 8px;
	}
	.hidden {
		display: none;
	}
	.download-button {
		margin-top: 10px;
		padding: 10px 20px;
		background-color: #61dafb;
		color: #ffffff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background 0.2s;
	}
	.download-button:hover {
		background-color: #4aa3d5;
	}
	.selected-file-name {
		margin-top: 10px;
		font-weight: bold;
		color: #333;
	}
</style>
