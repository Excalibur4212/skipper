import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import calendarTableData from "layouts/tables/data/calendarTableData";

function Tables()
{
    const data = [];
    for(var i = 0; i < 5; i++) for(var j = 0; j < 8; j++)
    {
        switch(i * 8 + j)
        {
            case 0, 1, 36, 37, 38:
                data[i * 8 + j] = function()
                {
                    <Grid item xs={1}>
                        <Card>
                            <MDBox mx={0} mt={0} py={0} px={2} variant = "gradient" bgColor="grey.600" borderRadius="lg"coloredShadow="info" />
                        </Card>
                    </Grid>
                };
                break;
            case 7, 39:
                data[i * 8 + j] = function()
                {
                    <Grid item xs={5}>
                        <Card>
                            <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" bgColor="info" borderRadius="lg" coloredShadow="info">
                                <MDTypography align="center" variant="h6" color="white">
                                    Total Events:
                                </MDTypography>
                            </MDBox>
                            <MDBox pt={3}>
                                <MDTypography align="center" variant="h5">
                                    0.
                                </MDTypography>
                            </MDBox>
                        </Card>
                    </Grid>
                };
                break;
            case 15:
                data[i * 8 + j] = function()
                {
                    <Grid item xs={5}>
                        <Card>
                            <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" bgColor="info" borderRadius="lg" coloredShadow="info">
                                <MDTypography align="center" variant="h6" color="white">
                                    Total Events:
                                </MDTypography>
                            </MDBox>
                            <MDBox pt={3}>
                                <MDTypography align="center" variant="h5">
                                    2.
                                </MDTypography>
                            </MDBox>
                        </Card>
                    </Grid>
                };
                break;
            case 23:
                data[i * 8 + j] = function()
                {
                    <Grid item xs={5}>
                        <Card>
                            <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" bgColor="info" borderRadius="lg" coloredShadow="info">
                                <MDTypography align="center" variant="h6" color="white">
                                    Total Events:
                                </MDTypography>
                            </MDBox>
                            <MDBox pt={3}>
                                <MDTypography align="center" variant="h5">
                                    1.
                                </MDTypography>
                            </MDBox>
                        </Card>
                    </Grid>
                };
                break;
            case 31:
                data[i * 8 + j] = function()
                {
                    <Grid item xs={5}>
                        <Card>
                            <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" bgColor="info" borderRadius="lg" coloredShadow="info">
                                <MDTypography align="center" variant="h6" color="white">
                                    Total Events:
                                </MDTypography>
                            </MDBox>
                            <MDBox pt={3}>
                                <MDTypography align="center" variant="h5">
                                    1.
                                </MDTypography>
                            </MDBox>
                        </Card>
                    </Grid>
                };
                break;
            
        }
    }
    return(
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
                <MDTypography variant="h6" color="white" bgcolor="info">November 2022</MDTypography>
                <Grid container spacing={1}>
                    {
                        for(var i = 0; i < 8; i++)
                        {
                        }
                    }
                </Grid>
            </MDBox>
        </DashboardLayout>
    );

    export default Tables;
}