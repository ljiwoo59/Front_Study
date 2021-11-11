# Customer Management
![image](https://user-images.githubusercontent.com/54715744/141301913-c2c54141-c778-4450-b191-0dd718f6f8b0.png)


## [index.html](https://github.com/ljiwoo59/Front_Study/blob/main/Vuejs/VueCli/CustomerManagement/public/index.html)
* \<div id="app" />

## [main.js](https://github.com/ljiwoo59/Front_Study/blob/main/Vuejs/VueCli/CustomerManagement/src/main.js)
* **Vue 객체** 생성
* *#app* 에 화면 mount

## [App.vue](https://github.com/ljiwoo59/Front_Study/blob/main/Vuejs/VueCli/CustomerManagement/src/App.vue)
* 여러개의 vue file 을 **import** 해서 화면 구성
  * *CustomerHeader, CustomerUpper, CustomerList*
* 서버와 비동기 통신

## [CustomerHeader.vue](https://github.com/ljiwoo59/Front_Study/blob/main/Vuejs/VueCli/CustomerManagement/src/components/CustomerHeader.vue)
* 헤더 컴포넌트
* 이미지, 제목..

## [CustomerUpper.vue](https://github.com/ljiwoo59/Front_Study/blob/main/Vuejs/VueCli/CustomerManagement/src/components/CustomerUpper.vue)
* 입력창과 버튼
  * 번호, 이름, 주소
  * 등록, 수정, 삭제, 검색, 전체, 초기화
* *App.vue* 로 함수 호출을 요청하고, 속성을 전달 받는다
  * 입력 정보를 이용한 등록, 수정, 삭제, 검색 함수 호출 요청
  * *CustomerList* 에서 *App.vue* 에게 요청한 선택 함수의 결과를 전달 받아, 입력창에 표시한다

## [CustomerList.vue](https://github.com/ljiwoo59/Front_Study/blob/main/Vuejs/VueCli/CustomerManagement/src/components/CustomerList.vue)
* 정보 리스트
* *App.vue* 로 함수 호출을 요청하고, 속성을 전달 받는다
  * 전체 리스트 정보를 받아온다
  * 정보 클릭 시, 해당 정보의 번호를 이용한 선택 함수 호출을 요청
