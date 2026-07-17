import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // スクロール検知用のエフェクト（透明 ➔ 白 の切り替え）
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // スマホメニュー開閉時に背景スクロールを固定するエフェクト
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // 🌟 修正ポイント：アンカーリンクをクリックした際に心地よくスクロールさせる関数
    const handleAnchorClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false); // スマホメニューが開いていた場合は閉じる

        // '#' を除いたID名を取得（#shop ➔ shop）
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // ヘッダーの高さ分（約80px）を考慮してスクロール位置を調整
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // 👈 スーッと動くアニメーション
            });
        }
    };

    // ナビゲーション項目定義
    const menuItems = [
        { label: 'COMPANY', subLabel: '会社概要', href: '/company', isAnchor: false },
        { label: 'SERVICE', subLabel: 'サービス', href: '/service', isAnchor: false },
        { label: 'SHOP', subLabel: '店舗情報', href: '#shop', isAnchor: true },
        { label: 'GALLERY', subLabel: 'ギャラリー', href: '/gallery', isAnchor: false },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-stone-200/60 py-3 sm:py-4 shadow-sm text-stone-800'
            : 'bg-transparent py-5 sm:py-6 text-white'
            }`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

                {/* 🌿 ロゴエリア（左寄せ） */}
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col text-left items-start group leading-tight"
                >
                    <span
                        className="text-[9px] sm:text-[10px] font-medium tracking-[0.25em] uppercase text-stone-400 group-hover:text-emerald-600 transition-colors duration-300"
                        style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                    >
                        FLOWER & GREEN
                    </span>
                    <span
                        className="text-base sm:text-lg font-semibold tracking-[0.1em] mt-0.5"
                        style={{ fontFamily: "'Lora', serif" }}
                    >
                        Fleur Marchē
                    </span>
                </Link>

                {/* 💻 PC用ナビゲーション */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-xs font-semibold tracking-[0.15em]">
                    {menuItems.map((item) => {
                        const Component = item.isAnchor ? 'a' : Link;
                        return (
                            <Component
                                key={item.label}
                                href={item.href}
                                // 🌟 修正ポイント：アンカーリンクの時だけカスタムスクロール関数を発火
                                onClick={item.isAnchor ? (e) => handleAnchorClick(e, item.href) : undefined}
                                className={`group flex flex-col items-center cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-stone-600' : 'text-white'
                                    }`}
                                style={{ fontFamily: "'Lora', serif" }}
                            >
                                <span className={`transition-colors duration-300 ${isScrolled ? 'group-hover:text-emerald-700' : 'group-hover:text-emerald-200'}`}>
                                    {item.label}
                                </span>
                                <span
                                    className="text-[9px] opacity-0 group-hover:opacity-60 font-medium tracking-normal scale-90 transition-all duration-300 h-0 group-hover:h-3 mt-0.5"
                                    style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                                >
                                    {item.subLabel}
                                </span>
                            </Component>
                        );
                    })}

                    {/* お問い合わせボタン */}
                    <Link
                        href="/contact"
                        className="bg-emerald-800 hover:bg-emerald-700 text-white text-[11px] px-5 py-2.5 rounded-full shadow-sm transition-all duration-200 tracking-widest hover:shadow"
                        style={{ fontFamily: "'Lora', sans-serif" }}
                    >
                        CONTACT
                    </Link>
                </nav>

                {/* 📱 スマホ用ハンバーガーボタン（右寄せ） */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1.5 z-50 focus:outline-none relative"
                    aria-label="メニューを開閉"
                >
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} ${isScrolled || isOpen ? 'bg-stone-800' : 'bg-white'}`} />
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''} ${isScrolled ? 'bg-stone-800' : 'bg-white'}`} />
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''} ${isScrolled || isOpen ? 'bg-stone-800' : 'bg-white'}`} />
                </button>

                {/* 📱 スマホ用全画面メニュー */}
                <div className={`fixed top-0 left-0 w-screen h-screen bg-stone-50/98 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden overflow-y-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}>
                    <nav className="flex flex-col items-center gap-6 text-sm font-bold tracking-[0.2em] text-stone-800 text-center py-8">
                        {menuItems.map((item) => {
                            const Component = item.isAnchor ? 'a' : Link;
                            return (
                                <Component
                                    key={item.label}
                                    href={item.href}
                                    // 🌟 修正ポイント：スマホメニュー内でも滑らかにスクロールさせる
                                    onClick={item.isAnchor ? (e) => handleAnchorClick(e, item.href) : () => setIsOpen(false)}
                                    className="group flex flex-col items-center cursor-pointer"
                                >
                                    <span className="group-hover:text-emerald-700 transition-colors" style={{ fontFamily: "'Lora', serif" }}>
                                        {item.label}
                                    </span>
                                    <span className="text-[10px] font-medium text-stone-400 tracking-normal mt-0.5" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                        {item.subLabel}
                                    </span>
                                </Component>
                            );
                        })}

                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-emerald-800 hover:bg-emerald-700 text-white text-xs px-6 py-3 rounded-full shadow-sm text-center tracking-widest mt-2"
                            style={{ fontFamily: "'Lora', sans-serif" }}
                        >
                            CONTACT
                        </Link>
                    </nav>
                </div>

            </div>
        </header>
    );
}