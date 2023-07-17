import { useState, createContext } from 'react'


export const ThemeContext = createContext()

function Context(props){
	const [theme,setTheme] = useState("light")

	const toggleTheme =()=>{
		setTheme((current) => {
			return current === "light" ? "dark" : "light"
		})
	}

	const exposedValue = {
		theme,
		toggleTheme
	}

	return(
		<ThemeContext.Provider value={exposedValue}>
			{props.children}
			</ThemeContext.Provider>
	)



}

export default Context

