import React from 'react';
import { HiShoppingBag, HiOutlineCreditCard } from 'react-icons/hi';
import { HiArrowPathRoundedSquare } from 'react-icons/hi2';

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full bg-gray-100 mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-tight mb-2">
              FREE INTERNATIONAL SHIPPING
            </h4>
            <p className="text-gray-600 text-sm tracking-tight">
              On all orders over $100.00
            </p>
          </div>
        </div>

        {/* Feature 2 (You can duplicate and customize this block for more features) */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full bg-gray-100 mb-4">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-tight mb-2">
              45 DAYS RETURN
            </h4>
            <p className="text-gray-600 text-sm tracking-tight">
              Money back guarantee
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full bg-gray-100 mb-4">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-tight mb-2">
              SECURE CHECKOUT
            </h4>
            <p className="text-gray-600 text-sm tracking-tight">
              100% secure checkout process
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
