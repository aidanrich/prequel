import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useMutation, useQuery } from "@apollo/client";


const Admin = ({users}) => {

      
    if (!users.length) {
        return <h3 className="roboto-font2">No Users Yet!</h3>;
      }

      return (
          <div>
              {users && 
              users.map((user) =>(
                <Card className="text-center my-3" key={user._id}>
                <Card.Header as="h2" className="video-title">{user.name}</Card.Header>
                <Card.Body className="video-body">
                  <Card.Title className="roboto-font">User Level:{user.level}</Card.Title>
                  <Link to={`/otherprofiles/${user.name}`}>Link to user's videos</Link>
                </Card.Body >
              </Card >
              ))}
          </div>
      )
}

export default Admin;