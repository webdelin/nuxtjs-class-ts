import Vuex from 'vuex';
import { CounterStore } from './counter';

export const store = new Vuex.Store({
  modules: {
    counter: CounterStore.ExtractVuexModule(CounterStore)
  },
  strict: false
});

export interface VXM {
  counter: CounterStore;
}

export const vxm: VXM = {
  counter: CounterStore.CreateProxy(store, CounterStore)
};
