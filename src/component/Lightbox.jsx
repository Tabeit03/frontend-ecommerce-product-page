import previous from "../images/icon-previous.svg"
import next from "../images/icon-next.svg"
import close from "../images/icon-close.svg"


export default function Lightbox ({products, slideIndex, nextSlide, previousSlide, setShowLightbox} ) {
  return (
    <>
    <article className='fixed inset-0 bg-black/75 top-0 left-0 right-0 bottom-0 z-50'>
      
       <div className='relative max-w-4xl w-full'>
      <button  onClick={() => setShowLightbox(false)}> 
      <img src={close} alt='' className='absolute contrast-200 brightness-10 w-4 top-50 right-5 z-60 lg:top-30 lg:-right-96'
 />
     </button> </div>
<div className='flex items-center justify-center h-screen lg:mx-auto'>
  {products.map((item, index) =>(
 <div key={index}
    className={slideIndex === index + 1 ?
      "relative" : "hidden"}
    >
      <img src={item.mainImage} alt='sneakers' className='big-image w-full max-h-[80vh] object-contain rounded-2xl'
/>
    <ul>
     <li>
      <button onClick={previousSlide} className='bg-white rounded-full p-5 shadow absolute left-4 top-1/2 translate-y-3/4 ' >
      <img src={previous}/></button></li>
      <li>
        <button onClick={nextSlide} className='bg-white rounded-full p-5 shadow absolute right-4 top-1/2 translate-y-3/4'>
        <img src={next}/></button></li>
    </ul>
    
    </div>    
      ))}
</div>
    </article>
    </>
  );
}