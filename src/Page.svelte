<script>
	import Question from "./Question.svelte";

	export let page = {
		id: "12345",
		name: "Page Name",
	};
	export let questions = [];
</script>

<main id={page.id}>
	<h2>{page.name}</h2>
	<ol>
		{#each questions as q (q.id)}
			<li>
				<Question question={q} />
			</li>
		{/each}
	</ol>
</main>

<style>
	main {
		margin-left: 1.5rem;
	}
</style>
