import React from "react";
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
      
      <section className="position-relative overflow-hidden" style={{height:397}}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{opacity:1}}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892"
            alt="Coffee shop interior"
            className="w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{background:'rgba(0,0,0,0.65)'}}></div>
        </div>
        <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-white px-3" style={{zIndex: 3, height: 397}}>
          <h1 className="fw-bold mb-3 pt-5" style={{fontSize: 48, lineHeight: 1.1}}>Tin tức</h1>
          <p className="mb-4 mx-auto" style={{fontSize: 22, maxWidth: 700}}>
            Cập nhật những thông tin mới nhất từ The Coffee House
          </p>
        </div>
      </section>

      <section className="py-4 px-4 bg-light">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="btn btn-outline-warning rounded-pill fw-medium px-4 py-2"
                style={{borderColor:'#FFC107', color:'#212529'}}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="container">
          <h2 className="fs-1 fw-bold text-dark text-center mb-5">Tin Nổi Bật</h2>
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <span className="fw-medium text-warning fs-5">{featuredNews.category}</span>
              <h3 className="fs-1 fw-bold text-dark mt-2 mb-3">{featuredNews.title}</h3>
              <p className="fs-5 text-secondary mb-4">{featuredNews.excerpt}</p>
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-secondary">{featuredNews.date}</span>
                <Link to={`/news/${featuredNews.id}`} className="btn btn-warning text-black fw-bold px-4 py-2" style={{background:'#FFC107', border:'none'}}>Đọc thêm</Link>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <img src={featuredNews.image} alt={featuredNews.title} className="w-100 rounded shadow" style={{height:400, objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-4 bg-light">
        <div className="container">
          <h2 className="fs-1 fw-bold text-dark text-center mb-5">Tin Tức Khác</h2>
          <div className="row g-4">
            {newsArticles.map((article) => (
              <div key={article.id} className="col-12 col-md-6 col-lg-4">
                <Link to={`/news/${article.id}`} className="text-decoration-none">
                  <div className="card shadow border-0 h-100">
                    <img src={article.image} alt={article.title} className="w-100 rounded-top" style={{aspectRatio:'4/3', objectFit:'cover'}} />
                    <div className="p-4">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="fw-medium text-warning small">{article.category}</span>
                        <span className="text-secondary small">{article.date}</span>
                      </div>
                      <h3 className="fs-5 fw-bold text-dark mb-2">{article.title}</h3>
                      <p className="text-secondary mb-0" style={{display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{article.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-dark fw-bold px-4 py-2">Xem thêm tin tức</button>
          </div>
        </div>
      </section>

      <section className="py-5 px-4" style={{background:'#FFC107'}}>
        <div className="container text-center">
          <h2 className="fs-1 fw-bold text-dark mb-3">📧 Đăng Ký Nhận Tin</h2>
          <p className="fs-4 text-dark mb-4 mx-auto" style={{maxWidth:600}}>
            Đăng ký để nhận thông tin về sản phẩm mới, khuyến mãi và tin tức mới nhất từ The Coffee House
          </p>
          <div className="d-flex flex-column flex-sm-row gap-2 mx-auto" style={{maxWidth:500}}>
            <input type="email" placeholder="Nhập email của bạn" className="form-control flex-fill" />
            <button className="btn btn-dark fw-bold px-4 py-2 flex-shrink-0">Đăng ký</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;