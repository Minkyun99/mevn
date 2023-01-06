<template>
  <nav><router-link to="/">MAIN</router-link> |</nav>
  <router-view />
  <div>
    <button @click="clickList()">Query 프로그래밍 방식</button>
  </div>
  <router-link :to="{name:'query':{name:'query 선언적 방식', age:10}}"
    >Query 선언적 방식</router-link
  >
</template>

<script>
export default {
  name : 'App',
  props: {
    name:{
      type:String,

default    }
  },

  data:() {
    return{

    }
  },

  methods: {
    clickList(){
      this.$router.push({name:'query':{name:'query 선언적 방식', age:10}})
    }
  }
}
</script>

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
