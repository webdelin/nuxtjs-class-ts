<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <br />
    <div>
      <button class="button--green" @click="getUser">Get User</button>
      <ul>
        <li v-for="user in users">
          {{ user.name }} - <strong>{{ user.email }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'User'
})
export default class User extends Vue {
  private message: string = 'User Component';

  private get users() {
    return this.$vxm.user.users;
  }

  public getUser(): void {
    this.$vxm.user.addUser();
  }
}
</script>
