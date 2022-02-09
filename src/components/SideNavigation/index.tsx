import Link from 'next/link'

import { SuggestedAccounts } from '../SuggestAccounts'

import ForYouIcon from '../../assets/icons/for-you.svg'
import FollowingIcon from '../../assets/icons/following.svg'
import LiveIcon from '../../assets/icons/live.svg'

import * as S from './styles'

export const SideNavigation = () => {
  return (
    <S.Container>
      <S.MainNavigation>
        <Link href="#" passHref>
          <S.StyledLink>
            <ForYouIcon />
            <S.TextLink>For You</S.TextLink>
          </S.StyledLink>
        </Link>
        <Link href="#" passHref>
          <S.StyledLink>
            <FollowingIcon />
            <S.TextLink>Following</S.TextLink>
          </S.StyledLink>
        </Link>
        <Link href="#" passHref>
          <S.StyledLink>
            <LiveIcon />
            <S.TextLink>LIVE</S.TextLink>
          </S.StyledLink>
        </Link>
      </S.MainNavigation>

      <S.LoginContainer>
        <S.LoginText>
          Log in to follow creators, like videos, and view comments.
        </S.LoginText>
        <S.LoginButton>Log in</S.LoginButton>
      </S.LoginContainer>

      <SuggestedAccounts />
    </S.Container>
  )
}
