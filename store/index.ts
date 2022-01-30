import Vuex from 'vuex';
import { CounterStore } from './counter';
import { UserStore } from './user';

export const store = new Vuex.Store({
  modules: {
    counter: CounterStore.ExtractVuexModule(CounterStore),
    user: UserStore.ExtractVuexModule(UserStore)
  },
  strict: false
});

export interface VXM {
  counter: CounterStore;
  user: UserStore;
}

export const vxm: VXM = {
  counter: CounterStore.CreateProxy(store, CounterStore),
  user: UserStore.CreateProxy(store, UserStore)
};
