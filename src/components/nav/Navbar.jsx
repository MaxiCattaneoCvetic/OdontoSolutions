import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import ReactSwitch from "react-switch";
import { useContext, useState } from 'react';
import {ThemeContext} from "../context/Context"
import { faUser, faEnvelope, faPhone, faGlobe,faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iconNav from '../doctorImages/dientes.png'


function Navbar() {
  const [checked, setChecked] = useState(false);
  const valores = useContext(ThemeContext)
  const theme = valores.theme
	

  const handleChange = (newChecked) => {
    setChecked(newChecked);
    valores.toggleTheme()
    
  };

  return (
    <header className={`${style[theme]}`} >
      <div>
        <img src={iconNav} alt="logo" />
      </div>
      <nav>
        <li className={style.home}>
          <Link to="/"><FontAwesomeIcon icon={faHouse} className={style.houseIcon}/> Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/fav">Favorite</Link>
        </li>
      </nav>

      <div className={style.swithContainer}>
        <ReactSwitch  checked={checked} onChange={handleChange} className={style.swith} /> 
        {checked ? <label className={`${style.labelm} ${style[theme]}`}>Dark Mode</label>:<label className={`${style.labelm} ${style[theme]}`}>Light Mode</label>}
      </div>
    </header>
  );
}
export default Navbar
