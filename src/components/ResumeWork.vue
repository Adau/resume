<template>
  <section>
    <h3>Expériences professionnelles</h3>

    <ul>
      <li
        v-for="work in workList"
        :key="work"
      >
        <article>
          <h4>{{ work.position }}</h4>
          <h5>{{ work.company }}</h5>
          <h6>{{ work.startDate }} - {{ work.endDate }}</h6>
          <p v-html="work.summary" /> <!-- eslint-disable-line vue/no-v-html -->
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ResumeWork',
  props: {
    workList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
</style>
