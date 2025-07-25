import Layout from "../components/Layout";

const Contact = () => {
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
          <h1 className="text-[60px] font-bold leading-[30px] mb-10">Liên Hệ</h1>
          <p className="text-[28px] font-normal leading-[30px] max-w-[679px]">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[32px] font-bold leading-[30px] text-black mb-12">
            Thông Tin Liên Hệ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[800px] mx-auto">
            <div className="text-center">
              <h3 className="text-[24px] font-bold leading-[30px] text-black mb-4">
                📧 Email
              </h3>
              <p className="text-[20px] font-normal leading-[30px] text-black">
                support@thecoffeehouse.vn
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-[24px] font-bold leading-[30px] text-black mb-4">
                📞 Hotline
              </h3>
              <p className="text-[20px] font-normal leading-[30px] text-black">
                1800 6936 (miễn phí)
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-[24px] font-bold leading-[30px] text-black mb-4">
                🕒 Giờ Hoạt Động
              </h3>
              <p className="text-[20px] font-normal leading-[30px] text-black">
                Thứ 2 - Chủ Nhật: 6:00 - 22:00
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-[24px] font-bold leading-[30px] text-black mb-4">
                📍 Địa Chỉ
              </h3>
              <p className="text-[20px] font-normal leading-[30px] text-black">
                Toàn quốc - Nhiều chi nhánh
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-[28px] font-bold leading-[30px] text-black mb-6">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h3>
            <p className="text-[18px] font-normal leading-[30px] text-black mb-8">
              Chúng tôi rất mong nhận được phản hồi từ bạn. Hãy liên hệ với
              chúng tôi qua email hoặc hotline để được hỗ trợ tốt nhất.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:support@thecoffeehouse.vn"
                className="bg-[#FFC107] text-black text-[18px] font-medium leading-[30px] px-8 py-3 rounded-lg hover:bg-[#FFB300] transition-colors"
              >
                Gửi Email
              </a>
              <a
                href="tel:18006936"
                className="bg-[#212529] text-white text-[18px] font-medium leading-[30px] px-8 py-3 rounded-lg hover:bg-[#343a40] transition-colors"
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
