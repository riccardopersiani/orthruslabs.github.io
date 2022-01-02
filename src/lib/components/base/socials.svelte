<script>
	import TelegramIcon from '$lib/svg/socials/telegram.svelte';
	import TwitterIcon from '$lib/svg/socials/twitter.svelte';
	import YouTubeIcon from '$lib/svg/socials/youtube.svelte';
	import GitHubIcon from '$lib/svg/socials/github.svelte';
	import EmailIcon from '$lib/svg/socials/email.svelte';
</script>

<div class="socials">
	<a
		id="twitter-btn"
		href={'https://twitter.com/r_persiani1'}
		class="btn btn-ghost btn-sm rounded-btn"
	>
		<TwitterIcon />
	</a>
	<a
		id="youtube-btn"
		href={'https://www.youtube.com/watch?v=kPa5QoN8jfA'}
		class="btn btn-ghost btn-sm rounded-btn"
	>
		<YouTubeIcon />
	</a>
	<a
		id="github-btn"
		href={'https://github.com/riccardopersiani'}
		class="btn btn-ghost btn-sm rounded-btn"
	>
		<GitHubIcon />
	</a>
	<a
		id="email-btn"
		href={'mailto:r.persiani@protonmail.com'}
		class="btn btn-ghost btn-sm rounded-btn"
	>
		<EmailIcon />
	</a>
	<a
		id="telegram-btn"
		href={'https://telegram.me/RiccardoPersiani'}
		class="btn btn-ghost btn-sm rounded-btn"
	>
		<TelegramIcon />
	</a>
</div>
