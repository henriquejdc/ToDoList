<template>
  <v-app id="inspire">

    <v-navigation-drawer
    v-model="drawer"
    app
    >
    <v-img
    src="./assets/bg.jpg"
    gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
    dark
    class="pt-5 text-center"
    >
      <v-avatar
      size="100"
      >
        <img
          src="https://cdn.pixabay.com/photo/2020/02/17/07/39/pen-4855775_960_720.jpg"
          alt="John"
        >
      </v-avatar>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vue.js
          </v-list-item-title>
          <v-list-item-subtitle>
            to-do-list
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      prominent
      height="185"
      color="#fcb69f"
      dark
      src="./assets/bg.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <center>
        <v-app-bar-title
        class="mt-16"
        >
          <InputTask
          style="padding: 0 !important; min-width: 100% !important;"
          />

        </v-app-bar-title>
      </center>

    </v-app-bar>
    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import InputTask from './components/InputTask.vue'
  export default {
  components: { InputTask },
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Tasks', icon: 'mdi-view-dashboard', to:'/' },
          { title: 'About', icon: 'mdi-help-box', to:'/about'  },
        ],
    }),
  }
</script>