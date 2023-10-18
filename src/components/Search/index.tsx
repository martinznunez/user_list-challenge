import {StyledInput, SearchContainer} from "./styled";

interface PropsSearch {
  handleChangeSearch: (T: string) => void;
  querySearch: string;
}

const Search: React.FC<PropsSearch> = ({handleChangeSearch, querySearch}) => {
  return (
    <SearchContainer>
      <StyledInput
        autoComplete="off"
        className="input"
        name="text"
        placeholder="Search..."
        type="text"
        value={querySearch}
        onChange={(e) => handleChangeSearch(e.target.value)}
      />

      {querySearch && (
        <div className="reset-icon" onClick={() => handleChangeSearch("")}>
          X
        </div>
      )}
    </SearchContainer>
  );
};

export default Search;
