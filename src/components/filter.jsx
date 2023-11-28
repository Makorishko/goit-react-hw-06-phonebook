import { useDispatch } from 'react-redux';
import { changeFilterParam } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(changeFilterParam(evt.target.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={changeFilter} type="search" name="text" />
    </>
  );
};
