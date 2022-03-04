import { SearchFormStyled } from "./styled";

interface SearchFormTypes {
  onChange: any;
  value: string;
}

const SearchForm = ({ onChange, value }: SearchFormTypes) => {
  return (
    <SearchFormStyled>
      <h1>Movie Title Search</h1>

      <input
        type="text"
        name="search"
        value={value}
        id="search"
        onInput={onChange}
        autoFocus
        placeholder="영화 제목을 입력해주 ."
      />
    </SearchFormStyled>
  );
};

export default SearchForm;
