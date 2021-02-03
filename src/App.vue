<style lang="scss" scoped></style>

<template>
  <main class="app">
    <Header>
      <span class="start">
        <span v-html="logo" class="svg-logo"></span>
      </span>
      <span class="end">
        <a href="https://www.synegen.com/open-learning-platform#start" target="_blank">
        <button class="success" style="margin-right: 1rem;">Get started</button></a>
        <a href="https://openlearningplatform.org/demo"  target="_blank">
        <button class="secondary">Demo</button></a>
      </span>
    </Header>
    <Home />
    <!-- <Footer /> -->
  </main>
</template>

<script>
import Header from './components/layout/Header.vue';
import Content from './components/layout/Content';
import Home from './views/Home';
import Footer from './components/layout/Footer';
import Logo from './assets/images/olp-logo.svg';

export default {
  name: 'App',
  components: {
    Content,
    Header,
    Home,
    Footer,
  },
  data() {
    return {
      logo: Logo,
    };
  },
  methods: {},
  mounted() {
    console.log('App mounted');
  },
};
</script>
