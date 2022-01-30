<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Nuxtjs Class</h1>
      <h2>class, typescript, decorators</h2>
      <Counter message="Counter" />
      <div class="links">
        <a
          href="https://webdelin.de"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          webdelin.de
        </a>
      </div>
      <p>Test</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Home'
})
export default class Home extends Vue {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
