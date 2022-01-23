import {action, Module, mutation, VuexModule} from 'vuex-class-component'
import axios from "axios";

@Module({namespacedPath: 'category', target: 'nuxt'})
export class StoreCategory extends VuexModule {
  public categories = []

  @mutation setCategories(categories: any) {
    this.categories = categories
  }

  @action
  async getCategories(): Promise<void> {
    const {data} = await axios.get('http://localhost:1337/api/categories')
    this.setCategories(data.data)
  }
}
