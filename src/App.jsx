import { BrowserRouter } from "react-router-dom"
import Ruts from "../src/components/ruts/Ruts"
import Context, { ThemeContext } from "./components/context/Context"
import { useContext } from "react";





function App(){

		return(
		<>
			
			<BrowserRouter>
			<Context>
				<Ruts/>
				</Context>
			</BrowserRouter>
			
			
			
			</>
	)



}
export default App