<template>
  <div class="resume">
    <ResumeBasics
      :basics="resume.basics"
      class="resume__basics"
    />

    <ResumeWorkSection
      :work-list="resume.work"
      class="resume__works"
    />

    <ResumeEducationSection
      :education-list="resume.education"
      class="resume__education"
    />

    <ResumeSkillsSection
      :skills="resume.skills"
      class="resume__skills"
    />
  </div>
</template>

<script>
import ResumeBasics from './ResumeBasics.vue'
import ResumeWorkSection from './ResumeWorkSection.vue'
import ResumeEducationSection from './ResumeEducationSection.vue'
import ResumeSkillsSection from './ResumeSkillsSection.vue'

import resume from '../assets/resume.json'

export default {
  name: 'Resume',
  components: {
    ResumeBasics,
    ResumeWorkSection,
    ResumeEducationSection,
    ResumeSkillsSection
  },
  data () {
    return {
      resume
    }
  }
}
</script>

<style scoped lang="scss">
.resume {
  display: grid;
  grid-template-areas:
    "basics basics basics"
    "work work work"
    "education education education"
    "skills skills skills";
  grid-template-columns:
    [resume-start left-start] 30%
    [left-end line-start] 1px
    [line-end right-start] 1fr
    [right-end resume-end];
  width: 1020px;
  margin: 1cm auto;
  background-color: var(--white);
  box-shadow: 0 4px 5px rgba(75, 75, 75, 0.2);
  font-size: 15px;

  &::before {
    content: '';
    position: relative;
    top: -1px;
    left: 50%;
    grid-column: line;
    grid-row-start: 2;
    transform: translateX(-50%);
    border-width: 11px;
    border-style: solid;
    border-color: var(--gray-lightest) transparent transparent transparent;
    filter: drop-shadow(0 1px 0 var(--gray-light));
  }

  &::after {
    content: '';
    grid-column: line;
    grid-row: 2 / -1;
    background: var(--gray-light);
  }

  &__basics {
    grid-area: basics;
  }

  &__works {
    grid-area: work;
  }

  &__education {
    grid-area: education;
  }

  &__skills {
    grid-area: skills;
  }
}
</style>
