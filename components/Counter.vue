<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <br />
    <div>
      <div>State: {{ counter }}</div>
      <br />
      <button class="button--red" @click="subtract">-</button>
      <button class="button--green" @click="add">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Counter'
})
export default class Counter extends Vue {
  @Prop({ type: String })
  private message!: string;

  private get counter() {
    return this.$vxm.counter.count;
  }

  public add(): void {
    this.$vxm.counter.add();
  }

  public subtract(): void {
    this.$vxm.counter.subtract();
  }
}
</script>
