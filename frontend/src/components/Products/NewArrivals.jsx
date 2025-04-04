import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrivals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const newArrivals = [
        {
            _id: 1,
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=1", alText: "Stylish Jacket" }],
        },
        {
            _id: 2,
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=2", alText: "Stylish Jacket" }],
        },
        {
            _id: 3,
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=3", alText: "Stylish Jacket" }],
        },
        {
            _id: 4,
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=4", alText: "Stylish Jacket" }],
        },
        {
            _id: 5,
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=5", alText: "Stylish Jacket" }],
        },
        {
            _id: 6,
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=6", alText: "Stylish Jacket" }],
        },
        {
            _id: 7,
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=7", alText: "Stylish Jacket" }],
        },
        {
            _id: 8,
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=8", alText: "Stylish Jacket" }],
        },
    ];

    return (
        <section className="py-10 overflow-x-hidden">
            <div className='container mx-auto text-center mb-10'>
                <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
                <p className='text-lg text-gray-600 mb-8'>
                    Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
                </p>
            </div>

            <div className="container mx-auto px-4">
                <Slider {...settings}>
                    {newArrivals.map((product) => (
                        <div key={product._id} className='px-2'>
                            <div className='relative rounded-lg overflow-hidden shadow-md'>
                                <img
                                    src={product.images[0]?.url}
                                    alt={product.images[0]?.alText || product.name}
                                    className='w-full h-[400px] object-cover'
                                />
                                <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4'>
                                    <Link to={`product/${product._id}`}>
                                        <h4 className='font-semibold'>{product.name}</h4>
                                        <p className='mt-1'>Rs. {product.price}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default NewArrivals;
