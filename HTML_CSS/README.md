# HTML
* *Hypertext Markup Language*
* **문서 구조**를 기술하는 언어
* 시작 tag 와 종료 tag 가 있으며, tag 사이에 문서 내용을 정의

## tag 와 속성
* 전체 구성은 *html, head, body* tag 로 구성
  * \<html> : HTML 문서 전체를 정의
    * \<head> : \<title>, \<meta>, \<style>, \<script>, \<link> 포함 가능
    * \<body> : 웹브라우저에 보여질 문서의 내용을 작성
* **Global attribute**
  * 어느 tag 에나 넣어서 사용할 수 있음
  * ***class*** : tag 에 적용할 **스타일의 이름**을 지정
    * **중복 가능**
    * \<div class="content">\</div>
  * ***dir*** : 내용의 텍스트 방향을 지정
    * 왼쪽 >> 오른쪽 (기본값, *ltr*)
    * 오른쪽 >> 왼쪽 (*rtl*)
    * \<p dir="rtl">\<\p>
  * ***id*** : tag 에 **유일한** ID 를 지정
    * **중복 불가능**
    * javascript 에서 주로 사용
    * \<input type="text" id="userid">
  * ***style*** : 인라인 스타일을 적용하기 위해 사용
    * \<p style="color:red; text-align:center;>\<\p>
  * ***title*** : tag 에 추가 정보를 지정
    * \<p>\<abbr title="Web Application Server">\<\abbr>\<\p>

## Markup Elements
### Formatting Elements
|tag|설명|
|---|----|
|**\<abbr>**|생략된 약어 표시. *Title 속성*을 함께 사용|
|**\<address>**|연락처 정보 표시|
|**\<blockquote>**|긴 인용문구 표시, 좌우로 들여쓰기가 됨|
|**\<q>**|짧은 인용문구 표시, 좌우로 따옴표가 붙음|
|**\<cite>**|웹 문서나 포스트에서 참고 내용 표시|
|**\<pre>**|공백, 줄바꿈 등 입력된 그대로 화면에 표시|
|**\<code>**|컴퓨터 인식을 위한 소스 코드|
|**\<mark>**|특정 문자열을 강조. 화면에는 하이라이팅 됨|
|**\<hr>**|구분선|
|**\<b>, \<strong>**|굵은 글씨로 표시, 특정 문자열을 강조(\<strong>)|
|**\<i>, \<em>**|*italic* 표시, 특정 문자열을 강조(\<em>)|
|**\<big>, \<small>**|큰 글자, 작은 글자로 표시|
|**\<sup>, \<sub>**|위 첨자, 아래 첨자로 표시|
|**\<s>, \<u>**|취소선, 밑줄|

### 목록형 Elements
* 하나 이상의 하위 tag 를 포함
* 각 항목을 들여쓰기로 표현
* 번호 또는 심볼을 이용해서 목록을 표현

|tag|설명|
|---|----|
|**\<ul>**|번호 없는 목록을 표시. 항목 앞에 심볼을 표시|
|**\<ol>**|번호 있는 목록을 표시. 숫자, 알파벳, 로마숫자 등으로 표시|
|**\<li>**|목록 항목 \<ul> 이나 \<ol> 하위에서 사용|
|**\<dl>**|용어 정의와 설명에 대한 내용을 목록화해서 표시|
|**\<dt>**|용어 목록의 정의 부분을 나타냄|
|**\<dd>**|용어 목록의 설명 부분을 나타냄|

### Table Elements
* **\<thead>, \<tbody>, \<tfoot>** 을 사용하여 **row** 를 그룹화
  * 각 행 그룹은 최소 하나 이상의 **\<tr>** 을 가져야 함
  * 테이블의 Cell 은 **머리글 (\<th>)** 이나 **데이터 (\<td>)** 를 가질 수 있음
* **\<colgroup>** 과 **\<col>** 은 **col** 그룹을 위한 추가적인 구조 정보 제공
  * **\<colgroup>** 은 명시적인 열 그룹을 만듬
    * ***span*** 은 열 그룹에서 열의 개수를 정의
  * **\<col>** 은 열을 묶어 그룹핑 함
    * ***span*** 은 \<col> 에 의해 묶여진 열의 개수
* **\<caption>** 은 **table 제목**을 정의하며 *\<table>* 바로 밑에 위치
* ***cellspacing*** : table Cell 과 Cell 사이의 공간
* ***cellpadding*** : Cell 외곽과 Cell 컨텐츠 사이 공간
* **\<td> 병합**
  * ***colspan*** : 두 개 이상의 열을 하나로 합침
  * ***rowspan*** : 두 개 이상의 행을 하나로 합침

### Image Elements
* **\<img>**
  * *src* : 이미지 경로
  * *height, width* : 이미지 사이즈
  * *alt* : 이미지를 표시할 수 없을 때 대신하여 보여질 텍스트 지정 
* **\<figure>** : 설명 글을 붙여야 할 대상을 지정
  * **\<figcaption>** : *설명글이 필요한 대상*은 **\<figure>** 로 묶고 설명 글은 **\<figcaption>** 으로 묶는다

### Link Elements
* **\<a>** : 하나의 문서에서 **다른 문서**로 연결
  * ***href*** : 하이퍼링크를 클릭했을때 이동할 문서의 URL 이나 문서의 책갈피 지정
    * *href="**#**anchor name"*: **같은 페이지** 안에서 특정 요소를 클릭 시 그 위치로 한 번에 이동
  * ***target*** : 하이퍼링크를 클릭했을 때 현재 윈도우 또는 새로운 윈도우에서 이동할지를 지정
    * *_blank* : 링크 내용이 새 창이나 새 탭에서 열림
    * *_self* : 기본값. 링크가 있는 화면에서 열림
    * *_parent* : 프레임을 사용했을 때 링크 내용을 부모 프레임에 표시
    * *_top* : 프레임을 사용했을 때 프레임에서 벗어나 링크 내용을 전체 화면으로 표시
* **\<map>** : 하나의 이미지에 **여러 개의 link** (Click 위치에 따라 서로 다른 link)
  * \<map name="map name">\<area>\<area>\<\map>
  * **\<area>** : 이미지에 영역을 표시
    * *href, target, shape (링크로 사용할 영역의 형태)*
* **\<link>** : 문서와 외부 자원을 연결
  * 주로 스타일시트를 연결하기 위한 용도로 사용
  * *\<head>* 위치에 정의하며 여러 자원 연결 가능
  * *rel* : 현재 문서와 연결된 문서 사이의 연관관계 지정
  * *href* : 연결된 문서의 위치를 지정

### Frame Elements
* **\<iframe>**
  * 화면의 일부분에 다른 문서를 포함
  * *src, height, width, name*

### Form Control Elements
* 사용자로부터 데이터를 입력 받아 서버에서 처리하기 위한 용도로 사용
* 사용자의 요청에 따라 서버는 HTML form 을 전달
* 사용자는 HTML form 에 적절한 데이터를 입력한 후 서버로 전송 : **submit**
* 서버는 사용자의 요청을 분석한 후 데이터를 등록하거나, 원하는 데이터를 조회하여 결과를 반환
* 사용자가 입력하기 위한 control 요소들은 모두 **\<form>** 하위에 위치해야 서버로 전송됨
  * 어떤 프로그램을 이용해 처리할 것인지 결정
  * ***method*** : 사용자가 입력한 내용을 서버로 어떻게 넘겨줄지 결정
    * *GET* : 주소 표시줄에 사용자가 입력한 내용이 표시
    * *POST* : 사용자가 입력한 내용이 표시되지 않음
  * ***name*** : *form* 의 이름을 지정
  * ***action*** : 내용들을 처리해 줄 서버상의 프로그램 지정
  * ***target*** : *action* 에서 지정한 스크립트 파일을 현재 창이 아닌 다른 위치에 열도록 지정
  * *autocomplete* : 자동완성 기능. 기본값

|tag|설명|
|---|----|
|**\<form>**|사용자에게 입력 받을 항목을 정의. 내부에 여러 개의 control 요소를 포함|
|**\<input>**|텍스트 box, 체크 box, 라디오 버튼 등 사용자가 데이터를 입력할 수 있도록 함|
|**\<textarea>**|여러 줄의 문자를 입력할 수 있도록 함|
|**\<button>**|버튼 표시|
|**\<select>**|select box (드롭다운, 콤보box) 표시|
|**\<optgroup>**|select box 의 각 항목들을 그룹화|
|**\<option>**|select box 의 각 항목들을 정의|
|**\<label>**|마우스를 이용하여 *\<input>* 항목 선택 시 편리함 제공|
|**\<fieldset>**|입력 항목들을 그룹화|
|**\<legend>**|*\<fieldset>* 의 제목을 지정|

* **\<input>** : *type* 속성에 따라 여러 가지 형태로 표시
  * **id** 속성은 여러 번 사용된 form 요소를 구분하기 위해 사용
    * 중복 불가
  * **name** 은 중복 가능
  * *text, password, search, tel, url, email, datetime, datetime-local, date, month, week, time, number, range, color, checkbox, radio, file, submit, image, reset, button, hidden*

### 공간 분할 Elements
* **\<div>**
  * block 형식으로 공간을 분할
  * 전체 틀을 만들 때 사용
  * 각각의 블록을 알맞게 배치하고 CSS 를 활용하여 스타일 적용
  * 자동 줄 바꿈이 일어나면서 세로로 나열
  * 문장을 감쌌을 때 박스 형태로 영역이 설정되고 그 안에 정렬
  * *margin* 은 4방향 적용
* **\<span>**
  * inline 형식으로 공간을 분할
  * *\<div>* 와 *\<p>* 와 함께 일부분에 스타일을 적용시키기 위해 사용
  * 자동 줄 바꿈이 일어나지 않고 가로로 나열
  * 문장을 감쌌을 때 줄 단위로 영역이 설정되어 텍스트가 노출되는 영역만 포함
  * *margin* 은 양옆으로만 적용


---

# CSS
* *Cascading Style Sheets*
* **문서를 화면에 표현하는 방식**을 정의한 언어

## CSS 규칙
* **선택자 (selector) 와 선언 (declarattion)**
  * *선택자* : 규칙이 적용되는 element
  * *선언* : 선택자에 적용될 스타일
    * { 속성 : 값; }
* 여러 선택자에 동일한 스타일을 적용할 때, **,** 로 구분하여 나열 (선택자 그룹화)
* 선언 안에 하나 이상의 속성을 작성할 수 있으며, *;* 로 구분

## 스타일 적용방법
* 우선순위: 인라인 > 내부 > 외부
* **외부 스타일시트**
  * css 파일을 **\<link>** 나 **@import** 로 HTML 문서에 연결하여 사용
  * 여러 페이지에 동일한 스타일을 적용해하 할 경우 사용
```html
<link rel="stylesheet" type="text/css" href="path/filenmae.css">
```
```html
<style type="text/css">
  @import url("path/filename.css");
</style>
```
* **내부 스타일시트**
  * \<head> 안에 **\<style>** 을 작성하여 HTML 내부에 css 적용
  * 페이지마다 반복해서 작성해야하는 단점
* **인라인 스타일시트**
  * **style attribute** 를 사용하여 개별 element 에 스타일 적용
  * 우선순위가 제일 높음

## 선택자
* CSS 규칙 적용 타겟
* **일반 선택자** : 전체 선택자, 타입 선택자, 클래스 선택자, ID 선택자
* **복합 선택자** : 자식 선택자, 하위 선택자, 인접 형제 선택자, 일반 형제 선택자
* 그 외에 *가상 클래스 선택자, 가상 엘리먼트 선택자, 속성 선택자*
* 속성 값 뒤에 *!important* 를 붙이면 같은 요소에 대해 보다 우선적으로 스타일 적용

|선택자|사용법|의미|우선순위|
|---|----|---------|-------|
|전체 선택자|**\*{}**|HTML 문서내 **모든** element 선택|2|
|타입 선택자|**tagName{}**|**매칭**되는 element 선택|1|
|클래스 선택자|**.className{}**|**class** 속성 값과 매칭되는 element 선택|1|
|ID 선택자|**#idName{}**|**id** 속성 값과 매칭되는 element 선택|1|
|하위 선택자|**E1 E2{}**|하위 element 선택 (1단계 이상 하위요소에 모두 적용)|1|
|자식 선택자|**E1 > E2**|직속 하위 element 선택 (1단계 하위요소에만 적용)|2|
|인접 형제 선택자|**E1 + E2{}**|인접 형제 관계인 element 선택 (여러 형제가 존재할 경우 첫번째 요소만 선택)|2|
|일반 형제 선택자|**E1 ~ E2{}**|형제 관계인 element 선택 (모든 형제 요소 선택)|3|

## Box Model
* **Content, Padding, Border, Margin**
* 컨텐츠를 정렬 또는 위치를 지정하기 위해 *Padding, Margin* 활용
* **Margin, Padding**
  * 값이 1개 일때, ***모든면***에 적용
  * 값이 2개 일때, 첫번째 값은 ***top, bottom***, 두번째 값은 ***right, left*** 적용
  * 값이 3개 일때, 첫번째 값은 ***top***, 두번째 값은 ***right, left***, 세번째 값은 ***bottom*** 적용
  * 값이 4개 일때, ***top, right, bottom, left*** 적용

## Positioning
* **static** : 기본값. ***top*** 과 ***left*** 에서의 거리 지정 불가
* **relative** : ***top*** 과 ***left*** 거리 지정 가능
* **absolute** : 절대적인 위치 지정
* **fixed** : 스크롤이 일어나도 항상 화면상의 지정된 위치에 있음
