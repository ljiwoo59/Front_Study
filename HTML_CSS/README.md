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
  * **class** : tag 에 적용할 **스타일의 이름**을 지정
    * **중복 가능**
    * \<div class="content">\</div>
  * **dir** : 내용의 텍스트 방향을 지정
    * 왼쪽 >> 오른쪽 (기본값, *ltr*)
    * 오른쪽 >> 왼쪽 (*rtl*)
    * \<p dir="rtl">\<\p>
  * **id** : tag 에 **유일한** ID 를 지정
    * **중복 불가능**
    * javascript 에서 주로 사용
    * \<input type="text" id="userid">
  * **style** : 인라인 스타일을 적용하기 위해 사용
    * \<p style="color:red; text-align:center;>\<\p>
  * **title** : tag 에 추가 정보를 지정
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

### Table
* **\<thead>, \<tbody>, \<tfoot>** 을 사용하여 **row** 를 그룹화
  * 각 행 그룹은 최소 하나 이상의 **\<tr>** 을 가져야 함
  * 테이블의 Cell 은 **머리글 (\<th>)** 이나 **데이터 (\<td>)** 를 가질 수 있음
* **\<colgroup>** 과 **\<col>** 은 **col** 그룹을 위한 추가적인 구조 정보 제공
  * **\<colgroup>** 은 명시적인 열 그룹을 만듬
    * ***span*** 은 열 그룹에서 열의 개수를 정의
  * **\<col>** 은 열을 묶어 그룹핑 함
    * ***span*** 은 \<col> 에 의해 묶여진 열의 개수
* **\<caption>** 은 **table 제목**을 정의하며 *\<table>* 바로 밑에 위치
* **cellspacing** : table Cell 과 Cell 사이의 공간
* **cellpadding** : Cell 외곽과 Cell 컨텐츠 사이 공간
* **\<td> 병합**
  * **colspan** : 두 개 이상의 열을 하나로 합침
  * **rowspan** : 두 개 이상의 행을 하나로 합침

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
