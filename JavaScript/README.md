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

## Web Browser 와 Window 객체
* **Window 객체는 웹 브라우저에 작동하는 JavaScript 의 최상위 전역 객체**
  * **BOM (Browser Object Model)**
* 함수를 호출하면 브라우저에서 제공하는 창을 연다
  * **alert()** : 브라우저의 알림창
  * **confirm()** : 브라우저의 확인/취소 선택창
  * **prompt()** : 브라우저의 입력창
