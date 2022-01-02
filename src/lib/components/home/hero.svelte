<section id="hero">
  <div id="hero-div"
    class="hero min-h-screen"
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
  }

  #hero-div {
    background-image: url("https://github.com/riccardopersiani/orthruslabs.github.io/blob/main/static/images/hero.jpg?raw=true");
  }
</style>
