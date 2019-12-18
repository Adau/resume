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
    grid-template-columns: subgrid;
    grid-column: resume;

    > li {
      display: grid;
      grid-template-columns: subgrid;
      grid-column: resume;
    }
  }
}

.education {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: resume;
  grid-auto-flow: dense;

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
    font-family: 'Source Serif Pro', serif;
    font-size: 1.08rem;
    font-weight: 400;
    letter-spacing: 1.5px;
    color: var(--gray);
  }

  &__date {
    grid-column: left;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .5px;
  }

  &__summary {
    grid-column: right;
    margin: 0 0 2.34rem;
    padding-left: 31px;
    font-family: 'Source Serif Pro', serif;
  }
}
</style>
