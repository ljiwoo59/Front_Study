# AJAX
* **Asynchronous Javascript and XML**
* 웹에서 화면을 갱신하지 않고 데이터를 서버로부터 가져와 처리하는 방법
* **XMLHttpRequest (XHR)** 객체로 데이터를 전달하고 **비동기 방식**으로 결과를 조회
* 일반 요청
  * data 를 입력 후 event 발생
  * 서버에서 data 를 이용하여 logic 처리
  * logic 처리에 대한 결과에 따라 응답 page 를 생성하고 client 에 전송 (화면 전환)
* Ajax 요청
  * data 를 입력 후 event 발생
  * 서버에서 요청을 처리한 후 Text, XML 또는 JSON 으로 응답
  * client 에서는 이 응답 data 를 이용하여 화면 전환 없이 현재 페이지에서 동적으로 화면을 재구성

## XMLHttpRequest - JavaScript
* **자바스크립트**가 ***Ajax*** 방식으로 통신할 때 사용하는 객체
* 전송방식, 경로, 서버로 전송할 data 등 전송 정보를 담는 역할

### readyState
* 0 : Uninitialized
  * 객체만 생성 (open 메소드 호출 전)
* 1 : Loading
  * open 메소드 호출
* 2 : Loaded
  * send 메소드 호출. status 의 헤더가 아직 도착되기 전 상태
* 3 : Interactive
  * 데이터 일부를 받은 상태
* 4 : Completed
  * 데이터 전부를 받은 상태

### status
* 200 : OK
  * 요청 성공
* 403 : Forbidden
  * 접근 거부
* 404 : Not Found
  * 페이지 없음
* 500 : Internal Server Error
  * 서버 오류 발생

## $.ajax - jQuery
* **jQuery** 에서 ***Ajax*** 기능을 제공하는 가장 기본적인 함수
  * **$.ajax(options)**

### option
* async : 동기, 비동기를 지정 (기본 비동기)
* **url** : 대상 URL 지정
* **data** : 요청 매개변수를 지정
* **type** : 'GET' 또는 'POST' 등을 지정
  * *GET*
    * URL 에 데이터를 포함시켜 요청
    * 데이터를 Header 에 포함하여 전송
    * 보안에 취약
    * 전송하는 길이에 제한 있음
    * 캐싱 가능 (빠르게 접근하기 위해 레지스터에 데이터를 저장시켜 놓는 것)
  * *POST*
    * URL 에 데이터를 노출하지 않음
    * 데이터를 Body 에 포함
    * 보안성
    * 전송하는 길이에 제한 없음
    * 캐싱 불가
* **success(data, status, xhr)** : Ajax 성공 이벤트 리스너를 지정
* complete(xhr, status) : Ajax 완료 이벤트 리스너를 지정
* error(xhr, status, error) : Ajax 실패 이벤트 리스너를 지정
* timeout : 만료 시간을 지정
* jsonp : JSONP 매개변수 이름을 지정
* jsonpCallback : JSONP 콜백 함수 이름을 지정

### 함수
* **$.get(), $.post()
  * ***$.ajax()*** 의 옵션 속성 중 type 옵션이 미리 지정된 함수
* **$(selector).load()**
  * 서버로부터 내용을 조회하여, 선택자를 통해 탐색한 DOM 객체에 동적으로 삽입
  * 첫번째 인자는 필수 값으로 **HTML 을 조회할 서버 URL** 을 지정
  * 두번째 인자는 요청 시 **서버에 전달할 데이터**를 지정
  * 세번째 인자는 서버와 통신을 완료한 후에 수행할 **콜백함수**를 지정

### 데이터 전송 형식
* **CSV**
  * 각 항목을 쉼표로 구분해 데이터를 표현하는 방법
  * 많은 양의 데이터 전송 시 유리
  * 각가의 데이터가 어떤 내용인지 파악하기 어려움
* **XML**
  * *tag* 로 data 를 표현
  * *tag* 를 보면 각 data 가 무엇을 의미하는지 파악 가능
  * 복잡한 data 전달 가능
* **JSON**
  * *CSV* 와 *XML* 의 단점을 극복한 형식
  * 객체의 형식으로 data 표현
  * **Ajax** 사용시 거의 표준으로 사용되는 data 표현 방식

### Event 관리 (전역함수)
* 사용자가 진행상황을 알기 어렵다
* *Ajax 전역함수*를 사용하여 Ajax 처리 중에 진행 상태를 보여주는 기능을 구현 가능
* **ajaxStart** : Ajax 함수 실행, XHR 객체 생성 전
* **ajaxSend** : XHR 객체 생성 뒤, 서버전송 전
* **ajaxSuccess** : 서버요청 반환, 응답이 성공인 상태
* **ajaxError** : 서버요청 반환, 응답이 실패인 상태
* **ajaxComplete** : 서버요청 반환, *ajaxSuccess 또는 ajaxError* 호출된 후
* **ajaxStop** : 모든 Ajax 진행이 완료, 다른 전역 콜백이 호출된 후
