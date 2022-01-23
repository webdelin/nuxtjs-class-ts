<template>
  <div>
    <h1>Category</h1>
    <p>{{categories[0]&&categories[0].length}}</p>
    <ul>
      <li v-for="category in categories[0]">{{ category.attributes.title }}</li>
    </ul>
    <button @click="getCategories">get category</button>
    <hr>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { vxm } from '@/store';

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

/*  public get categories(): [] {
    return vxm.category.categories
  }*/
/*  @categoriesModule.State('_categories')
  private categories!: []*/

/*
  @categoriesModule.Getter('categories')
  private getCounter!: () => []

  @categoriesModule.Action
  private getCategories!: () => Promise<void>*/

}
</script>
