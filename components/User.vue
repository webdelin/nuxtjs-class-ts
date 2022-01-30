<template>
  <div>
    <br />
    <h1>{{ message }}</h1>
    <br />
    <p>axios working in the store</p>
    <br />
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          <strong>{{ user.name }}</strong> - {{ user.email }}
        </li>
      </ul>
      <br />
      <button class="button--green" @click="getUser">Get Users</button>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'User'
})
export default class User extends Vue {
  private message: string = 'User class Component';

  private get users() {
    return this.$vxm.user.users;
  }

  public getUser(): void {
    this.$vxm.user.addUser();
  }
}
</script>
