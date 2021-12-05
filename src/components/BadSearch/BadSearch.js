import s from './BadSearch.module.css'
export default function BadSearch() {
    return (
        <div className={s.container}>
            <h3 className={s.error}>Please enter searching repository !
                <div className={s.back}></div></h3>
   </div> )
    
};
