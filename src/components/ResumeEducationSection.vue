<template>
  <section class="section">
    <h3 class="section__title">
      Formation
    </h3>

    <ul class="section__body">
      <li
        v-for="(education, index) in educationList"
        :key="index"
      >
        <ResumeEducation :education="education" />
      </li>
    </ul>
  </section>
</template>

<script>
import ResumeEducation from './ResumeEducation.vue'

export default {
  name: 'ResumeEducationSection',
  components: {
    ResumeEducation
  },
  props: {
    educationList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.section {
  display: grid;
  grid-template-columns: subgrid;
  padding: 0 82px;

  &__title {
    margin: 2.81rem 0 2.34rem 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.08rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  &__body {
    display: grid;
    grid-column: resume;
    grid-template-columns: subgrid;

    > li {
      display: grid;
      grid-column: resume;
      grid-template-columns: subgrid;

      &::before {
        --bullet-width: 12px;

        content: '';
        position: relative;
        top: 4px;
        grid-column: line;
        width: var(--bullet-width);
        height: var(--bullet-width);
        margin-bottom: calc(var(--bullet-width) * -1);
        transform: translateX(-50%) rotate(45deg);
        border-radius: 2px;
        background-color: var(--primary-color);
      }

      &:first-child::before {
        border: 2px solid var(--primary-color);
        background-color: var(--white);
      }
    }
  }
}
</style>
