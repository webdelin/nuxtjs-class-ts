import Vuex from 'vuex'
import {StoreCounter} from './counter'
import {StoreCategory} from './category'

export const store = new Vuex.Store({
  modules: {
    category: StoreCategory.ExtractVuexModule(StoreCategory),
    counter: StoreCounter.ExtractVuexModule(StoreCounter)
  },
  strict: false
})
export interface VXM {
  counter: StoreCounter;
  category: StoreCategory;
}
export const vxm = {
  category: StoreCategory.CreateProxy(store, StoreCategory),
  counter: StoreCounter.CreateProxy(store, StoreCounter),
};
