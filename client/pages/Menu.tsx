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
          <h1 className="text-[60px] font-bold leading-[30px] mb-10">
            Menu Đầy Đủ
          </h1>
          <p className="text-[28px] font-normal leading-[30px] max-w-[706px]">
            Thưởng thức trọn vẹn hương vị tại The Coffee House
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[32px] font-bold leading-[30px] text-black text-center mb-12">
            Thực Đơn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1372px] mx-auto">
            {menuItems.map((item) => (
              <Link key={item.id} to="/product/ca-phe-den" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white/3">
                  <div className="p-6">
                    <div className="w-[274px] h-[274px] mx-auto mb-6 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="text-[32px] font-bold leading-[30px] text-black text-center mb-4 group-hover:text-[#FFC107] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[24px] font-normal leading-[30px] text-black text-center">
                      {item.description}
                    </p>
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
