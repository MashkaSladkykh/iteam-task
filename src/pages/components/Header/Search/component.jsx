import React from 'react';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';

import { getApps } from '../../../../store/search/actions';

const Search = ({query, onInputChange}) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <TextField 
        value={query}
        onChange={e => onInputChange(e.target.value)}
      />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    query: state.apps.query
  }
}
const mapDispatchToProps = dispatch => ({
    onInputChange: (query) => dispatch(getApps(query))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search);