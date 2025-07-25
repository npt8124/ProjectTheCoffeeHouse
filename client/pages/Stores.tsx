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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight mb-4">
            Hệ Thống Cửa Hàng
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-relaxed max-w-[679px]">
            Tìm cửa hàng The Coffee House gần bạn nhất
          </p>
        </div>
      </section>

      {/* Store Stats */}
      <section className="py-16 px-4 bg-[#FFC107]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-[48px] font-bold text-black">100+</p>
              <p className="text-[20px] font-medium text-black">Cửa hàng</p>
            </div>
            <div>
              <p className="text-[48px] font-bold text-black">63</p>
              <p className="text-[20px] font-medium text-black">Tỉnh thành</p>
            </div>
            <div>
              <p className="text-[48px] font-bold text-black">1M+</p>
              <p className="text-[20px] font-medium text-black">Khách hàng</p>
            </div>
            <div>
              <p className="text-[48px] font-bold text-black">06:00-22:00</p>
              <p className="text-[20px] font-medium text-black">Giờ phục vụ</p>
            </div>
          </div>
        </div>
      </section>

      {/* City Filter */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[24px] font-bold text-black text-center mb-6">
            Chọn thành phố:
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCity === city
                    ? "bg-[#FFC107] text-black"
                    : "bg-white text-black border-2 border-gray-200 hover:border-[#FFC107]"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Store Listings */}
      <section className="py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[32px] font-bold text-black">
              Danh Sách Cửa Hàng{" "}
              {selectedCity !== "Tất cả" && `tại ${selectedCity}`}
            </h2>
            <p className="text-gray-600">
              Tìm thấy {filteredStores.length} cửa hàng
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto">
                    <img
                      src={store.image}
                      alt={store.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[24px] font-bold text-black mb-3">
                        {store.name}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <p className="flex items-start text-gray-700">
                          <span className="text-[#FFC107] mr-2">📍</span>
                          {store.address}
                        </p>
                        <p className="flex items-center text-gray-700">
                          <span className="text-[#FFC107] mr-2">📞</span>
                          {store.phone}
                        </p>
                        <p className="flex items-center text-gray-700">
                          <span className="text-[#FFC107] mr-2">🕒</span>
                          {store.hours}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {store.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-[#FFC107] text-black py-2 px-4 rounded-lg font-medium hover:bg-[#FFB300] transition-colors">
                          Chỉ đường
                        </button>
                        <button className="flex-1 bg-[#212529] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#343a40] transition-colors">
                          Gọi điện
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locator CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[32px] font-bold text-black mb-6">
            Không tìm thấy cửa hàng gần bạn?
          </h2>
          <p className="text-[20px] text-gray-700 mb-8 max-w-[600px] mx-auto">
            Chúng tôi đang mở rộng hệ thống cửa hàng. Hãy để lại thông tin để
            được thông báo khi có cửa hàng mới gần bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto">
            <input
              type="text"
              placeholder="Nhập khu vực bạn mong muốn"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-[#FFC107]"
            />
            <button className="bg-[#FFC107] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#FFB300] transition-colors">
              Gửi yêu cầu
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stores;
