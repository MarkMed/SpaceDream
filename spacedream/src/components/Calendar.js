import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

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

const Calendar = ({ userId }) => {
    const { loading, error, data } = useQuery(GET_EVENTS, { variables: { userId } });

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
    )
    return (
        <div>
            <Container maxWidth="md">
                <br />
                CALENDAR
            </Container>
        </div>
    );
}

export default Calendar;