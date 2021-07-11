import React from 'react'

export const Header = (props) => {
    return (
        <div>
             Product Items : {props.data.length}   <br/>
        </div>
    )
}
