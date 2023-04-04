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

  1. - [ ] CREATE - TO DON'T LIST
  2. - [ ] READ - TO DON'T LIST
  3. - [ ] UPDATE - TO DON'T LIST
  4. - [ ] DELETE - TO DON'T LIST
  5. - [ ] PERMANENTLY DELETE after 3 months  


 #### TO DO LIST

  1. - [ ] ADD - TO DO LIST => MOVE FROM TO DON'T LIST
  2. - [ ] READ - TO DO LIST
  3. - [ ] UPDATE - TO DO LIST
  4. - [ ] DELETE - TO DO LIST => MOVE TO 'TO DON'T LIST'  


####  DONE LIST

  1. - [ ] ADD - DONE LIST => MOVE FROM TO DO LIST
  2. - [ ] READ - DONE LIST
  3. - [ ] UPDATE - DONE LIST
  4. - [ ] DELETE - DONE LIST => MOVE TO 'TO DO LIST'  


####  ETC
- - [ ] 체크박스, 번호, 할 일, to don't list에서 입력 날짜, to do list에서 시작 날짜, done list에서 끝난 날짜
- - [ ] 리스트 이동은 체크박스로 구현
- - [ ] 새로고침해도 상태 유지
- - [ ] 스타일링 하기
- - [ ] 다크모드
- - [ ] 라우터 처리 TO DON'T LIST / TO DO LIST / DONE LIST
- - [ ] 리액트 쿼리 처리
- - [ ] 순서 이동 => 라이브러리 사용   


### 희망 기한

2023년 03월 09일
