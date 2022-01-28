<template>
  <div>
      <h1>Mobile</h1>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'LayoutMobile'
})
export default class LayoutMobile extends Vue {}
</script>
