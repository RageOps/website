import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/website' : ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore missing links
				if (message.includes('Not found')) {
					return;
				}
				// otherwise, fail the build
				throw new Error(message);
			}
		}
	}
};

export default config;
