import MyNav from "../MyNav";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap";
import user from "../../img/user.png";

function Home() {
  //   let history = useHistory();

  return (
    <>
      <MyNav />

      <Container>
        <Row className="pt-3">
          <Col lg={3} md={3} sm={12} xs={12}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={user} />
              <Card.Body>
                <Card.Title>UserName , name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  CNIC - 42301 7270154 9
                </Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>DOB - 19 July 1999</ListGroup.Item>
                  <ListGroup.Item>Members - 6</ListGroup.Item>
                  <ListGroup.Item>Income - 70,000</ListGroup.Item>
                  <ListGroup.Item>Saylani Gulshan Campus</ListGroup.Item>
                </ListGroup>

                {/* <Button
                  variant="primary"
                  className="mt-2"
                  style={{ width: "100%" }}
                >
                  Update
                </Button> */}

                <ButtonGroup className="my-2" style={{ width: "100%" }}>
                  <Button>Accept</Button>
                  <Button>Reject</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={user} />
              <Card.Body>
                <Card.Title>UserName , name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  CNIC - 42301 7270154 9
                </Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>DOB - 19 July 1999</ListGroup.Item>
                  <ListGroup.Item>Members - 6</ListGroup.Item>
                  <ListGroup.Item>Income - 70,000</ListGroup.Item>
                  <ListGroup.Item>Saylani Gulshan Campus</ListGroup.Item>
                </ListGroup>

                {/* <Button
                  variant="primary"
                  className="mt-2"
                  style={{ width: "100%" }}
                >
                  Update
                </Button> */}

                <ButtonGroup className="my-2" style={{ width: "100%" }}>
                  <Button>Accept</Button>
                  <Button>Reject</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={3} sm={12} xs={12}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={user} />
              <Card.Body>
                <Card.Title>UserName , name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  CNIC - 42301 7270154 9
                </Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>DOB - 19 July 1999</ListGroup.Item>
                  <ListGroup.Item>Members - 6</ListGroup.Item>
                  <ListGroup.Item>Income - 70,000</ListGroup.Item>
                  <ListGroup.Item>Saylani Gulshan Campus</ListGroup.Item>
                </ListGroup>

                {/* <Button
                  variant="primary"
                  className="mt-2"
                  style={{ width: "100%" }}
                >
                  Update
                </Button> */}

                <ButtonGroup className="my-2" style={{ width: "100%" }}>
                  <Button>Accept</Button>
                  <Button>Reject</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={3} sm={12} xs={12}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={user} />
              <Card.Body>
                <Card.Title>UserName , name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  CNIC - 42301 7270154 9
                </Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>DOB - 19 July 1999</ListGroup.Item>
                  <ListGroup.Item>Members - 6</ListGroup.Item>
                  <ListGroup.Item>Income - 70,000</ListGroup.Item>
                  <ListGroup.Item>Saylani Gulshan Campus</ListGroup.Item>
                </ListGroup>

                {/* <Button
                  variant="primary"
                  className="mt-2"
                  style={{ width: "100%" }}
                >
                  Update
                </Button> */}

                <ButtonGroup className="my-2" style={{ width: "100%" }}>
                  <Button>Accept</Button>
                  <Button>Reject</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
