/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";


// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Notifications() {

  return (
    <DashboardLayout>
      <h2>Reviews and Ratings</h2> 
      <DefaultInfoCard
        icon="water"
        title="Sailing Club"
        description="I had the most fun going sloop racing with everyone, it was amazing and I love the feel of the wind on my face, the sound of the waves crashing against the hull, and the beautiful cries as I crash into another boat. "
        value="6/5 "
      />
    </DashboardLayout>
  );
}

export default Notifications;
