import React from 'react'
import { buyCake } from '../redux';
import { numCake } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes = {props.numCakesObject}</h2>
            <h2>Cakes bought= {props.buyCakesObject}</h2>
            <button onClick={props.buyCakeObject}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => { // get state from redux store as props
    return({
        numCakesObject : state.cakeR.numCakes, //cakeR - cake reducer in store.js
        buyCakesObject : state.cakeR.cake_buy
    });
}

const mapDispatchToProps = dispatch => { //gets dispatch as parameter
    return({
        buyCakeObject : () => dispatch(buyCake()),//return an object
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
// connect helps the component to connect to the redux store
