<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
	import { onMount } from 'svelte';
	import Input from '$lib/components/Input.svelte';
	import Liquid from '$lib/components/Liquid.svelte';
	import Notification from '$lib/components/Notification.svelte';
	import jQuery from 'jquery';

	let token: string = '';
	let msg: string | undefined = undefined;
	let history: {
		msg: string, ai: boolean
	}[] = [];

	onMount(() => {
		token = localStorage.getItem('token') ?? '';
	});

	function sendRequest() {
		if (!msg || msg.length == 0) {
			return;
		}

		// TODO: Loading animation!
		history.push({
			msg: msg,
			ai: false
		});

		jQuery.post("https://" + window.location.hostname + "/api/chat", {
			history: history,
			token: token
		}).done(function (data: any) {
			history = data;
			msg = "";
		});
	}
	function keyUp (e: { key: string; keyCode: number; }) {
		if (e.key === 'Enter' || e.keyCode === 13) {
			sendRequest();
		}
	};
</script>

<Container centered>
	<p>
		<Card background={false}>
			<form>
				<section>
					<h2>Chatbot</h2>
						{#each history as { msg, ai }}
							<h5 class={ai ? 'ai' : ''}>{msg}</h5>
							<br />
						{/each}
						<input id="chatbot-input" type="text" placeholder="Type your message here..." bind:value={msg} on:keyup={keyUp} />
						<Button on:click={sendRequest}>Send</Button>
				</section>
			</form>
		</Card>
	</p>
</Container>

<style lang="scss">
	@import '$lib/style/app.scss';
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--size-5);
	}
	textarea {
		width: 100%;
		height: 50vh;
	}
	.ai {
		font-weight: bold;
	}
</style>
