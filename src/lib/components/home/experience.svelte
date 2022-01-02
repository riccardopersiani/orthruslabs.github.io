<script>
	import Card from '$lib/components/base/card.svelte';
	import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import LowAccentHighlight from '$lib/components/style/low-accent-highlight.svelte';
	import Tag from '../base/tag.svelte';

	const careerStart = new Date(2017, 9, 1);
	const yearsOfExperience = Math.abs(
		new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
	);

	const entries = [
		{
			id: 'freelancer',
			title: 'Smart Contract Design & Development',
			jobTitle: '',
			timeframe: '',
			description: 'Built smart contract on many different blockchains',
			tags: [
				{
					color: 'primary',
					text: 'Ethereum and EVM-compatible'
				},
				{
					color: 'primary',
					text: 'EOS'
				},
				{
					color: 'primary',
					text: 'Hyperledger Fabric'
				}
			]
		},
		{
			id: 'logitix',
			title: 'NFTs',
			jobTitle: '',
			timeframe: '',
			description:
				'Deep knowledge of NFTs and Marketplaces (OpenSea, Rarible). Built NFT platforms and deployed NFT collections. NFT fund management.',
			tags: [
				{
					color: 'primary',
					text: 'ERC721'
				},
				{
					color: 'primary',
					text: 'ERC1155'
				},
				{
					color: 'secondary',
					text: 'OpenSea'
				}
			]
		},
		{
			id: 'sige',
			title: 'HW & SW Wallet security',
			jobTitle: '',
			timeframe: '',
			description: 'Professional and secure setup of companies keys and wallet. Multisigs.',
			tags: [
				{
					color: 'primary',
					text: 'Ledger'
				},
				{
					color: 'primary',
					text: 'Gnosis Multisig'
				},
				{
					color: 'primary',
					text: 'Fireblocks'
				}
			]
		},
		{
			id: 'promob',
			title: 'Analysis and R&D',
			jobTitle: '',
			timeframe: '',
			description:
				'Technical analisys of blockchains, stablecoins, DeFi, tokens, security. Technical writing skills.',
			tags: [
				{
					color: 'primary',
					text: 'Whitepapers'
				},
				{
					color: 'secondary',
					text: 'R&D Reports'
				}
			]
		},
		{
			id: 'promob2',
			title: 'SC Audits',
			jobTitle: '',
			timeframe: '',
			description: 'Smart contract audit tools suites.',
			tags: [
				{
					color: 'primary',
					text: 'Security'
				}
			]
		},
		{
			id: 'promob2',
			title: 'Articles review',
			jobTitle: '',
			timeframe: '',
			description: 'Reviewing and drafting of articles on the crypto space.',
			tags: [
				{
					color: 'primary',
					text: 'Blog'
				},
				{
					color: 'primary',
					text: 'Journals'
				}
			]
		},
		{
			id: 'promob2',
			title: 'Workshops and Speakers',
			jobTitle: '',
			timeframe: '',
			description:
				'Speakers at major crypto conferences, events and meetups. Workshop handled at top level universities.',
			tags: [
				{
					color: 'primary',
					text: 'Conferences'
				},
				{
					color: 'secondary',
					text: 'Workshops'
				}
			]
		},
		{
			id: 'promob2',
			title: 'Tokens & Stablecoin Design',
			jobTitle: '',
			timeframe: '',
			description: 'Design, development and deploy of tokens on the major blockchains.',
			tags: [
				{
					color: 'primary',
					text: 'ERC20'
				}
			]
		}
	];
</script>

<section id="experience">
	<Section
		align="right"
		title="Crypto Work Experience"
		description="Over the past {yearsOfExperience}+ years, we have worked on a lot of cool projects in the blockchain space."
		buttonText="View Resume"
		buttonUrl="/resume"
		buttonColor="secondary"
	>
		<TwoByTwoGrid>
			{#each entries as entry}
				<Card>
					<div slot="content">
						<div class="title">
							<LowAccentHighlight id={entry.id}>{entry.title}</LowAccentHighlight>
						</div>
						<p>{entry.jobTitle}</p>
						<div class="note">{entry.timeframe}</div>
						<div class="text justify">
							{entry.description}
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							{#each entry.tags as tag}
								<Tag>{tag.text}</Tag>
							{/each}
						</div>
					</div>
				</Card>
			{/each}
		</TwoByTwoGrid>
	</Section>
</section>

<style lang="scss">
	:global(#freelancer) {
		--bg-color: var(--freelancer-color);
	}
	:global(#logitix) {
		--bg-color: var(--logitix-color);
	}
	:global(#sige) {
		--bg-color: var(--sige-color);
	}
	:global(#promob) {
		--bg-color: var(--promob-color);
	}
</style>
