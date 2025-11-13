"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* خلفية */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bggg.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-white/85 via-white/70 to-transparent"></div>
      </div>

      {/* المحتوى */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full pt-16">

          {/* ✅ صورة الشخصية في الجهة المقابلة */}
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] flex-shrink-0 mb-10 md:mb-0">
            <Image
              src="/kidyy.png" // <-- غيّري هذا إلى اسم صورتك داخل مجلد public
              alt="شخصية كيدي"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* ✅ النصوص والزر */}
          <div className="max-w-2xl ml-auto text-right" dir="rtl">
            <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                كيديـلانــــد
              </span>
            </h1>
            <p className="text-xl font-bold text-cyan-700 mb-4 leading-relaxed pt-6">
              الخطوة الأولى تصنع الفرق
            </p>

            {/* زر التحميل */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 pt-8 justify-end">
              <a
                href="/app-arm64-v8a-release.apk"
                download
                className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-pink-700 transition-all transform hover:scale-105 text-center whitespace-nowrap"
              >
                 حمل التطبيق الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
