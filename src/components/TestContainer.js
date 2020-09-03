import React from 'react'

const TestContainer = props => { //In Class components use : this.props 
    return(
        <div>
        <h1>Hello Props {props.name}</h1>
        <i>{props.children }</i>
        </div>
    )
}

export default TestContainer //props.children to acess inner tag passed as props