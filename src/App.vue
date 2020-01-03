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
  --gray-lightest: #f8f8f8;
  --gray-lighter: #eee;
  --gray-light: #e5e5e5;
  --gray: #ccc;
  --gray-dark: #555;
  --gray-darker: #333;
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
  background-color: var(--gray-lighter);
  font-family: 'Montserrat', sans-serif;
  line-height: 1.2;

  @supports not (grid-template-columns: subgrid) {
    &::after {
      content: '⚠️ Sois gentil, utilise un navigateur moderne, comme Firefox, ou Firefox.';
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
    }
  }
}

</style>
