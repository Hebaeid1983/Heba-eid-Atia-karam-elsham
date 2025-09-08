import React from "react";

export default function About() {
  return (
    <div className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-red-700 mb-4">عن مطعم كرم الشام</h2>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
        تأسس مطعم كرم الشام عام 2000 ليكون الوجهة الأولى لعشاق المأكولات الشامية في مصر.
        نقدم أشهى الأطباق المحضرة من مكونات طازجة وبوصفات تقليدية تعكس كرم الضيافة الشامي.
        هدفنا دائمًا أن نمنح عملاءنا تجربة طعام لا تُنسى.
      </p>
      <img 
        src="https://yalla3orood.com/wp-content/uploads/2022/07/1-%D9%85%D9%86%D9%8A%D9%88-%D9%83%D8%B1%D9%85-%D8%A7%D9%84%D8%B4%D8%A7%D9%85-1024x730.webp" 
        alt="عن مطعم كرم الشام" 
        className="mx-auto mt-6 rounded-2xl shadow-lg w-3/4 md:w-1/2"
      />
    </div>
  );
}
