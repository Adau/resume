<template>
  <section>
    <h3>Compétences</h3>

    <ul>
      <li
        v-for="(skill, index) in skills"
        :key="index"
      >
        <article>
          <h4>{{ skill.keywords.join(', ') }}</h4>
          <div>
            <div>
              <div
                :style="`width: ${skill.level}%;`"
              />
            </div>
          </div>
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
</style>
