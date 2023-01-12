<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
	import Liquid from '$lib/components/Liquid.svelte';
</script>

<section class="hero">
	<Container>
		<div class="content">
			<div>
				<h1>FIRST AID<br />FOR<br />STALKING VICTIMS</h1>
				<a href="/register"><Button>Try Now</Button></a>
			</div>
			<Liquid />
		</div>
	</Container>
</section>

<div class="spacer-m" />
<Container>
	<section>
		<h2>What is stalking?</h2>
		<p>
			Stalking is a crime in which a person is intentionally and repeatedly harassed and pursued.
			It can involve phone calls, messages, lurking, following, SMS messages, emails, letters,
			gifts, threats, insults, property damage, and coercion.
			<b>Cyberstalking</b> refers to stalking in the digital world, such as through emails, messaging services,
			chats, and social media. The consequences of stalking can include psychological stress symptoms
			such as sleep problems, nightmares, gastrointestinal problems, concentration problems, fear, panic attacks,
			depression, cardiovascular disorders, and limitations on daily life. It is important for those affected
			to <b>seek help</b> in order to end the stalking and restore their safety. We want to help you with that!
		</p>
	</section>
	<section>
		<h2>What we offer?</h2>
		<p>
			Introducing StalkingAId, the innovative <b>AI-powered digital assistant</b> that helps
			victims of stalking with <b>a empathic first point of contact</b> which provides relevant information. With StalkingAId, you'll
			have someone who listens to you anonymously, informs about possible helplines and helps take immediate action.
		</p>
	</section>
	<section>
		<h2>How it works</h2>
		<p>
			StalkingAId works by ingesting the user requests using predefined information about stalking and NLP.
			Our system then generates a personalized and empathic reply, <b>taking the chat history into account</b>.
			It naturally feels like a friend to talk to, just without the compulsion to share personal information with anyone.
			With StalkingAId, you can trust that your personal information is always kept private.
		</p>
	</section>
	<section>
		<p>
			Our team at StalkingAId is passionate about using technology to solve real-world problems, and
			that's how we came together at the <a class="styled" href="https://academy.unternehmertum.de/programs/tech-challenge" target="_blank" rel="noreferrer"
				><b>Tech Challenge</b></a>. We recognized the need for a more digitalized and internationalized way for victims of stalking to be
			informed about aid, and we were determined to create a solution.
		</p>
	</section>

	<section>
		<Card>
			<h2>Try the ALPHA</h2>
			<p>If you have an access token for the ALPHA phase, you can try StalkingAId today</p>
			<br />
			<a href="/register"><Button>Get Started</Button></a>
		</Card>
	</section>
</Container>

<style lang="scss">
	@import '$lib/style/app.scss';

	.spacer-m {
		margin-bottom: var(--spacing-large);
	}

	.hero {
		width: 100%;
		margin-top: -5rem;
		padding-top: var(--size-5) 0;
		background-color: rgba(var(--color-primary-raw), 0.2);

		h1 {
			font-size: 2rem;

			@media (min-width: $breakpoint-small) {
				font-size: 5rem;
			}
		}

		:global(.container) {
			min-height: 95vh;
			justify-content: center;
		}

		.content {
			display: flex;
			margin-top: var(--size-10);

			flex-direction: column-reverse;
			align-items: center;
			justify-content: center;
			text-align: center;
			@media (min-width: $breakpoint-small) {
				text-align: left;
				justify-content: flex-start;
				gap: var(--size-12);
				flex-direction: row;
			}
		}
	}
</style>
