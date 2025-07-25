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
      description:
        "Đội ngũ nhân viên luôn niềm nở, tận t��nh để khách hàng cảm thấy như ở nhà.",
    },
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
          <h1 className="text-[60px] font-bold leading-[30px] mb-4">
            Giới thiệu
          </h1>
          <p className="text-[28px] font-normal leading-[30px] max-w-[679px]">
            Câu chuyện về sứ mệnh của The Coffee House
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[32px] font-bold leading-[30px] text-black text-center mb-12">
            Về The Coffee House
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-[22px] font-normal leading-[30px] text-black text-justify">
                The Coffee House là nơi kết nối con người, nơi mà từng tách cà
                phê là cầu nối giữa cảm xúc, sáng tạo và cuộc sống bận rộn.
                Chúng tôi không chỉ phục vụ cà phê, mà còn mang đến trải nghiệm
                không gian thân thiện, hiện đại và đầy cảm hứng.
              </p>
              <p className="text-[22px] font-normal leading-[30px] text-black text-justify">
                Thành lập từ năm 2014, The Coffee House đã nhanh chóng trở thành
                điểm đến quen thuộc của giới trẻ, nhân viên văn phòng và các gia
                đình.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ccc200fdd69f98a2daf4595504c7c94a256f5f2?width=1235"
                alt="Coffee house interior space"
                className="w-full max-w-[618px] h-[412px] object-cover rounded-[28px]"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-black mb-12"></div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-[24px] font-bold leading-[30px] text-black mb-4">
                  {feature.icon} {feature.title}
                </h3>
                <p className="text-[20px] font-normal leading-[30px] text-black">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
