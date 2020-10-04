import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "300px",
		background: "transparent",
		marginBottom: "20px",
		padding: "10px"
	}
}));

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
	</Paper>
	);
}
export default NextSteps;