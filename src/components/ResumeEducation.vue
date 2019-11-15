<template>
  <section>
    <h3>Formation</h3>

    <ul>
      <li
        v-for="(education, index) in educationList"
        :key="index"
      >
        <article>
          <h4>{{ education.studyType }}</h4>
          <h5>{{ education.institution }}</h5>
          <h6>{{ education.startDate | moment('YYYY') }} - {{ education.endDate | moment('YYYY') }}</h6>
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
