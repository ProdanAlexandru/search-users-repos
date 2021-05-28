import React from 'react'
import {Button} from '@material-ui/core'

const BackButton = ({OnHandleBtn}) => {
    return (
        <div>
            <Button className="backBtn" variant="outlined" color="secondary" onClick={OnHandleBtn}>
                Back
            </Button>
        </div>
    )
}

export default BackButton
