<template>
  <div class="resume">
    <ResumeBasics
      :basics="resume.basics"
    />

    <ResumeWork
      :work-list="resume.work"
    />

    <ResumeEducation
      :education-list="resume.education"
    />

    <ResumeSkills
      :skills="resume.skills"
    />
  </div>
</template>

<script>
import ResumeBasics from './ResumeBasics.vue'
import ResumeWork from './ResumeWork.vue'
import ResumeEducation from './ResumeEducation.vue'
import ResumeSkills from './ResumeSkills.vue'

import resume from '../assets/resume.json'

export default {
  name: 'Resume',
  components: {
    ResumeBasics,
    ResumeWork,
    ResumeEducation,
    ResumeSkills
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
  width: 1020px;
  margin: auto;
  background-color: #fff;
}
</style>
