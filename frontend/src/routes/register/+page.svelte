<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
	import Input from '$lib/components/Input.svelte';
	import Liquid from '$lib/components/Liquid.svelte';
	import Notification from '$lib/components/Notification.svelte';
</script>

<Container centered>
	<Notification outline>
		<h3>There is currently no public access</h3>
		<p>While we are still in ALPHA you need an access token to use this tool</p>
	</Notification>
	<div>
		<Card background={false}>
			<form>
				<section>
					<h2>Login</h2>
					<input placeholder="Access token" type="password" />
					<Button primary>Login</Button>
				</section>
			</form>
		</Card>
	</div>
</Container>

<style lang="scss">
	@import '$lib/style/app.scss';
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--size-5);
	}
</style>
