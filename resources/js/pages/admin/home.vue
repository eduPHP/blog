<template>
  <div>
    {{ count }}
    <button @click="increment">Faz crescer <3</button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "home",
  computed: {
    ...mapState({
      count: state => state.count
    }),
  },
  methods: {
    ...mapActions({increment: 'incrementCount'})
  }
}
</script>
