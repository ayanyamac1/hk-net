import React from "react";
import AndrewImg from "../asstes/images/andrew.jpeg";
import HollyImg from "../asstes/images/holly.jpeg";

const StaffBiographiesPage = () => {
    return (

            <div className="container">
                <div className="row">
                <div className="col-12 bg-info p-4 rounded"> 
                <h3> Staff Biographies</h3>
                </div>

                </div>
                <div className="row align-items-center mt-4">
                    <div className="col-md-7"> <strong> Andrew Knight/Secretary</strong> contact information:  <code>Andrewknight@hk.net </code>  
                        Experience : 10 years, Efficient and detailed oriented sectaury within 10 years experience of delivering administritive support to 
                       c-suite executies in Fourtune 500 companies. demonstarted success creating process that boost operational effieciency. 
                       <code> Beenz Points</code> 500
                       <strong>   Previous Projects: Global, Product Launch, Cypher, HomeHub </strong><button className="btn btn-outline-primary ms-2">Contact</button> </div>
                       <br></br>
                       
                    

                    <div className="col-md-6"> 
                    <img src={AndrewImg} alt="Andrew" />
                    </div>
                </div>
                <p id="newline"></p> 
                <strong>Holly Evans/Financial Advisor</strong> contact information:  <code>Holly.Evans@hk.net 
                    </code> Experience; 7 years, 
                    <br></br> Accomplished finical advisor with 7 years experience mananging diverse portfolios for
                    <br></br> high-net-worth individuals. Skilled in developing comprehensive finical plans.   <code> Beenz Points</code> 489
                    <br></br>  <strong>   Previous Projects: Spher Product Launch, Cypher, HomeHub </strong>
                   
                   <br></br> 
                   <button className="btn btn-outline-primary ms-2">Contact</button>
                    <div className="col-md-6"> 
                    <img src={HollyImg} alt="Holly" />

                 </div>
                        

            </div>
    );
};

export default StaffBiographiesPage