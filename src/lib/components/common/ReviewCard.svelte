<script lang="ts">
	import type { Review } from 'sveltekit-medusa-client';

	export let review: Review;
</script>

<div class="card card-side rounded-xl bg-base-200 w-auto">
	<figure class="w-1/2">
		<img src="https://picsum.photos/seed/picsum/200/300" alt="item.name" class="aspect-square h-full object-cover" />
	</figure>
	<div class="card-body w-1/2">
		<!--<div class="flex flex-col md:flex-row justify-start md:justify-between gap-2 md:gap-0">
			<div class="flex flex-row">
				{#each Array(review.stars) as _}
					<StarIcon fill={true} />
				{/each}
				{#each Array(5 - review.stars) as _}
					<StarIcon fill={false} />
				{/each}
			</div>
			<p class="md:text-right">
				{dayjs(review.).format('L')}
			</p>
		</div>-->
		<p class="card-title text-sm text-primary md:text-xl">
			{review.display_name}
		</p>
		<div>
			<p class="text-sm line-clamp-6">
				{review.content}
			</p>
		</div>
	</div>
</div>
