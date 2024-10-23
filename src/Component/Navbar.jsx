import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="container mx-auto lg:relative pl-5 pr-5 bottom-[250px] right-3 left-5">
            <nav className=" flex items-center justify-between md:space-x-6">
        {/* logo */}
        <div className=" text-2xl select-none text-white">Stress <br />Free</div>

        {/* menu */}
        <ul className=" text-navColor md:flex md:gap-2 gap-5 lg:space-x-5 hidden bg-white border border-red-400 p-2 rounded-2xl  ">
          <a href="/" className=" border border-yellow-400 shadow-xl rounded-xl p-1" >Home</a>
          <a href="#about">About</a>
          <a href="#Gallary">Gallary</a>
          
          <a href="#Menu">Menu</a>
          <a href="#contact">Contact</a>
        </ul>

      

        {/* icons */}
        <span href="" className="md:hidden bg-white" onClick={() => setOpen(!open)}>
          {open ? <CiMenuFries /> : <IoMdClose />}
        </span>

        {/* menu */}
      </nav>
      {!open && (
        <ul className=" bg-white absolute pt-10   px-20 text-justify flex rounded-2xl mr-4 overflow-visible right-0 shadow-lg  z-50 ease-in-out duration-300 min-h-[400px] flex-col space-y-5">
          <li>Home</li>
          <li>About</li>
          <li>Gallary</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      )}
        </div>
    );
};

export default Navbar;