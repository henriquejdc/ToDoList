<template>
  <div class="pa-3">
    <h1>About</h1>
      <p>
        This is a to-do list developed for educational purposes with Vue.js.
      </p>
      <p>  
        Some tools used here were:
      </p>
      <v-list>
      <template v-for="(item) in tacnologias">

        <v-list-item
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <hr>
    <section>
      <p>
        <v-card-title>Thank you for honoring the project!!!</v-card-title>
        <v-card-subtitle >Contact:</v-card-subtitle>
        <v-card-text>
        <strong>📨 Mail:</strong> riquejdc@gmail.com<br>
        <strong>🧑‍💻 Henrique D. Corte</strong><br>
        <img src="../assets/octocat.png" height="20px" alt="imagem octocat" /> <a href="https://github.com/henriquejdc">@henriquejdc</a>
        </v-card-text>
      </p>
    </section>
      
  </div>
</template>

<script>

export default {
  data() {
    return{
      tacnologias:[
        {
          title: "HTML",
          icon: "mdi-language-html5"
        },
        {
          title: "Vue.js",
          icon: "mdi-vuejs"
        },
        {
          title: "Vuetify",
          icon: "mdi-vuetify"
        },
        {
          title: "VUEX",
          icon: "mdi-vuejs"
        },
        {
          title: "VueRouter",
          icon: "mdi-vuejs"
        },
        {
          title: "Localbase DB",
          icon: "mdi-database"
        },
        {
          title: "Animate.css",
          icon: "mdi-transition"
        },
        {
          title: "Drag and Drop",
          icon: "mdi-drag-variant"
        },
        {
          title: "Git",
          icon: "mdi-git"
        },
        {
          title: "GitHub",
          icon: "mdi-github"
        },
        {
          title: "Netlify",
          icon: "mdi-web"
        },
      ]
    }
  }
}
</script>

