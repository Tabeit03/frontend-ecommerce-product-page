import { useState } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import Cart from './Cart';


export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [cartIsOpen, setCartIsOpen] = useState(false);

return (
  <>
  <header className='flex items-center justify-between p-8 border-b border-slate-300 mx-auto max-w-7xl'>
    
    <div className='flex items-center justify-start gap-4' >
<ul className="flex items-center justify-start gap-4">
  {!isOpen && (
    <li onClick={()=> setIsOpen(true)}
  className="lg:hidden">
    <img src={menu} alt='menu' className=""/>
</li>
  )}
  {isOpen && (
    <li onClick={()=> setIsOpen(false)}
  className="close lg:hidden">
    <img src={close} alt='close' className="w-4"/>
</li>
  )}
  <li><img src={logo} alt='logo'/>
</li>
</ul> 


<nav className={isOpen && "open"}>
  <ul className="">
    <li>    <a href="">Collections</a>
</li>
    <li><a href="">Men</a>
</li>
    <li><a href="">Women</a>
</li>
    <li><a href="">About</a>
</li>
    <li><a href="">Contact</a>
</li>
  </ul>
</nav>  
</div>

<div>
   <ul className='flex items-center justify-start gap-8'>
  <li><button onClick={() => setCartIsOpen(!cartIsOpen)}>
    <img src={cart} alt='cart' className='w-6'/> 
    </button></li>
    {/* dropdown cart */}
    <li >{cartIsOpen && <Cart/>}
      </li>
  <li> <img src={avatar} alt='avatar' className='w-12 '/> </li>
 </ul>
 </div>

  </header>

  </>
);
}