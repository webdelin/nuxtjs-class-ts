<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <div>
      <div>State: {{ counter }}</div>
      <div>Getter: {{ getCounter }}</div>
      <button class="button--red" @click="subtract">-</button>
      <button class="button--green" @click="add">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { namespace } from 'vuex-class';

const counterModule = namespace('counter');

@Component({
  name: 'Counter'
})
export default class Counter extends Vue {
  @Prop({ type: String })
  private message!: string;

  @counterModule.State('_count')
  private counter!: number;

  @counterModule.Getter('count')
  private getCounter!: () => number;

  @counterModule.Action
  private add!: () => Promise<void>;

  @counterModule.Action
  private subtract!: () => Promise<void>;
}
</script>
