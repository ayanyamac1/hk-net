import React from "react";
import EmailImg from '../asstes/images/email.png'

const EmailsPage = () => {
    return(
        <div> 
             <h3> Emails</h3>
            <label for="inputPassword5" class="form-label">Username</label>
<input></input>
<div id="passwordHelpBlock" class="form-text">
</div>
<label for="inputPassword5" class="form-label">password </label>
     <input></input>
     <button className="btn btn-outline-primaryms-2">Login</button>
<div id="passwordHelpBlock" class="form-text">
 Please enter your password to access Archieved folders
 
</div>
         <div className="col-md-5 center"><img src={EmailImg} alt="Email"/></div>
        </div>
    );
};

export default EmailsPage