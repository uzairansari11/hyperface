import { logo, navbarOptions } from "../utils/constant"
import GetStartedButton from "./GetStartedButton"
import styles from "./Navbar.module.css"
const Navbar= ( )=>{
    return <div  className = {styles.mainContainer}>
    <div className={styles.logoContainer} >
        {logo}
        <p>
            Nova
        </p>
    </div>
    <div   className= {styles.optionsContainer} >
        {navbarOptions.map((ele)=>{
           return <div key ={ele.id}   className={styles.optionsTab} >
                <p  >{ele.title}</p>
               { ele.icon}
            </div>
        })}
    </div>
    <div className = {styles.lastContainer} >
        <p>Log In</p>
        <div className={styles.getStarted} >
           <GetStartedButton title='Get Started' />
    </div>
    </div>
    </div>
}

export default Navbar