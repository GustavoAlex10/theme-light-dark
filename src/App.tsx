import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import Header from './components/Header'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistencyState'
import React from 'react'

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light );
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  )
}


export default App