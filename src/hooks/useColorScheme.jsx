import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import useLocalStorage from 'use-local-storage'

export const useColorScheme = () => {
  const systemPrefersDark = useMediaQuery(
    { query: '(prefers-color-scheme: dark)' },
    undefined
  )
  
  const [isDark, setIsDark] = useLocalStorage('dark', systemPrefersDark)

  useEffect(() => {
    if(isDark)
      document.body.classList.add('dark')
    else
      document.body.classList.remove('dark')
  }, [isDark])

  return {
    isDark,
    setIsDark
  }
}
