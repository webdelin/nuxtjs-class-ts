<template>
  <div>
    <h1>{{ msg }} {{ count }}</h1>
    <div>
      <button class="btn" @click="add">+</button>
      <button @click="subtract">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import {vxm} from '@/store';

@Component({
  name: 'Counter',
})
export default class Counter extends Vue {
  @Prop({type: String})
  private msg!: string

  public get count(): number {
    return vxm.counter.count;
  }

  public add(): void {
    vxm.counter.add();
  }

  public subtract(): void {
    vxm.counter.subtract();
  }

}
</script>
