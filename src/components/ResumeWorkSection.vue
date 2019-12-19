<template>
  <section class="section">
    <h3 class="section__title">
      Expériences professionnelles
    </h3>

    <ul class="section__body">
      <li
        v-for="(work, index) in workList"
        :key="index"
      >
        <ResumeWork :work="work" />
      </li>
    </ul>
  </section>
</template>

<script>
import ResumeWork from './ResumeWork.vue'

export default {
  name: 'ResumeWorkSection',
  components: {
    ResumeWork
  },
  props: {
    workList: {
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
        transform: translateX(-50%);
        border-radius: 50%;
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
