<template>
  <div id="table">
    <table>
      <thead>
      	<tr>
      	  <td>频道</td>
      	  <td>当日vv量(千)</td>
      	  <td>日环比</td>
      	  <td>周同比</td>
      	</tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>{{ item.channel }}</td>
          <td>{{ item.vv }}</td>
          <td>{{ item.dayrate }}</td>
          <td>{{ item.weekrate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  /* 父组件传来的数据 */
  props: ['datas'],
  data () {
    return {
      items: this.datas,
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 400px;
  border-spacing: 0;
  border-collapse: collapse;
}
td {
  text-align: center;
  border: 1px solid #ccc;
}
</style>
