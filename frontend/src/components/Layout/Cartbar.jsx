import { IoClose } from "react-icons/io5";
import CartContents from "../Cart/CartContents";

const Cartbar = ({ drawerOpen, toggleCartDrawer }) => {
    return (
        // Cart Drawer
        <div
            className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            {/* Close Button */}
            <div className="flex justify-end p-4">
                <button onClick={toggleCartDrawer}>
                    <IoClose className="h-6 w-6 text-gray-600" />
                </button>
            </div>

            {/* Cart Content */}
            <div className="flex-grow p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                {/* Cart items go here */}
                <CartContents />
            </div>
            {/* Checkout Button */}
            <div className="p-4 bg-white sticky bottom-0">
                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">Checkout</button>
                <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">Shipping, taxes, and discounts calculated at checkout.</p>
            </div>
        </div>
    );
};

export default Cartbar;
