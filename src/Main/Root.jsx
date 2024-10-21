import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="bg-[#6000b3]">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;