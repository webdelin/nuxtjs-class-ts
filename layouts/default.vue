<template>
  <div>
    <TopNavigation />
    <Nuxt />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TopNavigation from '~/components/navbar/TopNavigation.vue'
@Component({
  name: 'LayoutDefault',
  components: { TopNavigation },
})
export default class LayoutDefault extends Vue {}
</script>
