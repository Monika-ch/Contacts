import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Row,
} from "reactstrap";
import { useState } from "react";
import "./ContactCard.css";

const ContactCard = (props) => {
  const { firstName, lastName, phone, email } = { ...props.contact };
  const initial = firstName[0].toUpperCase();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card>
      <CardBody>
        <Row  className='m-0 p-0'>
          <Col md='3' className='p-1'>
            <span
              className='initial rounded-circle border bg-light px-2 py-1 text-success'
              aria-hidden='true'
            >
              {initial}
            </span>
          </Col>
          <Col>
            <CardTitle tag='h6' aria-label={`${firstName} ${lastName}`}>
              {`${firstName} ${lastName}`}
            </CardTitle>
            <CardSubtitle className='text-muted phone' aria-label={phone}>
              {phone}
            </CardSubtitle>
            <Collapse isOpen={isOpen}>
              <CardText className='mt-2 email' aria-label={email}>
                {email}
              </CardText>
            </Collapse>
          </Col>
          <Col xs='2'>
            <a className='text-primary' onClick={toggle}>
              <i class='fa fa-angle-double-down' aria-hidden='true'></i>
            </a>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ContactCard;
