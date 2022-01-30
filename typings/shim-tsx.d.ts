import Vue from 'vue';

declare global {
  namespace JSX {
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
