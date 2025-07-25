import React from "react";
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
      <section className="py-4 bg-white border-bottom">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="fw-bold mb-0" style={{fontSize: 32, color: '#212529'}}>Đặt Hàng</h1>
            <Link
              to="/menu"
              className="btn btn-warning fw-bold rounded px-4 py-2 text-black"
              style={{background:'#FFC107', border:'none', fontSize: 16}}
            >
              Thêm món
            </Link>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-2">
          {/* Giao hàng tận nơi */}
          <div className="col-12 col-md-6">
            <label
              className={`form-control d-flex align-items-start gap-3 p-3 border-2 rounded h-100 ${
                deliveryMethod === "delivery" ? "border-warning bg-warning bg-opacity-10" : ""
              }`}
              style={
                deliveryMethod === "delivery"
                  ? { borderColor: "#FFC107", background: "rgba(255,193,7,0.1)" }
                  : {}
              }
            >
              <input
                type="radio"
                name="delivery"
                value="delivery"
                checked={deliveryMethod === "delivery"}
                onChange={(e) => setDeliveryMethod(e.target.value)}
                className="form-check-input mt-1"
              />
              <span className="fs-3">🚚</span>
              <div className="d-flex flex-column">
                <span className="fw-bold">Giao hàng tận nơi</span>
                <span className="text-secondary" style={{ fontSize: 14 }}>
                  Phí giao hàng: 15.000đ
                </span>
              </div>
            </label>
          </div>

          {/* Nhận tại cửa hàng */}
          <div className="col-12 col-md-6">
            <label
              className={`form-control d-flex align-items-start gap-3 p-3 border-2 rounded h-100 ${
                deliveryMethod === "pickup" ? "border-warning bg-warning bg-opacity-10" : ""
              }`}
              style={
                deliveryMethod === "pickup"
                  ? { borderColor: "#FFC107", background: "rgba(255,193,7,0.1)" }
                  : {}
              }
            >
              <input
                type="radio"
                name="delivery"
                value="pickup"
                checked={deliveryMethod === "pickup"}
                onChange={(e) => setDeliveryMethod(e.target.value)}
                className="form-check-input mt-1"
              />
              <span className="fs-3">🏪</span>
              <div className="d-flex flex-column">
                <span className="fw-bold">Nhận tại cửa hàng</span>
                <span className="text-secondary" style={{ fontSize: 14 }}>
                  Miễn phí
                </span>
              </div>
            </label>
          </div>
        </div>

            </div>

            {/* Cart Items */}
            <div className="bg-white rounded shadow-sm p-4">
              <h2 className="fs-5 fw-bold text-dark mb-3">Giỏ hàng của bạn</h2>
              <div className="d-flex flex-column gap-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex align-items-center gap-3 p-3 border rounded bg-light">
                    <img src={item.image} alt={item.name} className="rounded" style={{width:56, height:56, objectFit:'cover'}} />
                    <div className="flex-fill">
                      <h3 className="fw-bold text-dark mb-1" style={{fontSize:16}}>{item.name}</h3>
                      <p className="text-secondary mb-1" style={{fontSize:14}}>{item.size}</p>
                      {item.note && <p className="small text-muted mb-0">Ghi chú: {item.note}</p>}
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn btn-light rounded-circle px-2 py-0 border">-</button>
                      <span className="fw-bold text-center" style={{minWidth:20}}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-light rounded-circle px-2 py-0 border">+</button>
                    </div>
                    <div className="text-end">
                      <p className="fw-bold text-warning mb-1" style={{fontSize:16}}>{formatPrice(item.price * item.quantity)}</p>
                      <button onClick={() => removeItem(item.id)} className="btn btn-link text-danger p-0 small">Xóa</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-white rounded shadow-sm p-4">
              <h2 className="fs-5 fw-bold text-dark mb-3">Thông tin khách hàng</h2>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">Họ và tên *</label>
                  <input type="text" value={customerInfo.name} onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} className="form-control rounded" placeholder="Nhập họ và tên" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">Số điện thoại *</label>
                  <input type="tel" value={customerInfo.phone} onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} className="form-control rounded" placeholder="Nhập số điện thoại" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">Email</label>
                  <input type="email" value={customerInfo.email} onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })} className="form-control rounded" placeholder="Nhập email" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">{deliveryMethod === "delivery" ? "Địa chỉ giao hàng *" : "Cửa hàng nhận"}</label>
                  {deliveryMethod === "delivery" ? (
                    <input type="text" value={customerInfo.address} onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} className="form-control rounded" placeholder="Nhập địa chỉ giao hàng" />
                  ) : (
                    <select className="form-select rounded">
                      <option>Chọn cửa hàng</option>
                      <option>The Coffee House Nguyễn Huệ</option>
                      <option>The Coffee House Landmark 81</option>
                      <option>The Coffee House Hoàn Kiếm</option>
                    </select>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <label className="form-label fw-medium">Ghi chú đơn hàng</label>
                <textarea value={customerInfo.note} onChange={(e) => setCustomerInfo({ ...customerInfo, note: e.target.value })} rows={3} className="form-control rounded" placeholder="Thêm ghi chú cho đơn hàng..."></textarea>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-4 d-flex flex-column gap-4">
            {/* Payment Method */}
            <div className="bg-white rounded shadow-sm p-4">
              <h2 className="fs-5 fw-bold text-dark mb-3">Phương thức thanh toán</h2>
              <div className="d-flex flex-column gap-2">
                <label className={`form-control d-flex align-items-center gap-2 p-3 border-2 rounded ${paymentMethod === "cash" ? 'border-warning bg-warning bg-opacity-10' : ''}`}
                  style={paymentMethod === "cash" ? {borderColor:'#FFC107', background:'rgba(255,193,7,0.1)'} : {}}>
                  <input type="radio" name="payment" value="cash" checked={paymentMethod === "cash"} onChange={(e) => setPaymentMethod(e.target.value)} className="form-check-input me-2" />
                  <span className="fs-5">💵</span>
                  <span className="fw-medium">Tiền mặt</span>
                </label>
                <label className={`form-control d-flex align-items-center gap-2 p-3 border-2 rounded ${paymentMethod === "momo" ? 'border-warning bg-warning bg-opacity-10' : ''}`}
                  style={paymentMethod === "momo" ? {borderColor:'#FFC107', background:'rgba(255,193,7,0.1)'} : {}}>
                  <input type="radio" name="payment" value="momo" checked={paymentMethod === "momo"} onChange={(e) => setPaymentMethod(e.target.value)} className="form-check-input me-2" />
                  <span className="fs-5">📱</span>
                  <span className="fw-medium">MoMo</span>
                </label>
                <label className={`form-control d-flex align-items-center gap-2 p-3 border-2 rounded ${paymentMethod === "bank" ? 'border-warning bg-warning bg-opacity-10' : ''}`}
                  style={paymentMethod === "bank" ? {borderColor:'#FFC107', background:'rgba(255,193,7,0.1)'} : {}}>
                  <input type="radio" name="payment" value="bank" checked={paymentMethod === "bank"} onChange={(e) => setPaymentMethod(e.target.value)} className="form-check-input me-2" />
                  <span className="fs-5">🏦</span>
                  <span className="fw-medium">Chuyển khoản</span>
                </label>
              </div>
            </div>
            {/* Order Summary */}
            <div className="bg-white rounded shadow-sm p-4">
              <h2 className="fs-5 fw-bold text-dark mb-3">Tổng đơn hàng</h2>
              <div className="d-flex flex-column gap-2 mb-3">
                <div className="d-flex justify-content-between">
                  <span>Tạm tính :</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Phí giao hàng :</span>
                  <span>{formatPrice(deliveryFee)}</span>
                </div>
                {discount > 0 && (
                  <div className="d-flex justify-content-between text-success">
                    <span>Giảm giá :</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <hr />
                <div className="d-flex justify-content-between fs-5 fw-bold">
                  <span>Tổng cộng :</span>
                  <span className="text-warning" style={{fontSize:20}}>{formatPrice(total)}</span>
                </div>
              </div>
              <button className="btn btn-warning w-100 fw-bold fs-5 py-3 mt-2 text-black rounded" style={{background:'#FFC107', border:'none'}}>Đặt hàng ngay</button>
              <p className="small text-secondary text-center mt-3">
                Bằng việc đặt hàng, bạn đồng ý với{' '}
                <Link to="/terms" className="text-warning text-decoration-underline">Điều khoản sử dụng</Link>{' '}
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
