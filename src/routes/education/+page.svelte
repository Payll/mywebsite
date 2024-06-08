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
    border-color: transparent transparent #FFF transparent;
    top: -15px;
    left: 50%;
    margin-left: -10px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #FFF;
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
      content: " ";
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

<div class="whiteGradient w-full rounded-md relative items-center">
  <h1 class="text-4xl text-center lg:text-8xl lg:mb-5 text-black font-bold mt-5">Degrees & Jobs</h1>
  <div class="divider"></div>
  <div class="mb-5 text-2xl text-black">
    Discover my journey through education and professional milestones, showcasing the skills and experiences that shaped my career.
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
      <h2 class="text-xl font-semibold text-gray-800">👨‍💻 Software engineer & full stack developer<span class="expand-indicator">+</span></h2>
      <p class="text-gray-500">Sept 2024 - Dec 2024</p>
      <p class="text-gray-900">Full-stack development and maintenance of software architecture for a cloud IoT and an embedded solution.</p>
      <div class="expanded-content">
        <p class="text-black">As a Full Stack Developer, I work on both cloud-based and embedded IoT solutions, taking charge of development, maintenance, and adaptation of the system's software architecture, both of which follow a PUB/SUB (message-driven) architecture.</p>
        <div class="text-black text-lg font-bold my-4">Cloud Solution</div>
        <p class="text-black">For the cloud solution, I handle the backend using PHP and C++ and the frontend with Angular, ensuring a responsive and user-friendly experience. The system is monitored using ELK (Elasticsearch, Logstash, Kibana) and Grafana to maintain high levels of supervision and reliability. Additionally, I manage codec processing using JavaScript, Python, and PHP, and implement a JSON-to-JSON templating system using Twig.</p>
        <div class="text-black text-lg font-bold my-4">Embedded Solution</div>
        <p class="text-black">On the embedded solution side, I work primarily with C++ for backend development, incorporating various communication libraries such as Modbus, BACnet, and MQTT to facilitate efficient data exchange. Output control is managed through C and C++ to handle the embedded hardware communication seamlessly.</p>
      </div>
      <div class="language-logos">
        <img src="/icons/C.png" alt="React Logo">
        <img src="/icons/CPP.png" alt="Node.js Logo">
        <img src="/icons/PHP.png" alt="SQL Logo">
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container left" on:click={toggleExpand}>
    <div class="content">
      <h2 class="text-xl font-semibold text-gray-800">🎓 Engineer's degree in IT<span class="expand-indicator">+</span></h2>
      <p class="text-gray-600">Sep 2021 - Sep 2024</p>
      <p class="text-gray-500">Completed an engineering degree specializing in software and system design.</p>
      <div class="expanded-content">
        <p class="text-black">Studied advanced software engineering concepts, specializing in system design, networking, and cloud technologies. Completed multiple projects, including a web application for local businesses.</p>
      </div>
      <div class="language-logos">
        <img src="/icons/C.png" alt="Python Logo">
        <img src="/icons/C.png" alt="AWS Logo">
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container right" on:click={toggleExpand}>
    <div class="content">
      <h2 class="text-xl font-semibold text-gray-800">👨‍🏫 Software development engineering apprenticeship<span class="expand-indicator">+</span></h2>
      <p class="text-gray-600">Sep 2023 - Sep 2024</p>
      <p class="text-gray-500">Collaborated with a team to develop and refine features for an e-commerce platform.</p>
      <div class="expanded-content">
        <p class="text-black">Collaborated with a software development team to build new features and fix bugs for an e-commerce platform. Gained experience with agile methodologies and unit testing.</p>
      </div>
      <div class="language-logos">
        <img src="/icons/C.png" alt="JavaScript Logo">
        <img src="/icons/C.png" alt="Jest Logo">
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container right" on:click={toggleExpand}>
    <div class="content">
      <h2 class="text-xl font-semibold text-gray-800">👨‍🏫 Engineering Intern in Mobile Application Development<span class="expand-indicator">+</span></h2>
      <p class="text-gray-600">Jun 2023 - Sep 2023</p>
      <p class="text-gray-500">Contributed to mobile app features, focusing on enhancing UI/UX.</p>
      <div class="expanded-content">
        <p class="text-black">Developed features for an Android mobile application, implementing UI/UX best practices to improve user engagement. Worked with Java and Kotlin.</p>
      </div>
      <div class="language-logos">
        <img src="/icons/C.png" alt="Java Logo">
        <img src="/icons/C.png" alt="Kotlin Logo">
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container right" on:click={toggleExpand}>
    <div class="content">
      <h2 class="text-xl font-semibold text-gray-800">👨‍🏫 Assistant Quality Engineer<span class="expand-indicator">+</span></h2>
      <p class="text-gray-600">Jun 2022 - Sep 2022</p>
      <p class="text-gray-500">Assisted in quality assurance processes to enhance software reliability.</p>
      <div class="expanded-content">
        <p class="text-black">Assisted in the development of quality control processes to ensure software reliability. Worked on automation scripts and performed manual testing for critical releases.</p>
      </div>
      <div class="language-logos">
        <img src="/icons/C.png" alt="Python Logo">
        <img src="/icons/C.png" alt="Selenium Logo">
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container left" on:click={toggleExpand}>
    <div class="content">
      <h2 class="text-xl font-semibold text-gray-800">🎓 Two-year technical degree in Electrical Engineering and Industrial Computing<span class="expand-indicator">+</span></h2>
      <p class="text-gray-600">Sep 2019 - Sep 2021</p>
      <p class="text-gray-500">Gained hands-on experience in electrical systems and automation technologies.</p>
      <div class="expanded-content">
        <p class="text-black">Focused on industrial automation and electrical systems, gaining skills in PLC programming and control systems.</p>
      </div>
      <div class="language-logos">
        <img src="/icons/C.png" alt="PLC Logo">
        <img src="/icons/C.png" alt="C++ Logo">
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container right" on:click={toggleExpand}>
    <div class="content">
      <h2 class="text-xl font-semibold text-gray-800">👨‍🏫 Wiotys Production Automation Assistant<span class="expand-indicator">+</span></h2>
      <p class="text-gray-600">Apr 2021 - Aug 2021</p>
      <p class="text-gray-500">Worked on automation solutions to streamline production processes.</p>
      <div class="expanded-content">
        <p class="text-black">Worked on automation projects for production processes, developing scripts to optimize workflows. Learned about industry 4.0 technologies.</p>
      </div>
      <div class="language-logos">
        <img src="/icons/C.png" alt="Python Logo">
        <img src="/icons/C.png" alt="Industry 4.0 Logo">
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container left" on:click={toggleExpand}>
    <div class="content">
      <h2 class="text-xl font-semibold text-gray-800">🎓 Technological high school diplomas in Industry and Sustainable Development<span class="expand-indicator">+</span></h2>
      <p class="text-gray-600">Sep 2017 - Jul 2019</p>
      <p class="text-gray-500">Studied sustainable industrial practices and renewable energy technologies.</p>
      <div class="expanded-content">
        <p class="text-black">Gained foundational knowledge in sustainable industrial practices, renewable energy, and basics of industrial technology.</p>
      </div>
      <div class="language-logos">
        <img src="/icons/C.png" alt="Renewable Energy Logo">
        <img src="/icons/C.png" alt="Industry Logo">
      </div>
    </div>
  </div>
</div>

<!-- Add appropriate paths for logos and modify the logos for each container as per your requirements -->
