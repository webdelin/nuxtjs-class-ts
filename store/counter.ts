import { Module, mutation, action, VuexModule } from 'vuex-class-component';

@Module({ namespacedPath: 'counter', target: 'nuxt' })
export class CounterStore extends VuexModule {
  private _count = 0;

  get count(): number {
    return this._count;
  }

  @mutation
  public addToCount() {
    this._count++;
  }

  @mutation
  public subtractFromCount() {
    if (this._count > 0) {
      this._count--;
    }
  }

  // eslint-disable-next-line require-await
  @action
  public async add(): Promise<void> {
    this.addToCount();
  }

  // eslint-disable-next-line require-await
  @action
  public async subtract(): Promise<void> {
    this.subtractFromCount();
  }
}
