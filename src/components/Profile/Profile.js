import MainScreen from "../../components/Profile/Profile"
import {Row,Col,Button,Form} from "react-bootstrap"

const Profile = () => {
    return (<MainScreen title="EDIT PROFILE">
        <div>
            <Row>
                    <Col md={6}> Form </Col>
                    <Col>style=
                    {{
                        display :"flex",
                        alignItems:"center",
                        justifyContent: "center",
                    }}
                        
                    </Col>
            </Row>
        </div>
    </MainScreen>
    );

}
export default Profile