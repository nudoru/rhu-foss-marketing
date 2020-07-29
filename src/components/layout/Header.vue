<template>
  <section role="banner" class="app-header">
    <div class="container-horizontal">
      <slot/>
    </div>
  </section>
</template>


<script type="text/jsx">

import {debounce} from "@/components/libs/uiComponentUtilities";
import {addClass, removeClass} from "@/components/libs/dom";

const storeScroll = (height)  => () => {
  let scroll = window.scrollY;
  document.documentElement.dataset.scroll = scroll;
  if(scroll > height) {
    addClass(document.getElementsByClassName('app-header')[0], 'scrolled');
  } else {
    removeClass(document.getElementsByClassName('app-header')[0], 'scrolled');
  }
};



export default {
  name      : "Header",
  props     : {
    p: {
      type   : Boolean,
      default: false
    }
  },
  data() {
    return {
      scrollY: 0
    };
  },
  computed: {},
  methods: {},
  mounted() {
    let height = document.getElementsByClassName('app-header')[0].offsetHeight;
    //html:not([data-scroll='0']) .className {}
    document.addEventListener('scroll', debounce(storeScroll(height)), { passive: true });
    storeScroll();
  }
};
</script>
