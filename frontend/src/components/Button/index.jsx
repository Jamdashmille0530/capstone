import * as Styles from "./styles";

const Button = ({ children, secondary, ...props }) => {
  return (
    <Styles.Wrapper secondary={secondary} {...props}>
      {children}
    </Styles.Wrapper>
  );
};

export default Button;
