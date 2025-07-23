<script>
  const projects = [
    {
      title: 'Senior Design Project',
      description: 'I worked alongside a team of my peers on a project for the NC Department of Health and Human Services to design a net new inventory management application.',
      tech: ['React (Vite)', 'ASP.Net', 'MariaDB', 'Docker', 'Nginx'],
      link: '/projects/senior-design',
      image: '/project1.jpg'
    },
    {
      title: 'Formula SAE Driver Information Display',
      description: 'This Driver Information Display (DIS) is an Arduino powered TFT display that displays important information to the driver of the Formula car during operation.',
      tech: ['Arduino', 'PCB Design', 'C++', 'CAD'],
      link: '/projects/formula-sae-dis',
      image: '/project2.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website, built with SvelteKit and Tailwind CSS, showcasing my work and expertise.',
      tech: ['SvelteKit', 'Tailwind CSS'],
      link: '/projects/portfolio-website',
      image: '/project3.jpg'
    }
  ];
</script>

<section class="min-h-screen py-12 px-4 bg-white">
  <div class="max-w-5xl mx-auto">
    <header class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">Portfolio Projects</h1>
      <p class="text-lg text-gray-500 mb-4">A curated selection of my work in software engineering, automation, and web development.</p>
      <div class="flex justify-center">
        <span class="inline-block w-24 h-1 rounded bg-gradient-to-r from-gray-200 via-blue-500 to-gray-200"></span>
      </div>
    </header>
    <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each projects as project}
        <div class="bg-white rounded-xl shadow-md p-6 flex flex-col border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
          {#if project.image}
            <img src={project.image} alt={project.title} class="w-full h-40 object-cover rounded-md mb-4 border border-gray-100" />
          {/if}
          <h2 class="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
          <p class="text-gray-700 mb-4">{project.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            {#each project.tech as tech}
              <span class="bg-gray-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">{tech}</span>
            {/each}
          </div>
          <a
            class="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition text-center"
            href={project.link}
          >
            View Project
          </a>
        </div>
      {/each}
    </div>
  </div>
</section> 