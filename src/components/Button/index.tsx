import {ButtonStyled} from "./styled";

interface PropsButtons {
  value: string;
  handleClick: (T: string) => void;
  isDisabled?: boolean;
}
const ButtonPage: React.FC<PropsButtons> = ({value, handleClick, isDisabled}) => {
  return (
    <ButtonStyled disabled={isDisabled} onClick={() => handleClick(value)}>
      {value}
    </ButtonStyled>
  );
};

export default ButtonPage;
