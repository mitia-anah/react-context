import React, { useState } from 'react'
import { render } from 'react-dom';
const ThemeContext = React.createContext();

function ThemeContextProvider() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme()
        // this.setState(prevState => {
        //     return {
        //         theme: prevState.theme === 'light' ? 'dark' : 'light'
        //     }
        // })
    }

    return (
        <div>
            {toggleTheme}
        </div>
    )
}

export default ThemeContextProvider

/**
 * Convert this ThemeContextProvider into a functional component that uses hooks
 * Tip: Use the browser dev tools if you run into a bug that isn't clear from the Scrimba console logs
 */