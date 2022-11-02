import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../FarmerAuthentication/actions/userAction";
import Loading from "../../FarmerAuthentication/Loading/loading";
import ErrorMessage from "../../FarmerAuthentication/ErrorMessage/errorMessage";
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pic, setPic] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [picMessage, setPicMessage] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const farmerLogin = useSelector((state) => state.farmerLogin);
    const farmerInfo = farmerLogin;

    const farmerUpdate = useSelector((state) => state.farmerUpdate);
    const loading = farmerUpdate;
    const error = farmerUpdate;
    const success = farmerUpdate;

    useEffect(() => {
        if (!farmerInfo) {
            navigate("/");
        } else {
            setName(farmerInfo.name);
            setEmail(farmerInfo.email);
            setPic(farmerInfo.pic);
        }
    }, [navigate, farmerInfo]);

    const postDetails = (pics) => {
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "agro-grocery");
            data.append("cloud_name", "db0txesgq");
            fetch("https://api.cloudinary.com/v1_1/db0txesgq/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    console.log(pic);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            return setPicMessage("Please Select an Image");
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(updateProfile({ name, email, password, pic }));
    };

    return (
        <div title="EDIT PROFILE">
            <div>
                <Row className="profileContainer">
                    <Col md={6}>
                        <Form onSubmit={submitHandler}>
                            {loading && <Loading />}
                            {success && (
                                <ErrorMessage variant="success">
                                    Updated Successfully
                                </ErrorMessage>
                            )}
                            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                            <Form.Group Id="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group Id="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group Id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group Id="confirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>{" "}
                            {picMessage && (
                                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
                            )}
                            <Form.Group Id="pic">
                                <Form.Label>Change Profile Picture</Form.Label>
                                <Form.Control
                                    onChange={(e) => postDetails(e.target.files[0])}
                                    id="custom-file"
                                    type="file"
                                    label="Upload Profile Picture"
                                    custom
                                />
                            </Form.Group>
                            <Button type="submit" varient="primary" onClick={submitHandler}>
                                Update
                            </Button>
                        </Form>
                    </Col>
                    <Col
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img src={pic} alt={name} className="profilePic" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ProfileScreen;