<template>
  <div class="list">
    <a-button html-type="submit">all</a-button>&nbsp;&nbsp;
    <a-button html-type="submit">已预约</a-button>&nbsp;&nbsp;
    <a-button html-type="submit">已取件</a-button>&nbsp;&nbsp;
    <a-button html-type="submit">未预约</a-button>&nbsp;&nbsp;
    <a-button shape="circle" style="height:80px;width:80px;" html-type="submit">+添加</a-button>
    <a-table :columns="columns" :dataSource="data" bordered>
<template slot="title" slot-scope="currentPageData">Header</template>
<template slot="footer" slot-scope="currentPageData">Footer</template>
</a-table>
</div>
</template>

<script>
  import Vue from "vue";
  import Antd from "ant-design-vue";
  import "ant-design-vue/dist/antd.css";
  Vue.config.productionTip = false;

  Vue.use(Antd);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Cash Assets",
      dataIndex: "money"
    },
    {
      title: "Address",
      dataIndex: "address"
    }
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      money: "￥300,000.00",
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      money: "￥1,256,000.00",
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      money: "￥120,000.00",
      address: "Sidney No. 1 Lake Park"
    }
  ];

  export default {
    data() {
      return {
        data,
        columns
      };
    }
  };
</script>

<style scoped>
</style>
