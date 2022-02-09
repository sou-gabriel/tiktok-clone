import styled from 'styled-components'

export const Container = styled.aside`
  width: 348px;

  display: flex;
  flex-direction: column;
  padding: 20px 0 26px 8px;
`

export const MainNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  box-shadow: 0 1px 1px rgb(0 0 0 /12%);
`

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  color: rgba(22, 24, 35, 1);
`

export const TextLink = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-left: 8px;
`

export const LoginContainer = styled.div`
  padding: 20px 8px 24px 8px;
  box-shadow: 0 1px 1px rgb(0 0 0 /12%);
`

export const LoginText = styled.p`
  color: rgba(22, 24, 35, 0.5);
  font-size: 16px;
  line-height: 22px;
`

export const LoginButton = styled.button`
  border: 1px solid rgba(254, 44, 85, 1);
  background: rgba(255, 255, 255, 1);
  min-width: 168px;
  color: rgba(254, 44, 85, 1);
  min-height: 48px;
  font-size: 18px;
  line-height: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  user-select: none;
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
`
