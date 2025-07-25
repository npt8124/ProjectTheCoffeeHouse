import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";

const ProductDetail = () => {
  const { id } = useParams();

  // Sample product data - in real app this would come from API/database
  const products = {
    "ca-phe-den": {
      id: "ca-phe-den",
      name: "Cà Phê Đen",
      price: "25.000",
      originalPrice: "30.000",
      description:
        "Hương vị truyền thống, đậm đà khó quên. Được pha chế từ những hạt cà phê Robusta chất lượng cao, rang vừa tới để giữ nguyên hương vị đặc trưng.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/437718d6214232d7427270e3fbfe29eaff268cd6?width=548",
      category: "Cà Phê",
      ingredients: ["Cà phê Robusta 100%", "Đường", "Sữa đặc (tùy chọn)"],
      nutrition: {
        calories: "5 kcal",
        caffeine: "95mg",
        sugar: "0g",
      },
      sizes: [
        { name: "Size S", price: "25.000", volume: "200ml" },
        { name: "Size M", price: "30.000", volume: "300ml" },
        { name: "Size L", price: "35.000", volume: "450ml" },
      ],
    },
  };

  const product =
    products[id as keyof typeof products] || products["ca-phe-den"];

  const relatedProducts = [
    {
      id: "ca-phe-sua",
      name: "Cà Phê Sữa",
      price: "30.000",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f0c1e108cb9f6e3c8fb06a4a315d1bec26f5a009?width=548",
    },
    {
      id: "americano",
      name: "Americano",
      price: "35.000",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/95e79db57ee3651783dc31a2c124471b31e08986?width=548",
    },
    {
      id: "latte",
      name: "Latte",
      price: "45.000",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/20d7602a629db11d5deb85368b5365184cbe3e33?width=548",
    },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-3 px-4 bg-light">
        <div className="container">
          <nav className="small">
            <Link to="/" className="text-secondary text-decoration-none me-2">Trang chủ</Link>
            <span className="mx-1 text-muted">/</span>
            <Link to="/menu" className="text-secondary text-decoration-none me-2">Menu</Link>
            <span className="mx-1 text-muted">/</span>
            <span className="fw-bold text-dark">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-5 px-4">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Product Image */}
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
              <div className="w-100" style={{maxWidth:500}}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-100 rounded shadow"
                  style={{height:500, objectFit:'cover'}}
                />
              </div>
            </div>
            {/* Product Info */}
            <div className="col-12 col-lg-6">
              <span className="fw-medium text-warning fs-5">{product.category}</span>
              <h1 className="display-4 fw-bold text-dark mt-2">{product.name}</h1>
              <div className="d-flex align-items-baseline gap-3 my-3">
                <span className="fs-1 fw-bold text-warning">{product.price}đ</span>
                {product.originalPrice && (
                  <span className="fs-3 text-secondary text-decoration-line-through">{product.originalPrice}đ</span>
                )}
              </div>
              <p className="fs-5 text-dark mb-4">{product.description}</p>
              {/* Size Selection */}
              <div className="mb-4">
                <h3 className="fs-3 fw-bold text-dark mb-2">Chọn Size:</h3>
                <div className="row g-2">
                  {product.sizes.map((size, index) => (
                    <div key={index} className="col-12 col-sm-4">
                      <div className="border rounded p-3 text-center h-100">
                        <p className="fw-bold text-dark mb-1">{size.name}</p>
                        <p className="text-secondary mb-1">{size.volume}</p>
                        <p className="fw-bold text-warning mb-0">{size.price}đ</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Add to Cart */}
              <div className="d-flex gap-3 mb-4">
                <button className="btn btn-warning flex-fill text-black fw-bold fs-5 py-3" style={{background:'#FFC107', border:'none'}}>Thêm vào giỏ hàng</button>
                <button className="btn btn-dark fw-bold fs-5 py-3">Mua ngay</button>
              </div>
              {/* Product Details */}
              <div className="pt-4 border-top">
                <div className="mb-4">
                  <h3 className="fs-3 fw-bold text-dark mb-2">Thành phần:</h3>
                  <ul className="list-unstyled">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="d-flex align-items-center text-secondary mb-2 fs-6">
                        <span className="me-2" style={{width:8, height:8, background:'#FFC107', borderRadius:'50%', display:'inline-block'}}></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="fs-3 fw-bold text-dark mb-2">Thông tin dinh dưỡng:</h3>
                  <div className="row g-2">
                    <div className="col-4">
                      <div className="bg-light rounded text-center p-3">
                        <p className="fw-bold text-warning fs-5 mb-1">{product.nutrition.calories}</p>
                        <p className="text-secondary mb-0">Calories</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="bg-light rounded text-center p-3">
                        <p className="fw-bold text-warning fs-5 mb-1">{product.nutrition.caffeine}</p>
                        <p className="text-secondary mb-0">Caffeine</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="bg-light rounded text-center p-3">
                        <p className="fw-bold text-warning fs-5 mb-1">{product.nutrition.sugar}</p>
                        <p className="text-secondary mb-0">Đường</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-5 px-4 bg-light">
        <div className="container">
          <h2 className="fs-1 fw-bold text-dark text-center mb-5">Sản phẩm liên quan</h2>
          <div className="row g-4 justify-content-center">
            {relatedProducts.map((item) => (
              <div key={item.id} className="col-12 col-md-4">
                <Link to={`/product/${item.id}`} className="text-decoration-none">
                  <div className="card shadow border-0 h-100">
                    <div className="p-4">
                      <div className="mb-3 mx-auto rounded overflow-hidden" style={{width:'100%', aspectRatio:'1/1', maxWidth:300}}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-100 h-100 object-fit-cover"
                          style={{objectFit:'cover'}}
                        />
                      </div>
                      <h3 className="fs-4 fw-bold text-dark text-center mb-2">{item.name}</h3>
                      <p className="fs-5 fw-bold text-warning text-center mb-0">{item.price}đ</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
