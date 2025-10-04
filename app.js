// Hong Kong MTR Memory Game - Fixed Version
class MTRMemoryGame {
    constructor() {
        this.totalStations = 98;
        this.foundStations = new Set();
        this.stationInput = document.getElementById('stationInput');
        this.resetBtn = document.getElementById('resetBtn');
        this.percentageDisplay = document.querySelector('.percentage');
        this.stationCountDisplay = document.querySelector('.station-count');
        
        // All MTR Station Data
        this.stationData = {
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

        // Create reverse lookup
        this.inputToStation = {};
        Object.keys(this.stationData).forEach(station => {
            this.stationData[station].forEach(variant => {
                this.inputToStation[variant.toLowerCase().trim()] = station;
            });
        });

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateDisplay();
        this.stationInput.focus();
        
        console.log('🚇 Hong Kong MTR Memory Game loaded!');
        console.log('🔍 Stations are HIDDEN - type to discover them!');
        console.log('💡 Try: Central, TST, Airport, HKU');
    }

    setupEventListeners() {
        // Input handling
        this.stationInput.addEventListener('input', (e) => {
            this.handleInput(e.target.value);
        });

        this.stationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleInput(e.target.value);
            }
        });

        // Reset button
        this.resetBtn.addEventListener('click', () => {
            this.resetGame();
        });
    }

    handleInput(input) {
        const cleanInput = input.toLowerCase().trim();
        
        if (cleanInput.length < 2) return;

        const stationName = this.inputToStation[cleanInput];
        
        if (stationName && !this.foundStations.has(stationName)) {
            this.foundStation(stationName);
            this.stationInput.value = '';
            this.stationInput.focus();
        }
    }

    foundStation(stationName) {
        this.foundStations.add(stationName);
        
        // REVEAL the station on the map
        this.revealStationOnMap(stationName);
        
        // Update display
        this.updateDisplay();
        
        // Play sound
        this.playFoundSound();
        
        // Check completion
        if (this.foundStations.size === this.totalStations) {
            this.celebrateCompletion();
        }
        
        console.log(`✅ Found: ${stationName} (${this.foundStations.size}/98)`);
    }

    revealStationOnMap(stationName) {
        // Find station markers and make them visible
        const stationMarkers = document.querySelectorAll(`[data-station="${stationName}"]`);
        
        stationMarkers.forEach(marker => {
            if (marker.classList.contains('station-marker')) {
                // Add 'found' class to trigger CSS visibility
                marker.classList.add('found');
                
                // Also directly set opacity for immediate visibility
                const circle = marker.querySelector('circle');
                const text = marker.querySelector('.station-label');
                
                if (circle) {
                    circle.style.opacity = '1';
                    circle.setAttribute('fill', '#2ecc71'); // Green when found
                }
                if (text) {
                    text.style.opacity = '1';
                }
            }
        });
    }

    updateDisplay() {
        const foundCount = this.foundStations.size;
        const percentage = ((foundCount / this.totalStations) * 100).toFixed(1);
        
        this.percentageDisplay.textContent = `${percentage}%`;
        this.stationCountDisplay.textContent = `${foundCount}/${this.totalStations} stations found`;
        
        // Update page title
        document.title = `${percentage}% - Hong Kong MTR Memory Game`;
    }

    celebrateCompletion() {
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        celebration.innerHTML = `
            <div class="celebration-content">
                <div>🎉 CONGRATULATIONS! 🎉</div>
                <div style="font-size: 1.8rem; margin-top: 15px;">
                    You found all 98 MTR stations!
                </div>
                <div style="font-size: 1.2rem; margin-top: 15px;">
                    You're a Hong Kong transit master! 🚇
                </div>
            </div>
        `;
        
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            celebration.remove();
        }, 4000);
        
        document.title = '🎉 100% Complete - Hong Kong MTR Memory Game';
    }

    playFoundSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // Audio not supported
        }
    }

    resetGame() {
        if (this.foundStations.size > 5) {
            if (!confirm(`Reset and lose progress of ${this.foundStations.size} stations?`)) {
                return;
            }
        }
        
        this.foundStations.clear();
        
        // Hide all stations again
        document.querySelectorAll('.station-marker.found').forEach(marker => {
            marker.classList.remove('found');
            
            const circle = marker.querySelector('circle');
            const text = marker.querySelector('.station-label');
            
            if (circle) {
                circle.style.opacity = '0';
                circle.setAttribute('fill', circle.getAttribute('fill')); // Reset to original color
            }
            if (text) {
                text.style.opacity = '0';
            }
        });
        
        this.updateDisplay();
        this.stationInput.value = '';
        this.stationInput.focus();
        
        document.title = 'Hong Kong MTR Memory Game';
        
        console.log('🔄 Game reset - all stations hidden again!');
    }
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    const game = new MTRMemoryGame();
    window.mtrGame = game; // For debugging
});

// Helper functions
window.mtrHelpers = {
    test: () => {
        console.log('🧪 Testing station discovery...');
        const game = window.mtrGame;
        setTimeout(() => game.foundStation('Central'), 500);
        setTimeout(() => game.foundStation('Tsim Sha Tsui'), 1000);
        setTimeout(() => game.foundStation('Airport'), 1500);
    },
    
    hint: () => {
        const game = window.mtrGame;
        const unfound = Object.keys(game.stationData).filter(s => !game.foundStations.has(s));
        const random = unfound[Math.floor(Math.random() * unfound.length)];
        console.log(`💡 Try: ${random}`);
        return random;
    }
};