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
      <Card className='contactCard' tabIndex={0}>
        <CardBody className='p-0 pe-sm-0'>
          <Row className='m-0 p-0 pt-sm-2'>
            <Col xs='1' md='3' className='p-1'>
              <span
                className='initial rounded-circle border bg-light px-2 py-1 text-success'
                aria-hidden='true'
              >
                {initial}
              </span>
            </Col>
            <Col xs='7' sm='6'>
              <CardTitle tag='h6' aria-label={`${firstName} ${lastName}`}>
                {`${firstName} ${lastName}`}
              </CardTitle>
              <CardSubtitle className='text-muted phone' aria-label={phone}>
                {phone}
              </CardSubtitle>
              <Collapse isOpen={isOpen}>
                <CardText className='mt-2 email pb-sm-2' aria-label={email}>
                  {email}
                </CardText>
              </Collapse>
            </Col>
            <Col xs='3' className='p-0 p-sm-2'>
              <ul className='list-unstyled d-flex no-wrap'>
                <li tabIndex='0'>
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
