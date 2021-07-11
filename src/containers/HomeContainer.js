import Home from '../components/Home'
import {connect } from 'react-redux';
import {addToCard, removeToCart} from '../store/actions/actions'

const mapStateToProps = state => ({
    data: state.cartItem
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data => dispatch(addToCard(data)),
    removeToCartHandler:data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps) (Home);