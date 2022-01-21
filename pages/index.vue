<template>
  <Tutorial />
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Tutorial from '@/components/Tutorial.vue'
@Component({
  components: {
    Tutorial
  }
})
export default class PageIndex extends Vue {
  message: string = 'This is a message'
}
</script>
