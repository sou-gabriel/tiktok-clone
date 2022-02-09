import Link from 'next/link'

import AvatarImagePath from '../../assets/images/avatar.jpeg'
import VerifiedIcon from '../../assets/icons/verified.svg'

import * as S from './styles'

export const SuggestedAccounts = () => {
  return (
    <S.Container>
      <S.Title>Suggested accoutns</S.Title>
      <S.AccountsList>
        <li>
          <Link href="#" passHref>
            <S.StyledLink>
              <S.Avatar
                src={AvatarImagePath}
                alt="Mari Maria Makeup"
                width={32}
                height={32}
              />

              <S.Content>
                <div>
                  <strong>marimariamakeup</strong>
                  <span>
                    <VerifiedIcon />
                  </span>
                </div>
                <p>Mari Maria Makeup</p>
              </S.Content>
            </S.StyledLink>
          </Link>
        </li>
      </S.AccountsList>
    </S.Container>
  )
}
