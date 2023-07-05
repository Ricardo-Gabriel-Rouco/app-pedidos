import { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdEditSquare, MdDelete, MdAddCircle } from "react-icons/md";
import ModalProducts from "../ModalProducts/ModalProducts";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function Stock() {
  const [products, setProducts] = useState([]);
  const [deletedProductId, setDeletedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get("/products/");
      setProducts(result.data);
    };
    fetchProducts();
  }, [deletedProductId]);

  const deleteProduct = async (productId) => {
    await axios.delete(`/products/${productId}`);
    setDeletedProductId(productId);
  };

  const handleDelete = (productId) => {
    deleteProduct(productId);
  };

  const openModal = (productId, productName, productQuantity) => {
    const product = {
      id: productId,
      name: productName,
      quantity: productQuantity,
    };
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <Stack>
      <Stack direction="horizontal" gap={2}>
        <h1 className="mx-auto">Stock</h1>
        <Link to={"/product/create"}>
          <Button className="mx-auto">
            Agregar producto
            <MdAddCircle />
          </Button>
        </Link>
      </Stack>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="p-2">Codigo</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Presentacion</th>
            <th className="p-2">Marca</th>
            <th className="p-2">Cantidad</th>
            <th className="p-2">Precio x paquete</th>
            <th className="p-2">Precio x unidad</th>
            <th className="p-2">Editar</th>
            <th className="p-2">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-2">{product.productKey}</td>
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.description}</td>
              <td className="p-2">{product.brand}</td>
              <td className="p-2">
                <Stack
                  direction="horizontal"
                  className="justify-content-around"
                >
                  {product.quantity}
                  <OverlayTrigger
                    key={product.id}
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">Modificar Stock</Tooltip>
                    }
                  >
                    <Button
                      onClick={() =>
                        openModal(product.id, product.name, product.quantity)
                      }
                    >
                      <MdEditSquare />
                    </Button>
                  </OverlayTrigger>
                </Stack>
              </td>
              <td className="p-2">{product.pricePerPack}</td>
              <td className="p-2">{product.pricePerUnit}</td>
              <td className="p-2">
              <OverlayTrigger
                  key={product.id}
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Editar Producto</Tooltip>}
                >
                <Button variant="info" size="sm">
                  <MdEditSquare />
                </Button>
                </OverlayTrigger>
              </td>
              <td className="p-2">
                <OverlayTrigger
                  key={product.id}
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Eliminar Producto</Tooltip>}
                >
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                    disabled={deletedProductId === product.id}
                  >
                    <MdDelete />
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedProduct && (
        <ModalProducts
          productId={selectedProduct.id}
          name={selectedProduct.name}
          quantity={selectedProduct.quantity}
          show={showModal}
          onClose={closeModal}
        />
      )}
    </Stack>
  );
}

export default Stock;
