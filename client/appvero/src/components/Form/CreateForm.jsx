import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { validateForm } from "./validation";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./form.module.css";
import axios from "axios";
import { MdSave } from "react-icons/md";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const initialValues = {
    productKey: "",
    name: "",
    description: "",
    brand: "",
    quantity: 0,
    pricePerPack: 0,
    pricePerUnit: 0,
  };
  // esto es para el toast
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await axios({
      url: "/products/",
      method: "post",
      data: values,
    });
    setShow(!show);
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  return (
    <div className={styles.formContainer}>
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast
          onClose={() => setShow(!show)}
          show={show}
          delay={3000}
          autohide
          bg={"success"}
        >
          <Toast.Header>Producto cargado</Toast.Header>
        </Toast>
      </ToastContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validateForm}
      >
        <FormikForm>
          <Form.Group controlId="name">
            <Form.Label>Nombre:</Form.Label>
            <Field
              type="text"
              name="name"
              className="form-control"
              placeholder="Ej: Coca-Cola..."
            />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </Form.Group>

          <Form.Group controlId="productKey">
            <Form.Label>Código de Producto:</Form.Label>
            <Field
              type="text"
              name="productKey"
              className="form-control"
              placeholder="Código de barras..."
            />
            <ErrorMessage
              name="productKey"
              component="div"
              className="text-danger"
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Presentacion:</Form.Label>
            <Field
              type="text"
              name="description"
              className="form-control"
              placeholder="Ej: 2 litros"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-danger"
            />
          </Form.Group>

          <Form.Group controlId="brand">
            <Form.Label>Marca:</Form.Label>
            <Field
              type="text"
              name="brand"
              className="form-control"
              placeholder="Ej: Coca-cola (nombre y marca pueden ser Iguales)"
            />
            <ErrorMessage
              name="brand"
              component="div"
              className="text-danger"
            />
          </Form.Group>

          <Form.Group controlId="quantity">
            <Form.Label>Cantidad:</Form.Label>
            <Field
              type="text"
              name="quantity"
              className="form-control"
              placeholder="Cantidad de bultos"
            />
            <ErrorMessage
              name="quantity"
              component="div"
              className="text-danger"
            />
          </Form.Group>

          <Form.Group controlId="pricePerPack">
            <Form.Label>Precio por Paquete:</Form.Label>
            <Field
              type="text"
              name="pricePerPack"
              className="form-control"
              placeholder="Precio por bulto"
            />
            <ErrorMessage
              name="pricePerPack"
              component="div"
              className="text-danger"
            />
          </Form.Group>

          <Form.Group controlId="pricePerUnit">
            <Form.Label>Precio por Unidad:</Form.Label>
            <Field
              type="text"
              name="pricePerUnit"
              className="form-control"
              placeholder="Precio por unidad"
            />
            <ErrorMessage
              name="pricePerUnit"
              component="div"
              className="text-danger"
            />
          </Form.Group>

          <Button type="submit" className="mt-3">
            <MdSave className="m-2" />
            Guardar
          </Button>
        </FormikForm>
      </Formik>
    </div>
  );
}

export default CreateForm;
