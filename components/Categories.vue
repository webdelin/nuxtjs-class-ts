<template>
  <div>
    <h1>Category {{ categories.length }}</h1>
    <ul>
      <li v-for="category in categories">{{ category.attributes.title }}</li>
    </ul>
    <button @click="getCategories">get category</button>
    <hr>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {vxm} from '@/store';

@Component({
  name: 'Categories',
})
export default class Categories extends Vue {
  public get categories(): number {
    return vxm.category.categories;
  }

  public getCategories(): void {
    vxm.category.getCategories();
  }

}
</script>
