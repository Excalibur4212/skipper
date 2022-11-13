import React from "react";
import axios from 'axios';

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import PieChart from "examples/Charts/PieChart";

import pieChartData from "layouts/boxing-club/data/pieChartData";

export default class Boxing extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        members: []
    }
}

componentDidMount() {
    this.findAllMembers();
}

findAllMembers() {
    axios.get("http://localhost:8080/books")
            .then(response => response.data)
             .then((data) => {
                this.setState({members: data});
    });   
}

render() {
    const { members, participation } = pieChartData;
    return (
        <DashboardLayout>
          <h2> Boxing Club</h2>
          <h3>Member Count: 78</h3>
          <MDBox mt={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={8} lg={6}>
            <PieChart
            icon= "person"
            title= "Other Club Makeup"
            description= "See what other clubs people are in!"
            height= "3"
            chart={members}
          />
            </Grid>
            <Grid item xs={8} lg={6}>
            <PieChart
            icon= "person"
            title= "How Active are the Club Members?"
            description= "Based on the amount of participation in events."
            height= "3"
            chart={participation}
          />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              
            </Grid>
            <Grid item xs={12} md={5}>
             
            </Grid>
          </Grid>
        </MDBox>
      
      </MDBox>
        
         <MDBox pr={6}>
            <MDInput label="Search for members" />
        </MDBox>

        <div>
                <h2 className="text-center">Members</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Member Name</th>
                            <th>Member Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.members.length === 0 ?
                            <tr align="center">
                                <td colSpan = "6">{this.state.members.length} No Members.</td>
                            </tr> :
                            this.state.members.map((members) =>(
                                <tr key={members.id}>
                                    <td>{members.id}</td>
                                    <td>{members.name}</td>
                                    <td>{members.email}</td>
                                </tr>
                            ))
                            
                        }
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
      );
}

}