import {useState} from "react";
import FullScreenPopupMenu from "../FullScreenPopupMenu/FullScreenPopupMenu";

import style from '../../components/Header/Header.module.scss'
import mainLogo from "../../assets/imgs/mainLogo.svg";




const Header = () =>{

    const [isMenuOpen, isMenuOpenChange] = useState(false)


    return (
        <header className={style.header}>

            {isMenuOpen ? <FullScreenPopupMenu/> : null}

            <div className={style.headerLeft}>
                <img src={mainLogo} alt="main Title"/>

                <p className={style.switchLang}>EN</p>
                <p className={style.switchLangInactive}>РУ</p>

            </div>

            <div className={style.headerRight}>

                <a href='tel:+7 928 123 45 67' className={style.headerPhone}>+7 928 123 45 67</a>
                <button className={style.btnGetConsultation}>Получить  консультацию</button>
                <div className={style.burgerMenuIcon} onClick={() => isMenuOpenChange(!isMenuOpen)}>
                    <div className={style.burgerLineTop}></div>
                    <div className={style.burgerLineBottom}></div>
                </div>

            </div>

        </header>
    )
}

export default Header;
