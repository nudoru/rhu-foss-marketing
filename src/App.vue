<style lang="scss" scoped></style>

<template>
  <main class="app">
    <Header
      ><h1><i class="far fa-lightbulb"></i>RHU</h1>
      <h2>Starter</h2></Header
    >
    <Content>
      <Home />
    </Content>

    <Footer />
  </main>
</template>

<script>
import Header from './components/layout/Header.vue';
import Content from './components/layout/Content';
import Home from './views/Home';
import Footer from './components/layout/Footer';

export default {
  name: 'App',
  components: {
    Content,
    Header,
    Home,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log('App mounted');
  },
};
</script>
