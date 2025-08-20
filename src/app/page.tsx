import Image from "next/image";
import Hero from "./home-components/Hero";
import Nav from "./components/Nav";
import Features from "./home-components/Features";

const categories = [
  { name: "Fresh Fruit", img: "/public/assets/brand-1.svg" },
  { name: "Fresh Vegetables", img: "/public/assets/brand-2.svg" },
  { name: "Meat & Fish", img: "/public/assets/brand-3.svg" },
  { name: "Snacks", img: "/public/assets/brand-4.svg" },
  { name: "Beverages", img: "/public/assets/brand-5.svg" },
  { name: "Beauty & Health", img: "/public/assets/brand-1.svg" },
  { name: "Bread & Bakery", img: "/public/assets/brand-2.svg" },
  { name: "Cooking Needs", img: "/public/assets/brand-3.svg" },
  { name: "Diabetic Food", img: "/public/assets/brand-4.svg" },
  { name: "Dish Detergents", img: "/public/assets/brand-5.svg" },
  { name: "Oil", img: "/public/assets/brand-1.svg" },
];

const products = [
  {
    name: "Green Apple",
    img: "/public/products/12184afea65296f94f227305b1f0b55cfcb59ebe.jpg",
    price: 14,
    oldPrice: 20,
  },
  {
    name: "Fresh Orange",
    img: "/public/products/1dd3ec418cbaa44aa8d77ee4cc14c725f33e84b5.jpg",
    price: 12,
    oldPrice: 15,
  },
  {
    name: "Cauliflower",
    img: "/public/products/2099fb565ffbe623e9b927ae3be066c4f975d1fc.jpg",
    price: 10,
    oldPrice: 13,
  },
  {
    name: "Eggplant",
    img: "/public/products/8a641b99aade1c6d813825d71e3b0fe5a361d969.jpg",
    price: 9,
    oldPrice: 12,
  },
  {
    name: "Lettuce",
    img: "/public/products/cc70c1f63d810c5dc228a262f86fa0b09a4cbf2a.jpg",
    price: 8,
    oldPrice: 10,
  },
  {
    name: "Green Chili",
    img: "/public/products/e71ec1ab56641c653dec45f6e583b93973777294.jpg",
    price: 7,
    oldPrice: 9,
  },
];

const testimonials = [
  {
    name: "Robert Fox",
    text: "Great organic selection and fast delivery!",
    img: "/public/assets/brand-1.svg",
  },
  {
    name: "Darlene Russell",
    text: "Freshest produce in town. Highly recommend!",
    img: "/public/assets/brand-2.svg",
  },
  {
    name: "Eleanor Pena",
    text: "Excellent customer service and quality.",
    img: "/public/assets/brand-3.svg",
  },
];

export default function Home() {
  return (
    <div className="font-sans bg-[#f8fafb] min-h-screen">
      {/* Header */}
      <Nav />
      <Hero />
      <Features />

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Popular Categories</h3>
          <a href="#" className="text-green-700 font-semibold">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-lg flex flex-col items-center p-4 gap-2 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={cat.img.replace("/public", "")}
                alt={cat.name}
                width={48}
                height={48}
              />
              <span className="text-sm font-medium text-gray-700">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Popular Products</h3>
          <a href="#" className="text-green-700 font-semibold">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {products.map((prod, i) => (
            <div
              key={i}
              className="bg-white rounded-lg flex flex-col items-center p-4 gap-2 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={prod.img.replace("/public", "")}
                alt={prod.name}
                width={80}
                height={80}
                className="rounded"
              />
              <span className="text-sm font-medium text-gray-700">
                {prod.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-green-700 font-bold">${prod.price}</span>
                <span className="text-gray-400 line-through text-xs">
                  ${prod.oldPrice}
                </span>
              </div>
              <button className="bg-green-700 text-white px-4 py-1 rounded-full text-xs mt-2">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
        <div className="bg-blue-100 rounded-xl p-6 flex flex-col items-center">
          <span className="text-blue-700 font-bold">Sale of the Month</span>
          <span className="text-2xl font-bold">00:02:18:46</span>
          <button className="bg-blue-700 text-white px-4 py-1 rounded-full mt-2">
            Shop now
          </button>
        </div>
        <div className="bg-red-100 rounded-xl p-6 flex flex-col items-center">
          <span className="text-red-700 font-bold">Low-Fat Meat</span>
          <span className="text-2xl font-bold">Started at $15.99</span>
          <button className="bg-red-700 text-white px-4 py-1 rounded-full mt-2">
            Shop now
          </button>
        </div>
        <div className="bg-yellow-100 rounded-xl p-6 flex flex-col items-center">
          <span className="text-yellow-700 font-bold">100% Fresh Fruit</span>
          <span className="text-2xl font-bold">40% OFF</span>
          <button className="bg-yellow-700 text-white px-4 py-1 rounded-full mt-2">
            Shop now
          </button>
        </div>
      </section>

      {/* Hot Deals */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Hot Deals</h3>
          <a href="#" className="text-green-700 font-semibold">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {products.map((prod, i) => (
            <div
              key={i}
              className="bg-white rounded-lg flex flex-col items-center p-4 gap-2 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={prod.img.replace("/public", "")}
                alt={prod.name}
                width={80}
                height={80}
                className="rounded"
              />
              <span className="text-sm font-medium text-gray-700">
                {prod.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-green-700 font-bold">${prod.price}</span>
                <span className="text-gray-400 line-through text-xs">
                  ${prod.oldPrice}
                </span>
              </div>
              <button className="bg-green-700 text-white px-4 py-1 rounded-full text-xs mt-2">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <div className="bg-green-900 rounded-xl flex flex-col md:flex-row items-center justify-between p-8 text-white relative min-h-[180px]">
          <div>
            <h4 className="text-2xl font-bold mb-2">Summer Sale</h4>
            <p className="mb-4">
              37% OFF for your first order when you shop this week!
            </p>
            <button className="bg-white text-green-900 font-semibold px-6 py-2 rounded-full w-max">
              Shop Now
            </button>
          </div>
          <Image
            src="/banners/736ac341802327b2806c879e76b9b8612d16e984.jpg"
            alt="Banner"
            width={220}
            height={120}
            className="rounded-xl object-cover mt-4 md:mt-0"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Featured Products</h3>
          <a href="#" className="text-green-700 font-semibold">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {products.map((prod, i) => (
            <div
              key={i}
              className="bg-white rounded-lg flex flex-col items-center p-4 gap-2 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={prod.img.replace("/public", "")}
                alt={prod.name}
                width={80}
                height={80}
                className="rounded"
              />
              <span className="text-sm font-medium text-gray-700">
                {prod.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-green-700 font-bold">${prod.price}</span>
                <span className="text-gray-400 line-through text-xs">
                  ${prod.oldPrice}
                </span>
              </div>
              <button className="bg-green-700 text-white px-4 py-1 rounded-full text-xs mt-2">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <h3 className="text-xl font-bold mb-4">Latest News</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
            <Image
              src="/banners/8a3f3ac5cfb7c4dbc3d5547d1dd9274c56b0615e.jpg"
              alt="News"
              width={320}
              height={160}
              className="rounded"
            />
            <span className="text-green-700 font-bold">18 Aug</span>
            <h4 className="font-semibold">Comfort produce at right price</h4>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc
              fermentum.
            </p>
            <a href="#" className="text-green-700 font-semibold">
              Read More →
            </a>
          </div>
          <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
            <Image
              src="/banners/cb41c115301293b498e73ed185cf4f7de364d73a.jpg"
              alt="News"
              width={320}
              height={160}
              className="rounded"
            />
            <span className="text-green-700 font-bold">19 Aug</span>
            <h4 className="font-semibold">Eget tortor lorem cursus</h4>
            <p className="text-sm text-gray-500">
              Vestibulum posuere, sapien nec laoreet blandit, velit velit.
            </p>
            <a href="#" className="text-green-700 font-semibold">
              Read More →
            </a>
          </div>
          <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
            <Image
              src="/banners/d4dc51bfa22b43ea08c25ba24d7d1308891b022e.jpg"
              alt="News"
              width={320}
              height={160}
              className="rounded"
            />
            <span className="text-green-700 font-bold">20 Aug</span>
            <h4 className="font-semibold">Maecenas blandit risus elementum</h4>
            <p className="text-sm text-gray-500">
              Maecenas blandit risus elementum vestibulum laoreet.
            </p>
            <a href="#" className="text-green-700 font-semibold">
              Read More →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <h3 className="text-xl font-bold mb-4">Client Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 flex flex-col items-center gap-2 shadow"
            >
              <Image
                src={t.img.replace("/public", "")}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <p className="text-center text-gray-600">{t.text}</p>
              <span className="font-semibold text-green-700">{t.name}</span>
              <span className="text-yellow-400">★★★★★</span>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <h3 className="text-xl font-bold mb-4">Follow us on Instagram</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            "/products/1dd3ec418cbaa44aa8d77ee4cc14c725f33e84b5.jpg",
            "/products/8a641b99aade1c6d813825d71e3b0fe5a361d969.jpg",
            "/products/cc70c1f63d810c5dc228a262f86fa0b09a4cbf2a.jpg",
            "/products/e71ec1ab56641c653dec45f6e583b93973777294.jpg",
            "/products/fde10b4906098017c0e42a55c431126a676d09ea.jpg",
          ].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="Instagram"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <div className="bg-white rounded-xl flex flex-col md:flex-row items-center justify-between p-8 gap-4">
          <div>
            <h4 className="text-xl font-bold mb-2">Subscribe our Newsletter</h4>
            <p className="text-gray-500">Get the latest updates and offers.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="border rounded-full px-4 py-2 focus:outline-none w-full md:w-64"
            />
            <button className="bg-green-700 text-white px-6 py-2 rounded-full font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image src="/assets/logo.svg" alt="Logo" width={32} height={32} />
              <span className="text-xl font-bold text-green-400">Ecobazar</span>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              (246) 123-456-888 | support@ecobazar.com
            </p>
            <p className="text-xs text-gray-500">
              Copyright © 2025 Ecobazar. All rights reserved.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">My Account</h5>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Manage Account</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Help</h5>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Categories</h5>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <a href="#">Fresh Fruit</a>
              </li>
              <li>
                <a href="#">Vegetables</a>
              </li>
              <li>
                <a href="#">Meat & Fish</a>
              </li>
              <li>
                <a href="#">Snacks</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
