import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    (isActive ? "font-bold text-amber-300" : "") + " nav-link";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-red-800 text-white px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <span className="font-extrabold text-lg md:text-xl flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpfebf-wRinEsuK_OcHglI9kskPsPx2ZzKw&s"
              alt="شعار المطعم"
              className="w-10 h-10 object-cover rounded-full"
            />
            كرم الشام
          </span>

          {/* زر الهامبرغر للجوال */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* روابط سطح المكتب */}
          <div className="hidden md:flex gap-6">
            <NavLink to="/" className={linkStyle}>الرئيسية</NavLink>
            <NavLink to="/menu" className={linkStyle}>المنيو</NavLink>
            <NavLink to="/About" className={linkStyle}>عن كرم الشام</NavLink>
            <NavLink to="/contact" className={linkStyle}>اتصل بنا</NavLink>
          </div>
        </div>

        {/* قائمة الجوال */}
        {open && (
          <div className="md:hidden mt-3 flex flex-col gap-2 border-t border-white/20 pt-2">
            <NavLink to="/" className={linkStyle} onClick={() => setOpen(false)}>الرئيسية</NavLink>
            <NavLink to="/menu" className={linkStyle} onClick={() => setOpen(false)}>المنيو</NavLink>
            <NavLink to="/About" className={linkStyle} onClick={() => setOpen(false)}>عن كرم الشام</NavLink>
            <NavLink to="/contact" className={linkStyle} onClick={() => setOpen(false)}>اتصل بنا</NavLink>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-red-900 text-white mt-8 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpfebf-wRinEsuK_OcHglI9kskPsPx2ZzKw&s"
              alt="شعار المطعم"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-bold">كرم الشام</span>
          </div>
          <p>© 2025 مطعم كرم الشام. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <span>📍 القاهرة، مصر</span>
            <span>📞 0123456789</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
