import React from "react";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-8 md:p-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <header className="bg-slate-800 text-white p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
              <Image
                src="/myself.jpg"
                alt="許彰麟 Brandon"
                fill
                className="rounded-full object-cover border-4 border-slate-700 shadow-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">許彰麟 (Brandon)</h1>
              <h2 className="text-xl text-slate-300 mb-4">軟體工程師</h2>
              <p className="leading-relaxed text-sm md:text-base text-slate-100">
                您好，我是許彰麟，目前任職於南茂科技的軟體工程師，
                負責MES產品標籤程式、智慧數據報表開發等。
                <br />
                我對於工作充滿熱情，擁有6年以上的前端後端開發經驗，包含網頁、視窗程式等，
                <br />
                並且樂於持續學習新的技術，期望在未來的職場生涯，
                自己的表現能盡善盡美，並帶出更多成果。
                持續學習是我的職涯信念，我利用業餘時間自主學習 React、React
                Native 等技術， 並積極運用 AI 工具提升開發效率。
              </p>
            </div>
          </div>
        </header>

        <div className="p-8 flex flex-col gap-8">
          {/* Work Experience */}
          <section>
            <h3 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-6">
              工作經驗
            </h3>

            {/* 南茂科技 */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-bold text-slate-800">南茂科技</h4>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  2024.11 - 迄今
                </span>
              </div>
              <p className="font-semibold text-slate-600 mb-3">軟體工程師</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "ASP.NET (C#)",
                  "Vue.js",
                  "Tailwind CSS",
                  "Informix",
                  "Web API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-slate-300 text-slate-600 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-6 text-sm text-gray-700">
                <div>
                  <h5 className="font-bold text-slate-800 mb-2 underline underline-offset-4 decoration-slate-300">
                    核心職責
                  </h5>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>
                      負責數據轉換平台開發與維護，實現機台 Raw Data
                      與客戶端數據之自動化同步。
                    </li>
                    <li>
                      執行系統分析 (SA) 與設計
                      (SD)，維護智能化標籤管理系統與跨組織數據傳輸機制。
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-3 underline underline-offset-4 decoration-slate-300">
                    主要成果
                  </h5>
                  <div className="space-y-4 ml-2">
                    <div>
                      <p className="font-bold text-slate-700 mb-1">
                        ■ MES 產品標籤程式開發
                      </p>
                      <ul className="list-decimal list-outside ml-6 space-y-1 text-gray-600">
                        <li>設計可擴展的標籤架構，支援多產線客製化需求。</li>
                        <li>
                          進行需求分析與系統設計，確保標籤格式精準對接客戶規範。
                        </li>
                        <li>實現產品出貨標籤自動化管理，顯著降低人工錯誤。</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mb-1">
                        ■ 智慧數據報表開發
                      </p>
                      <ul className="list-decimal list-outside ml-6 space-y-1 text-gray-600">
                        <li>
                          開發 Raw Data
                          客製轉換系統，支援多樣化客戶資料格式之無縫同步。
                        </li>
                        <li>
                          建立自動化 FTP 數據上傳機制，確保資料交換之即時性。
                        </li>
                        <li>整合 Teams 即時通知，串接異常警報系統。</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mb-1">
                        ■ 流程自動化
                      </p>
                      <ul className="list-decimal list-outside ml-6 space-y-1 text-gray-600">
                        <li>
                          導入現代前端框架(Vue.js)，運用 AI
                          工具協助開發，將繁瑣的xml維護流程，轉化為直覺的GUI介面，大幅縮減約80％工時。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 可成科技 */}
            <div className="mb-10 border-t border-gray-100 pt-8">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-bold text-slate-800">可成科技</h4>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  2019.12 - 2024.11
                </span>
              </div>
              <p className="font-semibold text-slate-600 mb-3">軟體工程師</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "ASP.NET (C#)",
                  "jQuery",
                  "訊光EEP",
                  "Oracle",
                  "MSSQL",
                  "MySQL",
                  "Power Automate",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-slate-300 text-slate-600 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-6 text-sm text-gray-700">
                <div>
                  <h5 className="font-bold text-slate-800 mb-2 underline underline-offset-4 decoration-slate-300">
                    核心職責
                  </h5>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>
                      負責 BPM 電子簽核系統開發與維護，並與 ERP 系統高度整合。
                    </li>
                    <li>
                      協助智能化系統導入，包含生產報表、可視化看板與流程優化。
                    </li>
                    <li>執行 SA/SD/PG 全流程開發，確保系統滿足業務需求。</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-3 underline underline-offset-4 decoration-slate-300">
                    主要成果
                  </h5>
                  <div className="space-y-4 ml-2 text-gray-600">
                    <div>
                      <p className="font-bold text-slate-700 mb-1">
                        ■ RPA 與自動化流程開發
                      </p>
                      <ul className="list-decimal list-outside ml-6 space-y-1">
                        <li>
                          開發日報彙總系統，減少人工統計時間；建置採購單自動擷取機制。
                        </li>
                        <li>
                          整合 LINE Notify
                          API，實現關鍵數據即時告警，加速異常處理。
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mb-1">
                        ■ 企業數位化與可視化看板
                      </p>
                      <ul className="list-decimal list-outside ml-6 space-y-1">
                        <li>
                          開發多類型 BPM 簽核表單，實現企業流程數位化審批。
                        </li>
                        <li>
                          建置生產即時監測看板，提供數據視覺化供現場監控生產狀態。
                        </li>
                        <li>開發客製化報表自動發送系統，提升決策效率。</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 資策會 */}
            <div className="mb-10 border-t border-gray-100 pt-8">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-bold text-slate-800">
                  資策會 (III) - 全端工程師就業培訓班
                </h4>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  2019.08 - 2019.11
                </span>
              </div>
              <p className="font-semibold text-slate-600 mb-3">全端開發學員</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "ASP.NET (C#)",
                  "Python",
                  "Swift",
                  "VMware",
                  "SQL Server",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-slate-300 text-slate-600 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-6 text-sm text-gray-700">
                <div>
                  <h5 className="font-bold text-slate-800 mb-2 underline underline-offset-4 decoration-slate-300">
                    核心養成
                  </h5>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>
                      參與為期三個月的全日制高強度培訓，掌握從系統架構規劃、資料庫設計到前端介面實作的全端開發技能。
                    </li>
                    <li>
                      學習跨領域技術整合，包含後端開發 (C#)、自動化腳本 (Python)
                      以及行動裝置應用 (Swift)。
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-3 underline underline-offset-4 decoration-slate-300">
                    結業專題：雲端自助旅館系統
                  </h5>
                  <div className="space-y-4 ml-2 text-gray-600">
                    <div>
                      <p className="font-bold text-slate-700 mb-1">
                        ■ 智慧自助入住櫃檯 (Kiosk)
                      </p>
                      <ul className="list-decimal list-outside ml-6 space-y-1">
                        <li>
                          使用C#開發 Kiosk
                          端系統，實現客戶自助入住與退房流程，降低人力維運成本。
                        </li>
                        <li>
                          跨語言整合Python OpenCV
                          技術，實作身分證件號碼自動辨識與驗證功能。
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mb-1">
                        ■ 雲端訂房系統與行動應用
                      </p>
                      <ul className="list-decimal list-outside ml-6 space-y-1">
                        <li>
                          運用ASP.NET
                          建置線上訂房平台，處理客戶預約資料與後台管理邏輯。
                        </li>
                        <li>
                          開發Swift iOS App，透過WebView
                          嵌入訂房模組，提供一致性的跨平台使用者體驗。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 聯宸科技 */}
            <div className="mb-10 border-t border-gray-100 pt-8">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-bold text-slate-800">聯宸科技</h4>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  2017.11 - 2019.06
                </span>
              </div>
              <p className="font-semibold text-slate-600 mb-3">測試工程師</p>
              <div className="space-y-6 text-sm text-gray-700">
                <div>
                  <h5 className="font-bold text-slate-800 mb-2 underline underline-offset-4 decoration-slate-300">
                    核心職責
                  </h5>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>
                      於科技大廠負責精密氣體系統檢測，具備高標準 SOP 執行能力。
                    </li>
                    <li>
                      透過嚴謹測試流程確保硬體系統穩定性，具備跨團隊溝通能力。
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-3 underline underline-offset-4 decoration-slate-300">
                    主要成果
                  </h5>
                  <div className="space-y-4 ml-2 text-gray-600">
                    <div>
                      <p className="font-bold text-slate-700 mb-1">
                        ■ 工程管路氣體測試
                      </p>
                      <ul className="list-decimal list-outside ml-6 space-y-1">
                        <li>
                          協助業主針對焊接完畢之管路進行壓力與洩漏測試，確保安全性。
                        </li>
                        <li>
                          擔任小組 Leader，帶領團隊完成公司指派之檢測任務。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-6">
              個人專案
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* MemePaste 專案 */}
              <div className="border border-gray-100 p-6 rounded-xl bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-slate-800">
                      MemePaste 梗圖鍵盤
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    一款專為提升社群溝通效率設計的第三方鍵盤，整合「自定義常用語」與「梗圖快貼」功能，解決移動端頻繁切換
                    App 的痛點。
                  </p>
                  <div className="space-y-3 mb-6">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      開發技術展現
                    </h5>
                    <ul className="text-xs text-gray-600 space-y-2 ml-4 list-disc">
                      <li>
                        使用 <strong>原生系統 Swift</strong>{" "}
                        開發，確保極致的鍵盤反應速度與系統相容性。
                      </li>
                      <li>
                        全程運用 <strong>AI Agent 協作開發</strong>
                        ，實現從需求分析、架構設計到功能實作的高效產出模式。
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/tw/app/memepaste-%25E6%25A2%2597%25E5%259C%2596%25E9%258D%25B5%25E7%259B%25A4/id6763888872&ved=2ahUKEwjDyN7q7JqUAxVhdfUHHbLELIIQFnoECB0QAQ&usg=AOvVaw0SO6MAXuj1cGvw4kad9nAN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-xs font-bold py-3 px-4 rounded-lg hover:bg-black transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  View on App Store
                </a>
              </div>

              {/* 衣起記 專案 */}
              <div className="border border-gray-100 p-6 rounded-xl bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-slate-800">
                      衣起記 (Yigiji)
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    結合生成式 AI
                    技術的跨平台數位衣櫃管理工具，解決使用者衣物管理與穿搭組合的痛點。
                  </p>
                  <br />
                  <div className="space-y-3 mb-6">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      開發技術展現
                    </h5>
                    <ul className="text-xs text-gray-600 space-y-2 ml-4 list-disc">
                      <li>
                        採用 <strong>React Native</strong> 開發，同時支援 iOS 與
                        Android 平台。
                      </li>
                      <li>
                        全程運用語言模型協作開發，並串接 API Key 實現{" "}
                        <strong>AI 影像辨識</strong>
                        ，完成衣物自動分類與標籤化管理。
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/tw/app/%25E8%25A1%25A3%25E8%25B5%25B7%25E8%25A8%2598-%25E4%25BD%25A0%25E7%259A%2584%25E6%2595%25B8%25E4%25BD%258D%25E8%25A1%25A3%25E6%25AB%25A5%25E8%2588%2587%25E7%25A9%25BF%25E6%2590%25AD%25E7%25B4%2580%25E9%258C%2584/id6758372787&ved=2ahUKEwjX9e_B7ZqUAxVoh68BHXCsDDwQFnoECB4QAQ&usg=AOvVaw0s9Fc_6EJkCpfWKbFcC4au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-xs font-bold py-3 px-4 rounded-lg hover:bg-black transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  View on App Store
                </a>
              </div>
            </div>
          </section>

          {/* Education & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">
                學歷
              </h3>
              <div>
                <h4 className="font-bold text-lg">南台科技大學</h4>
                <p className="text-slate-600">資訊管理所 碩士</p>
                <p className="text-sm text-gray-500">2025 年畢業</p>
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">
                語言
              </h3>
              <div>
                <p className="text-gray-700">
                  <strong>英文：</strong>略懂 (持續進修中)
                </p>
                <p className="text-gray-700">
                  <strong>中文：</strong>母語
                </p>
              </div>
            </section>
          </div>

          <section>
            <h3 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">
              技能
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-bold mb-2 text-slate-800">全端開發能力</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>前端技術:</strong> JavaScript, jQuery, Vue.js
                  </li>
                  <li>
                    <strong>後端框架:</strong> ASP.NET (C#)
                  </li>
                  <li>
                    <strong>資料庫:</strong> Informix, Oracle, MSSQL, MySQL
                  </li>
                  <li>
                    <strong>開發工具:</strong> Visual Studio, VS Code
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-slate-800">
                  技術擴展與自主學習
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>跨平台開發:</strong> React Native
                  </li>
                  <li>
                    <strong>現代前端:</strong> React, Next.js
                  </li>
                  <li>
                    <strong>部署/工具:</strong> Vercel, GitHub, AI Agent 應用
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* About Me Section */}
          {/* About Me / Autobiography Section */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-8 text-slate-800">
              關於我 / 自傳
            </h3>

            <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-10 px-1">
              {/* 自我介紹 */}
              <div>
                <p>
                  我是許彰麟，來自台南市，畢業於南台科技大學資訊管理研究所。現任職於南茂科技，主要負責
                  MES
                  產品標籤系統開發、智慧報表系統建置以及生產數據自動化轉換等核心專案。這些經驗使我對系統分析與架構設計有更深入的掌握，並擅長處理複雜的需求溝通與專案規劃。
                </p>
              </div>

              {/* 工作信念與實績 */}
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <span className="w-1.5 h-6 bg-slate-800 mr-3"></span>
                  工作信念
                </h4>
                <p className="mb-4">
                  我深信優秀的軟體不只是功能達成，更要能真正解決問題。在專案開發中，我習慣從使用者痛點、維護穩定性及架構靈活性三個維度進行思考，確保開發成果能從「負責」進化到
                  「當責」。
                </p>
              </div>

              {/* 持續學習與 AI 應用 */}
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <span className="w-1.5 h-6 bg-slate-800 mr-3"></span>
                  持續學習與成長
                </h4>
                <p className="mb-3">
                  技術日新月異，持續學習是我的職涯信念。我透過以下方式精進自己：
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
                  <li>
                    參加技術社群與研討會： 吸收業界最新趨勢，如參與 GDG NCKU
                    開發者社群活動。
                  </li>
                  <li>
                    善用 AI 工具 (Gemini、Claude)：
                    優化程式碼品質並提升開發效率，實踐 AI 驅動開發。
                  </li>
                  <li>
                    將學習成果應用於實際專案：
                    從實戰中累積經驗，如開發個人專案《衣起記》與 MemePaste。
                  </li>
                </ul>
              </div>

              {/* 未來展望 */}
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <span className="w-1.5 h-6 bg-slate-800 mr-3"></span>
                  展望未來
                </h4>
                <p>
                  展望未來，我期許自己成為團隊中的技術引領者。我熱於將開發心法、架構思維及實務經驗轉化為團隊資產，透過技術分享與架構討論，協助夥伴共同成長並優化整體開發品質。
                </p>
                <p>
                  在上述工作經驗中，磨鍊了自己的抗壓性、細心度、溝通表達的能力特質，並時刻檢視自己與修正不足之處，相信定能勝任此職務，並為貴公司創造正面價值，與團隊共同成長。
                </p>
                <p>感謝您撥空閱讀我的自傳，希望能有機會與您面談。</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
