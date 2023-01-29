import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';

const config = {
	plugins: [sveltekit(), mkcert()],
	server: {
		https: true
	}
};

export default config;
