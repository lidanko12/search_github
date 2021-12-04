import { Link } from "react-router-dom";
import s from './ListItem.module.css'
import FavoriteCardButton from "../FavoriteCardButton";
import { useState } from "react";
import { Button } from "@mui/material";



export default function ListItem({data}) {
    const [click, setClick] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const handleClick = () => {
        setClick(!click)
        setIsToggle(!isToggle)
    }

    return (
        <li key={data.id} className={ s.gallery__list__elem} >
                <div className={s.img__thumb}>
                {click&&isToggle && <FavoriteCardButton/>}
                <img className={s.img} src={data.owner.avatar_url} alt='dfsdf' />
                </div>
            <p className={s.name}>repository name -- {data.name}</p>
            <p className={s.name}>repository rating --{data.stargazers_count}</p>
            <div className={s.cont}>
            <Link  className={s.button} to={`/search/${data.id}`}>View More</Link>
                <button className={s.button} onClick={handleClick} type='button'>{!isToggle ? "Add favorite": "Delete Favorite" }</button>
            </div>
        </li>)
    
};
