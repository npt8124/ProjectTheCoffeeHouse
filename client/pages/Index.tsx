import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Index = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Cà Phê Sữa",
      description: "Hương vị truyền thống, đậm đà khó quên.",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Matcha Đào Đá Xay",
      description: "Mát lạnh, đầy năng lượng cho cuộc sống năng động.",
      image:
        "https://product.hstatic.net/1000075078/product/1745246637_matcha-dao-da-xay_3a33d27eeded4d35aeeaa93e8687f88b.png",
    },
    {
      id: 3,
      name: "Olong Tứ Quý Vải",
      description: "Trà thanh mát kết hợp vị vải thơm ngon dịu nhẹ.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fb62b7380d41b61c46a6ccf1afba19b0420d5ace?width=540",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[397px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892"
            alt="Coffee shop interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65 opacity-60"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight mb-4 pt-[70px]">
            Hương Vị Cà Phê Đích Thực
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-relaxed mb-8 max-w-[693px]">
            Cùng The Coffee House nâng niu từng khoảnh khắc
          </p>
          <Link
            to="/menu"
            className="bg-[#FFC107] text-black text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-relaxed px-6 md:px-8 py-3 md:py-4 rounded-[10px] hover:bg-[#FFB300] transition-colors"
          >
            <b>Khám Phá Menu</b>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[32px] font-bold leading-[30px] text-black mb-8">
            Về Chúng Tôi
          </h2>
          <p className="text-[20px] font-normal leading-[30px] text-black max-w-[1048px] mx-auto">
            The Coffee House không chỉ là một quán cà phê, mà là một trải
            nghiệm. Chúng tôi mang đến không gian hiện đại, thân thiện cùng
            những ly cà phê chất lượng, phục vụ cho giới trẻ Việt.
          </p>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[32px] font-bold leading-[30px] text-black text-center mb-12">
            Menu Nổi Bật
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1296px] mx-auto">
            {featuredItems.map((item) => (
              <div key={item.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white/3">
                  <div className="p-4 lg:p-6">
                    <div className="w-full max-w-[274px] aspect-square mx-auto mb-4 lg:mb-6 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-[32px] font-bold leading-tight text-black text-center mb-2 lg:mb-4">
                      {item.name}
                    </h3>
                    <p className="text-lg md:text-xl lg:text-[24px] font-normal leading-relaxed text-black text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="bg-[#FFC107] py-16 px-4">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[32px] font-bold leading-[30px] text-black mb-4">
            🎉 Ưu Đãi Đặc Biệt
          </h2>
          <p className="text-[20px] font-normal leading-[30px] text-black max-w-[1226px] mx-auto">
            Mua 1 tặng 1 cho tất cả đơn hàng từ 2 ly trở lên. Áp dụng khung giờ
            14h - 18h hôm nay!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[24px] font-bold leading-[30px] text-black mb-4">
            Liên Hệ Chúng Tôi
          </h2>
          <div className="space-y-2">
            <p className="text-base font-bold text-black">
              Email:{" "}
              <span className="font-normal">support@thecoffeehouse.vn</span>
            </p>
            <p className="text-base font-bold text-black">
              Hotline: <span className="font-normal">1800 6936 (miễn phí)</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
