import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function data()
{
    const Organizer = ({name, club, position, color}) =>
    {
        <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="button" fontWeight="mdeium" color={color}>{name}</MDTypography>
            <MDTypography variant="caption" color={color}>{club}, {position}</MDTypography>            
        </MDBox>
    };

    const Location = ({name, building, color}) =>
    {
        <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="button" fontWeight="mdeium" color={color}>{name}</MDTypography>
            <MDTypography variant="caption" color={color}>{building}</MDTypography>            
        </MDBox>
    };

    const column = 
    [
        {accessor: "organizer", align:"center"},
        {accessor: "location", align:"center"},
        {accessor: "description", align:"center"},
        {accessor: "time", align:"center"},
    ];

    var colorChoice = 0;
    var colors = ["primary", "secondary", "info"];

    const d12 = 
    {
        columns: column,
        rows:
        [
            {
                organizer: <Organizer name="Arda Gürcan" club="Boxing Club" position="Club Treasurer" color={colors[colorChoice]} />,
                location: <Location name="Same place as usual!" building="you know which one it is :)" color={colors[colorChoice]} />,
                description: (<MDTypography component="a" variant="caption" color={colors[colorChoice]}></MDTypography>),
                time: (<MDTypography component="a" variant="caption" color={colors[(++colorChoice) % 3]} fontWeight="medium">10:00PM-2:30AM</MDTypography>),
            },
            {
                organizer: <Organizer name="Ryan S. Werner" club="Cheesehacks" position="who knows" color={colors[colorChoice]} />,
                location: <Location name="Room 204" building="Educational Sciences" color={colors[colorChoice]} />,
                description: (<MDTypography component="a" variant="caption" color={colors[colorChoice]}>Let the games begin.</MDTypography>),
                time: (<MDTypography component="a" variant="caption" color={colors[(++colorChoice) % 3]} fontWeight="medium">12:00PM-12:00PM</MDTypography>),
            },
        ]
    }

    const d14 = 
    {
        columns: column,
        rows:
        [
            {
                organizer: <Organizer name="Ryan Okushi" club="AASU" position="Board Member" color={colors[colorChoice]} />,
                location: <Location name="Hong Kong Station" building="1414 Regent St, Madison, WI 53711" color={colors[colorChoice]} />,
                description: (<MDTypography component="a" variant="caption" color={colors[colorChoice]}></MDTypography>),
                time: (<MDTypography component="a" variant="caption" color={colors[(++colorChoice) % 3]} fontWeight="medium">5:00PM-7:00PM</MDTypography>),
            },
        ]
    }

    const d20 = 
    {
        columns: column,
        rows:
        [
            {
                organizer: <Organizer name="Travis Youman" club="Hoofers Sailing" position="Zest Instructor" color={colors[colorChoice]} />,
                location: <Location name="Yellow Canopy" building="T Dock" color={colors[colorChoice]} />,
                description: (<MDTypography component="a" variant="caption" color={colors[colorChoice]}></MDTypography>),
                time: (<MDTypography component="a" variant="caption" color={colors[(++colorChoice) % 3]} fontWeight="medium">4:00PM-6:00PM</MDTypography>),
            },
        ]
    }

    return[d12, d14, d20];
}