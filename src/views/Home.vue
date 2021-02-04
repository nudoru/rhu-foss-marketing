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
.container-hero-overlap {
  // &:before {
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 5rem;
  //   background: rgba($tertiary-color, 1);
  //   clip-path: polygon(0% 0, 100% 0, 100% calc(5rem - 50px), 0% 5rem);
  // }
}
.fade-in-section {
  opacity: 0;
  transform: scale(0.8) translateY(2rem);
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
  <Content>
    <Hero>
      <h1>Open for learning</h1>
      <h2 class="light">
        The Open Learning Platform, an open source learning experience platform
        (LXP) solution that helps learning teams achieve both freedom to learn
        and freedom to innovate.
      </h2>
    </Hero>
    <section class="container-hero-overlap">
      <h1>What is a learning experience platform?</h1>
      <p class="large">
        A learning experience platform (LXP) provides a personalized, online
        learning experience for users, typically employees at large enterprises.
        It consolidates disparate learning resources into a single portal. These
        days, learning can happen anywhere and in many forms. An LXP helps
        employees discover learning opportunities, offers ways to enhance them,
        and manages all their learning.
      </p>
    </section>
    <section class="container fade-in-section">
      <div class="flex-group-row">
        <div>
          <span v-html="totarabadge" class="svg-totarabadge"></span>
        </div>
        <div style="flex: 1; margin-left: 2rem;">
          <blockquote>
            This innovative open source platform, winner of the
            <a href="https://www.totaralearning.com/customer-stories/red-hat"
              >2019 Totara Best Technology and Media project award</a
            >, was created in a Red Hat-Synegen partnership. Proving that
            open collaboration drives innovation.
          </blockquote>
        </div>
      </div>
    </section>
    <section class="container fade-in-section">
      <h1>Features/benefits</h1>
      <div class="feature-grid">
        <FeatureCard>
          <div class="content">
            <span v-html="featureIcons[0]" class="icon"></span>
            <span class="title">Open source</span>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <span v-html="featureIcons[1]" class="icon"></span>
            <span class="title">Upgrade safe</span>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <span v-html="featureIcons[2]" class="icon"></span>
            <span class="title">Rapid deployment</span>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <span v-html="featureIcons[3]" class="icon"></span>
            <span class="title">Unique experience</span>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <span v-html="featureIcons[4]" class="icon"></span>
            <span class="title">Extended functionality</span>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div class="content">
            <span v-html="featureIcons[5]" class="icon"></span>
            <span class="title">Easily integrated</span>
          </div>
        </FeatureCard>
      </div>
    </section>
    <section class="container fade-in-section">
      <h1>What people are saying</h1>
      <div class="testimonial" style="margin-top: 2rem;">
        <div class="avatar">
          <span class="avatar"
            ><span class="avatar-primary-xl"
              ><img
                src="@/assets/images/michael.jpg"
                alt="Michael Cannon" /></span
          ></span>
        </div>
        <div class="message right">
          <blockquote>
            “Learning is about sustained behavior change that improves outcomes.
            It's very hard work. An open source learning infrastructure
            certainly makes it a little bit easier.”
          </blockquote>
        </div>
      </div>
      <p class="caption">
        <em class="text-primary">Michael Cannon</em>, Sr. Director, Red Hat
        University
      </p>
      <div class="testimonial" style="margin-top: 2rem;">
        <div class="avatar">
          <span class="avatar"
            ><span class="avatar-primary-xl"
              ><img src="@/assets/images/tesh.jpg" alt="Tesh Patel" /></span
          ></span>
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
    </section>
    <section class="container fade-in-section">
      <h1 class="text-center light mb-ms12">
        Make learning your competitive advantage by integrating an award-winning
        open source learning experience platform that empowers organizations
        across the globe to excel. Be open for learning in days —not weeks.
      </h1>
      <div class="flex-group-row-c">
        <a href="https://www.synegen.com/open-learning-platform#start"  target="_blank"><button class="success large" style="margin-right: 2rem;" >
          Get started
        </button></a>
        <a href="https://openlearningplatform.org/demo"  target="_blank">
        <button class="large secondary">Demo</button></a>
      </div>
    </section>
    <section class="container fade-in-section">
      <p>
        While Red Hat has partnered with Synegen to create and open source the
        Open Learning Platform, this is not a supported Red Hat product.
      </p>
    </section>
  </Content>
</template>

<script>
import { debounce } from '@/components/libs/uiComponentUtilities';
import { addClass } from '@/components/libs/dom';

import Content from '../components/layout/Content';
import Hero from '../components/layout/Hero';
import FeatureCard from '@/components/ui/molecules/FeatureCard';
import TotaraBadge from '../assets/images/Totara-Badges_2019_Best-Technology-Media.svg';

import FeatureIcon1 from '../assets/images/001-coding.svg';
import FeatureIcon2 from '../assets/images/035-testing.svg';
import FeatureIcon3 from '../assets/images/040-timer.svg';
import FeatureIcon4 from '../assets/images/045-diamond.svg';
import FeatureIcon5 from '../assets/images/023-cms.svg';
import FeatureIcon6 from '../assets/images/042-solution.svg';

let fadeInElements;

const handleScroll = (evt) => {
  fadeInElements = fadeInElements.reduce((acc, c) => {
    if (isElemVisible(c)) {
      addClass(c, 'visible');
    } else {
      acc.push(c);
    }
    return acc;
  }, []);
};

const isElemVisible = (el) => {
  let rect = el.getBoundingClientRect(),
    elemTop = rect.top + 100,
    elemBottom = rect.bottom;
  return elemTop < window.innerHeight && elemBottom >= 0;
};

export default {
  name: 'Home',
  components: { Content, FeatureCard, Hero },
  props: {
    p: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      totarabadge: TotaraBadge,
      featureIcons: [
        FeatureIcon1,
        FeatureIcon2,
        FeatureIcon3,
        FeatureIcon4,
        FeatureIcon5,
        FeatureIcon6,
      ],
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
