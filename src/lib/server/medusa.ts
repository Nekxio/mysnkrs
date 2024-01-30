import { medusaBackendUrl } from '$lib/env';
import { MedusaClient } from 'sveltekit-medusa-client';
export default new MedusaClient(medusaBackendUrl, {
	retry: 0,
	persistentCart: true
});
