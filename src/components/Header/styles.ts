import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 0 24px 0 20px;
  box-shadow: 0 1px 1px rgb(0 0 0 /12%);
`

export const InnerContainer = styled.div`
  max-width: 1150px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UploadButton = styled.button`
  display: inline-block;
  margin-right: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: rgb(22, 24, 35);
`

export const LoginButton = styled.button`
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(254, 44, 85, 1);
  min-width: 100px;
  min-height: 36px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
`

export const EllipsisButton = styled.button`
  margin-left: 16px;
  position: relative;
  padding: 0 4px;
`
