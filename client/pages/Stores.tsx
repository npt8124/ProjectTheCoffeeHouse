import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";

const Stores = () => {
  const [selectedCity, setSelectedCity] = useState("Tất cả");

  const cities = [
    "Tất cả",
    "Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Cần Thơ",
    "Hải Phòng",
    "Nha Trang",
  ];

  const stores = [
    {
      id: 1,
      name: "The Coffee House Nguyễn Huệ",
      address: "135 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
      phone: "028 3822 1234",
      hours: "06:00 - 22:00",
      city: "Hồ Chí Minh",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3ccc200fdd69f98a2daf4595504c7c94a256f5f2?width=1235",
      features: [
        "WiFi miễn phí",
        "Không gian làm việc",
        "Bãi đỗ xe",
        "Giao hàng",
      ],
    },
    {
      id: 2,
      name: "The Coffee House Landmark 81",
      address: "Tầng G, Landmark 81, Bình Thạnh, TP. Hồ Chí Minh",
      phone: "028 3844 5678",
      hours: "07:00 - 23:00",
      city: "Hồ Chí Minh",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892",
      features: [
        "WiFi miễn phí",
        "View panorama",
        "Không gian VIP",
        "Meeting room",
      ],
    },
    {
      id: 3,
      name: "The Coffee House Hoàn Kiếm",
      address: "25 Hàng Bài, Hoàn Kiếm, Hà Nội",
      phone: "024 3826 9999",
      hours: "06:30 - 22:30",
      city: "Hà Nội",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3ccc200fdd69f98a2daf4595504c7c94a256f5f2?width=1235",
      features: ["WiFi miễn phí", "Kiến trúc cổ điển", "Sân vườn", "Giao hàng"],
    },
    {
      id: 4,
      name: "The Coffee House Lotte Hà Nội",
      address: "Tầng 1, Lotte Center, Ba Đình, Hà Nội",
      phone: "024 3333 1111",
      hours: "07:00 - 22:00",
      city: "Hà Nội",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892",
      features: [
        "WiFi miễn phí",
        "Không gian hiện đại",
        "Bãi đỗ xe",
        "Drive-thru",
      ],
    },
    {
      id: 5,
      name: "The Coffee House Bạch Đằng",
      address: "180 Bạch Đằng, Hải Châu, Đà Nẵng",
      phone: "0236 3888 2222",
      hours: "06:00 - 22:00",
      city: "Đà Nẵng",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3ccc200fdd69f98a2daf4595504c7c94a256f5f2?width=1235",
      features: [
        "WiFi miễn phí",
        "View sông Hàn",
        "Không gian mở",
        "Giao hàng",
      ],
    },
    {
      id: 6,
      name: "The Coffee House Ninh Kiều",
      address: "78 Nguyễn Văn Cừ, Ninh Kiều, Cần Thơ",
      phone: "0292 3777 3333",
      hours: "06:00 - 21:30",
      city: "Cần Thơ",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892",
      features: [
        "WiFi miễn phí",
        "Phong cách miền Tây",
        "Sân vườn",
        "Giao hàng",
      ],
    },
  ];

  const filteredStores =
    selectedCity === "Tất cả"
      ? stores
      : stores.filter((store) => store.city === selectedCity);

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
          <h1 className="fw-bold mb-3 pt-5" style={{fontSize: 48, lineHeight: 1.1}}>Cửa hàng</h1>
          <p className="mb-4 mx-auto" style={{fontSize: 22, maxWidth: 700}}>
            Tìm cửa hàng The Coffee House gần bạn nhất
          </p>
        </div>
      </section>

      <section className="py-5 px-4" style={{background:'#FFC107'}}>
        <div className="container">
          <div className="row text-center gy-4">
            <div className="col-6 col-md-3">
              <p className="display-4 fw-bold text-black mb-1">100+</p>
              <p className="fs-5 fw-medium text-black">Cửa hàng</p>
            </div>
            <div className="col-6 col-md-3">
              <p className="display-4 fw-bold text-black mb-1">63</p>
              <p className="fs-5 fw-medium text-black">Tỉnh thành</p>
            </div>
            <div className="col-6 col-md-3">
              <p className="display-4 fw-bold text-black mb-1">1M+</p>
              <p className="fs-5 fw-medium text-black">Khách hàng</p>
            </div>
            <div className="col-6 col-md-3">
              <p className="display-4 fw-bold text-black mb-1">06:00-22:00</p>
              <p className="fs-5 fw-medium text-black">Giờ phục vụ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 bg-light">
        <div className="container">
          <h2 className="fs-3 fw-bold text-dark text-center mb-4">Chọn thành phố:</h2>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`btn px-4 py-2 rounded-pill fw-medium ${selectedCity === city ? 'btn-warning text-black' : 'btn-outline-secondary text-black'}`}
                style={selectedCity === city ? {background:'#FFC107', border:'none'} : {}}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
            <h2 className="fs-1 fw-bold text-dark mb-0">
              Danh Sách Cửa Hàng {selectedCity !== "Tất cả" && `tại ${selectedCity}`}
            </h2>
            <p className="text-secondary mb-0">Tìm thấy {filteredStores.length} cửa hàng</p>
          </div>
          <div className="row gy-4">
            {filteredStores.map((store) => (
              <div key={store.id} className="col-12 col-lg-6">
                <div className="card shadow border-0 h-100">
                  <div className="row g-0 h-100">
                    <div className="col-12 col-md-5">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-100 h-100 object-fit-cover rounded-start"
                        style={{objectFit:'cover', minHeight:200}}
                      />
                    </div>
                    <div className="col-12 col-md-7 p-4 d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="fs-3 fw-bold text-dark mb-2">{store.name}</h3>
                        <div className="mb-3">
                          <p className="d-flex align-items-start text-secondary mb-1">
                            <span className="me-2" style={{color:'#FFC107'}}>📍</span>
                            {store.address}
                          </p>
                          <p className="d-flex align-items-center text-secondary mb-1">
                            <span className="me-2" style={{color:'#FFC107'}}>📞</span>
                            {store.phone}
                          </p>
                          <p className="d-flex align-items-center text-secondary mb-1">
                            <span className="me-2" style={{color:'#FFC107'}}>🕒</span>
                            {store.hours}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {store.features.map((feature, index) => (
                            <span key={index} className="badge bg-light text-secondary border border-1 px-3 py-2 rounded-pill">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="d-flex gap-2">
                          <button className="btn btn-warning flex-fill text-black fw-medium" style={{background:'#FFC107', border:'none'}}>Chỉ đường</button>
                          <button className="btn btn-dark flex-fill fw-medium">Gọi điện</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 px-4 bg-light">
        <div className="container text-center">
          <h2 className="fs-1 fw-bold text-dark mb-4">Không tìm thấy cửa hàng gần bạn?</h2>
          <p className="fs-4 text-secondary mb-4 mx-auto" style={{maxWidth:600}}>
            Chúng tôi đang mở rộng hệ thống cửa hàng. Hãy để lại thông tin để được thông báo khi có cửa hàng mới gần bạn.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-2 mx-auto" style={{maxWidth:500}}>
            <input
              type="text"
              placeholder="Nhập khu vực bạn mong muốn"
              className="form-control flex-fill px-4 py-3 rounded-pill border-2 border-secondary"
            />
            <button className="btn btn-warning fw-bold px-4 py-3 text-black flex-shrink-0" style={{background:'#FFC107', border:'none'}}>
              Gửi yêu cầu
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stores;