import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SnoozeOutlinedIcon from '@material-ui/icons/SnoozeOutlined';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "rgb(38, 41, 61, 1)",
		display: 'flex',
		height: "100vh"
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		backgroundColor: "rgba(200, 200, 200, 0.2)"
	},
	tab: {
		color: "rgba(200, 200, 200, 0.5)"
	},
	tabDisabled: {
		backgroundColor: "rgba(200, 200, 200, 0.2)",
		fontSize: "1.5em"
	}
}));

export default function Menu() {
	const timeNow = "12:24:04 pm"
	const userId = localStorage.getItem('userId') != null;
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		(!userId)
			?(
			<div className={classes.root}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					indicatorColor="primary"		
					textColor="primary"
					value={value}
					onChange={handleChange}
					className={classes.tabs}
				>
					<Tab className={classes.tab} icon={<AssignmentOutlinedIcon/>} label="Tasks Schedule" {...a11yProps(0)} />
					<Tab className={classes.tab} icon={<RestaurantIcon/>} label="Nutrition" {...a11yProps(1)} />
					<Tab className={classes.tab} icon={<SnoozeOutlinedIcon/>} label="Sleep" {...a11yProps(2)} />
					<Tab className={classes.tab} icon={<EmojiPeopleIcon/>} label="Exercise" {...a11yProps(3)} />
					<Tab className={classes.tabDisabled} disabled="true" style={{bottom: 0, position: "absolute"}} label={timeNow} {...a11yProps(4)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<h1>CALENDAR HERE</h1>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<h1>NUTRITION HERE</h1>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<h1>SLEEP HERE</h1>
				</TabPanel>
				<TabPanel value={value} index={3}>
					<h1>EXERCISE HERE</h1>
				</TabPanel>
			</div>
			)
			:("")			
	);
}