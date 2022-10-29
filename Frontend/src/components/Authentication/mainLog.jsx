import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Login from "./Login/Login";
import Signup from "./Singup/Signup";
import './mainLog.css'

function MainLog() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) navigate("/login");
    }, [history]);

    return (
        <Container className="Main" maxWidth={800} maxHeight={800} marginTop={50} centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text fontSize={30} fontFamily="Work sans">
                    Login Or Sign Up
                </Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs isFitted variant="soft-rounded">
                    <TabList mb="1em">
                        <Tab colorScheme="orange">Login</Tab>
                        <Tab colorScheme="orange">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

export default MainLog;