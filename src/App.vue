<template>
  <v-app>
    <v-toolbar app color="primary">
      <v-toolbar-title>
        <span class="white--text">Editable List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/ngustavo/editable-list/"
        target="_blank"
      >
        <span class="white--text">GitHub</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <List />
    </v-content>
  </v-app>
</template>

<script>
import List from './views/List'

export default {
  name: 'App',
  components: {
    List
  }
}
</script>
