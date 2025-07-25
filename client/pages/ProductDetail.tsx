import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";

const ProductDetail = () => {
  const { id } = useParams();

  // Sample product data - in real app this would come from API/database
  const products = {
    "ca-phe-den": {
      id: "ca-phe-den",
      name: "Cà Phê Đen",
      price: "25.000",
      originalPrice: "30.000",
      description:
        "Hương vị truyền thống, đậm đà khó quên. Được pha chế từ những hạt cà phê Robusta chất lượng cao, rang vừa tới để giữ nguyên hương vị đặc trưng.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/437718d6214232d7427270e3fbfe29eaff268cd6?width=548",
      category: "Cà Phê",
      ingredients: ["Cà phê Robusta 100%", "Đường", "Sữa đặc (tùy chọn)"],
      nutrition: {
        calories: "5 kcal",
        caffeine: "95mg",
        sugar: "0g",
      },
      sizes: [
        { name: "Size S", price: "25.000", volume: "200ml" },
        { name: "Size M", price: "30.000", volume: "300ml" },
        { name: "Size L", price: "35.000", volume: "450ml" },
      ],
    },
  };

  const product =
    products[id as keyof typeof products] || products["ca-phe-den"];

  const relatedProducts = [
    {
      id: "ca-phe-sua",
      name: "Cà Phê Sữa",
      price: "30.000",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f0c1e108cb9f6e3c8fb06a4a315d1bec26f5a009?width=548",
    },
    {
      id: "americano",
      name: "Americano",
      price: "35.000",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/95e79db57ee3651783dc31a2c124471b31e08986?width=548",
    },
    {
      id: "latte",
      name: "Latte",
      price: "45.000",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/20d7602a629db11d5deb85368b5365184cbe3e33?width=548",
    },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <nav className="text-sm">
            <Link to="/" className="text-gray-600 hover:text-[#FFC107]">
              Trang chủ
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/menu" className="text-gray-600 hover:text-[#FFC107]">
              Menu
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="w-full max-w-[500px] mx-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-[#FFC107] font-medium text-lg">
                  {product.category}
                </span>
                <h1 className="text-[48px] font-bold leading-tight text-black mt-2">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-baseline space-x-4">
                <span className="text-[36px] font-bold text-[#FFC107]">
                  {product.price}đ
                </span>
                {product.originalPrice && (
                  <span className="text-[24px] text-gray-500 line-through">
                    {product.originalPrice}đ
                  </span>
                )}
              </div>

              <p className="text-[20px] font-normal leading-relaxed text-black">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="space-y-3">
                <h3 className="text-[24px] font-bold text-black">Chọn Size:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.sizes.map((size, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#FFC107] cursor-pointer transition-colors"
                    >
                      <div className="text-center">
                        <p className="font-bold text-black">{size.name}</p>
                        <p className="text-gray-600">{size.volume}</p>
                        <p className="text-[#FFC107] font-bold">
                          {size.price}đ
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex space-x-4">
                <button className="bg-[#FFC107] text-black text-[20px] font-bold px-8 py-4 rounded-lg hover:bg-[#FFB300] transition-colors flex-1">
                  Thêm vào giỏ hàng
                </button>
                <button className="bg-[#212529] text-white text-[20px] font-bold px-8 py-4 rounded-lg hover:bg-[#343a40] transition-colors">
                  Mua ngay
                </button>
              </div>

              {/* Product Details */}
              <div className="space-y-6 pt-6 border-t">
                <div>
                  <h3 className="text-[24px] font-bold text-black mb-3">
                    Thành phần:
                  </h3>
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="text-[18px] text-gray-700 flex items-center"
                      >
                        <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[24px] font-bold text-black mb-3">
                    Thông tin dinh dưỡng:
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-[20px] font-bold text-[#FFC107]">
                        {product.nutrition.calories}
                      </p>
                      <p className="text-gray-600">Calories</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-[20px] font-bold text-[#FFC107]">
                        {product.nutrition.caffeine}
                      </p>
                      <p className="text-gray-600">Caffeine</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-[20px] font-bold text-[#FFC107]">
                        {product.nutrition.sugar}
                      </p>
                      <p className="text-gray-600">Đường</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[32px] font-bold text-black text-center mb-12">
            Sản phẩm liên quan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="w-full aspect-square mb-4 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="text-[24px] font-bold text-black text-center mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[20px] font-bold text-[#FFC107] text-center">
                      {item.price}đ
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
