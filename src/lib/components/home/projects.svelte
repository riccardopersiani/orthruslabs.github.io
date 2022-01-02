<script>
  import Card from "../base/card.svelte";
  import Section from "../layout/section.svelte";
  import ProjectsGrid from "$lib/components/layout/projects-grid.svelte";
  import ThreeByThreeGrid from "$lib/components/layout/3x3-grid.svelte";
  import OneByOneGrid from "$lib/components/layout/1x1-grid.svelte";
  import ExternalLinkIcon from "$lib/svg/external-link.svelte";
  import Github from "$lib/svg/socials/github.svelte";
  import Blobs from "../layout/blobs.svelte";
  import Image from "../base/image.svelte";
  import Tag from "../base/tag.svelte";
</script>

<section id="projects">
  <Section
    align="top"
    title="Projects"
    description="I like to build some small projects when learning. Technologies are varied and so are their purposes. Most of them are open source!"
  >
    <OneByOneGrid>
      <ProjectsGrid>
        <Card>
          <div slot="image">
            <Image
              path="projects"
              filename="personal-website"
              alt="Personal Website"
            />
          </div>
          <div slot="content">
            <div class="title">
              Museum of Nifty Art
              <div class="links">
                <a
                  class="text-secondary"
                  href="https://github.com/matfantinel/matfantinel.github.io"
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

              <a
                class="project-post-button button secondary-light transparent"
                href={'#'}
              >
                Check Demo
              </a>
            </div>
          </div>
          <div slot="footer">
            <div class="tags">
              <Tag>Solidity</Tag>
              <Tag>Svelte</Tag>
            </div>
          </div>
        </Card>

        <Card>
          <div slot="image">
            <Image path="projects" filename="moneta" alt="Moneta" />
          </div>
          <div slot="content">
            <div class="title">
              Monolith
              <div class="links">
                <a
                  class="text-secondary"
                  href="https://github.com/matfantinel/moneta"
                  target="_blank"
                  rel="noopener"
                  title="Open project on GitHub"
                >
                  <Github />
                </a>

                <a
                  class="text-secondary"
                  href="https://appcenter.elementary.io/com.github.matfantinel.moneta/"
                  target="_blank"
                  rel="noopener"
                  title="Open site"
                >
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div class="text">Cross-chain defi bridge</div>
          </div>
          <div slot="footer">
            <div class="tags">
              <Tag>Vala</Tag>
              <Tag>GTK</Tag>
              <Tag>Desktop</Tag>
              <Tag color="secondary">Open Source</Tag>
            </div>
          </div>
        </Card>
        <Card>
          <div slot="image">
            <Image path="projects" filename="gestek" alt="Gestek" />
          </div>
          <div slot="content">
            <div class="title">
              Oraclize (now Provable Things)
              <div class="links">
                <a
                  class="text-secondary"
                  href="https://gestek.com.br/"
                  target="_blank"
                  rel="noopener"
                  title="Open site"
                >
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div class="text">Cross-chain blockchain oracle</div>
          </div>
          <div slot="footer">
            <div class="tags">
              <Tag>Angular</Tag>
              <Tag>PWA</Tag>
            </div>
          </div>
        </Card>
      </ProjectsGrid>

      <ThreeByThreeGrid>
        <Card>
          <div slot="image">
            <Image path="projects" filename="moneta" alt="Moneta" />
          </div>
          <div slot="content">
            <div class="title">
              pNetwork
              <div class="links">
                <a
                  class="text-secondary"
                  href="https://github.com/matfantinel/moneta"
                  target="_blank"
                  rel="noopener"
                  title="Open project on GitHub"
                >
                  <Github />
                </a>

                <a
                  class="text-secondary"
                  href="https://appcenter.elementary.io/com.github.matfantinel.moneta/"
                  target="_blank"
                  rel="noopener"
                  title="Open site"
                >
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div class="text">Cross-chain defi bridge</div>
          </div>
          <div slot="footer">
            <div class="tags">
              <Tag>Vala</Tag>
              <Tag>GTK</Tag>
              <Tag>Desktop</Tag>
              <Tag color="secondary">Open Source</Tag>
            </div>
          </div>
        </Card>

        <Card>
          <div slot="image">
            <Image path="projects" filename="moneta" alt="Moneta" />
          </div>
          <div slot="content">
            <div class="title">
              Reaction$
              <div class="links">
                <a
                  class="text-secondary"
                  href="https://github.com/matfantinel/moneta"
                  target="_blank"
                  rel="noopener"
                  title="Open project on GitHub"
                >
                  <Github />
                </a>

                <a
                  class="text-secondary"
                  href="https://appcenter.elementary.io/com.github.matfantinel.moneta/"
                  target="_blank"
                  rel="noopener"
                  title="Open site"
                >
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div class="text">Cross-chain defi bridge</div>
          </div>
          <div slot="footer">
            <div class="tags">
              <Tag>Vala</Tag>
              <Tag>GTK</Tag>
              <Tag>Desktop</Tag>
              <Tag color="secondary">Open Source</Tag>
            </div>
          </div>
        </Card>
        <Card>
          <div slot="image">
            <Image path="projects" filename="moneta" alt="Moneta" />
          </div>
          <div slot="content">
            <div class="title">
              Gamejitsu
              <div class="links">
                <a
                  class="text-secondary"
                  href="https://github.com/matfantinel/moneta"
                  target="_blank"
                  rel="noopener"
                  title="Open project on GitHub"
                >
                  <Github />
                </a>

                <a
                  class="text-secondary"
                  href="https://appcenter.elementary.io/com.github.matfantinel.moneta/"
                  target="_blank"
                  rel="noopener"
                  title="Open site"
                >
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div class="text">Cross-chain defi bridge</div>
          </div>
          <div slot="footer">
            <div class="tags">
              <Tag>Vala</Tag>
              <Tag>GTK</Tag>
              <Tag>Desktop</Tag>
              <Tag color="secondary">Open Source</Tag>
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
