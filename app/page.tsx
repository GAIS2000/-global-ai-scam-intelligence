"use client";

import { useState } from "react";

export default function Home() {
  const [scamInput, setScamInput] = useState("");
  const [result, setResult] = useState("");
  const features = [
    {
      title: "AI Scam Detection",
      cn: "AI 诈骗检测",
      desc: "Analyze suspicious messages, websites, wallet addresses and project names.",
    },
    {
      title: "Scam Database",
      cn: "诈骗案例数据库",
      desc: "Search reported scam cases, risky websites, phone numbers and wallet addresses.",
    },
    {
      title: "Report a Scam",
      cn: "举报诈骗",
      desc: "Upload screenshots, phone numbers, URLs, wallets and supporting evidence.",
    },
    {
      title: "Scam Intelligence",
      cn: "诈骗情报分析",
      desc: "AI classifies scam methods and connects related accounts, websites and wallets.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <header className="border-b border-white/10 bg-[#06111f]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xl font-bold tracking-wide">GAISN</div>
            <div className="text-xs text-cyan-300">
              Global AI Scam Intelligence Network
            </div>
          </div>

          <nav className="hidden gap-7 text-sm text-slate-300 md:flex">
            <a href=" " className="hover:text-white">AI Detection</a >
            <a href="#database" className="hover:text-white">Scam Database</a >
            <a href="#report" className="hover:text-white">Report</a >
            <a href="#about" className="hover:text-white">About</a >
          </nav>

          <button className="rounded-lg border border-cyan-400/60 px-4 py-2 text-sm text-cyan-200">
            English / 中文
          </button>
        {result && (
          <div className="mt-4 rounded-xl border border-cyan-400/30 bg-cyan-950/30 p-4 text-sm text-cyan-100">
            {result}
          </div>
        )}
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,153,255,0.22),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              AI-Powered Global Fraud Prevention
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Global AI Scam
              <br />
              Intelligence Network
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-cyan-300 md:text-3xl">
              全球 AI 反诈情报网络
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Use AI, community reports and structured intelligence to identify
              suspicious messages, websites, phone numbers, social accounts and
              cryptocurrency wallets.
            </p >

            <p className="mt-3 max-w-2xl text-slate-400">
              利用人工智能、社区举报和情报关联分析，帮助用户识别诈骗风险，
              建立全球诈骗案例数据库。
            </p >

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#detect"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Check Scam Risk
              </a >

              <a
                href="#report"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/5"
              >
                Report a Scam
              </a >
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg rounded-3xl border border-cyan-400/20 bg-[#0a1b2d] p-7 shadow-2xl">
              <div className="mb-5 text-sm text-cyan-300">GAISN AI ANALYSIS</div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-sm text-slate-400">Risk Search</div>
                <div className="mt-3 text-lg font-semibold">
                  Phone · URL · Wallet · Message · Project
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-slate-400">AI Classification</div>
                  <div className="mt-2 text-cyan-300">Scam Method Analysis</div>
                </div>

                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-slate-400">Community Reports</div>
                  <div className="mt-2 text-cyan-300">Evidence Review</div>
                </div>

                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-slate-400">Entity Linking</div>
                  <div className="mt-2 text-cyan-300">Accounts & Wallets</div>
                </div>

                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-slate-400">Risk Status</div>
                  <div className="mt-2 text-amber-300">
                    Evidence-Based
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="detect" className="border-y border-white/10 bg-[#081726]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              AI Scam Detection
            </div>
            <h2 className="mt-3 text-3xl font-bold">
              Check suspicious information with AI
            </h2>
            <p className="mt-3 text-slate-400">
              AI诈骗风险检测
            </p >
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-[#06111f] p-6">
            <div className="flex flex-wrap gap-2 text-sm">
              {["Message", "URL", "Phone", "Wallet", "Project"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <textarea
          value={scamInput}
          onChange={(e) => setScamInput(e.target.value)}
              placeholder="Paste suspicious message, URL, phone number, wallet address or project name..."
              className="mt-5 min-h-36 w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
            />

            <button
          onClick={async () => {
            if (!scamInput.trim()) {
              setResult("Please enter suspicious information first.");
              return;
            }

            setResult("Analyzing with AI...");

            try {
              const response = await fetch("/api/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  input: scamInput,
                  type: "Message",
                }),
              });

              const data = await response.json();

              if (!response.ok) {
                setResult(data.error || "AI analysis failed.");
                return;
              }

              setResult(data.analysis);
            } catch {
              setResult("Unable to connect to AI analysis service.");
            }
          }}
          className="mt-4 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-slate-950"
        >
              Analyze Scam Risk
            </button>

            <p className="mt-3 text-center text-xs text-slate-500">
              AI risk analysis does not represent a judicial determination.
            </p >
          </div>
        </div>
      </section>

      <section id="database" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Platform
          </div>
          <h2 className="mt-3 text-3xl font-bold">
            Global Scam Intelligence Infrastructure
          </h2>
          <p className="mt-3 text-slate-400">
            全球诈骗情报基础设施
          </p >
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-[#0a1929] p-6"
            >
              <div className="text-lg font-bold">{feature.title}</div>
              <div className="mt-1 text-sm text-cyan-300">{feature.cn}</div>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {feature.desc}
              </p >
            </div>
          ))}
        </div>
      </section>

      <section id="report" className="bg-[#081726]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Community Reporting
              </div>

              <h2 className="mt-3 text-3xl font-bold">
                Help build the global scam database
              </h2>

              <h3 className="mt-2 text-xl text-slate-300">
                用户上传诈骗案例
              </h3>

              <p className="mt-6 leading-7 text-slate-400">
                Users will be able to submit suspicious phone numbers,
                WhatsApp or Telegram accounts, websites, cryptocurrency
                wallets, screenshots and case descriptions.
              </p >

              <p className="mt-4 leading-7 text-slate-400">
                用户提交的信息将经过 AI 预分析、重复检测和后台审核。
                未经核实的举报不会直接被描述为已确认诈骗事实。
              </p >
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#06111f] p-6">
              <div className="text-lg font-semibold">Report Information</div>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 p-3">
                  Phone / WhatsApp / Telegram
                </div>
                <div className="rounded-xl border border-white/10 p-3">
                  Website / URL
                </div>
                <div className="rounded-xl border border-white/10 p-3">
                  Crypto Wallet Address
                </div>
                <div className="rounded-xl border border-white/10 p-3">
                  Screenshot / Evidence
                </div>
                <div className="rounded-xl border border-white/10 p-3">
                  Case Description
                </div>
              </div>

              <button className="mt-5 w-full rounded-xl border border-cyan-400/40 py-3 text-cyan-300">
                Report Feature Coming Next
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-8 md:p-12">
          <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Our Mission
          </div>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold md:text-4xl">
            Detect scams. Connect intelligence. Warn people before money is lost.
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            GAISN aims to build a structured global intelligence network where
            AI assists with classification and correlation while important
            allegations remain subject to evidence review and human verification.
          </p >
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            © 2026 Global AI Scam Intelligence Network
          </div>

          <div>
            Detect · Connect · Warn
          </div>
        </div>
      </footer>
    </main>
  );
}