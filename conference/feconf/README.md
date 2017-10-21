# 2017-10-21
Sli.do 익명 질문 서비스

## Performance Optimazation
Robin Rheem(임정호)

Lezhin Entertainment - Software Engineer

무언가 느리다고 느껴지면, 조사를 해야된다.

구글에게 분석을 부탁할 수 있다.

https://developers.google.com/speed/pagespeed/insights/?hl=ko

### 이 친구들과 대화를 하시죠
1. 요청하는 데이터가 너무 크고 많다.
* *.s, *.css, ~~
    * 파일들을 하나로 합치고 minify 시켰다.
        * 파일을 하나로 합치면 용량이 커진다.
            * 해결책 : WEBPACK!
            * Tree Shaking === Dead-code 삭제
            * 사용하지 않는 코드: 삭제
    * 아이콘이 많다?
        * CSS Sprite Sheet
2. 200, 304가 아닌 HTTP response!
* HTTP 200 OK, HTTP 304 Not Modified == Cached
    * 클라이언트가 잘못한 4XX??
        * 모두 잡아내면 브라우저는 더 이상 고민하지 않는다.
3. 이미지, 웹폰트가 최적화가 안 되어 있다.
* 콘탠츠 최적화
    * 상황에 맞게 이미지 높이, 너비 정하기
    * 맞는 Compression Level 찾기
    * WebP와 같은 특별한 포맷 지원.(용량이 줄음)
    * CDN 태우기
    * 작은 이미지라면 Base 64 인코딩해서 집어넣기
    * 서버로부터 미리 Scaling 된 이미지 받기.
* Web Font
    * 딱 필요한 만큼의 폰트만 쓰기
    * Browser Compatibility 고려
    * Base 64 인코딩 해서 Local Storage 에 저장
    * Prefetch 혹은 CDN 태우기.

### HTTP2와 GZIP을 압축
#### HTTP2
요청수가 많으면 Stream이니까 상관 안해도 된다. (Open Close 개념이 아니고 계속 연결돼있음)
#### GZIP 으로 뭘 압축?
Minify한 파일을 한번 더 압축
#### 스크롤 할 때 이미지가 끊기면
Rendering 문제

하나의 Frame이 그려지는 과정
1. parse HTML
2. DOM 생성
3. CSSOM 생성
4. Recalculate Styles
5. DOM + CSSOM = Render Tree

* JS: 자바스크립트로 css, html을 바꿨을 떄
* Style: CSS를 다시 적용할 때
* Layout: HTML Tag중에 너비, 높이, 위치가 변경되었을 떄
* Paint: 배경색, 텍스트 색과 같은 부분들이 바뀔 때
* Composite: Animaton, Opacity가 바뀔 때
#### 성능 저하 원인 파악
##### JS
* JS에서 모든걸 제어 가능함
* 그래서 프레임이 그려지는 단계에서 가장 처음에 배치 (힘든일 먼저)
* requestAnimationFrame: 이를 이요한 애니메이션 구현
* 오래 걸리는 JS는 Web Worker에게 맡기기
* 메모리 관리하기
    function repeatOften(){
        requestAnimationFrame(repeatOften);
    }
    requestAnimationFrame(repeatOften);
맨 앞에 JS를 실행
###### Micro Optimization!
네이버에서 쓴 JS성능 책을 읽어보자

맨 마지막에 작업하자
##### Style & Layout
* BEM(Block Element Modifier) -> CSS를 최소로 Select 하기
    * 원하는 엘리먼트의 최소를 선택
* 선택한 element 수 / 성능 비용 = 비례
* Recalculate Styles 최소를 줄이기
* Forced Synchronous Layout: Layout -> Style -> Layout
    // 어떤게 FSL을 더 일으킬까
    var newWidth = container.offsetWidth;
    // A
    divs.forEach(function(elem, index, arr)){
        elem.style.width = newWidth;
    });
    // B
    divs.forEach(function(elem, index, arr)){
        if(elem.offSetHeight< 500){
            elem.style.maxHeight = newWidth;
        }
    }
정답 : A
##### Paint Profiling
크롬 개발자 도구에서 Rendering -> Paint Rendering
## JavaScript Fatigue
* 1996 -> 2005 = Flash
    * Flash는 HTML5에 가장 많은 영감을 준 기술중에 하나다.
    * 하지만 Google 외 많은 기업들은 웹에 필요한 기술이 한 회사의 기술에 의존하는 것을 좋아하지 않는다.
* 2005 -> 2009 = HTML5 붐업
* 2009 -> 2010 = Node.js
* 2010 -> 2017 = Npm
삼성에서 IOT.js & JerryScript를 만듬

WTFJS : https://wtfjs.com/
* 2012.10 MS에서 TS 만듬
    * 앵귤러 때문에 유명해짐
* Bable 은 React.js 커뮤니티와 FB의 힘을 등에 없고 발전하고 있지만 TS에 밀리는 분위기
### JS Type
1. TS
2. Flow(https://flow.org/)
## electron으로 만드는 데스크탑 메신저 앱
* 웹 기술 기반의 크로스 플랫폼 데스크탑 앱 구축 기술
* github에서 개발
* 처음에는 Atom 에디터 용으로 빌드
Electron = Chromium + Node + Native API

Electron 구조: 메인프로세스에서 렌더 프로세스 1, 2, 3 (트리구조)

### What can I get?
* Front-End 개발자의 영역 확장
* Cross Browsing 이슈 해결
### 일렉트론에서 라이브러리 사용법
* jQuery
    * Node 설정
    * window 객체에 직접 추가
    * 라이브러리에서 오브젝트 체크 false

