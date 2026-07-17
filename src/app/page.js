// 📄 src/app/page.js
"use client";

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-850 antialiased selection:bg-emerald-50">
      {/* 🌿 ヘッダーの配置 */}
      <Header />

      <main>
        {/* 🌸 ① メインビジュアルエリア（ヒーローセクション） */}
        <section className="relative h-screen w-full flex items-center justify-center bg-stone-900 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-emerald-50 via-stone-50 to-amber-50/60 overflow-hidden">
            {/* ✨ 爽やかさを引き立てるソフトな光の演出（PC時のみ表示） */}
            <div className="hidden md:block absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-emerald-200/30 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-amber-200/20 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

            {/* 🌟 画面全体（横100%・縦100%）をフルに使うコンテナ */}
            <div className="w-full h-full">

              {/* 📱【スマホ（SP）版】：画面の縦幅いっぱいに2枚を上下50%ずつ綺麗に並べるグリッド */}
              <div className="grid grid-cols-1 w-full h-full md:hidden">

                {/* SPの1枚目（上半分） */}
                <div className="relative w-full h-full bg-stone-100 border-b border-white/20">
                  <Image
                    src="/images/top_img01.png"
                    alt="フルールマルシェ メインビジュアル 01"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* SPの2枚目（下半分） */}
                <div className="relative w-full h-full bg-stone-100">
                  <Image
                    src="/images/top_img02.png"
                    alt="フルールマルシェ メインビジュアル 02"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

              </div>

              {/* 💻【パソコン（PC）版】：70%と50%の大胆な重ね合わせデザイン */}
              <div className="hidden md:flex w-full h-full max-w-[1600px] mx-auto px-12 items-center justify-end relative">

                {/* 📸 PC：1枚目の画像（大：70%サイズ・左奥） */}
                <div className="absolute left-12 top-[12%] w-[70%] aspect-video rounded-3xl overflow-hidden border border-emerald-900/5 shadow-[0_20px_50px_rgba(4,47,31,0.05)] transform -rotate-1 hover:rotate-0 hover:scale-101 transition-all duration-700 ease-out z-10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/5 via-transparent to-transparent z-10 mix-blend-multiply" />
                  <Image
                    src="/images/top_img01.png"
                    alt="フルールマルシェ メインビジュアル 01"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* 📸 PC：2枚目の画像（小：50%サイズ・右下手前） */}
                <div className="absolute right-12 bottom-[12%] w-[50%] aspect-video rounded-3xl overflow-hidden border border-emerald-900/5 shadow-[0_40px_80px_rgba(4,47,31,0.14)] transform rotate-1.5 hover:rotate-0 hover:scale-101 transition-all duration-700 ease-out z-20 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/10 via-transparent to-transparent z-10 mix-blend-multiply" />
                  <Image
                    src="/images/top_img02.png"
                    alt="フルールマルシェ メインビジュアル 02"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

              </div>

            </div>

            {/* ✨ 全体を自然に馴染ませるグラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-stone-50/10 pointer-events-none z-30" />
          </div>

          {/* 中央の華やかなキャッチコピー */}
          <div className="relative z-30 text-center px-6 py-8 sm:py-10 max-w-[95vw] md:max-w-3xl mx-auto flex flex-col items-center justify-center bg-white/40 rounded-2xl border border-white/20 shadow-sm">

            {/* ブランドネーム（最上部） */}
            <span
              className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-emerald-900 block mb-3 sm:mb-4"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Fleur Marchē Original Flower Shop
            </span>

            {/* 🌟 メインタイトル */}
            <h1
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[0.1em] sm:tracking-[0.15em] leading-tight break-keep text-emerald-950"
              style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
            >
              日常に溶け込む、小さなお花の市場。
            </h1>

            {/* 🌟 サブタイトル */}
            <p
              className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal tracking-[0.1em] sm:tracking-[0.15em] leading-relaxed break-keep text-stone-700 mt-4 sm:mt-5 max-w-2xl"
              style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
            >
              フランスのマルシェを訪れるときのような、<br className="sm:hidden" />胸の高鳴りを。
            </p>

            {/* ボタンエリア */}
            <div className="pt-6 sm:pt-8">
              <a
                href="#concept"
                className="inline-flex items-center justify-center bg-emerald-900 hover:bg-emerald-950 text-white text-xs font-bold tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300 shadow-md"
                style={{ fontFamily: "'Lora', sans-serif" }}
              >
                VIEW MORE
              </a>
            </div>
          </div>

          {/* 🌟 スクロール表示エリア */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-none">
            <span
              className="text-[9px] sm:text-[10px] text-white sm:text-emerald-950 tracking-[0.3em] uppercase font-semibold"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Scroll
            </span>
            <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-white sm:from-emerald-950 to-transparent animate-bounce" />
          </div>
        </section>

        {/* ✨ コンセプト（導入）セクション */}
        <section id="concept" className="py-20 sm:py-32 bg-stone-50/50 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto px-8 flex flex-col items-center">

            {/* セクションの小さな英語見出し */}
            <span
              className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-emerald-800/70 block mb-3 sm:mb-4"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Our Concept
            </span>

            {/* 🌟 メインの日本語見出し */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest text-emerald-950 mb-10 sm:mb-14 text-center break-words leading-relaxed"
              style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
            >
              日常に溶け込む、<br className="sm:hidden" />小さなお花の市場。
            </h2>

            {/* 🌟 ストーリー文章エリア */}
            <div
              className="text-sm sm:text-base text-stone-700 tracking-wide leading-loose space-y-6 sm:space-y-8 max-w-xl mx-auto text-center break-words"
              style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
            >
              <p>
                フルールマルシェとは、フランス語で「お花の市場」という意味。<br />
                フランスでは、朝からたくさんの人々がマルシェに繰り出し、<br className="hidden sm:block" />
                新鮮な食材や、日用品を買い求めます。
              </p>

              <p>
                自分の目で見て選び、街の活気や人との繋がりを感じる大切な場所。<br />
                私たちもそんなマルシェのように、誰もが気軽に立ち寄りやすく、<br className="hidden sm:block" />
                地域の皆様の日常に欠かせないお店でありたいと願っています。
              </p>

              <div className="w-12 h-px bg-emerald-900/20 mx-auto my-8 sm:my-10" />

              <p className="font-medium text-emerald-900 leading-relaxed">
                特別な日だけじゃなく、<br className="sm:hidden" />なんでもない日常にこそお花を。
              </p>

              <p>
                あなたの暮らしを彩る、心に寄り添うような<br className="hidden sm:block" />
                植物たちを取り揃えてお待ちしています。
              </p>
            </div>

          </div>
        </section>

        {/* ✨ Instagram フィードセクション */}
        {/* 💡 修正ポイント：背景を bg-emerald-50/30 から コンセプトと同じ bg-stone-50/50 へ変更 */}
        <section id="instagram-feed" className="py-24 sm:py-32 bg-stone-50/50 text-center relative overflow-hidden">

          {/* 💡 修正ポイント：光の演出もコンセプトと同じ淡いエメラルド（-top-24 -left-24 / bg-emerald-100/20）に揃えて統一 */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

            {/* セクション見出し */}
            <div className="mb-12 sm:mb-16 space-y-2">
              <span
                className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-emerald-800/70 block"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Instagram
              </span>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest text-emerald-950"
                style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
              >
                店舗最新情報
              </h2>
              <p
                className="text-xs text-stone-500 tracking-wider pt-1"
                style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
              >
                各店舗の入荷状況やおすすめのブーケを日々更新中
              </p>
            </div>

            {/* 🌟 アカウント配置コンテナ：SPは縦1列 / PC(lg)は横2列並び */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">

              {/* 📸 1. 八乙女店 アカウントカード */}
              <div className="bg-white p-5 sm:p-7 rounded-3xl border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.03)] space-y-5">

                {/* アカウントヘッダー部 */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[2px]">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <span className="text-[10px] font-bold text-emerald-900" style={{ fontFamily: "'Lora', serif" }}>FM</span>
                      </div>
                    </div>
                    <div>
                      <h3
                        className="text-sm font-bold text-stone-800 tracking-wide"
                        style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                      >
                        フルールマルシェ 八乙女店
                      </h3>
                      <p
                        className="text-xs text-stone-400 tracking-normal"
                        style={{ fontFamily: "'Lora', sans-serif" }}
                      >
                        @fleurmarche_yaotome
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-800 hover:text-white border border-emerald-800/30 bg-transparent hover:bg-emerald-800 px-4 py-1.5 rounded-full transition-all duration-300"
                    style={{ fontFamily: "'Lora', sans-serif" }}
                  >
                    Follow
                  </a>
                </div>

                {/* フィード写真（2×2） */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[1, 2, 3, 4].map((id) => (
                    <div key={id} className="relative aspect-square rounded-2xl overflow-hidden bg-stone-50 group cursor-pointer shadow-2xs">
                      <div
                        className="w-full h-full bg-emerald-900/5 group-hover:scale-103 transition-transform duration-700 ease-out flex items-center justify-center text-stone-300 text-xs"
                        style={{ fontFamily: "'Lora', sans-serif" }}
                      >
                        photo
                      </div>
                      <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span
                          className="text-white text-xs tracking-widest font-medium bg-black/10 px-3 py-1.5 rounded-full backdrop-blur-xs"
                          style={{ fontFamily: "'Lora', sans-serif" }}
                        >
                          View Post
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 📸 2. AER（アエル）店 アカウントカード */}
              <div className="bg-white p-5 sm:p-7 rounded-3xl border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.03)] space-y-5">

                {/* アカウントヘッダー部 */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[2px]">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <span className="text-[10px] font-bold text-emerald-900" style={{ fontFamily: "'Lora', serif" }}>FM</span>
                      </div>
                    </div>
                    <div>
                      <h3
                        className="text-sm font-bold text-stone-800 tracking-wide"
                        style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                      >
                        フルールマルシェ AER店
                      </h3>
                      <p
                        className="text-xs text-stone-400 tracking-normal"
                        style={{ fontFamily: "'Lora', sans-serif" }}
                      >
                        @fleurmarche_aer
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-800 hover:text-white border border-emerald-800/30 bg-transparent hover:bg-emerald-800 px-4 py-1.5 rounded-full transition-all duration-300"
                    style={{ fontFamily: "'Lora', sans-serif" }}
                  >
                    Follow
                  </a>
                </div>

                {/* フィード写真（2×2） */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[1, 2, 3, 4].map((id) => (
                    <div key={id} className="relative aspect-square rounded-2xl overflow-hidden bg-stone-50 group cursor-pointer shadow-2xs">
                      <div
                        className="w-full h-full bg-emerald-900/5 group-hover:scale-103 transition-transform duration-700 ease-out flex items-center justify-center text-stone-300 text-xs"
                        style={{ fontFamily: "'Lora', sans-serif" }}
                      >
                        photo
                      </div>
                      <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span
                          className="text-white text-xs tracking-widest font-medium bg-black/10 px-3 py-1.5 rounded-full backdrop-blur-xs"
                          style={{ fontFamily: "'Lora', sans-serif" }}
                        >
                          View Post
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ✨ SHOP INFO / 店舗情報セクション */}
        {/* 💡 修正ポイント：bg-stone-50/60 から Instagramと同じ bg-emerald-50/30 へ変更 */}
        <section id="shop" className="py-24 sm:py-32 bg-emerald-50/30 text-center relative overflow-hidden">

          {/* 💡 修正ポイント：右下に柔らかな光のアクセントを追加し、セクションの奥行きと華やかさを統一 */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">

            {/* セクション見出し */}
            <div className="text-center mb-16 space-y-2">
              <span
                className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-emerald-800/70 block"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Shop Information
              </span>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest text-emerald-950"
                style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
              >
                店舗情報
              </h2>
              <p
                className="text-xs text-stone-500 tracking-wider pt-1"
                style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
              >
                個性あふれる2つのコンセプトショップ
              </p>
            </div>

            {/* 🌟 店舗配置コンテナ：SPは縦1列 / PC(lg)は綺麗に2列並び */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-stretch">

              {/* 🏢 1. 八乙女店 カード */}
              <div className="bg-white rounded-3xl border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.02)] overflow-hidden flex flex-col justify-between">

                {/* 📸 八乙女店 画像エリア */}
                <div className="relative w-full aspect-[16/10] bg-stone-100">
                  <Image
                    src="/images/yaotome.jpg"
                    alt="Fleur Marchē 八乙女店 店舗外観"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>

                {/* コンテンツ本文 */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 text-left">
                  <div>
                    {/* カードヘッダー */}
                    <div className="border-l-4 border-emerald-800 pl-4 mb-5">
                      <h3
                        className="text-lg font-bold text-stone-900 tracking-wide mb-1"
                        style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                      >
                        Fleur Marchē 〈八乙女店〉
                      </h3>
                      <p
                        className="text-[10px] text-stone-400 tracking-wider uppercase"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        FLEUR MARCHE YAOTOME
                      </p>
                    </div>

                    {/* 住所・アクセス */}
                    <div
                      className="space-y-1.5 text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed"
                      style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                    >
                      <p className="text-stone-400 font-medium text-[11px] sm:text-xs">
                        <span style={{ fontFamily: "'Lora', sans-serif" }}>〒981-3135</span>
                      </p>
                      <p className="font-semibold text-stone-800 text-sm sm:text-base">宮城県仙台市泉区八乙女中央一丁目4-20</p>
                      <p className="text-stone-500 font-medium">プレジュール八乙女 1F（八乙女駅 徒歩2分）</p>
                    </div>

                    {/* 詳細情報テーブル */}
                    <div
                      className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 text-xs space-y-3"
                      style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-16 font-bold text-emerald-800 tracking-wide block border-r border-stone-200/80">営業時間</span>
                        <span className="font-semibold text-stone-800">
                          <span style={{ fontFamily: "'Lora', sans-serif" }}>10:00 〜 17:00</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-16 font-bold text-emerald-800 tracking-wide block border-r border-stone-200/80">休業日</span>
                        <span className="text-stone-600 font-medium leading-relaxed">
                          木曜日・日曜日 <span className="text-[10px] text-stone-400 block sm:inline sm:ml-1">（※繁忙期を除く）</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-16 font-bold text-emerald-800 tracking-wide block border-r border-stone-200/80">駐車場</span>
                        <div className="text-stone-600 font-medium">
                          <p className="text-amber-800 font-semibold">専用駐車場なし</p>
                          <p className="text-[10px] text-stone-400 mt-0.5">※最寄りのコインパーキングをご利用ください。</p>
                        </div>
                      </div>
                    </div>

                    {/* TEL / FAX & E-MAIL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
                      <div className="bg-stone-50/50 p-3 rounded-lg border border-stone-200/30">
                        <span className="block text-[10px] font-bold text-emerald-800 tracking-wider mb-0.5" style={{ fontFamily: "'Lora', serif" }}>TEL</span>
                        <a
                          href="tel:0227256225"
                          className="text-sm font-bold text-stone-800 hover:text-emerald-700 transition-colors"
                          style={{ fontFamily: "'Lora', sans-serif" }}
                        >
                          022-725-6225
                        </a>
                      </div>
                      <div className="bg-stone-50/50 p-3 rounded-lg border border-stone-200/30">
                        <span className="block text-[10px] font-bold text-stone-500 tracking-wider mb-0.5" style={{ fontFamily: "'Lora', serif" }}>FAX</span>
                        <span className="text-sm font-bold text-stone-800" style={{ fontFamily: "'Lora', sans-serif" }}>022-725-6235</span>
                      </div>
                    </div>

                    <div className="bg-stone-50/50 p-3 rounded-lg border border-stone-200/30 text-xs mt-3 overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="block text-[9px] font-bold text-stone-500 tracking-wider mb-0.5" style={{ fontFamily: "'Lora', serif" }}>E-MAIL</span>
                      <a
                        href="mailto:fleur.marche.yaotome@kimotoseika.com"
                        className="font-semibold text-stone-700 hover:text-emerald-700 transition-colors"
                        style={{ fontFamily: "'Lora', sans-serif" }}
                      >
                        fleur.marche.yaotome@kimotoseika.com
                      </a>
                    </div>
                  </div>

                  {/* Google Map ボタン */}
                  <div className="pt-6 border-t border-stone-100">
                    <a
                      href="https://maps.google.com/?q=宮城県仙台市泉区八乙女中央一丁目4-20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold py-3.5 rounded-xl tracking-widest shadow-xs transition-all hover:shadow-md"
                      style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                    >
                      🗺️ GOOGLE MAPでルートを見る
                    </a>
                  </div>
                </div>
              </div>

              {/* 🏢 2. 仙台AER（アエル）店 カード */}
              <div className="bg-white rounded-3xl border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.02)] overflow-hidden flex flex-col justify-between">

                {/* 📸 AER店 画像エリア */}
                <div className="relative w-full aspect-[16/10] bg-stone-100">
                  <Image
                    src="/images/aer.jpg"
                    alt="Fleur Marchē 仙台AER店 店舗外観"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>

                {/* コンテンツ本文 */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 text-left">
                  <div>
                    {/* カードヘッダー */}
                    <div className="border-l-4 border-emerald-800 pl-4 mb-5">
                      <h3
                        className="text-lg font-bold text-stone-900 tracking-wide mb-1"
                        style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                      >
                        Fleur Marchē 〈仙台AER店〉
                      </h3>
                      <p
                        className="text-[10px] text-stone-400 tracking-wider uppercase"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        FLEUR MARCHE SENDAI AER
                      </p>
                    </div>

                    {/* 住所・アクセス */}
                    <div
                      className="space-y-1.5 text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed"
                      style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                    >
                      <p className="text-stone-400 font-medium text-[11px] sm:text-xs">
                        <span style={{ fontFamily: "'Lora', sans-serif" }}>〒981-6101</span>
                      </p>
                      <p className="font-semibold text-stone-800 text-sm sm:text-base">宮城県仙台市青葉区中央一丁目3-1</p>
                      <div className="text-[11px] text-emerald-800 font-bold bg-emerald-50 rounded-lg px-3 py-2 mt-2 space-y-0.5 inline-block">
                        <p>・<span style={{ fontFamily: "'Lora', sans-serif" }}>JR</span> 仙台駅 ペデストリアンデッキ直結 徒歩<span style={{ fontFamily: "'Lora', sans-serif" }}>2</span>分</p>
                        <p>・仙台市地下鉄 仙台駅 北<span style={{ fontFamily: "'Lora', sans-serif" }}>8</span>番出口 徒歩<span style={{ fontFamily: "'Lora', sans-serif" }}>2</span>分</p>
                      </div>
                    </div>

                    {/* 詳細情報テーブル */}
                    <div
                      className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 text-xs space-y-3"
                      style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-16 font-bold text-emerald-800 tracking-wide block border-r border-stone-200/80">営業時間</span>
                        <span className="font-semibold text-stone-800">
                          <span style={{ fontFamily: "'Lora', sans-serif" }}>10:00 〜 19:00</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-16 font-bold text-emerald-800 tracking-wide block border-r border-stone-200/80">休業日</span>
                        <span className="text-stone-600 font-semibold">
                          <span style={{ fontFamily: "'Lora', sans-serif" }}>AER</span>館内休業日に準ずる
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-16 font-bold text-emerald-800 tracking-wide block border-r border-stone-200/80">フロア</span>
                        <span className="text-stone-600 font-semibold">
                          <span style={{ fontFamily: "'Lora', sans-serif" }}>AER</span> アトリウム <span style={{ fontFamily: "'Lora', sans-serif" }}>1F</span>
                        </span>
                      </div>
                    </div>

                    {/* TEL / FAX & E-MAIL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
                      <div className="bg-stone-50/50 p-3 rounded-lg border border-stone-200/30">
                        <span className="block text-[10px] font-bold text-emerald-800 tracking-wider mb-0.5" style={{ fontFamily: "'Lora', serif" }}>TEL</span>
                        <a
                          href="tel:0227211787"
                          className="text-sm font-bold text-stone-800 hover:text-emerald-700 transition-colors"
                          style={{ fontFamily: "'Lora', sans-serif" }}
                        >
                          022-721-1787
                        </a>
                      </div>
                      <div className="bg-stone-50/50 p-3 rounded-lg border border-stone-200/30">
                        <span className="block text-[10px] font-bold text-stone-500 tracking-wider mb-0.5" style={{ fontFamily: "'Lora', serif" }}>FAX</span>
                        <span className="text-sm font-bold text-stone-800" style={{ fontFamily: "'Lora', sans-serif" }}>022-721-1786</span>
                      </div>
                    </div>

                    <div className="bg-stone-50/50 p-3 rounded-lg border border-stone-200/30 text-xs mt-3 overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="block text-[9px] font-bold text-stone-500 tracking-wider mb-0.5" style={{ fontFamily: "'Lora', serif" }}>E-MAIL</span>
                      <a
                        href="mailto:fleur.marche.aer@kimotoseika.com"
                        className="font-semibold text-stone-700 hover:text-emerald-700 transition-colors"
                        style={{ fontFamily: "'Lora', sans-serif" }}
                      >
                        fleur.marche.aer@kimotoseika.com
                      </a>
                    </div>
                  </div>

                  {/* Google Map ボタン */}
                  <div className="pt-6 border-t border-stone-100">
                    <a
                      href="https://maps.google.com/?q=宮城県仙台市青葉区中央一丁目3-1 AER"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold py-3.5 rounded-xl tracking-widest shadow-xs transition-all hover:shadow-md"
                      style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                    >
                      🗺️ GOOGLE MAPでルートを見る
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 🌟 2. 全ページ共通のフッターをここに配置 */}
      <Footer />
    </div>
  );
}