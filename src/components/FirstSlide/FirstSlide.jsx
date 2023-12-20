import style from './FirstSlide.module.scss'
import vrGlasses from '../../assets/imgs/vrGlasses.png'



const FirstSlide = () => {
    return(
       <div className={style.firstSlideContainer}>
           <div className={style.firstSlideContainerLeft}>
               <h2 className={style.firstSlideTitle}>РАЗРАБОТКА</h2>
               <h2 className={style.firstSlideTitle}><b>VR/AR</b> ПРОЕКТОВ</h2>
               <p>Моделирование и визуализация 3D-объектов <br/> в формате виртуальной реальности</p>
           </div>
           <div className={style.firstSlideContainerRight}>
                <img src={vrGlasses} alt='vrGlasses' className={style.vrGlasses}/>
           </div>
       </div>
    )
}

export default FirstSlide;
