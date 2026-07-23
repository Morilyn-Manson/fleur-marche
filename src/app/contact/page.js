"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
    // 🌟 どちらの店舗のフォームを表示するか管理するステート ('YAOTOME' または 'AER')
    const [activeStore, setActiveStore] = useState('YAOTOME');

    return (
        <div className="min-h-screen bg-stone-50 text-stone-850 antialiased selection:bg-emerald-50 flex flex-col justify-between">
            {/* ヘッダーの配置 */}
            <Header />

            <main className="pt-28 pb-24 relative overflow-hidden flex-grow">
                {/* 背景の柔らかな光の演出 */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 -left-24 w-[600px] h-[600px] bg-emerald-100/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-3xl mx-auto px-6 relative z-10">

                    {/* セクション見出し */}
                    <div className="text-center mb-12 space-y-4">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.2em] uppercase text-emerald-950 block"
                            style={{ fontFamily: "'Lora', serif" }}
                        >
                            Contact
                        </h1>
                        <div className="w-16 h-px bg-emerald-900/30 mx-auto pt-2" />
                        <p
                            className="text-xs text-stone-500 tracking-wider pt-2"
                            style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                        >
                            ご質問・アレンジメントのご相談など、お気軽にお問い合わせください。
                        </p>
                    </div>

                    {/* 📝 入力フォームエリア */}
                    <>
                        {/* 🎛️ 店舗切り替えタブ */}
                        <div className="flex justify-center gap-4 mb-12 border-b border-stone-200/60 pb-4 max-w-md mx-auto">
                            <button
                                type="button"
                                onClick={() => setActiveStore('YAOTOME')}
                                className="flex flex-col items-center py-2 px-6 rounded-xl transition-all duration-300 focus:outline-none cursor-pointer"
                            >
                                <span
                                    className={`text-sm font-bold tracking-widest transition-colors ${activeStore === 'YAOTOME' ? 'text-emerald-900' : 'text-stone-400'}`}
                                    style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                                >
                                    八乙女店宛て
                                </span>
                                <div className={`h-0.5 bg-emerald-800 transition-all duration-300 mt-1 rounded-full ${activeStore === 'YAOTOME' ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveStore('AER')}
                                className="flex flex-col items-center py-2 px-6 rounded-xl transition-all duration-300 focus:outline-none cursor-pointer"
                            >
                                <span
                                    className={`text-sm font-bold tracking-widest transition-colors ${activeStore === 'AER' ? 'text-emerald-900' : 'text-stone-400'}`}
                                    style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                                >
                                    AER店宛て
                                </span>
                                <div className={`h-0.5 bg-emerald-800 transition-all duration-300 mt-1 rounded-full ${activeStore === 'AER' ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                            </button>
                        </div>

                        {/* 📄 フォームエリア本体 */}
                        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-emerald-900/5 shadow-[0_15px_40px_rgba(4,47,31,0.03)] transition-all duration-500">

                            {/* 選択中の店舗ガイド */}
                            <div className="mb-8 border-l-4 border-emerald-800 pl-4">
                                <h2 className="text-base font-bold text-stone-900 tracking-wide" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                                    {activeStore === 'YAOTOME' ? 'Fleur Marchē 八乙女店 へのお問い合わせ' : 'Fleur Marchē 仙台AER店 へのお問い合わせ'}
                                </h2>
                                <p className="text-[11px] text-stone-400 tracking-wider mt-0.5" style={{ fontFamily: "'Lora', serif" }}>
                                    {activeStore === 'YAOTOME' ? 'CONTACT TO YAOTOME BRANCH' : 'CONTACT TO SENDAI AER BRANCH'}
                                </p>
                            </div>

                            {/* 🌟 修正ポイント: Fetch APIを使わず、HTML標準のPOST送信を行う仕様に変更。
                                     選択中の店舗タブ（activeStore）によって送信先のURLを動的に切り替えます。 */}
                            <form
                                action={activeStore === 'YAOTOME' ? 'https://ssgform.com/s/NS8jyxuksTSW' : 'https://ssgform.com/s/NG2xJ2QJHs5p'}
                                method="POST"
                                className="space-y-6 text-left"
                                style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                            >

                                {/* メール本文で対象店舗を識別するための隠し項目 */}
                                <input
                                    type="hidden"
                                    name="お問い合わせ店舗"
                                    value={activeStore === 'YAOTOME' ? '八乙女店' : '仙台AER店'}
                                />

                                {/* お名前 */}
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-stone-700 tracking-wider flex items-center gap-2">
                                        お名前 <span className="text-[10px] bg-amber-800/10 text-amber-900 px-2 py-0.5 rounded-sm font-medium">必須</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="お名前"
                                        required
                                        placeholder="山田 花子"
                                        className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-800/50 focus:bg-white transition-all"
                                    />
                                </div>

                                {/* メールアドレス */}
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-stone-700 tracking-wider flex items-center gap-2">
                                        メールアドレス <span className="text-[10px] bg-amber-800/10 text-amber-900 px-2 py-0.5 rounded-sm font-medium">必須</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="メールアドレス"
                                        required
                                        placeholder="example@fleurmarche.com"
                                        className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-800/50 focus:bg-white transition-all font-mono"
                                    />
                                </div>

                                {/* 電話番号 */}
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="tel" className="text-xs font-bold text-stone-700 tracking-wider flex items-center gap-2">
                                        電話番号 <span className="text-[10px] bg-stone-200 text-stone-600 px-2 py-0.5 rounded-sm font-medium">任意</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        name="電話番号"
                                        placeholder="022-000-0000"
                                        className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-800/50 focus:bg-white transition-all font-mono"
                                    />
                                </div>

                                {/* お問い合わせ項目 */}
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="category" className="text-xs font-bold text-stone-700 tracking-wider flex items-center gap-2">
                                        お問い合わせ内容の項目 <span className="text-[10px] bg-amber-800/10 text-amber-900 px-2 py-0.5 rounded-sm font-medium">必須</span>
                                    </label>
                                    <select
                                        id="category"
                                        name="お問い合わせ項目"
                                        required
                                        className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 focus:outline-none focus:border-emerald-800/50 focus:bg-white transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">選択してください</option>
                                        <option value="フラワーアレンジメント・ブーケのご注文について">フラワーアレンジメント・ブーケのご注文について</option>
                                        <option value="店頭の入荷・在庫状況について">店頭の入荷・在庫状況について</option>
                                        {activeStore === 'YAOTOME' ? (
                                            <>
                                                <option value="園芸植物・観葉植物のご相談">園芸植物・観葉植物のご相談</option>
                                                <option value="フラワーレッスン・ワークショップについて">フラワーレッスン・ワークショップについて</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="フレンチ雑貨・ギフトラッピングについて">フレンチ雑貨・ギフトラッピングについて</option>
                                                <option value="仙台駅前でのスピード受取について">仙台駅前でのスピード受取について</option>
                                            </>
                                        )}
                                        <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                                    </select>
                                </div>

                                {/* メッセージ本文 */}
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-stone-700 tracking-wider flex items-center gap-2">
                                        メッセージ本文 <span className="text-[10px] bg-amber-800/10 text-amber-900 px-2 py-0.5 rounded-sm font-medium">必須</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="メッセージ本文"
                                        required
                                        rows="6"
                                        placeholder="ご希望のイメージ、ご予算、受取日時などがあればご記入ください。"
                                        className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-800/50 focus:bg-white transition-all resize-none"
                                    />
                                </div>

                                {/* 個人情報の取り扱いについて */}
                                <p className="text-[11px] text-stone-400 leading-relaxed pt-2">
                                    ※ご記入いただいた個人情報は、お問い合わせへの回答およびサービスのご案内以外の目的には一切使用いたしません。
                                </p>

                                {/* 🌟 送信ボタン（Fetch APIを使わないため、通常のtype="submit"ボタンです） */}
                                <div className="text-center pt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center bg-stone-900 hover:bg-emerald-900 text-white text-xs font-bold tracking-[0.2em] px-10 py-4 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                                        style={{ fontFamily: "'Lora', sans-serif" }}
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>

                            </form>
                        </div>
                    </>

                </div>
            </main>

            {/* フッターの配置 */}
            <Footer />
        </div>
    );
}