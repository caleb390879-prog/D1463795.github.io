// ========== 占卜數據配置 ==========
// 所有占卜結果集中在此，方便修改成其他主題
const divinationData = {
    fortunes: [
        {
            id: 1,
            name: "大吉運",
            emoji: "🌈",
            work: "工作上將迎來新的機遇，要積極把握！",
            study: "學業運勢上升，是學習新知識的好時機。",
            love: "感情會有意外的驚喜，保持真誠的心。",
            money: "財運旺盛，可能會有意外之喜！",
            message: "✨ 相信自己，好運就在眼前！"
        },
        {
            id: 2,
            name: "小吉運",
            emoji: "🌟",
            work: "工作進展平穩，需要多一點耐心。",
            study: "學習成果逐漸顯現，繼續努力會有收穫。",
            love: "感情關係穩定，溫柔相待會有驚喜。",
            money: "財運平穩，適合理財規劃。",
            message: "💫 堅持一下，好事就要來臨了！"
        },
        {
            id: 3,
            name: "平運",
            emoji: "⚖️",
            work: "工作維持原狀，暫無太大變動。",
            study: "學習進度正常，持之以恆最重要。",
            love: "感情需要溝通，多表達會更親密。",
            money: "財運平衡，開支與收入相當。",
            message: "🎯 生活如常，享受當下的美好！"
        },
        {
            id: 4,
            name: "轉運",
            emoji: "🔄",
            work: "工作將發生轉折，可能是好機遇也可能需要調整。",
            study: "學習方向可能需要改變，嘗試新的方法。",
            love: "感情可能會有新的發展，打開心扉迎接新戀情。",
            money: "財運即將改變，準備應對新的機遇。",
            message: "🌊 變化是機遇的開始，勇敢面對吧！"
        },
        {
            id: 5,
            name: "考驗運",
            emoji: "⛰️",
            work: "工作會面臨挑戰，需要多一分努力。",
            study: "學業路上有難度，不放棄就能度過難關。",
            love: "感情需要克服一些困難，但這會讓關係更堅固。",
            money: "財運有起伏，謹慎消費是上策。",
            message: "💪 困難只是暫時的，堅持就是勝利！"
        },
        {
            id: 6,
            name: "創意運",
            emoji: "🎨",
            work: "工作中有創新的想法，是展現才華的好時機。",
            study: "學習中會有靈感，發揮想像力會有不同收穫。",
            love: "用創意表達愛意，會獲得對方的欣賞。",
            money: "創意帶來額外收入的可能性。",
            message: "🌟 打破常規，你的想法就是改變！"
        },
        {
            id: 7,
            name: "行動運",
            emoji: "🚀",
            work: "工作需要主動出擊，機會屬於勇敢者。",
            study: "學習要多做練習，行動比思考更重要。",
            love: "主動表達感受，勇敢追求所愛。",
            money: "投資運不錯，但需要做功課再行動。",
            message: "⚡ 不要等待，現在就是行動的時刻！"
        },
        {
            id: 8,
            name: "靜思運",
            emoji: "🧘",
            work: "工作需要暫停，思考下一步策略。",
            study: "學習需要深入思考，不求快但求好。",
            love: "感情需要靜下心去思考，反思很重要。",
            money: "理財需要思考，盲目投資要避免。",
            message: "🌙 停下腳步，智慧來自於靜思。"
        },
        {
            id: 9,
            name: "幸運運",
            emoji: "🍀",
            work: "工作走運，事情會有出乎意料的好結果。",
            study: "學習運氣好，複習過的內容會用到。",
            love: "感情運爆表，遇見對的人的機率很高。",
            money: "財運亨通，幸運會眷顧你。",
            message: "🎉 幸運之神已經在照顧你了！"
        },
        {
            id: 10,
            name: "成長運",
            emoji: "🌱",
            work: "工作中會學到新技能，是成長的季節。",
            study: "學習會有顯著進步，投入會有回報。",
            love: "感情會促進彼此的成長，更加成熟。",
            money: "財富會因為投資自己而增長。",
            message: "🌳 每一天都是成長的機會，珍惜它！"
        }
    ]
};

// ========== 全域變數 ==========
let currentMode = null;

// ========== 主要函數 ==========
function startDivination(mode) {
    currentMode = mode;

    if (mode === 'random') {
        performRandomDivination();
    } else if (mode === 'choice') {
        showChoiceOptions();
    }
}

function performRandomDivination() {
    const introSection = document.getElementById('introSection');
    const loadingSection = document.getElementById('loadingSection');
    const resultSection = document.getElementById('resultSection');
    const choiceSection = document.getElementById('choiceSection');

    // 隱藏介紹和選擇區
    introSection.style.display = 'none';
    choiceSection.style.display = 'none';
    resultSection.classList.remove('show');

    // 顯示加載
    loadingSection.style.display = 'block';

    // 模擬占卜延遲
    setTimeout(() => {
        const randomFortune = divinationData.fortunes[
            Math.floor(Math.random() * divinationData.fortunes.length)
        ];

        loadingSection.style.display = 'none';
        displayResult(randomFortune);
        resultSection.classList.add('show');
    }, 1500);
}

function showChoiceOptions() {
    const introSection = document.getElementById('introSection');
    const choiceSection = document.getElementById('choiceSection');
    const choiceButtons = document.getElementById('choiceButtons');
    const resultSection = document.getElementById('resultSection');

    introSection.style.display = 'none';
    resultSection.classList.remove('show');

    // 生成選擇按鈕
    choiceButtons.innerHTML = '';
    divinationData.fortunes.forEach((fortune) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.textContent = `${fortune.emoji} ${fortune.name}`;
        btn.onclick = () => performChoiceDivination(fortune.id);
        choiceButtons.appendChild(btn);
    });

    choiceSection.style.display = 'block';
}

function performChoiceDivination(fortuneId) {
    const fortune = divinationData.fortunes.find(f => f.id === fortuneId);
    const choiceSection = document.getElementById('choiceSection');
    const loadingSection = document.getElementById('loadingSection');
    const resultSection = document.getElementById('resultSection');

    choiceSection.style.display = 'none';
    resultSection.classList.remove('show');
    loadingSection.style.display = 'block';

    setTimeout(() => {
        loadingSection.style.display = 'none';
        displayResult(fortune);
        resultSection.classList.add('show');
    }, 1000);
}

function displayResult(fortune) {
    document.getElementById('resultEmoji').textContent = fortune.emoji;
    document.getElementById('resultName').textContent = fortune.name;
    document.getElementById('resultMessage').textContent = fortune.message;

    const aspectsHtml = `
        <div class="aspect">
            <div class="aspect-label">💼 工作運勢</div>
            <div class="aspect-text">${fortune.work}</div>
        </div>
        <div class="aspect">
            <div class="aspect-label">📚 學業運勢</div>
            <div class="aspect-text">${fortune.study}</div>
        </div>
        <div class="aspect">
            <div class="aspect-label">💕 感情運勢</div>
            <div class="aspect-text">${fortune.love}</div>
        </div>
        <div class="aspect">
            <div class="aspect-label">💰 財運運勢</div>
            <div class="aspect-text">${fortune.money}</div>
        </div>
    `;

    document.getElementById('resultAspects').innerHTML = aspectsHtml;
}

function resetDivination() {
    const introSection = document.getElementById('introSection');
    const choiceSection = document.getElementById('choiceSection');
    const resultSection = document.getElementById('resultSection');
    const loadingSection = document.getElementById('loadingSection');

    introSection.style.display = 'block';
    choiceSection.style.display = 'none';
    resultSection.classList.remove('show');
    loadingSection.style.display = 'none';

    currentMode = null;
}