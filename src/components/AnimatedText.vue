<script>
export default {
  name: 'AnimatedText',
  data () {
    return {
      letter: 'i',
      replacedLetter: 'ı'
    }
  },
  render (createElement) {
    const text = this.$slots.default[0].children[0].text
    const index = text.indexOf(this.letter)

    const textStart = createElement('span', text.slice(0, index)).children[0]

    const letter = createElement('span', {
      'class': {
        'letter': true
      }
    }, this.replacedLetter)

    const textEnd = createElement('span', text.slice(index + 1)).children[0]

    this.$slots.default[0].children = [textStart, letter, textEnd]

    return this.$slots.default
  }
}
</script>

<style lang="scss">
.letter {
  position: relative;

  &::after {
    content: '.';
    position: absolute;
    top: -43%;
    left: 0;
    transform-origin: bottom;
    animation: bounce 4s cubic-bezier(.28, .84, .42, 1) infinite;
  }

  @keyframes bounce {
    0% { transform: scale(1, 1) translateY(0); }
    5% { transform: scale(1.1, .9) translateY(0); }
    15% { transform: scale(.9, 1.1) translateY(-30%); }
    25% { transform: scale(1.05, .95) translateY(0); }
    28.5% { transform: scale(1, 1) translateY(-2%); }
    32% { transform: scale(1, 1) translateY(0); }
    50% { transform: scale(1, 1) translateY(0); }
    100% { transform: scale(1, 1) translateY(0); }
  }
}
</style>
