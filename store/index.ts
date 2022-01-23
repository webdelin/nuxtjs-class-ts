import Vue from 'vue'
import Vuex from 'vuex'
import {extractVuexModule, createProxy} from 'vuex-class-component'
import Counter from './counter'
import Categories from './categoreis'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(Counter),
    ...extractVuexModule(Categories),
  },
})

const createStore = () => {
  return store
}

const vxm = {
  counter: createProxy(store, Counter),
  categories: createProxy(store, Categories),
};

export default createStore
