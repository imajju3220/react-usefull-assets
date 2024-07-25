import React from 'react'
import useLocalStorage from './useLocalStorage'
import './theme.css'
export default function LightDarkMod() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    console.log(theme);
  return (
    <div className='light-dark-mode' data-theme={theme}>
        <p>Hello world</p>
        <button onClick={handleToggleTheme}>change theme</button>
    </div>
  )
}
 