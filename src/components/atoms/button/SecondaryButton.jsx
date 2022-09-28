import styled from "styled-components";
import { BaseButton } from "./BaseButton";

//このconponentの役割はなんなのか？という意識することが大切
export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
