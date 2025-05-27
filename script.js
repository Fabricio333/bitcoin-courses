// Course definitions
const courses = {
    'bitcoin-basics': {
        name: 'Bitcoin Basics Wizard',
        description: 'Learn the fundamentals of Bitcoin, from basic concepts to wallet security',
        icon: '🧙‍♂️',
        color: 'from-blue-500 to-purple-600',
        screens: {
            start: {
                title: "Welcome to Bitcoin Basics!",
                text: "Ready to dive into the world of Bitcoin? This interactive guide will take you through everything you need to know, from the basics to advanced wallet security.\n\nYour progress is automatically saved, so you can learn at your own pace!",
                image: "🚀",
                options: [
                    { label: "Start Learning", next: "openSource" },
                    { label: "View Progress Map", action: "showMap" }
                ]
            },
            openSource: {
                title: "Bitcoin is Open Source",
                text: "Bitcoin's code is completely open source, meaning anyone can view, verify, and contribute to it. This transparency is fundamental to Bitcoin's trustless nature.\n\nThe source code is maintained by a global community of developers who review every change.",
                image: "🔓",
                options: [
                    { label: "Next: Code Repository", next: "repository" },
                    { label: "Back to Start", next: "start" }
                ]
            },
            repository: {
                title: "The Bitcoin Repository",
                text: "Bitcoin's source code lives on GitHub at bitcoin/bitcoin. It contains the reference implementation that most Bitcoin nodes run.\n\nThousands of developers worldwide contribute to making Bitcoin more secure and efficient.",
                image: "📚",
                options: [
                    { label: "Next: Public Key Crypto", next: "publicKey" },
                    { label: "Back: Open Source", next: "openSource" }
                ]
            },
            publicKey: {
                title: "Public-Key Cryptography",
                text: "Bitcoin uses public-key cryptography where you have two keys: a public key (like your address) and a private key (like your password).\n\nYou can share your public key freely, but your private key must remain secret!",
                image: "🔑",
                options: [
                    { label: "Next: Private Keys", next: "privateKey" },
                    { label: "Back: Repository", next: "repository" }
                ]
            },
            privateKey: {
                title: "Your Private Key",
                text: "Your private key is a 256-bit number that controls your Bitcoin. It's usually represented as a 12 or 24-word seed phrase.\n\nWhoever has your private key controls your Bitcoin. Keep it safe and never share it!",
                image: "🛡️",
                options: [
                    { label: "Next: Wallet Intro", next: "walletIntro" },
                    { label: "Back: Public Key Crypto", next: "publicKey" }
                ]
            },
            walletIntro: {
                title: "What is a Bitcoin Wallet?",
                text: "A Bitcoin wallet doesn't actually store Bitcoin (that's on the blockchain). Instead, it stores your private keys and helps you create transactions.\n\nThink of it like a keychain for your Bitcoin addresses.",
                image: "👛",
                options: [
                    { label: "Next: Wallet Types", next: "walletTypes" },
                    { label: "Back: Private Keys", next: "privateKey" }
                ]
            },
            walletTypes: {
                title: "Types of Bitcoin Wallets",
                text: "There are several types of wallets:\n\n• Software wallets (mobile/desktop apps)\n• Hardware wallets (physical devices)\n• Paper wallets (printed keys)\n• Web wallets (online services)\n\nEach has different security trade-offs.",
                image: "📱",
                options: [
                    { label: "Next: Best Practices", next: "walletBest" },
                    { label: "Back: Wallet Intro", next: "walletIntro" }
                ]
            },
            walletBest: {
                title: "Wallet Best Practices",
                text: "Follow these essential security practices:\n\n✅ Always backup your seed phrase\n✅ Use hardware wallets for large amounts\n✅ Verify receiving addresses\n✅ Keep software updated\n✅ Test with small amounts first",
                image: "✅",
                options: [
                    { label: "Next: Hardware Wallets", next: "hardwareIntro" },
                    { label: "Back: Wallet Types", next: "walletTypes" }
                ]
            },
            hardwareIntro: {
                title: "Hardware Wallets Explained",
                text: "Hardware wallets are physical devices that store your private keys offline. They're considered the gold standard for Bitcoin security.\n\nEven when connected to a compromised computer, your keys remain safe inside the device.",
                image: "🔐",
                options: [
                    { label: "Next: Device Comparison", next: "hardwareCompare" },
                    { label: "Back: Best Practices", next: "walletBest" }
                ]
            },
            hardwareCompare: {
                title: "Popular Hardware Wallets",
                text: "Popular options include:\n\n• Ledger Nano S/X - User-friendly, wide coin support\n• Trezor Model T - Open source, touch screen\n• Coldcard - Bitcoin-only, maximum security\n• BitBox02 - Swiss-made, minimalist design\n\nChoose based on your needs and budget.",
                image: "⚖️",
                options: [
                    { label: "Finish Course!", next: "completion" },
                    { label: "Back: Hardware Intro", next: "hardwareIntro" }
                ]
            },
            completion: {
                title: "Congratulations! 🎉",
                text: "You've completed the Bitcoin Basics Wizard! You now understand the fundamentals of Bitcoin, wallets, and security best practices.\n\nKeep learning and stay curious about this revolutionary technology!",
                image: "🏆",
                options: [
                    { label: "Restart Course", next: "start" },
                    { label: "View Progress", action: "showMap" }
                ]
            }
        },
        topicMapping: {
            basics: ['openSource', 'repository', 'publicKey', 'privateKey'],
            wallets: ['walletIntro', 'walletTypes', 'walletBest'],
            hardware: ['hardwareIntro', 'hardwareCompare']
        },
        categories: [
            { id: 'basics', name: 'Bitcoin Basics', icon: '🧩' },
            { id: 'wallets', name: 'Wallets & Security', icon: '👛' },
            { id: 'hardware', name: 'Hardware Wallets', icon: '🔐' }
        ]
    },
    // Additional courses
    'lightning-network': {
        name: 'Lightning Network Deep Dive',
        description: 'Master Bitcoin\'s Layer 2 scaling solution',
        icon: '⚡',
        color: 'from-yellow-500 to-orange-600',
        screens: {
            start: {
                title: "Welcome to Lightning Network!",
                text: "The Lightning Network is Bitcoin's Layer 2 scaling solution that enables instant, low-cost transactions.\n\nLearn how to use Lightning for everyday Bitcoin payments!",
                image: "⚡",
                options: [
                    { label: "Start Learning", next: "whatIsLightning" },
                    { label: "View Progress Map", action: "showMap" }
                ]
            },
            whatIsLightning: {
                title: "What is Lightning Network?",
                text: "Lightning Network is a second-layer payment protocol built on top of Bitcoin. It allows for instant, low-fee transactions between participating nodes.\n\nThink of it as a network of payment channels that settle on the Bitcoin blockchain.",
                image: "🌐",
                options: [
                    { label: "Next: How It Works", next: "howItWorks" },
                    { label: "Back to Start", next: "start" }
                ]
            },
            howItWorks: {
                title: "How Lightning Works",
                text: "Lightning uses payment channels - like a tab between two parties. You can send multiple payments back and forth instantly, then settle the final balance on Bitcoin's blockchain.\n\nChannels can route payments through the network, so you don't need direct channels with everyone.",
                image: "🔄",
                options: [
                    { label: "Next: Setting Up", next: "setup" },
                    { label: "Back: What is Lightning", next: "whatIsLightning" }
                ]
            },
            setup: {
                title: "Setting Up Lightning",
                text: "To use Lightning, you need:\n\n• A Lightning wallet (like Phoenix, Muun, or Breez)\n• Some Bitcoin to fund channels\n• Understanding of channel management\n\nStart with a mobile wallet for ease of use!",
                image: "📱",
                options: [
                    { label: "Next: Best Practices", next: "bestPractices" },
                    { label: "Back: How It Works", next: "howItWorks" }
                ]
            },
            bestPractices: {
                title: "Lightning Best Practices",
                text: "Follow these Lightning guidelines:\n\n✅ Start with small amounts\n✅ Keep channels funded\n✅ Use reputable wallets\n✅ Understand inbound/outbound liquidity\n✅ Have an on-chain backup plan",
                image: "⚡",
                options: [
                    { label: "Complete Course!", next: "completion" },
                    { label: "Back: Setting Up", next: "setup" }
                ]
            },
            completion: {
                title: "Lightning Master! ⚡",
                text: "Congratulations! You now understand the Lightning Network and how to use it for fast, cheap Bitcoin payments.\n\nYou're ready to experience Bitcoin's scaling solution firsthand!",
                image: "🏆",
                options: [
                    { label: "Restart Course", next: "start" },
                    { label: "View Progress", action: "showMap" }
                ]
            }
        },
        topicMapping: {
            fundamentals: ['whatIsLightning', 'howItWorks'],
            practical: ['setup', 'bestPractices']
        },
        categories: [
            { id: 'fundamentals', name: 'Lightning Fundamentals', icon: '⚡' },
            { id: 'practical', name: 'Practical Usage', icon: '🛠️' }
        ]
    },
    'bitcoin-mining': {
        name: 'Bitcoin Mining Mastery',
        description: 'Understand the technical aspects of Bitcoin mining',
        icon: '⛏️',
        color: 'from-green-500 to-teal-600',
        screens: {
            start: {
                title: "Welcome to Mining Mastery!",
                text: "Bitcoin mining secures the network and processes transactions. Learn how this critical process works and how you can participate.\n\nFrom proof-of-work to mining pools, we'll cover it all!",
                image: "⛏️",
                options: [
                    { label: "Start Learning", next: "proofOfWork" },
                    { label: "View Progress Map", action: "showMap" }
                ]
            },
            proofOfWork: {
                title: "Proof of Work Explained",
                text: "Bitcoin uses Proof of Work (PoW) to secure the network. Miners compete to solve cryptographic puzzles, and the winner gets to add the next block.\n\nThis process requires computational power, making the network secure against attacks.",
                image: "🧩",
                options: [
                    { label: "Next: Mining Hardware", next: "hardware" },
                    { label: "Back to Start", next: "start" }
                ]
            },
            hardware: {
                title: "Mining Hardware",
                text: "Bitcoin mining evolved from CPUs to GPUs to specialized ASIC miners:\n\n• ASICs: Purpose-built, most efficient\n• GPUs: Versatile but less efficient\n• CPUs: Obsolete for Bitcoin mining\n\nASIC miners like Antminer S19 dominate today.",
                image: "🖥️",
                options: [
                    { label: "Next: Mining Pools", next: "pools" },
                    { label: "Back: Proof of Work", next: "proofOfWork" }
                ]
            },
            pools: {
                title: "Mining Pools",
                text: "Solo mining is nearly impossible today. Miners join pools to combine hash power and share rewards proportionally.\n\nPopular pools include F2Pool, Antpool, and Slush Pool. Choose based on fees, payout methods, and reputation.",
                image: "🏊‍♂️",
                options: [
                    { label: "Next: Economics", next: "economics" },
                    { label: "Back: Mining Hardware", next: "hardware" }
                ]
            },
            economics: {
                title: "Mining Economics",
                text: "Mining profitability depends on:\n\n• Hash rate and efficiency\n• Electricity costs\n• Bitcoin price\n• Mining difficulty\n• Hardware costs\n\nUse mining calculators to estimate profitability before investing.",
                image: "💰",
                options: [
                    { label: "Next: Security Role", next: "security" },
                    { label: "Back: Mining Pools", next: "pools" }
                ]
            },
            security: {
                title: "Mining's Security Role",
                text: "Miners don't just process transactions - they secure Bitcoin's immutability. The more hash power, the more secure the network.\n\nAttacking Bitcoin would require controlling 51% of hash power, which is economically prohibitive.",
                image: "🛡️",
                options: [
                    { label: "Complete Course!", next: "completion" },
                    { label: "Back: Economics", next: "economics" }
                ]
            },
            completion: {
                title: "Mining Expert! ⛏️",
                text: "Excellent! You now understand Bitcoin mining from proof-of-work to economics. You know how miners secure the network and earn rewards.\n\nYou're ready to evaluate mining opportunities or simply appreciate this crucial part of Bitcoin!",
                image: "🏆",
                options: [
                    { label: "Restart Course", next: "start" },
                    { label: "View Progress", action: "showMap" }
                ]
            }
        },
        topicMapping: {
            fundamentals: ['proofOfWork', 'hardware'],
            operations: ['pools', 'economics'],
            security: ['security']
        },
        categories: [
            { id: 'fundamentals', name: 'Mining Fundamentals', icon: '⛏️' },
            { id: 'operations', name: 'Mining Operations', icon: '🏭' },
            { id: 'security', name: 'Network Security', icon: '🛡️' }
        ]
    }
};
const wikilinkConcepts = {
    "public key": {
        image: "🔑",
        title: "Public Key",
        description: "A public key is a cryptographic code that allows users to receive Bitcoin transactions. It’s safe to share."
    },
    "private key": {
        image: "🛡️",
        title: "Private Key",
        description: "A private key gives access to your Bitcoin. Never share it—whoever holds it controls your coins."
    },
    "blockchain": {
        image: "⛓️",
        title: "Blockchain",
        description: "A blockchain is a decentralized ledger that records all Bitcoin transactions in secure blocks."
    },
    "bitcoin": {
        image: "₿",
        title: "Bitcoin",
        description: "Bitcoin is a decentralized digital currency that operates without a central authority. It allows peer-to-peer transactions on the internet."
    },
    "wallet": {
        image: "👛",
        title: "Wallet",
        description: "A Bitcoin wallet stores your private keys and allows you to send and receive Bitcoin securely."
    },
    "node": {
        image: "🖧",
        title: "Node",
        description: "A node is a computer that helps run the Bitcoin network by validating transactions and blocks."
    },
    "miner": {
        image: "⛏️",
        title: "Miner",
        description: "Miners use computing power to secure the network and add new blocks to the blockchain. They are rewarded with Bitcoin."
    },
    "satoshi": {
        image: "🟠",
        title: "Satoshi",
        description: "A satoshi is the smallest unit of Bitcoin, equal to 0.00000001 BTC. Named after Bitcoin's creator."
    },
    "seed phrase": {
        image: "📝",
        title: "Seed Phrase",
        description: "A seed phrase is a list of words that backs up your wallet. If you lose it, you lose access to your Bitcoin."
    },
    "lightning network": {
        image: "⚡",
        title: "Lightning Network",
        description: "A fast, low-fee payment system built on top of Bitcoin. It allows instant transactions without waiting for blockchain confirmations."
    },
    "decentralization": {
        image: "🌐",
        title: "Decentralization",
        description: "Decentralization means no single entity controls the Bitcoin network. Power is spread across many users and nodes."
    },
    "hash": {
        image: "🔁",
        title: "Hash",
        description: "A hash is a fixed-length string created from data using an algorithm. It ensures integrity and security in Bitcoin."
    },
    "halving": {
        image: "✂️",
        title: "Halving",
        description: "Halving is a scheduled event that cuts the Bitcoin mining reward in half. It happens every 210,000 blocks (~4 years)."
    }
};

// State management
let currentCourse = null;
let currentScreen = 'start';
let completedScreens = {};
let currentView = 'courses';

// DOM elements
const coursesSection = document.getElementById('coursesSection');
const learningSection = document.getElementById('learningSection');
const mapSection = document.getElementById('mapSection');
const learningCard = document.getElementById('learningCard');
const coursesBtn = document.getElementById('coursesBtn');
const learnBtn = document.getElementById('learnBtn');
const mapBtn = document.getElementById('mapBtn');
const resumeBtn = document.getElementById('resumeBtn');

// Initialize app
function init() {
    loadProgress();
    showView('courses');
    renderCoursesList();
}

// Save/Load progress (using variables since localStorage not available)
let savedProgress = {};

function saveProgress() {
    if (currentCourse) {
        savedProgress[currentCourse] = {
            currentScreen,
            completedScreens: completedScreens[currentCourse] || []
        };
    }
}

function loadProgress() {
    // Initialize completed screens for all courses
    Object.keys(courses).forEach(courseId => {
        if (!completedScreens[courseId]) {
            completedScreens[courseId] = new Set();
        }
    });

    // Load from saved progress
    Object.keys(savedProgress).forEach(courseId => {
        const data = savedProgress[courseId];
        if (data && data.completedScreens) {
            completedScreens[courseId] = new Set(data.completedScreens);
        }
    });
}

// Render courses list
function renderCoursesList() {
    const coursesList = document.getElementById('coursesList');
    coursesList.innerHTML = Object.entries(courses).map(([courseId, course]) => {
        const totalScreens = course.screens ? Object.keys(course.screens).length - 1 : 0;
        const completed = completedScreens[courseId] ? completedScreens[courseId].size - (completedScreens[courseId].has('start') ? 1 : 0) : 0;
        const progress = totalScreens > 0 ? Math.round((completed / totalScreens) * 100) : 0;

        const isComingSoon = course.comingSoon;

        return `
                <div class="course-card rounded-2xl p-6 card-hover ${isComingSoon ? 'opacity-60' : 'cursor-pointer'}" 
                     ${!isComingSoon ? `onclick="selectCourse('${courseId}')"` : ''}>
                    <div class="flex items-start justify-between mb-4">
                        <div class="text-4xl">${course.icon}</div>
                        ${isComingSoon ? '<span class="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">Coming Soon</span>' :
            progress > 0 ? `<span class="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-xs">${progress}% Complete</span>` : ''}
                    </div>
                    <h3 class="text-xl font-bold mb-2">${course.name}</h3>
                    <p class="text-white/70 mb-4">${course.description}</p>
                    ${!isComingSoon && progress > 0 ? `
                        <div class="w-full bg-white/20 rounded-full h-2 mb-4">
                            <div class="bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-500" 
                                 style="width: ${progress}%"></div>
                        </div>
                    ` : ''}
                    ${!isComingSoon ? `
                        <button class="w-full bg-gradient-to-r ${course.color} hover:opacity-90 transition-all duration-300 px-4 py-2 rounded-lg font-medium">
                            ${progress > 0 ? 'Continue Learning' : 'Start Course'}
                        </button>
                    ` : ''}
                </div>
            `;
    }).join('');
}

// Select course
function selectCourse(courseId) {
    currentCourse = courseId;
    const course = courses[courseId];

    if (!completedScreens[courseId]) {
        completedScreens[courseId] = new Set();
    }

    // Set current screen to saved progress or start
    const savedData = savedProgress[courseId];
    currentScreen = (savedData && savedData.currentScreen) || 'start';

    document.getElementById('currentCourseName').textContent = course.name;
    document.getElementById('mapCourseName').textContent = course.name;

    showView('learning');
    render(currentScreen);
}
function convertWikilinks(text) {
    const regex = /\b(public key|private key|blockchain)\b/gi;
    return text.replace(regex, match => {
        const conceptId = match.toLowerCase();
        return `<span class="wikilink" onclick="showConceptModal('${conceptId}')">${match}</span>`;
    });
}

let returnToScreen = null;

function showConceptModal(id) {
    const concept = wikilinkConcepts[id];
    if (!concept) return;

    document.getElementById('conceptImage').innerText = concept.image;
    document.getElementById('conceptTitle').innerText = concept.title;
    document.getElementById('conceptDescription').innerText = concept.description;

    document.getElementById('conceptModal').classList.remove('hidden');
    returnToScreen = currentScreen;
}

function closeConceptModal() {
    document.getElementById('conceptModal').classList.add('hidden');
}

function restoreLearningScreen() {
    closeConceptModal();
    render(returnToScreen);
}


// Render learning screen
function render(screenId) {
    if (!currentCourse) return;

    const course = courses[currentCourse];
    const screen = course.screens[screenId];
    if (!screen) return;

    currentScreen = screenId;
    completedScreens[currentCourse].add(screenId);

    // Update resume button visibility
    resumeBtn.classList.toggle('hidden', screenId === 'start');

    const optionsHtml = screen.options.map(option => {
        if (option.action === 'showMap') {
            return `<button onclick="showView('map')" class="bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 px-6 py-3 rounded-lg font-medium transform hover:scale-105">
                    ${option.label}
                </button>`;
        }
        return `<button onclick="render('${option.next}')" class="bg-blue-600 hover:bg-blue-500 transition-all duration-300 px-6 py-3 rounded-lg font-medium transform hover:scale-105">
                ${option.label}
            </button>`;
    }).join('');

    learningCard.innerHTML = `
            <div class="text-center fade-in">
                <div class="text-6xl mb-6">${screen.image}</div>
                <h2 class="text-3xl font-bold mb-6">${screen.title}</h2>  
                <p class="text-lg text-white/90 mb-8 leading-relaxed whitespace-pre-line">${convertWikilinks(screen.text)}</p>
                <div class="flex flex-wrap gap-4 justify-center">
                    ${optionsHtml}
                </div>
            </div>
        `;

    saveProgress();
    updateProgressMap();
}

// Show different views
function showView(view) {
    currentView = view;

    // Hide all sections
    coursesSection.classList.add('hidden');
    learningSection.classList.add('hidden');
    mapSection.classList.add('hidden');

    // Reset button states
    coursesBtn.classList.remove('bg-purple-600/80');
    learnBtn.classList.remove('bg-blue-600/80');
    mapBtn.classList.remove('bg-emerald-600/80');

    // Show appropriate section and update buttons
    if (view === 'courses') {
        coursesSection.classList.remove('hidden');
        coursesBtn.classList.add('bg-purple-600/80');
        learnBtn.classList.add('hidden');
        mapBtn.classList.add('hidden');
        resumeBtn.classList.add('hidden');
        renderCoursesList();
    } else if (view === 'learning') {
        learningSection.classList.remove('hidden');
        learnBtn.classList.add('bg-blue-600/80');
        learnBtn.classList.remove('hidden');
        mapBtn.classList.remove('hidden');
        if (currentScreen !== 'start') {
            resumeBtn.classList.remove('hidden');
        }
    } else if (view === 'map') {
        mapSection.classList.remove('hidden');
        mapBtn.classList.add('bg-emerald-600/80');
        learnBtn.classList.remove('hidden');
        mapBtn.classList.remove('hidden');
        if (currentScreen !== 'start') {
            resumeBtn.classList.remove('hidden');
        }
    }
}

// Update progress map
function updateProgressMap() {
    if (!currentCourse) return;

    const course = courses[currentCourse];
    const totalScreens = Object.keys(course.screens).length - 1;
    const completed = completedScreens[currentCourse].size - (completedScreens[currentCourse].has('start') ? 1 : 0);
    const percentage = Math.round((completed / totalScreens) * 100);

    // Update progress circle
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    document.getElementById('progressCircle').style.strokeDashoffset = offset;
    document.getElementById('progressPercent').textContent = `${percentage}%`;
    document.getElementById('completedCount').textContent = completed;

    // Update badges
    updateBadges();

    // Update topic cards
    updateTopicCards();
}

// Update achievement badges
function updateBadges() {
    if (!currentCourse) return;

    const badgesContainer = document.getElementById('badges');
    const badges = [];
    const completedCount = completedScreens[currentCourse].size;

    if (completedCount >= 3) {
        badges.push({ icon: '🌱', text: 'Getting Started', color: 'bg-green-500' });
    }
    if (completedCount >= 6) {
        badges.push({ icon: '🚀', text: 'Making Progress', color: 'bg-blue-500' });
    }
    if (completedCount >= 9) {
        badges.push({ icon: '🏆', text: 'Bitcoin Expert', color: 'bg-yellow-500' });
    }
    if (completedScreens[currentCourse].has('completion')) {
        badges.push({ icon: '✨', text: 'Course Complete', color: 'bg-purple-500' });
    }

    badgesContainer.innerHTML = badges.map(badge =>
        `<span class="${badge.color} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                ${badge.icon} ${badge.text}
            </span>`
    ).join('');
}

// Update topic cards in progress map
function updateTopicCards() {
    if (!currentCourse) return;

    const course = courses[currentCourse];
    const topicCategories = document.getElementById('topicCategories');

    topicCategories.innerHTML = course.categories.map(category => `
            <div class="glass rounded-2xl p-6 card-hover">
                <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                    ${category.icon} <span>${category.name}</span>
                </h3>
                <div class="grid md:grid-cols-2 gap-3" id="${category.id}Topics">
                    ${course.topicMapping[category.id].map(topicId => {
        const screen = course.screens[topicId];
        const isCompleted = completedScreens[currentCourse].has(topicId);
        const isCurrent = currentScreen === topicId;

        let cardClass = 'topic-card';
        if (isCompleted) cardClass += ' completed';
        else if (isCurrent) cardClass += ' current';

        return `
                            <button onclick="navigateToTopic('${topicId}')"
                                    class="${cardClass} p-4 rounded-lg text-left hover:scale-105 transition-all duration-300">
                                <div class="flex items-center justify-between mb-2">
                                    <h4 class="font-medium">${screen.title}</h4>
                                    <span class="text-2xl">${isCompleted ? '✅' : (isCurrent ? '🔄' : '⭕')}</span>
                                </div>
                                <p class="text-sm text-white/70 line-clamp-2">${screen.text.substring(0, 80)}...</p>
                            </button>
                        `;
    }).join('')}
                </div>
            </div>
        `).join('');
}

// Navigate to specific topic
function navigateToTopic(topicId) {
    showView('learning');
    render(topicId);
}

// Event listeners
coursesBtn.addEventListener('click', () => showView('courses'));
learnBtn.addEventListener('click', () => showView('learning'));
mapBtn.addEventListener('click', () => showView('map'));
resumeBtn.addEventListener('click', () => {
    showView('learning');
    render(currentScreen);
});

// Make functions globally available
window.render = render;
window.showView = showView;
window.navigateToTopic = navigateToTopic;
window.selectCourse = selectCourse;

// Initialize the app
init();