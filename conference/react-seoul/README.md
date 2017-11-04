# 2017-11-04
또 sli.do를 사용하네

꾸준하게 연다고 한다.

FB Korea에서 하는 거
* 스타트업 지원
* 곧 Developer Circle을 만든다고 한다.(Facebook Group)
## 리액트로 다른페이지에 임베드되는 웹앱 개발기(안재하)
### 삽질하며 고민한 것들에 대해
카카오에서는 많은 부분에 리액트를 사용한다.

대부분 리액트로 임베드되는 웹에 사용안한다.

IE8에서 돌아가는 버전들 : React v0.14.9 이하버전, Webpack v1.15.0 이하버전

Bable에서 loose를 false 해야된다.

es3ify-loader를 이용해 결과물에 대해 한번 더 후처리를 해야 된다.

#### 중요한건 폴리필
Babel은 ES5으로 까지만 트랜스파일링 해준다.

core-js/es5폴리필은 여러번 중복해서 호출되도 오류가 발생하지 않는다.

css파일을 페이지마다 만들어서 유지보수하기 힘들었다.

모듈화 하기위해 scss를 사용했다.

css2js를 사용해서 css in js로 했다.

JS안에 css가 있어서 임베드 앱 로딩에서 좀 더 도움이된다.

브라우저 캐시로 인해 변경되어 보이지 않는경우가 많다.

styled-components를 사용하면 다 해결된다.(IE9이상에서 작동한다.)

### 코딩 스타일
husky + lint-staged + prettier
## React/Redux for Smart TV UI
다국어 지원할 때 : [https://github.com/iLib-js/iLib](https://github.com/iLib-js/iLib)
### React 최적화
* Lifcecycle hooks이 많으면 느려진다.
* Redux Store/Action 설계가 중요하다.
* Render 횟수 최소화
* shouldComponentUpdate 는 위험하다.
## 리액트 네이티브 어디까지 해봤니?
* view page 를 이용하면 컴포넌트를 빨리 보여줄 수 있다.(Single view에 의존하지 않음)
* 네이티브 기능을 사용해라
## Storybook Driven Development: Storybook을 통한 React UI Component 및 State 관리하기
React는 View용 Library

Storybook을 이용하면
1. Component를 isolated된 환경에서 개발
2. 바로바로 보면서 interactive 하게 개발
3. 컴포넌트 별 라이브러리 화 해서 브라우징 가능
4. 이로 인해서 React의 큰 장점인 컴포넌트들을 만듬
## Decorator + HOC + React = Fantastic!!
### Decorator란?
ES7 문법이다.

클래스, 클래스의 프로퍼티에 적용이 가능하다.
### HOC
Higher - Order - Componet 의 약자

WrappedComponet 상속받아 사용함