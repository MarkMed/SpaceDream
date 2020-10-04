import React, { Children } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import { Typography, Box} from "@material-ui/core";
import NextStepCard from "../NextStepCard/NextStepCard"

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "20%",
		background: "transparent",
		marginBottom: "20px",
		padding: "10px"
	}
}));

const CardsList = styled(Box)({
	width: "100%",
	height: "20%",
	display: "flex"
})

function Title(props) {
	const {children} = props;
	const useStyles = makeStyles((theme) => ({
		title: {
			display: 'flex',
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			width: "100%",
			height: "auto"
		},
		header: {
			marginRight: "10px",
			color: "rgba(0, 0, 0, 0.7)",
			textTransform: "capitalize",
		},
		line: {
			borderTop: "2px solid rgba(0, 0, 0, 0.4)",
			width: "70%",
			height: "1px",
			flexGrow: 1,
		}
	}));
	const classes = useStyles();

	return (
	<Typography className={classes.title}
	component="h2">
		<h2 className={classes.header}>{children}</h2>
		<span className={classes.line}></span>
	</Typography>
	);
}
const data = [
	{
		type: "meal",
		user: "markmed",
		userName: "Marcos Medina",
		timeStart: "09:00am",
		timeEnd: "10:00am",
		title: "Breakfast w/ Coffe!",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias placeat quaerat vero dolore labore reiciendis dignissimos eligendi nobis aperiam. Fugit consectetur cum natus porro rem ab illo odio harum sint?"
	},
	{
		type: "meal",
		user: "markmed",
		userName: "Marcos Medina",
		timeStart: "03:00pm",
		timeEnd: "04:00pm",
		title: "Have lunch (Fresh Corn!)",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias placeat quaerat vero dolore labore reiciendis dignissimos eligendi nobis aperiam. Fugit consectetur cum natus porro rem ab illo odio harum sint?"
	},
	{
		type: "meal",
		user: "markmed",
		userName: "Marcos Medina",
		timeStart: "08:00pm",
		timeEnd: "09:00pm",
		title: "Dinner (Steak!)",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias placeat quaerat vero dolore labore reiciendis dignissimos eligendi nobis aperiam. Fugit consectetur cum natus porro rem ab illo odio harum sint?"
	},
	{
		type: "meal",
		user: "markmed",
		userName: "Marcos Medina",
		timeStart: "08:00pm",
		timeEnd: "09:00pm",
		title: "Dinner (Steak!)",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias placeat quaerat vero dolore labore reiciendis dignissimos eligendi nobis aperiam. Fugit consectetur cum natus porro rem ab illo odio harum sint?"
	},
	{
		type: "meal",
		user: "markmed",
		userName: "Marcos Medina",
		timeStart: "08:00pm",
		timeEnd: "09:00pm",
		title: "Dinner (Steak!)",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias placeat quaerat vero dolore labore reiciendis dignissimos eligendi nobis aperiam. Fugit consectetur cum natus porro rem ab illo odio harum sint?"
	},
	{
		type: "meal",
		user: "markmed",
		userName: "Marcos Medina",
		timeStart: "08:00pm",
		timeEnd: "09:00pm",
		title: "Dinner (Steak!)",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias placeat quaerat vero dolore labore reiciendis dignissimos eligendi nobis aperiam. Fugit consectetur cum natus porro rem ab illo odio harum sint?"
	}
  ]

const NextSteps = (props) => {
	const {children} = props
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
	return (
	<Paper elevation="0" className={classes.root}>
		<Title>
			{children}
		</Title>
		<CardsList>
			{data.map(dataInstance => (<NextStepCard data={dataInstance}></NextStepCard>))}
		</CardsList>
		
	</Paper>
	);
}
export default NextSteps;