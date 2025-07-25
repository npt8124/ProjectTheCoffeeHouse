import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Cà Phê Sữa",
      description: "Hương vị truyền thống, đậm đà khó quên.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/437718d6214232d7427270e3fbfe29eaff268cd6?width=548",
    },
    {
      id: 2,
      name: "Cà Phê Đen",
      description: "Đậm vị cà phê nguyên chất, tỉnh táo mỗi ngày.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f0c1e108cb9f6e3c8fb06a4a315d1bec26f5a009?width=548",
    },
    {
      id: 3,
      name: "Olong Tứ Quý Vải",
      description: "Trà thanh mát kết hợp vị vải thơm ngon dịu nhẹ.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fb62b7380d41b61c46a6ccf1afba19b0420d5ace?width=540",
    },
    {
      id: 4,
      name: "Trà Đào Cam Sả",
      description: "Giải nhiệt với vị trà đào cam sả độc đáo, mát lạnh.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/738c8035f041e35c4c77c7f2d31ff163b30bcff5?width=548",
    },
    {
      id: 5,
      name: "Matcha Đào Đá Xay",
      description: "Thức uống mát lạnh, thơm vị đào và matchat Nhật Bản.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4189082daa6e60c56c74f3a53fd481a582de3e4d?width=548",
    },
    {
      id: 6,
      name: "Socola Đá Xay",
      description: "Ngọt ngào, béo ngậy và mát lạnh cho mùa hè.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ff1065683657f73bb39e9e81ad716b0619bda7a?width=548",
    },
    {
      id: 7,
      name: "Latte Coconut",
      description: "Latte cùng với cốt dừa thơm ngon béo ngậy.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/20d7602a629db11d5deb85368b5365184cbe3e33?width=548",
    },
    {
      id: 8,
      name: "A-mê Quất",
      description: "Sảng khoái mùa hè cùng Americano mix quất.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/95e79db57ee3651783dc31a2c124471b31e08986?width=548",
    },
    {
      id: 9,
      name: "Dâu Phô Mai",
      description: "Dâu xay nhuyễn cùng lớp phô mai béo ngọt khó cưỡng.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/415fe665e72ce8cf2cb1046d16fd8d0515ec2122?width=548",
    },
  ];

  return (
    <Layout>

      <section className="position-relative overflow-hidden" style={{height:397}}>
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892"
            alt="Coffee shop interior"
            className="w-100 h-100"
            style={{objectFit:'cover', height: 397}}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{background:'rgba(0,0,0,0.65)'}}></div>
        </div>
        <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-white px-3" style={{zIndex: 3, height: 397}}>
          <h1 className="fw-bold mb-3 pt-5" style={{fontSize: 48, lineHeight: 1.1}}>Menu Đầy Đủ</h1>
          <p className="mb-4 mx-auto" style={{fontSize: 22, maxWidth: 700}}>
            Thưởng thức trọn vẹn hương vị tại The Coffee House
          </p>
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="container">
          <h2 className="fs-1 fw-bold text-dark text-center mb-5">Thực Đơn</h2>
          <div className="row justify-content-center gx-3 gy-3" style={{maxWidth:1200, margin:'0 auto'}}>
            {menuItems.map((item) => (
              <Link key={item.id} to="/product/ca-phe-den" className="col-6 col-lg-4 d-flex align-items-stretch text-decoration-none">
                <div className="card w-100 shadow border-0 hover-card">
                  <div className="p-3">
                    <div className="mx-auto mb-3 overflow-hidden rounded image-container">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-100 h-100 image-zoom"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className="fs-5 fw-bold text-dark text-center mb-2 item-title">{item.name}</h3>
                    <p className="fs-6 fw-normal text-dark text-center">{item.description}</p>
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

export default Menu;