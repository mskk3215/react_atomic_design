import styled from "styled-components";
import { BaseButton } from "./BaseButton";
//このconponentの役割はなんなのか？という意識することが大切
export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};
// styled.button→styled(BaseButton)
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
