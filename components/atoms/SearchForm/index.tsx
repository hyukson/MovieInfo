import { SearchFormStyled } from "./styled";

interface SearchFormTypes {
  onChange: any;
}

const SearchForm = ({ onChange }: SearchFormTypes) => {
  return (
    <SearchFormStyled>
      <h1>Movie Title Search</h1>

      <input
        type="text"
        name="search"
        id="search"
        onInput={onChange}
        autoFocus
        placeholder="영화 제목을 입력해주세요."
      />
    </SearchFormStyled>
  );
};

export default SearchForm;
