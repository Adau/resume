<template>
  <div class="resume">
    <ResumeBasics
      :basics="resume.basics"
    />

    <ResumeWork
      :workList="resume.work"
    />

    <ResumeEducation
      :educationList="resume.education"
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
  data () {
    return {
      resume
    }
  },
  components: {
    ResumeBasics,
    ResumeWork,
    ResumeEducation,
    ResumeSkills
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
