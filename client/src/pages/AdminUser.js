import React from "react";
import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QUERY_USERS } from "../utils/queries";
import Admin from "../components/Admin";


const AdminUser = () => {

    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
   
    return (
        <Container>
          <Row>
            <Col>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <Admin users={users} title="HEADER TEXT" />
              )}
            </Col>
          </Row>
        </Container>
      );
}

export default AdminUser;