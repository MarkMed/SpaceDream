import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		width: "100%",
		height: "300px",
		background: "blue",
		marginBottom: "10px",
		padding: "10px"
	}
}));

function Title(props) {
	const {children} = props;

	return (
	<Typography	>
		<h2>{children}</h2>
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
	<Paper elevation="5" className={classes.root}>
		<Title>
			{children}
		</Title>
	</Paper>
	);
}
export default NextSteps;