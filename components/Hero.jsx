import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
export default function Hero() {
    return(
        <div className={css.container}>
            {/* left Side */}
           <div className={css.left}>
            <div className={css.CherryDiv}>
                <span>Bilkul Desi Swaad</span>
                <Image src={Cherry} alt="" width={40} height={40}/>
               
            </div>
            <div className={css.heroText}>
                <span>Har</span>
                <span>Khane Ki</span>
                <span>
                    
                    Alag <span style={{color: "var(--themeRed)"}}>Kahani</span>
                    </span>
                </div>

                <span className={css.miniText}>
                    Our Mission is to filling your tummy with delicoius food and with free delivery
                </span>
        <button className={`btn ${css.btn}`}>
            Order Now
        </button>


           </div>

        
            {/* right side */}
            <div className={css.rightSide}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt='' layout='intrinsic'/>
                </div>
            </div>
        </div>
    );
}