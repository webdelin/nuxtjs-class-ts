import { action, Module, mutation, VuexModule } from 'vuex-class-component';
import { $axios } from '@/utils/api';

interface IGeo {
  lat: number;
  lng: number;
}

interface IAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAdress;
  phone: number;
  website: string;
  company: ICompany;
}

@Module({ namespacedPath: 'user', target: 'nuxt' })
export class UserStore extends VuexModule {
  private _users = [] as IUsers[];

  get users() {
    return this._users;
  }

  @mutation
  public getUser(users: IUsers[]) {
    this._users = users;
  }

  @action
  public async addUser(): Promise<void> {
    const users = await $axios.get<IUsers[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.getUser(users.data);
  }
}
