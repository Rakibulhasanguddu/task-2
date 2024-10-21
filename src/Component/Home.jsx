import Navbar from "./Navbar";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
const Home = () => {
    return (
        <div className="bg-[#440088] h-[920px]">
          <div className="flex justify-between">
          <img className="lg:h-[300px] h-[100px]" src="https://i.postimg.cc/fyMWnZbJ/wickedbackground-1.png" alt="" /> 
          <img className="lg:h-[300px] h-[150px] relative lg:left-0 lg:-top-20 left-24 bottom-28" src="https://i.postimg.cc/FzRJ0jQr/shape-circle-cutout-plus-shape.png" alt="" />
          </div>
<Navbar></Navbar>

<div className="container mx-auto flex justify-between">
    <div>
        <h1 className="text-6xl font-bold text-white">It's time <br /> to relax</h1>
        <h1 className="text-2xl font-bold text-white mt-3">Say not to Anixety</h1>
    </div>
    <div>
        <img className=" relative bottom-[250px] z-10" src="https://i.postimg.cc/NMjDF2Lt/hero.png" alt="" />
    </div>
    <div>
        <p className="w-[500px] text-white">Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Iure nam vitae <br /> magni fuga necessitatibus alias ipsam odio, quo, laudantium culpa temporibus  voluptatibus dolore. Alias illo obcaecat amet, <br />recusandae assumenda libero? Officia reiciendis <br />inventore vero! Ipsa quasi, quisquam minus <br /> laborum quos, itaque quibusdam <br /> temporibus recusandae fugit, <br /> mollitia soluta.  </p>
    </div>
</div>

<div className="flex justify-between">
    <div>
    <img className=" relative lg:bottom-[750px] right-20 w-[600px]  " src="https://i.postimg.cc/XNHSzyWn/Pngtree-banner-with-abstract-shapes-8292744.png" alt="" />
    <div className="flex relative lg:bottom-[950px] left-44 gap-6  ">
   <a href="" className="border border-red-500 bg-orange-400 p-2 rounded-xl "> <FaFacebookF /></a>
    <a href="" className="border border-red-500 bg-orange-400 p-2 rounded-xl "><IoLogoInstagram /></a>
   <a href="" className="border border-red-500 bg-orange-400 p-2 rounded-xl "> <CiTwitter/></a>
    </div>
    </div>
   <div>
   <img className="w-[300px] relative lg:bottom-[450px] " src="https://i.postimg.cc/yNYytWsz/vecteezy-geometric-liquid-shape-banner-with-black-outline-22070307.png" alt="" />
   <button className="btn bg-purple-600 text-white hover:bg-orange-500 relative lg:bottom-[570px] left-20">More Info</button>
   </div>
</div>
        </div>
    );
};

export default Home;