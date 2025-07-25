import React, { useState } from "react";
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

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCloseMenu = () => setShowMobileMenu(false);

  return (
    <>
      <nav className="navbar navbar-expand-md" style={{ background: '#212529', height: 69 }}>
        <div className="container-xl d-flex justify-content-between align-items-center px-4 px-md-5">
          <Link to="/" className="navbar-brand text-white fw-bold" style={{ fontSize: 18, lineHeight: '30px' }}>
            The Coffee House
          </Link>

          <button
            className="navbar-toggler text-white border-0 d-md-none"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setShowMobileMenu(true)}
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect y="5" width="24" height="2" rx="1" fill="currentColor"/><rect y="11" width="24" height="2" rx="1" fill="currentColor"/><rect y="17" width="24" height="2" rx="1" fill="currentColor"/></svg>
          </button>

          <div className="collapse navbar-collapse d-none d-md-block" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-center gap-2 gap-lg-4" style={{ columnGap: 31 }}>
              {navItems.map((item) => (
                <li className="nav-item" key={item.path} style={{ height: 69 }}>
                  <Link
                    to={item.path}
                    className={`nav-link fw-bold${location.pathname === item.path ? ' text-white active' : ' text-secondary'}`}
                    style={{ fontSize: 16, lineHeight: '30px', height: 69, display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>


      {showMobileMenu && (
        <>

          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{zIndex: 1999, background: 'transparent'}}
            onClick={handleCloseMenu}
          />

          <div
            className="position-absolute w-100 d-flex justify-content-end"
            style={{ top: 69, left: 0, zIndex: 2000 }}
          >
            <div
              className="shadow rounded-4"
              style={{
                background: 'rgba(33,37,41,0.98)',
                minWidth: 320,
                maxWidth: 400,
                marginRight: 16,
                padding: 16,
                borderRadius: 16,
              }}
              onClick={e => e.stopPropagation()}
            >
              <div className="row row-cols-3 g-2">
                {navItems.map((item) => (
                  <div className="col text-center d-flex align-items-center justify-content-center" style={{height: 44}} key={item.path}>
                    <Link
                      to={item.path}
                      onClick={handleCloseMenu}
                      style={{
                        color: '#d1d5db',
                        fontSize: 15,
                        fontWeight: 600,
                        borderRadius: 8,
                        display: 'block',
                        padding: '4px 0',
                        textDecoration: 'none',
                        transition: 'background 0.2s, color 0.2s',
                      }}
                      className="dropdown-item-mobile"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;