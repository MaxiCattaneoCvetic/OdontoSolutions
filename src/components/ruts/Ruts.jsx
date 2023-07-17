import {Link, Route, Routes } from "react-router-dom"
import Intro from "../intro/intro"
import Form from "../contact/form/Form"
import Favorite from "../favorite/Favorite"
import CardInformation from "../cardInformation/CardInformation"
import { useContext } from "react"
import { ThemeContext } from "../context/Context"



function Ruts () {
	const valores = useContext(ThemeContext)

	return(
		<Routes>
			<Route path='/' element={<Intro/>}/>
			<Route path="/contact" element={<Form/>}/>
			<Route path="/fav" element={<Favorite/>}/>
			<Route path="*" element={<div><h1>Algo salio mal...</h1><Link to={"./"}><button>Volver atras</button></Link></div>}/>
			<Route path="/:id" element={<CardInformation/>}/>
		</Routes>


	)



}

export default Ruts