<script>
  // Les données de compétences
  const skills = [
    {
      title: 'JavaScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      description: 'JavaScript est un langage de programmation principalement utilisé pour le développement web côté client.',
      projects: [
        { name: 'Projet A', link: 'https://example.com/projet-a' },
        { name: 'Cours en ligne JavaScript', link: 'https://example.com/cours-js' }
      ]
    },
    {
      title: 'Svelte',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
      description: 'Svelte est un framework JavaScript pour construire des interfaces utilisateur interactives.',
      projects: [
        { name: 'Portfolio', link: 'https://example.com/portfolio' },
        { name: 'Blog avec Svelte', link: 'https://example.com/blog-svelte' }
      ]
    },
    // Ajouter d'autres compétences ici
  ];
</script>

<style>
  .skills-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .skill {
    width: 95%;
    background: #f9f9f9;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .skill-header {
    display: flex;
    align-items: center;
  }

  .skill-logo {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  .skill-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  .skill-description {
    margin: 15px 0;
  }

  .project-list {
    list-style-type: none;
    padding: 0;
  }

  .project-list li {
    margin-bottom: 5px;
  }

  .project-list a {
    color: #0070f3;
    text-decoration: none;
  }

  .project-list a:hover {
    text-decoration: underline;
  }
</style>

<div class="skills-container">
  {#each skills as skill}
    <section id={skill.title.toLowerCase()} class="skill">
      <div class="skill-header">
        <img src={skill.logo} alt={skill.title} class="skill-logo" />
        <div class="skill-title">{skill.title}</div>
      </div>
      <div class="skill-description">{skill.description}</div>
      <ul class="project-list">
        {#each skill.projects as project}
          <li><a href={project.link} target="_blank" rel="noopener">{project.name}</a></li>
        {/each}
      </ul>
    </section>
  {/each}
</div>
