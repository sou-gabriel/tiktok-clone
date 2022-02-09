import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  padding: 16px;
  color: rgba(22, 24, 35, 0.75);
  font-weight: 600;
  font-size: 14px;
`

export const Title = styled.p`
  padding: 0 8px;
  margin-bottom: 8px;
  line-height: 20px;
`

export const AccountsList = styled.ul`
  list-style: none;
`

export const StyledLink = styled.li`
  display: flex;
  align-items: center;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const Content = styled.div`
  margin-left: 12px;
`
