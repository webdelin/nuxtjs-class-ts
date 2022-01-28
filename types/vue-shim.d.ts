import { VXM } from '../store';

declare module 'vue/types/vue' {
  interface Vue {
    $vxm: VXM;
  }
}
