import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
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
          <h1 className="fw-bold mb-3 pt-5" style={{fontSize: 48, lineHeight: 1.1}}>Liên Hệ</h1>
          <p className="mb-4 mx-auto" style={{fontSize: 22, maxWidth: 700}}>
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-5 px-4">
        <div className="container text-center">
          <h2 className="fs-1 fw-bold text-dark mb-5">
            Thông Tin Liên Hệ
          </h2>
          <div className="row justify-content-center gx-5 gy-4" style={{maxWidth:800, margin:'0 auto'}}>
            <div className="col-12 col-md-6 text-center">
              <h3 className="fs-3 fw-bold text-dark mb-3">📧 Email</h3>
              <p className="fs-5 fw-normal text-dark">support@thecoffeehouse.vn</p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h3 className="fs-3 fw-bold text-dark mb-3">📞 Hotline</h3>
              <p className="fs-5 fw-normal text-dark">1800 6936 (miễn phí)</p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h3 className="fs-3 fw-bold text-dark mb-3">🕒 Giờ Hoạt Động</h3>
              <p className="fs-5 fw-normal text-dark">Thứ 2 - Chủ Nhật: 6:00 - 22:00</p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h3 className="fs-3 fw-bold text-dark mb-3">📍 Địa Chỉ</h3>
              <p className="fs-5 fw-normal text-dark">Toàn quốc - Nhiều chi nhánh</p>
            </div>
          </div>
          <div className="mt-5 p-4 bg-light rounded">
            <h3 className="fs-2 fw-bold text-dark mb-4">Gửi Tin Nhắn Cho Chúng Tôi</h3>
            <p className="fs-5 fw-normal text-dark mb-4">
              Chúng tôi rất mong nhận được phản hồi từ bạn. Hãy liên hệ với chúng tôi qua email hoặc hotline để được hỗ trợ tốt nhất.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="mailto:support@thecoffeehouse.vn"
                className="btn btn-warning text-black px-4 py-2 fw-medium fs-5"
                style={{background:'#FFC107', border:'none'}}
              >
                Gửi Email
              </a>
              <a
                href="tel:18006936"
                className="btn btn-dark text-white px-4 py-2 fw-medium fs-5"
                style={{background:'#212529', border:'none'}}
              >
                Gọi Hotline
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
