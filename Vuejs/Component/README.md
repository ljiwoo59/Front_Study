# Component
* Vue 의 가장 강력한 기능 중 하나
* HTML Element 를 확장하여 ***재사용 가능한 코드를 캡슐화***
* Vue Instance 이기도 하기에, 모든 옵션 객체를 사용
* Life Cycle Hook 사용 가능
* **전역 컴포넌트**와 **지역 컴포넌트**

### 전역 컴포넌트
```html
<!-- component: 재사용 가능한 화면 구성 요소 (data, methods, filter...)
    사용할 때는 태그로 사용한다
    동일한 화면이 여러곳에서 사용될 때 유용
-->
<div id="app">
<my-compo></my-compo>
</div>

<div id="app2">
<my-compo></my-compo>
</div>

<script>
// 전역 컴포넌트
Vue.component("my-compo", {
    template: "<div>전역 컴포넌트 입니다.</div>",
});

new Vue({
    el: "#app"
});

let v2 = new Vue({
    el: "#app2"
});
</script>
```

* **Vue.componenet(tagName, options)**

### 지역 컴포넌트
```html
<!-- component: 재사용 가능한 화면 구성 요소 (data, methods, filter...)
    사용할 때는 태그로 사용한다
    동일한 화면이 여러곳에서 사용될 때 유용
-->
<div id="app">
<my-local></my-local>
<my-local2></my-local2>
</div>

<script>
let loc = {
    template: "<div>지역 컴포넌트 입니다.</div>"
};        
        
new Vue({
    el: "#app",
    components: { 
        // 지역 컴포넌트
        "my-local": {
            template: "<div>지역 컴포넌트 입니다.</div>"
        },
        "my-local2" : loc
    }
});
</script>
```

* *components* 인스턴스 옵션으로 등록함으로서 다른 인스턴스/컴포넌트 범위에서만 사용할 수 있는 컴포넌트 생성
* **data() { return{} }** 를 사용하여 데이터 공유 문제 해결

# 컴포넌트 간 통신
* *상위 (부모) - 하위 (자식)* 컴포넌트 간의 data 전달 방법
* **부모에서 자식: *props* 라는 특별한 속성 전달**
* **자식에서 부모: *event* 로만 전달 가능**

## 상위에서 하위 컴포넌트로 data 전달
```html
<div id="app">
<h2>props test</h2>
<child-component propsdata="안녕하세요"></child-component>
<!-- 동적 props -->
<!-- <child-component v-bind:propsdata="message"></child-component> -->
</div>

<script>
//하위 컴포넌트
Vue.component('childComponent', {
props: ['propsdata'],
template: '<span>{{ propsdata }}</span>',
});
        
new Vue({
el: '#app',
// data() {
//   return {
//     message: 'hello',
//   };
// },
});
</script>
```

* 하위 컴포넌트는 상위 컴포넌트의 값을 *직접 참조 불가능*
* data 와 마찬가지로 *props 속성의 값*을 template 에서 사용 가능

### 렌더링 과정
1. *new Vue()* 로 상위 컴포넌트의 인스턴스를 하나 생성
2. *Vue.component()* 를 이용하여 하위 컴포넌트인 **child-component 생성**
3. *\<div id="app">* 내부에 *\<child-component>* 가 있기 때문에 **하위 컴포넌트**가 됨
  * 처음 생성한 인스턴스 객체가 #app 의 요소를 가지기 때문에 부모와 자식 관계 성립
4. 하위 컴포넌트에 **props** 속성 정의 *\['propsdata']*
5. html 에 *컴포넌트 태그(child-component)* 를 추가
6. 하위 컴포넌트에 *v-bind* 속성을 사용하면 상위 컴포넌트의 **data 의 key 에 접근 가능** (message)
7. 상위 컴포넌트의 message 속성 값인 String 값이 *하위 컴포넌트의 **propsdata 로 전달***
8. 하위 컴포넌트의 template 속성에 정의된 *\<span>{{propsdata}}\</span>* 에게 전달

### 동적 props
* ***v-bind*** 를 사용하여 부모의 데이터에 props 를 동적으로 바인딩 가능
* 데이터가 상위에서 업데이트 될 때마다 하위 데이터로도 전달

### 객체의 속성 전달 props
```html
post : {
   id: 1,
   title: 'Hello'
}

<child v-bind="post"></child>

// 아래와 같이 동작
<child v-bind:id="post.id" v-bind:title="post.title></child>
```

* 오브젝트의 모든 속성을 전달 할 경우, v-bind:prop-name 대신 v-bind 만 작성함으로 모든 속성 전달 가능

## 하위에서 상위 컴포넌트로 event 전달
```html
// 이벤트 발생
this.$emit("이벤트명");

// 이벤트 수신
<child v-on:이벤트명="상위 컴포넌트 메소드명"></child>
```

* 하위 컴포넌트에서 상위 컴포넌트가 지정한 이벤트를 발생 *($emit)*
* 상위 컴포넌트는 하위 컴포넌트가 발생한 이벤트를 수신 *(on)* 하여 data 처리

### 비 상하위간 통신
```html
var bus = new Vue();

// 컴포넌트A
bus.$emit('id-selected', 1);

// 컴포넌트B
bus.$on('id-selected', function(id) {});
```

* 비어있는 Vue Instance 객체를 *Event Bus* 로 사용
* 상태관리 라이브러리인 ***Vuex*** 사용 권장
