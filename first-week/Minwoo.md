## ***1. 시멘틱 태그***
* 태그에 의미를 부여하여 사용하는 것을 말합니다.
![image](https://github.com/choiminwoo2/elice-front-study/assets/50656081/842d9df6-4f35-4824-a042-90f21d4316b7) <br>
[이미지 출처](https://mailchimp.com/resources/html-semantic-elements-and-webflow-the-essential-guide/)
### 1 - 1. 시맨틱 태그 적용 전
```html
	<div class="header">
		<div class="title">Title</div>
		<div class ="nav"></div>
	</div>
```
### 1 - 2. 시맨틱 태그 적용 후
```html
	<header class="header">
		<h2 class="title"></h2>
		<nav class ="nav">
			<section class="nav_body"> </section>
		</nav>
	</header>
```
### ***시맨틱 태그를 왜 사용할까?***
>  div 태그가 많아지면 많아 질수록 태그에 대한 가독성이 좋지 않습니다.
>  또, 태그의 흐름을 파악하기 쉽지 않습니다.

&rarr; 그래서 레이아웃, 이미지, 시간 등등 다양하게 사용할 수 있도록 의미있는 태그 사용을 통해 `접근성` 이 뛰어난 HTML 문서를 만들어줍니다.

* 시멘틱 태그들
	1. `<address>`: 연락처 정보나 작성자 정보를 정의합니다.
	2. `<article>`: 독립적인 콘텐츠 조각을 나타냅니다.
	3. `<aside>`: 본문 내용과는 관련이 적은 콘텐츠를 정의합니다.
	4. `<blockquote>`: 다른 소스에서 인용된 콘텐츠를 정의합니다.
	5. `<canvas>`: 스크립트로 그래픽을 그릴 수 있는 영역을 정의합니다.
	6. `<details>`: 추가 세부 정보를 제공하는 요소를 정의합니다.
	7. `<figure>`: 콘텐츠의 그림, 도표, 사진 등을 정의합니다.
	8. `<figcaption>`: `<figure>` 요소의 캡션을 정의합니다.
	9. `<footer>`: 섹션이나 페이지의 하단 부분을 정의합니다.
	10. `<header>`: 섹션이나 페이지의 상단 부분을 정의합니다.
	11. `<main>`: 문서의 주요 콘텐츠를 정의합니다.
	12. `<nav>`: 네비게이션 링크를 정의합니다.
	13. `<section>`: 문서의 섹션을 정의합니다.
	14. `<summary>`: `<details>` 요소의 요약 정보를 정의합니다.
	15. `<time>`: 시간 정보를 정의합니다.
## 2. CSS casecade

### 2 - 1. Origin Type
#### ***User-agent stylesheets***
* 브라우저에서 기본으로 정해둔 CSS 스타일 시트다.
```html
	<style> 
		body{
			margin : 8px; //브라우저 기본 margin 
		}
	</style>
```
&rarr; 이러한 브라우저 초기의 css 설정 때문에 reset css라는 Author stylesheets가 등장합니다.<br>
&rarr; resetCss 2011년 기준. [2011 resetCss](https://meyerweb.com/eric/tools/css/reset/) <br>
&rarr; 최신 [2024. resetCss](https://www.youdad.kr/use-the-latest-css-reset-for-a-new-era-of-web-development/) <br>

#### ***Author stylesheets***
* 개발자가 적용한 css 스타일이 여기에 속합니다. 
```html
<link rel="stylesheets" href="mystyles.css">
<style></style>
<h1 style=""></h1>
```
* 인라인 방식, 내부 스타일 방식, 외부 스타일시트 방식 등이 여기에 속합니다.
#### User stylessheets
* 클라이언트(사용자)가 직접 css 플러그인을 사용하거나 자신만의 방법으로 css를 적용하는 스타일 시트를 말합니다.

### Cascading의 적용 순서

| 순서  | Origin                   | Importance   |
| --- | ------------------------ | ------------ |
| 1   | user-agent(브라우저)         | normal       |
| 2   | user(사용자)                | noraml       |
| 3   | author(개발자)              | normal       |
| 4   | CSS @keyframe anomations |              |
| 5   | author(개발자)              | `!important` |
| 6   | user                     | `!important` |
| 7   | user-agent(브라우저)         | `!important` |
| 8   | Css transitions          |              |
* 순서가 높을수록 우선 적용대상입니다.


## 3. Block과 Inline 요소

* Block 및 inline 형식의 태그 정리

	| 태그  | 설명  | 요소 |
	|----------|--------|----------|
	| \<div\> | -구획을 나누거나 콘텐츠를 그룹화하는 데 사용됩니다.  | Block |
	| `<p>` | 단락을 정의하는데 사용합니다.| Block |
	| \<h1> ~ \<h6> | 제목 및 주제를 정의합니다. | Block|
	| \<ul> | 정렬되지 않은 목록을 정의합니다. | Block|
	| \<ol> | 순서가 있는 목록을 정의합니다. |Block|
	| \<li> | 목록 항목의 정의 합니다. | Block|
	| \<table> | 표를 정의합니다. | Block|
	| \<form> | 사용자 입력 양식을 정의합니다 | Block|
	| \<span> | 특정 영역의 text를 그룹화 하는데 사용합니다. | inline|
	| \<u> | 텍스트에 밑줄을 표시합니다. | inline|
	| \<strong> | 텍스트를 강조합니다 | inline|

* Block요소와 Inline 요소의 차이점
1. inline 요소를 가진 태그는 height, width 속성을 사용할 수 없습니다.
2. inline 요소를 가진 태그는 margin padding을 사용할 수 없습니다.

##  Margin collapsing
### 형제 태그 사이에서 문제
![image](https://github.com/choiminwoo2/elice-front-study/assets/50656081/7e4299bc-500b-4abd-9258-172d9d9a1432)


* 형제간 margin은 서로 더해져서 110px이 되는 것이 아니라 형제 중에 큰 margin값으로 병합되어 60px값을 가지게 됩니다.

### 부모 자식 사이에서 문제

![image](https://github.com/choiminwoo2/elice-front-study/assets/50656081/48a88b0b-9eaa-44e6-9a69-2c4c7af2eb4c)


* 내부에서 margin-top을 주었더니 margin-top이 부모 태그 기준으로 적용되는 문제가 발생합니다.
1. Position을 이용한 해결방법
```css
.inner{
	position: absolute;
}
```

2. 부모에서 flex 및 grid을 사용하면 해결 됩니다.
```css
.outer{
	display: flex; /* disply : grid; */
}
```
