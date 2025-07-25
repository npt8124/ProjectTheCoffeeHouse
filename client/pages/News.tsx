import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const News = () => {
  const featuredNews = {
    id: 1,
    title: "The Coffee House mở cửa hàng thứ 100 tại Việt Nam",
    excerpt:
      "Chúng tôi tự hào thông báo việc khai trương cửa hàng thứ 100 tại trung tâm Sài Gòn, đánh dấu cột mốc quan trọng trong hành trình phát triển.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3ccc200fdd69f98a2daf4595504c7c94a256f5f2?width=1235",
    date: "15/01/2025",
    category: "Tin công ty",
  };

  const newsArticles = [
    {
      id: 2,
      title: "Ra mắt dòng sản phẩm Matcha cao cấp từ Nhật Bản",
      excerpt:
        "Khám phá hương vị đặc biệt của matcha nguyên chất được nhập khẩu trực tiếp từ Uji, Kyoto.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4189082daa6e60c56c74f3a53fd481a582de3e4d?width=548",
      date: "12/01/2025",
      category: "Sản phẩm mới",
    },
    {
      id: 3,
      title: "Khuyến mãi tháng 1: Mua 1 tặng 1 toàn bộ thức uống",
      excerpt:
        "Nhân dịp năm mới, The Coffee House dành tặng khách hàng chương trình khuyến mãi hấp dẫn.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fb62b7380d41b61c46a6ccf1afba19b0420d5ace?width=540",
      date: "10/01/2025",
      category: "Khuyến mãi",
    },
    {
      id: 4,
      title: "The Coffee House nhận giải thưởng 'Thương hiệu cà phê yêu thích'",
      excerpt:
        "Chúng tôi vinh dự nhận giải thưởng danh giá từ Hiệp hội F&B Việt Nam năm 2024.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892",
      date: "08/01/2025",
      category: "Tin công ty",
    },
    {
      id: 5,
      title: "Bí quyết pha chế cà phê đen đậm đà tại nhà",
      excerpt:
        "Học cách pha chế ly cà phê đen hoàn hảo với những mẹo từ các barista chuyên nghiệp.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/437718d6214232d7427270e3fbfe29eaff268cd6?width=548",
      date: "05/01/2025",
      category: "Hướng dẫn",
    },
    {
      id: 6,
      title: "The Coffee House hợp tác với nông dân cà phê Đắk Lắk",
      excerpt:
        "Chương trình hỗ trợ nông dân địa phương nhằm nâng cao chất lượng cà phê Việt Nam.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f0c1e108cb9f6e3c8fb06a4a315d1bec26f5a009?width=548",
      date: "02/01/2025",
      category: "Cộng đồng",
    },
    {
      id: 7,
      title: "Xu hướng thức uống healthy 2025",
      excerpt:
        "Khám phá những xu hướng thức uống lành mạnh đang được giới trẻ yêu thích.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/738c8035f041e35c4c77c7f2d31ff163b30bcff5?width=548",
      date: "30/12/2024",
      category: "Xu hướng",
    },
  ];

  const categories = [
    "Tất cả",
    "Tin công ty",
    "Sản phẩm mới",
    "Khuyến mãi",
    "Hướng dẫn",
    "Cộng đồng",
    "Xu hướng",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[397px] overflow-hidden">
        <div className="absolute inset-0 opacity-95">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892"
            alt="Coffee shop interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight mb-4">
            Tin Tức
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-relaxed max-w-[679px]">
            Cập nhật những tin tức mới nhất từ The Coffee House
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-[#FFC107] text-black hover:bg-[#FFC107] hover:text-white transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[32px] font-bold text-black text-center mb-12">
            Tin Nổi Bật
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#FFC107] font-medium text-lg">
                {featuredNews.category}
              </span>
              <h3 className="text-[36px] font-bold leading-tight text-black mt-2 mb-4">
                {featuredNews.title}
              </h3>
              <p className="text-[20px] font-normal leading-relaxed text-gray-700 mb-6">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">{featuredNews.date}</span>
                <Link
                  to={`/news/${featuredNews.id}`}
                  className="bg-[#FFC107] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#FFB300] transition-colors"
                >
                  Đọc thêm
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[32px] font-bold text-black text-center mb-12">
            Tin Tức Khác
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#FFC107] font-medium text-sm">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-[#FFC107] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-[#212529] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#343a40] transition-colors">
              Xem thêm tin tức
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-[#FFC107]">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[32px] font-bold text-black mb-4">
            📧 Đăng Ký Nhận Tin
          </h2>
          <p className="text-[20px] font-normal text-black mb-8 max-w-[600px] mx-auto">
            Đăng ký để nhận thông tin về sản phẩm mới, khuyến mãi và tin tức mới
            nhất từ The Coffee House
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#212529]"
            />
            <button className="bg-[#212529] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#343a40] transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
