import { arrayDoctor } from "../card/DoctorCard";
import { useContext, useEffect, useState } from "react";
import style from "../card/doctorCard.module.css";
import Navbar from "../nav/Navbar";
import styles from "../favorite/favorite.module.css"
import { ThemeContext } from "../context/Context";
import imgNOTfav from '../doctorImages/headhunting.png'

function Favorite() {
  const valor = useContext(ThemeContext)
  const theme = valor.theme
  console.log(theme);


  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("doctorFavorites")) 
  );

  function deleteFavorite(idFilter) {
    let newData = data.filter((favorite) => {
			return favorite.id !== idFilter})
    setData(newData);
  }

  useEffect(() => {
    localStorage.setItem("doctorFavorites", JSON.stringify(data));
    console.log(data);
  }, [data]);

  return (
    <>
      <Navbar />
      <body>
      <section className={ `${styles.bodyFavorite} ${styles[theme]}`}  >
      {data.length > 0  ? (
        <div className={style.cardContainer}>
          {data.map((doc) => {
            return (
              <div key={doc.id} className={style.card}>
                <h3>
                  <strong>Name:</strong> {doc.name}
                </h3>
                <img style={styles} src={arrayDoctor[doc.id]} alt="" />
                <p>
                  <strong>Email:</strong> {doc.email}
                </p>
                <p>
                  <strong>UserName:</strong> {doc.username}
                </p>
                <button onClick={() => deleteFavorite(doc.id)}>
                  Delete favorite
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.divNotFav}>
          <img className={styles.imgNotFav} src={imgNOTfav} alt="" />
          <strong style={styles}>It seems like you still don't<br></br> have a favorite doctor</strong>
        </div>
      )}
</section>
        
      </body>

    </>
  );
      }

export default Favorite