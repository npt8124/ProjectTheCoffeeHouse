import React from "react";
import Layout from "../components/Layout";

const About = () => {
  const features = [
    {
      icon: "☕",
      title: "Chất lượng hàng đầu",
      description:
        "Chúng tôi lựa chọn nguồn nguyên liệu cà phê và trà chất lượng cao, rang xay và pha chế chuẩn mực.",
    },
    {
      icon: "🌱",
      title: "Không gian truyền cảm hứng",
      description:
        "Không chỉ là nơi uống cà phê, mà là nơi học tập, làm việc, sáng tạo và chia sẻ.",
    },
    {
      icon: "💛",
      title: "Phục vụ tận tâm",
      description: "Đội ngũ nhân viên luôn niềm nở, tận tình để khách hàng cảm thấy như ở nhà.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="position-relative overflow-hidden" style={{height:397}}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c01e866677125fc95dd6f924e3ee81f46fc2062?width=2892"
          alt="Coffee shop interior"
          className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
          style={{zIndex: 1, height: 397, objectFit: 'cover'}}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{zIndex: 2, height: 397, background: 'rgba(0,0,0,0.65)'}}></div>
        <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-white px-3" style={{zIndex: 3, height: 397}}>
          <h1 className="fw-bold mb-3 pt-5" style={{fontSize: 48, lineHeight: 1.1}}>Giới thiệu</h1>
          <p className="mb-4 mx-auto" style={{fontSize: 22, maxWidth: 700}}>
            Câu chuyện về sứ mệnh của The Coffee House
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5 px-4">
        <div className="container">
          <h2 className="fs-1 fw-bold text-dark text-center mb-5">Về The Coffee House</h2>
          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <p className="fs-4 fw-normal text-dark text-justify">
                The Coffee House là nơi kết nối con người, nơi mà từng tách cà phê là cầu nối giữa cảm xúc, sáng tạo và cuộc sống bận rộn. Chúng tôi không chỉ phục vụ cà phê, mà còn mang đến trải nghiệm không gian thân thiện, hiện đại và đầy cảm hứng.
              </p>
              <p className="fs-4 fw-normal text-dark text-justify">
                Thành lập từ năm 2014, The Coffee House đã nhanh chóng trở thành điểm đến quen thuộc của giới trẻ, nhân viên văn phòng và các gia đình.
              </p>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ccc200fdd69f98a2daf4595504c7c94a256f5f2?width=1235"
                alt="Coffee house interior space"
                className="w-100 rounded" style={{maxWidth:618, height:412, objectFit:'cover'}}
              />
            </div>
          </div>
          <hr className="mb-5" />
          <div className="row gy-4">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-md-4 text-center">
                <h3 className="fs-3 fw-bold text-dark mb-3">
                  {feature.icon} {feature.title}
                </h3>
                <p className="fs-5 fw-normal text-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
