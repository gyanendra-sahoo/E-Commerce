import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Social Media Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* Shipping Info */}
        <div className="text-sm text-center flex-1">
          <span>We ship worldwide – Fast and reliable shipping</span>
        </div>

        {/* Contact Info */}
        <div className="hidden md:block text-sm">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            Call Us: +1 234 567 890
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Topbar;
