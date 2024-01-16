import React from "react";
import { ImBooks } from "react-icons/im";

const WisdomHubPage = () => {
  return (
    <div>
      <h2>  
        Wisdom Hub 
        <ImBooks />
        </h2>
<br></br>
<h4>Login</h4>
      <label for="inputPassword5" class="form-label">Username</label>
<input></input>
<div id="passwordHelpBlock" class="form-text">
</div>
<label for="inputPassword5" class="form-label">password </label>
     <input></input>
     <button className="btn btn-outline-primary ms-2">Login</button>
<div id="passwordHelpBlock" class="form-text">
<strong> Please enter your password to access files </strong>
</div>
<br></br>
<h3> - share knowledge -</h3>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address/Name   </ label>
  <input></input> 
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Share New Information Below</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
   <button className="btn btn-outline-primary ms-2">Submit</button>
   
</div>
<strong> knowledge Buckets</strong>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Own Products & Services
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>New product launch </strong> Introducing the New HomeHub
              Pro: are you ready to transform your living space into a smart,
              connected haven, look no further! we are thrilled to announce the
              launch of HomeHub pro
              <code>.HomeHub </code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Account Activity, Budgets and Templates
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong></strong> - Account activity : (ACTIVE) budgets : 300{" "}
              <code> Templates</code>, this can be found in your emails section
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Research:- Industry News, Economic Forecasts
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong> Current status:</strong> Industry News: Fintech need a
              strong brand indentity to stand out! Economic Forecasts: Global
              Recovery remains slow.
              <code>.current status</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WisdomHubPage;

// this page is for knowledge sharing
