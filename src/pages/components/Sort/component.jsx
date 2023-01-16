import { useState} from 'react';
import { connect } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { setSortParams } from '../../../store/search/actions';


const Sort = ({data,setSortParams, sortParams}) => {
    return (
        <>
            <InputLabel id="demo-select-small">Sort</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={sortParams}
                label="Sort"
                onChange={e => setSortParams(e.target.value)}          
            >
            <MenuItem value={'price'} >Price</MenuItem>
            <MenuItem value={'released'} >Release date</MenuItem>
            </Select>
        </>
    );
  };

const mapStateToProps = (state) => ({
    data: state.apps.data,
    sortParams: state.apps.sortParams
  });

const mapDispatchToProps = dispatch => ({
    setSortParams: value => dispatch(setSortParams(value)),
  });

export default connect(mapStateToProps,mapDispatchToProps)(Sort);