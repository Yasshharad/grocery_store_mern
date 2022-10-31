import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading/loading";
import ErrorMessage from "../ErrorMessage/errorMessage";
import { login } from "../actions/userAction";
import "./farmerLogin.css";

function LoginScreen({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const farmerLogin = useSelector((state) => state.farmerLogin);
    const farmerInfo = farmerLogin;
    const error = farmerLogin;
    const loading = farmerLogin;

    useEffect(() => {
        if (farmerInfo) {
            history.push("/");
        }
    }, [history, farmerInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div title="LOGIN">
            <div className="loginContainer">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group Id="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group Id="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={submitHandler}>
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        New Customer ? <Link to="/register">Register Here</Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default LoginScreen;