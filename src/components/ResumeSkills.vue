<template>
  <section class="section">
    <h3 class="section__title">
      Compétences
    </h3>

    <ul class="section__body">
      <li
        v-for="(skill, index) in skills"
        :key="index"
      >
        <article class="skill">
          <h4 class="skill__name">
            {{ skill.keywords.join(', ') }}
          </h4>

          <progress
            min="0"
            max="100"
            :value="skill.level"
            class="skill__progress-bar"
          />
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ResumeSkills',
  props: {
    skills: {
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
  padding: 0 82px 82px;

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
    grid-column: right;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 37.5px 1rem;
    margin-top: 2.81rem;
    padding-left: 31px;
  }
}

.skill {
  &__name {
    margin-bottom: 7.5px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: .75px;
  }

  &__progress-bar {
    display: block;
    width: 200px;
    height: 6px;
    border: none;
    background-color: #eee;
    -moz-appearance: none;
    border-radius: 2px;

    &::-moz-progress-bar {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      background-color: var(--primary-color);
    }
  }
}
</style>
