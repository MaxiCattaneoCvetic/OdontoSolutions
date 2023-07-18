import { useContext, useEffect } from "react"
import DoctorCard from "../card/DoctorCard"
import Navbar from "../nav/Navbar"
import style from "./intro.module.css"
import { ThemeContext } from "../context/Context"
import introDoct from '../doctorImages/introDoc.png'



const DOCTOR_FAVORITE = "doctorFavorites";
function Intro () {
	const value = useContext(ThemeContext)
	let theme = value.theme


	

	useEffect(()=>{
		localStorage.setItem(DOCTOR_FAVORITE,JSON.stringify([]))
	},[])


	return(
		<>
		<section className={`${style.bodyClass} ${style[theme]}`}  >
		<Navbar/>
		<div className={style.introContainer}  >
			<div className={style.sloganContainer} >
		<h1>OralHealth <span className={style.solutions}>Solutions</span></h1>
		<h2 className={style.introH2} > "Your dental well-being in expert hands"</h2>
		</div>
		<img className={style.imgDoctor} src={introDoct} alt="" />
		</div>

		<DoctorCard>
		
		</DoctorCard>
		
		
		</section>
		
		</>
	)


}

export default Intro 