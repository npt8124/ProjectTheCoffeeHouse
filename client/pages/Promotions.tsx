import React from "react";
import Layout from "../components/Layout";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      name: "Trà Đào Cam Sả",
      description:
        "Mua 1 ly, tặng 1 ly cùng loại. Áp dụng từ 14h–18h hằng ngày.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be9ee5944f20e9e8bae2ecf2f03329ea3f0086a5?width=576",
    },
    {
      id: 2,
      name: "Matcha Đào Đá Xay",
      description:
        "Giảm ngay 30% khi đặt hàng online qua ứng dụng The Coffee House.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8cebbdf3f348ff996806e0814e6454c073f7adfd?width=576",
    },
    {
      id: 3,
      name: "Combo Cà Phê Sữa + A-Mê Quất",
      description: "Chỉ 59.000đ cho combo 2 ly – tiết kiệm đến 20%!",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/437718d6214232d7427270e3fbfe29eaff268cd6?width=548",
    },
    {
      id: 4,
      name: "Latte Coconut - Thức Uống Mới",
      description:
        "Giảm 20% trong tuần đầu ra mắt! Thưởng thức hương vị mới lạ.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/20d7602a629db11d5deb85368b5365184cbe3e33?width=548",
    },
    {
      id: 5,
      name: "Dâu Phô Mai",
      description: "Mua 2 ly giảm ngay 15%. Áp dụng tại cửa hàng toàn quốc.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/415fe665e72ce8cf2cb1046d16fd8d0515ec2122?width=548",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
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
             <h1 className="fw-bold mb-3 pt-5" style={{fontSize: 48, lineHeight: 1.1}}>Chương Trình Khuyến Mãi</h1>
             <p className="mb-4 mx-auto" style={{fontSize: 22, maxWidth: 700}}>
               Đừng bỏ lỡ các ưu đãi hấp dẫn từ The Coffee House
             </p>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-5 px-4">
        <div className="container">
          <h2 className="fs-1 fw-bold text-dark text-center mb-5">Ưu Đãi Hiện Có</h2>
          <div className="row justify-content-center gx-4 gy-4" style={{maxWidth:1326, margin:'0 auto'}}>
            {promotions.map((promo) => (
              <div key={promo.id} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="card w-100 shadow border-0">
                  <div className="p-4">
                    <div className="mx-auto mb-4 overflow-hidden rounded" style={{width:274, height:274}}>
                      <img
                        src={promo.image}
                        alt={promo.name}
                        className="w-100 h-100 object-fit-cover"
                        style={{objectFit:'cover'}}
                      />
                    </div>
                    <h3 className="fs-2 fw-bold text-dark text-center mb-3">{promo.name}</h3>
                    <p className="fs-5 fw-normal text-dark text-center">{promo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Promotions;
