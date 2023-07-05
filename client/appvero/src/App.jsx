// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Sales from "./components/Sales/Sales";
import Stock from "./components/Stock/Stock";
import Stack from "react-bootstrap/Stack";
import CreateForm from './components/Form/CreateForm';
import axios from 'axios';
import Home from './components/Home/Home';

function App() {
  axios.defaults.baseURL = 'https://app-pedidos-production-808b.up.railway.app/';
  return (
    <>
      <Stack direction="horizontal" gap={3} className='col-sm-12'>
        <Link to={'/'}>
          <p className='p-2 mx-auto'>Inicio</p>
        </Link>
        <Link to={"/stock"}>
          <p className='p-2 mx-auto'>Stock</p>
        </Link>
        <Link to={"/orders"}>
          <p className='p-2 mx-auto'>Pedidos</p>
        </Link>
        <Link to={"/sales"}>
          <p className='p-2 mx-auto'>Ventas</p>
        </Link>
      </Stack>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/orders" element={<Orders />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/stock" element={<Stock />} />
        <Route path='/product/create' element={<CreateForm />}/>
      </Routes>
    </>
  );
}

export default App;
