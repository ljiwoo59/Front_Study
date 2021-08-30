# JavaScript
* 프로토타입 기반의 스크립트 프로그래밍 언어로 객체지향 개념 지원
* 개발자가 별도의 컴파일 작업을 수행하지 않는 인터프리터 언어
* 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 지원하는 *멀티 패러다임 프로그래밍 언어*

## 선언
* HTML 에서 **\<script>** 사용
  * ***src*** : 외부의 JavaScript 파일을 HTML 문서에 포함할 때 사용
  * ***type*** : 미디어 타입을 지정할 때 사용
    * "text/javascript"
  * *\<head>* 나 *\<body>* 안 어느 곳에서나 선언 가능
    * *\<head>* : 브라우저의 각종 입/출력 발생 이전에 초기화되므로 브라우저가 먼저 점검함
    * *\<body>* : 브라우저가 HTML 부터 해석하여 화면에 그리기 때문에 속도가 빠름 

## 기본 문법
### [변수](https://github.com/ljiwoo59/Front_Study/blob/main/JavaScript/es6.html)
* 타입을 명시하지 않고 **var, let, const** 을 사용하여 선언
  * **var** : 재선언이 가능하며 전역 변수 취급
  * **let** : 재선언이 불가능하며 지역 변수 취급
  * **const** : 재선언이 불가능하며 지역 변수 취급
* **Variable Hoisting**
  * **var** 선언문이나 **function** 선언문 등 모든 선언문이 해당 *Scope* 의 처음으로 옮겨진 것 처럼 동작
  * 모든 선언문이 선언되기 이전에 참조가 가능 (대신 undefined)

### 자료형
* **Primitive Type**
  * *number, string, boolean, undefined (선언 되었지만 초기화 되지 않은 경우), object (null)*
  * **number**
    * 모든 숫자를 8byte 의 실수 형태로 처리
    * *Infinity* : **어떠한 수를 0 으로 나눌때**
    * *NaN* : 계산식의 결과가 **숫자가 아님**
  * **string**
    * 작은 따옴표 또는 큰 따옴표 사용 가능
    * [**Backtick** 사용 가능](https://github.com/ljiwoo59/Front_Study/blob/main/JavaScript/es6.html)
  * **boolean**
    * **비어있는 문자열, null, undefined, 0 은 false**
* **Object Type**
* 서로 다른 자료형의 연산 가능

### [객체](https://github.com/ljiwoo59/Front_Study/blob/main/JavaScript/objectTest.html)
* **Key 와 Value** 로 구성
* 함수는 일급 객체이므로 **value** 로 사용 가능
* **객체 리터럴**
  * var Name = {1개 이상의 property 추가}
* **Object 생성자 함수**
  * var Name = new Object();
  * 빈 객체 생성 후 *property* 또는 *method* 추가
* **생성자 함수**
  * function Name() {property}
  * *Property* 가 동일한 객체 여러개 간단히 생성 가능
* **. 또는 \["Key"]** 를 이용하여 **객체 속성 값 접근 및 변경, 추가**
  * **||** 연산자 사용 가능
    * var middle=employee["middle_name"] || "none";
* **delete** 를 이용하여 **속성 제거**
* 객체는 복사되지 않고 **참조 된다**

### [함수](https://github.com/ljiwoo59/Front_Study/blob/main/JavaScript/funtionTest.html)

---

## Window 객체
* **웹 브라우저에 작동하는 JavaScript 의 최상위 전역 객체**
  * **BOM (Browser Object Model)**
* **navigator** 객체
  * 브라우저 별로 다르게 처리 가능
  * 위치 정보를 알려주는 역할
* **location** 객체
  * 현재 페이지 주소와 관련 된 정보
* **history** 객체
  * 브라우저의 페이지 이력을 담음
* **opener** 객체
  * 부모 창을 컨트롤 가능
  * 값 전달, 새로 고침, 페이지 이동
* [함수를 호출하면 브라우저에서 제공하는 창을 연다](https://github.com/ljiwoo59/Front_Study/blob/main/JavaScript/eventTest.html)
  * **alert()** : 브라우저의 알림창
  * **confirm()** : 브라우저의 확인/취소 선택창
  * **prompt()** : 브라우저의 입력창
  * **open()** : 브라우저의 새창
  * **close()** : 현재 창 닫기

## [DOM (Document Object Model)](https://github.com/ljiwoo59/Front_Study/blob/main/JavaScript/login.html)
* **HTML 과 XML 문서의 구조를 정의하는 API 제공**
* 문서 요소로 집합을 트리 형태의 **계층 구조**로 HTML을 표현
  * 최상위 계층은 **document** 노드
* HTML 문서의 **검색과 조작 (추가, 수정, 삭제)** 가능
* **객체**
  * **createElement(tagName)** : Element node 생성
  * **createTextNode(text)** : Text node 생성
  * **appendChild(node)** : 객체에 node 를 child 로 추가
  * **removeChild(node)** : 객체의 자식 노드를 제거
  * **setAttribute(name, value)** : 객체의 속성을 지정
    * 웹 브라우저가 지원하는 태그의 속성도 사용 가능
  * **getAttribute(name)** : 객체의 속성 값을 조회
  * **getElementById(id)** : tag 의 **id** 속성이 일치하는 element **객체** 가져오기
  * **getElementsByClassName(classname)** : tag 의 **class** 속성이 일치하는 element **배열** 가져오기
  * **getElementsByTagName(tagname)** : **tagname** 이 일치하는 element **배열** 가져오기
  * **getElementByName(name)** : tag 의 **name** 속성이 일치하는 element **배열** 가져오기
  * **querySelector(selector)** : selector 에 일치하는 **첫번째** element **객체** 가져오기
  * **querySelectorAll(selector)** : selector 에 일치하는 모든 element **배열** 가져오기

## [Event](https://github.com/ljiwoo59/Front_Study/blob/main/JavaScript/eventTest.html)
* 웹 페이지에서 여러 종류의 **상호작용이 있을 때 마다 이벤트 발생**
* **DOM** 에서 발생하는 이벤트 감지
  * 이벤트 대상이 되는 특정 **DOM** 을 선택하고 ***이벤트 핸들러*** 등록
* **이벤트 캡쳐링** : 이벤트가 발생한 요소를 포함하는 부모 HTML 로부터 이벤트의 근원지인 자식요소까지 검사
  * 캡쳐 속성의 이벤트 핸들러가 등록되어 있으면 수행
* **이벤트 버블링** : 이벤트 발생 요소부터 요소를 포함하는 부모 요소까지 올라가면서 이벤트를 검사
  * 버블 속성의 이벤트 핸들러가 등록되어 있으면 수행

## Web Storage
* **localStorage**
  * 데이터를 사용자 로컬에 보존하는 방식
  * 데이터를 저장, 덮어쓰기, 삭제 등 조작 가능
  * * **Key** 와 **Value** 을 하나의 세트로 저장
  * 도메인과 브라우저별로 저장
  * **Cookie** 와의 차이점
    * 영구적 이용 가능
    * 언제든 사용 가능
  * **sessionStorage** 와의 차이점
    * *localStorage* : 세션이 끊겨도 사용 가능
    * *sessionStorage* : 같은 세션만 사용 가능
