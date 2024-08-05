import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

function App({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default App
