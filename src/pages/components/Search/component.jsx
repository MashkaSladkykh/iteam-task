import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { getApps } from '../../../store/search/actions';

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
       <form onSubmit={handleOnSubmit}>
        <TextField 
          placeholder='Search'
          value={query}
          onChange={e => onInputChange(e.target.value)}
          onClick={handleOnClick}
        />
        <IconButton type='submit'>
          <SearchIcon/>
        </IconButton>
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