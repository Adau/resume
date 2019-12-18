<template>
  <div id="app">
    <Resume />
  </div>
</template>

<script>
import Resume from './components/Resume.vue'

export default {
  name: 'App',
  components: {
    Resume
  }
}
</script>

<style lang="scss">
@import '~reset-css/sass/reset';
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Source+Serif+Pro:400,600&display=swap');

:root {
  --white: #fff;
  --blue: #64b1f2;
  --gray-lighter: #f8f8f8;
  --gray-light: #e5e5e5;
  --gray: #555;
  --gray-dark: #333;
  --black: #000;
  --primary-color: var(--blue);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  color: #428bca;
}

body {
  background-color: #eee;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.2;
}
</style>
