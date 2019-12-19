<template>
  <article class="education">
    <h4 class="education__studytype">
      {{ education.studyType }}
    </h4>

    <h5 class="education__institution">
      {{ education.institution }}
    </h5>

    <h6 class="education__date">
      {{ education.startDate | moment('YYYY') }} - {{ education.endDate | moment('YYYY') }}
    </h6>

    <p
      class="education__summary"
    />
  </article>
</template>

<script>
export default {
  name: 'ResumeEducation',
  props: {
    education: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
.education {
  display: grid;
  grid-auto-flow: dense;
  grid-column: resume;
  grid-template-columns: subgrid;

  &__studytype {
    grid-column: right;
    padding-left: 31px;
    font-family: 'Source Serif Pro', serif;
    font-size: 1.08rem;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  &__institution {
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
