## REACT TODONTLIST

### 요약

> "바쁘면 이 책도 읽지 마세요" 책 참고 - 정말 중요하고 해야 할 일에 집중하는 방법


TO DON'T LIST에 해야 할 일들을 쭉 적는다. 

그중 3가지를 TO DO LIST에 옮긴다. 

해야 할 이를 마치면 DONE LIST에 옮긴다. 

그럼 남은 자리에 TO DON'T LIST에서 옮겨진다. 

3달이 지나도 TO DON'T LIST에 있는 일은 사라진다. 


### 기능 구현


#### TO DON'T LIST

  1. - [X] ~CREATE - TO DON'T LIST~ 20230404
       - [X] ~FILTER - TO DON'T LIST~ 20230405
  2. - [X] ~READ - TO DON'T LIST~ 20230404
  3. - [X] ~UPDATE - TO DON'T LIST~ 20230404
  4. - [X] ~DELETE - TO DON'T LIST~ 20230404
  5. - [X] ~PERMANENTLY DELETE after 3 months~
  6. - [X] ~CHECKBOX - MOVE TO 'TO DO LSIT'~
  7. - [X] ~CHECKBOX - ONLY THREE ITEMS~


 #### TO DO LIST

  1. - [X] ~ADD - TO DO LIST~
  2. - [X] ~READ - TO DO LIST~
  3. - [X] ~UPDATE - TO DO LIST~
  4. - [X] ~DELETE - TO DO LIST~
  5. - [X] ~MOVE TO 'TO DON'T LIST'~
  6. - [X] ~CHECKBOX - MOVE TO 'DONE LSIT'~
  7. - [X] ~CHECKBOX - AUTO MOVE FROM 'TO DON'T LIST'~


####  DONE LIST

  1. - [X] ~ADD - DONE LIST~
  2. - [X] ~READ - DONE LIST~
  3. - [X] ~UPDATE - DONE LIST~
  4. - [X] ~DELETE - DONE LIST~
  5. - [X] ~MOVE TO 'TO DO LIST'~


####  ETC
- - [X] 체크박스, 번호, 할 일, to don't list에서 입력 날짜, to do list에서 시작 날짜, done list에서 끝난 날짜
- - [X] 리스트 이동은 체크박스로 구현
- - [X] 새로고침해도 상태 유지
- - [X] 스타일링 하기
- - [X] 다크모드
- - [X] 라우터 처리 TO DON'T LIST / TO DO LIST / DONE LIST
- - [ ] 리액트 쿼리 처리
- - [X] 순서 이동 => 라이브러리 사용   

#### 우선순위
- priority(우선순위)별로 sorting
- 'TODONTLIST'에 추가하면 'TODONTLIST'에 해당하는 리트 중 가장 마지막 priority + 1
- 순서가 바뀌면 바뀐 index로 수정
- check되면 다시 sorting
- reset되면 다시 sorting
- 'TODOLIST'도 마찬가지

#### useQuery
- postman으로 가상 api 생성
- useQuery로 fetch된 todos 리턴, 그외 로직 동일
- useQuery 옵션 설정해보기
- useQuery 리턴한 'isLoading' 으로 로딩 랜더링
- useQuery 실습후 localstorage로 돌려놓기


### 희망 기한

~2023년 04월 09일~ 

~2023년 04월 21일~  
