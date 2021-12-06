import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Form from 'react-bootstrap/Form'
// import { useMutation, useQuery } from "@apollo/client";
// import { UPDATE_LEVEL } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Admin = ({ users }) => {
  
  let level = -1;
  let userId = "";
  if (Auth.getProfile()) {
    level = Auth.getProfile().data.level;
  };


if (!users.length) {
  return <h3 className="roboto-font2">No Users Yet!</h3>;
}

return (
  <div>
    {level === 3 ? (<div>{users &&
      users.map((user) => (
        <Card className="text-center my-3" key={user._id}>
          <Card.Header as="h2" className="video-title">{user.name}</Card.Header>
          <Card.Body className="video-body">
          <Card.Title className="roboto-font">User email: {user.email}</Card.Title>
            <Card.Title className="roboto-font">User Level: {user.level}</Card.Title>
            <Link className="nav-item nav-link" to={`/userCrud/${user._id}`}>Change User Level</Link>

            <div><Link className="nav-item nav-link" to={`/otherprofiles/${user.name}`} >Link to user's videos</Link></div>
          </Card.Body >
        </Card >
      ))}</div>
      ): (<p className="roboto-font card-body">Admin's Only</p>)}
   
  </div>
)
}

export default Admin;