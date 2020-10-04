import React from 'react';
import { Container, Typography, Box, Tab, Tabs } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Summarize from './stats/Summarize';
import NextSteps from './stats/NextSteps';
import {nextStepsData} from "../assets/nextStepsData.js";

const GET_EVENTS = gql`
    query EventsByUser($userId: ID!) {
        events(userId: $userId) {
            id,
            type,
            startDate,
            endDate,
            location,
            title
        }
    }
`;

const {dataSleep,dataMeal, dataTasks, dataExercise} = nextStepsData;


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		height: "850px"
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		width: "300px",
		// transition: "0.6s ease",
		// "&:hover": {
		// 	backgroundColor:"rgba(10, 10, 10, 0.1)",
		// 	width: "300px"
		// },
	},
	tab: {
		color: "rgba(10, 10, 10, 0.8)",
		"&:focus": {
			outline: "none"
		},
	},
	tabPanel: {
		width: "100%",
		height: "100%",
		display: "block",
		overflow: "hidden auto"
	}
}));

	function TabPanel(props) {
		const { children, value, index, ...other } = props;
	
		return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
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

const Stats = (props) => {
    /*const { loading, error, data } = useQuery(GET_PLACES, { variables: { continentId } });

    if (loading) return (
        <Row className="justify-content-md-center">
            <br />
            <Spinner animation="border" />
            <br />
        </Row>
    )
    if (error) return (
        <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                {error.message}
            </p>
        </Alert>
    )*/
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
  
	function handleChange(event, newValue) {
	  setValue(newValue);
	}
  
	return (
	  <div className={classes.root}>
		<Tabs
		  orientation="vertical"
		  value={value}
		  onChange={handleChange}
		  aria-label="Vertical tabs example"
		  className={classes.tabs}
		  indicatorColor="primary"
		  textColor="primary"
		>
			<Tab className={classes.tab} label="Nutrition" {...a11yProps(0)}/>
			<Tab className={classes.tab} label="Tasks" {...a11yProps(1)} />
			<Tab className={classes.tab} label="Exercise" {...a11yProps(2)} />
			<Tab className={classes.tab} label="Sleep" {...a11yProps(3)} />
		</Tabs>
		<TabPanel className={classes.tabPanel} value={value} index={0}>
		  <NextSteps data={dataMeal}> next meals</NextSteps>
		  <Summarize />
		</TabPanel>
		<TabPanel className={classes.tabPanel} value={value} index={1}>
		  <NextSteps data={dataTasks}>next tasks to do</NextSteps>
		  <Summarize />
		</TabPanel>
		<TabPanel className={classes.tabPanel} value={value} index={2}>
		  <NextSteps data={dataExercise}>next Exercise sessions</NextSteps>
		  <Summarize />
		</TabPanel>
		<TabPanel className={classes.tabPanel} value={value} index={3}>
		  <NextSteps data={dataSleep}>Sleep Time!</NextSteps>
		  <Summarize />
		</TabPanel>
	  </div>
	);
}
export default Stats;