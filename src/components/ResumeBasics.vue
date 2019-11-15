<template>
  <header>
    <img
      :src="require(`@/assets/${basics.picture}`)"
      alt="Photo"
    >

    <h1>{{ basics.name }}</h1>
    <h2>{{ basics.label }}</h2>

    <ul>
      <li>{{ age }} ans</li>
      <li>{{ basics.location.city }}</li>
      <li><a :href="`mailto:${basics.email}`">{{ basics.email }}</a></li>
      <li>{{ basics.phone|formatPhone('.') }}</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'ResumeBasics',
  filters: {
    formatPhone: (value, separator) => {
      return value.match(/.{1,2}/g).join(separator)
    }
  },
  props: {
    basics: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    age () {
      return this.$moment().diff(this.basics.birthDate, 'years')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
