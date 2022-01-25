import Vue from 'vue';
import { VXM } from '../store';

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'vue/types/vue' {
  interface Vue {
    $vxm: VXM;
  }
}
