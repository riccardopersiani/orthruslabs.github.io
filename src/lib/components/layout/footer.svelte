<script>
	import Socials from '$lib/components/base/socials.svelte';
	import BlogIcon from '$lib/svg/blog.svelte';
</script>

<footer class="p-10 footer bg-base-200 text-base-content footer-center">
	<div class="grid grid-flow-col gap-4">
		<a id="blog-btn" href="/blog" class="btn btn-ghost btn-sm rounded-btn">
			<BlogIcon />
			Blog
		</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<Socials />
		</div>
	</div>
	<div>
		<p>Copyright © 2021 - All right reserved by Orthrus Industries Ltd</p>
	</div>
</footer>
