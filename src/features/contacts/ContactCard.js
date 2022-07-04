import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import DeleteContactModal from "../../components/DeleteContact";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteContact } from "../../app/contactList.actions";
import { Redirect } from "react-router-dom";
const ContactCard = (props) => {
  const { id, firstName, lastName, phone, email } = { ...props.contact };
  const initial = firstName[0].toUpperCase();

  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);
  const dispatch = useDispatch();
  const newTo = {
    pathname: "/edit/" + id,
    param1: id,
  };
  return (
    <>
      <Card className='contactCard'>
        <CardBody className='pe-0'>
          <Row className='m-0 p-0'>
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
            <Col xs='3'>
              <ul className='list-unstyled d-flex no-wrap'>
                <li>
                  <a
                    className='text-primary cardBtn p-1 p-xl-2'
                    role='button'
                    onClick={toggle}
                    aria-label='See More'
                  >
                    <i
                      className='fa fa-angle-double-down'
                      aria-hidden='true'
                    ></i>
                  </a>
                </li>

                <li>
                  <Link to={newTo}>
                    <a
                      className='cardBtn p-1 p-xl-2'
                      role='button'
                      onClick={toggle}
                      aria-label='Edit Contact'
                    >
                      <span className='hide'>
                        <i className='fa fa-pencil' aria-hidden='true'></i>
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    className='cardBtn p-1 p-xl-2'
                    role='button'
                    onClick={toggleDeleteModal}
                    aria-label='Delete Contact'
                  >
                    <span className='hide'>
                      <i className='fa fa-trash-o hide' aria-hidden='true'></i>
                    </span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <DeleteContactModal
        isDeleteModalOpen={isDeleteModalOpen}
        toggleDeleteModal={toggleDeleteModal}
        onConfirmation={() => dispatch(DeleteContact({ id: id }))}
      />
    </>
  );
};

export default ContactCard;
