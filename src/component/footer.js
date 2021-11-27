import { Component } from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

class Footer extends Component{

    render(){

        return <footer className="footer">
                <Container>
                    <div className="footer_box">
                        <Col>
                            <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                        </Col>
                        <Col>
                        <p>
                        <a href="#">Back to top</a>
                        </p>
                        </Col>
                        <Col>
                        </Col>
                    </div>
                </Container>
            </footer>
    }
}

export default Footer;