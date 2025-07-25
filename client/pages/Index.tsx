import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Index = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Cà Phê Sữa",
      description: "Hương vị truyền thống, đậm đà khó quên.",
       image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/437718d6214232d7427270e3fbfe29eaff268cd6?width=548",
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
      <section className="position-relative overflow-hidden" style={{height: 397}}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892"
          alt="Coffee shop interior"
          className="w-100 h-100 position-absolute top-0 start-0"
          style={{zIndex: 1, height: 397, objectFit: 'cover'}}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{zIndex: 2, height: 397, background: 'rgba(0,0,0,0.65)'}}></div>
        <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-white px-3" style={{zIndex: 3, height: 397}}>
          <h1 className="fw-bold mb-3 pt-5" style={{fontSize: 48, lineHeight: 1.1}}>
            Hương Vị Cà Phê Đích Thực
          </h1>
          <p className="mb-4 mx-auto" style={{fontSize: 22, maxWidth: 700}}>
            Cùng The Coffee House nâng niu từng khoảnh khắc
          </p>
          <Link
            to="/menu"
            className="btn btn-warning fw-bold px-4 py-2"
            style={{fontSize: 24, borderRadius: 8, fontWeight: 400}}
          >
            Khám Phá Menu
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 px-3">
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{fontSize: 32, lineHeight: '30px', color: '#000'}}>
            Về Chúng Tôi
          </h2>
          <p className="mx-auto" style={{fontSize: 20, color: '#000', maxWidth: 1048}}>
            The Coffee House không chỉ là một quán cà phê, mà là một trải nghiệm. Chúng tôi mang đến không gian hiện đại, thân thiện cùng những ly cà phê chất lượng, phục vụ cho giới trẻ Việt.
          </p>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-5 px-3 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{fontSize: 32, color: '#000', lineHeight: '30px'}}>
            Menu Nổi Bật
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            {featuredItems.map((item) => (
              <div key={item.id} className="col d-flex align-items-stretch">
                <div className="card shadow-sm border-0 w-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="mb-3" style={{width: 180, height: 180, overflow: 'hidden', borderRadius: 16}}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-100 h-100 object-fit-cover rounded"
                        style={{objectFit: 'cover', width: '100%', height: '100%'}}
                      />
                    </div>
                    <h3 className="fw-bold text-center mb-2" style={{fontSize: 24, color: '#000'}}>{item.name}</h3>
                    <p className="text-center mb-0" style={{fontSize: 18, color: '#000'}}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="bg-warning py-4">
        <div className="container text-center">
          <h2 className="fw-bold mb-2" style={{fontSize: 28, color: '#000', lineHeight: '30px'}}>
            🎉 Ưu Đãi Đặc Biệt
          </h2>
          <p className="mb-0 mx-auto" style={{fontSize: 18, color: '#000', maxWidth: 900}}>
            Mua 1 tặng 1 cho tất cả đơn hàng từ 2 ly trở lên. Áp dụng khung giờ 14h - 18h hôm nay!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-4">
        <div className="container text-center">
          <h2 className="fw-bold mb-2" style={{fontSize: 22, color: '#000', lineHeight: '30px'}}>
            Liên Hệ Chúng Tôi
          </h2>
          <div>
            <p className="mb-1 fw-bold" style={{color: '#000'}}>
              Email: <span className="fw-normal">support@thecoffeehouse.vn</span>
            </p>
            <p className="mb-0 fw-bold" style={{color: '#000'}}>
              Hotline: <span className="fw-normal">1800 6936 (miễn phí)</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;