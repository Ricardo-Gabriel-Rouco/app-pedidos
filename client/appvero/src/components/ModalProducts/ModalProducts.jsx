import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

// show puede ser solo un booleano y siempre es true cuando viene por prop
function ModalProducts(props) {
  const { productId, name, quantity, show, onClose } = props;

  // useEffect(() => {
  //   setShowModal(show)
  // }, [show])
  

  return (
      <Modal show={show} onHide={onClose} key={productId}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{quantity}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Close
          </Button>
          <Button variant="info">
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
