/**
 *  HTTP GET 파라미터를 전달받는 페이지
 * */

import React from 'react';

import { useLocation } from 'react-router-dom';

const DepartmentGet = () => {
  // 기존의 콘솔 출력 내용 삭제함.
  console.clear();

  // 요청 데이터 확인하기
  const location = useLocation();
  console.group("useLocation()의 리턴값 확인");
  console.debug(location);
  console.groupEnd();

  // QueryString을 객체 형태로 변환
  const {search} = location;
  const query = new URLSearchParams(search);
  console.group('QueryString 확인');
  console.debug(query);
  console.groupEnd();

  // 추출된 변수값과 데이터 타입 확인
  console.group('파라미터 처리 결과 확인');
  console.debug('요청된 학과번호 값=%s (%s)', query.get('id'), typeof query.get('id'));
  console.debug('요청된 메시지 내용=%s (%s)', query.get('msg'), typeof query.get('msg'));

  // 생성된 객체를 JSON으로 변환
  console.group('파라미터 JSON 변환 확인');
  const params = Object.fromEntries(query);
  console.debug(params);
  const {id, msg} = params;
  console.debug('요청된 학과번호 값=%s (%s)', id, typeof id);
  console.debug('요청된 메시지 내용=%s (%s)', msg, typeof msg);
  console.groupEnd();

  return (
    <div>
      <h1>Hello Departmentget</h1>
    </div>
  );
};

export default DepartmentGet;


