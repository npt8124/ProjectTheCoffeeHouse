import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Trang chủ" },
    { path: "/about", label: "Giới thiệu" },
    { path: "/menu", label: "Menu" },
    { path: "/news", label: "Tin tức" },
    { path: "/promotions", label: "Khuyến mãi" },
    { path: "/stores", label: "Cửa hàng" },
    { path: "/order", label: "Đặt hàng" },
    { path: "/contact", label: "Liên hệ" },
  ];

  return (
    <nav className="bg-[#212529] h-[69px] flex items-center">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-base leading-[30px]">
          The Coffee House
        </Link>

        <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-[31px]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm lg:text-base font-bold leading-[30px] h-[69px] flex items-center transition-colors ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button - simplified for now */}
        <div className="md:hidden">
          <Link to="/menu" className="text-white text-sm font-bold">
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
