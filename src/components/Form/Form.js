import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Form.module.css'
import Pag from '../Pagination/Pagination';
import List from '../List';
import InputField from '../InputField';



export default function Form() {
  
  return (
    <>
    <InputField/>
    <List />
    <Pag/>
    <ToastContainer transition={Zoom} autoClose={3000} />
    </>
) 
};
