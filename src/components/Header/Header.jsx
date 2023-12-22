import {useState} from "react";
import FullScreenPopupMenu from "../FullScreenPopupMenu/FullScreenPopupMenu";

import style from '../../components/Header/Header.module.scss'
import mainLogo from "../../assets/imgs/mainLogo.svg";




const Header = () =>{

    const [isMenuOpen, isMenuOpenChange] = useState(false);
    const [isActiveLang, setActiveLang] = useState(1);

    const styleRu = `${style.element} ${isActiveLang === 1 ? style.active : style.inactive}`;
    const styleEn = `${style.element} ${isActiveLang === 2 ? style.active : style.inactive}`;

    const handleClick = (element) => {
        setActiveLang(element);
    }




    return (
        <header className={style.header}>

            {isMenuOpen && <FullScreenPopupMenu/>}

            <div className={style.headerLeft}>
                <img src={mainLogo} alt="main Title"/>

                <p
                    data-element={1}
                    className={styleRu}
                    onClick={() => handleClick(1)}
                >РУ</p>
                <p
                    data-element={2}
                    className={styleEn}
                    onClick={() => handleClick(2)}
                >EN</p>

            </div>

            <div className={style.headerRight}>

                <a
                    href='tel:+7 928 123 45 67'
                    className={style.headerPhone}>+7 928 123 45 67
                </a>
                <button className={style.btnGetConsultation}>Получить  консультацию</button>
                <div
                    className={style.burgerMenuIcon}
                    onClick={() => isMenuOpenChange(!isMenuOpen)}>
                        <div className={style.burgerLineTop}></div>
                        <div className={style.burgerLineBottom}></div>
                </div>

            </div>

        </header>
    )
}

export default Header;
