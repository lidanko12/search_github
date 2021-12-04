import Button from '@mui/material/Button';
import s from './InputField.module.css';
import React, { useEffect } from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/users/users-action'
import { useSelector} from "react-redux";
// import * as selectors from '../../redux/users/user-selector'

export default function InputField() {
const dispatch = useDispatch();

const { totalCount, currentPage, perPage,repo } = useSelector(({ repositories }) => repositories.currentPage);
const onChangeHandler = e => {
  dispatch(actions.setCurrentPage({ perPage, totalCount, currentPage, repo: e.target.value }))
  
  };
  useEffect(() => {
  if (!repo)
    return
    getData()
  }, [currentPage])

  const getData = async () => {
    const profile = await fetch(`https://api.github.com/search/repositories?q=${repo}&per_page=${perPage}&page=${currentPage}`);
    const profileJson = await profile.json();
    if (!repo) return toast.error('Please input repositories');
    if (!repo.trim()) return toast.error('Please input repositories');
    if (profileJson.items.length === 0) return toast.warning('Please input repositories');
    if (profileJson) {
      dispatch(actions.fetchRepositoriesSuccess(profileJson))
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    getData();
    dispatch(actions.setCurrentPage())
  }
    return (
        <>
            <div className={s.header__search }>
                <form className={s.form} onSubmit={(e)=>submitHandler(e)}>
            <label className={s.label}>
                Name
                <input
                    type="text"
                    autoComplete='off'       
                    placeholder="Input GitHub repositories"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={onChangeHandler}
                    value={repo}
                    className={s.search__field} />
                </label>
                <Button  type="submit">Search</Button>
            </form>
            </div>
        
        </>
    )
};
