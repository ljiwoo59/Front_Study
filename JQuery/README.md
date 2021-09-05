# jQuery
* ***JavaScript Library***
* 어떠한 브라우저에서도 *동일*하게 동작
* 주요기능
  * **DOM 탐색과 조작**
  * **이벤트 바인딩과 처리**
  * **Ajax 프로그래밍**
  * **다양한 Effect 제공**

## 기본 구문
```javascript
$(selector).action();
```
* ***Selector***을 사용하여 **DOM 객체**를 탐색하고, 반환된 **WrapperSet**를 통해 함수 수행
  * *WrapperSet* 는 **Method Chain** 을 제공
  * *$(selector)\.func1()\.func2()\.func3()...;*
* **DOM 을 탐색하기 전에, 웹 브라우저에 문서가 모두 로드 되어있어야 함**
``` javascript
$(document).ready(function() {
  //TODO....
});

$(function() {
  //TODO...
});
```

## DOM 요소 선택 (Selector)
* **CSS 에서 사용하는 *Selector* 표현 방식** 사용
* DOM 탐색 결과로 **DOM 을 래핑한 객체** (*WrapperSet*) 를 반환

### Element Selector
* 요소, ID, 클래스, 다중, 복합, 모두 선택자 등

|종류|표현 방법|
|----|---------|
|**All selector**|$("\*")|
|**ID selector**|$("#id")|
|**Element selector**|$("elementName")|
|**Class selector**|$("\.className")|
|**Multiple selector**|$("selector1, selector2, ...")|

* **All Selector**
  * HTML page 에 있는 모든 문서객체를 선택
  * 주로 HTML Layout 을 확인하기 위한 용도로 사용
* **ID Selector**
  * 특정 id 속성을 가지고 있는 요소를 선택
  * ID 가 *중복*된 경우, 첫번째 요소를 반환
  * DOM 객체를 **가장 빨리 탐색**
  * *document\.getElementById()* 와 같음
* **Element Selector**
  * 특정 element 를 선택
  * *document\.getElementsByTagName()* 와 같음
* **Class Selector, Complex Selector**
  * 특정 class 속성을 가지고 있는 요소를 선택
  * class 속성이 2개인 경우 AND 조건을 표현
    * $("\.cn1\.cn2")\.action();
  * *document\.getElementsByClassName()* 와 같음
* **Multiple Selector**
  * 여러 element 를 선택
  * 나열된 선택자를 하나라도 만족하는 DOM 객체 반환

### DOM Hierarchy Selector
|종류|표현 방법|설명|
|----|---------|----|
|**Child selector**|$("parent > child")|부모 요소 바로 아래 직계 자식들|
|**Descendant selector**|$("ancestor descendant")|조상과 일치하는 요소에 포함된 모든 후손|
|**Next Adjacent selector**|$("previous + next")|Previous 요소 바로 다음에 나오는 형제수준의 next 요소|
|**Next Siblings selector**|$("previous ~ siblings")|Previous 요소 이후에 형제 요소 중 siblings 와 동일한 모든 요소|

### Attribute Selector
* DOM 요소가 가진 **속성 값**으로 *DOM 객체*를 탐색
* 기본 선택자 바로 뒤에 ***대괄호(\[])*** 안에 표현
   * 기본 선택자를 생략하면 **모든 요소**에 대한 주어진 속성 선택자 비교
* 입력 양식과 관련된 요소를 선택할 때 사용

|형식|설명|
|----|---------|
|**$(selector\[attr])**|attr 을 속성값으로 가지는 문서 객체 선택|
|**$(selector\[attr="value"])**|attr 의 속성값이 value 와 같은 문서 객체 선택|
|**$(selector\[attr!="value"])**|attr 의 속성값이 value 와 같지 않은 문서 객체 선택|
|**$(selector\[attr~="value"])**|attr 의 속성값이 공백과 함께 value 를 포함하는 문서 객체 선택|
|**$(selector\[attr^="value"])**|attr 의 속성값이 value 로 시작하는 문서 객체 선택|
|**$(selector\[attr$="value"])**|attr 의 속성값이 value 로 끝나는 문서 객체 선택|
|**$(selector\[attr\*="value"])**|attr 의 속성값이 value 를 포함하는 문서 객체 선택|

### Filter Selector
* DOM 요소를 탐색한 결과에서 원하는 요소를 걸러내기 위하여 사용
* 기본 선택자 뒤에 ***콜론 (\:)*** 과 함게 표기
  * 기본 선택자를 생략하면 **모든 요소**에 대한 주어진 필터 선택자 비교
* **입력 폼 유형**을 선택하는 필터 선택자
  * :button
  * :checkbox
  * :file
  * :image
  * :password
  * :radio
  * :reset
  * :submit
  * :text
* **요소의 특성**으로 선택하는 필터 선택자
  * :checked
  * :disabled
  * :enabled
  * :focus
  * :input
  * :selected
  * :hidden
  * :visible
  * :header
* **위치 기반** 필터 선택자
  * :first (첫 번째 요소 선택)
  * :last (마지막 요소 선택)
  * :first-child (첫 번째 자식 요소 선택)
  * :last-child (마지막 자식 요소 선택)
  * :only-child (형제가 없는 모든 요소 선택)
  * :even (짝수 번째 요소 선택)
  * :odd (홀수 번째 요소 선택)
* **함수 기반** 필터 선택자
  * :not(filter) (주어진 선택자와 일치하지 않는 모든 요소를 선택)
  * :contains(str) (텍스트 str을 포함하는 요소만 선택)
  * :nth-child(n) (n 번째 자식 요소를 선택. n 이 2 이면 2번째 자식, n 이 3n+1 이면 4, 7, 10..)
  * :eq(n) (n 번째로 일치하는 요소를 선택)
  * :gt(n) (n 번째 (포함 X) 이후 요소를 선택)
  * :lt(n) (n 번째 (포함 X) 이전 요소를 선택)
  * :has(f) (주어진 선택자와 일치하는 하나 이상의 요소를 포함하는 요소를 선택)
  * **nth 계열 필터는 1 부터 시작하는 인덱스를 사용**
  * **eq 와 같은 필터는 0 부터 시작하는 인텍스를 사용**

### WrapperSet
* 선택자를 통해 탐색한 **DOM 객체**를 특별한 배열 객체에 담아 반환
  * 선택된 객체가 없는 경우, 비어있는 *WrapperSet* 반환
* 메소드
  * size()
  * get(index)
  * index(element)
  * add(expr) : 래퍼세트에 주어진 조건을 만족하는 요소를 추가한 새로운 래퍼세트 반환
  * not(expr) : 주어진 조건에 해당하는 요소를 제거한 새로운 래퍼세트 반환
  * each(function(index, element)
    * 각 요소를 반복하면서 처리할 콜백 함수를 정의
    * 콜백 함수는 배열 인덱스와 반복하는 요소객체를 갖는다
    * **$.each(array, function(index, element) 와 비슷하나 표현방식이 약간 다름**
  * filter(expr)
    * 필터 선택자를 사용하여 필터링 조건을 나타내기 어려운 경우 함수를 사용
      * 함수 반환 값이 true 인 요소만 새로운 래퍼세트에 포함
  * slice(begin, end)
  * eq(index)
  * first()
  * last()
  * is(selector)
    * 기존 래퍼세트가 주어진 선택자와 일치하는지 여부를 반환 (boolean)
    * 비교할 조건을 선택자로 표현하기 어려운 경우 함수를 사용
  * find(selector) : 래퍼세트의 모든 요소들에 대하여 주어진 선택자를 만족하는 모든 자손 요소를 선택
* **계층 구조 탐색**
  * parent(\[selector]) : 래퍼세트에 포함된 각 요소의 부모요소로 구성된 래퍼세트 반환
  * parents(\[selector]) : 래퍼세트에 포함된 각 요소의 조상요소로 구성된 래퍼세트 반환
  * children(\[selector]) : 래퍼세트에 포함된 각 요소의 자식요소로 구성된 래퍼세트 반환
  * prev(\[selector]) : 래퍼세트에 포함된 각 요소의 바로 이전 형제요소로 구성된 래퍼세트 반환
  * prevAll(\[selector]) : 래퍼세트에 포함된 각 요소의 이전에 나오는 형제요소들로 구성된 래퍼세트 반환
  * next(\[selector]) : 래퍼세트에 포함된 각 요소의 바로 이후 형제요소로 구성된 래퍼세트 반환
  * nextAll(\[selector]) : 래퍼세트에 포함된 각 요소의 이후에 나오는 형제요소들로 구성된 래퍼세트 반환
  * siblings(\[selector]) : 래퍼세트에 포함된 각 요소를 제외한 모든 형제요소들로 구성된 래퍼세트 반환

## DOM 객체
|DOM 특성 제어|DOM 내부 제어|DOM 추가 및 삭제|DOM 객체 삽입|
|-------------|-------------|----------------|------------|
|attr()|html()|$()|append()|
|removeAttr()|text()|remove()|appendTo()|
|addClass()||empty()|prepend()|
|removeClass()||clone()|prepentTo()|
|toggleClass()|||after()|
|css()|||insertAfter()|
||||before()|
||||insertBefore()|

### 속성 제어 메소드
* **$(selector).attr(name)** : 속성 값 조회
* **$(selector).removeAttr(name)** : 속성 삭제
* **$(selector).attr(name, value), $(selector).attr(name, function(index, attr){}), $(selector).attr(object)** : 속성 값 설정
* **$(selector).css(styleName)** : *style* 속성 값 반환

### 내부 제어 메소드
* **$(selector).html()** : **HTML 태그 인식**, 객체 내부 조회
* **$(selector).text()** : **태그를 제외한 텍스트만 반환**
* () 안에 *value* 가 들어가면 내용 입력

### 추가 및 삭제
* **$()** : 선택자를 수행하는 기능 뿐만 아니라 DOM 객체 바로 생성
* **$(selector).remove()** : 래퍼세트의 모든 요소를 삭제하고 내용 반환
* **$(selector).empty()** : 래퍼세트의 모든 요소에 대해 하위 자식요소들을 삭제하고 삭제한 결과 반환

### 삽입
* **append, prepend, after, before 은 삽입하려는 대상을 뒤에 놓는다**
* **appendTo, prependTo, insertAfter, insertBefore 은 삽입하려는 대상을 앞에 놓는다**
* **$(Target).append(B), $(Target).prepend(B)** : Target 객체의 **자식 요소**로 삽입
* **$(Target).after(B), $(Target).before(B)** : Target 객체의 **인접한 형제요소**로 삽입 

## jQuery Event
* **click** 이벤트 처리
* **bind, on** 를 이용한 모든 이벤트 처리
* **unbind, off** 를 이용한 이벤트 제거

### Event Binding
* **bind()**
  * 선택된 DOM 객체의 이벤트에 지정한 핸들러를 연결하는 함수
  * 동적으로 생성한 객체 적용 불가
  * **bind(eventType, data, listener)**
    * eventType : 핸들러를 할당할 이벤트 타입의 이름
    * data : 핸들러 함수에서 사용할 데이터 (생략 가능)
    * listener : 핸들러 함수
* **unbind()**
  * 객체 이벤트에서 지정한 핸들러를 삭제
  * **unbind(eventType, handler)**
  * **unbind(eventType)**
    * 모든 요소에서 매개변수에 따라 이벤트 핸들러를 삭제
    * 매개변수가 없을 경우 모든 핸들러를 제거
* **on()**
  * ***bind()*** 와 마찬가지로 이벤트 핸들러 연결
  * **동적으로 생성한 DOM 객체에 적용 가능**
    * delegate 방식 이용
    * 부모 객체에 이벤트를 연결한 후 이를 하위 객체에 전달
* **one()**
  * 이벤트를 연결하고 한번 실행 후 삭제
* **Simple Event Bind**
  * 간단하게 연결할 수 있는 다양한 함수 제공
  * click(), focus(), submit()...

