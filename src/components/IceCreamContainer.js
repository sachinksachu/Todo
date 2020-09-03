import React from 'react'
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCream = {props.numIceCreamObject}</h2>
            <button onClick={props.buyIceCreamObject}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => { // get state from redux store as props
    return({
        numIceCreamObject : state.iceR.numIceCream
    });
}

const mapDispatchToProps = dispatch => { //gets dispatch as parameter
    return({
        buyIceCreamObject : () => dispatch(buyIceCream()) //return an object
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
// connect helps the component to connect to the redux store
