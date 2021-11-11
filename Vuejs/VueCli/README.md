# Vue/CLI
* **CLI** : Command Line Interface
* Vue 프로젝트를 빠르게 구성할 수 있는 스캐폴딩 제공
* 개발의 편리성
* *node 기반*으로 작동하기에, **Node.js** 와 **NPM** 설치 필요

### vue create \<project-name>
* 프로젝트 생성

## Node.js
* 서버에서 *Javascript* 가 작동되도록 해주는 런타임 환경
* 이벤트 기반 비동기 방식
    * 응답을 기다리지 않고 다른 API 호출

## NPM
* **Node Package Manager**
* Command 에서 third party 모듈을 설치하고 관리하는 툴

### npm init
* 새로운 프로젝트나 패키지를 만들 때 사용 (*package.json* 생성)

### npm install package
* 생성되는 위치에서만 사용 가능한 패키지로 설치

### npm install -g package
* 글로벌 패키지에 추가
* 모든 프로젝트에서 사용 가능한 패키지로 설치

### npm run serve
* 서버 실행

---

# SFC (Single File Component)
* 확장자가 ***.vue*** 인 파일
    * template + script + style
* 구문 강조 가능
* 컴포넌트에만 CSS 적용 범위 제한 가능
* 전처리기를 사용해 기능 확장 가능

## Template
* 각 *.vue* 파일은 **최대 하나의 template** 을 가질 수 있다

## Script
* 각 *.vue* 파일은 **최대 하나의 script** 을 가질 수 있다
* ES6 을 지원하여, *import* 와 *export* 사용 가능

## Style
* 각 *.vue* 파일은 **여러 개의 style** 을 가질 수 있다
* *scoped* 속성을 이용하여 현재 컴포넌트에만 적용 가능한 CSS 지정 가능

---

## [Practice](https://github.com/ljiwoo59/Front_Study/tree/main/Vuejs/VueCli/CustomerManagement)
* Customer Management
