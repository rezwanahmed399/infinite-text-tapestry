/**
 * TAPESTRIA — Infinite Scrollable Image Tapestry Engine
 * Transforms natural text narratives into continuous, seamless scrollable visual tapestries.
 * Enhanced with Retina (Hi-DPI) scaling, mathematically continuous parallax, and interactive modals.
 */

(function () {
  'use strict';

  // --- Preset Stories in Bengali & English ---
  const PRESET_STORIES = {
    'cyber-story': `প্রথম অধ্যায়: মেগাসিটির সূচনা
বৃষ্টিভেজা রাতের নিওন আলোয় ভেসে যাচ্ছে নিয়ো-ঢাকা শহরের বহুতল স্কাইস্ক্র্যাপারগুলো। শূন্যে ভাসমান ফ্লাইং কার আর আলোর ট্র্যাফিক লাইনের ভেতর দিয়ে দূর দিগন্তে জ্বলছে এক বিশাল সাইবারনেটিক মনোলিথ।

দ্বিতীয় অধ্যায়: ডেটানেট ও ডাটা রিভার
শহরের নিচে নেমে এলে দেখা যায় কোটি কোটি অপটিক্যাল ফাইবারের নদী। সবুজ আর সায়ান আলোর ডাটা স্ট্রিম যেখানে অনবরত ছুটে চলেছে। বাতাসে ভাসছে হলোগ্রাফিক সংকেত আর অজানা এআই সিগন্যাল।

তৃতীয় অধ্যায়: উচ্চতার সীমানা ও মেঘের রাজ্য
শহরের সর্বোচ্চ টাওয়ারের চূড়া মেঘের স্তর ভেদ করে মহাকাশের কিনারে পৌঁছে গেছে। নিচে পড়ে থাকা যান্ত্রিক শহর এখন কেবল দূর নক্ষত্রের মতো জ্বলজ্বল করছে, আর উপরে উন্মোচিত হচ্ছে শান্ত নিস্তব্ধ অন্ধকার শূন্যতা।

চতুর্থ অধ্যায়: ডিজিটাল ভোর
কালো আকাশের সীমানায় হঠাৎ জ্বলে উঠল কৃত্রিম ভোরের প্রথম কিরণ। সোনালী ও বেগুনি আলোর বিস্ফোরণে পুরো সাইবার শহর রূপ নিল এক অনন্ত জীবন্ত চিত্রপটে।`,

    'mystic-epic': `প্রথম কাণ্ড: প্রাচীন এলডোরিয়ার প্রবেশদ্বার
বিশাল পাহাড়ি গিরিখাতের ভেতর দিয়ে চলে গেছে এক শতাব্দী প্রাচীন পাথুরে পথ। চারপাশে জমে আছে নীলচে কুয়াশা, আর পাথরের গায়ে জ্বলছে ফসফরাসের মতো উজ্জ্বল প্রাচীন শিলালিপি।

দ্বিতীয় কাণ্ড: আলোকবৃক্ষের বন
এই বনের গাছগুলো সাধারণ গাছের মতো নয়। এদের শাখা-প্রশাখা থেকে ঝুলে পড়ছে হাজারো কাঁচের মতো স্বচ্ছ পাতা, যা থেকে ছড়িয়ে পড়ছে মৃদু পান্না-সবুজ জ্যোতি। ছোট ছোট মায়াবী ফায়ারফ্লাই ডানা মেলে ঘুরে বেড়াচ্ছে গাছেদের চারপাশে।

তৃতীয় কাণ্ড: ভাসমান ক্রিস্টাল শ্রাইন
হঠাৎ পথ শেষ হয়ে এক সুবিশাল শূন্য উপত্যকা দেখা দিল। উপত্যকার মাঝখানে কোনো ভর ছাড়াই বাতাসে ভাসছে বিশালাকার জাদুকরী ক্রিস্টাল। চারপাশের বাতাস যেন এক নীরব পবিত্র সুরে কাঁপছে।

চতুর্থ কাণ্ড: মহাকালের নদী
ক্রিস্টালের পাদদেশ দিয়ে বয়ে চলেছে দুধের মতো সাদা ও রুপালি এক মায়ানদী। এই নদীর জল স্পর্শ করলেই অতীতে ফেলে আসা দিনগুলোর প্রতিচ্ছবি ভেসে ওঠে স্রোতের বুকে।

পঞ্চম কাণ্ড: ড্রাগন চূড়ার শিখা
নদীর ওপারে আকাশচুম্বী পাহাড়ি চূড়া। চূড়ার মাথায় জ্বলছে অমর আগুনের শিখা, যা হাজার বছর ধরে রক্ষা করে আসছে এই জাদুকরী রাজত্বকে। ধোঁয়া আর স্ফুলিঙ্গ মিশে যাচ্ছে পূর্ণিমার চাঁদের আলোয়।

ষষ্ঠ কাণ্ড: অন্তহীন সুর ও প্রশান্তি
চূড়ায় পৌঁছালে দেখা যায় পুরো পৃথিবীর দিগন্ত। মেঘের সমুদ্রের ওপর দিয়ে ছড়িয়ে পড়েছে অনন্ত আলোর ধারা। এক মহাজাগতিক শান্তি স্পর্শ করে সমস্ত আত্মাকে।`,

    'cosmic-poem': `নক্ষত্রবীথির প্রথম কম্পন:
অন্ধকার মহাশূন্যের বুক চিরে জন্ম নিল একটি নীহারিকা। বেগুনী আর নীল ধূলিকণায় ভরে উঠল চরাচর।

মহাজাগতিক নৃত্য ও নক্ষত্র মেলা:
কোটি কোটি আলোকবর্ষ দূরে নৃত্য করছে নক্ষত্রমণ্ডল। যেন কোনো অনন্ত শিল্পী নিজ হাতে এঁকে চলেছেন আলোর ঘূর্ণি।

কৃষ্ণগহ্বরের প্রান্তরেখা:
মহাকর্ষের অমোঘ টানে আলো যেখানে বেঁকে যায়, সেই অন্তহীন রহস্যের দ্বারে দাঁড়িয়ে দাঁড়িয়ে আমরা অনন্তকে প্রত্যক্ষ করি।`,

    'papyrus-tale': `প্রথম পর্ব: নীলনদের তীর ও সোনালী বালুকা
উত্তপ্ত সোনালী রোদে জ্বলছে অনন্ত সাহারার বালুকাভূমি। দূর দিগন্তে প্রাচীন নীলনদের নীল জলরেখা মরুভূমিকে দিয়ে চলেছে সঞ্জীবনী সুধা।

দ্বিতীয় পর্ব: ফারাওদের পিরামিড ও পবিত্র স্ফিঙ্কস
বালির বুক চিরে মাথা তুলে দাঁড়িয়ে আছে অমর পিরামিড। তাদের গায়ে প্রতিফলিত হচ্ছে অস্তগামী সূর্যের রক্তিম আভা। পাথুরে স্ফিঙ্কস অপলক দৃষ্টিতে তাকিয়ে আছে মহাকালের পানে।

তৃতীয় পর্ব: স্বর্ণমন্দিরের ভেতরের গোপন কক্ষ
মন্দিরের অভ্যন্তরে পাথরের দেয়ালে জ্বলছে হায়ারোগ্লিফিক লিপির সোনালী আভা। পুরোহিতদের রেখে যাওয়া রহস্যময় প্রতীকগুলো আজও বলে যায় অমরত্বের কথা।`
  };

  // --- Themes Palette Configuration ---
  const THEME_PRESETS = {
    cyberpunk: {
      name: 'Cyberpunk Odyssey',
      bgGrad: ['#04060d', '#081021', '#140c26', '#020b14'],
      ambientGlow: '#00f2fe',
      horizonColor: '#1d0c36',
      accentColor: '#00f2fe',
      starColors: ['#00f2fe', '#ff007f', '#ffffff', '#4facfe'],
      spireColor: '#060f1e',
      windowGlows: ['#00f2fe', '#ff0055', '#ffe600'],
      fogColor: 'rgba(0, 242, 254, 0.08)',
      terrainColor: '#080d1a',
      particleType: 'cyber_dust'
    },
    fantasy: {
      name: 'Mystic Forest',
      bgGrad: ['#03120e', '#09231b', '#0c3826', '#02130e'],
      ambientGlow: '#52b788',
      horizonColor: '#081c15',
      accentColor: '#74c69d',
      starColors: ['#d8f3dc', '#b7e4c7', '#52b788', '#ffffff'],
      spireColor: '#051b14',
      windowGlows: ['#95d5b2', '#d8f3dc', '#ffe8d6'],
      fogColor: 'rgba(82, 183, 136, 0.1)',
      terrainColor: '#041811',
      particleType: 'fireflies'
    },
    cosmos: {
      name: 'Deep Cosmos',
      bgGrad: ['#030208', '#0f051d', '#1d0b36', '#06030e'],
      ambientGlow: '#9d4edd',
      horizonColor: '#140628',
      accentColor: '#c77dff',
      starColors: ['#e0aaff', '#c77dff', '#ffffff', '#7b2cbf'],
      spireColor: '#0c051a',
      windowGlows: ['#e0aaff', '#9d4edd', '#ff9e00'],
      fogColor: 'rgba(157, 78, 221, 0.12)',
      terrainColor: '#080214',
      particleType: 'stardust'
    },
    papyrus: {
      name: 'Ancient Myth',
      bgGrad: ['#140d05', '#241407', '#381e08', '#140902'],
      ambientGlow: '#f4a261',
      horizonColor: '#2b1605',
      accentColor: '#e76f51',
      starColors: ['#f4a261', '#e9c46a', '#ffffff', '#f39c12'],
      spireColor: '#1b0e04',
      windowGlows: ['#e9c46a', '#f4a261', '#ffffff'],
      fogColor: 'rgba(244, 162, 97, 0.12)',
      terrainColor: '#130802',
      particleType: 'sand_embers'
    },
    abyss: {
      name: 'Ocean Abyss',
      bgGrad: ['#010914', '#02152b', '#03254c', '#000814'],
      ambientGlow: '#00b4d8',
      horizonColor: '#02182b',
      accentColor: '#48cae4',
      starColors: ['#90e0ef', '#caf0f8', '#00b4d8', '#ffffff'],
      spireColor: '#011122',
      windowGlows: ['#90e0ef', '#48cae4', '#0077b6'],
      fogColor: 'rgba(0, 180, 216, 0.14)',
      terrainColor: '#010c18',
      particleType: 'bubbles'
    }
  };

  // --- App State ---
  const state = {
    currentTheme: 'cyberpunk',
    rawText: '',
    scenes: [], // array of parsed narrative epochs
    totalScrollHeight: 3000,
    viewportHeight: window.innerHeight,
    viewportWidth: window.innerWidth,
    dpr: window.devicePixelRatio || 1,
    scrollY: 0,
    isAutoPlaying: false,
    autoScrollSpeed: 1.5,
    isAudioOn: false,
    audioContext: null,
    audioGainNode: null,
    audioOscillators: []
  };

  // --- DOM Elements ---
  const DOM = {
    viewportContainer: document.getElementById('viewportContainer'),
    scrollTrack: document.getElementById('scrollTrack'),
    canvas: document.getElementById('tapestryCanvas'),
    waypointsLayer: document.getElementById('narrativeWaypointsLayer'),
    scrollGuidance: document.getElementById('scrollGuidance'),
    
    // Header Metrics
    metricWords: document.getElementById('metricWordCount'),
    metricCanvasHeight: document.getElementById('metricCanvasHeight'),
    metricEpochs: document.getElementById('metricEpochs'),
    
    // Minimap
    minimapTrack: document.getElementById('minimapTrack'),
    minimapStrip: document.getElementById('minimapStrip'),
    minimapIndicator: document.getElementById('minimapIndicator'),
    minimapProgress: document.getElementById('minimapProgress'),
    btnScrollTop: document.getElementById('btnScrollTop'),
    
    // Controls
    btnTechInfo: document.getElementById('btnTechInfo'),
    btnOpenInput: document.getElementById('btnOpenInput'),
    btnExport: document.getElementById('btnExport'),
    themeChips: document.getElementById('themeChips'),
    btnAutoplay: document.getElementById('btnAutoplay'),
    playText: document.getElementById('playText'),
    speedButtons: document.querySelectorAll('.speed-btn'),
    btnAudioToggle: document.getElementById('btnAudioToggle'),
    soundIcon: document.getElementById('soundIcon'),
    btnFullscreen: document.getElementById('btnFullscreen'),
    
    // Tech Info Modal
    techModal: document.getElementById('techModal'),
    btnCloseTechModal: document.getElementById('btnCloseTechModal'),
    btnCloseTechModalBtn: document.getElementById('btnCloseTechModalBtn'),

    // Input Modal
    inputModal: document.getElementById('inputModal'),
    btnCloseModal: document.getElementById('btnCloseModal'),
    textInput: document.getElementById('textInput'),
    liveWords: document.getElementById('liveWords'),
    liveDepth: document.getElementById('liveDepth'),
    liveScenes: document.getElementById('liveScenes'),
    btnClearText: document.getElementById('btnClearText'),
    btnGenerateTapestry: document.getElementById('btnGenerateTapestry'),
    presetChips: document.querySelectorAll('.preset-chip'),
    
    // Export Modal
    exportModal: document.getElementById('exportModal'),
    btnCloseExportModal: document.getElementById('btnCloseExportModal'),
    btnCloseExport: document.getElementById('btnCloseExport'),
    exportCanvasPreview: document.getElementById('exportCanvasPreview'),
    btnDownloadImage: document.getElementById('btnDownloadImage')
  };

  const ctx = DOM.canvas.getContext('2d');

  // --- Particle Weather Simulation System ---
  let particles = [];
  const PARTICLE_COUNT = 90;

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulse: Math.random() * Math.PI
      });
    }
  }

  // --- High-DPI Canvas Buffer Sizing ---
  function updateCanvasDimensions() {
    state.dpr = window.devicePixelRatio || 1;
    state.viewportWidth = window.innerWidth;
    state.viewportHeight = window.innerHeight;

    DOM.canvas.width = window.innerWidth * state.dpr;
    DOM.canvas.height = window.innerHeight * state.dpr;

    // Normalize coordinate space so drawing math works in standard CSS pixels
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  }

  // --- Natural Text Parser & Dynamic Height Calculator ---
  function parseTextIntoEpochs(text) {
    if (!text || !text.trim()) {
      text = PRESET_STORIES['cyber-story'];
    }

    // Split text by double line breaks or major sentence blocks
    let paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);
    
    // If only one long paragraph, chunk by sentences
    if (paragraphs.length <= 1) {
      const sentences = text.match(/[^।?!.]+[।?!.]+/g) || [text];
      if (sentences.length >= 3) {
        paragraphs = [];
        let currentChunk = '';
        for (let s of sentences) {
          currentChunk += (currentChunk ? ' ' : '') + s.trim();
          if (currentChunk.length > 110) {
            paragraphs.push(currentChunk);
            currentChunk = '';
          }
        }
        if (currentChunk) paragraphs.push(currentChunk);
      }
    }

    if (paragraphs.length === 0) {
      paragraphs = [text.trim()];
    }

    // Dynamic Height Calculation:
    // User Requirement: "chobi koto scroll hobe ta text er upor depend korbe. onek text hole sei onujayi"
    // Each scene receives a dedicated visual epoch depth (minimum 1200px per scene)
    // Plus depth bonus for word count within that paragraph.
    const baseEpochHeight = 1350; 
    let currentY = 0;
    const scenes = [];

    paragraphs.forEach((para, index) => {
      const words = para.trim().split(/\s+/).filter(w => w.length > 0).length;
      // Proportional expansion based on text volume
      const dynamicEpochHeight = Math.max(baseEpochHeight, Math.round(baseEpochHeight + (words * 12)));
      
      // Extract title if present (e.g. "প্রথম অধ্যায়: ...") or auto-generate
      let title = '';
      let bodyText = para;
      if (para.includes(':') && para.indexOf(':') < 40) {
        const parts = para.split(':');
        title = parts[0].trim();
        bodyText = parts.slice(1).join(':').trim();
      } else {
        title = `Epoch ${index + 1} • দৃশ্যপট ${getBengaliNumber(index + 1)}`;
      }

      // Procedural features unique to this epoch (seeds for mountains, spires, colors)
      const seed = Math.sin(index * 997 + 13) * 10000;
      const landmarkType = ['spire_cluster', 'colossal_tree', 'floating_crystal', 'pyramid_monolith', 'celestial_ring'][index % 5];
      
      scenes.push({
        index,
        title,
        text: bodyText,
        wordCount: words,
        yStart: currentY,
        yEnd: currentY + dynamicEpochHeight,
        height: dynamicEpochHeight,
        landmarkType,
        seed: Math.abs(seed)
      });

      currentY += dynamicEpochHeight;
    });

    return {
      scenes,
      totalHeight: currentY
    };
  }

  function getBengaliNumber(num) {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(d => bnDigits[parseInt(d)] || d).join('');
  }

  // --- Apply Generated Epochs to App State ---
  function applyNarrativeToTapestry(text) {
    state.rawText = text;
    const parsed = parseTextIntoEpochs(text);
    state.scenes = parsed.scenes;
    state.totalScrollHeight = parsed.totalHeight;

    // 1. Update Scroll Track height dynamically
    DOM.scrollTrack.style.height = `${state.totalScrollHeight}px`;

    // 2. Update Header Live Metrics
    const totalWords = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    DOM.metricWords.textContent = `${getBengaliNumber(totalWords)} শব্দ`;
    DOM.metricCanvasHeight.textContent = `${state.totalScrollHeight.toLocaleString()} px`;
    DOM.metricEpochs.textContent = `${getBengaliNumber(state.scenes.length)} টি দৃশ্যপট`;

    // 3. Render Waypoint Cards in DOM
    renderWaypointsInDOM();

    // 4. Update Minimap
    updateMinimapStrip();

    // Reset scroll to top
    DOM.viewportContainer.scrollTop = 0;
    state.scrollY = 0;
  }

  // --- Render Interactive Floating Waypoints ---
  function renderWaypointsInDOM() {
    DOM.waypointsLayer.innerHTML = '';

    state.scenes.forEach((scene, i) => {
      const card = document.createElement('div');
      card.className = 'waypoint-card';
      card.id = `waypoint-${i}`;
      
      // Position card vertically in the middle of this epoch's scroll zone
      const cardTop = scene.yStart + (scene.height * 0.35);
      card.style.top = `${cardTop}px`;

      card.innerHTML = `
        <div class="waypoint-header">
          <span class="waypoint-epoch">${scene.title}</span>
          <span class="waypoint-time">দৃশ্যপট #${getBengaliNumber(i + 1)} • ${scene.wordCount} শব্দ</span>
        </div>
        <p class="waypoint-text">${escapeHtml(scene.text)}</p>
      `;

      // Clicking a card scrolls smoothly to that epoch center
      card.addEventListener('click', () => {
        DOM.viewportContainer.scrollTo({
          top: scene.yStart + 100,
          behavior: 'smooth'
        });
      });

      DOM.waypointsLayer.appendChild(card);
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // --- Minimap Generation & Preview ---
  function updateMinimapStrip() {
    const theme = THEME_PRESETS[state.currentTheme];
    // Create CSS gradient representing all scene epochs along the strip
    let gradStops = [];
    state.scenes.forEach((s, idx) => {
      const pct = Math.round((s.yStart / state.totalScrollHeight) * 100);
      const color = theme.bgGrad[idx % theme.bgGrad.length];
      gradStops.push(`${color} ${pct}%`);
    });
    gradStops.push(`${theme.bgGrad[theme.bgGrad.length - 1]} 100%`);

    DOM.minimapStrip.style.background = `linear-gradient(to bottom, ${gradStops.join(', ')})`;
  }

  function updateMinimapIndicator() {
    const trackHeight = DOM.minimapTrack.clientHeight;
    const maxScroll = state.totalScrollHeight - state.viewportHeight;
    const scrollRatio = maxScroll > 0 ? state.scrollY / maxScroll : 0;
    
    const indicatorHeight = Math.max(22, (state.viewportHeight / state.totalScrollHeight) * trackHeight);
    const maxTop = trackHeight - indicatorHeight;
    const topPos = Math.min(maxTop, Math.max(0, scrollRatio * maxTop));

    DOM.minimapIndicator.style.height = `${indicatorHeight}px`;
    DOM.minimapIndicator.style.transform = `translateY(${topPos}px)`;

    const progressPct = Math.round(scrollRatio * 100);
    DOM.minimapProgress.textContent = `${progressPct}%`;
  }

  // --- Generative Procedural Visual Drawing Engine ---
  // Renders the entire seamless canvas with 2.5D Parallax layers
  function renderTapestry() {
    const width = state.viewportWidth;
    const height = state.viewportHeight;
    const theme = THEME_PRESETS[state.currentTheme];
    const scrollY = state.scrollY;

    ctx.clearRect(0, 0, width, height);

    // 1. BACKGROUND COSMIC/SKY LAYER (Parallax: 0.15x)
    renderBackgroundAtmosphere(width, height, theme, scrollY);

    // 2. DISTANT HORIZON & MOUNTAIN LAYER (Parallax: 0.35x, Continuous without Modulo Jitter)
    renderDistantHorizon(width, height, theme, scrollY);

    // 3. MIDGROUND LANDMARKS & ARCHITECTURE (Parallax: Centered Anchor Parallax)
    renderMidgroundLandmarks(width, height, theme, scrollY);

    // 4. FOREGROUND FRAME & SILHOUETTES (Parallax: 1.0x Ground Anchor)
    renderForegroundDetails(width, height, theme, scrollY);

    // 5. ATMOSPHERIC WEATHER & PARTICLES
    renderParticles(width, height, theme);

    // 6. Highlight active in-focus waypoint cards
    updateWaypointFocus();
  }

  // Background Atmosphere & Cosmic Sky
  function renderBackgroundAtmosphere(w, h, theme, scrollY) {
    const totalH = state.totalScrollHeight;
    const scrollProgress = scrollY / (totalH - h || 1);

    // Dynamic gradient interpolation across the entire canvas depth
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    const colorIndex = Math.floor(scrollProgress * (theme.bgGrad.length - 1));
    const nextColorIndex = Math.min(theme.bgGrad.length - 1, colorIndex + 1);
    
    grad.addColorStop(0, theme.bgGrad[colorIndex] || theme.bgGrad[0]);
    grad.addColorStop(1, theme.bgGrad[nextColorIndex] || theme.bgGrad[1]);
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Twinkling stars cleanly wrapped without arbitrary modulo snap points
    ctx.save();
    for (let i = 0; i < 70; i++) {
      const sx = (i * 127 + 45) % w;
      let sy = ((i * 181 + 13) - (scrollY * 0.12)) % h;
      if (sy < 0) sy += h;

      const starSize = (i % 3 === 0) ? 2.2 : 1.2;
      const alpha = 0.3 + 0.6 * Math.abs(Math.sin((Date.now() * 0.002) + i));
      
      ctx.fillStyle = theme.starColors[i % theme.starColors.length];
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(sx, sy, starSize, 0, Math.PI * 2);
      ctx.fill();

      // Cross glow for larger stars
      if (starSize > 2) {
        ctx.strokeStyle = theme.accentColor;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(sx - 5, sy);
        ctx.lineTo(sx + 5, sy);
        ctx.moveTo(sx, sy - 5);
        ctx.lineTo(sx, sy + 5);
        ctx.stroke();
      }
    }
    ctx.restore();

    // Cosmic aurora / atmospheric mist glow
    const auroraY = (h * 0.35) + Math.sin(scrollY * 0.0008) * 30;
    const auroraGrad = ctx.createRadialGradient(w * 0.5, auroraY, 50, w * 0.5, auroraY, w * 0.7);
    auroraGrad.addColorStop(0, theme.fogColor);
    auroraGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = auroraGrad;
    ctx.fillRect(0, 0, w, h);
  }

  // Distant Horizon (Continuous parallax without modulo snapping)
  function renderDistantHorizon(w, h, theme, scrollY) {
    const horizonBaseY = h * 0.62;
    // Continuous sinusoidal float without wrapping jumps
    const horizonShift = Math.sin(scrollY * 0.0006) * 35;

    ctx.save();
    ctx.fillStyle = theme.horizonColor;
    ctx.beginPath();
    ctx.moveTo(0, h);

    // Continuous undulating mountainous curves
    for (let x = 0; x <= w; x += 40) {
      const wave1 = Math.sin((x * 0.004) + (scrollY * 0.0004)) * 70;
      const wave2 = Math.cos((x * 0.008) + 1.2) * 35;
      const y = horizonBaseY + wave1 + wave2 + horizonShift;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Distant planetary ring or celestial sphere
    const moonX = w * 0.78;
    const moonY = (h * 0.22) + Math.sin(scrollY * 0.0008) * 25;
    const moonGrad = ctx.createRadialGradient(moonX, moonY, 15, moonX, moonY, 70);
    moonGrad.addColorStop(0, theme.accentColor);
    moonGrad.addColorStop(0.6, 'rgba(255,255,255,0.08)');
    moonGrad.addColorStop(1, 'transparent');
    
    ctx.fillStyle = moonGrad;
    ctx.beginPath();
    ctx.arc(moonX, moonY, 70, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Midground Landmarks (Centered Anchor Parallax Fix: Scenes remain visible when scrolled into view)
  function renderMidgroundLandmarks(w, h, theme, scrollY) {
    const viewportCenterY = scrollY + (h * 0.5);

    state.scenes.forEach((scene) => {
      const sceneCenterY = scene.yStart + (scene.height * 0.5);
      
      // Distance from current viewport center
      const deltaY = sceneCenterY - viewportCenterY;
      
      // Parallax factor 0.82: scene landmark moves with smooth depth but aligns at deltaY == 0
      const landmarkScreenY = deltaY * 0.82;

      // Culling: only draw if within visible viewport bounds
      if (landmarkScreenY > -h * 1.2 && landmarkScreenY < h * 1.2) {
        ctx.save();
        ctx.translate(0, landmarkScreenY);

        switch (state.currentTheme) {
          case 'cyberpunk':
            drawCyberpunkCitySpires(w, h, theme, scene);
            break;
          case 'fantasy':
            drawMysticEnchantedForest(w, h, theme, scene);
            break;
          case 'cosmos':
            drawCosmicNexusMonoliths(w, h, theme, scene);
            break;
          case 'papyrus':
            drawAncientEgyptianTemples(w, h, theme, scene);
            break;
          case 'abyss':
            drawAbyssalDeepRuins(w, h, theme, scene);
            break;
          default:
            drawCyberpunkCitySpires(w, h, theme, scene);
        }

        ctx.restore();
      }
    });
  }

  // --- Procedural Theme Generators ---

  // 1. Cyberpunk Megacity Spires
  function drawCyberpunkCitySpires(w, h, theme, scene) {
    const spireCount = 8;
    const spacing = w / spireCount;

    for (let i = 0; i < spireCount; i++) {
      const spireX = i * spacing + (Math.sin(scene.seed + i) * 35);
      const spireWidth = 45 + (Math.abs(Math.cos(i * 3)) * 40);
      const spireHeight = 280 + (Math.abs(Math.sin(scene.seed + i * 2)) * 320);
      const spireY = h - 60 - spireHeight;

      // Tower silhouette
      ctx.fillStyle = theme.spireColor;
      ctx.fillRect(spireX, spireY, spireWidth, spireHeight + 100);

      // Tower neon edge line
      ctx.strokeStyle = theme.accentColor;
      ctx.lineWidth = 1.2;
      ctx.strokeRect(spireX, spireY, spireWidth, spireHeight + 100);

      // Antenna beacon at top
      ctx.beginPath();
      ctx.moveTo(spireX + spireWidth / 2, spireY);
      ctx.lineTo(spireX + spireWidth / 2, spireY - 40);
      ctx.stroke();

      // Glowing beacon tip
      ctx.fillStyle = theme.accentColor;
      ctx.beginPath();
      ctx.arc(spireX + spireWidth / 2, spireY - 40, 3, 0, Math.PI * 2);
      ctx.fill();

      // Glowing cyber windows matrix
      const windowRows = Math.floor(spireHeight / 30);
      for (let r = 0; r < windowRows; r++) {
        if ((r + i) % 2 === 0) {
          const winColor = theme.windowGlows[(r + i) % theme.windowGlows.length];
          ctx.fillStyle = winColor;
          ctx.globalAlpha = 0.65;
          ctx.fillRect(spireX + 8, spireY + (r * 28) + 15, spireWidth - 16, 6);
          ctx.globalAlpha = 1.0;
        }
      }

      // Vertical hologram beam
      if (i % 3 === 1) {
        ctx.fillStyle = 'rgba(0, 242, 254, 0.08)';
        ctx.fillRect(spireX + spireWidth / 2 - 10, spireY - 120, 20, 120);
      }
    }
  }

  // 2. Mystic Forest: Luminescent Trees & Vines
  function drawMysticEnchantedForest(w, h, theme, scene) {
    const treeCount = 6;
    const spacing = w / treeCount;

    for (let i = 0; i < treeCount; i++) {
      const tx = i * spacing + (Math.cos(scene.seed + i) * 40) + 30;
      const trunkWidth = 35 + (i % 3) * 15;
      const trunkH = 340 + (Math.sin(scene.seed + i) * 120);
      const ty = h - 50 - trunkH;

      // Ancient gnarled trunk
      ctx.fillStyle = theme.spireColor;
      ctx.beginPath();
      ctx.moveTo(tx - trunkWidth / 2, h);
      ctx.quadraticCurveTo(tx - 10, ty + trunkH * 0.5, tx - trunkWidth * 0.3, ty);
      ctx.lineTo(tx + trunkWidth * 0.3, ty);
      ctx.quadraticCurveTo(tx + 10, ty + trunkH * 0.5, tx + trunkWidth / 2, h);
      ctx.closePath();
      ctx.fill();

      // Luminescent crown
      const glowGrad = ctx.createRadialGradient(tx, ty, 20, tx, ty, 140);
      glowGrad.addColorStop(0, theme.accentColor);
      glowGrad.addColorStop(0.5, 'rgba(82, 183, 136, 0.4)');
      glowGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(tx, ty, 140, 0, Math.PI * 2);
      ctx.fill();

      // Hanging magic vines
      ctx.strokeStyle = theme.accentColor;
      ctx.lineWidth = 1;
      for (let v = -40; v <= 40; v += 20) {
        ctx.beginPath();
        ctx.moveTo(tx + v, ty + 40);
        ctx.quadraticCurveTo(tx + v + 15, ty + 120, tx + v, ty + 180);
        ctx.stroke();
      }
    }
  }

  // 3. Cosmic Nexus Monoliths
  function drawCosmicNexusMonoliths(w, h, theme) {
    const cx = w * 0.5;
    const cy = h * 0.55;

    ctx.save();
    ctx.translate(cx, cy);

    // Orbital planetary rings
    ctx.strokeStyle = 'rgba(199, 125, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, 240, 50, Math.PI / 6, 0, Math.PI * 2);
    ctx.stroke();

    // Faceted Crystal Shape
    const crystalH = 260;
    const crystalW = 75;
    
    // Left facet
    ctx.fillStyle = theme.spireColor;
    ctx.beginPath();
    ctx.moveTo(0, -crystalH / 2);
    ctx.lineTo(-crystalW, 0);
    ctx.lineTo(0, crystalH / 2);
    ctx.closePath();
    ctx.fill();

    // Right facet (glowing)
    const crystalGrad = ctx.createLinearGradient(0, -crystalH/2, crystalW, crystalH/2);
    crystalGrad.addColorStop(0, theme.accentColor);
    crystalGrad.addColorStop(1, '#3c096c');
    ctx.fillStyle = crystalGrad;
    ctx.beginPath();
    ctx.moveTo(0, -crystalH / 2);
    ctx.lineTo(crystalW, 0);
    ctx.lineTo(0, crystalH / 2);
    ctx.closePath();
    ctx.fill();

    // Crystal outline glow
    ctx.strokeStyle = theme.accentColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Pulse core
    const coreGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, 120);
    coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    coreGrad.addColorStop(0.3, theme.accentColor);
    coreGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(0, 0, 120, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // 4. Ancient Myth Temples
  function drawAncientEgyptianTemples(w, h, theme) {
    const pyrX = w * 0.45;
    const pyrW = 380;
    const pyrH = 280;
    const pyrY = h - 60;

    ctx.fillStyle = theme.spireColor;
    ctx.beginPath();
    ctx.moveTo(pyrX - pyrW / 2, pyrY);
    ctx.lineTo(pyrX, pyrY - pyrH);
    ctx.lineTo(pyrX + pyrW / 2, pyrY);
    ctx.closePath();
    ctx.fill();

    // Golden capstone glow
    const capH = pyrH * 0.22;
    const capW = pyrW * 0.22;
    const capGrad = ctx.createLinearGradient(pyrX, pyrY - pyrH, pyrX, pyrY - pyrH + capH);
    capGrad.addColorStop(0, '#ffeaa7');
    capGrad.addColorStop(1, theme.accentColor);

    ctx.fillStyle = capGrad;
    ctx.beginPath();
    ctx.moveTo(pyrX - capW / 2, pyrY - pyrH + capH);
    ctx.lineTo(pyrX, pyrY - pyrH);
    ctx.lineTo(pyrX + capW / 2, pyrY - pyrH + capH);
    ctx.closePath();
    ctx.fill();

    // Sun rays bursting behind pyramid
    ctx.strokeStyle = 'rgba(244, 162, 97, 0.15)';
    ctx.lineWidth = 2;
    for (let r = 0; r < 12; r++) {
      const angle = (Math.PI / 12) * r + Math.PI;
      ctx.beginPath();
      ctx.moveTo(pyrX, pyrY - pyrH);
      ctx.lineTo(pyrX + Math.cos(angle) * 450, (pyrY - pyrH) + Math.sin(angle) * 450);
      ctx.stroke();
    }
  }

  // 5. Ocean Abyss Ruins
  function drawAbyssalDeepRuins(w, h, theme) {
    const spireCount = 7;
    const spacing = w / spireCount;

    for (let i = 0; i < spireCount; i++) {
      const sx = i * spacing + 40;
      const sw = 45 + (i % 2) * 20;
      const sh = 260 + (i % 3) * 80;
      const sy = h - 50 - sh;

      // Coral spire
      ctx.fillStyle = theme.spireColor;
      ctx.beginPath();
      ctx.moveTo(sx - sw/2, h);
      ctx.lineTo(sx - sw*0.3, sy);
      ctx.lineTo(sx + sw*0.3, sy);
      ctx.lineTo(sx + sw/2, h);
      ctx.closePath();
      ctx.fill();

      // Bioluminescent tip
      ctx.fillStyle = theme.accentColor;
      ctx.beginPath();
      ctx.arc(sx, sy, 8, 0, Math.PI * 2);
      ctx.fill();

      // Rising light bubbles
      for (let b = 0; b < 4; b++) {
        ctx.strokeStyle = 'rgba(202, 240, 248, 0.5)';
        ctx.beginPath();
        ctx.arc(sx + (b * 8) - 12, sy - (b * 30) - 20, 3 + b, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  // Foreground Terrain & Framing Silhouettes
  function renderForegroundDetails(w, h, theme) {
    const terrainH = 75;
    const terrainY = h - terrainH;

    // Solid base ground
    ctx.fillStyle = theme.terrainColor;
    ctx.beginPath();
    ctx.moveTo(0, terrainY);
    for (let x = 0; x <= w; x += 30) {
      const bump = Math.sin(x * 0.015) * 14;
      ctx.lineTo(x, terrainY + bump);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // Glowing horizon seam line
    ctx.strokeStyle = theme.accentColor;
    ctx.lineWidth = 1.5;
    ctx.shadowColor = theme.accentColor;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(0, terrainY);
    for (let x = 0; x <= w; x += 30) {
      const bump = Math.sin(x * 0.015) * 14;
      ctx.lineTo(x, terrainY + bump);
    }
    ctx.stroke();
    ctx.shadowBlur = 0; // reset
  }

  // Weather Particles
  function renderParticles(w, h, theme) {
    ctx.save();
    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.pulse += p.pulseSpeed;

      if (p.y > h) p.y = 0;
      if (p.x > w) p.x = 0;
      if (p.x < 0) p.x = w;

      const currentAlpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

      ctx.fillStyle = theme.accentColor;
      ctx.globalAlpha = currentAlpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  }

  // --- Synchronized Waypoint Focus Detection ---
  function updateWaypointFocus() {
    const viewportMiddle = state.scrollY + (state.viewportHeight * 0.5);

    state.scenes.forEach((scene, i) => {
      const card = document.getElementById(`waypoint-${i}`);
      if (!card) return;

      const isInside = (viewportMiddle >= scene.yStart && viewportMiddle < scene.yEnd);
      if (isInside) {
        card.classList.add('in-focus');
      } else {
        card.classList.remove('in-focus');
      }
    });

    // Hide scroll guidance once user starts scrolling
    if (state.scrollY > 150) {
      DOM.scrollGuidance.style.opacity = '0';
    } else {
      DOM.scrollGuidance.style.opacity = '1';
    }
  }

  // --- Main Animation Render Loop ---
  function animationLoop() {
    // Cinematic Auto-Scroll handling
    if (state.isAutoPlaying) {
      const maxScroll = state.totalScrollHeight - state.viewportHeight;
      if (state.scrollY < maxScroll) {
        DOM.viewportContainer.scrollTop += state.autoScrollSpeed;
      } else {
        // Reached end, pause
        state.isAutoPlaying = false;
        updateAutoplayUI();
      }
    }

    renderTapestry();
    updateMinimapIndicator();

    requestAnimationFrame(animationLoop);
  }

  // --- Web Audio API Procedural Ambient Sound Generator ---
  function initAmbientAudio() {
    if (state.audioContext) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      state.audioContext = new AudioContext();
      state.audioGainNode = state.audioContext.createGain();
      state.audioGainNode.gain.setValueAtTime(0.08, state.audioContext.currentTime);

      // Low pass filter for warm, dreamy drone
      const filter = state.audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, state.audioContext.currentTime);

      // 3 Harmonic drone oscillators
      const baseFreqs = [55, 82.5, 110]; // A1, E2, A2 warm chord
      state.audioOscillators = baseFreqs.map(freq => {
        const osc = state.audioContext.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, state.audioContext.currentTime);
        osc.connect(filter);
        osc.start();
        return osc;
      });

      filter.connect(state.audioGainNode);
      state.audioGainNode.connect(state.audioContext.destination);
    } catch (e) {
      console.warn('AudioContext not supported or blocked:', e);
    }
  }

  function toggleAudio() {
    if (!state.audioContext) {
      initAmbientAudio();
    }

    if (state.audioContext && state.audioContext.state === 'suspended') {
      state.audioContext.resume();
    }

    state.isAudioOn = !state.isAudioOn;
    if (state.isAudioOn) {
      state.audioGainNode.gain.setTargetAtTime(0.08, state.audioContext.currentTime, 0.5);
      DOM.btnAudioToggle.classList.add('active');
      DOM.btnAudioToggle.title = 'অ্যাম্বিয়েন্ট সাউন্ড বন্ধ করুন';
      DOM.soundIcon.innerHTML = `
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
      `;
    } else {
      if (state.audioGainNode) {
        state.audioGainNode.gain.setTargetAtTime(0, state.audioContext.currentTime, 0.5);
      }
      DOM.btnAudioToggle.classList.remove('active');
      DOM.btnAudioToggle.title = 'অ্যাম্বিয়েন্ট সাউন্ড চালু করুন';
      DOM.soundIcon.innerHTML = `
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <line x1="23" y1="9" x2="17" y2="15"/>
        <line x1="17" y1="9" x2="23" y2="15"/>
      `;
    }
  }

  // --- Tapestry Export / High-Res PNG Capture ---
  function generateTapestrySnapshot() {
    const exportW = 1000;
    const exportH = Math.min(6000, state.totalScrollHeight); // cap height for safety
    const offCanvas = document.createElement('canvas');
    offCanvas.width = exportW;
    offCanvas.height = exportH;
    const offCtx = offCanvas.getContext('2d');

    const theme = THEME_PRESETS[state.currentTheme];

    // Background gradient strip
    const bgGrad = offCtx.createLinearGradient(0, 0, 0, exportH);
    theme.bgGrad.forEach((c, idx) => {
      bgGrad.addColorStop(idx / (theme.bgGrad.length - 1), c);
    });
    offCtx.fillStyle = bgGrad;
    offCtx.fillRect(0, 0, exportW, exportH);

    // Stars & celestial dots
    for (let s = 0; s < 250; s++) {
      offCtx.fillStyle = theme.starColors[s % theme.starColors.length];
      offCtx.globalAlpha = 0.6;
      offCtx.beginPath();
      offCtx.arc(Math.random() * exportW, Math.random() * exportH, Math.random() * 2 + 1, 0, Math.PI * 2);
      offCtx.fill();
    }
    offCtx.globalAlpha = 1.0;

    // Render epoch visual slices & narrative cards directly on the exported image
    state.scenes.forEach((scene) => {
      const sliceY = (scene.yStart / state.totalScrollHeight) * exportH;
      const sliceH = (scene.height / state.totalScrollHeight) * exportH;

      // Stylized spire
      const spireW = 80;
      offCtx.fillStyle = theme.spireColor;
      offCtx.strokeStyle = theme.accentColor;
      offCtx.lineWidth = 2;
      offCtx.fillRect(exportW / 2 - spireW / 2, sliceY + sliceH - 140, spireW, 140);
      offCtx.strokeRect(exportW / 2 - spireW / 2, sliceY + sliceH - 140, spireW, 140);

      // Text plaque box
      offCtx.fillStyle = 'rgba(10, 14, 24, 0.85)';
      offCtx.fillRect(100, sliceY + 60, exportW - 200, 120);
      offCtx.strokeRect(100, sliceY + 60, exportW - 200, 120);

      // Title & Text
      offCtx.fillStyle = theme.accentColor;
      offCtx.font = 'bold 18px "Outfit", sans-serif';
      offCtx.fillText(scene.title, 130, sliceY + 95);

      offCtx.fillStyle = '#ffffff';
      offCtx.font = '14px "Hind Siliguri", sans-serif';
      const truncatedText = scene.text.length > 90 ? scene.text.substring(0, 87) + '...' : scene.text;
      offCtx.fillText(truncatedText, 130, sliceY + 135);
    });

    // Preview in Export Modal
    const previewCanvas = DOM.exportCanvasPreview;
    previewCanvas.width = 300;
    previewCanvas.height = (exportH / exportW) * 300;
    const pCtx = previewCanvas.getContext('2d');
    pCtx.drawImage(offCanvas, 0, 0, previewCanvas.width, previewCanvas.height);

    // Set download URL
    DOM.btnDownloadImage.href = offCanvas.toDataURL('image/png');
    DOM.exportModal.classList.add('open');
  }

  // --- Live Estimation in Text Input Modal ---
  function updateLiveInputEstimates() {
    const text = DOM.textInput.value.trim();
    const words = text ? text.split(/\s+/).filter(w => w.length > 0).length : 0;
    const parsed = parseTextIntoEpochs(text);

    DOM.liveWords.textContent = words;
    DOM.liveDepth.textContent = `${parsed.totalHeight.toLocaleString()} px`;
    DOM.liveScenes.textContent = parsed.scenes.length;
  }

  // --- UI Event Listeners ---
  function setupEventListeners() {
    // Window Resize with Retina scaling update
    window.addEventListener('resize', () => {
      updateCanvasDimensions();
      initParticles();
    });

    // Native Scroll Tracker
    DOM.viewportContainer.addEventListener('scroll', () => {
      state.scrollY = DOM.viewportContainer.scrollTop;
    });

    // Minimap Track Click to jump
    DOM.minimapTrack.addEventListener('click', (e) => {
      const rect = DOM.minimapTrack.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const ratio = clickY / rect.height;
      const targetScroll = ratio * (state.totalScrollHeight - state.viewportHeight);
      DOM.viewportContainer.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    });

    // Scroll to Top Button
    DOM.btnScrollTop.addEventListener('click', () => {
      DOM.viewportContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Theme Switcher Buttons
    DOM.themeChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.theme-chip');
      if (!chip) return;
      const themeKey = chip.getAttribute('data-theme');
      if (THEME_PRESETS[themeKey]) {
        state.currentTheme = themeKey;
        document.querySelectorAll('.theme-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        updateMinimapStrip();
      }
    });

    // Autoplay Cinematic Scroll (with restart at bottom fix)
    DOM.btnAutoplay.addEventListener('click', () => {
      const maxScroll = state.totalScrollHeight - state.viewportHeight;
      if (state.scrollY >= maxScroll - 30) {
        // If at bottom, reset to top so autoplay actually starts
        DOM.viewportContainer.scrollTop = 0;
        state.scrollY = 0;
      }
      state.isAutoPlaying = !state.isAutoPlaying;
      updateAutoplayUI();
    });

    // Speed Toggle
    DOM.speedButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.speedButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const speed = parseFloat(btn.getAttribute('data-speed'));
        state.autoScrollSpeed = speed * 1.5;
      });
    });

    // Audio Ambient Toggle
    DOM.btnAudioToggle.addEventListener('click', toggleAudio);

    // Fullscreen Toggle
    DOM.btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // Tech Info Modal Open / Close
    DOM.btnTechInfo.addEventListener('click', () => {
      DOM.techModal.classList.add('open');
    });
    DOM.btnCloseTechModal.addEventListener('click', () => {
      DOM.techModal.classList.remove('open');
    });
    DOM.btnCloseTechModalBtn.addEventListener('click', () => {
      DOM.techModal.classList.remove('open');
    });

    // Input Modal Open / Close
    DOM.btnOpenInput.addEventListener('click', () => {
      DOM.textInput.value = state.rawText;
      updateLiveInputEstimates();
      DOM.inputModal.classList.add('open');
    });

    DOM.btnCloseModal.addEventListener('click', () => {
      DOM.inputModal.classList.remove('open');
    });

    // Preset Story Click
    DOM.presetChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const presetKey = chip.getAttribute('data-preset');
        if (PRESET_STORIES[presetKey]) {
          DOM.textInput.value = PRESET_STORIES[presetKey];
          updateLiveInputEstimates();
        }
      });
    });

    // Live typing in textarea
    DOM.textInput.addEventListener('input', updateLiveInputEstimates);

    // Clear Text
    DOM.btnClearText.addEventListener('click', () => {
      DOM.textInput.value = '';
      updateLiveInputEstimates();
    });

    // Generate Tapestry from Modal
    DOM.btnGenerateTapestry.addEventListener('click', () => {
      const newText = DOM.textInput.value.trim();
      if (!newText) {
        alert('অনুগ্রহ করে কিছু টেক্সট লিখুন অথবা প্রিসেট নির্বাচন করুন!');
        return;
      }
      applyNarrativeToTapestry(newText);
      DOM.inputModal.classList.remove('open');
    });

    // Export Modal Open / Close
    DOM.btnExport.addEventListener('click', generateTapestrySnapshot);
    DOM.btnCloseExportModal.addEventListener('click', () => DOM.exportModal.classList.remove('open'));
    DOM.btnCloseExport.addEventListener('click', () => DOM.exportModal.classList.remove('open'));
  }

  function updateAutoplayUI() {
    if (state.isAutoPlaying) {
      DOM.btnAutoplay.classList.add('active');
      DOM.playText.textContent = 'থামান';
      DOM.btnAutoplay.querySelector('svg').innerHTML = `
        <rect x="6" y="4" width="4" height="16"/>
        <rect x="14" y="4" width="4" height="16"/>
      `;
    } else {
      DOM.btnAutoplay.classList.remove('active');
      DOM.playText.textContent = 'অটোপ্লে';
      DOM.btnAutoplay.querySelector('svg').innerHTML = `
        <polygon points="5 3 19 12 5 21 5 3"/>
      `;
    }
  }

  // --- Initialization ---
  function init() {
    updateCanvasDimensions();
    initParticles();
    setupEventListeners();

    // Load default Cyberpunk Odyssey narrative
    applyNarrativeToTapestry(PRESET_STORIES['cyber-story']);

    // Start 60fps render loop
    animationLoop();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
