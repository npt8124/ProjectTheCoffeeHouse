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
      <div className="min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[60px] font-bold mb-6 text-black">404</h1>
          <p className="text-[28px] font-normal mb-8 text-black">
            Không tìm thấy trang bạn yêu cầu
          </p>
          <Link
            to="/"
            className="bg-[#FFC107] text-black text-[20px] font-medium px-8 py-3 rounded-lg hover:bg-[#FFB300] transition-colors inline-block"
          >
            Quay về Trang chủ
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
