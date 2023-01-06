<template>
  <div>
    <table>
      <tr>
        <th v-for="j in arr" :key="j">{{ j }}</th>
      </tr>
      <tr :value="data.price" v-for="(data, i) in shoplist" :key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ data.category }}</td>
        <td>{{ data.product_name }}</td>
        <td>{{ data.price }}</td>
        <td>{{ data.delivery_price }}</td>
        <td>
          <input
            type="number"
            @input="quanti"
            v-bind:value="count"
            placeholder="0"
          />
        </td>
        <td><input />{{ this.count }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import list from '../assets/productdata.js'
export default {
  name: 'app',
  data() {
    return {
      arr: ['NO.', '카테고리', '제품명', '가격', '배송료', '수량', '합계'],
      shoplist: list,
      count: '',
      amounts: '0',
      product_price: ''
    }
  },

  methods: {
    quanti: function (e) {
      this.count = e.target.clicked
    }
  }
}
</script>

<style></style>
