import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import Category from '../Components/Category';
import Footer from '../Components/Footer';
import { Home, ChevronLeft, ChevronRight, Star, ShoppingBasket,
   FavoriteBorder, Facebook,Instagram, YouTube, PermIdentity,
   HeadsetMic
  } from '@material-ui/icons';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Fade } from '@material-ui/core';
import { withThemeCreator } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/actions/productAction';
import { useParams } from 'react-router-dom';

const arrayImg = [
  "/assets/products/new-arrivals/tomato.png",
  "/assets/products/new-arrivals/cauwliflower.png",
  "/assets/products/new-arrivals/capsicum.png",
  "/assets/products/new-arrivals/gulsha.png",
  "/assets/products/new-arrivals/mutton.png",
  "/assets/products/new-arrivals/shoale.png",
  "/assets/products/new-arrivals/tel.png",
  "/assets/products/new-arrivals/lettuce.png",
]

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className='container pl-4'>
   <div className={className} onClick={onClick}>
      <ChevronLeft className="bg-primary text-white text-lg"/>
    </div>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className='container pr-4'>
      <div className={className} onClick={onClick}>
      <ChevronRight className="bg-primary text-white text-lg"/>
    </div>
    </div>
  );
};

const ProductPage = () => {

  const {id} = useParams();
    const dispatch = useDispatch();
    const { loading, error, product } = useSelector(state => state.productDetails);

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch]);
    


  return (
    <div>
        <Navbar />
        <Category />
        <BreadCum product={product}/>
        <ProductDetails product={product} />
        <Footer />
    </div>
  )
}

const ProductDetails = (props) => {
  const { product } = props;
  // const { name, price, prevPrice, description, images, ratings , brand, category, stock } = product;
  const [quantity, setQuantity] = useState(0);
  const [click, setClick] = useState(true);
  const showClick = () => setClick(!click);

  return (
    <div className='container pt-2 pb-6'>
      { product ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className='col-span-1'>
              <div className='bg-gray-100 mb-2'>
                {
                  product.images && product.images.map((image, index) => (
                    <img src={image.url} className="w-full cursor-pointer hover:scale-[1.1] px-6 py-10" alt="img" />
                  ))
                }
              </div>
              <div className='px-6 py-2'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2 px-2 py-2 border border-indigo-900 rounded shadow bg-indigo-900 text-white'>
                    <DeliveryDiningIcon style={{fontSize:24}} />
                    <h1 className='text-xl'>Delivery In 45 Munites</h1>
                  </div>
                  <div className='flex items-center gap-2 px-2 py-2 border border-indigo-900 rounded shadow bg-indigo-900 text-white'>
                    <MonetizationOnIcon style={{fontSize:24}} />
                    <h1 className='text-xl'>Enjoy Cash On Delivery</h1>
                  </div>
                </div>
              </div>
        </div>
            <div className='col-span-1'>
              <div className="ml-4 space-y-2">
              <h1 className='text-3xl text-gray-900 font-semibold'>{product.name}</h1>
              <div className="flex items-center justify-start">
                <div className='text-yellow-500 gap-1'>
                <Star style={{fontSize: "18px"}} />
                <Star style={{fontSize: "18px"}} />
                <Star style={{fontSize: "18px"}} />
                <Star style={{fontSize: "18px"}} />
                <Star style={{fontSize: "18px"}} />
                </div>
                <p className='text-gray-500 font-semibold text-md mx-4'>50 Reviews</p>
              </div>
              <div className='flex items-center gap-4'>
                  <h1 className='text-xl text-gray-700 font-semibold'>Availability:</h1>
                  <p className='text-xl text-gray-900 font-semibold'>{product.stock>5 ? "In Stock" : "Out Of Stock"}</p>
              </div>
              <div className='flex items-center gap-4'>
                  <h1 className='text-xl text-gray-700 font-semibold'>Brand:</h1>
                  <p className='text-lg text-gray-500 '>{product.brand}</p>
              </div>
              <div className='flex items-center gap-4'>
                  <h1 className='text-xl text-gray-700 font-semibold'>Category:</h1>
                  <p className='text-lg text-gray-500 '>{product.category}</p>
              </div>
              <div className='flex items-center gap-4'>
                  <h1 className='text-xl text-gray-700 font-semibold'>SKU:</h1>
                  <p className='text-lg text-gray-500 '>FV23JK</p>
              </div>
              <div className='flex items-center gap-4'>
                  <h1 className='text-xl text-gray-700 font-semibold'>Price:</h1>
                 <div className='flex items-center'>
                 <p className="text-3xl text-primary font-medium flex items-center pr-2"><span className='pr-1'><img className="w-4" src="/assets/tk.png" alt="BDT" /></span>{product.price}</p>
                 <p className="text-xl text-gray-400 font-medium flex items-center line-through"><span className='pr-1'><img className="w-4 text-primary" src="/assets/tk.png" alt="BDT" /></span>{product.prevPrice}</p>
                 </div>
              </div>
              <div className='space-y-2'>
                  <h1 className='text-xl text-gray-700 font-semibold'>Short Desc</h1>
                  <p className='text-md text-gray-500 text-jutify'>{product.description}</p>
              </div>
              <div className='space-y-2'>
                <h1 className='text-lg text-gray-700'>Quantity</h1>
                <div className='flex items-center'>
                  <button className='bg-purple-900 text-white text-lg rounded-l w-12 px-2 py-1.5 hover:bg-purple-600' onClick={() => setQuantity(quantity-1)}>-</button>
                  <p className="w-12 border-2 border-purple-900 text-center px-2 py-1.5">{quantity < 0 ? 0 : quantity}</p>
                  <button className='bg-purple-900 text-white text-lg rounded-r w-12 px-2 py-1.5 hover:bg-purple-600' onClick={() => setQuantity(quantity+1)}>+</button>
                </div>
              </div>
              <div className='flex items-center gap-6 py-3'>
                <button className='flex items-center justify-center bg-primary text-white border border-primary hover:bg-transparent hover:text-primary px-3 py-2 rounded'>
                  <span><ShoppingBasket /></span>
                  <h1>Add To Bag</h1>
                </button>
                <button className='flex items-center justify-center bg-indigo-900 text-white border border-indigo-900 hover:bg-transparent hover:text-indigo-900 px-3 py-2 rounded'>
                  <span><FavoriteBorder /></span>
                  <h1>WishList</h1>
                </button>
              </div>
              <div className="flex items-center gap-4">
                      <button className='bg-blue-900 text-white px-1 py-1 rounded-full flex item-center justify-center'><Facebook style={{fontSize: 18}} /></button>
                      <button className='bg-pink-500	 text-white px-1 py-1 rounded-full flex item-center justify-center'><Instagram style={{fontSize: 18}} /></button>
                      <button className='bg-rose-600	 text-white px-1 py-1 rounded-full flex item-center justify-center'><YouTube style={{fontSize: 18}} /></button>
              </div>
              </div>
            </div>
            </div>
      ) : <h1 className='text-2xl text-red-700 text-center'>Internal Server Error</h1>}
      <div className='py-8'>
      <div className='flex items-center gap-2'>
        <TabButton title="Product Info"  showClick={showClick} />
        <TabButton title="Experience"  showClick={showClick}  />
      </div>
      <p className='border-1 border-b border-indigo-700' />
      <div>
        {
           click ? <ProductInfo /> : 
            <Reviews />
        }
      </div>
      </div>
    </div>
  )
}

// PermIdentity, HeadsetMic

const Reviews = () => {
  const [star, setStart] = useState(0);
  const arrayExperience = [
    {
      name: 'Mr. Abir',
      url : <PermIdentity />,
      comment: 'Product is nicer.',
      admin: 'Store Admin',
      adminUrl : <HeadsetMic />,
      reply: 'Thanks Sir'
    },
    {
      name: 'Mr. Arefin',
      url : <PermIdentity />,
      comment: 'It make my mind awesome.',
      admin: 'Store Admin',
      adminUrl : <HeadsetMic />,
      reply: 'Thanks Sir'
    },
  ]
  return(
    <div className='grid sm:grid-cols-1 md:grid-cols-3'>
      <div className='sm:col-span-1 md:col-span-2 py-8 bg-gary-100 space-y-6'>
        <p>20 Experiences</p>
        {
            arrayExperience.map((item, index) => (
              <div className='space-y-1'>
                <div className='flex items-center gap-2'>
                <p>{item.url}</p>
                <div>
                <p className='text-md text-gray-700'>{item.comment}</p>  
                <h1 className='text-xs text-gray-600'>{item.name}</h1>
              </div>
              </div>
              <div className='flex items-center gap-2'>
                <p>{item.adminUrl}</p>
                <div>
                <p className='text-md text-gray-700'>{item.reply}</p>  
                <h1 className='text-xs text-gray-600'>{item.admin}</h1>
              </div>
              </div>
              </div>
            ))
          }
        <div className='flex items-center'>
          <input tupe="text" className='w-1/2 block px-6 py-4 rounded-l border border-primary focus:outline-none' placeholder='Type your experience' />
          <button className='bg-primary text-white px-6 py-4 rounded-r border border-primary hover:bg-transparent hover:text-primary'>Submit</button>
        </div>
      </div>
    </div>
  )
}

const ProductInfo = () => {
  return (
    <div
           style={{ transitionDelay:'200ms'}}
         >
           <div className='grid sm:grid-cols-1 md:grid-cols-3'>
             <div className='sm:col-span-1 md:col-span-2 py-8'>
               <p className='text-base text-gray-500 text-justify'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nec condimentum lorem lacus. Lectus libero in vulputate quis massa nisl risus, libero ut. Morbi praesent ipsum sed morbi turpis sed. Amet sed fames fermentum, augue dignissim. Montes, velit velit eu gravida nibh in feugiat. <br /> <br />
 
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nec condimentum lorem lacus. Lectus libero in vulputate quis massa nisl risus, libero ut. Morbi praesent ipsum sed morbi turpis sed. Amet sed fames fermentum, augue dignissim. Montes, velit velit eu gravida nibh in feugiat.
               </p>
               <div className='py-2 space-y-2'>
                  <div className='flex item-center gap-3'>
                    <h1 className="text-lg text-gray-900 font-semibold">Farm From : </h1>
                    <p className='text-base text-gray-500'>FarmEx, ShoankoChil</p>
                  </div> 
                  <div className='flex item-center gap-3'>
                    <h1 className="text-lg text-gray-900 font-semibold">Weight : </h1>
                    <p className='text-base text-gray-500'>In KG</p>
                  </div>
               </div>
           </div>
       </div>
       </div>
  )
}

const TabButton = (props) => {
  
  const { title, showClick, click } = props;
  return (
  <div>
    <button className="bg-white text-gray-900 text-base border-t border-x border-gray-900 font-semibold rounded-t px-3 py-2 focus:border-primary focus:text-primary" onClick={showClick}>{title}</button>
  </div>
  )
}

// const TabButton2 = (props) => {
  
//   const { title, setClick, click } = props;
//   return (
//   <div>
//     <button className="bg-white text-gray-900 text-base border-t border-x border-gray-900 font-semibold rounded-t px-3 py-2 focus:border-primary focus:text-primary" onClick={() => setClick(!click)} >{title}</button>
//   </div>
//   )
// }


const Card = (props) => {
  const {item, handleMainImgClick} = props;
  return (
      <div className='my-2 mx-1 cursor-pointer border border-indigo-800'>
          <div className="group-hover:brightness-90">
          <img src={item} alt="item-img" className='bg-gray-100' onClick={handleMainImgClick} />
          </div>
      </div>
  )
}

const BreadCum = ({product}) => {

  return (
    <div className='container px-4 py-6'>
      {
        product ? (
          <div className='w-80 flex item-center justify-between'>
       <div className='flex items-center text-gray-500'>
         <Home />
         <h1 className='px-1'>FarmEx</h1>
       </div>
       <div className='flex items-center text-gray-500'>
         <ChevronRight />
         <h1>{product.category}</h1>
       </div>
       <div className='flex items-center'>
         <ChevronRight />
         <h1 className='text-gray-800 block'>{product.name}</h1>
       </div>
      </div>
        ) : null
      }
    </div>
  )
}


export default ProductPage;