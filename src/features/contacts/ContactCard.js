import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const ContactCard = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag='h5'>
          {`${props.contact.firstName} ${props.contact.lastName}`}
        </CardTitle>
        <CardSubtitle className='mb-2 text-muted' tag='h6'>
          {props.contact.phone}
        </CardSubtitle>
        <CardText>{props.contact.email}</CardText>
      </CardBody>
    </Card>
  );
};

export default ContactCard;
