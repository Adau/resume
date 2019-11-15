<template>
  <section>
    <h3>Formation</h3>

    <ul>
      <li
        v-for="education in educationList"
        :key="education"
      >
        <article>
          <h4>{{ education.studyType }}</h4>
          <h5>{{ education.institution }}</h5>
          <h6>{{ education.startDate }} - {{ education.endDate }}</h6>
          <p />
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ResumeEducation',
  props: {
    educationList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
</style>
