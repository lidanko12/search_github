import s from './BadSearch.module.css'
export default function BadSearch() {
    return (
        <div className={s.container}>
            <h3 className={s.error}>Nothing to display. Use search above to find some repos
                <div className={s.back}></div></h3>
   </div> )
    
};
