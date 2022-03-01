// import React, {useState, useEffect} from 'react';
// import Navbar from '../Components/Navbar';
// import Category from '../Components/Category';
// import Footer from '../Components/Footer';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProductDetails } from '../redux/actions/productAction';
// import { useParams } from 'react-router-dom';
// import ProductDetails from '../Components/ProductDetails'

// const ProductDetailsPage = () => {
//     const {id} = useParams();
//     const dispatch = useDispatch();
//     const { loading, error, product } = useSelector(state => state.productDetails);
//     const {name, images, price, brand, category} = product;
//     console.log(name);
//     useEffect(() => {
//         dispatch(getProductDetails(id));
//     }, [dispatch])
    
//     return (
//         <ProductDetails product={product} />
//       )
// }


// export default ProductDetailsPage