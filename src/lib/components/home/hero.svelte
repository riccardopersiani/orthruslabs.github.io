<section id="hero">
  <div
    class="hero min-h-screen"
    style="background-image: url(&quot;/static/images/hero.jpg&quot;);"
  >
    <div class="hero-overlay bg-opacity-20" />
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Building the next-generation finance
        </h1>
        <a id="projects-btn" href="#projects" class="btn btn-primary"
          >Projects</a
        >
        <a id="experience-btn" href="#experience" class="btn btn-primary">
          Experience
        </a>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../scss/breakpoints.scss";

  #hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    position: relative;

    @include for-phone-only {
      padding: 0px 0 50px;
    }

    .hello {
      text-align: center;
    }

    .intro {
      font-weight: 500;
      font-size: 1.4rem;
      width: min(100%, 440px);
      display: flex;
      flex-direction: column;

      .left {
        text-align: left;
      }
      .right {
        text-align: right;
      }

      @include for-phone-only {
        display: none;
      }
    }

    .ctas {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;

      a {
        flex: 0 0 180px;

        &#projects-btn {
          order: 1;
        }
        &#blog-btn {
          order: 2;
        }
        &#experience-btn {
          order: 3;
        }
      }

      @include for-phone-only {
        a {
          flex: 0 0 160px;

          &#projects-btn {
            order: 1;
          }
          &#blog-btn {
            order: 3;
          }
          &#experience-btn {
            order: 2;
          }
        }
      }
      @include for-iphone-se {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
