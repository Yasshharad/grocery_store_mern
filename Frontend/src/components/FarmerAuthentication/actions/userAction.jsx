import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        // const config = {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // };

        axios.post(
            "http://localhost:4000/api/farmers/login",
            { email, password },
            // config
        ).then((res) => { console.log(res) });

        // loginFarmer = () => {
        //     axios
        //         .post("http://localhost:4000/api/farmers", { email, password },)
        //         .then((res) => {
        //             self.setState({
        //                 employees: res.data,
        //             });
        //         });
        // };


        dispatch({ type: USER_LOGIN_SUCCESS, payload: res });

        localStorage.setItem("farmerInfo", JSON.stringify(res));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.res.message
                    ? error.response.res.message
                    : error.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem("farmerInfo");
    dispatch({ type: USER_LOGOUT });
};

export const register = (name, email, password, pic) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        // const config = {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // };

        axios.post(
            "http://localhost:4000/api/farmers",
            { name, pic, email, password },
            // config
        ).then((res) => { console.log(res) });

        dispatch({ type: USER_REGISTER_SUCCESS, payload: res });

        dispatch({ type: USER_LOGIN_SUCCESS, payload: res });

        localStorage.setItem("farmerInfo", JSON.stringify(res));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.res.message
                    ? error.response.res.message
                    : error.message,
        });
    }
};

export const updateProfile = (farmer) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST });

        const {
            farmerLogin: { farmerInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${farmerInfo.token}`,
            },
        };

        axios.post("http://localhost:4000/api/farmers/profile", farmer, config).then((res) => { console.log(res) });

        dispatch({ type: USER_UPDATE_SUCCESS, payload: res });

        dispatch({ type: USER_LOGIN_SUCCESS, payload: res });

        localStorage.setItem("farmerInfo", JSON.stringify(res));
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.res.message
                    ? error.response.res.message
                    : error.message,
        });
    }
};

export const updateProfileUser = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        axios.post("http://localhost:4000/api/users/profile", user,
            config
        ).then((res) => { console.log(res) });

        dispatch({ type: USER_UPDATE_SUCCESS, payload: res });

        dispatch({ type: USER_LOGIN_SUCCESS, payload: res });

        localStorage.setItem("userInfo", JSON.stringify(res));
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.res.message
                    ? error.response.res.message
                    : error.message,
        });
    }
};