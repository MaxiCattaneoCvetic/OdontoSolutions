import { useContext, useEffect, useState } from "react";
// import { ApiContext } from "../fetchContext/FetchContextProvider";
import style from "../card/doctorCard.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/Context";
import {doc1} from "../../doctorImages/dman1.webp"



const DOCTOR_FAVORITE = "doctorFavorites";
export const arrayDoctor = [
  "",
  doc1,
  "src\\doctorImages\\dman2.avif",
  "src\\doctorImages\\dman3.jpeg",
  "src\\doctorImages\\dman4.jpg",
  "src\\doctorImages\\dman5.jpg",
  "src\\doctorImages\\dman6.jpg",
  "src\\doctorImages\\dman7.jpg",
  "src\\doctorImages\\dwoman1.jpg",
  "src\\doctorImages\\dwoman2.jpg",
  "src\\doctorImages\\dwoman3.jpg",
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
                {isFavorite(doc.id) ? (
                  <button   onClick={() => deleteFavorite(doc.id)}>
                    Delete favorite
                  </button>
                ) : (
                  <button   onClick={() => addFavorite(doc.id)}>Add favorite</button>
                )}
                <Link to={`${doc.id}`}  ><button  >More Info + </button></Link>
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
