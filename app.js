// Hong Kong MTR Memory Game - COMPLETE WORKING VERSION
class MTRMemoryGame {
    constructor() {
        this.totalStations = 98;
        this.foundStations = new Set();
        this.stationInput = document.getElementById('stationInput');
        this.resetBtn = document.getElementById('resetBtn');
        this.percentageDisplay = document.querySelector('.percentage');
        this.stationCountDisplay = document.querySelector('.station-count');
        
        // Complete station data with coordinates
        this.stationData = {
            'Kennedy Town': {names: ['Kennedy Town', 'kennedy town'], line: 'Island', color: '#0073e6', x: 100, y: 400},
            'HKU': {names: ['HKU', 'hku', 'University of Hong Kong', 'Hong Kong University'], line: 'Island', color: '#0073e6', x: 150, y: 400},
            'Sai Ying Pun': {names: ['Sai Ying Pun', 'sai ying pun'], line: 'Island', color: '#0073e6', x: 200, y: 400},
            'Sheung Wan': {names: ['Sheung Wan', 'sheung wan'], line: 'Island', color: '#0073e6', x: 250, y: 400},
            'Central': {names: ['Central', 'central'], line: 'Island', color: '#0073e6', x: 320, y: 400},
            'Admiralty': {names: ['Admiralty', 'admiralty'], line: 'Island', color: '#0073e6', x: 370, y: 400},
            'Wan Chai': {names: ['Wan Chai', 'wan chai', 'wanchai'], line: 'Island', color: '#0073e6', x: 420, y: 400},
            'Causeway Bay': {names: ['Causeway Bay', 'causeway bay'], line: 'Island', color: '#0073e6', x: 470, y: 400},
            'Tin Hau': {names: ['Tin Hau', 'tin hau'], line: 'Island', color: '#0073e6', x: 520, y: 400},
            'Fortress Hill': {names: ['Fortress Hill', 'fortress hill'], line: 'Island', color: '#0073e6', x: 570, y: 400},
            'North Point': {names: ['North Point', 'north point'], line: 'Island', color: '#0073e6', x: 620, y: 400},
            'Quarry Bay': {names: ['Quarry Bay', 'quarry bay'], line: 'Island', color: '#0073e6', x: 670, y: 400},
            'Tai Koo': {names: ['Tai Koo', 'tai koo', 'taikoo'], line: 'Island', color: '#0073e6', x: 720, y: 400},
            'Sai Wan Ho': {names: ['Sai Wan Ho', 'sai wan ho'], line: 'Island', color: '#0073e6', x: 770, y: 400},
            'Shau Kei Wan': {names: ['Shau Kei Wan', 'shau kei wan'], line: 'Island', color: '#0073e6', x: 820, y: 400},
            'Heng Fa Chuen': {names: ['Heng Fa Chuen', 'heng fa chuen'], line: 'Island', color: '#0073e6', x: 860, y: 420},
            'Chai Wan': {names: ['Chai Wan', 'chai wan'], line: 'Island', color: '#0073e6', x: 900, y: 440},
            
            'Tsim Sha Tsui': {names: ['Tsim Sha Tsui', 'tsim sha tsui', 'TST', 'tst'], line: 'Tsuen Wan', color: '#ff0000', x: 320, y: 340},
            'Jordan': {names: ['Jordan', 'jordan'], line: 'Tsuen Wan', color: '#ff0000', x: 320, y: 320},
            'Yau Ma Tei': {names: ['Yau Ma Tei', 'yau ma tei'], line: 'Tsuen Wan', color: '#ff0000', x: 320, y: 300},
            'Mong Kok': {names: ['Mong Kok', 'mong kok', 'mongkok'], line: 'Tsuen Wan', color: '#ff0000', x: 310, y: 285},
            'Prince Edward': {names: ['Prince Edward', 'prince edward'], line: 'Tsuen Wan', color: '#ff0000', x: 300, y: 270},
            'Sham Shui Po': {names: ['Sham Shui Po', 'sham shui po'], line: 'Tsuen Wan', color: '#ff0000', x: 280, y: 250},
            'Cheung Sha Wan': {names: ['Cheung Sha Wan', 'cheung sha wan'], line: 'Tsuen Wan', color: '#ff0000', x: 250, y: 220},
            'Lai Chi Kok': {names: ['Lai Chi Kok', 'lai chi kok'], line: 'Tsuen Wan', color: '#ff0000', x: 220, y: 190},
            'Mei Foo': {names: ['Mei Foo', 'mei foo'], line: 'Tsuen Wan', color: '#ff0000', x: 190, y: 170},
            'Lai King': {names: ['Lai King', 'lai king'], line: 'Tsuen Wan', color: '#ff0000', x: 160, y: 160},
            'Kwai Fong': {names: ['Kwai Fong', 'kwai fong'], line: 'Tsuen Wan', color: '#ff0000', x: 140, y: 155},
            'Kwai Hing': {names: ['Kwai Hing', 'kwai hing'], line: 'Tsuen Wan', color: '#ff0000', x: 130, y: 153},
            'Tai Wo Hau': {names: ['Tai Wo Hau', 'tai wo hau'], line: 'Tsuen Wan', color: '#ff0000', x: 120, y: 152},
            'Tsuen Wan': {names: ['Tsuen Wan', 'tsuen wan'], line: 'Tsuen Wan', color: '#ff0000', x: 100, y: 150},
            
            'Hong Kong': {names: ['Hong Kong', 'hong kong', 'HK Station', 'hk station'], line: 'Airport Express', color: '#00b7a7', x: 320, y: 430},
            'Kowloon': {names: ['Kowloon', 'kowloon', 'KLN', 'kln'], line: 'Airport Express', color: '#00b7a7', x: 270, y: 460},
            'Tsing Yi': {names: ['Tsing Yi', 'tsing yi'], line: 'Airport Express', color: '#00b7a7', x: 200, y: 500},
            'Airport': {names: ['Airport', 'airport', 'Airport Terminal', 'airport terminal'], line: 'Airport Express', color: '#00b7a7', x: 80, y: 550},
            'AsiaWorld-Expo': {names: ['AsiaWorld-Expo', 'asiaworld-expo', 'AsiaWorld Expo', 'asiaworld expo', 'AWE', 'awe'], line: 'Airport Express', color: '#00b7a7', x: 50, y: 570},
            
            // Add more stations in batches
            'Whampoa': {names: ['Whampoa', 'whampoa'], line: 'Kwun Tong', color: '#00a651', x: 300, y: 370},
            'Ho Man Tin': {names: ['Ho Man Tin', 'ho man tin'], line: 'Kwun Tong', color: '#00a651', x: 330, y: 340},
            'Shek Kip Mei': {names: ['Shek Kip Mei', 'shek kip mei'], line: 'Kwun Tong', color: '#00a651', x: 330, y: 285},
            'Kowloon Tong': {names: ['Kowloon Tong', 'kowloon tong'], line: 'Kwun Tong', color: '#00a651', x: 380, y: 280},
            'Lok Fu': {names: ['Lok Fu', 'lok fu'], line: 'Kwun Tong', color: '#00a651', x: 420, y: 275},
            'Wong Tai Sin': {names: ['Wong Tai Sin', 'wong tai sin'], line: 'Kwun Tong', color: '#00a651', x: 460, y: 270},
            'Diamond Hill': {names: ['Diamond Hill', 'diamond hill'], line: 'Kwun Tong', color: '#00a651', x: 500, y: 260},
            'Choi Hung': {names: ['Choi Hung', 'choi hung'], line: 'Kwun Tong', color: '#00a651', x: 540, y: 240},
            'Kowloon Bay': {names: ['Kowloon Bay', 'kowloon bay'], line: 'Kwun Tong', color: '#00a651', x: 580, y: 220},
            'Ngau Tau Kok': {names: ['Ngau Tau Kok', 'ngau tau kok'], line: 'Kwun Tong', color: '#00a651', x: 620, y: 190},
            'Kwun Tong': {names: ['Kwun Tong', 'kwun tong'], line: 'Kwun Tong', color: '#00a651', x: 660, y: 170},
            'Lam Tin': {names: ['Lam Tin', 'lam tin'], line: 'Kwun Tong', color: '#00a651', x: 700, y: 160},
            'Yau Tong': {names: ['Yau Tong', 'yau tong'], line: 'Kwun Tong', color: '#00a651', x: 740, y: 155},
            'Tiu Keng Leng': {names: ['Tiu Keng Leng', 'tiu keng leng'], line: 'Kwun Tong', color: '#00a651', x: 780, y: 150},
            
            // Add remaining stations following same pattern...
            'Tseung Kwan O': {names: ['Tseung Kwan O', 'tseung kwan o', 'TKO', 'tko'], line: 'Tseung Kwan O', color: '#8e4ec6', x: 850, y: 120},
            'Hang Hau': {names: ['Hang Hau', 'hang hau'], line: 'Tseung Kwan O', color: '#8e4ec6', x: 870, y: 110},
            'Po Lam': {names: ['Po Lam', 'po lam'], line: 'Tseung Kwan O', color: '#8e4ec6', x: 890, y: 105},
            'LOHAS Park': {names: ['LOHAS Park', 'lohas park', 'LOHAS', 'lohas'], line: 'Tseung Kwan O', color: '#8e4ec6', x: 920, y: 100},

            // Continue with all remaining stations for simplicity...
            'Olympic': {names: ['Olympic', 'olympic'], line: 'Tung Chung', color: '#ff9500', x: 290, y: 480},
            'Nam Cheong': {names: ['Nam Cheong', 'nam cheong'], line: 'Tung Chung', color: '#ff9500', x: 240, y: 520},
            'Sunny Bay': {names: ['Sunny Bay', 'sunny bay'], line: 'Tung Chung', color: '#ff9500', x: 150, y: 540},
            'Tung Chung': {names: ['Tung Chung', 'tung chung'], line: 'Tung Chung', color: '#ff9500', x: 100, y: 560},
            'Disneyland Resort': {names: ['Disneyland Resort', 'disneyland resort', 'Disneyland', 'disneyland'], line: 'Disneyland Resort', color: '#ff69b4', x: 130, y: 580},

            // Add remaining 50+ stations with basic positioning...
            'Exhibition Centre': {names: ['Exhibition Centre', 'exhibition centre'], line: 'East Rail', color: '#5ac4e8', x: 350, y: 410},
            'Hung Hom': {names: ['Hung Hom', 'hung hom'], line: 'East Rail', color: '#5ac4e8', x: 380, y: 380},
            'Mong Kok East': {names: ['Mong Kok East', 'mong kok east', 'MKE', 'mke'], line: 'East Rail', color: '#5ac4e8', x: 390, y: 330},
            'Tai Wai': {names: ['Tai Wai', 'tai wai'], line: 'East Rail', color: '#5ac4e8', x: 430, y: 280},
            'Sha Tin': {names: ['Sha Tin', 'sha tin', 'shatin'], line: 'East Rail', color: '#5ac4e8', x: 470, y: 240},
            'Fo Tan': {names: ['Fo Tan', 'fo tan'], line: 'East Rail', color: '#5ac4e8', x: 480, y: 200},
            'Racecourse': {names: ['Racecourse', 'racecourse', 'Race Course', 'race course'], line: 'East Rail', color: '#5ac4e8', x: 485, y: 180},
            'University': {names: ['University', 'university', 'CUHK', 'cuhk'], line: 'East Rail', color: '#5ac4e8', x: 490, y: 160},
            'Tai Po Market': {names: ['Tai Po Market', 'tai po market', 'Tai Po', 'tai po'], line: 'East Rail', color: '#5ac4e8', x: 495, y: 140},
            'Tai Wo': {names: ['Tai Wo', 'tai wo'], line: 'East Rail', color: '#5ac4e8', x: 510, y: 100},
            'Fanling': {names: ['Fanling', 'fanling'], line: 'East Rail', color: '#5ac4e8', x: 530, y: 70},
            'Sheung Shui': {names: ['Sheung Shui', 'sheung shui'], line: 'East Rail', color: '#5ac4e8', x: 540, y: 60},
            'Lo Wu': {names: ['Lo Wu', 'lo wu', 'LoWu', 'lowu'], line: 'East Rail', color: '#5ac4e8', x: 550, y: 50},
            'Lok Ma Chau': {names: ['Lok Ma Chau', 'lok ma chau'], line: 'East Rail', color: '#5ac4e8', x: 520, y: 40},

            // Tuen Ma Line stations
            'Tuen Mun': {names: ['Tuen Mun', 'tuen mun'], line: 'Tuen Ma', color: '#8d5524', x: 50, y: 100},
            'Siu Hong': {names: ['Siu Hong', 'siu hong'], line: 'Tuen Ma', color: '#8d5524', x: 70, y: 110},
            'Tin Shui Wai': {names: ['Tin Shui Wai', 'tin shui wai', 'TSW', 'tsw'], line: 'Tuen Ma', color: '#8d5524', x: 90, y: 120},
            'Long Ping': {names: ['Long Ping', 'long ping'], line: 'Tuen Ma', color: '#8d5524', x: 110, y: 135},
            'Yuen Long': {names: ['Yuen Long', 'yuen long', 'YL', 'yl'], line: 'Tuen Ma', color: '#8d5524', x: 130, y: 150},
            'Kam Sheung Road': {names: ['Kam Sheung Road', 'kam sheung road'], line: 'Tuen Ma', color: '#8d5524', x: 145, y: 160},
            'Tsuen Wan West': {names: ['Tsuen Wan West', 'tsuen wan west', 'TWW', 'tww'], line: 'Tuen Ma', color: '#8d5524', x: 160, y: 170},
            'Austin': {names: ['Austin', 'austin'], line: 'Tuen Ma', color: '#8d5524', x: 290, y: 380},
            'East Tsim Sha Tsui': {names: ['East Tsim Sha Tsui', 'east tsim sha tsui', 'East TST', 'east tst'], line: 'Tuen Ma', color: '#8d5524', x: 340, y: 360},
            'To Kwa Wan': {names: ['To Kwa Wan', 'to kwa wan', 'TKW', 'tkw'], line: 'Tuen Ma', color: '#8d5524', x: 390, y: 340},
            'Sung Wong Toi': {names: ['Sung Wong Toi', 'sung wong toi', 'SWT', 'swt'], line: 'Tuen Ma', color: '#8d5524', x: 420, y: 320},
            'Kai Tak': {names: ['Kai Tak', 'kai tak'], line: 'Tuen Ma', color: '#8d5524', x: 460, y: 280},
            'Hin Keng': {names: ['Hin Keng', 'hin keng'], line: 'Tuen Ma', color: '#8d5524', x: 500, y: 240},
            'Che Kung Temple': {names: ['Che Kung Temple', 'che kung temple'], line: 'Tuen Ma', color: '#8d5524', x: 540, y: 200},
            'Sha Tin Wai': {names: ['Sha Tin Wai', 'sha tin wai'], line: 'Tuen Ma', color: '#8d5524', x: 560, y: 190},
            'City One': {names: ['City One', 'city one'], line: 'Tuen Ma', color: '#8d5524', x: 600, y: 170},
            'Shek Mun': {names: ['Shek Mun', 'shek mun'], line: 'Tuen Ma', color: '#8d5524', x: 630, y: 160},
            'Tai Shui Hang': {names: ['Tai Shui Hang', 'tai shui hang'], line: 'Tuen Ma', color: '#8d5524', x: 660, y: 145},
            'Heng On': {names: ['Heng On', 'heng on'], line: 'Tuen Ma', color: '#8d5524', x: 690, y: 130},
            'Ma On Shan': {names: ['Ma On Shan', 'ma on shan', 'MOS', 'mos'], line: 'Tuen Ma', color: '#8d5524', x: 720, y: 125},
            'Wu Kai Sha': {names: ['Wu Kai Sha', 'wu kai sha', 'WKS', 'wks'], line: 'Tuen Ma', color: '#8d5524', x: 750, y: 120},

            // South Island Line
            'Ocean Park': {names: ['Ocean Park', 'ocean park'], line: 'South Island', color: '#ffda00', x: 390, y: 450},
            'Wong Chuk Hang': {names: ['Wong Chuk Hang', 'wong chuk hang', 'WCH', 'wch'], line: 'South Island', color: '#ffda00', x: 400, y: 480},
            'Lei Tung': {names: ['Lei Tung', 'lei tung'], line: 'South Island', color: '#ffda00', x: 410, y: 510},
            'South Horizons': {names: ['South Horizons', 'south horizons'], line: 'South Island', color: '#ffda00', x: 420, y: 540}
        };

        // Create reverse lookup
        this.inputToStation = {};
        Object.keys(this.stationData).forEach(station => {
            this.stationData[station].names.forEach(variant => {
                this.inputToStation[variant.toLowerCase().trim()] = station;
            });
        });

        // Line path definitions
        this.lineData = {
            'Island': {color: '#0073e6', path: 'M100 400 L900 440'},
            'Tsuen Wan': {color: '#ff0000', path: 'M320 400 L320 300 L280 250 L100 150'},
            'Kwun Tong': {color: '#00a651', path: 'M300 370 L380 280 L780 150'},
            'Airport Express': {color: '#00b7a7', path: 'M320 430 L200 500 L50 570'},
            'Tseung Kwan O': {color: '#8e4ec6', path: 'M740 155 L920 100'},
            'Tung Chung': {color: '#ff9500', path: 'M320 430 L240 520 L100 560'},
            'East Rail': {color: '#5ac4e8', path: 'M370 400 L430 280 L550 50'},
            'Tuen Ma': {color: '#8d5524', path: 'M50 100 L160 170 L290 380 L750 120'},
            'South Island': {color: '#ffda00', path: 'M370 400 L420 540'},
            'Disneyland Resort': {color: '#ff69b4', path: 'M150 540 L130 580'}
        };

        this.init();
    }

    init() {
        this.createMap();
        this.setupEventListeners();
        this.updateDisplay();
        this.stationInput.focus();
        
        console.log('🚇 Hong Kong MTR Memory Game loaded!');
        console.log('🗺️ Interactive map created with ALL 98 stations hidden!');
        console.log('💡 Try: Central, TST, Airport, HKU');
    }

    createMap() {
        const svg = document.getElementById('mtrMap');
        
        // Create line paths
        Object.entries(this.lineData).forEach(([lineName, lineInfo]) => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', lineInfo.path);
            path.setAttribute('stroke', lineInfo.color);
            path.setAttribute('stroke-width', '4');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('opacity', '0.7');
            svg.appendChild(path);
        });

        // Create ALL station markers
        Object.entries(this.stationData).forEach(([stationName, stationInfo]) => {
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add('station-marker');
            group.setAttribute('data-station', stationName);

            // Station circle (HIDDEN initially)
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', stationInfo.x);
            circle.setAttribute('cy', stationInfo.y);
            circle.setAttribute('r', '5');
            circle.setAttribute('fill', stationInfo.color);
            circle.style.opacity = '0'; // HIDDEN

            // Station label (HIDDEN initially)
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', stationInfo.x);
            text.setAttribute('y', stationInfo.y - 10);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', '10');
            text.style.opacity = '0'; // HIDDEN
            text.textContent = stationName;

            group.appendChild(circle);
            group.appendChild(text);
            svg.appendChild(group);
        });
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
        // Find station marker and make visible
        const stationMarker = document.querySelector(`[data-station="${stationName}"]`);
        
        if (stationMarker) {
            const circle = stationMarker.querySelector('circle');
            const text = stationMarker.querySelector('text');
            
            if (circle) {
                circle.style.opacity = '1';
                circle.setAttribute('fill', '#2ecc71'); // Green when found
                circle.setAttribute('r', '6'); // Slightly larger
            }
            
            if (text) {
                text.style.opacity = '1';
                text.style.fontWeight = 'bold';
            }
            
            stationMarker.classList.add('found');
        }
    }

    updateDisplay() {
        const foundCount = this.foundStations.size;
        const percentage = ((foundCount / this.totalStations) * 100).toFixed(1);
        
        this.percentageDisplay.textContent = `${percentage}%`;
        this.stationCountDisplay.textContent = `${foundCount}/${this.totalStations} stations found`;
        
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
        document.querySelectorAll('.station-marker').forEach(marker => {
            const circle = marker.querySelector('circle');
            const text = marker.querySelector('text');
            
            if (circle) {
                circle.style.opacity = '0';
                const stationName = marker.getAttribute('data-station');
                const stationInfo = this.stationData[stationName];
                circle.setAttribute('fill', stationInfo.color); // Reset to original color
                circle.setAttribute('r', '5'); // Reset size
            }
            if (text) {
                text.style.opacity = '0';
                text.style.fontWeight = 'normal';
            }
            
            marker.classList.remove('found');
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

// Helper functions for testing
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