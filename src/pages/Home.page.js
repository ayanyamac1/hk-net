import React from "react";
import SpinnerComponent from "../components/ui/Spinner.component";

const HomePage = () => {
  return (
    <div>
      <SpinnerComponent />
      <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p> Andrew Knight - 500 Beenz points
  </p>

  <p class="mb-0">Holly Evans - 468 Beenz points</p>
</div>
      <div class="alert alert-primary" role="alert">
        *Announcement* - New Product Launch
      </div>
      
    </div>
  );
};

export default HomePage;
