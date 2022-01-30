import { Module, mutation, action, VuexModule } from 'vuex-class-component';
import { $axios } from '~/utils/api';
@Module({ namespacedPath: 'user', target: 'nuxt' })
export class UserStore extends VuexModule {
  private _users: [] = [];

  get users() {
    return this._users;
  }

  @mutation
  public getUser(users: []) {
    this._users = users;
  }

  // eslint-disable-next-line require-await
  @action
  public async addUser(): Promise<void> {
    const users = await $axios.get('https://jsonplaceholder.typicode.com/users');
    this.getUser(users.data);
  }
}
