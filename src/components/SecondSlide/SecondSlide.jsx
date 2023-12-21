import style from "./SecondSlide.module.scss"
import vrGlasses2 from "../../assets/imgs/vrGlasses2.png";
import phone from "../../assets/imgs/phone.png";

const SecondSlide = () => {
    return(
        <div className={style.secondSlide}>
            <h2 className={style.title}>ОТЛИЧИЯ ВИРТУАЛЬНОЙ<br/>РЕАЛЬНОСТИ ОТ ДОПОЛНЕННОЙ</h2>
            <div className={style.secondSlideContainer}>
                <div className={style.secondSlideContainerLeft}>
                    <img src={vrGlasses2} alt="vrGlasses" className={style.secondSlideImg}/>
                    <h5>Виртуальная реальность</h5>
                    <p>Отличается от дополненной реальности (AR) тем, что видимая действительность искусственна. Пользователю предлагают полное погружение, задействуя дополнительные органы чувств. Мы внедряем новейшие разработки VR — используем не только шлем, а ещё перчатки, костюмы и контроллеры движения.</p>
                </div>
                <div className={style.secondSlideContainerRight}>
                    <img src={phone} alt="phone" className={style.secondSlideImg}/>
                    <h5>Дополненная реальность</h5>
                    <p>Технология, с помощью которой в видимую действительность помещают виртуальные объекты. Представьте, что вы на презентации архитектора надеваете специальные очки, и на пустом столе появляется макет здания. Движением руки вы сможете вращать объект, приближать, отдалять или даже что-то в нём поменять.</p>
                </div>
            </div>
        </div>

    )
}

export default SecondSlide;
