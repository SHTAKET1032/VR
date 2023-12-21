import {createPortal} from "react-dom";
import style from "./FullScreenPopupMenu.module.scss"

const portal = document.getElementById('portal')

const Menu = ({isMenuOpenChange}) =>
    createPortal(
        <div className={style.hello}>
            <div className={style.container}>
                <ol className={style.menuLeft}>
                    <li>Главная</li>
                    <li>Технологиии</li>
                    <li>Услуги</li>
                    <li>Кейсы</li>
                    <li>О компани</li>
                </ol>
                <ol className={style.menuRight}>
                    <li>Сертификаты</li>
                    <li>Команда</li>
                    <li>Отзывы</li>
                    <li>Блог</li>
                    <li>Контакты</li>
                </ol>
            </div>
        </div>,
        portal
    )

export default Menu;
