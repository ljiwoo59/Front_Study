# Vuex
* *Vue.js application* 에 대한 **상태관리패턴 + 라이브러리**
* **application 내 모든 *component* 들의 중앙 저장소** (관리)
   * 부모 자식간의 데이터 공유를 한번에 관리하여 문제 해결
      * 상위, 하위의 단계가 복잡해지는 경우
      * 여러 구성 요소로 구성되고 더 커지는 경우
* vuex 프로젝트를 생성하면 *store* 폴더에 중앙 저장소가 생성됨

## 상태 관리 패턴
![image](https://user-images.githubusercontent.com/54715744/141980949-c2e12ae9-38a0-4b53-a82d-09f28906919c.png)

```javascript
new Vue({
   // 상태
   data() {
      return {
         count: 0
      }
   },
   // 뷰
   template: `
      <div>{{ count }}</div>
   `,
   // 액션
   methods: {
      increment() {
         this.count++
      }
   }
})
```
* **상태** : 앱을 작동하는 원본 소스
* **뷰** : 상태의 선언적 매핑
* **액션** : 뷰에서 사용자 입력에 대해 반응적으로 상태를 바꾸는 방법

## 핵심
![image](https://user-images.githubusercontent.com/54715744/141981283-80a79738-2129-476e-8e0b-b5840789a9a4.png)

### **State**
*application* 마다 **하나의 저장소** 관리 (data)
   * 단일 상태 트리
   * *this.$store.state.data_name* 으로 데이터에 접근

```javascript
state: { // 여러 컴포넌트에서 공유하려는 데이터
 name: "tommy lee",
 todos: [],
 todo: {}
}

// 컴포넌트에서 데이터 접근
import {mapState, mapGetters} from "vuex";
computed: { // 메소드 형식으로 구현
   ...mapState(["todos"]), // index.js 파일 안의 state 중 todos 를 가지고 온다
   
   ...mapGetters(["todos"]), // index.js 파일 안의 getter 중, todos() 를 가지고 온다

  
   todos() { // store 안의 데이터에 접근
    	return this.$store.state.todos;  // state 를 직접 접근
    	
      return this.$store.getters.todos; // getter 를 사용하여 접근
   }
},
```

### **Getters**
* Vue Instance 의 *Computed* 와 같은 역할
   * *State* 를 기반으로 계산

```javascript
getters: { // store 안의 state(data) 를 리턴하는 메소드
 todos(state) {
   return state.todos;
 },
 todo(state) {
   return state.todo;
 },
 name(state) {
   return state.name;
 }
},

// 컴포넌트에서 데이터 접근 시 ...mapGetters 또는 this.$store.getters.todos
```

### **Actions**
* 상태를 변이 시키는 액션으로, 변이에 대한 *commit* 처리 (비동기 메소드)
   * *Mutations* 은 상태 관리를 위해 동기적으로 처리하고, 비동기적인 처리는 *Actions* 이 담당
   * 비동기 로직 처리가 종료되면 *Mutations* 호출
   * *Action* 호출 시: *store.dispatch('정의된 이름')*

```javascript
actions: { // 비동기 호출 내용: axios
// 비동기 호출 후 결과가 오면 mutations 에 지시해서 state(data)를 변경
ALLTODO: (store) => {
axios
  .get("/todo")
  .then((response) => {
    //this.todos = response.data;
    store.commit("ALLTODO", {todos: response.data}); // mutations call
  })
},
ADDTODO: (store, payload) => {
axios
  .post("/todo/", { // db 에 insert
      content: payload
  })
  .then(() => {
      store.dispatch("ALLTODO"); // action call
  })
}

// 컴포넌트에서 로직 접근
import {mapActions} from "vuex";
methods: {
  addTodo() {
      // action call
      if (this.content != "") {
          this.$store.dispatch("ADDTODO", this.content);
          this.content = "";
          this.$router.push("/list");
      } else {
          alert("입력해주세요.")
      }
  }

   
   ...mapActions(["DELETETODO", "COMPLETETODO"]),

   // 이벤트처리 함수명과 action 의 이름이 다를 때
   ...mapActions({
      removeTodo : "DELETETODO",
      doneTodo: "COMPLETETODO"
   }),

   // vuex 이전 방식 (컴포넌트 내에서 서버와 직접 비동기 처리)
   doneTodo(num) {
   axios
      .put("http://localhost/todo/" + num)
      .then(() => {
         this.selectAll();
      })
   },
   removeTodo(num) {
   axios
      .delete("http://localhost/todo/" + num)
      .then(() => {
         this.selectAll();
      })
   }
}
```

### **Mutations**
* *State* 의 상태를 변경하는 유일한 방법 (동기 메소드)
   * 각 컴포넌트에서 *State* 값을 직접 변경하는 것은 권장하지 않음
   * *State* 의 값 추적을 위해 동기적 기능에 사용
   * *store.commit('정의된 이름')* 으로 호출

```javascript
mutations: { // actions 에서 호출하여 state 값을 바꾸는 역할
 ALLTODO: (state, payload) => {
   state.todos = payload.todos;
 },
 DETAILTODO: (state, payload) => {
   state.todo = payload;
 }
}
```
