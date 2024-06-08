<script>
	export let name;
	export let downloadPath;
</script>

<a href={downloadPath} download={name} class="file-link">
    <span style="background-image: url(file-line.svg)">{name}</span>
</a>

<style>
	.file-link {
        padding: 0 0 0 1.5em;
        background: 0 0.1em no-repeat;
        background-size: 1em 1em;
        color: #ffffff;
        cursor: pointer;
        text-decoration: none;
    }
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
        color: #ffffff;
	}
</style>
