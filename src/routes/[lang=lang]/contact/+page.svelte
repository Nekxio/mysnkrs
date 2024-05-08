<script xmlns="http://www.w3.org/1999/html">
	import { base } from '$app/paths';
	import LL, { locale } from '$i18n/i18n-svelte';
	import { enhance } from '$app/forms';
	import PhoneInput from '$lib/components/dashboard/PhoneInput.svelte';
</script>

<section>
	<div id="breadcrumbs" class="text-sm breadcrumbs mb-8">
		<ul>
			<li><a href="{base}/{$locale}">{$LL.pages.home()}</a></li>
			<li><a href="{base}/{$locale}/artists">{$LL.pages.contact()}</a></li>
		</ul>
	</div>
	<h1 class="text-4xl font-bold">{$LL.contact.title()}</h1>
</section>
<section>
	<form method="post" action="?/send" class="flex flex-col space-y-2 max-w-3xl" use:enhance>
		<p class="text-primary font-bold text-2xl">{$LL.contact.help()}</p>
		<label class="form-control" for="subject">
			<select class="select select-bordered w-full" name="subject">
				<option selected>{$LL.contact.option1()}</option>
				<option>{$LL.contact.optionOther()}</option>
			</select>
		</label>
		<label class="form-control" for="orderId">
			<span class="label">
				<span class="label-text">{$LL.contact.orderId()}</span>
			</span>
			<input
				type="text"
				id="orderId"
				name="orderId"
				class="input input-bordered w-full"
				placeholder="123456789"
				required
			/>
		</label>
		<div class="flex flex-row justify-between gap-x-12">
			<label class="form-control w-full" for="email">
				<span class="label">
					<span class="label-text">{$LL.account.auth.email()}</span>
				</span>
				<input
					type="email"
					id="email"
					name="email"
					class="input input-bordered w-full"
					placeholder="example@mail.com"
					required
				/>
			</label>
			<label class="form-control w-full" for="phone">
				<PhoneInput phoneNumber="" />
			</label>
		</div>
		<label class="form-control" for="message">
			<span class="label">
				<span class="label-text">{$LL.contact.message()}</span>
			</span>
			<textarea id="message" name="message" class="textarea textarea-bordered" placeholder="" required></textarea>
		</label>
		<label class="form-control" for="file">
			<span class="label">
				<span class="label-text">{$LL.contact.addFile()}</span>
			</span>
			<input type="file" name="file" class="file-input file-input-bordered file-input-primary w-full max-w-sm" />
		</label>
		<label class="form-control flex-row items-center" for="consent">
			<input type="checkbox" name="consent" class="checkbox checkbox-primary" />
			<span class="label ml-2">
				<span class="label-text">{$LL.contact.consent()}</span>
			</span>
		</label>
		<button type="submit" class="btn btn-primary !mt-6">Envoyer</button>
	</form>
</section>
