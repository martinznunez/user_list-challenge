import {TYPES_ACTIONS} from "../../constants";
import {Search} from "../index";

import {HeaderWrapper, ButtonStyled} from "./styled";

const buttonsRender: string[] = [
  TYPES_ACTIONS.TYPE_FILES,
  TYPES_ACTIONS.TYPE_COUNTRY,
  TYPES_ACTIONS.TYPE_RESET,
];

interface PropsHeader {
  handleClickAction: (T: string) => void;
  isOrderCounty: boolean;
  handleChangeSearch: (T: string) => void;
  querySearch: string;
}

const Header: React.FC<PropsHeader> = ({
  handleClickAction,
  isOrderCounty,
  handleChangeSearch,
  querySearch,
}) => {
  const getCountryButtonLabel = () => {
    return isOrderCounty ? "Unorder by country" : "Sort by country";
  };

  return (
    <HeaderWrapper>
      {buttonsRender.map((value) => (
        <ButtonStyled key={value} onClick={() => handleClickAction(value)}>
          {value === TYPES_ACTIONS.TYPE_COUNTRY ? getCountryButtonLabel() : value}
        </ButtonStyled>
      ))}
      <Search handleChangeSearch={handleChangeSearch} querySearch={querySearch} />
    </HeaderWrapper>
  );
};

export default Header;
