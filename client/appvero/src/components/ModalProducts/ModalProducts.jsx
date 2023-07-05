import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

function ModalProducts(props) {
  const { productId, name, quantity, show, onClose } = props;
  const [initialQuantity, setInitialQuantity] = useState(quantity);

  const handleIncrement = () => {
    setInitialQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (initialQuantity > 0) {
      setInitialQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setInitialQuantity(newValue);
    }
  };

  const saveChanges = async (productId, initialQuantity) => {
    try {
      await axios({
        method: "put",
        url: `/products/${productId}`,
        data: {
          quantity: initialQuantity,
        },
      });
      onClose()
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={onClose} key={productId} centered size="sm">
      <Modal.Header closeButton >
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={{ initialQuantity }}>
          <FormikForm >
            <Form.Group controlId="initialQuantity" >
              <Form.Label className="d-flex justify-content-center">Stock:</Form.Label>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" onClick={handleDecrement}>
                  -
                </Button>
                <Field
                  type="number"
                  name="initialQuantity"
                  className="form-control mx-2 "
                  style={{width: '30%'}}
                  value={initialQuantity}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                <Button variant="secondary" onClick={handleIncrement}>
                  +
                </Button>
              </div>
              <ErrorMessage
                name="initialQuantity"
                component="div"
                className="text-danger"
              />
            </Form.Group>
          </FormikForm>
        </Formik>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="danger" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="info"
          onClick={() => saveChanges(productId, initialQuantity)}
          type="submit"
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ModalProducts.propTypes = {
  productId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalProducts;
