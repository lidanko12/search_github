import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pag from '../Pagination/Pagination';
import List from '../List';
import InputField from '../InputField';
import { useSelector } from "react-redux";
import BadSearch from '../BadSearch';
import * as selectors from '../../redux/users/user-selector'



export default function Form() {
  const items = useSelector(selectors.getState);
    const { perPage } = useSelector(({ repositories }) => repositories.currentPage);
  return (
    <>
    <InputField/>
      {!items[1] ? <BadSearch/>:<List />}
      {items.length === perPage && <Pag />}
      <ToastContainer transition={Zoom} autoClose={3000} />
    </>
) 
};
