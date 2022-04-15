<template>
  <div class="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Quantify";
  src: local("Quantify"), url(../Fonts/quantify/Quantify.ttf) format("truetype");
  font-family: "Roasted";
  src: local("Roasted"), url(../Fonts/roasted/Roasted.ttf) format("truetype");
  font-family: "Rodondo";
  src: local("Rodondo"), url(../Fonts/rodondo/Rodondo.otf) format("truetype");
}

:root {
  --primary: #ffc107;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #24252a;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: none;
}
body {
  background: var(--light);
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
