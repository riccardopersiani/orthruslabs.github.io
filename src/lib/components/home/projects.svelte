<script>
	import Card from '../base/card.svelte';
	import Section from '../layout/section.svelte';
	import ProjectsGrid from '$lib/components/layout/projects-grid.svelte';
	import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
	import OneByOneGrid from '$lib/components/layout/1x1-grid.svelte';
	import ExternalLinkIcon from '$lib/svg/external-link.svelte';
	import Github from '$lib/svg/socials/github.svelte';
	import Blobs from '../layout/blobs.svelte';
	import Tag from '../base/tag.svelte';
</script>

<section id="projects">
	<Section
		align="top"
		title="Projects"
		description="We like to architect, develop and deploy fun and crazy stuff on the blockchain and web3! We like to work on projects which share our ethic and valors."
	>
		<OneByOneGrid>
			<ProjectsGrid>
				<Card>
					<div slot="image">
						<img
							src="https://user-images.githubusercontent.com/10484858/143782448-7a87d5ee-97fe-47ce-b051-df9c1a6e50b4.png"
						/>
					</div>
					<div slot="content">
						<div class="title">
							DExhibition
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/the-nifty-lair/monorepo"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
							</div>
						</div>
						<div class="text">
							An NFT decentalized marketplace with incentives for curators
							<a class="project-post-button button secondary-light transparent" href={'#'}>
								Check Demo
							</a>
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Solidity</Tag>
							<Tag>Svelte</Tag>
							<Tag>NFTs</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<img
							src="https://play-lh.googleusercontent.com/5MWZLzRLOxy-jfwUgbU-0a7jkOCVv3Ye2dTVGNt38AhcKklD8fCCE6UHeekIGQM4SQc=w1016-h887-rw"
						/>
					</div>
					<div slot="content">
						<div class="title">
							Monolith
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/tokencard/contracts"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
								<a
									class="text-secondary"
									href="https://monolith.xyz/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							Visa Debit Card + Ethereum Wallet. Store and spent your token anywhere banklessly!
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web3</Tag>
							<Tag>Go</Tag>
							<Tag>Solidity</Tag>
							<Tag>Open Source</Tag>
						</div>
					</div>
				</Card>
				<Card>
					<div slot="image">
						<img src="https://miro.medium.com/max/1200/1*dWvkITn1gztlfxG5PZtaog.png" />
					</div>
					<div slot="content">
						<div class="title">
							Oraclize (now Provable Things)
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/provable-things"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
								<a
									class="text-secondary"
									href="https://provable.xyz/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							Blockchain-agnostic oracle service. The first Oracle on Ethereum Mainnet!
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Ethereum</Tag>
							<Tag>EOS</Tag>
							<Tag>Hyperledger Fabric</Tag>
						</div>
					</div>
				</Card>
			</ProjectsGrid>

			<ThreeByThreeGrid>
				<Card>
					<div slot="image">
						<img src="https://cryptonomist.ch/wp-content/uploads/2020/03/ptokens.jpg" />
					</div>
					<div slot="content">
						<div class="title">
							pTokens
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/provable-things"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
								<a
									class="text-secondary"
									href="https://ptokens.io/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">Cross-chain DeFi</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>DeFi</Tag>
							<Tag>Typescript</Tag>
							<Tag>Smart Contracts</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<img
							src="https://user-images.githubusercontent.com/6025418/126896988-bc53d8ee-2184-4e2a-a928-be7faf83a45e.png"
						/>
					</div>
					<div slot="content">
						<div class="title">
							Reaction$
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/2r1l/ethcc4-hackathon"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://mumbai.reactions.eth.link/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">NFT Social Network</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>HACKATHON WINNER!</Tag>
							<Tag>SOLIDITY</Tag>
							<Tag>Open Source</Tag>
						</div>
					</div>
				</Card>
				<Card>
					<div slot="image">
						<img
							src="https://images-platform.99static.com/_m0Ja6Le6d9nIUXiaNf23PE1BLQ=/0x0:1920x1920/500x500/top/smart/99designs-contests-attachments/117/117964/attachment_117964416"
						/>
					</div>
					<div slot="content">
						<div class="title">
							Gamejitsu
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/gamejitsu"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://gamejitsu.io/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">Async e-sport coaching platform</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>E-SPORTS</Tag>
							<Tag>GAMING</Tag>
							<Tag>Open Source</Tag>
						</div>
					</div>
				</Card>
			</ThreeByThreeGrid>
		</OneByOneGrid>
	</Section>
	<Blobs maxTop={5} minLeft={50} />
</section>

<style lang="scss">
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.links {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 15px;
			a {
				width: 30px;
				height: 30px;
				padding: 3px;

				&:hover {
					color: var(--primary-color);
					fill: var(--primary-color);
				}
			}
		}
	}

	.project-post-button {
		width: fit-content;
		margin: 10px auto 0;
		font-weight: 500;
	}
</style>
