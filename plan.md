# 🍖 الجبلاوي للمشويات والفراخ

موقع احترافي لمطعم "الجبلاوي" متخصص في المشويات والفراخ والوجبات الشرقية.

---

# 🎨 Design System

## Colors

```css
Primary Gold: #D4A017
Dark Black: #111111
Secondary Black: #1B1B1B
Primary Red: #C62828
Light Text: #FFFFFF
Gray Text: #BDBDBD
```

---

## Fonts
 
* Oi ( for heading titles and sub titles and add shadow-oi , oi-regular class  )
* Alexandria ( for body)

---

## General Style

* Dark Theme
* Premium Restaurant Style
* RTL Layout
* Glassmorphism
* Soft Shadows
* Smooth Animations
* Fully Responsive

---

# 📂 Folder Structure

```txt
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── videos/
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Features/
│   ├── PopularDishes/
│   ├── Menu/
│   ├── Offers/
│   ├── About/
│   ├── Stats/
│   ├── Testimonials/
│   ├── Branches/
│   ├── Contact/
│   └── Footer/
│
├── pages/
│   ├── Home.jsx
│   ├── Dishes.jsx
│   └── About.jsx
│   └── Menu.jsx
│   └── Offers.jsx
│   └── Testimonials.jsx
│   └── Branches.jsx
│   └── Contact.jsx
└── App.jsx
```

---

# Sections

---

# 1. Navbar

## Links

* الرئيسية
* المنيو
* العروض
* من نحن
* آراء العملاء
* الفروع
* تواصل معنا

### CTA

زر:

```txt
اطلب الآن
```

### Features

* Sticky Navbar
* Blur Effect
* Scroll Animation with GSAP

---

# 2. Hero Section

## Background

* Smoke effect
* Fire particles
* Dark gradient

## Content

Title:

```txt
الجبلاوي للمشويات والفراخ
```
Logo :

![Logo](logo.png)

Description:

```txt
استمتع بأشهى المشويات واللحوم الطازجة المحضرة يومياً بمذاق أصيل لا يُنسى.
```

Buttons:

```txt
تصفح المنيو
اطلب الآن
```

## Right Side

صورة كبيرة لمشكل مشويات.

---

# 3. Features Section

Cards

### مشويات طازجة

🔥

---

### توصيل سريع

🚚

---

### أجود أنواع اللحوم

🥩

---

### جودة ومذاق استثنائي

⭐

---

# 4. Popular Dishes

Grid Layout

## العناصر

* مشكل مشويات
* كباب
* كفتة
* شيش طاووق
* نصف فرخة مشوية
* طرب

كل Card يحتوي على:

* صورة
* اسم المنتج
* وصف
* سعر
* زر اطلب الآن

---

# 5. Menu Section

Tabs

```txt
المشويات
الفراخ
السندويتشات
المقبلات
السلطات
المشروبات
```

Menu Card

```js
{
name:"",
description:"",
price:"",
image:""
}
```

---

# 6. Offers Section

Slider

العروض:

### عرض العائلة

* كيلو مشويات
* نصف فرخة
* أرز
* سلطة
* مشروبات

---

### عرض الأصحاب

* 2 شيش طاووق
* كفتة
* بطاطس
* مشروبات

---

# 7. About Section

عنوان:

```txt
لماذا الجبلاوي؟
```

المميزات:

* لحوم طازجة يومياً
* تتبيلة خاصة
* جودة عالية
* خدمة سريعة

صورة كبيرة للشيف أو اللوجو.

---

# 8. Statistics Section

Animated Counter

```txt
+10 سنوات خبرة

+50 ألف عميل

+100 ألف طلب
```

---

# 9. Testimonials

Carousel

كل بطاقة تحتوي على:

* صورة العميل
* الاسم
* التقييم
* التعليق

---

# 10. Gallery

Masonry Layout

صور:

* كباب
* كفتة
* شيش طاووق
* نصف فرخة
* مشكل مشويات
* أرز شرقي
* سلطات

Effects:

* Zoom
* Overlay

---

# 11. Branches

Cards

كل فرع يحتوي على:

```txt
العنوان
رقم الهاتف
مواعيد العمل
```

Google Map Embed

---

# 12. Contact Section

Inputs

```txt
الاسم
رقم الهاتف
البريد الإلكتروني
الرسالة
```

Buttons

* WhatsApp
* Facebook
* Instagram

---

# 13. Footer

يحتوي على:

* اللوجو
* روابط سريعة
* بيانات التواصل
* السوشيال ميديا

---

# ✨ Animations

AOS

GSAP

Hover Effects

Fade Up

Scale

Parallax

---

# 🛠 Recommended Stack

## Frontend

* React
* Vite
* TailwindCSS
* SwiperJS
* React Icons


---

# Future Features

## Online Ordering

إضافة المنتجات للسلة.

---

## Checkout

الدفع عند الاستلام.

---


## WhatsApp Integration

إرسال الطلبات مباشرة عبر واتساب.



## Dark Premium Experience

الهوية البصرية تعتمد على:

* الأسود الداكن
* الأحمر الناري
* الذهبي المستوحى من شعار الجبلاوي
* الدخان والنيران والأجواء الشرقية الفاخرة

## some Effects

* add effect with gsap When navigating between pages, mountains appear on the right and left sides, closing over each other like a curtain, then opening onto the new page. 
* add effect with AOS when hover on any element 
* add effect with GSAP when scroll and when loading the page 



```
```
