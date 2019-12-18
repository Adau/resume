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

.work {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: resume;
  grid-auto-flow: dense;

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
