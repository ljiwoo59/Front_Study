<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <customer-header />
    <customer-uppder :cus="cus" @ins="insert" @upd="update" @del="deleteOne" @find="search" @all="selectAll" />
    <customer-list :result="result" @cus="selectOne" />
  </div>
</template>

<script>
import axios from 'axios'
import CustomerHeader from './components/CustomerHeader.vue'
import CustomerList from './components/CustomerList.vue'
import CustomerUppder from './components/CustomerUpper.vue'


export default {
  name: 'App',
  components: {
    CustomerHeader,
    CustomerList,
    CustomerUppder
  },
  data() {
    return {
      result: [],
      cus: {
        num: "",
        name: "",
        address: ""
      }
    }
  },
  methods: {
    selectAll() {
      axios
        .get("http://localhost/customers") // Spring 과 live server 은 다른 포트 번호로 돌기 때문에 스프링 컨트롤러에 Cross Origin 필수
        .then((response) => {this.result = response.data}) // 성공적으로 결과를 받으면 실행할 함수
        .catch((response) => {this.error = response.status}) // 에러 났을 때 실행할 함수
    },
    selectOne(data) {
      axios
        .get("http://localhost/customers/" + data.num)
        .then((response) => {
          let json = response.data;
          this.cus.num = json.num;
          this.cus.name = json.name;
          this.cus.address = json.address;
        })
        .catch((response) => {
          this.error = response.status;
        })
    },
    insert(data) {
      axios
        .post("http://localhost/customers", { // 서버에 데이터를 보내 주어야 한다
          num: data.num,
          name: data.name,
          address: data.address
        })
        .then(() => {
          this.selectAll(); // 화면 refresh
        })
        .catch((response) => {this.error = response.status})
    },
    deleteOne(data) {
      axios
        .delete("http://localhost/customers/" + data.num)
        .then(() => {
          this.selectAll(); // 화면 refresh
        })
        .catch((response) => {this.error = response.status})
    },
    update(data) {
      axios
        .put("http://localhost/customers", {
          num: data.num,
          address: data.address
        })
        .then(() => {
          this.selectAll();
        })
        .catch((response) => {this.error = response.status})
    },
    search(data) {
      axios
        .get("http://localhost/customers/find/" + data.address)
        .then((response) => {
          this.result = response.data;
        })
        .catch((response) => {this.error = response.status})
    },
  },
  created() {
    this.selectAll();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
