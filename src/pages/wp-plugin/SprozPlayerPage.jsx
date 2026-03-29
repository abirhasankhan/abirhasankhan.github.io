// pages/SprozPlayerPage.jsx
import { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import FireflyLayer from "/src/components/FireflyLayer";

// ── Data ──────────────────────────────────────────────────────────────────────

const features = [
	{
		emoji: "🎵",
		title: "Persistent Playback",
		desc: "Shell isolation + AJAX swap keeps WaveSurfer alive across every page. Music never stops navigating.",
	},
	{
		emoji: "🎨",
		title: "Spotify-Style UI",
		desc: "Hero cover, animated playing bars, full tracklist table with album, genre columns and active track highlight.",
	},
	{
		emoji: "🗃️",
		title: "Custom DB Tables",
		desc: "9 dedicated MySQL tables for tracks, albums, genres, categories, tags — no CPT bloat, full query control.",
	},
	{
		emoji: "☁️",
		title: "External Audio",
		desc: "Host on S3, Cloudflare R2, Backblaze B2 or any CDN. Paste a direct URL — no re-encoding, no limits.",
	},
	{
		emoji: "⚡",
		title: "Full Admin CRUD",
		desc: "Quick Edit, sortable tracklist, album manager, taxonomy pages. Everything inline — no page reloads.",
	},
	{
		emoji: "🔌",
		title: "REST API",
		desc: "GET /tracks, GET /albums, POST /play/{id}. Filter by genre, category, tag. Use it headlessly.",
	},
];

const shortcodes = [
	{ code: '[sproz_player album="42"]', label: "Album" },
	{ code: '[sproz_player track="15"]', label: "Track" },
	{ code: '[sproz_player genre="jazz"]', label: "Genre" },
	{ code: '[sproz_player tag="chill" limit="10"]', label: "Tag" },
	{ code: '[sproz_player album="42" skin="light"]', label: "Light skin" },
];

const steps = [
	{
		n: "01",
		title: "Shell isolation",
		desc: "On boot, the sticky bar and WaveSurfer move into #sproz-shell — a position:fixed div on <body> that is NEVER replaced.",
	},
	{
		n: "02",
		title: "Content wrapping",
		desc: "All page content wraps into #sproz-content — the single stable swap target for every navigation.",
	},
	{
		n: "03",
		title: "Link interception",
		desc: "Every internal link click is captured. The target URL is fetched silently with fetch() instead of reloading.",
	},
	{
		n: "04",
		title: "innerHTML swap",
		desc: "Only #sproz-content is swapped. The shell, WaveSurfer instance, and audio element are never touched.",
	},
	{
		n: "05",
		title: "Pre-parse strip",
		desc: "Shell elements are stripped from fetched HTML via regex BEFORE DOM parsing — no duplicate audio init.",
	},
];

const stack = [
	"PHP 8.0+",
	"WordPress",
	"WaveSurfer.js",
	"Vanilla JS (ES5)",
	"MySQL",
	"DM Sans + Syne",
];

// ── Sub-components ────────────────────────────────────────────────────────────

function WaveBars({ count = 20 }) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-end",
				gap: 2,
				height: 28,
			}}
		>
			{Array.from({ length: count }).map((_, i) => (
				<div
					key={i}
					style={{
						width: 3,
						borderRadius: 2,
						background: "#b4ff6e",
						height: `${30 + Math.random() * 70}%`,
						animation: `sprozWave ${0.5 + Math.random() * 0.8}s ease-in-out infinite alternate`,
						animationDelay: `${Math.random() * 0.5}s`,
						opacity: 0.6 + Math.random() * 0.4,
					}}
				/>
			))}
		</div>
	);
}

function PlayerMock() {
	const [active, setActive] = useState(1);
	const bg = "#0a0a0f";
	const bg2 = "#12121a";
	const border = "rgba(180,255,110,.1)";
	const muted = "#666680";
	const text = "#f0f0f5";
	const accent = "#b4ff6e";

	const tracks = [
		{ title: "Deep House Asia", dur: "3:14" },
		{ title: "Electric Heat", dur: "2:42" },
		{ title: "Pulse Wave", dur: "3:03" },
		{ title: "Voltage Drive", dur: "2:53" },
	];

	return (
		<div
			style={{
				background: bg,
				border: `1px solid ${border}`,
				borderRadius: 16,
				overflow: "hidden",
				fontFamily: "ui-monospace,monospace",
				boxShadow: "0 24px 64px rgba(0,0,0,.6)",
			}}
		>
			{/* Hero */}
			<div
				style={{
					display: "flex",
					gap: 16,
					padding: 18,
					background: bg2,
					borderBottom: `1px solid ${border}`,
				}}
			>
				<div
					style={{
						width: 80,
						height: 80,
						borderRadius: 10,
						background: "#1c1f2e",
						flexShrink: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: 28,
						boxShadow: "0 8px 24px rgba(0,0,0,.5)",
					}}
				>
					🎵
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
					}}
				>
					<div
						style={{
							fontSize: 10,
							fontWeight: 700,
							color: accent,
							letterSpacing: "0.12em",
							marginBottom: 4,
						}}
					>
						// PLAYLIST
					</div>
					<div
						style={{
							fontSize: 18,
							fontWeight: 800,
							color: text,
							marginBottom: 4,
						}}
					>
						Deep House
					</div>
					<div style={{ fontSize: 11, color: muted }}>
						4 Tracks · 11 min
					</div>
				</div>
			</div>
			{/* Head */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "32px 1fr 44px",
					padding: "7px 14px",
					fontSize: 9,
					fontWeight: 700,
					color: muted,
					letterSpacing: "0.1em",
					borderBottom: `1px solid ${border}`,
				}}
			>
				<span>#</span>
				<span>TRACK</span>
				<span style={{ textAlign: "right" }}>⏱</span>
			</div>
			{/* Rows */}
			{tracks.map((t, i) => (
				<div
					key={i}
					onClick={() => setActive(i)}
					style={{
						display: "grid",
						gridTemplateColumns: "32px 1fr 44px",
						alignItems: "center",
						padding: "8px 14px",
						cursor: "pointer",
						background:
							active === i
								? "rgba(180,255,110,.09)"
								: "transparent",
						borderLeft: `3px solid ${active === i ? accent : "transparent"}`,
						borderBottom: `1px solid ${border}`,
						transition: "all .12s",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{active === i ? (
							<WaveBars count={3} />
						) : (
							<span style={{ fontSize: 10, color: muted }}>
								{i + 1}
							</span>
						)}
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8,
						}}
					>
						<div
							style={{
								width: 28,
								height: 28,
								borderRadius: 5,
								background: "#1a1a26",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 12,
							}}
						>
							♪
						</div>
						<span
							style={{
								fontSize: 12,
								fontWeight: 600,
								color: active === i ? accent : text,
							}}
						>
							{t.title}
						</span>
					</div>
					<span
						style={{
							fontSize: 10,
							color: muted,
							textAlign: "right",
						}}
					>
						{t.dur}
					</span>
				</div>
			))}
		</div>
	);
}

function StickyBarMock() {
	const [playing, setPlaying] = useState(true);
	const [progress, setProgress] = useState(35);
	const bg = "#0e0e14";
	const border = "rgba(180,255,110,.15)";
	const accent = "#b4ff6e";
	const muted = "#666680";
	const text = "#f0f0f5";

	useEffect(() => {
		if (!playing) return;
		const t = setInterval(
			() => setProgress((p) => (p >= 100 ? 0 : p + 0.3)),
			100,
		);
		return () => clearInterval(t);
	}, [playing]);

	return (
		<div
			style={{
				background: bg,
				border: `1px solid ${border}`,
				borderRadius: 12,
				overflow: "hidden",
				fontFamily: "ui-monospace,monospace",
				boxShadow: "0 -4px 24px rgba(0,0,0,.4)",
			}}
		>
			<div style={{ height: 2, background: "rgba(255,255,255,.06)" }}>
				<div
					style={{
						height: "100%",
						width: `${progress}%`,
						background: accent,
						transition: "width .1s linear",
						boxShadow: `0 0 6px ${accent}`,
					}}
				/>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					padding: "10px 16px",
					gap: 14,
				}}
			>
				<div
					style={{
						width: 36,
						height: 36,
						borderRadius: 6,
						background: "#1a1a26",
						flexShrink: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					🎵
				</div>
				<div style={{ minWidth: 0, flex: 1 }}>
					<div
						style={{
							fontSize: 12,
							fontWeight: 700,
							color: text,
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}
					>
						Deep House Asia
					</div>
					<div style={{ fontSize: 10, color: muted }}>
						CodeSamurai
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 6,
						flex: 2,
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8,
						}}
					>
						<button
							style={{
								background: "none",
								border: "none",
								color: muted,
								fontSize: 14,
								cursor: "pointer",
							}}
						>
							⏮
						</button>
						<button
							onClick={() => setPlaying((p) => !p)}
							style={{
								width: 32,
								height: 32,
								borderRadius: "50%",
								background: accent,
								border: "none",
								cursor: "pointer",
								fontSize: 12,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#0a0a0f",
								boxShadow: `0 0 12px ${accent}66`,
							}}
						>
							{playing ? "⏸" : "▶"}
						</button>
						<button
							style={{
								background: "none",
								border: "none",
								color: muted,
								fontSize: 14,
								cursor: "pointer",
							}}
						>
							⏭
						</button>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 6,
							width: "100%",
						}}
					>
						<span
							style={{ fontSize: 9, color: muted, minWidth: 24 }}
						>
							0:42
						</span>
						<div
							style={{
								flex: 1,
								height: 3,
								background: "rgba(255,255,255,.1)",
								borderRadius: 2,
								overflow: "hidden",
							}}
						>
							<div
								style={{
									height: "100%",
									width: `${progress}%`,
									background: accent,
									transition: "width .1s linear",
								}}
							/>
						</div>
						<span
							style={{
								fontSize: 9,
								color: muted,
								minWidth: 24,
								textAlign: "right",
							}}
						>
							2:42
						</span>
					</div>
				</div>
				<div style={{ display: "flex", alignItems: "center", gap: 4 }}>
					<span style={{ color: muted, fontSize: 12 }}>🔊</span>
					<div
						style={{
							width: 50,
							height: 3,
							background: "rgba(255,255,255,.1)",
							borderRadius: 2,
						}}
					>
						<div
							style={{
								width: "70%",
								height: "100%",
								background: "#f0f0f5",
								borderRadius: 2,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function CodeBlock({ code, darkMode }) {
	const [copied, setCopied] = useState(false);
	const copy = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};
	const bg = darkMode ? "#111827" : "#faf5eb";
	const border = darkMode ? "rgba(74,222,128,.2)" : "rgba(147,51,234,.2)";
	const accent = darkMode ? "#4ade80" : "#9333ea";
	const muted = darkMode ? "#6b7280" : "#9ca3af";

	return (
		<div
			style={{
				position: "relative",
				background: bg,
				border: `1px solid ${border}`,
				borderRadius: 10,
				padding: "14px 16px",
				fontFamily: "ui-monospace,monospace",
				fontSize: 13,
				color: accent,
				overflowX: "auto",
			}}
		>
			<code>{code}</code>
			<button
				onClick={copy}
				style={{
					position: "absolute",
					top: 10,
					right: 10,
					background: copied
						? `${accent}22`
						: darkMode
							? "rgba(255,255,255,.06)"
							: "rgba(0,0,0,.04)",
					border: `1px solid ${copied ? accent : border}`,
					borderRadius: 6,
					color: copied ? accent : muted,
					fontSize: 10,
					padding: "3px 8px",
					cursor: "pointer",
					fontFamily: "ui-monospace,monospace",
				}}
			>
				{copied ? "✓ copied" : "copy"}
			</button>
		</div>
	);
}

// ── Main Page ─────────────────────────────────────────────────────────────────

const SprozPlayerPage = () => {
	const { darkMode } = useOutletContext();
	const [activeShortcode, setActiveShortcode] = useState(0);

	const bg = darkMode ? "bg-gray-900" : "bg-amber-50";
	const text = darkMode ? "text-green-400" : "text-purple-900";
	const accent = darkMode ? "text-green-400" : "text-purple-600";
	const accentBg = darkMode ? "bg-green-400" : "bg-purple-600";
	const cardBg = darkMode ? "bg-gray-800/60" : "bg-white/70";
	const cardBorder = darkMode ? "border-green-400/20" : "border-purple-200";
	const mutedText = darkMode ? "text-gray-400" : "text-gray-500";
	const labelColor = darkMode ? "text-green-500" : "text-purple-400";
	const gridColor = darkMode ? "#10b981" : "#8b5cf6";

	return (
		<div
			className={`min-h-screen transition-all duration-500 ${bg} ${text}`}
		>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes sprozWave { from { transform: scaleY(.3); } to { transform: scaleY(1); } }
        @keyframes sprozFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes sprozFadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes sprozPulse { 0%,100%{opacity:.3} 50%{opacity:.8} }
        .sproz-card:hover { transform: translateY(-4px); }
        .sproz-card { transition: transform .2s, box-shadow .2s; }
        .sproz-btn-pill:hover { opacity:.85; transform:scale(1.04); }
        .sproz-btn-pill { transition: opacity .15s, transform .15s; }
        .sproz-stack-pill:hover { transform: scale(1.06); }
        .sproz-stack-pill { transition: transform .15s; }
      `}</style>

			{/* Fireflies */}
			<FireflyLayer
				darkMode={darkMode}
				enabled={true}
				onUpdateCount={() => {}}
			/>

			{/* Retro Grid — same as Portfolio.jsx */}
			<div className="fixed inset-0 opacity-10 pointer-events-none">
				<div
					className={`w-full h-full ${darkMode ? "bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900" : "bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400"}`}
					style={{
						backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
						backgroundSize: "50px 50px",
					}}
				/>
			</div>

			<div className="relative z-10">
				{/* ── HERO ──────────────────────────────────────────────────── */}
				<section className="min-h-screen flex items-center justify-center px-6 py-32">
					<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left */}
						<div style={{ animation: "sprozFadeUp .8s ease both" }}>
							<div
								className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-mono font-bold mb-6 ${darkMode ? "border-green-400/40 text-green-400 bg-green-400/10" : "border-purple-400/40 text-purple-600 bg-purple-100/60"}`}
							>
								⚡ WordPress Plugin · v2.3.0 · GPL-2.0
							</div>

							<h1
								className="font-mono font-bold mb-6 leading-tight"
								style={{
									fontSize: "clamp(2.4rem,5vw,3.6rem)",
									letterSpacing: "-0.03em",
								}}
							>
								<span className="opacity-50">&lt;</span>
								Sproz
								<br />
								<span className={accent}>Music</span>
								<br />
								Player
								<span className="opacity-50">/&gt;</span>
							</h1>

							<p
								className={`text-base leading-relaxed mb-8 max-w-md font-mono ${mutedText}`}
							>
								A self-hosted WordPress music player. Persistent
								playback, Spotify-style UI, and zero audio
								interruption across page navigations.
							</p>

							<div className="flex flex-wrap gap-3">
								<a
									href="https://github.com/abirhasankhan/sproz-music-player"
									target="_blank"
									rel="noreferrer"
									className={`sproz-btn-pill inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-sm ${accentBg} ${darkMode ? "text-gray-900" : "text-white"}`}
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
									</svg>
									GitHub
								</a>
								<a
									href="#features"
									className={`sproz-btn-pill inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-sm border ${darkMode ? "border-green-400/40 text-green-400 hover:bg-green-400/10" : "border-purple-400/40 text-purple-600 hover:bg-purple-100"}`}
								>
									See Features ↓
								</a>
							</div>
						</div>

						{/* Right — live mockups */}
						<div
							className="flex flex-col gap-5"
							style={{
								animation: "sprozFadeUp .8s ease .15s both",
							}}
						>
							<div
								style={{
									animation:
										"sprozFloat 4s ease-in-out infinite",
								}}
							>
								<PlayerMock />
							</div>
							<StickyBarMock />
						</div>
					</div>
				</section>

				{/* ── FEATURES ──────────────────────────────────────────────── */}
				<section id="features" className="px-6 py-24 max-w-6xl mx-auto">
					<div className="text-center mb-14">
						<div
							className={`font-mono text-xs font-bold tracking-widest uppercase mb-3 ${labelColor}`}
						>
							// what it does
						</div>
						<h2
							className="font-mono font-bold"
							style={{
								fontSize: "clamp(1.8rem,3vw,2.4rem)",
								letterSpacing: "-0.02em",
							}}
						>
							Built different
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{features.map((f, i) => (
							<div
								key={i}
								className={`sproz-card p-6 rounded-2xl border backdrop-blur-sm ${cardBg} ${cardBorder}`}
								style={{
									animation: `sprozFadeUp .5s ease ${i * 0.08}s both`,
								}}
							>
								<div
									className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl mb-5 ${darkMode ? "bg-green-400/10 border-green-400/20" : "bg-purple-100/80 border-purple-200"}`}
								>
									{f.emoji}
								</div>
								<h3
									className={`font-mono font-bold text-sm mb-2 ${accent}`}
								>
									{f.title}
								</h3>
								<p
									className={`font-mono text-xs leading-relaxed ${mutedText}`}
								>
									{f.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* ── SHORTCODES ────────────────────────────────────────────── */}
				<section
					className={`px-6 py-20 border-y ${darkMode ? "border-green-400/10 bg-gray-800/30" : "border-purple-200/60 bg-white/30"} backdrop-blur-sm`}
				>
					<div className="max-w-3xl mx-auto">
						<div className="text-center mb-10">
							<div
								className={`font-mono text-xs font-bold tracking-widest uppercase mb-3 ${labelColor}`}
							>
								// shortcode
							</div>
							<h2
								className="font-mono font-bold"
								style={{
									fontSize: "clamp(1.6rem,3vw,2.2rem)",
									letterSpacing: "-0.02em",
								}}
							>
								Embed anywhere
							</h2>
						</div>
						<div className="flex flex-wrap gap-2 mb-6 justify-center">
							{shortcodes.map((s, i) => (
								<button
									key={i}
									onClick={() => setActiveShortcode(i)}
									className={`font-mono text-xs font-bold px-4 py-2 rounded-full border transition-all duration-150 ${
										activeShortcode === i
											? darkMode
												? "bg-green-400/15 border-green-400/50 text-green-400"
												: "bg-purple-100 border-purple-400 text-purple-700"
											: darkMode
												? "border-gray-700 text-gray-400 hover:border-green-400/30 hover:text-green-400"
												: "border-purple-200 text-gray-500 hover:border-purple-400 hover:text-purple-600"
									}`}
								>
									[{s.label}]
								</button>
							))}
						</div>
						<CodeBlock
							code={shortcodes[activeShortcode].code}
							darkMode={darkMode}
						/>
					</div>
				</section>

				{/* ── HOW IT WORKS ──────────────────────────────────────────── */}
				<section className="px-6 py-24 max-w-4xl mx-auto">
					<div className="text-center mb-14">
						<div
							className={`font-mono text-xs font-bold tracking-widest uppercase mb-3 ${labelColor}`}
						>
							// architecture
						</div>
						<h2
							className="font-mono font-bold"
							style={{
								fontSize: "clamp(1.8rem,3vw,2.4rem)",
								letterSpacing: "-0.02em",
							}}
						>
							Zero-gap playback
						</h2>
						<p className={`font-mono text-sm mt-3 ${mutedText}`}>
							how music never stops between pages
						</p>
					</div>
					<div className="flex flex-col">
						{steps.map((s, i) => (
							<div
								key={i}
								className={`flex gap-6 py-6 ${i < steps.length - 1 ? `border-b ${darkMode ? "border-green-400/10" : "border-purple-100"}` : ""}`}
								style={{
									animation: `sprozFadeUp .5s ease ${i * 0.1}s both`,
								}}
							>
								<div
									className={`font-mono font-bold shrink-0 leading-none mt-1 ${darkMode ? "text-green-400/20" : "text-purple-200"}`}
									style={{ fontSize: "2rem" }}
								>
									{s.n}
								</div>
								<div>
									<div
										className={`font-mono font-bold text-sm mb-1.5 ${accent}`}
									>
										{s.title}
									</div>
									<div
										className={`font-mono text-xs leading-relaxed ${mutedText}`}
									>
										{s.desc}
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* ── TECH STACK ────────────────────────────────────────────── */}
				<section
					className={`px-6 py-16 border-t ${darkMode ? "border-green-400/10" : "border-purple-100"} text-center`}
				>
					<div
						className={`font-mono text-xs font-bold tracking-widest uppercase mb-8 ${labelColor}`}
					>
						// tech stack
					</div>
					<div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
						{stack.map((s, i) => (
							<div
								key={i}
								className={`sproz-stack-pill font-mono text-xs font-bold px-4 py-2 rounded-full border ${darkMode ? "border-green-400/20 text-green-400/70 bg-green-400/5" : "border-purple-200 text-purple-500 bg-purple-50/60"}`}
							>
								{s}
							</div>
						))}
					</div>
				</section>

				{/* ── CTA ───────────────────────────────────────────────────── */}
				<section className="px-6 py-28 text-center">
					<div
						className={`font-mono text-xs font-bold tracking-widest uppercase mb-6 ${labelColor}`}
					>
						// get it
					</div>
					<h2
						className="font-mono font-bold mb-4"
						style={{
							fontSize: "clamp(2rem,4vw,3rem)",
							letterSpacing: "-0.02em",
						}}
					>
						Open source.
						<br />
						<span className={accent}>Free forever.</span>
					</h2>
					<p className={`font-mono text-sm mb-10 ${mutedText}`}>
						GPL-2.0 licensed. No SaaS fees. Host your music your
						way.
					</p>
					<div className="flex flex-wrap gap-4 justify-center">
						<a
							href="https://github.com/abirhasankhan/sproz-music-player"
							target="_blank"
							rel="noreferrer"
							className={`sproz-btn-pill inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-mono font-bold text-sm ${accentBg} ${darkMode ? "text-gray-900" : "text-white"}`}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
							</svg>
							View on GitHub
						</a>
						<a
							href="https://github.com/abirhasankhan/sproz-music-player/releases"
							target="_blank"
							rel="noreferrer"
							className={`sproz-btn-pill inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-mono font-bold text-sm border ${darkMode ? "border-green-400/40 text-green-400 hover:bg-green-400/10" : "border-purple-400/40 text-purple-600 hover:bg-purple-100"}`}
						>
							⬇ Download .zip
						</a>
					</div>
				</section>

				{/* ── FOOTER ────────────────────────────────────────────────── */}
				<footer
					className={`border-t px-6 py-6 text-center font-mono text-xs ${mutedText} ${darkMode ? "border-green-400/10" : "border-purple-100"}`}
				>
					built by{" "}
					<a
						href="https://abirkhan.is-a.dev"
						className={`font-bold ${accent}`}
					>
						CodeSamurai
					</a>{" "}
					· GPL-2.0 ·{" "}
					<a
						href="https://github.com/abirhasankhan/sproz-music-player"
						target="_blank"
						rel="noreferrer"
						className={mutedText}
					>
						GitHub
					</a>
				</footer>
			</div>
		</div>
	);
};

export default SprozPlayerPage;
