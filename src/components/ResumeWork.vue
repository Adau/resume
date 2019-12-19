<template>
  <article class="work">
    <h4 class="work__position">
      {{ work.position }}
    </h4>

    <h5 class="work__company">
      {{ work.company }}
    </h5>

    <h6 class="work__date">
      {{ work.startDate | moment('MMM YYYY') }} - {{ work.endDate | moment('MMM YYYY') }}
    </h6>

    <!-- eslint-disable -->
    <p
      class="work__summary"
      v-html="work.summary"
    />
    <!-- eslint-enable -->
  </article>
</template>

<script>
export default {
  name: 'ResumeWork',
  props: {
    work: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
.work {
  display: grid;
  grid-auto-flow: dense;
  grid-column: resume;
  grid-template-columns: subgrid;

  &__position {
    grid-column: right;
    padding-left: 31px;
    font-family: 'Source Serif Pro', serif;
    font-size: 1.08rem;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  &__company {
    grid-column: right;
    margin-bottom: .27rem;
    padding-left: 31px;
    color: var(--gray);
    font-family: 'Source Serif Pro', serif;
    font-size: 1.08rem;
    font-weight: 400;
    letter-spacing: 1.5px;
  }

  &__date {
    grid-column: left;
    font-weight: 700;
    letter-spacing: .5px;
    text-transform: uppercase;
  }

  &__summary {
    grid-column: right;
    margin: 0 0 2.34rem;
    padding-left: 31px;
    font-family: 'Source Serif Pro', serif;
  }
}
</style>
