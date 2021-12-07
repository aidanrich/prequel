import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_LEVEL } from "../utils/mutations";

const LevelChanger = () => {
    const { userId } = useParams()
    const [level, setLevel] = useState("")
    const [updateLevel, { error }] = useMutation(UPDATE_LEVEL);


    const levelChange = async () => {
        let levelUp;
        if (level === "3") {
            levelUp = 3
        } else if (level === "1") {
            levelUp = 1
        } else if (level === "2") {
            levelUp = 2
        } else levelUp = 0


        try {
            await updateLevel({
                variables: {
                    userId: userId,
                    level: levelUp,
                }
            })

        } catch (err) {
            console.error(err); // If there is an error its logged in the console
        }
    }
    

    const levelClick = (event) => {
        event.preventDefault();
        levelChange()
        window.location.assign('/admin');
    }


    return (
        <div>
            <Container>
                <Card className="text-center my-3">
                    <Card.Header as="h2" className="video-title">User Update</Card.Header>
                    <Card.Body className="video-body">
                        <Form>
                            <div>
                                <select onChange={(event) => { setLevel(event.target.value) }} name="level" id="level-select">
                                    <option value="0">Viewer</option>
                                    <option value="1">Content Creator</option>
                                    <option value="2">Industry Scout</option>
                                    <option value="3">Admin</option>
                                </select>
                            </div>
                            <button className='button6' type="submit" onClick={levelClick}>
                                Submit
                            </button></Form>
                    </Card.Body >
                </Card >
            </Container >
        </div>
    )
}

export default LevelChanger;