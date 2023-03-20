import axios from "axios";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Wrapper from "../styles/Add.styled";
import { MyArrow } from "../styles/Button.styled";
import { useNavigate } from "react-router";

const Add = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [seller_id, setSeller_id] = useState(1);
  const [category_id, setCategory_id] = useState(null);
  const [location, setlocation] = useState(null);
  const [is_sold, setIs_sold] = useState(false);
  const [is_paid, setIs_paid] = useState(true);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("api/store/new", {
        name: name,
        quantity: quantity,
        description: description,
        image_url: image_url,
        seller_id: seller_id,
        category_id: category_id,
        location: location,
        is_sold: is_sold,
        is_paid: is_paid,
        amount: amount,
      })
      .then((response) => {
        // const newProduct = response.data;
      });
  };

  const handleClick = () => navigate(-1);

  return (
    <Wrapper>
      <MyArrow onClick={handleClick} />
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDesc">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridImage">
          <Form.Label>Image address</Form.Label>
          <Form.Control
            placeholder="https://...."
            type="text"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Group>
        <fieldset disabled>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridSeller">
              <Form.Label>Seller Id</Form.Label>
              <Form.Control value={seller_id} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control value={category_id} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control value={category_id} />
            </Form.Group>
          </Row>
        </fieldset>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSold">
            <Form.Label>Sold Out?</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>True</option>
              <option>False</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSale">
            <Form.Label>For sale?</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>True</option>
              <option>False</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter product price"
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Add;
