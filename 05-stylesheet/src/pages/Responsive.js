import React from 'react';
import styled from 'styled-components';
import breakpoints from 'styled-components-breakpoints';

/** 반응형 웹 구현 기준 사이즈 정의 */
const sizes = {
    sm: 600,
    md: 768,
    lg: 992,
    xl: 1200
};

/** 기준 사이즈를 활용하여 media query 생성 */
const mq = breakpoints(sizes);

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.bgcolor || '#eee'};

  /* MediaQuery로 처리하지 않은 구간에 대한 기본값 */
  // 스마트폰 세로 사이즈에 우선 적용됨
  width: 100%;

  ${mq.minWidth('sm')`
      width: 50%;
  `}

  ${mq.only('md')`
      width: 33.3%;    
  `}

  ${mq.minWidth('lg')`
      width: 25%;    
  `}

${mq.minWidth('xl')`
      width: 25%;    
  `}
`;

const Responsive = () => {
    return (
        <div>
            <h2>Flex를 사용한 반응형 5열 레이아웃</h2>

            <Container>
                <Column bgcolor="#aaa">
                    <h2>Column 1</h2>
                    <p>Some text...</p>
                </Column>

                <Column bgcolor="#bbb">
                    <h2>Column 2</h2>
                    <p>Some text...</p>
                </Column>

                <Column bgcolor="#ccc">
                    <h2>Column 3</h2>
                    <p>Some text...</p>
                </Column>

                <Column bgcolor="#ddd">
                    <h2>Column 4</h2>
                    <p>Some text...</p>
                </Column>

                <Column bgcolor="#eee">
                    <h2>Column 5</h2>
                    <p>Some text...</p>
                </Column>
            </Container>
        </div>
    );
};

export default Responsive;