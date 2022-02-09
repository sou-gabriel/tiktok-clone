import Link from 'next/link'

import { SearchBar } from '../SearchBar'

import Logo from '../../assets/icons/logo.svg'
import EllipsisIcon from '../../assets/icons/ellipsis.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.InnerContainer>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <SearchBar />

        <div>
          <S.UploadButton>Upload</S.UploadButton>
          <S.LoginButton>Log in</S.LoginButton>
          <S.EllipsisButton>
            <EllipsisIcon />
          </S.EllipsisButton>
        </div>
      </S.InnerContainer>
    </S.Container>
  )
}
