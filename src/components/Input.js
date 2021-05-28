import React from 'react'
import { TextField, Button } from '@material-ui/core'

const Input = ({HandleChange, HandleSubmit}) => {
    return (
        <div className="searchArea">
            <form className="formArea" onSubmit={HandleSubmit}>
                <TextField className="searchInput" id="outlined-basic" label="Search..." variant="outlined" onChange={HandleChange} />
                <Button className="searchBtn" type="submit" variant="contained" color="primary">Search</Button> 
            </form>
        </div>
    )
}

export default Input
