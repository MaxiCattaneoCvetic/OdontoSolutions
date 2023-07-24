import { useContext, useEffect, useState } from "react";
// import { ApiContext } from "../fetchContext/FetchContextProvider";
import style from "../card/doctorCard.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/Context";
import d1 from '../doctorImages/dman1.webp'
import d2 from '../doctorImages/dman2.avif'
import d3 from '../doctorImages/dman3.jpeg'
import d4 from '../doctorImages/dman4.jpg'
import d5 from '../doctorImages/dman5.jpg'
import d6 from '../doctorImages/dman6.jpg'
import d7 from '../doctorImages/dman7.jpg'
import d8 from '../doctorImages/dwoman1.jpg'
import d9 from '../doctorImages/dwoman2.jpg'
import d10 from '../doctorImages/dwoman3.jpg'









const DOCTOR_FAVORITE = "doctorFavorites";
export const arrayDoctor = [
  "",
  d1,d2,d3,d4,d5,d6,d7,d8,d9,d10
];

function DoctorCard() {
  //---import theme context---
  const themeImp = useContext(ThemeContext);
  const theme = themeImp.theme

  const [dataUser,setDataUser] = useState([])
  const endpoint = "https://jsonplaceholder.typicode.com/users"



    // ----Fetch data user & Setting ----
  async function fetchDataUser(){
    const response = await fetch(endpoint);
    const data = await response.json()
    setDataUser(data)
  }

  useEffect(()=>{
    fetchDataUser()
  },[])



  // ----LocalStorage managerment----
  const [favorites, setFavorites] = useState(
    localStorage.getItem(DOCTOR_FAVORITE)
      ? JSON.parse(localStorage.getItem(DOCTOR_FAVORITE))
      : []
  );
    // ----Favorite managerment----
  function addFavorite(idFilter) {
    const doctor = dataUser.find((doc) => doc.id === idFilter);
    if (doctor) {
      const newFavorites = [...favorites, doctor];
      setFavorites(newFavorites);
      localStorage.setItem(DOCTOR_FAVORITE, JSON.stringify(newFavorites));
    }
  }

  function deleteFavorite(idFilter) {
    const newFavorites = favorites.filter((doc) => doc.id !== idFilter);
    setFavorites(newFavorites);
    localStorage.setItem(DOCTOR_FAVORITE, JSON.stringify(newFavorites));
  }

  function isFavorite(id) {
    if(favorites){
      return favorites.some((doc) => doc.id === id);
    }
    
  }

       // ----End Favorite managerment----


  return (
    <>
      {dataUser.length > 0 ? (
        <div className={`${style.cardContainer} ${style[theme]}`}>
          {dataUser.map((doc) => {
            return (
              <div key={doc.id} className={style.card}>
                <h3>
                  <strong className={style.cardText}>
                  Name:
                  </strong>{" "}
                  <span>{doc.name}</span>
                </h3>
                <img src={arrayDoctor[doc.id]} alt="" />
                <p>
                  <strong className={style.cardText} >Email:</strong> <span > {doc.email}</span>
                </p>
                <p>
                  <strong className={style.cardText} >UserName:</strong><span > {doc.username}</span> 
                </p>
                <div className={style.buttonContainer}>
                {isFavorite(doc.id) ? (
                  <button   onClick={() => deleteFavorite(doc.id)}>
                    Delete favorite
                  </button>
                ) : (
                  <button   onClick={() => addFavorite(doc.id)}>Add favorite</button>
                )}
                <Link to={`${doc.id}`}  ><button  >More Info + </button></Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Cargando datos....</div>
      )}
    </>
  );
  

}  

export default DoctorCard;
