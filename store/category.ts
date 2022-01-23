import { Module, mutation, action, VuexModule } from 'vuex-class-component'
import axios from "axios";

@Module({ namespacedPath: 'category', target: 'nuxt' })
export class StoreCategory extends VuexModule {
  public categories: [] = []

  @mutation setCategories(categories:[]) {
    // @ts-ignore
    this.categories.push(categories)
  }

  @action async getCategories(): Promise<void> {
    const {data} = await axios.get('http://localhost:1337/api/categories')
    console.log(data.data)
    this.setCategories(data.data)
  }
}
