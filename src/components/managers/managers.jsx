import {
  Container,
  Nav,
  Modal,
  Button,
  Form,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import MyNav from "../MyNav";
import React, { useState, useContext, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { auth } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import ManagersRow from "./ManagersRow";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .max(10, "No more then 10")
    .required("Password is required"),
});

export default function Managers() {
  const [managers, setManagers] = useState(null);

  console.log("yeh rahay", managers);

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values: ", values);

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          writeUserData(values.email, values.password);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    },
  });

  function writeUserData(email, password) {
    const db = getDatabase();

    const ListRef = ref(db, "users");
    const newRef = push(ListRef);

    set(newRef, {
      // ...
      email: email,
      password: password,
    });
  }

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "users/");

    let arr = [];

    onValue(
      dbRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();

          arr.unshift(childData);
          console.log(childData);
        });

        setManagers([...arr]);
      },

      {
        onlyOnce: true,
      }
    );
  }, []);

  return (
    <>
      <MyNav />
      <Container>
        <h3 className="mt-5">Managers</h3>
        <Nav className="justify-content-end bg-dark mt-3" activeKey="/home">
          <Nav.Item className="py-3">
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="Email"
                    id="email"
                    variant="outlined"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Col>

                <Col>
                  <Form.Control
                    placeholder="Password"
                    id="password"
                    variant="outlined"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.email && Boolean(formik.errors.password)
                    }
                    helperText={formik.touched.email && formik.errors.password}
                  />
                </Col>

                <Col>
                  <Button variant="outline-light" type="submit">
                    Add Manager
                  </Button>
                </Col>
              </Row>
            </Form>
          </Nav.Item>
        </Nav>
      </Container>

      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>{managers && <ManagersRow managers={managers} />}</tbody>
        </Table>
      </Container>
    </>
  );
}

// export default managers;
