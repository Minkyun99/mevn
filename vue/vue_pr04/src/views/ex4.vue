<template>
  <div>
    <button
      v-for="p in pages"
      @click="page = p"
      :key="p"
      :class="{ active: page == p }"
    >
      {{ p }}
    </button>
    <div v-for="(g, i) in pages" :key="i">
      <div v-if="g == page">{{ g }}</div>
      <img
        v-if="g == page"
        :src="'../../모코코' + (i + 1) + '.png'"
        alt="사진없음"
        srcset=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4', 'page5']
    }
  },
  methods: {}
}
</script>

<style>
button {
  font-size: '20px';
  width: '150px';
  height: '80px';
  border-radius: 20px;
  border: 3px double black;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: darkcyan;
}

button .active {
}

img {
  width: 50%;
}
</style>
