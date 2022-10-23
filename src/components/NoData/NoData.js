import React from 'react'

import { NoDataStyled } from './noDataStyling'

function NoData() {
    return (
        <NoDataStyled>
            <h1>Sorry :(</h1>
            <h2>
                we couldn't find any location with your selections in this area
            </h2>
        </NoDataStyled>
    )
}

export default NoData
