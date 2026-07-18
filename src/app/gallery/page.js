"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GalleryPage() {
    // 選択されているカテゴリを管理するステート
    const [activeTab, setActiveTab] = useState('ALL');
    
    // 現在モーダルで拡大表示している画像を管理するステート
    const [selectedImage, setSelectedImage] = useState(null);

    // 4つのカテゴリ定義
    const tabs = [
        { id: 'ALL', label: 'ALL', subLabel: 'すべて' },
        { id: 'BOUQUET', label: 'BOUQUET', subLabel: '花束' },
        { id: 'ARRANGEMENT', label: 'ARRANGEMENT', subLabel: 'アレンジメント' },
        { id: 'PLANT', label: 'PLANT', subLabel: '園芸・植物' },
        { id: 'GENERAL', label: 'GENERAL', subLabel: '雑貨・その他' }
    ];

    // 📸 ギャラリー画像データ（全79枚）
    const galleryItems = [
        // 💐 BOUQUET (花束) カテゴリ（全17枚）
        { src: '/images/bouquet/bouquet01.jpg', category: 'BOUQUET', alt: 'Bouquet 01', layoutClass: 'md:col-span-2 md:row-span-2' },
        { src: '/images/bouquet/bouquet02.jpg', category: 'BOUQUET', alt: 'Bouquet 02', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/bouquet/bouquet03.jpg', category: 'BOUQUET', alt: 'Bouquet 03', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/bouquet/bouquet04.jpg', category: 'BOUQUET', alt: 'Bouquet 04', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/bouquet/bouquet05.jpg', category: 'BOUQUET', alt: 'Bouquet 05', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/bouquet/bouquet06.jpg', category: 'BOUQUET', alt: 'Bouquet 06', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/bouquet/bouquet07.jpg', category: 'BOUQUET', alt: 'Bouquet 07', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/bouquet/bouquet08.jpg', category: 'BOUQUET', alt: 'Bouquet 08', layoutClass: 'md:col-span-2 md:row-span-2' },
        { src: '/images/bouquet/bouquet09.jpg', category: 'BOUQUET', alt: 'Bouquet 09', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/bouquet/bouquet10.jpg', category: 'BOUQUET', alt: 'Bouquet 10', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/bouquet/bouquet11.jpg', category: 'BOUQUET', alt: 'Bouquet 11', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/bouquet/bouquet12.jpg', category: 'BOUQUET', alt: 'Bouquet 12', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/bouquet/bouquet13.jpg', category: 'BOUQUET', alt: 'Bouquet 13', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/bouquet/bouquet14.jpg', category: 'BOUQUET', alt: 'Bouquet 14', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/bouquet/bouquet15.jpg', category: 'BOUQUET', alt: 'Bouquet 15', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/bouquet/bouquet16.jpg', category: 'BOUQUET', alt: 'Bouquet 16', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/bouquet/bouquet17.jpg', category: 'BOUQUET', alt: 'Bouquet 17', layoutClass: 'md:col-span-1 md:row-span-1' },

        // 🌸 ARRANGEMENT (アレンジメント) カテゴリ（全18枚）
        { src: '/images/arrengement/arrengement01.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 01', layoutClass: 'md:col-span-2 md:row-span-2' },
        { src: '/images/arrengement/arrengement02.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 02', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/arrengement/arrengement03.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 03', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/arrengement/arrengement04.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 04', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/arrengement/arrengement05.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 05', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/arrengement/arrengement06.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 06', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/arrengement/arrengement07.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 07', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/arrengement/arrengement08.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 08', layoutClass: 'md:col-span-2 md:row-span-2' },
        { src: '/images/arrengement/arrengement09.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 09', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/arrengement/arrengement10.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 10', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/arrengement/arrengement11.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 11', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/arrengement/arrengement12.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 12', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/arrengement/arrengement13.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 13', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/arrengement/arrengement14.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 14', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/arrengement/arrengement15.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 15', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/arrengement/arrengement16.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 16', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/arrengement/arrengement17.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 17', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/arrengement/arrengement18.jpg', category: 'ARRANGEMENT', alt: 'Arrangement 18', layoutClass: 'md:col-span-2 md:row-span-2' },

        // 🌿 PLANT (園芸・植物) カテゴリ（全12枚）
        { src: '/images/plant/plant01.jpg', category: 'PLANT', alt: 'Plant 01', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/plant/plant02.jpg', category: 'PLANT', alt: 'Plant 02', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/plant/plant03.jpg', category: 'PLANT', alt: 'Plant 03', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/plant/plant04.jpg', category: 'PLANT', alt: 'Plant 04', layoutClass: 'md:col-span-2 md:row-span-2' },
        { src: '/images/plant/plant05.jpg', category: 'PLANT', alt: 'Plant 05', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/plant/plant06.jpg', category: 'PLANT', alt: 'Plant 06', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/plant/plant07.jpg', category: 'PLANT', alt: 'Plant 07', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/plant/plant08.jpg', category: 'PLANT', alt: 'Plant 08', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/plant/plant09.jpg', category: 'PLANT', alt: 'Plant 09', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/plant/plant10.jpg', category: 'PLANT', alt: 'Plant 10', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/plant/plant11.jpg', category: 'PLANT', alt: 'Plant 11', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/plant/plant12.jpg', category: 'PLANT', alt: 'Plant 12', layoutClass: 'md:col-span-1 md:row-span-1' },

        // 🏺 GENERAL (雑貨・その他) カテゴリ（全32枚）
        { src: '/images/general/general01.jpg', category: 'GENERAL', alt: 'General 01', layoutClass: 'md:col-span-2 md:row-span-2' },
        { src: '/images/general/general02.jpg', category: 'GENERAL', alt: 'General 02', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general03.jpg', category: 'GENERAL', alt: 'General 03', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/general/general04.jpg', category: 'GENERAL', alt: 'General 04', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general05.jpg', category: 'GENERAL', alt: 'General 05', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/general/general06.jpg', category: 'GENERAL', alt: 'General 06', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general07.jpg', category: 'GENERAL', alt: 'General 07', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/general/general08.jpg', category: 'GENERAL', alt: 'General 08', layoutClass: 'md:col-span-2 md:row-span-2' },
        { src: '/images/general/general09.jpg', category: 'GENERAL', alt: 'General 09', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general10.jpg', category: 'GENERAL', alt: 'General 10', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general11.jpg', category: 'GENERAL', alt: 'General 11', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/general/general12.jpg', category: 'GENERAL', alt: 'General 12', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general13.jpg', category: 'GENERAL', alt: 'General 13', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/general/general14.jpg', category: 'GENERAL', alt: 'General 14', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general15.jpg', category: 'GENERAL', alt: 'General 15', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/general/general16.jpg', category: 'GENERAL', alt: 'General 16', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general17.jpg', category: 'GENERAL', alt: 'General 17', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general18.jpg', category: 'GENERAL', alt: 'General 18', layoutClass: 'md:col-span-2 md:row-span-2' },
        { src: '/images/general/general19.jpg', category: 'GENERAL', alt: 'General 19', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general20.jpg', category: 'GENERAL', alt: 'General 20', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/general/general21.jpg', category: 'GENERAL', alt: 'General 21', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/general/general22.jpg', category: 'GENERAL', alt: 'General 22', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general23.jpg', category: 'GENERAL', alt: 'General 23', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general24.jpg', category: 'GENERAL', alt: 'General 24', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/general/general25.jpg', category: 'GENERAL', alt: 'General 25', layoutClass: 'md:col-span-1 md:row-span-2' },
        { src: '/images/general/general26.jpg', category: 'GENERAL', alt: 'General 26', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general27.jpg', category: 'GENERAL', alt: 'General 27', layoutClass: 'md:col-span-2 md:row-span-1' },
        { src: '/images/general/general28.jpg', category: 'GENERAL', alt: 'General 28', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general29.jpg', category: 'GENERAL', alt: 'General 29', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general30.jpg', category: 'GENERAL', alt: 'General 30', layoutClass: 'md:col-span-2 md:row-span-2' },
        { src: '/images/general/general31.jpg', category: 'GENERAL', alt: 'General 31', layoutClass: 'md:col-span-1 md:row-span-1' },
        { src: '/images/general/general32.jpg', category: 'GENERAL', alt: 'General 32', layoutClass: 'md:col-span-1 md:row-span-1' },
    ];

    // 現在のアクティブなタブに基づいて元データを先に抽出
    const activeItems = galleryItems.filter(item => activeTab === 'ALL' || item.category === activeTab);

    // 🌟 修正ポイント：抽出されたデータに対して、画面幅に応じた遅延秒数をマッピングする
    const [displayItems, setDisplayItems] = useState([]);

    useEffect(() => {
        const isMobile = window.innerWidth < 768; // スマホかどうか判定

        const processed = activeItems.map((item, index) => {
            let delayTime;
            if (isMobile) {
                // 📱 スマホの場合: 上から順に 0.05秒 ずつ等間隔で遅らせて流れるように表示
                delayTime = `${(index * 0.05).toFixed(2)}s`;
            } else {
                // 💻 PCの場合: これまで通り 0秒 〜 0.6秒 の完全ランダム
                delayTime = `${(Math.floor(Math.random() * 7) * 0.1).toFixed(1)}s`;
            }
            return { ...item, delay: delayTime };
        });

        setDisplayItems(processed);
    }, [activeTab]); // 💡 タブが切り替わるたびに、SPならまた上から順にアニメーションを再計算

    return (
        <div className="min-h-screen bg-stone-50 text-stone-850 antialiased selection:bg-emerald-50">
            {/* キーフレームアニメーション（下から上にフェードイン） */}
            <style jsx global>{`
                @keyframes flowerFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-flower-appear {
                    opacity: 0;
                    animation: flowerFadeUp 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
                }
            `}</style>

            {/* ヘッダーの配置 */}
            <Header />

            <main className="pt-28 pb-24 relative overflow-hidden">
                {/* 背景の柔らかな光の演出 */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 -left-24 w-[600px] h-[600px] bg-emerald-100/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">

                    {/* セクション見出し */}
                    <div className="text-center mb-12 space-y-4">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.2em] uppercase text-emerald-950 block"
                            style={{ fontFamily: "'Lora', serif" }}
                        >
                            Gallery
                        </h1>
                        <div className="w-16 h-px bg-emerald-900/30 mx-auto pt-2" />
                    </div>

                    {/* カテゴリ切り替えタブ */}
                    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-16 border-b border-stone-200/60 pb-6 max-w-3xl mx-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="group flex flex-col items-center focus:outline-none py-2 px-4 rounded-xl transition-all duration-300"
                            >
                                <span
                                    className={`text-xs font-bold tracking-[0.15em] transition-colors duration-300 ${activeTab === tab.id ? 'text-emerald-900' : 'text-stone-400 group-hover:text-stone-600'
                                        }`}
                                    style={{ fontFamily: "'Lora', serif" }}
                                >
                                    {tab.label}
                                </span>
                                <span
                                    className={`text-[9px] font-medium tracking-normal transition-all duration-300 mt-0.5 ${activeTab === tab.id ? 'text-emerald-800/70 opacity-100' : 'text-stone-400/50 opacity-0 group-hover:opacity-100'
                                        }`}
                                    style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                                >
                                    {tab.subLabel}
                                </span>
                                <div className={`h-0.5 bg-emerald-800/80 transition-all duration-500 mt-1 rounded-full ${activeTab === tab.id ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                            </button>
                        ))}
                    </div>

                    {/* ギャラリー画像グリッドコンテナ */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px] sm:auto-rows-[300px] transition-all duration-500">
                        {displayItems.map((item, index) => (
                            <div
                                key={`${item.src}-${activeTab}-${index}`} // 💡 インデックスを含めることでタブ切り替え時にもSP順次アニメが確実に再発火
                                onClick={() => setSelectedImage(item)}
                                className={`animate-flower-appear relative rounded-3xl overflow-hidden bg-white border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.02)] group cursor-pointer ${item.layoutClass}`}
                                style={{ animationDelay: item.delay }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                                />

                                {/* マウスホバー時のオーバーレイ */}
                                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/90 backdrop-blur-xs px-4 py-2 rounded-full shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <span
                                            className="text-[10px] sm:text-xs text-emerald-950 font-semibold tracking-widest uppercase"
                                            style={{ fontFamily: "'Lora', serif" }}
                                        >
                                            View Details
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* セーフティ表示 */}
                    {galleryItems.filter(item => activeTab === 'ALL' || item.category === activeTab).length === 0 && (
                        <div className="text-center py-20 text-stone-400 text-xs tracking-wider" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                            該当する写真がありません。
                        </div>
                    )}

                </div>
            </main>

            {/* 大画面モーダルコンポーネント */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-stone-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain select-none"
                                priority
                            />
                        </div>
                    </div>

                    <button 
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white font-light text-xs tracking-widest flex items-center gap-2 focus:outline-none"
                        style={{ fontFamily: "'Lora', serif" }}
                    >
                        CLOSE <span className="text-lg font-thin">/</span>
                    </button>
                </div>
            )}

            {/* フッターの配置 */}
            <Footer />
        </div>
    );
}