<style lang="scss">
.container {
  h1 {
    margin-bottom: 3rem;
  }
}
.svg-totarabadge {
  svg {
    width: 150px;
  }
}
.fade-in-section {
  opacity: 0;
  transform: scale(0.8) translateY(10vh);
  visibility: hidden;
  transition: opacity 0.25s ease-out, transform 0.75s ease-out;
  will-change: scale, opacity, visibility;
  &.visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
}
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
      <div class="flex-group-row fade-in-section">
        <div>
          <span v-html="totarabadge" class="svg-totarabadge"></span>
        </div>
        <div style="flex: 1; margin-left: 2rem;">
          <blockquote>
            This innovative open source platform, winner of the 2019 Totara Best
            Technology and Media project award, was created in a Red Hat-Synegen
            partnership. Proving that innovation drives collaboration...Insert
            more about partnership here...
          </blockquote>
        </div>
      </div>
    </div>
    <div class="container fade-in-section">
      <h1>Features/benefits</h1>
      <div class="feature-grid">
        <FeatureCard>
          <div class="content">
            <span class="icon"><i class="far fa-smile-beam"></i></span>
            <!-- <span v-html="userfriendly" class="icon"></span> -->
            <span class="title">User-friendly</span>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <span class="icon"><i class="fas fa-box-open"></i></span>
            <!-- <span v-html="opensource" class="icon"></span> -->
            <span class="title">Open source</span>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <span class="icon"><i class="fas fa-cogs"></i></span>
            <!-- <span v-html="integrate" class="icon"></span> -->
            <span class="title">Integrates with popular systems</span>
            <span class="description"
              >Totara Learn, LinkedIn Learning, Allego, and Kaltura</span
            >
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <span class="icon"><i class="fas fa-binoculars"></i></span>
            <!-- <span v-html="trackprogress" class="icon"></span> -->
            <span class="title">Track learner progress</span>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <!-- <span class="icon"><i class="fas fa-child"></i></span> -->
            <span class="icon"><i class="fas fa-user-astronaut"></i></span>
            <!-- <span v-html="engaging" class="icon"></span> -->
            <span class="title">Engaging learner experience</span>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <span class="icon"><i class="fas fa-chart-bar"></i></span>
            <!-- <span v-html="measure" class="icon"></span> -->
            <span class="title">Measure impact</span>
          </div>
        </FeatureCard>
      </div>
    </div>
    <div class="container fade-in-section">
      <h1>What people are saying</h1>
      <div class="testimonial" style="margin-top: 2rem;">
        <div class="avatar">
          <Avatar
            size="xl"
            status="primary"
            imgUrl="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
          />
        </div>
        <div class="message right">
          <blockquote>
            “Red Hat is not only an open source software company but our core
            culture exudes open collaboration. Deploying Totara Learn was a huge
            step in moving to an open LMS platform. As we thought about the next
            chapter in our journey, we knew we needed to create an open learning
            ecosystem. A system that would allow us to continue to mold the
            learner experience to our unique needs and a platform that would
            mask the complexity of the many Learning tools we use to craft a
            rich learning experience. That was the inception of the Red Hat
            University and we were fortunate to find a partner in Synegen that
            was able to leverage the openness of Totara Learn's API, and help us
            build an open learning experience platform that will continue to
            deliver value to the business.”
          </blockquote>
        </div>
      </div>

      <p class="caption">
        <em class="text-primary">Tesh Patel</em>, Director, Learning
        Technologies and Platforms
      </p>
    </div>
    <div class="container fade-in-section">
      <h1 class="text-center light mb-ms12">
        Make learning your competitive advantage by integrating an award-winning
        open source learning experience platform that empowers organizations
        across the globe to excel. Be open for learning in days — not weeks.
      </h1>
      <div class="flex-group-row-c">
        <button class="success large" style="margin-right: 2rem;">
          Get started
        </button>
        <button class="large secondary">Demo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/components/libs/uiComponentUtilities';
import { addClass } from '@/components/libs/dom';

import Hero from '../components/layout/Hero';
import FeatureCard from '@/components/ui/molecules/FeatureCard';
import Avatar from '../components/ui/atoms/Avatar';
import TotaraBadge from '../assets/images/Totara-Badges_2019_Best-Technology-Media.svg';

import UserFriendly from '../assets/images/skateboard.svg';
import OpenSource from '../assets/images/connected.svg';
import Integrate from '../assets/images/api.svg';
import TrackProgress from '../assets/images/abacus.svg';
import Engaging from '../assets/images/abacus.svg';
import Measure from '../assets/images/mag-charts.svg';

let fadeInElements;

const handleScroll = (evt) => {
  for (let i = 0; i < fadeInElements.length; i++) {
    let el = fadeInElements[i];
    if (isElemVisible(el)) {
      addClass(el, 'visible');
      fadeInElements.splice(i, 1);
    }
  }
};

const isElemVisible = (el) => {
  let rect = el.getBoundingClientRect(),
    elemTop = rect.top + 100,
    elemBottom = rect.bottom;
  return elemTop < window.innerHeight && elemBottom >= 0;
};

export default {
  name: 'Home',
  components: { FeatureCard, Hero, Avatar },
  props: {
    p: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      totarabadge: TotaraBadge,
      userfriendly: UserFriendly,
      opensource: OpenSource,
      integrate: Integrate,
      trackprogress: TrackProgress,
      engaging: Engaging,
      measure: Measure,
    };
  },
  computed: {},
  methods: {},
  mounted() {
    fadeInElements = Array.from(
      document.getElementsByClassName('fade-in-section')
    );

    document.addEventListener('scroll', debounce(handleScroll), {
      passive: true,
    });
    handleScroll();
  },
};
</script>
