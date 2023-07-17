import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";
import style from "../cardInformation/cardinformation.module.css"
import {arrayDoctor} from "../card/DoctorCard/"
import {Link} from "react-router-dom"
import { ThemeContext } from "../context/Context";

function CardInformation() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
	const value = useContext(ThemeContext)
	const theme = value.theme
	

  async function fetchDating() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchDating();
  }, []);


  return (
		<>
		<Navbar/>
		<section className={`${style.bodyInfo} ${style[theme]}`}>
		<h2 className={style.h2Info}> Doctor´s information</h2>
		<div className={style.cardContainer}>
		<div className={style.card}>
		<h3 className={style.cardInfoText}>Name: <span>{data.name}</span></h3>
		<img src={arrayDoctor[id]} alt="" />
		<p className={style.cardInfoText}>Email: <span>{data.email}</span> </p>
		<p className={style.cardInfoText}>Web: <span>{data.website}</span></p>
		<Link to={"/"}><button>Back to Home</button></Link>
		<p></p>
		</div>
		</div>
		</section>
		</>
	)
}

export default CardInformation;
