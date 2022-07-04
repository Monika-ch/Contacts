import { Button, Col, FormGroup, Label } from "reactstrap";
import { ErrorMessage, Formik, Field, Form } from "formik";
import { validateCreateContact } from "../utils/ValidateCreateContact";

const CreatePage = (props) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  const { id, firstName, lastName, phone, email } = { ...props.person };
  const editingContact = props.editingContact;
  return (
    <Formik
      initialValues={{
        firstName: firstName,
        lastName: lastName,
        phoneNum: phone,
        email: email,
      }}
      onSubmit={handleSubmit}
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
            {(msg) => <p className='text-danger'>{msg}</p>}
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
          <Label htmlFor='phoneNum' md='2' aria-labelledby='Phone'>
            Phone
          </Label>
          <Col md='8'>
            <Field
              name='phoneNum'
              placeholder='Phone'
              className='form-control'
            />
          </Col>
          <ErrorMessage name='phoneNum'>
            {(msg) => <p className='text-danger'>{msg}</p>}
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
            {(msg) => <p className='text-danger'>{msg}</p>}
          </ErrorMessage>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 3 }}>
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
            >
              Cancel
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>

    // <Form>
    //   <FormGroup>
    //     <Label for='exampleEmail'>Email</Label>
    //     <Input
    //       type='email'
    //       name='email'
    //       id='exampleEmail'
    //       placeholder='with a placeholder'
    //     />
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for='examplePassword'>Password</Label>
    //     <Input
    //       type='password'
    //       name='password'
    //       id='examplePassword'
    //       placeholder='password placeholder'
    //     />
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for='exampleSelect'>Select</Label>
    //     <Input type='select' name='select' id='exampleSelect'>
    //       <option>1</option>
    //       <option>2</option>
    //       <option>3</option>
    //       <option>4</option>
    //       <option>5</option>
    //     </Input>
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for='exampleSelectMulti'>Select Multiple</Label>
    //     <Input
    //       type='select'
    //       name='selectMulti'
    //       id='exampleSelectMulti'
    //       multiple
    //     >
    //       <option>1</option>
    //       <option>2</option>
    //       <option>3</option>
    //       <option>4</option>
    //       <option>5</option>
    //     </Input>
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for='exampleText'>Text Area</Label>
    //     <Input type='textarea' name='text' id='exampleText' />
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for='exampleFile'>File</Label>
    //     <Input type='file' name='file' id='exampleFile' />
    //     <FormText color='muted'>
    //       This is some placeholder block-level help text for the above input.
    //       It's a bit lighter and easily wraps to a new line.
    //     </FormText>
    //   </FormGroup>
    //   <FormGroup tag='fieldset'>
    //     <legend>Radio Buttons</legend>
    //     <FormGroup check>
    //       <Label check>
    //         <Input type='radio' name='radio1' /> Option one is this and
    //         that—be sure to include why it's great
    //       </Label>
    //     </FormGroup>
    //     <FormGroup check>
    //       <Label check>
    //         <Input type='radio' name='radio1' /> Option two can be something
    //         else and selecting it will deselect option one
    //       </Label>
    //     </FormGroup>
    //     <FormGroup check disabled>
    //       <Label check>
    //         <Input type='radio' name='radio1' disabled /> Option three is
    //         disabled
    //       </Label>
    //     </FormGroup>
    //   </FormGroup>
    //   <FormGroup check>
    //     <Label check>
    //       <Input type='checkbox' /> Check me out
    //     </Label>
    //   </FormGroup>
    //   <Button>Submit</Button>
    // </Form>
  );
};

export default CreatePage;
