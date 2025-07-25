import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Order = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cà Phê Đen",
      size: "Size M",
      price: 30000,
      quantity: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/437718d6214232d7427270e3fbfe29eaff268cd6?width=548",
      note: "",
    },
    {
      id: 2,
      name: "Matcha Đào Đá Xay",
      size: "Size L",
      price: 45000,
      quantity: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4189082daa6e60c56c74f3a53fd481a582de3e4d?width=548",
      note: "Ít đường",
    },
  ]);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = deliveryMethod === "delivery" ? 15000 : 0;
  const discount = 0; // Can be calculated based on promotions
  const total = subtotal + deliveryFee - discount;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-[36px] font-bold text-black">Đặt Hàng</h1>
            <Link
              to="/menu"
              className="bg-[#FFC107] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#FFB300] transition-colors"
            >
              Thêm món
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Method */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-[24px] font-bold text-black mb-4">
                Phương thức nhận hàng
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${deliveryMethod === "delivery" ? "border-[#FFC107] bg-[#FFC107]/10" : "border-gray-200"}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    value="delivery"
                    checked={deliveryMethod === "delivery"}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center space-x-3">
                    <span className="text-[24px]">🚚</span>
                    <div>
                      <p className="font-bold text-black">Giao hàng tận nơi</p>
                      <p className="text-gray-600">Phí giao hàng: 15.000đ</p>
                    </div>
                  </div>
                </label>
                <label
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${deliveryMethod === "pickup" ? "border-[#FFC107] bg-[#FFC107]/10" : "border-gray-200"}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    value="pickup"
                    checked={deliveryMethod === "pickup"}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center space-x-3">
                    <span className="text-[24px]">🏪</span>
                    <div>
                      <p className="font-bold text-black">Nhận tại cửa hàng</p>
                      <p className="text-gray-600">Miễn phí</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Cart Items */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-[24px] font-bold text-black mb-6">
                Giỏ hàng của bạn
              </h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 border rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-black">{item.name}</h3>
                      <p className="text-gray-600">{item.size}</p>
                      {item.note && (
                        <p className="text-sm text-gray-500">
                          Ghi chú: {item.note}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="font-bold min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#FFC107]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-[24px] font-bold text-black mb-6">
                Thông tin khách hàng
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FFC107]"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FFC107]"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FFC107]"
                    placeholder="Nhập email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {deliveryMethod === "delivery"
                      ? "Địa chỉ giao hàng *"
                      : "Cửa hàng nhận"}
                  </label>
                  {deliveryMethod === "delivery" ? (
                    <input
                      type="text"
                      value={customerInfo.address}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          address: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FFC107]"
                      placeholder="Nhập địa chỉ giao hàng"
                    />
                  ) : (
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FFC107]">
                      <option>Chọn cửa hàng</option>
                      <option>The Coffee House Nguyễn Huệ</option>
                      <option>The Coffee House Landmark 81</option>
                      <option>The Coffee House Hoàn Kiếm</option>
                    </select>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Ghi chú đơn hàng
                </label>
                <textarea
                  value={customerInfo.note}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, note: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FFC107]"
                  placeholder="Thêm ghi chú cho đơn hàng..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-[24px] font-bold text-black mb-4">
                Phương thức thanh toán
              </h2>
              <div className="space-y-3">
                <label
                  className={`border-2 rounded-lg p-3 cursor-pointer transition-colors flex items-center space-x-3 ${paymentMethod === "cash" ? "border-[#FFC107] bg-[#FFC107]/10" : "border-gray-200"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-[20px]">💵</span>
                  <span className="font-medium">Tiền mặt</span>
                </label>
                <label
                  className={`border-2 rounded-lg p-3 cursor-pointer transition-colors flex items-center space-x-3 ${paymentMethod === "momo" ? "border-[#FFC107] bg-[#FFC107]/10" : "border-gray-200"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="momo"
                    checked={paymentMethod === "momo"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-[20px]">📱</span>
                  <span className="font-medium">MoMo</span>
                </label>
                <label
                  className={`border-2 rounded-lg p-3 cursor-pointer transition-colors flex items-center space-x-3 ${paymentMethod === "bank" ? "border-[#FFC107] bg-[#FFC107]/10" : "border-gray-200"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-[20px]">🏦</span>
                  <span className="font-medium">Chuyển khoản</span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-[24px] font-bold text-black mb-4">
                Tổng đơn hàng
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Tạm tính:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí giao hàng:</span>
                  <span>{formatPrice(deliveryFee)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Giảm giá:</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <hr />
                <div className="flex justify-between text-[20px] font-bold">
                  <span>Tổng cộng:</span>
                  <span className="text-[#FFC107]">{formatPrice(total)}</span>
                </div>
              </div>

              <button className="w-full bg-[#FFC107] text-black text-[20px] font-bold py-4 rounded-lg hover:bg-[#FFB300] transition-colors mt-6">
                Đặt hàng ngay
              </button>

              <p className="text-sm text-gray-600 text-center mt-4">
                Bằng việc đặt hàng, bạn đồng ý với{" "}
                <Link to="/terms" className="text-[#FFC107] hover:underline">
                  Điều khoản sử dụng
                </Link>{" "}
                của The Coffee House
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
