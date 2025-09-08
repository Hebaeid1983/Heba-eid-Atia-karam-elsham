# مطعم كرم الشام – موقع React + Tailwind

موقع احترافي رباعي الصفحات: **الرئيسية، المنيو، من نحن، اتصل بنا**. مبني باستخدام **Vite + React Router + Tailwind CSS** ومهيأ ليكون **متجاوباً 100%**.

## اللقطة السريعة
- تصميم عربي RTL وخط Cairo
- ألوان دافئة (ذهبي) وهوية بسيطة
- صفحة منيو مكونة من:
  - منتجات مميزة (صور من Unsplash + أسعار حقيقية مأخوذة من القائمة)
  - صور المنيو الكاملة التي زوّدتمونا بها (ثلاث صور بدقة عالية)
- صفحة تواصل بها نموذج + خريطة Google Embed
- جاهز للنشر على GitHub Pages / Netlify / Vercel

## البدء محلياً
```bash
npm i
npm run dev
```
ثم افتح العنوان الذي يظهر في الطرفية.

## البناء للإنتاج
```bash
npm run build
npm run preview
```

## بنية المشروع
```
karam-elshem-restaurant/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ src/
   ├─ main.jsx, App.jsx, main.css
   ├─ pages/ (Home, Menu, About, Contact)
   └─ assets/
      ├─ menu-1.png, menu-2.png, menu-3.png
      └─ menuData.js
```

## تعديل المحتوى
- غيّر عناصر الصفحة الرئيسية من `Home.jsx`.
- أضف/عدّل أصناف المنيو داخل `src/assets/menuData.js` (كل عنصر: اسم، سعر، صورة).
- صور المنيو الكاملة موجودة في `src/assets/` ويتم عرضها كما هي.

## نشر على GitHub
1. أنشئ مستودعاً جديداً وادفع الملفات:
   ```bash
   git init
   git add .
   git commit -m "feat: initial restaurant website"
   git branch -M main
   git remote add origin <YOUR_REPO_URL>
   git push -u origin main
   ```
2. Netlify/Vercel أسهل للنشر:
   - **Netlify**: أمر البناء `npm run build` — مجلد الإخراج `dist`.
   - **Vercel**: Framework = Vite — Build Command = `npm run build` — Output = `dist`.

> لأي تعديلات لونية أو شعارات، أرسل الهوية البصرية وسأدمجها فوراً.