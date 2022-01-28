import { Module, VuexModule, mutation, action } from 'vuex-class-component';

@Module({ namespacedPath: 'counter', target: 'nuxt' })
export class StoreCounter extends VuexModule {
  public count = 0;

  @mutation addToCount() {
    this.count++
  }

  @mutation subtractFromCount() {
    if (this.count > 0) {
      this.count--
    }
  }

  @action async add(): Promise<void> {
    this.addToCount()
  }

  @action async subtract(): Promise<void> {
    this.subtractFromCount()
  }
}
