# 웹을 구성하는 요소 
- HTML
  - Hyper Text Markup Language 의 약어로 HyperText 기능을 가진 문서를 만드는 언어
  - 즉, 웹페이지의 구조를 설계할 때 사용되는 언어 입니다.
- CSS
  - Cascading Style Sheets 의 약어로 HTML의 스타일을 꾸밀 때 사용하는 스타일 시트 언어 입니다.
- Javascript
  - HTML과 CSS로 만들어진 웹 페이지의 구성 요소중 하나
  - 웹 브라우저에서 동작하는 유일한 프로그래밍 언어
  - 웹 페이지에 동적 기능을 추가합니다.
  
-----------------------------------------------------------
# 웹 페이지를 제작시 고려해야 할 사항
1. 웹표준
  - 웹 사이트를 작성할 때 따라야 하는 공식 표준이나 기술 규격
2. 웹 접근성
   - 장애의 여부와 상관 없이 모두가 웹사이트를 이용할 수 있게 하는 방식
3. 크로스 브라우징
   - 모든 브라우저 또는 기기에서 사이트가 제대로 작동하도록 하는 기법

-----------------------------------------------------------
# HTML 기본 태그
<p>
  <태그 속성 = "속성값"> 컨텐츠 <`/태그`> <br/>
 <span style="color:green">태그명:</span> html이 갖고 있는 고유의 기능 <br/>
 <span style="color:green">컨텐츠:</span> 열린 태그와 닫힌 태그 사이에 있는 내용물 <br/>
  <span style="color:green">속성:</span>HTML 태그가 갖고 있는 추가 정보 <br/>
  <span style="color:green">속성값:</span>어떤 역할을 수행할지 구체적인 명령을 진행하는 것 
</p>

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>웹프로그래밍</title>
</head>
<body>
</body>
</html>
```
- `<!DOCTYPE html>`
  - HTML5라는 신조어로 문서를 선언하는 태그
- `<html>...</html>`
  - HTML문서의 시작과 끝을 의미
  - 모든 HTML 태그들은 <html> 태그 안쪽에 입력
- `<head>...</head>`
  - 웹사이트의 간단한 <span style="color:#C8F2FC">요약 정보</span>를 담는 영역
  - 웹사이트에 노출되지 않는 정보
- `<body>...</body>`
  - 웹사이트에서 <span style="color:#C8F2FC">눈에 보이는 정보</span>를 담는 영역
  - 이미지나 텍스트처럼 출력되는 정보
- `<meta charset="UTF-8">`
  - character setting의 약자를 나타내는 <span style="color:#C8F2FC">문자 코드</span> 모든 문자를 웹 브라우저에서 <span style="color:#C8F2FC">깨짐 없이</span> 표시하겠다는 의
- `<title>...</title>`
  - 웹사이트 탭에 나타나는 <span style="color:#C8F2FC">제목</span>을 적는 태그
----------------------------------------------------------------
- `<a href="https://www.naver.com" target= "_blank">네이버</a>`
  - `<a>...</a>`
    - 글자나 이미지 클릭시 <span style="color:#C8F2FC">다른 사이트로 이동</span>시키는 태그 
    - 열린 태그와 닫힌 태그 사이에 컨텐츠 입력
    - href 속성은 HTML 연결할 페이지의 주소 지정
    - target 속성은 어떤 방식으로 이동할지 결정
    - "_blank" 새탭 , "_self" 현재탭
-----------------------------------------------------------------
- `<img src="logo.png" alt="회사로고">`
  - `<img>태그`
    - 정보성을 갖고 있는 이미지를 삽입
  - `src 속성`
    - 삽입할 이미지 파일 경로
  - `alt 속성 `
  - 웹사이트가 이미지를 출력하지 못했을 경우,텍스트 정보로 대체.
--------------------------------------------------------------------
```html
<h1>Hello World</h1>
<h2>Hello World</h2>
<h3>Hello World</h3>
```
- Heading의 약자로 제목이나 부제목을 표현
- 숫자 값이 클수록 폰트 사이즈가 작음. 즉, 숫자는 정보의 중요도를 나타냄
-----------------------------------------------------------------------
```html
<p>Nice to meet you</p>
```
- Paragraph의 약자로 본문 내용을 표현
- 웹사이트의 중요 정보를 담는 태그
- 나타내고자 하는 내용을 열린 태그와 닫힌 태그 사이에 입력
------------------------------------------------------------------------
```html
<ol>
  <li>메뉴1</li>
  <li>메뉴2</li>
  <li>메뉴3</li>
</ol>
```
- ol 태그 -> Ordered list의 약자로,순서가 있는 리스트 생성.
- li 태그 -> ol과 ul 의 각 항목을 나열할 때 사용
- ul 태그 -> Unordered list의 약자로,순서가 없는 리스트 생성.
-----------------------------------------------------------------------
# 구조를 잡을 때 사용하는 태그
<p>
우리가 책을 볼때 책의 구성 요소는 목차,본문,부록 등이 있습니다. 이러한 요소가 원하는 정보를 쉽고 빠르게 찾는 것을 도와
줍니다.HTML의 구조에도 이러한 요소가 있습니다. 
</p>

```html
<header>
  <nav>
    ...
  </nav>
</header>
```
- `<header>태그`
  - 웹사이트의 머리글을 담는 공간
- `<nav>태그`
  - 메뉴 버튼을 담는 공간 ul,li,a와 함께 사용
- `<main>태그`
  - 문서의 주요 내용을 담는 태그
- `<article>태그`
  - 문서의 주요 이미지나 텍스트 등의 정보를 담고 구역을 설정하는 태그
  - 태그 내에 구역을 대표하는 타이틀 `<h#>`태그가 존재해야 함.
- `<footer>태그`
  - 가장 하단에 들어가는 정보를 표기할 때 사용
- `<div>태그`
  - 임의의 공간을 만들 때 사용
----------------------------------------------------------------------
# HTML태그의 두 가지 성격 
```html
<!-- Block 요소 -->
<p>Hello Elice</p>
<p>Hello Elice</p>
<p>Hello Elice</p>
```
```html
<!-- Inline 요소 -->
<a>Bye Elice</a>
<a>Bye Elice</a>
<a>Bye Elice</a>
```
- 두 요소를 구분 짓는 세가지 주요 특징: 줄바꿈 현상,가로,세로,상,하 배치
- block->y축 정렬 형태 , inline -> x축 정렬 형태
------------------------------------------------------------------------
# CSS 구성 요소
```html
  선택자 { 속성: 속성값; }
```
- 선택자: 디자인을 적용할 HTML 영역 
- 속성: 어떤 디자인을 적용할지 정의 
- 속성값: 어떤 역할을 수행할지 구체적으로 명령
--------------------------------------------------------------------------
# CSS 연동 방법 세 가지 
1. inline Style Sheet
2. Internal Style Sheet
3. External Style Sheet

---------------------------------------------------------------------------
# Inline Style Sheet
`<h1 style="color:red;"> coding 101 </h1>`
- 태그 안에 직접 스타일을 정의 하는 방식입니다.

# Internal Style Sheet
```html
<head>
  <style>
    h1 { background-color:yellow; }
  </style>
</head>
```
- `<style>`태그 안에 넣기

# External Style Sheet
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```
- `<link>`태그로 불러오기
- html,css 각각의 문서 안에서 따로 관리하여 가독성이 높고 유지보수가 쉽다.

------------------------------------------------------------------------------
# CSS 선택자
- css 로 html의 스타일을 지정할 수 있다는 것은 알겠는데 그렇다면 어떻게 어떤 태그에 지정할 지 정의 할 수 있을 까?
- 타입,클래스,아이디 세가지 선택자가 있습니다!

# Type Selector
```html
<style>
  h2 { color:red; }
</style>
```
-특정 태그에 스타일을 적용합니다.

# Class Selector
```html
<style>
  .coding { color:blue; }
</style>
```
-클래스 이름으로 스타일을 적용합니다.
-쿨래스는 여러개 정의할 수 있습니다.
 
# ID Selector
```html
<style>
  #coding { color: green;}
</style>
```
- ID를 이용하여 스타일을 적용하는 방식입니다.
- id의 이름은 중복되지 못합니다.
- 

---------------------------------------------------------------------------------
# 부모 자식 관계
```html
<header>
    <h1>Header h1</h1>
    <p>Header p</p>
</header>
```
```css
  header { color: red; }
  h1 { color: blue; }
  p { color: green; }
```
- `<header>`와 `<h1><p>`: 부모 자식 관계
- `<h1>와<p>`: 형제 관계

```CSS
  header { color:red; }
  header h1 { color:blue;}
  header p { color: green;}
```
- 원하는 지역에만 css를 적용하기 위해 부모를 구체적으로 표기


-------------------------------------------------------------------------------
# 캐스케이딩
## css의 우선순위는 어떻게 될까?
- 1.나중에 정의한 속성의 우선순위가 높다!
- 2.더 구체적으로 작성된 속성의 우선순위가 높다!
- 3.style>id>class>type 순으로 우선순위가 높다!

----------------------------------------------------------------------------------
# css 주요 속성
```html
  <p class="paragraph">프로그래밍을 배워봐요!</p>
  .paragraph { width: 500px; height: 500px; }
```
- width 속성:선택한 요소의 넓이를 설정
- height 속성: 선택한 요소의 높이를 설정

```html
<p clas="paragraph">즐거운 웹프로그래밍!</p>
.paragraph{
    font-size: 50px;
    font-family: Arial, sans-serif;
    font-style: italic;
    font-weight:bold;
}

```
- font-family: 브라우저마다 지원하는 폰트가 다르다
- 입력한 순서대로 우선순위 
- sans-serif는 마지막에 작성하는 디폴트 값.

- font-weight는 100~900사이의 값을 입력 가능 , 폰트의 굵기 
- border-style:solid->실선 , dotted->점선
- background-reapeat: x축으로 반복->repeat-x 
- y축으로 반복 -> repeat-y
- 반복하지 않음 -> no-repeat


-----------------------------------------------------------------------------------------
# 박스모델
![image](https://github.com/choiminwoo2/elice-front-study/assets/54802110/dc6f472a-f0aa-4494-8e24-72d4ebece194)

# Block요소와 Inline요소



