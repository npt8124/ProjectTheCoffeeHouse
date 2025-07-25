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
            Chương Trình Khuyến Mãi
          </h1>
          <p className="text-[28px] font-normal leading-[30px] max-w-[679px]">
            Ưu đãi đặc biệt dành riêng cho bạn!
          </p>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[32px] font-bold leading-[30px] text-black text-center mb-12">
            Ưu Đãi Hiện Có
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1326px] mx-auto">
            {promotions.map((promo) => (
              <div key={promo.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white/3">
                  <div
                    className={
                      promo.name === "Trà Đào Cam Sả"
                        ? "px-6 pt-6 pb-[57px]"
                        : promo.name === "Dâu Phô Mai"
                          ? "px-6 pt-6 pb-[57px]"
                          : "p-6"
                    }
                  >
                    <div className="w-[274px] h-[274px] mx-auto mb-6 overflow-hidden rounded-lg">
                      <img
                        src={promo.image}
                        alt={promo.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-[32px] font-bold leading-[30px] text-black text-center mb-4">
                      {promo.name}
                    </h3>
                    <p className="text-[20px] font-normal leading-[30px] text-black text-center">
                      {promo.description}
                    </p>
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
