import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ListItemCard from './ListItemCard';
import { border } from '@mui/system';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box>
                <Typography>{children}</Typography>
            </Box>}

        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
    })
)
export default function ScrollableTabsButtonForce() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <Box sx={{
            color: "#000", textTransform: 'none',
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                textColor="primary"
                aria-label="scrollable force tabs"
            >
                <Tab
                    style={{ textTransform: 'none', }}
                    label="All" />
                <StyledTab label="Director" />
                <StyledTab label="Co-Founder" />
                <StyledTab label="CEO" />
                <StyledTab label="CFO" />
                <StyledTab label="CHRO" />
                <StyledTab label="CIO" />
                <StyledTab label="CTO" />
                <StyledTab label="Others" />
            </Tabs>
            <TabPanel value={value} index={0} >
                <ListItemCard />
            </TabPanel>
            <TabPanel value={value} index={1} >
                Director
            </TabPanel>
            <TabPanel value={value} index={2} >
                CO FOUNDER
            </TabPanel>
            <TabPanel value={value} index={3} >
                CEO
            </TabPanel>
            <TabPanel value={value} index={4} >
                CFO
            </TabPanel>
            <TabPanel value={value} index={5} >
                CHRO
            </TabPanel>
            <TabPanel value={value} index={6} >
                CIO
            </TabPanel>
            <TabPanel value={value} index={7} >
                CTO
            </TabPanel>
            <TabPanel value={value} index={8} >
                Others
            </TabPanel>

        </Box>
    );
}
