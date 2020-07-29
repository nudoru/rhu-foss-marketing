<style lang="scss" scoped>

</style>

<template>
  <div>
    <Hero>
      <h1>Open for learning</h1>
      <h2 class="light">
        The Open Learning Platform, an open source learning experience platform
        (LXP) solution that helps [who] achieve both freedom to learn and
        freedom to innovate.
      </h2>
    </Hero>
    <div class="container">
      <h1 class="text-center light">
        Make learning your competitive advantage by integrating an award-winning
        open source learning experience platform that empowers organizations
        across the globe to excel. Be open for learning in days — not weeks.
      </h1>
      <div class="flex-group-row">
        <button>Get started</button>
        <button class="secondary">Demo</button>
      </div>
    </div>
    <div class="container">
      <h1>What is a learning experience platform?</h1>
      <p class="large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla
        mauris neque, ut maximus nisi tincidunt nec. Fusce blandit est et augue
        condimentum, suscipit hendrerit leo condimentum. Quisque ullamcorper
        rutrum massa id iaculis. Sed quis diam purus. Duis laoreet sem non
        commodo suscipit. Etiam lectus augue, porttitor eget ex sit amet,
        faucibus elementum lectus. Cras a ultrices augue. Nunc et ex sapien.
        Vivamus euismod eleifend tristique. Morbi nec lacus odio. Curabitur
        massa nisi, maximus vel dolor sed, pulvinar pretium ipsum. Sed sodales
        nibh eget purus euismod, quis hendrerit libero cursus. Cras eget feugiat
        orci. Sed sagittis ultricies vehicula. Integer eget nisl pretium, mattis
        magna vel, sodales velit. Morbi pretium molestie nulla.
      </p>
      <p class="large">
        Mauris nec elementum lectus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Curabitur in nisl
        ultricies, feugiat felis eget, ultrices elit. Integer condimentum
        viverra tellus nec ultricies. Cras accumsan tristique aliquam. Maecenas
        et mi sed quam malesuada rutrum non vitae tellus. Aenean cursus mauris
        ut metus luctus iaculis. Quisque nulla ante, ultrices sed eros sit amet,
        gravida volutpat dolor. Proin massa neque, pulvinar nec auctor ut,
        commodo non ante. Aenean lobortis augue in dui facilisis sollicitudin.
        Duis porttitor lectus quis urna porttitor, quis sodales risus congue.
        Sed vitae urna ac augue sagittis mollis.
      </p>
      <blockquote>
        This innovative open source platform, winner of the 2019 Totara Best
        Technology and Media project award, was created in a Red Hat-Synegen
        partnership. Proving that innovation drives collaboration...Insert more
        about partnership here...
      </blockquote>
    </div>
    <div class="container">
      <h1>Features/benefits</h1>
      <div class="feature-grid">
        <FeatureCard>
          <span class="icon"><i class="fas fa-users"></i></span>
          <span class="title">User-friendly</span>
        </FeatureCard>
        <FeatureCard>
          <span class="icon"><i class="fab fa-osi"></i></span>
          <span class="title">Open source</span>
        </FeatureCard>
        <FeatureCard>
          <span class="icon"><i class="fas fa-cogs"></i></span>
          <span class="title">Integrates with popular systems
          <em>(LMS, LinkedIn Learning, Allego, Kaltura, etc)</em></span>
        </FeatureCard>
        <FeatureCard>
          <span class="icon"><i class="fas fa-binoculars"></i></span>
          <span class="title">Track learner progress</span>
        </FeatureCard>
        <FeatureCard>
          <span class="icon"><i class="fas fa-child"></i></span>
          <span class="title">Engaging learner experience</span>
        </FeatureCard>
        <FeatureCard>
          <span class="icon"><i class="fas fa-chart-bar"></i></span>
          <span class="title">Measure impact</span>
        </FeatureCard>
      </div>


    </div>
    <div class="container">
      <h1>What people are saying</h1>
      <blockquote>
        “Red Hat is not only an open source software company but our core
        culture exudes open collaboration. Deploying Totara Learn was a huge
        step in moving to an open LMS platform. As we thought about the next
        chapter in our journey, we knew we needed to create an open learning
        ecosystem. A system that would allow us to continue to mold the learner
        experience to our unique needs and a platform that would mask the
        complexity of the many Learning tools we use to craft a rich learning
        experience. That was the inception of the Red Hat University and we were
        fortunate to find a partner in Synegen that was able to leverage the
        openness of Totara Learn's API, and help us build an open learning
        experience platform that will continue to deliver value to the
        business.”
      </blockquote>
      <p class="caption">
        <em>Tesh Patel</em>, Director, Learning Technologies and Platforms
      </p>
    </div>
  </div>
</template>

<script>
import Hero from '../components/layout/Hero';
import GridAuto from '../components/ui/molecules/GridAuto';
import FeatureCard from "@/components/ui/molecules/FeatureCard";
export default {
  name: 'Home',
  components: {FeatureCard, Hero, GridAuto },
  props: {
    p: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
