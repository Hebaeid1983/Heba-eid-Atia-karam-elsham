import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-primary">اتصل بنا</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <p>📍 العنوان: القاهرة، مصر</p>
          <p>📞 الهاتف: 0123456789</p>
          <p>✉ البريد الإلكتروني: info@karamelshem.com</p>
          <p>⏰ مواعيد العمل: 10 صباحاً – 12 منتصف الليل</p>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <div>
            <label className="block mb-1 font-semibold">الاسم</label>
            <input type="text" placeholder="اسمك" className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">البريد الإلكتروني</label>
            <input type="email" placeholder="email@example.com" className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">الرسالة</label>
            <textarea placeholder="اكتب رسالتك هنا" className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>
          <button type="submit" className="bg-primary hover-bg-primary text-primary px-6 py-2 rounded-xl font-semibold shadow-md transition">
            إرسال الرسالة
          </button>
        </form>
      </div>
    </div>
  );
}
