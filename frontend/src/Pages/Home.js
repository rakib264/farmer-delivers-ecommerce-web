import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar';
import TopBar from '../Components/TopBar';
import Category from '../Components/Category';
import Carosel from '../Components/Carosel';
import MultiProductCarosel from '../Components/MultiProductCarosel';
import Banner from '../Components/Banner';
import ProductGrid from "../Components/ProductGrid";
import Footer from '../Components/Footer';
import MetaTitle from '../Components/MetaTitle';
import { getProducts } from '../redux/actions/productAction';
import {useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const { loading, products, count, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <div>
        <MetaTitle title="Home" />
        <TopBar />
        <Navbar />
        <Category />
        <Carosel />
        <MultiProductCarosel name="New Arrivals" products={products}  />
        <Banner />
        <MultiProductCarosel name="Recomended For You" products={products}  />
        <ProductGrid />
        <Footer />
    </div>
  )
}

export default Home;