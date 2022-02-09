import SearchIcon from '../../assets/icons/search.svg'

import * as S from './styles'

export const SearchBar = () => {
  return (
    <S.Container>
      <S.Input type="text" placeholder="Search account and videos" />

      <S.VerticalLine />

      <S.SubmitButton>
        <SearchIcon />
      </S.SubmitButton>
    </S.Container>
  )
}
