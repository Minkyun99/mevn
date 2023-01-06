<template>
  <nav>
    <router-link to="/">Main </router-link> |

    <router-link
      :to="{ name: 'Query', query: { name: 'Query 선언적 방식', age: 10 } }"
    >
      Query 선언적 방식 |
    </router-link>

    <router-link
      :to="{ name: 'Params', params: { name: 'Params 선언적 방식', age: 11 } }"
    >
      Params 선언적 방식
    </router-link>
  </nav>
  <router-view />
  <hr />
  <div>
    <router-link
      :to="{ name: 'Query', query: { name: 'Query 선언적 방식', age: 10 } }"
    >
      Query 선언적 방식
    </router-link>
    <button @click="clickQuery()">Query 프로그래밍 방식</button>
  </div>
  <hr />
  <div>
    <router-link
      :to="{ name: 'Params', params: { name: 'Params 선언적 방식', age: 11 } }"
    >
      Params 선언적 방식
    </router-link>
    <button @click="clickParams()">Params 프로그래밍 방식</button>
  </div>
  <hr />
</template>

<script>
export default {
  name: 'App',
  methods: {
    clickQuery() {
      this.$router.push({
        name: 'Query',
        query: { name: 'Query 프로그램 방식', age: 20 }
      })
    },
    clickParams() {
      this.$router.push({
        name: 'Params',
        params: { name: 'Params 프로그램 방식', age: 22 }
      })
    }
  }
}