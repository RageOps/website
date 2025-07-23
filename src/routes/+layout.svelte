<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav class="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <a href="/" class="text-xl font-bold text-gray-900 hover:text-blue-600">Devan Schneider</a>
      <div class="flex space-x-6">
        <a href="/" class="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
        <a href="/about" class="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
        <a href="/projects" class="text-gray-700 hover:text-blue-600 font-medium transition">Projects</a>
        <a href="/contact" class="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
      </div>
    </div>
  </div>
</nav>
<slot />
