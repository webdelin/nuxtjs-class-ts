<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <div>
      <div>State: {{ counter }}</div>
      <div>Getter: {{ getCounter }}</div>
      <button class="button" @click="add">+</button>
      <button class="button" @click="subtract">-</button>
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
<style lang="css" scoped>
.button {
  background: #bbbbbb;
  border: none;
  padding: 6px 24px;
  margin: 12px;
  cursor: pointer;
}

.button:hover {
  background: #008800;
}
</style>
