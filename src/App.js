import {Route} from "react-router-dom"
import Body from "./components/body/body"
import Menu from "./components/menu/menu"
import Header from "./components/head/header"


const App = () => {
	return <>
		<Menu/>
		<Header/>
		<Route path={"/stat1"} render={() => <Body/>}/>
	</>
}

export default App