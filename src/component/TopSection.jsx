import React from "react";
import styles from "./TopSection.module.css"
import GetStartedButton from "./GetStartedButton";
const TopSection = () => {
  return (
    <div className = {styles.topSectionMainContainer}>
      <div className={styles.firstContainer} >
        <p>All your business banking at one platform</p>
        <p>
          Take you business to the new height with faster cash flow and clear
          financial insights all with a free Nova account. Apply in 10 minutes
        </p>
        <div  className={styles.buttonStart} >
        <GetStartedButton  title="Get Started"/>
        </div>
        
        <p>Already started ?<span style={{color:'#ea5341'}} > Finish your application</span></p>
      </div>
      <div className={styles.firstImageContainer}>
      <img  src="https://media.istockphoto.com/id/1335221475/photo/young-woman-on-purple-background.jpg?s=612x612&w=0&k=20&c=hDeumkocfvQXSnM0FgpZhuXQNvGmoAgjnGk4jgBkr54=" alt ='credit-card-girl-pic'/>
      </div>
      <div className={styles.secondImageContainer} >
       <img   src='https://media.istockphoto.com/id/1308840819/photo/female-hand-holding-bank-credit-card.jpg?s=612x612&w=0&k=20&c=TJEnGn5avyOe1TSurlEs5BH6HBQUQlxrRcAxgfRw9bs=' alt='showing -credit--card' />
      </div>
    </div>
  );
};

export default TopSection;
