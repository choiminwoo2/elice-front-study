
## 배열 사용기기

```javascript
	const arr = ['A','B','C'];
	//맨 뒤에 저장
	arr.push('A');
	//맨 앞에 저장
	arr.unshift('A')
	//맨 뒤 데이터 제거
	arr.pop();
	//맨 앞 데이터 제거
	arr.shift();
	
```


## DOM (Document Object Model)
* 돔의 종류
	1. CoreDom
		* 모든 문서 타입을 위한 DOM 모델
	2. XML DOM
		* XML 문서를 위한 DOM 모델
	3. HTML DOM
		* HTML 문서를 조작하고 접근 가능합니다.
		* DOM은 프로그래밍 언어와 독립적이며, 어떠한 언어에서도 구현이 가능합니다.

* 돔 요소에 접근하기
	```javascript
		let item = document.querySelector(['#id', '.class', 'tag', '[name="myName"]'])
	```
* 돔요소 접근할 때, 유용한 함수
	```javascript
		let tag = document.querySelector('tagName')
		// 트리에서 탐색 값을 통해서 가장 가까운 조상 태그를 반환한다.
		tag.closest('탐색할 태그', '#id', ".class");
		// <tag data-id="1" > 저장된 데이터 값을 가져오는 함수
		tag.dataset.id 
	
	```
* [dataset 관련 자료](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

## Node 객체
> HTML DOM에서 정보를 저장하는 계층적 단위

* 노드의 종류
	1. 문서노드
		* 문서 전체를 나타내는 노드입니다.
	2. 요소 노드
		*  모든 HTML 요소는 요소 노드다. 속성 노드를 가지는 유일한 노드입니다.
	3. 주석 노드
		* HTML 문서의 모든 주석
	4. 속성 노드
		* 모든 HTML 요소의 속성은 속성노드이며, 요소 노드에 관한 정보를 갖고 있습니다.
		* 해당 요소 노드의 자식 노드에는 포함 X
	5. 텍스트 노드 
		* HTML의 모든 텍스트 요소는 텍스트 노드입니다.

* 노드 간의 관계로 접근하는 방법
```javascript
	//태그의 부모 노드
	tag.parentNode;
	//자식 노드 리스트
	tag.childNodes;
	//첫 번째 자식노드
	tag.firstChild
	//마지막 자식노드
	tag.lastChild
	//다음 형제노드
	tag.nextSibling
	//이전 형제 노드
	tag.previousSibling
```
* NodeType, NodeValue, NodeName
	```javascript
	//Node name은 보통 태그 명을 말한다.
	tag.nodeName;
	// nodeValue 는 보통 text node를 말하지만, attribute node는 nodeValue가 해당 속성의 값으로 설정됨.
	tag.nodeVlue;
	//요소 노드:1 속성 노드: 2 텍스트 노드: 3 주석 노드: 8 문서 노드: 9 노드의 종류를 숫자로 표현해서 반환한다.
	tag.nodeType;
	```
[출처](https://www.tcpschool.com/javascript/js_dom_node)



