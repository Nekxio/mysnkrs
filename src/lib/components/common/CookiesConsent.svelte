<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { browser } from '$app/environment';
	import dayjs from 'dayjs';

	let cookiesAccepted: boolean = false;
	const showModal = (): void => {
		if (browser) {
			const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
			modal.showModal();
		}
	};

	function setCookie(name: string, value: string) {
		let expires = dayjs().add(13, 'month').toDate().toUTCString();
		document.cookie = name + '=' + value + ';' + 'expires=' + expires + ';path=/';
	}

	const acceptCookies = (): void => {
		if (browser) {
			setCookie('cookies_accepted', 'true');
			cookiesAccepted = true;
			const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
			modal.close();
		}
	};

	$: cookiesAccepted = browser && document.cookie.includes('cookies_accepted=true');
</script>

<div
	class="fixed bottom-0 left-1/2 w-screen h-fit -translate-x-1/2 transform overflow-hidden bg-base-200 px-8 py-4 flex flex-row z-50 items-center"
	class:hidden={cookiesAccepted}
>
	<div class="flex flex-col space-4 w-1/2">
		<p class="text-primary text-xl font-bold">{$LL.cookies.title()}</p>
		<p class="text-neutral">{$LL.cookies.description()}</p>
	</div>
	<div class="flex flex-row justify-end gap-4 w-1/2">
		<button class="btn btn-primary uppercase" on:click={showModal}>{$LL.cookies.settingsLabel()}</button>
		<button class="btn btn-primary uppercase" on:click={acceptCookies}>{$LL.cookies.acceptLabel()}</button>
	</div>
</div>

<dialog id="my_modal_1" class="modal">
	<div class="modal-box w-full max-w-6xl">
		<div class="flex flex-row justify-between items-center gap-6">
			<label class="cursor-pointer label">
				<input
					type="checkbox"
					class="toggle toggle-primary disabled:bg-primary disabled:border-primary disabled:opacity-60"
					checked
					disabled
				/>
			</label>
			<div>
				<h3 class="font-bold text-lg">{$LL.cookies.necessary()}</h3>
				<p class="py-4">{$LL.cookies.necessaryDescription()}</p>
			</div>
		</div>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn btn-primary uppercase" on:click={acceptCookies}>{$LL.cookies.acceptLabel()}</button>
			</form>
		</div>
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
	</div>
</dialog>
