import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Wrapper } from "../styles/Edit.styled";
import { Alert, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [is_sold, setIs_sold] = useState('')
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");



  useEffect(() => {
    axios.get("/api/store/products/" + id)
      .then(response => {
        setProduct(response.data.product);
      })
  }, [id]);

  const handleSubmit = (id, e) => {
    e.preventDefault();
    axios.post("/api/store/products" + id, {
      id: id
    })
    .then(response => {

      if (response.status === 200) {
        setResponse(response.data);
        setOpen(true);
      }
    })
  }

  return (
    <Wrapper>
        {open && (
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {response}
            </Alert>
          </Collapse>
        )}
      <div className="image_div">
        <img className="image" src={product.image_url} alt={product.name} />
      </div>
      <Form onSubmit={() => handleSubmit(product.id)}>
          <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={product.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridDesc">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product description"
              value={product.description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              value={product.quantity}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridSold">
            <Form.Label>Sold Out?</Form.Label>
            <Form.Control
              type="text"
              value={is_sold}
              onChange={(e) => setIs_sold(e.target.value)}
              placeholder="Is the product out of stock"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={product.amount}
              placeholder="Enter product price"
            />
          </Form.Group>
        <Button variant="primary" type="submit">
          Edit Product
        </Button>
      </Form>
    </Wrapper>
  );
}

export default Product;