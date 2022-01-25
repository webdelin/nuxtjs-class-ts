<template>
  <div class="flex justify-center items-center h-screen">
    <Counter msg="Counter" />
    <hr>
    <Categories />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'mobile',
  name: 'Index',
})

export default class Index extends Vue {}

</script>
