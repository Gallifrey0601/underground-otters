// Clean Hong Kong MTR Memory Game - Like London Metro Memory
class MTRMemoryGame {
    constructor() {
        this.totalStations = 98;
        this.foundStations = new Set();
        this.stationInput = document.getElementById('stationInput');
        this.resetBtn = document.getElementById('resetBtn');
        this.percentageDisplay = document.querySelector('.percentage');
        this.stationCountDisplay = document.querySelector('.station-count');
        
        // Complete MTR Station Data with Alternative Names
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

        // Create reverse lookup for finding station names from input
        this.inputToStation = {};
        Object.keys(this.stationData).forEach(station => {
            this.stationData[station].forEach(variant => {
                this.inputToStation[variant.toLowerCase().trim()] = station;
            });
        });

        // Line data for completion tracking
        this.lineData = {
            'Island Line': ['Kennedy Town', 'HKU', 'Sai Ying Pun', 'Sheung Wan', 'Central', 'Admiralty', 'Wan Chai', 'Causeway Bay', 'Tin Hau', 'Fortress Hill', 'North Point', 'Quarry Bay', 'Tai Koo', 'Sai Wan Ho', 'Shau Kei Wan', 'Heng Fa Chuen', 'Chai Wan'],
            'Kwun Tong Line': ['Whampoa', 'Ho Man Tin', 'Yau Ma Tei', 'Mong Kok', 'Prince Edward', 'Shek Kip Mei', 'Kowloon Tong', 'Lok Fu', 'Wong Tai Sin', 'Diamond Hill', 'Choi Hung', 'Kowloon Bay', 'Ngau Tau Kok', 'Kwun Tong', 'Lam Tin', 'Yau Tong', 'Tiu Keng Leng'],
            'Tsuen Wan Line': ['Central', 'Admiralty', 'Tsim Sha Tsui', 'Jordan', 'Yau Ma Tei', 'Mong Kok', 'Prince Edward', 'Sham Shui Po', 'Cheung Sha Wan', 'Lai Chi Kok', 'Mei Foo', 'Lai King', 'Kwai Fong', 'Kwai Hing', 'Tai Wo Hau', 'Tsuen Wan'],
            'Tseung Kwan O Line': ['North Point', 'Quarry Bay', 'Yau Tong', 'Tiu Keng Leng', 'Tseung Kwan O', 'Hang Hau', 'Po Lam', 'LOHAS Park'],
            'Tung Chung Line': ['Hong Kong', 'Kowloon', 'Olympic', 'Nam Cheong', 'Lai King', 'Tsing Yi', 'Sunny Bay', 'Tung Chung'],
            'Airport Express': ['Hong Kong', 'Kowloon', 'Tsing Yi', 'Airport', 'AsiaWorld-Expo'],
            'East Rail Line': ['Admiralty', 'Exhibition Centre', 'Hung Hom', 'Mong Kok East', 'Kowloon Tong', 'Tai Wai', 'Sha Tin', 'Fo Tan', 'Racecourse', 'University', 'Tai Po Market', 'Tai Wo', 'Fanling', 'Sheung Shui', 'Lo Wu', 'Lok Ma Chau'],
            'Tuen Ma Line': ['Tuen Mun', 'Siu Hong', 'Tin Shui Wai', 'Long Ping', 'Yuen Long', 'Kam Sheung Road', 'Tsuen Wan West', 'Mei Foo', 'Nam Cheong', 'Austin', 'East Tsim Sha Tsui', 'Hung Hom', 'Ho Man Tin', 'To Kwa Wan', 'Sung Wong Toi', 'Kai Tak', 'Diamond Hill', 'Hin Keng', 'Tai Wai', 'Che Kung Temple', 'Sha Tin Wai', 'City One', 'Shek Mun', 'Tai Shui Hang', 'Heng On', 'Ma On Shan', 'Wu Kai Sha'],
            'South Island Line': ['Admiralty', 'Ocean Park', 'Wong Chuk Hang', 'Lei Tung', 'South Horizons'],
            'Disneyland Resort Line': ['Sunny Bay', 'Disneyland Resort']
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateDisplay();
        this.generateStationLists();
        this.stationInput.focus();
        
        console.log('🚇 Hong Kong MTR Memory Game loaded!');
        console.log('🗺️ Clean map ready - stations are HIDDEN until you discover them!');
        console.log('💡 Try: Central, TST, Airport, HKU, Tseung Kwan O');
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

        // Keyboard shortcuts
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
            this.stationInput.focus();
        }
    }

    foundStation(stationName) {
        this.foundStations.add(stationName);
        
        // Show station on map - KEY FUNCTIONALITY
        this.showStationOnMap(stationName);
        
        // Update displays
        this.updateDisplay();
        this.updateStationLists(stationName);
        
        // Check line completion
        this.checkLineCompletion(stationName);
        
        // Play sound
        this.playFoundSound();
        
        // Check game completion
        if (this.foundStations.size === this.totalStations) {
            this.celebrateCompletion();
        }
    }

    showStationOnMap(stationName) {
        // Find all station markers with this name and MAKE THEM VISIBLE
        const stationMarkers = document.querySelectorAll(`[data-station="${stationName}"]`);
        
        stationMarkers.forEach(marker => {
            if (marker.classList.contains('station-marker')) {
                // Add 'found' class to make station visible
                marker.classList.add('found');
                
                // Station circle becomes visible and green
                const circle = marker.querySelector('circle');
                if (circle) {
                    // Trigger entrance animation
                    setTimeout(() => {
                        circle.style.transform = 'scale(1.2)';
                        setTimeout(() => {
                            circle.style.transform = 'scale(1)';
                        }, 200);
                    }, 100);
                }
            }
        });
        
        console.log(`✅ ${stationName} found and revealed on map!`);
    }

    checkLineCompletion(stationName) {
        // Find which lines this station belongs to
        Object.keys(this.lineData).forEach(lineName => {
            if (this.lineData[lineName].includes(stationName)) {
                const lineStations = this.lineData[lineName];
                const foundInLine = lineStations.filter(station => this.foundStations.has(station));
                
                if (foundInLine.length === lineStations.length) {
                    this.celebrateLineCompletion(lineName);
                }
            }
        });
    }

    celebrateLineCompletion(lineName) {
        // Find the line group and add completion effect
        const lineGroup = document.querySelector(`[data-line="${lineName}"]`);
        if (lineGroup) {
            lineGroup.classList.add('completed');
        }
        
        // Show notification
        this.showNotification(`🎉 ${lineName} Complete!`);
        
        console.log(`🎊 Line completed: ${lineName}`);
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'line-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    updateDisplay() {
        const foundCount = this.foundStations.size;
        const percentage = ((foundCount / this.totalStations) * 100).toFixed(1);
        
        this.percentageDisplay.textContent = `${percentage}%`;
        this.stationCountDisplay.textContent = `${foundCount}/${this.totalStations} stations found`;
        
        // Update page title
        document.title = `${percentage}% - Hong Kong MTR Memory Game`;
    }

    generateStationLists() {
        const stationLists = document.getElementById('stationLists');
        if (!stationLists) return;
        
        const linesGrid = stationLists.querySelector('.lines-grid');
        if (!linesGrid) return;
        
        const lineColors = {
            'Island Line': '#0073e6',
            'Kwun Tong Line': '#00a651',
            'Tsuen Wan Line': '#ff0000',
            'Tseung Kwan O Line': '#8e4ec6',
            'Tung Chung Line': '#ff9500',
            'Airport Express': '#00b7a7',
            'East Rail Line': '#5ac4e8',
            'Tuen Ma Line': '#8d5524',
            'South Island Line': '#ffda00',
            'Disneyland Resort Line': '#ff69b4'
        };
        
        Object.keys(this.lineData).forEach(lineName => {
            const lineSection = document.createElement('div');
            lineSection.className = 'line-section';
            lineSection.innerHTML = `
                <div class="line-header">
                    <div class="line-color" style="background-color: ${lineColors[lineName]};"></div>
                    <span class="line-name">${lineName}</span>
                    <span class="line-progress">0/${this.lineData[lineName].length}</span>
                </div>
                <div class="stations-grid">
                    ${this.lineData[lineName].map(station => 
                        `<div class="station-item" data-station="${station}">${station}</div>`
                    ).join('')}
                </div>
            `;
            linesGrid.appendChild(lineSection);
        });
    }

    updateStationLists(stationName) {
        const stationItems = document.querySelectorAll(`[data-station="${stationName}"].station-item`);
        stationItems.forEach(item => {
            item.classList.add('found');
        });
        
        // Update line progress counters
        Object.keys(this.lineData).forEach(lineName => {
            if (this.lineData[lineName].includes(stationName)) {
                const lineHeaders = document.querySelectorAll('.line-header');
                lineHeaders.forEach(header => {
                    const nameElement = header.querySelector('.line-name');
                    if (nameElement && nameElement.textContent === lineName) {
                        const foundInLine = this.lineData[lineName].filter(station => this.foundStations.has(station)).length;
                        const progressElement = header.querySelector('.line-progress');
                        if (progressElement) {
                            progressElement.textContent = `${foundInLine}/${this.lineData[lineName].length}`;
                        }
                    }
                });
            }
        });
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
                    You're a Hong Kong transit expert! 🚇
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
        
        // Hide all stations on map again
        document.querySelectorAll('.station-marker.found').forEach(marker => {
            marker.classList.remove('found');
        });
        
        // Reset station lists
        document.querySelectorAll('.station-item.found').forEach(item => {
            item.classList.remove('found');
        });
        
        // Reset line completion
        document.querySelectorAll('.line-group.completed').forEach(group => {
            group.classList.remove('completed');
        });
        
        // Reset line progress
        document.querySelectorAll('.line-progress').forEach(progress => {
            const lineLength = progress.textContent.split('/')[1];
            progress.textContent = `0/${lineLength}`;
        });
        
        this.updateDisplay();
        this.stationInput.value = '';
        this.stationInput.focus();
        
        document.title = 'Hong Kong MTR Memory Game';
        
        console.log('🔄 Game reset - all stations hidden again!');
    }
}

// Toggle details function
function toggleDetails() {
    const stationLists = document.getElementById('stationLists');
    const toggleBtn = document.querySelector('.toggle-details');
    
    if (stationLists.classList.contains('hidden')) {
        stationLists.classList.remove('hidden');
        toggleBtn.textContent = '📋 Hide Station Lists';
    } else {
        stationLists.classList.add('hidden');
        toggleBtn.textContent = '📋 Show Station Lists';
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new MTRMemoryGame();
    window.mtrGame = game; // For debugging
});

// Debug helpers
window.mtrHelpers = {
    hint: () => {
        const game = window.mtrGame;
        const unfound = Object.keys(game.stationData).filter(s => !game.foundStations.has(s));
        const random = unfound[Math.floor(Math.random() * unfound.length)];
        console.log(`💡 Try: ${random}`);
        return random;
    },
    
    complete: () => {
        if (confirm('Auto-complete all stations?')) {
            const game = window.mtrGame;
            Object.keys(game.stationData).forEach(station => {
                if (!game.foundStations.has(station)) {
                    game.foundStation(station);
                }
            });
        }
    },
    
    stats: () => {
        const game = window.mtrGame;
        console.log(`📊 Found: ${game.foundStations.size}/${game.totalStations}`);
        console.log('📍 Found stations:', Array.from(game.foundStations).sort());
    },
    
    test: () => {
        console.log('🧪 Testing station discovery...');
        const game = window.mtrGame;
        ['Central', 'TST', 'Airport'].forEach(station => {
            setTimeout(() => {
                game.foundStation(game.inputToStation[station.toLowerCase()]);
            }, 500);
        });
    }
};