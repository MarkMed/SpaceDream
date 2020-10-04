import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		width: "100%",
		height: "800px",
		background: "red",
		marginBottom: "10px"
	}
}));

const Summarize = (props) => {
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
		<Paper elevation="5" className={classes.root}></Paper>
	);
}
export default Summarize;