import React from "react";
import { useQuery } from "@apollo/client";
import { Link, Redirect, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Auth from "../utils/auth";
import { QUERY_MY_VIDEOS, QUERY_SINGLE_USER } from "../utils/queries";
// Profile page for user to see only their videos
const Follows = () => {
    // Queries user who is logged in videos
    
    const { loading, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { id: Auth.getProfile().data._id }
    });
    
    const myFollows = data?.user.follows || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="roboto-font2 video-title">{Auth.getProfile().data.name}'s Follows</h1>
            {myFollows.map((video) => (
                <Container>
                    <Card className="text-center my-3">
                        <Card.Header as="h2" className="video-title">
                            {video}
                        </Card.Header>
                        <Card.Body className="video-body">
                            <Card.Title className="roboto-font">
                                <Link className="nav-item nav-link" to={`/followprofiles/${video}`}><i className="fas fa-play-circle"></i> Videos</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Container>
            ))}
        </div>
    );
};

export default Follows;