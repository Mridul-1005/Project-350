import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import{ToastConatiner} from 'react-toastify'

//  fetch('/api/v1/test').then((res)=> res.json()).then((data)=>console.log(data));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
       <ToastContainer position='top-center'/>
  </StrictMode>
);
