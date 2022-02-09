import { ReactNode } from 'react'

import { Header } from '../Header'

import { GlobalStyle } from '../../styles/global'

interface ILayoutProps {
  children: ReactNode | ReactNode[]
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <GlobalStyle />
    </>
  )
}
