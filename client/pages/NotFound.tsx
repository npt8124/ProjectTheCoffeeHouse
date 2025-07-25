import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center" style={{minHeight:500}}>
        <div className="text-center">
          <h1 className="display-1 fw-bold mb-4 text-dark">404</h1>
          <p className="fs-2 fw-normal mb-4 text-dark">Không tìm thấy trang bạn yêu cầu</p>
          <Link
            to="/"
            className="btn btn-warning text-black fw-medium fs-4 px-5 py-3"
            style={{background:'#FFC107', border:'none'}}
          >
            Quay về Trang chủ
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;