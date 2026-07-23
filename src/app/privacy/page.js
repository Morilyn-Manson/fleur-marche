"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-stone-50 text-stone-850 antialiased selection:bg-emerald-50 flex flex-col justify-between">
            {/* ヘッダーの配置 */}
            <Header />

            <main className="pt-28 pb-24 relative overflow-hidden flex-grow">
                {/* 背景の柔らかな光の演出（ブランドアイデンティティの統一） */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 -left-24 w-[600px] h-[600px] bg-emerald-100/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-3xl mx-auto px-6 relative z-10">

                    {/* ① ページタイトルエリア */}
                    <div className="text-center mb-12 space-y-4">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.2em] uppercase text-emerald-950 block"
                            style={{ fontFamily: "'Lora', serif" }}
                        >
                            Privacy Policy
                        </h1>
                        <div className="w-16 h-px bg-emerald-900/30 mx-auto pt-2" />
                        <p
                            className="text-xs text-stone-500 tracking-wider pt-2"
                            style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}
                        >
                            当社ウェブサイトにおける個人情報のお取扱いについて
                        </p>
                    </div>

                    {/* ② メインコンテンツカード */}
                    <div className="bg-white p-6 sm:p-10 rounded-3xl border border-emerald-900/5 shadow-[0_15px_40px_rgba(4,47,31,0.03)] font-medium text-stone-600 leading-relaxed text-sm" style={{ fontFamily: "'BIZ UDPGothic', sans-serif" }}>
                        <div className="space-y-10">

                            {/* 前文 */}
                            <p className="text-stone-700 leading-loose">
                                木本生花株式会社（以下「当社」といいます）は、お客様からご提供いただいた氏名、住所その他のプライバシー・個人情報（以下「個人情報」といいます）を保護することを当社の社会的責務であると考えております。当社のウェブサイトでは、個人情報の取扱いについて、以下の通り個人情報の保護をはかります。
                            </p>

                            {/* １．個人情報の利用目的 */}
                            <div className="border-t border-stone-200/60 pt-8">
                                <h2 className="text-base font-bold text-emerald-950 mb-3 tracking-wide flex items-center gap-2">
                                    <span className="text-emerald-800 font-extrabold">１．</span>個人情報の利用目的
                                </h2>
                                <p className="pl-0 sm:pl-7 leading-loose text-stone-600">
                                    お客様からご提供いただく個人情報は、当ウェブサイト上の目的（問合せ）にのみ利用致します。<br />
                                    予め同意をいただかない限り、お客様の個人情報を、上記目的以外に利用することはありません。
                                </p>
                            </div>

                            {/* ２．第三者への提供 */}
                            <div className="border-t border-stone-200/60 pt-8">
                                <h2 className="text-base font-bold text-emerald-950 mb-3 tracking-wide flex items-center gap-2">
                                    <span className="text-emerald-800 font-extrabold">２．</span>第三者への提供
                                </h2>
                                <p className="pl-0 sm:pl-7 leading-loose text-stone-600">
                                    お客様からご提供いただいた個人情報は、第三者に提供いたしません。<br />
                                    なお、法的な命令等により個人情報の開示が要求された場合はこの限りではありません。
                                </p>
                            </div>

                            {/* ３．個人情報の管理 */}
                            <div className="border-t border-stone-200/60 pt-8">
                                <h2 className="text-base font-bold text-emerald-950 mb-3 tracking-wide flex items-center gap-2">
                                    <span className="text-emerald-800 font-extrabold">３．</span>個人情報の管理
                                </h2>
                                <p className="pl-0 sm:pl-7 leading-loose text-stone-600">
                                    当社は、お客様からご提供いただいた個人情報の漏洩及び流出を防止するため適切な措置を講じております。
                                </p>
                            </div>

                            {/* 会社名署名 */}
                            <div className="pt-8 text-right border-t border-stone-100">
                                <p className="font-bold text-emerald-950 tracking-wider">木本生花株式会社</p>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

            {/* フッターの配置 */}
            <Footer />
        </div>
    );
}