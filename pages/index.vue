<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Nuxtjs Class + Express</h1>
      <h2>express, class, types and decorators</h2>
      <br />
      <p>
        @nuxt/types, express, nuxt-class-component, typescript, nuxt-decorators
        and vuex-decorators
      </p>
      <br />
      <Counter message="Counter Component" />
      <br />
      <div class="links">
        <a
          href="https://webdelin.de"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          webdelin.de
        </a>

        <a
          href="https://github.com/webdelin/nuxtjs-class-ts"
          target="_blank"
          rel="noopener noreferrer"
          class="button--red"
        >
          Github
        </a>
      </div>
      <User />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Counter from '~/components/Counter.vue';
import Logo from '~/components/Logo.vue';
import User from '~/components/User.vue';
@Component({
  name: 'Home',
  components: {
    Counter,
    Logo,
    User
  }
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
