import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    
    const toggleTheme = () => {
        if(theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }    
    
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme= () => useContext(ThemeContext)