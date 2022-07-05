import { Button, Col, FormGroup, Label } from "reactstrap";
import { ErrorMessage, Formik, Field, Form } from "formik";
import { validateCreateContact } from "../utils/ValidateCreateContact";
import { useDispatch, useSelector } from "react-redux";
import { CreateContact, EditContact } from "../app/contactList.actions";
import { v4 as uuid } from "uuid";
import { useParams, useNavigate } from "react-router-dom";

const CreateEditPage = (props) => {
  const { id } = { ...useParams() };
  const navigate = useNavigate();
  const isEditMode = id !== undefined;
  const contactList = useSelector((state) => state.contactList);
  console.log(contactList.filter((x) => x.id == id)[0]);
  const { firstName, lastName, email, phone } = isEditMode
    ? contactList.filter((x) => x.id.toString() === id)[0]
    : {};
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    let dispatchAction = isEditMode ? EditContact : CreateContact;
    dispatch(dispatchAction({ ...values, id: isEditMode ? id : uuid() }));
  };

  return (
    <Formik
      initialValues={{
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        navigate("/");
      }}
      validate={validateCreateContact}
    >
      <Form className='mt-3'>
        <FormGroup row>
          <Label htmlFor='firstName' md='2' aria-labelledby='First Name'>
            First Name
          </Label>
          <Col md='8'>
            <Field
              name='firstName'
              placeholder='First Name'
              className='form-control'
            />
          </Col>
          <ErrorMessage name='firstName'>
            {(msg) => <p className='text-danger offset-md-2'>{msg}</p>}
          </ErrorMessage>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor='lastName' md='2' aria-labelledby='Last Name'>
            Last Name
          </Label>
          <Col md='8'>
            <Field
              name='lastName'
              placeholder='Last Name'
              className='form-control'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor='phone' md='2' aria-labelledby='Phone'>
            Phone
          </Label>
          <Col md='8'>
            <Field name='phone' placeholder='Phone' className='form-control' />
          </Col>
          <ErrorMessage name='phone'>
            {(msg) => <p className='text-danger offset-md-2'>{msg}</p>}
          </ErrorMessage>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor='email' md='2' aria-labelledby='Email'>
            Email
          </Label>
          <Col md='8'>
            <Field
              name='email'
              placeholder='email@example.com'
              className='form-control'
            />
          </Col>
          <ErrorMessage name='email'>
            {(msg) => <p className='text-danger offset-md-2'>{msg}</p>}
          </ErrorMessage>
        </FormGroup>

        {/* BUTTONS */}
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button
              type='submit'
              color='primary'
              className='ms-0 me-3 btn btn-sm'
              aria-label='Submit'
            >
              Submit
            </Button>
            <Button
              type='submit'
              color='secondary'
              className='me-4 btn btn-sm'
              aria-label='Cancel'
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default CreateEditPage;
