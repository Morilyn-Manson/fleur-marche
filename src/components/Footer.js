import React from 'react';

export default function Footer() {
    // 💡 背景をごく淡いアプリコットベージュ（bg-amber-50/40）に変更し、上部の境界線も優しく馴染む薄茶に
    return (
        <footer className="bg-amber-50/40 text-stone-600 pt-16 pb-8 border-t border-stone-200/60 relative overflow-hidden">

            {/* 💡 背景の光の演出：淡いピンク・ブラッシュ（bg-pink-100/20）を混ぜて、さらに温かく華やかな印象に */}
            <div className="absolute -bottom-48 left-1/4 w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* 🌟 メインフッターエリア（PC: 横4列 / SP: 縦並び） */}
                {/* 💡 境界線を柔らかいトーン（border-stone-200/60）に微調整 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-stone-200/60">

                    {/* 🏢 列1: ブランドロゴ */}
                    <div className="space-y-4">
                        <div className="flex flex-col text-left leading-tight">
                            <span
                                className="text-[9px] sm:text-[10px] font-medium tracking-[0.25em] uppercase text-stone-400"
                                style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                            >
                                FLOWER & GREEN
                            </span>
                            {/* 💡 ロゴ文字色を深みのあるノーブルな緑（text-emerald-950）へ変更 */}
                            <span
                                className="text-lg font-semibold tracking-[0.1em] text-emerald-950 mt-0.5"
                                style={{ fontFamily: "'Lora', serif" }}
                            >
                                Fleur Marchē
                            </span>
                        </div>
                        <p
                            className="text-xs text-stone-500 leading-relaxed max-w-xs"
                            style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                        >
                            日常に溶け込む、小さなお花の市場。フランスのマルシェを訪れるときのような胸の高鳴りをあなたに。
                        </p>
                    </div>

                    {/* 🔗 列2: ナビゲーションリンク */}
                    <div className="space-y-4">
                        {/* 💡 見出しの色を上品な深い緑（text-emerald-900）に変更 */}
                        <h5
                            className="text-emerald-900 text-xs font-bold tracking-[0.2em] uppercase"
                            style={{ fontFamily: "'Lora', serif" }}
                        >
                            Navigation
                        </h5>
                        <ul
                            className="space-y-2.5 text-xs text-stone-500"
                            style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                        >
                            <li>
                                <a href="#shop-info" className="hover:text-emerald-700 transition-colors flex items-center gap-1">SHOP <span className="text-[10px] text-stone-400">店舗情報</span></a>
                            </li>
                            <li>
                                <a href="/service" className="hover:text-emerald-700 transition-colors flex items-center gap-1">SERVICE <span className="text-[10px] text-stone-400">サービス</span></a>
                            </li>
                            <li>
                                <a href="/gallery" className="hover:text-emerald-700 transition-colors flex items-center gap-1">GALLERY <span className="text-[10px] text-stone-400">ギャラリー</span></a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-emerald-700 transition-colors flex items-center gap-1">CONTACT <span className="text-[10px] text-stone-400">お問い合わせ</span></a>
                            </li>
                            <li>
                                <a href="/company" className="hover:text-emerald-700 transition-colors flex items-center gap-1">COMPANY <span className="text-[10px] text-stone-400">会社概要</span></a>
                            </li>
                        </ul>
                    </div>

                    {/* 🏢 列3: 店舗一覧（Shops） */}
                    <div className="space-y-4 lg:col-span-2">
                        <h5
                            className="text-emerald-900 text-xs font-bold tracking-[0.2em] uppercase"
                            style={{ fontFamily: "'Lora', serif" }}
                        >
                            Shops
                        </h5>

                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs text-stone-500"
                            style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                        >
                            {/* 八乙女店 */}
                            <div className="space-y-1">
                                {/* 💡 店舗の強調色を品のあるエメラルド（text-emerald-800）に変更 */}
                                <p><strong className="text-emerald-800 block font-semibold">〈Fleur Marchē 八乙女店〉</strong>宮城県仙台市泉区八乙女中央1-4-20</p>
                                <p style={{ fontFamily: "'Lora', sans-serif" }} className="text-[11px] text-stone-400">TEL: 022-725-6225</p>
                            </div>

                            {/* 仙台AER店 */}
                            <div className="space-y-1">
                                <p><strong className="text-emerald-800 block font-semibold">〈Fleur Marchē 仙台AER店〉</strong>宮城県仙台市青葉区中央1-3-1 1F</p>
                                <p style={{ fontFamily: "'Lora', sans-serif" }} className="text-[11px] text-stone-400">TEL: 022-721-1787</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 🌟 サブフッターエリア（プライバシーポリシー & 著作権表示） */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400">

                    {/* プライバシーポリシー */}
                    <div style={{ fontFamily: "'Lora', serif" }}>
                        <a
                            href="/privacy"
                            className="hover:text-emerald-700 transition-colors tracking-wider"
                        >
                            PRIVACY POLICY
                        </a>
                    </div>

                    {/* コピーライト */}
                    <div
                        className="tracking-widest"
                        style={{ fontFamily: "'Lora', sans-serif" }}
                    >
                        &copy; {new Date().getFullYear()} Fleur Marchē. All rights reserved.
                    </div>

                </div>

            </div>
        </footer>
    );
}