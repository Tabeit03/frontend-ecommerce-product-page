import { useState } from 'react';
import {data} from "./data";
import cart from "./images/icon-cart.svg";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import previous from "./images/icon-previous.svg";
import next from "./images/icon-next.svg";
import Lightbox from './component/Lightbox';
import Navbar from './component/Navbar';

function App() {
const [products] = useState(data);
const [value, setValue] = useState(0);
const [amount, setAmount] = useState(0);
const [slideIndex, setSlideIndex] = useState(1);
const [showLightbox, setShowLightbox] = useState(false);

const{mainImage} = products[value]


const nextSlide =() => {
if (slideIndex !== products.length) {
  setSlideIndex(slideIndex+1)
} else if (slideIndex === products.length) {
  setSlideIndex(1)
}
};

const previousSlide =() => {
if (slideIndex !== 1 ) {
  setSlideIndex(slideIndex-1)
} else if (slideIndex === 1) {
  setSlideIndex(products.length)
}
};


const handleMinus =() => {
   const newAmount = amount - 5;
    setAmount(newAmount <= 0 ? 0 : newAmount);
  };

  return (
    <>
     <Navbar/>
{showLightbox && (
<Lightbox products={products} slideIndex={slideIndex} nextSlide={nextSlide}
 previousSlide={previousSlide}
 setShowLightbox={setShowLightbox}
/>
)}

{/* product image and carousel */}
     <section className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:mt-10 gap-10 lg:place-items-center'>
      <article>
    <div className='lg:hidden'>
      {products.map((item, index) => (
      <div key={index}
    className={slideIndex === index + 1 ?
      "relative" : "hidden"}
    >
      <img src={item.mainImage} alt='sneakers' className='w-full lg:rounded-2xl cursor-pointer'
      onClick={() => setShowLightbox(true)}
      />
    <ul className='lg:hidden'>
     <li>
      <button onClick={previousSlide} className='bg-white rounded-full p-5 shadow absolute 
     left-4 top-1/2 translate-y-3/4 ' >
      <img src={previous}/></button></li>
      <li>
        <button onClick={nextSlide} className='bg-white rounded-full p-5 shadow absolute 
      right-4 top-1/2 translate-y-3/4'>
        <img src={next}/></button></li>
    </ul>
    
    </div>    
      ))}
</div>
{/* lightbox carousel */}
 <div className='hidden lg:block'>
      <img src={mainImage} alt='sneakers' className='w-full lg:rounded-2xl cursor-pointer'
      onClick={() => setShowLightbox(true)}
      />
</div>

<ul className ='hidden lg:flex justify-start gap-5 mt-5 items-center flex-wrap'>
{products.map((item, index) => (
<li
  key={item.id}
  onClick={() => setValue(index)}
  className={`${index === value 
    ? "border-orange-400 opacity-80" 
    : ""} border-2 border-transparent rounded-2xl overflow-hidden cursor-pointer`}
>
  <img src={item.thumbnail} alt="sneakers" className="w-20" />
</li>

))} 
</ul> 
</article>

{/* Products details and price control */}
<article className='px-8 pb-10'> 
<h2 className=' text-sm tracking-wide font-thin inline-block mb-10 '>SNEAKER COMPANY</h2>

  <h1 className='text-slate-900 mb-10 font-bold text-3xl lg:text-4xl tracking-widest'>Fall Limited Edition<br></br> Sneakers</h1>

  <p className='text-slate-600 mb-10 leading-loose'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.
</p>
<div className='flex flex-wrap items-center justify-between'>
  <ul className='flex items-center gap-5'>
    <li className='text-slate-900 font-bold text-2xl'>$125.00</li>
    <li className=' text-slate-100 bg-black py-1 px-2 tracking-wide text-sm font-bold inline-block rounded shadow'> 50%</li>
  </ul>
</div>
<p className='text-slate-600  mt-2'>
    <del>$250.00</del></p>

<div className='mt-10 cursor-pointer max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
  <ul className=' flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow'>
    <li onClick={handleMinus}><img src={minus}/></li>
    <li>{amount}</li>
    <li onClick={()=> setAmount(amount + 5)} ><img src={plus}/></li>

  </ul>
    <button className='bg-orange-500 hover:bg-orange-600 flex items-center justify-center gap-4 mt-0 py-2 px-4 font-bold rounded shadow cursor-pointer'>

      <img src={cart} alt='cart' className='contrast-200 brightness-10'/>Add to cart
     </button>

</div>
</article>
     </section>
    </>
  )
};

export default App
