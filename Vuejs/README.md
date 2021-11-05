# Vue.js
* 사용자 인터페이스를 만들기 위해 사용하는 오픈 소스 Progressive Framework
* *접근성, 유연성, 고성능*

```html
<!-- Vue.js CDN -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## MVVM
* **Model + View + ViewModel**
 * **Model** : 순수 자바스크립트 객체
 * **View** : 웹페이지의 DOM
 * **ViewModel** : *Vue* 의 역할
* 기존에는 자바스크립트로 *View* 에 해당하는 DOM 에 접근하거나 수정하기 위해 *jQuery* 와 같은 라이브러리 이용
* ***Vue*** 는 *View* 와 *Model* 을 연결하고 자동으로 *바인딩*하므로 ***양방향 통신***을 가능하게 함

---

# Vue Instance
```html
<script>
        var vm = new Vue({ // 인스턴스
            // el, data: Vue 객체가 가지는 속성
            el: "#app", // Vue 객체가 관리하는 화면 요소
            data () {
                return {
                    message: "Hello, Vue!",
                }
            }
        }); // 화면과 데이터를 연결시켜 주는 역할
</script>
```
* **el** : *Vue* 가 적용될 요소 지정
 * CSS Selector / HTML Element
* **data** : *Vue* 에서 사용되는 정보 저장
 * 객체 또는 함수 형태 (함수 형태를 주로 쓴다)
* **template** : 화면에 표시할 HTML, CSS 등의 마크업 요소를 정의하는 속성
 * *Vue* 의 데이터 및 기타 속성들도 함께 화면에 그릴 수 있다
* **methods** : 화면 로직 제어와 관계된 method 를 정의하는 속성
 * 마우스 클릭 이벤트 처리와 같이 화면의 전반적인 이벤트와 화면 동작과 관련된 로직을 추가
* **created** : *Vue* 인스턴스가 생성되자 마자 실행할 로직을 정의

## 유효 범위
* HTML 의 특정 범위 안에서만 옵션 속성들이 적용
* *el 속성*과 밀접한 관계
* *뷰 라이브러리 파일 로딩 -> 인스턴스 객체 생성(옵션 속성 포함) -> 특정 화면 요소에 인스턴스를 붙임 -> 인스턴스 내용이 화면 요소로 변환 -> 변환된 화면 요소를 사용자가 확인*
 * ***Vue()*** 로 인스턴스 생성
 * *el 속성*에 지정한 화면 요소(DOM) 에 인스턴스 부착
 * *data 속성*이 el 속성에 지정한 화면 요소와 그 이하 레벨의 화면 요소에 적용되어 값이 치환

## Life Cycle
<img src="https://user-images.githubusercontent.com/54715744/140309144-326443d7-9c0e-4b82-813c-2445ee3dd8cd.png" width="100%" height="100%">

* Instance **생성**, 생성된 Instance 를 화면에 **부착**, 부착된 Instance 의 내용이 **갱신**, Instance 가 **소멸**
* **beforeCreate** : Vue Instance 가 생성되고 각 정보의 설정 전에 호출
 * DOM 과 같은 화면 요소에 접근 불가
* **created** : Vue Instance 가 생성된 후 데이터들의 설정이 완료된 후 호출
 * Instance 가 화면에 부착하기 전이기에, *template 속성*에 정의된 DOM 요소는 접근 불가
 * *서버에 데이터를 요청(http 통신)하여 받아오는 로직을 수행*하기에 좋다
* **beforeMount** : 마운트가 시작되기 전에 호출
* **mounted** : 지정된 element 에 Vue Instance 데이터가 마운트 된 후에 호출
 * *template 속성*에 정의한 화면 요소에 접근할 수 있어 *화면 요소를 제어하는 로직 수행*
* **beforeUpdate** : 데이터가 변경될 때, virtual DOM 이 랜더링, 패치 되기 전에 호출
* **updated** : Vue 에서 관리되는 데이터가 변경되어 DOM 이 업데이트 된 상태
 * 데이터 변경 후 화면 요소 제어와 관련된 로직 추가
* **beforeDestroy** : Vue Instance 가 제거되기 전에 호출
* **destroyed** : Vue Instance 가 제거된 후에 호출

# Template
## Interpolation (보간법)
### 문자열
* 데이터 바인딩의 가장 기본 형태는 *"Mustache" 구문 (이중 중괄호)* 를 사용한 텍스트 보간
 * {{속성명}}

#### v-once
* 데이터 변경 시, 업데이트 되지 않는 일회성 보간 수행

### 원시 HTML
* 이중 중괄호는 *HTML 이 아닌 일반 텍스트*로 데이터를 해석

#### v-text
* HTML 을 일반 텍스트로 출력

#### v-html
* 실제 HTML 출력

### JavaScript 표현식 사용
* *데이터 바인딩 내*에서 JavaScript 표현식 기능 지원
* 각 바인딩에 *하나의 단일 표현식*만 포함 가능

```html
{{ number + 1 }}
{{ true ? 'Yes' : 'No' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>

<!-- Error -->
<!-- 구문이므로 표현식이 아님 -->
{{ var a = 1 }}
<!-- 조건문은 삼항 연산자로 표현해야함 -->
{{ if (true) { return message } }}
```

## Directives
* **v-** 접두사가 있는 특수 속성
* 속성 값은 *단일 JavaScript 표현식* (v-for 예외)
* 표현식의 값이 변경될 때 사이드 이펙트를 반응적으로 DOM 에 적용
* **v-text, v-html, v-once, v-model, v-bind, v-show, v-if, v-else-if, v-else, v-for, v-cloak, v-on**

### v-text, v-html, v-pre
```html
<!-- 
    뷰 데이터 출력
        {{}}: 단순히 텍스트로만 출력한다
        v-pre: 뷰 데이터가 아닌 텍스트
        v-text: 단순텍스트
        v-html: html 형식으로 출력
-->
<h1>{{ msg }}</h1> <!-- 단순 텍스트 -->
<h1 v-pre>{{ msg }}</h1> <!-- 단순 텍스트 -->


text 로 인식: <div v-text="msg"></div> <!-- 단순 텍스트 -->
tag 로 인식: <div v-html="msg"></div> <!-- html 형식 -->
```

### v-on
```html
<!-- v-on: 이벤트 등록 -->
<button v-on:click="hello">welcome, vue!</button> <!-- welcome 을 누르면 hello function 이 실행됨 -->
<button v-on:click="hello2">welcome2, vue!</button>
```
* *v-on:이벤트종류="실행함수"*

### v-model
```html
<!-- v-model: 양방향 연결 directive 
        화면 요소와 뷰 객체의 데이터를 서로 연결
-->
<div id="app">
    <input type="text" v-model="id" />
    <!-- tommy 라면 이미 사용중, "" 이면 아이디를 입력해주세요, 아니면 사용가능한 아이디입니다-->
    <span v-if="id =='tommy'">사용중인 아이디 입니다.</span>
    <span v-else-if="id == ''">아이디를 입력해주세요.</span>
    <span v-else>사용가능한 아이디입니다.</span>
</div>

<script>
    new Vue({
        el: "#app",
        data() {
            return {
                id: "",
            }
        }
    });
</script>
```

* **양방향 바인딩** 처리를 위해 사용
 * form 의 input, textarea

### v-bind
```html
<!-- v-bind: 태그가 가지고 있는 속성과 뷰 객체가 가지고 있는 데이터를 연결 -->
<h5 v-bind:id="uid">vue test</h5>
<h5 :id="uid2">vue test</h5> <!-- v-bind 는 축약형으로 : 만 붙일 수 있음 -->
<img :src="src" />

<script>
    new Vue({
        el: "#app",
        data() {
            return {
                uid: "abc",
                uid2: "xyz",
                src: "./img/blueBlouse.png"
            };
        }
    });
</script>       
```

* **element 속성과 바인딩** 처리를 위해 사용
* 약어로 **:** 로 사용 가능

### v-if, v-show
```html
<!--
    v-if: 조건에 따라 화면에 표시
        조건에 맞아야만 태그 생성
        조건에 맞지 않으면(false), 주석 처리
        초기 랜더링 비용은 적지만 토글 비용이 크다

    v-show: 조건에 따라 화면에 표시
        화면에 표시할 태그를 미리 생성
        조건에 맞지 않으면(false), display:none 처리
        초기 랜더링 비용은 크지만 토글 비용이 작다
-->
<a href="#" v-if="flag1">gogo vue!</a>
<a href="#" v-else>stop vue!</a>
<p v-show="flag2">run, vue!</p>
```

* **조건에 따라 element 를 화면에 렌더링**
 * **v-show** : *style* 의 display 를 변경
   * 항상 렌더링
   * template 미지원
   * *v-else* 미지원
 * **v-if** : 주석 처리 (element 삭제)
   * 조건에 맞을 경우만 렌더링
   * template 지원

### v-for
```html
<div id="app">
    <ul>
        <!-- 단순 for 문 -->
        <li v-for="i in 5">{{i}} * 5 = {{i * 5}}</li>

        <!-- 배열 for 문 -->
        <li v-for="book in books">I like "{{book}}"</li>

        <!-- json 하나 -->
        <li v-for="(value, key, index) in story">
            {{index}}. {{key}} : {{value}}
        </li>

        <!-- json 배열일때는 하나의 json 을 뽑는다 -->
        <li v-for="(story, index) in stories">
            {{index + 1}} . {{story.writer}} : {{story.name}}
        </li>
    </ul>
</div>

<script>
    new Vue({
        el: "#app",
        data() {
            return {
                books:["햄릿","콩쥐팥쥐","누가 내 치즈를 옮겼을까"],
                story: {
                    author: "세익스피어",
                    title: "tempest",
                    publisher: "green house",
                },
                stories: [
                    {
                        writer: "james lee",
                        name: "good job",
                    },
                    {
                        writer: "billy jones",
                        name: "how are you, today?",
                    },
                    {
                        writer: "david min",
                        name: "farewell to arms",
                    },
                ],
            }
        }
    });
</script>
```

* **배열이나 객체의 반복**
* *v-for="요소변수이름 in 배열" / v-for="(요소변수이름, 인덱스) in 배열"*

### v-cloak
```html
<style>
    [v-clock]::before {
         content: '로딩중...'
    }
    [v-clock] > * {
         display:none;
    }
</style>

<div id="app">
    <div v-cloak>
         v-clock - {{ msg }}
    </div>
</div>
```

* **Vue Instance 가 준비될 때 까지 mustache 바인딩을 숨김**
* *\[v-clock] {display:none}* 과 같은 CSS 규칙과 함께 사용
* Vue Instance 가 준비되면 *v-cloak* 는 제거됨

### template
```html
<template v-for="center in centerList">
    <tr>
        <td>{{center.id}}</td>
        <td><a :href="'./detail.html?id=' + center.id">{{center.centerName}}</a></td>
        <td>{{center.createdAt}}</td>
        <td>{{center.updatedAt}}</td>
    </tr>
</template>
```

* **여러 개의 태그들을 묶어 처리**해야 하는 경우
* *v-if, v-for, component* 등과 함께 많이 사용

### Vue method
```html
<div id="app">
    <h1>{{hello()}}</h1>
</div>

<script>
    new Vue({
        el: "#app",
        data() {
            return {
                name: 홍길동
            };
        },
        methods: {
            hello() {
                alert("hi~~~" + this.name);
            }
        }
    });
</script>
```

* **생성과 관련된 data 및 method 의 정의**
* method 안에서 data 를 *this.데이터이름*으로 접근 가능

---

## Computed
```html
<!-- computed: computed 가 참조하는 데이터가 수정되지 않는 이상 캐쉬값은 가져다 사용
    이전에 계산해 두었던 값을 재사용할 때 좋다
    캐싱 기능을 가지고 있음
    method format
-->
<div id="app">
<p>{{ hello }}</p>
<button @click="reverse">reverse</button> <!-- v-on:click -->
</div>

<script>
new Vue({
    el: "#app",
    data() {
        return {
            message: "hello, vue"
        }
    },
    computed: {
        hello() {
            console.log("computed");
            this.message = this.message.split("").reverse().join("");
            return this.message;
        }
    },
    methods: {
        reverse() {
            console.log("method");
            this.message = this.message.split("").reverse().join("");
            return this.message;
        }
    }
});
```

## Watcher
```html
<!-- watch: 데이터 변화를 감지하여 자동으로 특정 로직 수행
    computed 와 유사 - 데이터 호출(서버로 비동기 호출)과 같이 시간이 많이 걸리는 작업에 적합
    method format - 감시할 데이터 이름으로 함수이름 정하기
-->
<div id="app">
<input type="text" v-model="message">
</div>

<script>
new Vue({
    el: "#app",
    data() {
        return {
            message: "hello, vue!"
        }
    },
    watch: {
        message: function(val) { // message() {}
            // val: 변동이 생긴 값
            console.log(val);
        }
    }
}); 
</script>
```

## Filters
```html
<!-- filters: 원래의 데이터를 가공하는 작업
    {{data | filters}} : 원래 데이터(왼쪽)를 필터(오른쪽)으로 가공해서 목적에 맞게 변환시킴
    method format
-->
<div id="app">
<p>{{message}}</p>
<p>{{message | toLower}}</p>
<p>{{message | toUpper}}</p>
</div>

<script>
new Vue({
    el: "#app",
    data() {
        return {
            message: "hello, VUE"
        }
    },
    filters: {
        toLower(val) {
            return val.toLowerCase();
        },
        toUpper(val) {
            return val.toUpperCase();
        }
    }
});
</script>
```
