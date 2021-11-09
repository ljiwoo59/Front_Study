# axios
* **HTTP 통신 라이브러리**
* *Promise 기반의 HTTP 통신 라이브러리*
  * *Promise* 란, 서버에 데이터를 요청하여 받아오는 동작과 같은 비동기 로직 처리에 유용한 자바스크립트 라이브러리
  * 데이터를 요청하고 받아올 때까지 기다렸다가 화면에 나타내는 로직을 실행해야 할 때 활용
  * 데이터를 받아왔을 때, 데이터를 화면에 표시하거나 연산을 수행하는 등 특정 로직 수행 

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## axios API
### axios.get('URL').then().catch()
* 해당 URL 주소에 대해 **HTTP GET 요청**을 보냄
* 서버에서 보낸 데이터를 정상적으로 받아오면 **then()** 안에 정의된 로직 실행
* 데이터를 받아올 때 오류 발생 시, **catch()** 에 정의한 로직 실행

```javascript
methods: {
        selectAll() {
                axios
                        .get("http://localhost/customers") // Spring 과 live server 은 다른 포트 번호로 돌기 때문에 스프링 컨트롤러에 Cross Origin 필수
                        .then((response) => {this.result = response.data}) // 성공적으로 결과를 받으면 실행할 함수
                        .catch((response) => {this.error = response.status}) // 에러 났을 때 실행할 함수
        },
        selectOne(num) {
                axios
                        .get("http://localhost/customers/" + num)
                        .then((response) => {
                                let json = response.data;
                                this.num = json.num;
                                this.name = json.name;
                                this.address = json.address;
                        })
                        .catch((response) => {this.error = response.status})
        }
        search() {
                axios
                        .get("http://localhost/customers/find/" + this.address)
                        .then((response) => {
                                this.result = response.data;
                        })
                        .catch((response) => {this.error = response.status})
        }
}
```

### axios.post('URL').then().catch()
* 해당 URL 주소에 대해 **HTTP POST 요청**을 보냄
* **then()** 과 **catch()** 는 *GET 방식*과 동일

```javascript
methods: {
        insert() {
                axios
                        .post("http://localhost/customers", { // 서버에 데이터를 보내 주어야 한다
                                num: this.num,
                                name: this.name,
                                address: this.address
                        })
                        .then((response) => {
                                this.selectAll();
                                this.clearAll();
                        })
                        .catch((response) => {this.error = response.status})
        }
}
```

### axios({옵션 속성})
* **HTTP 요청**에 대한 자세한 속성들을 직접 정의하여 보냄
  * 데이터 요청을 보낼 URL, 요청 방식, 보내는 데이터 등

```javascript
methods: {
        deleteOne() {
                axios
                        .delete("http://localhost/customers/" + this.num)
                        .then((response) => {
                                this.selectAll();
                                this.clearAll();
                        })
                        .catch((response) => {this.error = response.status})
        },
        update() {
                axios
                        .put("http://localhost/customers", {
                                num: this.num,
                                name: this.name,
                                address: this.address
                        })
                        .then((response) => {
                                this.selectAll();
                                this.clearAll();
                        })
                        .catch((response) => {this.error = response.status})
        }
}
```

---

# Vue-Router
* **웹 페이지 간의 이동 방법**
* *컴포넌트와 매핑*
  * URL 에 따라 컴포넌트를 연결하고 설정된 컴포넌트를 보여준다

```html
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

## $router, $route
* **전체 라우터 정보 : this.$router**
* **현재 호출된 해당 라우터 정보**
  * **this.$route**
  * **this.$route.params.no**
  * **this.$route.path**

```javascript
// go 함수 실행 시, "/main" 에 등록된 컴포넌트로 이동
methods: {
        go() {
                this.$router.push("/main"); // javascript 로 링크 이동 하는 방법
        }
}

// 컴포넌트 생성 시, 현재 라우터로 받아온 no 파라미터 받기
created() {
        this.no = this.$route.params.no; // parameter 받기
}
```

## Vue 객체에 router 등록
```javascript
new Vue({
    el: "#app",
    router: router
});

/* 이렇게도 표현할 수 있다
new Vue({
    router
}).$mount("#app");
*/
```

## vue-router 연결
* ***routes*** 옵션과 함께 *router instance* 생성

```javascript
// link(path) - component 간의 관계 정의
let router = new VueRouter({
    routes: [
        {path: "/main", component: main},
        {path: "/sub", component: sub},
        {path: "/param/:no", component: param}
    ]
});
```

## vue-router 이동 및 렌더링
* 네비게이션을 위해 ***router-link*** 컴포넌트 사용
* 속성은 ***to*** 사용
* 기본적으로 *\<router-link>* 는 \<a> 태그로 렌더링

```html
<router-link to="/main">메인 컴포넌트로 가기</router-link>
<router-link to="/sub">서브 컴포넌트로 가기</router-link>
<router-link to="/param/100">파라미터 컴포넌트로 가기</router-link>

<!-- 링크로 파라미터 보내기 -->
<router-link :to="'/sub/' + emp.id" >{{emp.name}}</router-link>
```

* 현재 route 에 맞는 컴포넌트가 렌더링 된다

```html
<!-- 결과가 보여지는 영역 -->
<router-view></router-view>
```

## 이름을 가지는 라우트
* 라우트를 연결하거나 탐색을 수행할 때 이름이 있는 라우트 사용 가능
* Router Instance 를 생성하는 동안 *route 옵션*에 지정

```html
<script>
        const router = new VueRouter({
                routes: [
                        {
                                path: "/board/:no",
                                name: "boardview",
                                component: BoardView
                        }
                ]
        });
</script>

<body>
        <router-link :to="{name: "boardview", params: {no: 3}}">3번 게시글</router-link>
</body>
```
