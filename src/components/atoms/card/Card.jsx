import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  //Card自体には大きさの概念を持たせない。色々なところで使用したいから。
  //大きさはcomponent呼ぶ側で定義する
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  /* 色　 x軸距離　y軸距離 ぼかし距離　どれだけ広げるかの距離 */
  box-shadow: #ddd 0px 0px 4px 2px;
`;
