
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";

import style from './App.module.scss';

function App() {
    return (

        <div className={style.container}>

            <Header/>
            <Home/>

        </div>

    )
}

export default App;
