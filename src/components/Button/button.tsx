import { ButtonWrapper } from "./buttonComponents";

export const Button = (props: { to: string; text: string }) => {
  return (
    <>
      <a href={props.to}>
        <ButtonWrapper>
          <span>{props.text}</span>
        </ButtonWrapper>
      </a>
    </>
  );
};

export default Button;
