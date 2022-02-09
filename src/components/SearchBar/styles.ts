import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  padding: 12px 16px;
  border-radius: 92px;
  background-color: rgba(22, 24, 35, 0.06);
`

export const Input = styled.input`
  width: 292px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  outline: none;
  background: transparent;
  caret-color: rgba(254, 44, 85, 1);
`

export const VerticalLine = styled.span`
  display: inline-block;
  width: 1px;
  height: 28px;
  margin: -3px 0;
  background: rgba(22, 24, 35, 0.12);
`

export const SubmitButton = styled.button`
  padding: 11px 16px 11px 12px;
  margin: -12px -16px;
  font-size: 0;
  margin-left: 0;
`
