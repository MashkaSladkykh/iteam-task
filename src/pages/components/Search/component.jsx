import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { getApps } from '../../../store/search/actions';
import Sort from '../Sort/component';

const Search = ({query, onInputChange, data, onLoad}) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data)
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    e.target.value = '';
  }
 
  return (
    <>
       <form onSubmit={handleOnSubmit} >
        <FilledInput
          endAdornment={
          <InputAdornment position="end">
            <IconButton type='submit' className='search_submit'>
              <SearchIcon/>
            </IconButton>
          </InputAdornment>}
          aria-describedby="searching-app-field"
          inputProps={{
            'aria-label': 'searh',
          }}
          placeholder='Search'
          value={query}
          onChange={e => onInputChange(e.target.value)}
          onClick={handleOnClick}
          className='search_input'
        />
        <Sort/>
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    query: state.apps.query,
    data: state.apps.data
  }
}

const mapDispatchToProps = dispatch => ({
    onInputChange: (query) => dispatch(getApps(query)),
    onLoad: query => dispatch(getApps(query))
  })
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search);