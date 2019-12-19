<template>
  <header class="basics">
    <img
      class="basics__picture"
      :src="basics.picture"
      alt="Photo"
    >

    <h1 class="basics__name">
      {{ basics.name }}
    </h1>

    <h2 class="basics__label">
      {{ basics.label }}
    </h2>

    <ul class="basics__contact">
      <li>{{ age }} ans</li>
      <li>{{ basics.location.city }}</li>
      <li><a :href="`mailto:${basics.email}`">{{ basics.email }}</a></li>
      <li><a :href="`tel:${basics.phone}`">{{ basics.phone|formatPhone('.') }}</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'ResumeBasics',
  filters: {
    formatPhone: (value, separator) => {
      return value.match(/.{1,2}/g).join(separator)
    }
  },
  props: {
    basics: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    age () {
      return this.$moment().diff(this.basics.birthDate, 'years')
    }
  }
}
</script>

<style scoped lang="scss">
.basics {
  display: grid;
  grid-column-gap: 25px;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  padding: 50px 82px 42px 82px;
  border-bottom: 1px solid var(--gray-light);
  background: var(--gray-lighter);

  &__picture {
    grid-row: 1 / -1;
    width: 125px;
    height: 125px;
    border: 1px solid var(--black);
    border-radius: 50%;
  }

  &__name {
    color: var(--gray-dark);
    font-family: 'Source Serif Pro', serif;
    font-size: 3.28rem;
    font-weight: 700;
    letter-spacing: -.5px;
  }

  &__label {
    margin-bottom: .2em;
    color: var(--primary-color);
    font-family: 'Source Serif Pro', serif;
    font-size: 1.22rem;
    font-weight: 400;
  }

  &__contact {
    display: flex;
    color: var(--gray);
    font-size: .9em;

    > :not(:last-child)::after {
      content: '|';
      margin: 0 .5em;
      color: #ccc;
    }
  }
}
</style>
