<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    />
    <h1 class="bg-yellow-4">{{welcome}}</h1>
  </q-page>
</template>

<script>
  import {connect} from '@cerebral/vue'
  import {state} from 'cerebral'

  export default connect({welcome: state`message`}, {
    name: 'PageIndex',
  })
</script>
