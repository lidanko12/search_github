import { useDispatch } from 'react-redux';
import * as actions from '../../redux/users/users-action'
import { useSelector} from "react-redux";
import{Link as NavLink} from 'react-router-dom'
import {
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";


export default function Pag () {

  const dispatch = useDispatch();
  const { totalCount, currentPage, perPage,repo } = useSelector(({ repositories }) => repositories.currentPage);
  return (
    <>
      <Stack spacing={2}>
          <Pagination
          count={Math.ceil(totalCount/perPage)}
          page={currentPage}
          onChange={(_, num) => dispatch(actions.setCurrentPage({perPage,totalCount,currentPage:num,repo}))}
          showFirstButton
          showLastButton
          sx={{ marginY: 3, marginX: "auto" }}
          renderItem={(item) => (
            <PaginationItem
            component={NavLink}
            to={`/search/?page=${item.page}`}
            {...item}
            />
            )}
            />
            
          </Stack>
            </>
) 
};