import { Card, Button } from "react-bootstrap";

export default function Item(props) {

  const { name, description, image_url } = props;

  return (
    <li>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image_url} alt={name}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </li>
  );
}