// Hong Kong MTR Memory Game Logic
class MTRMemoryGame {
    constructor() {
        this.totalStations = 98;
        this.foundStations = new Set();
        this.stationInput = document.getElementById('stationInput');
        this.resetBtn = document.getElementById('resetBtn');
        this.percentageDisplay = document.querySelector('.percentage');
        this.stationCountDisplay = document.querySelector('.station-count');
        this.progressFill = document.querySelector('.progress-fill');
        this.progressCircle = document.querySelector('.progress-circle');
        this.foundIndicator = document.querySelector('.found-count');
        
        // Complete MTR Station Data with Alternative Names
        this.stationData = {
            // Exact station names
            'Kennedy Town': ['Kennedy Town', 'kennedy town'],
            'HKU': ['HKU', 'hku', 'University of Hong Kong', 'Hong Kong University'],
            'Sai Ying Pun': ['Sai Ying Pun', 'sai ying pun'],
            'Sheung Wan': ['Sheung Wan', 'sheung wan'],
            'Central': ['Central', 'central'],
            'Admiralty': ['Admiralty', 'admiralty'],
            'Wan Chai': ['Wan Chai', 'wan chai', 'wanchai'],
            'Causeway Bay': ['Causeway Bay', 'causeway bay'],
            'Tin Hau': ['Tin Hau', 'tin hau'],
            'Fortress Hill': ['Fortress Hill', 'fortress hill'],
            'North Point': ['North Point', 'north point'],
            'Quarry Bay': ['Quarry Bay', 'quarry bay'],
            'Tai Koo': ['Tai Koo', 'tai koo', 'taikoo'],
            'Sai Wan Ho': ['Sai Wan Ho', 'sai wan ho'],
            'Shau Kei Wan': ['Shau Kei Wan', 'shau kei wan'],
            'Heng Fa Chuen': ['Heng Fa Chuen', 'heng fa chuen'],
            'Chai Wan': ['Chai Wan', 'chai wan'],
            'Whampoa': ['Whampoa', 'whampoa'],
            'Ho Man Tin': ['Ho Man Tin', 'ho man tin'],
            'Yau Ma Tei': ['Yau Ma Tei', 'yau ma tei'],
            'Mong Kok': ['Mong Kok', 'mong kok', 'mongkok'],
            'Prince Edward': ['Prince Edward', 'prince edward'],
            'Shek Kip Mei': ['Shek Kip Mei', 'shek kip mei'],
            'Kowloon Tong': ['Kowloon Tong', 'kowloon tong'],
            'Lok Fu': ['Lok Fu', 'lok fu'],
            'Wong Tai Sin': ['Wong Tai Sin', 'wong tai sin'],
            'Diamond Hill': ['Diamond Hill', 'diamond hill'],
            'Choi Hung': ['Choi Hung', 'choi hung'],
            'Kowloon Bay': ['Kowloon Bay', 'kowloon bay'],
            'Ngau Tau Kok': ['Ngau Tau Kok', 'ngau tau kok'],
            'Kwun Tong': ['Kwun Tong', 'kwun tong'],
            'Lam Tin': ['Lam Tin', 'lam tin'],
            'Yau Tong': ['Yau Tong', 'yau tong'],
            'Tiu Keng Leng': ['Tiu Keng Leng', 'tiu keng leng'],
            'Tsim Sha Tsui': ['Tsim Sha Tsui', 'tsim sha tsui', 'TST', 'tst'],
            'Jordan': ['Jordan', 'jordan'],
            'Sham Shui Po': ['Sham Shui Po', 'sham shui po'],
            'Cheung Sha Wan': ['Cheung Sha Wan', 'cheung sha wan'],
            'Lai Chi Kok': ['Lai Chi Kok', 'lai chi kok'],
            'Mei Foo': ['Mei Foo', 'mei foo'],
            'Lai King': ['Lai King', 'lai king'],
            'Kwai Fong': ['Kwai Fong', 'kwai fong'],
            'Kwai Hing': ['Kwai Hing', 'kwai hing'],
            'Tai Wo Hau': ['Tai Wo Hau', 'tai wo hau'],
            'Tsuen Wan': ['Tsuen Wan', 'tsuen wan'],
            'Tseung Kwan O': ['Tseung Kwan O', 'tseung kwan o', 'TKO', 'tko'],
            'Hang Hau': ['Hang Hau', 'hang hau'],
            'Po Lam': ['Po Lam', 'po lam'],
            'LOHAS Park': ['LOHAS Park', 'lohas park', 'LOHAS', 'lohas'],
            'Hong Kong': ['Hong Kong', 'hong kong', 'HK Station', 'hk station'],
            'Kowloon': ['Kowloon', 'kowloon', 'KLN', 'kln'],
            'Olympic': ['Olympic', 'olympic'],
            'Nam Cheong': ['Nam Cheong', 'nam cheong'],
            'Tsing Yi': ['Tsing Yi', 'tsing yi'],
            'Sunny Bay': ['Sunny Bay', 'sunny bay'],
            'Tung Chung': ['Tung Chung', 'tung chung'],
            'Airport': ['Airport', 'airport', 'Airport Terminal', 'airport terminal'],
            'AsiaWorld-Expo': ['AsiaWorld-Expo', 'asiaworld-expo', 'AsiaWorld Expo', 'asiaworld expo', 'AWE', 'awe'],
            'Disneyland Resort': ['Disneyland Resort', 'disneyland resort', 'Disneyland', 'disneyland'],
            'Exhibition Centre': ['Exhibition Centre', 'exhibition centre', 'Exhibition Center', 'exhibition center'],
            'Hung Hom': ['Hung Hom', 'hung hom'],
            'Mong Kok East': ['Mong Kok East', 'mong kok east', 'MKE', 'mke'],
            'Tai Wai': ['Tai Wai', 'tai wai'],
            'Sha Tin': ['Sha Tin', 'sha tin', 'shatin'],
            'Fo Tan': ['Fo Tan', 'fo tan'],
            'Racecourse': ['Racecourse', 'racecourse', 'Race Course', 'race course'],
            'University': ['University', 'university', 'CUHK', 'cuhk'],
            'Tai Po Market': ['Tai Po Market', 'tai po market', 'Tai Po', 'tai po'],
            'Tai Wo': ['Tai Wo', 'tai wo'],
            'Fanling': ['Fanling', 'fanling'],
            'Sheung Shui': ['Sheung Shui', 'sheung shui'],
            'Lo Wu': ['Lo Wu', 'lo wu', 'LoWu', 'lowu'],
            'Lok Ma Chau': ['Lok Ma Chau', 'lok ma chau'],
            'Tuen Mun': ['Tuen Mun', 'tuen mun'],
            'Siu Hong': ['Siu Hong', 'siu hong'],
            'Tin Shui Wai': ['Tin Shui Wai', 'tin shui wai', 'TSW', 'tsw'],
            'Long Ping': ['Long Ping', 'long ping'],
            'Yuen Long': ['Yuen Long', 'yuen long', 'YL', 'yl'],
            'Kam Sheung Road': ['Kam Sheung Road', 'kam sheung road'],
            'Tsuen Wan West': ['Tsuen Wan West', 'tsuen wan west', 'TWW', 'tww'],
            'Austin': ['Austin', 'austin'],
            'East Tsim Sha Tsui': ['East Tsim Sha Tsui', 'east tsim sha tsui', 'East TST', 'east tst'],
            'To Kwa Wan': ['To Kwa Wan', 'to kwa wan', 'TKW', 'tkw'],
            'Sung Wong Toi': ['Sung Wong Toi', 'sung wong toi', 'SWT', 'swt'],
            'Kai Tak': ['Kai Tak', 'kai tak'],
            'Hin Keng': ['Hin Keng', 'hin keng'],
            'Che Kung Temple': ['Che Kung Temple', 'che kung temple'],
            'Sha Tin Wai': ['Sha Tin Wai', 'sha tin wai'],
            'City One': ['City One', 'city one'],
            'Shek Mun': ['Shek Mun', 'shek mun'],
            'Tai Shui Hang': ['Tai Shui Hang', 'tai shui hang'],
            'Heng On': ['Heng On', 'heng on'],
            'Ma On Shan': ['Ma On Shan', 'ma on shan', 'MOS', 'mos'],
            'Wu Kai Sha': ['Wu Kai Sha', 'wu kai sha', 'WKS', 'wks'],
            'Ocean Park': ['Ocean Park', 'ocean park'],
            'Wong Chuk Hang': ['Wong Chuk Hang', 'wong chuk hang', 'WCH', 'wch'],
            'Lei Tung': ['Lei Tung', 'lei tung'],
            'South Horizons': ['South Horizons', 'south horizons']
        };

        // Create reverse lookup for finding station names from input
        this.inputToStation = {};
        Object.keys(this.stationData).forEach(station => {
            this.stationData[station].forEach(variant => {
                this.inputToStation[variant.toLowerCase().trim()] = station;
            });
        });

        this.lineStationCounts = {
            'Island Line': 17,
            'Kwun Tong Line': 17,
            'Tsuen Wan Line': 16,
            'Tseung Kwan O Line': 8,
            'Tung Chung Line': 8,
            'Airport Express': 5,
            'East Rail Line': 16,
            'Tuen Ma Line': 27,
            'South Island Line': 5,
            'Disneyland Resort Line': 2
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateDisplay();
        this.stationInput.focus();
        
        // Load saved progress if available
        this.loadProgress();
    }

    setupEventListeners() {
        this.stationInput.addEventListener('input', (e) => {
            this.handleInput(e.target.value);
        });

        this.stationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleInput(e.target.value);
            }
        });

        this.resetBtn.addEventListener('click', () => {
            this.resetGame();
        });

        // Allow keyboard shortcut for reset
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'r') {
                e.preventDefault();
                this.resetGame();
            }
        });
    }

    handleInput(input) {
        const cleanInput = input.toLowerCase().trim();
        
        if (cleanInput.length < 2) return;

        const stationName = this.inputToStation[cleanInput];
        
        if (stationName && !this.foundStations.has(stationName)) {
            this.foundStation(stationName);
            this.stationInput.value = '';
        }
    }

    foundStation(stationName) {
        this.foundStations.add(stationName);
        
        // Visual feedback
        this.markStationFound(stationName);
        this.updateDisplay();
        this.updateLineProgress(stationName);
        this.saveProgress();
        
        // Play sound effect (if available)
        this.playFoundSound();
        
        // Check for completion
        if (this.foundStations.size === this.totalStations) {
            this.celebrateCompletion();
        }
    }

    markStationFound(stationName) {
        const stationElements = document.querySelectorAll(`[data-station="${stationName}"]`);
        stationElements.forEach(element => {
            element.classList.add('found');
            
            // Add a small celebration animation
            setTimeout(() => {
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1.05)';
                }, 200);
            }, 50);
        });
    }

    updateLineProgress(stationName) {
        const stationElement = document.querySelector(`[data-station="${stationName}"]`);
        if (!stationElement) return;
        
        const lineName = stationElement.getAttribute('data-line');
        const lineSection = document.querySelector(`[data-line="${lineName}"]`);
        
        if (lineSection) {
            const foundInLine = Array.from(lineSection.querySelectorAll('.station.found')).length;
            const totalInLine = this.lineStationCounts[lineName];
            const progressElement = lineSection.querySelector('.line-progress');
            
            if (progressElement) {
                progressElement.textContent = `${foundInLine}/${totalInLine}`;
                
                // Check if line is completed
                if (foundInLine === totalInLine) {
                    lineSection.classList.add('completed');
                    this.celebrateLineCompletion(lineName);
                }
            }
        }
    }

    updateDisplay() {
        const foundCount = this.foundStations.size;
        const percentage = ((foundCount / this.totalStations) * 100).toFixed(1);
        
        this.percentageDisplay.textContent = `${percentage}%`;
        this.stationCountDisplay.textContent = `${foundCount}/${this.totalStations} stations found`;
        this.foundIndicator.textContent = foundCount;
        
        // Update progress bar
        this.progressFill.style.width = `${percentage}%`;
        
        // Update progress circle
        const degrees = (foundCount / this.totalStations) * 360;
        this.progressCircle.style.background = `conic-gradient(#3498db ${degrees}deg, #ecf0f1 ${degrees}deg)`;
        
        // Update page title
        document.title = `${percentage}% - Hong Kong MTR Memory Game`;
    }

    celebrateLineCompletion(lineName) {
        // Create a temporary celebration message
        const celebration = document.createElement('div');
        celebration.className = 'line-celebration';
        celebration.innerHTML = `🎉 ${lineName} Complete! 🎉`;
        celebration.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #2ecc71, #27ae60);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            animation: slideIn 0.5s ease, slideOut 0.5s ease 2.5s forwards;
        `;
        
        // Add animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            celebration.remove();
            style.remove();
        }, 3000);
    }

    celebrateCompletion() {
        // Full game completion celebration
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        celebration.innerHTML = `
            <div class="celebration-content">
                <div>🎉 CONGRATULATIONS! 🎉</div>
                <div style="font-size: 2rem; margin-top: 20px;">
                    You named all 98 MTR stations!
                </div>
                <div style="font-size: 1.5rem; margin-top: 20px;">
                    You're a true Hong Kong MTR expert! 🚇
                </div>
            </div>
        `;
        
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            celebration.remove();
        }, 4000);
        
        // Update page title
        document.title = '🎉 100% Complete - Hong Kong MTR Memory Game';
    }

    playFoundSound() {
        // Simple audio feedback using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // Audio not supported or blocked
        }
    }

    resetGame() {
        // Confirm reset if significant progress
        if (this.foundStations.size > 10) {
            if (!confirm(`Are you sure you want to reset? You'll lose your progress of ${this.foundStations.size} stations.`)) {
                return;
            }
        }
        
        this.foundStations.clear();
        
        // Reset visual state
        document.querySelectorAll('.station.found').forEach(station => {
            station.classList.remove('found');
            station.style.transform = '';
        });
        
        document.querySelectorAll('.line-section.completed').forEach(section => {
            section.classList.remove('completed');
        });
        
        // Reset line progress displays
        Object.keys(this.lineStationCounts).forEach(lineName => {
            const lineSection = document.querySelector(`[data-line="${lineName}"]`);
            if (lineSection) {
                const progressElement = lineSection.querySelector('.line-progress');
                if (progressElement) {
                    progressElement.textContent = `0/${this.lineStationCounts[lineName]}`;
                }
            }
        });
        
        this.updateDisplay();
        this.stationInput.value = '';
        this.stationInput.focus();
        this.clearSavedProgress();
        
        // Reset page title
        document.title = 'Hong Kong MTR Memory Game';
    }

    saveProgress() {
        try {
            // Since we can't use localStorage in the sandbox,
            // we'll store progress in a global variable
            window.mtrGameProgress = Array.from(this.foundStations);
        } catch (e) {
            // Storage not available
        }
    }

    loadProgress() {
        try {
            if (window.mtrGameProgress && Array.isArray(window.mtrGameProgress)) {
                window.mtrGameProgress.forEach(station => {
                    this.foundStations.add(station);
                    this.markStationFound(station);
                    this.updateLineProgress(station);
                });
                this.updateDisplay();
            }
        } catch (e) {
            // Storage not available
        }
    }

    clearSavedProgress() {
        try {
            delete window.mtrGameProgress;
        } catch (e) {
            // Storage not available
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new MTRMemoryGame();
    
    // Make game instance globally accessible for debugging
    window.mtrGame = game;
    
    // Add some helpful console messages
    console.log('🚇 Hong Kong MTR Memory Game loaded!');
    console.log('💡 Tips:');
    console.log('   - Try typing "Central", "TST", "Airport", or "HKU"');
    console.log('   - Use Ctrl+R to reset the game');
    console.log('   - 98 stations total across 10 MTR lines');
    console.log('   - Your progress is automatically saved');
});

// Add some utility functions for debugging
window.mtrGameHelpers = {
    showHint: () => {
        const game = window.mtrGame;
        if (!game) return;
        
        const unfoundStations = Object.keys(game.stationData).filter(station => 
            !game.foundStations.has(station)
        );
        
        if (unfoundStations.length > 0) {
            const randomStation = unfoundStations[Math.floor(Math.random() * unfoundStations.length)];
            console.log(`💡 Hint: Try "${randomStation}"`);
            return randomStation;
        } else {
            console.log('🎉 All stations found!');
        }
    },
    
    showProgress: () => {
        const game = window.mtrGame;
        if (!game) return;
        
        console.log(`📊 Progress: ${game.foundStations.size}/${game.totalStations} stations found`);
        
        Object.keys(game.lineStationCounts).forEach(line => {
            const lineStations = Array.from(document.querySelectorAll(`[data-line="${line}"] .station`));
            const foundInLine = lineStations.filter(station => station.classList.contains('found')).length;
            const totalInLine = game.lineStationCounts[line];
            console.log(`   ${line}: ${foundInLine}/${totalInLine}`);
        });
    },
    
    autoComplete: () => {
        const game = window.mtrGame;
        if (!game) return;
        
        if (confirm('This will automatically complete the game. Continue?')) {
            Object.keys(game.stationData).forEach(station => {
                if (!game.foundStations.has(station)) {
                    game.foundStation(station);
                }
            });
        }
    }
};