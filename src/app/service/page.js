"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicePage() {
    // スムーズスクロール用の関数
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-850 antialiased selection:bg-emerald-50">
            {/* ヘッダーの配置 */}
            <Header />

            <main className="pt-28 pb-24">
                <div className="max-w-6xl mx-auto px-6">

                    {/* セクション見出し */}
                    <div className="text-center mb-16 space-y-4">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.2em] uppercase text-emerald-950 block"
                            style={{ fontFamily: "'Lora', serif" }}
                        >
                            Our Service
                        </h1>
                        <div className="w-16 h-px bg-emerald-900/30 mx-auto pt-2" />
                    </div>

                    {/* ページ内クイックナビゲーションタブ */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto text-xs font-bold tracking-wider">
                        <a href="#ordering" onClick={(e) => scrollToSection(e, 'ordering')} className="px-5 py-2.5 bg-white border border-stone-200 text-stone-600 rounded-full hover:border-emerald-800 hover:text-emerald-800 transition shadow-2xs">ご注文方法</a>
                        <a href="#flowers" onClick={(e) => scrollToSection(e, 'flowers')} className="px-5 py-2.5 bg-white border border-stone-200 text-stone-600 rounded-full hover:border-emerald-800 hover:text-emerald-800 transition shadow-2xs">生花のご注文</a>
                        <a href="#phalaenopsis" onClick={(e) => scrollToSection(e, 'phalaenopsis')} className="px-5 py-2.5 bg-white border border-stone-200 text-stone-600 rounded-full hover:border-emerald-800 hover:text-emerald-800 transition shadow-2xs">胡蝶蘭のご注文</a>
                        <a href="#foliage" onClick={(e) => scrollToSection(e, 'foliage')} className="px-5 py-2.5 bg-white border border-stone-200 text-stone-600 rounded-full hover:border-emerald-800 hover:text-emerald-800 transition shadow-2xs">観葉植物のご注文</a>
                        <a href="#delivery" onClick={(e) => scrollToSection(e, 'delivery')} className="px-5 py-2.5 bg-white border border-stone-200 text-stone-600 rounded-full hover:border-emerald-800 hover:text-emerald-800 transition shadow-2xs">発送・配達について</a>
                    </div>

                    <div className="space-y-20">

                        {/* ─── ① ご注文方法のご案内 ─── */}
                        <section id="ordering" className="scroll-mt-24">
                            <div className="bg-white rounded-3xl border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.02)] p-6 sm:p-10">
                                <h2 className="text-lg font-bold text-emerald-950 border-l-4 border-emerald-800 pl-4 mb-8" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    ご注文方法のご案内
                                </h2>

                                <p className="text-sm text-stone-600 leading-relaxed mb-8" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    当店では、「1. ご来店」または「2. お電話」にてご注文を承っております。お客様の大切な想いを形にするため、丁寧にお伺いいたします。
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/50">
                                        <h3 className="text-sm font-bold text-emerald-900 mb-3" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>八乙女店</h3>
                                        <ul className="text-xs space-y-2 text-stone-600" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                            <li><span className="font-semibold text-stone-400">営業時間：</span><span style={{ fontFamily: "'Lora', sans-serif" }} className="text-stone-800 font-medium">10:00 〜 17:00</span></li>
                                            <li><span className="font-semibold text-stone-400">休業日：</span>木曜日・日曜日（※繁忙期などは営業）</li>
                                            <li className="pt-2"><span className="text-[10px] font-bold text-emerald-800 tracking-wider block" style={{ fontFamily: "'Lora', serif" }}>TEL</span><a href="tel:0227256225" className="text-sm font-bold text-stone-800 hover:text-emerald-700 transition" style={{ fontFamily: "'Lora', sans-serif" }}>022-725-6225</a></li>
                                        </ul>
                                    </div>

                                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/50">
                                        <h3 className="text-sm font-bold text-emerald-900 mb-3" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>仙台AER店</h3>
                                        <ul className="text-xs space-y-2 text-stone-600" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                            <li><span className="font-semibold text-stone-400">営業時間：</span><span style={{ fontFamily: "'Lora', sans-serif" }} className="text-stone-800 font-medium">10:00 〜 19:00</span> <span className="text-[10px] text-amber-800 font-semibold block sm:inline sm:ml-1">（ラストオーダー 18:30）</span></li>
                                            <li><span className="font-semibold text-stone-400">休業日：</span>AER館内休業日に準ずる</li>
                                            <li className="pt-2"><span className="text-[10px] font-bold text-emerald-800 tracking-wider block" style={{ fontFamily: "'Lora', serif" }}>TEL</span><a href="tel:0227211787" className="text-sm font-bold text-stone-800 hover:text-emerald-700 transition" style={{ fontFamily: "'Lora', sans-serif" }}>022-721-1787</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="border-t border-stone-100 pt-6 space-y-4 text-xs text-stone-600" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    <div>
                                        <h4 className="font-bold text-stone-800 mb-2">決済方法について</h4>
                                        <p className="leading-relaxed pl-1">
                                            現金、クレジットカード各種、キャッシュレス決済、電子マネー決済をご利用いただけます。<br />
                                            また、銀行振込も可能です。（※お受取日の前日までに当方でご入金確認ができる必要があります）
                                        </p>
                                    </div>

                                    <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-950/5 space-y-1.5 text-amber-900">
                                        <p>※ インスタグラムおよびFAXでのご注文は一切承っておりません。</p>
                                        <p>※ メールでのお問い合わせ（主にご遠方の方向け）は確認にお時間を頂戴いたします。1日以上返信がない場合は、恐れ入りますがお電話にて直接お問い合わせをお願いいたします。</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ─── ② ご注文可能商品 & 生花のご注文 ─── */}
                        <section id="flowers" className="scroll-mt-24">
                            <div className="bg-white rounded-3xl border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.02)] p-6 sm:p-10 space-y-10">

                                <div>
                                    <h2 className="text-lg font-bold text-emerald-950 border-l-4 border-emerald-800 pl-4 mb-6" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                        ご注文可能商品について
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/40">
                                            <span className="font-bold text-emerald-900 block text-sm mb-1">生花</span>
                                            <p className="text-stone-500">花束、アレンジメント、スタンド花 等</p>
                                        </div>
                                        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/40">
                                            <span className="font-bold text-emerald-900 block text-sm mb-1">園芸</span>
                                            <p className="text-stone-500">観葉植物、胡蝶蘭 等</p>
                                        </div>
                                        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/40">
                                            <span className="font-bold text-emerald-900 block text-sm mb-1">雑貨</span>
                                            <p className="text-stone-500">プリザーブドフラワー<br /><span className="text-[10px] text-stone-400">（既製品のみの販売）</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-stone-100 pt-8">
                                    <h2 className="text-lg font-bold text-emerald-950 border-l-4 border-emerald-800 pl-4 mb-6" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                        生花のご注文について
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-stone-600 leading-loose" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-bold text-stone-800 flex items-center gap-1.5">お花のイメージについて</h3>
                                            <p className="pl-1 text-stone-600">
                                                ご注文の際は、大まかで構いませんのでご希望のイメージをお伝えください。<br />
                                                【色合いの選択肢例】<br />
                                                ・おまかせ ・明るい色合い ・シック系 ・ピンク系、イエロー系など
                                            </p>
                                            <ul className="list-disc pl-5 space-y-1 text-stone-500">
                                                <li>お花の品種指定については、仕入れ状況に左右されますのでお電話にてご確認ください。</li>
                                                <li>お客様の想いを大切な形にするため、ご希望を丁寧に伺います。お気軽にご相談ください。</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-sm font-bold text-stone-800 flex items-center gap-1.5">ご予算とラインナップ</h3>
                                            <p className="pl-1">消費税などを含めた総合計でのご予算をお伝えいただけますとスムーズです。</p>

                                            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/60 space-y-3">
                                                <div>
                                                    <span className="font-bold text-stone-800 block">花束（ブーケ）</span>
                                                    <p className="text-stone-500">1本からラッピング可能です。<span className="text-[11px] block text-stone-400">※お花代とは別に、別途ラッピング代を頂戴しております。</span></p>
                                                </div>
                                                <div className="border-t border-stone-200/60 pt-2">
                                                    <span className="font-bold text-stone-800 block">アレンジメント</span>
                                                    <p className="text-stone-500">税込3,300円以上よりご注文を承ります。<span className="text-[11px] block text-stone-400">※お花代とは別に、別途カゴ代を頂戴しております。</span></p>
                                                </div>
                                                <div className="border-t border-stone-200/60 pt-2">
                                                    <span className="font-bold text-stone-800 block">スタンド花</span>
                                                    <p className="text-stone-500">税込22,000円以上よりご注文を承ります。<span className="text-[11px] block text-stone-400">※お花代とは別に、配達・回収代を別途頂戴しております。</span></p>
                                                    <div className="text-[11px] text-stone-500 mt-1 bg-white px-2 py-1 rounded border border-stone-200/40 inline-block">
                                                        参考価格：1段 22,000円〜 / 2段 27,500円〜 <span className="text-[9px] text-stone-400 font-normal">（※2026年6月時点の参考価格）</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-emerald-50/20 p-5 rounded-2xl border border-emerald-900/5 mt-8 text-xs" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                        <h3 className="font-bold text-emerald-950 mb-3 text-center">ギフトをより良いものにする各種オプション選択</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-stone-600">
                                            <div>
                                                <span className="font-bold text-stone-800 block mb-0.5">お持ち帰り袋</span>
                                                <p className="leading-relaxed text-stone-500">お受け取りの際、無料レジ袋、または有料ギフトバッグをお選びいただけます。</p>
                                            </div>
                                            <div className="border-t sm:border-t-0 sm:border-l border-stone-200/60 pt-2 sm:pt-0 sm:pl-4">
                                                <span className="font-bold text-stone-800 block mb-0.5">立札</span>
                                                <p className="leading-relaxed text-stone-500">御祝、御供、式典等のお名前の印字サービスです。お気軽にご相談ください。</p>
                                            </div>
                                            <div className="border-t sm:border-t-0 sm:border-l border-stone-200/60 pt-2 sm:pt-0 sm:pl-4">
                                                <span className="font-bold text-stone-800 block mb-0.5">メッセージカード</span>
                                                <p className="leading-relaxed text-stone-500">ハガキ、名刺サイズの用紙へのメッセージ印字サービスです。</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* ─── ③ 胡蝶蘭のご注文 ─── */}
                        <section id="phalaenopsis" className="scroll-mt-24">
                            <div className="bg-white rounded-3xl border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.02)] p-6 sm:p-10">
                                <h2 className="text-lg font-bold text-emerald-950 border-l-4 border-emerald-800 pl-4 mb-6" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    胡蝶蘭のご注文について
                                </h2>

                                <p className="text-sm text-stone-700 leading-loose mb-6" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    フォーマルな贈り物として最適な胡蝶蘭。御祝、御供ともにギフトフラワーとして特によく贈られます。
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8 text-xs text-stone-600" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    <div className="space-y-4">
                                        <span className="font-bold text-stone-800 block">参考価格</span>
                                        <p className="text-stone-500 mb-2">ご注文の際に、スタンダードな大きさの胡蝶蘭について、参考価格は以下となります。</p>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                                                <span className="font-medium">大輪胡蝶蘭 3本立て 白</span>
                                                <span className="font-bold text-emerald-900 text-sm">花代 27,500円〜</span>
                                            </div>
                                            <div className="flex justify-between items-center p-3 bg-stone-50 rounded-xl border border-stone-200/50">
                                                <span className="font-medium">大輪胡蝶蘭 5本立て 白</span>
                                                <span className="font-bold text-emerald-900 text-sm">花代 55,000円〜</span>
                                            </div>
                                        </div>
                                        <p className="text-stone-400 text-[11px] leading-relaxed">※胡蝶蘭は花の輪数・仕立て本数により、価格は様々です。別途ラッピング代を頂戴しております。ご希望価格でお探しすることも可能です。店舗にお問い合わせください。</p>
                                    </div>

                                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/50 space-y-2.5">
                                        <span className="font-bold text-stone-800 block mb-1">ご留意事項</span>
                                        <p className="pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-emerald-800">立札の印字サービスを行っております。</p>
                                        <p className="pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-emerald-800 font-semibold text-amber-800">胡蝶蘭はクロネコヤマト配送対象外です。</p>
                                        <p className="pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-emerald-800">店舗からの配達を行っております。（仙台市内）</p>
                                    </div>
                                </div>

                                {/* FAQエリア */}
                                <div className="border-t border-stone-100 pt-8 space-y-4" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    <h3 className="text-sm font-bold text-emerald-950 text-center mb-6">胡蝶蘭についてよくある質問</h3>

                                    <div className="space-y-4 max-w-3xl mx-auto text-xs">
                                        <div className="bg-stone-50/70 p-4 rounded-xl border border-stone-200/30">
                                            <p className="font-bold text-emerald-900 mb-1.5">Q 胡蝶蘭はどのくらい持つ？</p>
                                            <p className="text-stone-600 leading-relaxed">胡蝶蘭の花は、1ヶ月以上にわたって楽しむことができます。比較的お手入れが簡単で育てやすいことが人気の理由です。</p>
                                        </div>

                                        <div className="bg-stone-50/70 p-4 rounded-xl border border-stone-200/30">
                                            <p className="font-bold text-emerald-900 mb-1.5">Q 置き場所はどこが良い？</p>
                                            <p className="text-stone-600 leading-relaxed">室内で暖かく、風通しの良いところで育てましょう。直接日光が当たらない場所に置くようにします。亜熱帯から熱帯が原種の園芸種のため、冬場は最低でも10度以上になるような場所が良いです。</p>
                                        </div>

                                        <div className="bg-stone-50/70 p-4 rounded-xl border border-stone-200/30">
                                            <p className="font-bold text-emerald-900 mb-1.5">Q 管理方法は？</p>
                                            <p className="text-stone-600 leading-relaxed">
                                                水苔が乾いたら鉢底穴から水が流れ出るくらい十分に与えますが、秋の半ばから水はやや控え目にしていき、冬季は乾かしぎみにします。1週間に1回程度が目安です。<br />
                                                乾燥が強い時期は、株元と花弁に霧吹をします。その際、花弁はデリケートなので、花の裏面からやさしく吹きかけてください。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* ─── ④ 観葉植物のご注文 ─── */}
                        <section id="foliage" className="scroll-mt-24">
                            <div className="bg-white rounded-3xl border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.02)] p-6 sm:p-10">
                                <h2 className="text-lg font-bold text-emerald-950 border-l-4 border-emerald-800 pl-4 mb-6" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    観葉植物のご注文について
                                </h2>

                                <p className="text-sm text-stone-700 leading-loose mb-6" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    お祝いの贈り物に人気の観葉植物。観葉植物には風水効果があるのをご存じでしょうか。商売繁盛や幸福などのポジティブな花言葉が多く、インテリア性も高いので様々なシーンの御祝に最適です。
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-xs text-stone-600" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    <div>
                                        <span className="font-bold text-stone-800 block mb-3">参考価格</span>
                                        <p className="text-stone-500 mb-3">一般的なお祝いの費用相場は、5,500〜33,000円くらいです。</p>

                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center p-2.5 bg-stone-50 rounded-xl border border-stone-200/40">
                                                <span>5〜6寸</span>
                                                <span className="font-bold text-emerald-900">5,500円〜</span>
                                            </div>
                                            <div className="flex justify-between items-center p-2.5 bg-stone-50 rounded-xl border border-stone-200/40">
                                                <span>7〜8寸</span>
                                                <span className="font-bold text-emerald-900">8,800円〜16,500円程度</span>
                                            </div>
                                            <div className="flex justify-between items-center p-2.5 bg-stone-50 rounded-xl border border-stone-200/40">
                                                <span>9寸〜10寸</span>
                                                <span className="font-bold text-emerald-900">16,500円〜33,000円程度</span>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-stone-400 mt-2">※植物の種類や、葉の数、樹形などにより価格は様々です。</p>
                                    </div>

                                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/50 space-y-3">
                                        <span className="font-bold text-stone-800 block">ご案内事項</span>
                                        <ul className="space-y-2 pl-1 text-stone-600">
                                            <li className="pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-emerald-700">別途ラッピング代を頂戴しております。</li>
                                            <li className="pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-emerald-700">立札の印字サービスを行っております。</li>
                                            <li className="pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-emerald-700 text-amber-800 font-medium">観葉植物は、箱の大きさが160サイズ以上はクロネコヤマト配送対象外です。</li>
                                            <li className="pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-emerald-700">店舗からの配達を行っております。（仙台市内）</li>
                                            <li className="pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-emerald-700">ご希望価格でお探しすることも可能です。店舗にお問い合わせください。</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* ─── ⑤ 発送＆店舗からの配達について ─── */}
                        <section id="delivery" className="scroll-mt-24">
                            <div className="bg-white rounded-3xl border border-emerald-900/5 shadow-[0_10px_30px_rgba(4,47,31,0.02)] p-6 sm:p-10">
                                <h2 className="text-lg font-bold text-emerald-950 border-l-4 border-emerald-800 pl-4 mb-8" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    発送・配達についてのご案内
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-stone-600" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    {/* ヤマト運輸 */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold text-stone-800 flex items-center gap-1.5 border-b border-stone-100 pb-2">ヤマト運輸</h3>
                                        <p className="pl-1 text-stone-500 font-medium">八乙女店・AER店、両店舗でご利用いただけます。</p>
                                        <ul className="space-y-2 list-disc pl-4 text-stone-600 leading-relaxed">
                                            <li>ご到着希望日の3日前までのご注文をお勧めいたします。</li>
                                            <li>翌日着地域のみ発送可能です。（北海道、沖縄、九州、離島等の翌々日到着地域は不可）</li>
                                            <li>夏季は気温により、クール便にて出荷をお勧めしております。</li>
                                            <li>冬季や自然災害時はお断りする場合がございます。予めご了承ください。</li>
                                        </ul>
                                    </div>

                                    {/* 店舗からの配達について */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold text-stone-800 flex items-center gap-1.5 border-b border-stone-100 pb-2">店舗からの配達について</h3>
                                        <p className="pl-1 text-stone-600 leading-relaxed">
                                            店舗スタッフが直接お届け先にお伺いして、お花をお届けいたします。<br />
                                            品物代5,500円以上より承っております。（別途配達料550円〜1650円程度）
                                        </p>

                                        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 space-y-3 mt-2">
                                            <div>
                                                <span className="font-bold text-stone-800 block">八乙女店</span>
                                                <p className="text-stone-500 leading-relaxed">1名体制の為、店舗の状況によりますが、配達を承っております。（仙台市内）</p>
                                            </div>
                                            <div className="border-t border-stone-200/60 pt-2">
                                                <span className="font-bold text-stone-800 block">AER店</span>
                                                <p className="text-stone-500 leading-relaxed">徒歩圏内（片道10分程度）の地域のみ配達を承っております。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>
                </div>
            </main>

            {/* フッターの配置 */}
            <Footer />
        </div>
    );
}