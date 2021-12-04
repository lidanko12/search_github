import { useSelector} from "react-redux";
import * as selectors from '../../redux/users/user-selector'
import s from './List.module.css'
import ListItem from "../ListItem";



// import { Button } from "@mui/material";
export default function List() {
    const list = useSelector(selectors.getState);


    return (
        <div className={s.container}>

            <ul className={s.gallery__list}>{list.map((listItem) => (<ListItem key={listItem.id} data={listItem}/>))}
                    
            </ul>
        </div>
    );}
 