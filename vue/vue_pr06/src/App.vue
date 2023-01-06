<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Aboutview">About</router-link> |
    <router-link to="/bindString">String</router-link> |
    <router-link to="/bindHtml">Html</router-link> |
    <router-link to="/bindinput">Input</router-link> |
    <router-link to="/bindSelector">Selector</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
