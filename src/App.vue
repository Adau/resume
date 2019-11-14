<template>
  <div id="app">
    <Resume />
  </div>
</template>

<script>
import Resume from './components/Resume.vue'

export default {
  name: 'app',
  components: {
    Resume
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: #eee;
}
</style>
