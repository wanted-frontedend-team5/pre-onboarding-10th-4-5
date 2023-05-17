# 리펙토링 및 검색어 추천 기능 과제

---

원티드 프리온보딩 프론트엔드 인턴십 4주차 과제입니다. 

[가이드라인](https://www.notion.so/06d758652826491385ad91787a7720e8)과 강의 자료 중 과제 피드백을 바탕으로 구현하였습니다.

## ⌨️설치 및 실행

---

### 설치

`npm i --force`

<aside>
👉 `--force` 는 충돌하는 `peerDependencies`가 루트 프로젝트에 설치

</aside>

### 실행

`npm start`

## 📢 배포링크

---

🔗 [https://aant-todo-fe5.netlify.app/](https://aant-todo-fe5.netlify.app/)

## ✏️ 기술 스택

---

- React
- Typescript
- axios
- react-icons

## 👉 과제 진행 방식

---

- 개발 전 기능별 Best Practice 공통 기준을 세운 후에 팀원 개개인이 구현하고, 구체화 시켰습니다.
- 기능 구현 후 브랜치에 Pull Request를 날린 후, 코드 리뷰를 통해 최고의 Best Practice를 채택했습니다.
- 서로의 코드를 리뷰하고 그 중에서 Best Practice를 결정한 다음 보완할 점을 의논하고, 리팩토링을 진행했습니다.

## ✅ Best Practice 선정 기준

---

1. 가독성 좋은 코드 & 문서
    - 너무 길지 않고 뜻이 명확한 변수/함수명
    - 띄어쓰기가 규칙에 맞게 잘 짜여진 통일성 있는 코드
    - 관심사의 분리가 잘 이뤄진 코드
    - 커밋 메시지만으로 버전의 변화를 파악할 수 있는 히스토리
2. 성능이 좋은 코드
    - 컴포넌트 재사용을 통한 성능 개선
    - 유틸 함수 사용을 통한 반복 코드 제거
3. 유지보수하기 용이한 코드
    - 확장가능성이 있는 코드
    - 외부 의존성이 적은 코드

## 📏 규칙

---

### 코딩 컨벤션

> formatter와 linter 설정을 통해 통일성 있는 코드를 작성
> 
- ESlint
    - airbnb 규칙을 사용하였으며, 회의를 통해서 규칙을 수정
- Prettier
    - 팀에서 결정한 코드 포맷 옵션으로 저장 시 자동으로 포맷
- Husky
    - 커밋 전에는 포맷을, 푸쉬 전에는 린팅을 강제하는 설정
    
    ```bash
    #pre-commit
    npx lint-staged
    ```
    
    ```bash
    #pre-commit
    npm run lint
    ```
    

### 커밋 컨벤션

> 다음과 같은 기준에 따라 말머리를 붙이고, oneline commit message를 작성하는 것을 컨벤션으로 정함.
> 

```markdown
- feat: The new feature you're adding to a particular application
- fix: A bug fix
- style: Feature and updates related to styling
- refactor: Refactoring a specific section of the codebase
- test: Everything related to testing
- docs: Everything related to documentation
- chore: Regular code maintenance.
```

## 🤲 협업툴

---

- Github
- Discord
- Notion

## 📙 파일 구조

---

```jsx
📦src
 ┣ 📂api
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜search.service.ts
 ┃ ┣ 📜search.type.ts
 ┃ ┣ 📜todo.service.ts
 ┃ ┗ 📜todo.type.ts
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜MainLayout.tsx
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📜InputTodo.tsx
 ┃ ┃ ┣ 📜RecommandList.tsx
 ┃ ┃ ┣ 📜RemoveTodo.tsx
 ┃ ┃ ┣ 📜TodoItem.tsx
 ┃ ┃ ┗ 📜TodoList.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useDebounce.tsx
 ┃ ┣ 📜useFocus.tsx
 ┃ ┣ 📜useIntersect.ts
 ┃ ┣ 📜useTodoFetch.ts
 ┃ ┣ 📜useTodoInput.ts
 ┃ ┗ 📜useTodoList.ts
 ┣ 📂pages
 ┃ ┗ 📜Main.tsx
 ┣ 📂style
 ┃ ┗ 📜Header.style.ts
 ┣ 📂type
 ┃ ┣ 📜search.ts
 ┃ ┗ 📜todo.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```

## 👨‍👩‍👧‍👦 팀 소개
| 이름 | Github link |
| --- | --- |
| 김동률 | https://github.com/doctork4 |
| 김혜빈 | https://github.com/khv2644511 |
| 심미진 | https://github.com/azure-553 |
| 이채욱 | https://github.com/codnr98 |
| 장의영 | https://github.com/yeongi |
| 김경일 | https://github.com/KKI147 |
| 정종현 | https://github.com/jung-jong |
| 하정원 | https://github.com/JayeHa |
