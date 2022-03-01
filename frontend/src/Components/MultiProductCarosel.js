import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, FavoriteBorder, ShoppingBasket, Star, Visibility } from '@material-ui/icons';
import { newArrivals } from './data.js';
import "./new.css";
import {Link} from "react-router-dom"

const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
      <div className='container pl-8'>
     <div className={className} onClick={onClick}>
        <ChevronLeft className="bg-primary text-white text-lg"/>
      </div>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className='container pr-8'>
        <div className={className} onClick={onClick}>
        <ChevronRight className="bg-primary text-white text-lg"/>
      </div>
      </div>
    );
  };
  


const MultiProductCarosel = (props) => {

  const { name, products } = props;

  // console.log(`products: ${products}`);
    
    var settings = {
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="container">
        <div className='flex items-center justify-between shadow px-2 py-2'>
            <h1 className="text-2xl text-gray-900 font-medium">{name}</h1>
            <button className='text-lg text-white bg-primary border border-primary rounded px-3 py-1 hover:bg-transparent hover:text-gray-900'>View All</button>
        </div>
        <div className='px-8 bg-gray-50 shadow'>
        <Slider {...settings}
        >
            {
                products && products.map((item, index) => (
                    <Card item={item} key={index} />
                ))
            }
        </Slider>
        </div>
        </div>
      );
}

const Card = (props) => {
    const {item} = props;
    const { _id, name, images, price, ratings } = item;
    return (
        <div className='my-2 mx-1 cursor-pointer relative border border-gray-200 group'>
            <div className="group-hover:brightness-90">
            {
              images && images.map((image, index) => (
                <img src={image.url} alt="item-img" className='bg-gray-100' />
              ))
            }
            </div>
            <div className="bg-gray-400 px-2 py-2 text-white absolute top-2 right-2 opacity-0 group-hover:opacity-100 rounded-full">
            <FavoriteBorder />
            </div>
            <button className='absolute left-0 top-40 flex items-center justify-center bg-indigo-800 text-white text-md border border-indigo rounded-b gap-3 px-2 py-2 w-full opacity-0 group-hover:opacity-100 '>
                <Link to={`/product/${_id}`} className='flex items-center justify-center gap-2'>
                <Visibility />
                <h1>Quick View</h1>
                </Link>
            </button>
            <div className='pl-4 pt-3'>
            <p className="text-lg text-gray-800 font-medium">{name}</p>
            <p className="text-2xl text-primary font-medium flex items-center"><span className='pr-2'><img className="w-4" src="/assets/tk.png" alt="BDT" /></span> { price }</p>
            <div className="flex items-center mb-2">
            <div className="text-yellow-500 gap-1">
              <Star style={{fontSize: "18px"}} />
              <Star style={{fontSize: "18px"}} />
              <Star style={{fontSize: "18px"}} />
              <Star style={{fontSize: "18px"}} />
              <Star style={{fontSize: "18px"}} />
            </div>
            <h1 className="text-sm text-gray-800 font-medium pl-4">{ratings}</h1>
            </div>
            </div>
            <button className='flex items-center justify-center bg-primary text-white text-md border border-primary hover:bg-transparent hover:text-gray-800 rounded gap-3 px-2 py-2 w-full '>
                <ShoppingBasket />
                <h1>Add To Bag</h1>
            </button>
        </div>
    )
}

export default MultiProductCarosel;