<script lang="ts">
	import type { SneakersComment } from '../../../types/sneakers';
	import StarIcon from '$lib/components/icons/StarIcon.svelte';
	import dayjs from 'dayjs';

	export let comment: SneakersComment;
</script>

<div class="card card-side rounded-xl bg-base-200 w-auto">
	<figure class="w-1/2">
		<img src={comment.picture} alt="item.name" class="aspect-square h-full object-cover" />
	</figure>
	<div class="card-body w-1/2">
		<div class="flex flex-col md:flex-row justify-start md:justify-between gap-2 md:gap-0">
			<div class="flex flex-row">
				{#each Array(comment.stars) as _}
					<StarIcon fill={true} />
				{/each}
				{#each Array(5 - comment.stars) as _}
					<StarIcon fill={false} />
				{/each}
			</div>
			<p class="md:text-right">
				{dayjs(comment.date).format('L')}
			</p>
		</div>
		<p class="card-title text-sm text-primary md:text-xl">
			{comment.userName}
		</p>
		<div>
			<p class="text-sm line-clamp-6">
				{comment.comment}
			</p>
		</div>
	</div>
</div>
