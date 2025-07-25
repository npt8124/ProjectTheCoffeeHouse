import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Index = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Cà Phê Đen",
      description: "Hương vị truyền thống, đậm đà khó quên.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/437718d6214232d7427270e3fbfe29eaff268cd6?width=548",
    },
    {
      id: 2,
      name: "Matcha Đào Đá Xay",
      description: "Mát lạnh, đầy năng lượng cho cuộc sống năng động.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4189082daa6e60c56c74f3a53fd481a582de3e4d?width=548",
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
