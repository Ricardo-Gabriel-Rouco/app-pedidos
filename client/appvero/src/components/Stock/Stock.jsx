import { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdEditSquare, MdDelete, MdAddCircle } from "react-icons/md";

function Stock() {
  const [products, setProducts] = useState();
  const [deletedProductId, setDeletedProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get("/products/");
      setProducts(result.data);
    };
    fetchProducts();
  }, [deletedProductId]); // Agrega deletedProductId como dependencia para que se actualice la lista de productos después de eliminar uno

  const deleteProduct = async (productId) => {
    await axios.delete(`/products/${productId}`);
    setDeletedProductId(productId); // Actualiza el deletedProductId para que el efecto se ejecute y se actualice la lista de productos
  };

  const handleDelete = (productId) => {
    deleteProduct(productId);
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
          {products?.map((product) => (
            <tr key={product.id}>
              <td className="p-2">{product.productKey}</td>
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.description}</td>
              <td className="p-2">{product.brand}</td>
              <td className="p-2">{product.quantity}</td>
              <td className="p-2">{product.pricePerPack}</td>
              <td className="p-2">{product.pricePerUnit}</td>
              <td className="p-2">
                <Button variant="info" size="sm">
                  <MdEditSquare />
                </Button>
              </td>
              <td className="p-2">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(product.id)}
                  disabled={deletedProductId === product.id} // Desactiva el botón si el producto se ha eliminado recientemente
                >
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Stack>
  );
}

export default Stock;
