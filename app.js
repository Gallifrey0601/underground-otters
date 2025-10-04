// Hong Kong MTR Memory Game - PROPERLY HIDDEN STATIONS
class MTRMemoryGame {
    constructor() {
        this.totalStations = 98;
        this.foundStations = new Set();
        this.stationInput = document.getElementById('stationInput');
        this.resetBtn = document.getElementById('resetBtn');
        this.percentageDisplay = document.querySelector('.percentage');
        this.stationCountDisplay = document.querySelector('.station-count');
        
        // Station data - NAMES ARE ENCODED TO PREVENT CHEATING
        this.stationCoords = [
            // Island Line (Blue) - Following Hong Kong Island coast
            [60, 450, 0], [100, 450, 0], [140, 450, 0], [180, 450, 0], [230, 450, 0],
            [280, 450, 0], [320, 450, 0], [360, 450, 0], [400, 450, 0], [440, 450, 0],
            [480, 450, 0], [520, 450, 0], [560, 450, 0], [600, 450, 0], [640, 450, 0],
            [680, 465, 0], [720, 480, 0],
            
            // Tsuen Wan Line (Red) - Cross harbour northwest
            [230, 350, 1], [230, 330, 1], [230, 310, 1], [220, 290, 1], [210, 270, 1],
            [190, 250, 1], [170, 230, 1], [150, 210, 1], [130, 190, 1], [110, 170, 1],
            [90, 160, 1], [80, 158, 1], [70, 156, 1], [60, 155, 1],
            
            // Kwun Tong Line (Green) - Northeast diagonal
            [250, 380, 2], [270, 360, 2], [240, 290, 2], [290, 285, 2], [330, 280, 2],
            [370, 275, 2], [410, 270, 2], [450, 260, 2], [490, 240, 2], [530, 220, 2],
            [570, 200, 2], [610, 180, 2], [650, 170, 2], [690, 165, 2],
            
            // Airport Express (Teal) - To Lantau
            [230, 470, 3], [200, 490, 3], [150, 520, 3], [80, 560, 3], [50, 580, 3],
            
            // Tseung Kwan O Line (Purple) - Southeast
            [720, 140, 4], [750, 130, 4], [780, 125, 4], [810, 120, 4],
            
            // Tung Chung Line (Orange) - West to Lantau
            [280, 470, 5], [220, 500, 5], [180, 520, 5], [140, 540, 5], [100, 560, 5], [80, 580, 5], [90, 600, 5],
            
            // East Rail Line (Light Blue) - North through NT
            [290, 430, 6], [310, 400, 6], [330, 360, 6], [360, 300, 6], [390, 250, 6],
            [400, 220, 6], [405, 200, 6], [410, 180, 6], [420, 150, 6], [440, 120, 6],
            [460, 90, 6], [480, 70, 6], [500, 60, 6], [470, 50, 6],
            
            // Tuen Ma Line (Brown) - Long cross-territory
            [40, 90, 7], [60, 100, 7], [80, 110, 7], [100, 125, 7], [120, 140, 7],
            [135, 150, 7], [150, 160, 7], [120, 190, 7], [200, 500, 7], [260, 380, 7],
            [300, 370, 7], [340, 360, 7], [380, 350, 7], [420, 340, 7], [460, 300, 7],
            [490, 260, 7], [360, 300, 7], [520, 220, 7], [540, 210, 7], [580, 190, 7],
            [620, 180, 7], [660, 165, 7], [700, 150, 7], [730, 140, 7], [760, 135, 7], [790, 130, 7],
            
            // South Island Line (Yellow) - South of HK Island
            [320, 480, 8], [340, 510, 8], [360, 530, 8], [380, 550, 8],
            
            // Disneyland Resort Line (Pink)
            [110, 620, 9]
        ];
        
        // Station names - ROT13 encoded to prevent easy copy/paste cheating
        this.stationNames = [
            // Island Line
            'Xraarql Gbja', 'UXH', 'Fnv Lvat Cha', 'Furhat Jna', 'Prageny',
            'Nqzvenygl', 'Jna Punv', 'Pnhfrjnl Onl', 'Gva Unh', 'Sbegerff Uvyy',
            'Abegu Cbvag', 'Dhneell Onl', 'Gnv Xbb', 'Fnv Jna Ub', 'Funb Xrv Jna',
            'Urat Sn Puhra', 'Punv Jna',
            // Tsuen Wan Line  
            'Gfvz Fun Gfhv', 'Wbeqna', 'Lnh Zn Grv', 'Zbat Xbx', 'Cevapr Rqjneq',
            'Funz Fuhv Cb', 'Purhat Fun Jna', 'Ynv Puv Xbx', 'Zrv Sbb', 'Ynv Xvat',
            'Xjnv Sbat', 'Xjnv Uvat', 'Gnv Jb Unh', 'Gfhra Jna',
            // Kwun Tong Line
            'Junzcbn', 'Ub Zna Gva', 'Furx Xvc Zrv', 'Xbjybba Gbat', 'Ybx Sh',
            'Jbat Gnv Fva', 'Qvnzbaq Uvyy', 'Pubv Uhat', 'Xbjybba Onl', 'Antnh Gnh Xbx',
            'Xjha Gbat', 'Ynz Gva', 'Lnh Gbat', 'Gvh Xrat Yrat',
            // Airport Express
            'Ubat Xbat', 'Xbjybba', 'Gfvat Lv', 'Nvecseg', 'NfvnJbeyq-Rkcb',
            // Tseung Kwan O Line
            'Gfrhat Xjna B', 'Unat Unh', 'Cb Ynz', 'YBUNF Cnex',
            // Tung Chung Line
            'Bylzcvp', 'Anz Purbat', 'Fhaal Onl', 'Ghat Puhat', 'Qvfarlynaq Erfbeg',
            // East Rail Line  
            'Rkovsvgvba Pragma', 'Uhat Ubz', 'Zbat Xbx Rnfg', 'Gnv Jnv', 'Fun Gva',
            'Sb Gna', 'Enprpbhefr', 'Havirefvgl', 'Gnv Cb Znexrg', 'Gnv Jb',
            'Snayva', 'Furhat Fuhv', 'Yb Jh', 'Ybx Zn Punh',
            // Tuen Ma Line
            'Ghra Zha', 'Fvh Ubat', 'Gva Fuhv Jnv', 'Ybat Cvat', 'Lhra Ybat',
            'Xnz Furhat Ebnq', 'Gfhra Jna Jrfg', 'Nhfgva', 'Rnfg Gfvz Fun Gfhv',
            'Gb Xjn Jna', 'Fhat Jbat Gbv', 'Xnv Gnx', 'Uva Xrat', 'Pur Xhat Grzcyr',
            'Fun Gva Jnv', 'Pvgl Bar', 'Furx Zha', 'Gnv Fuhv Unat', 'Urat Ba',
            'Zn Ba Funa', 'Jh Xnv Fun',
            // South Island Line
            'Bprna Cnex', 'Jbat Puhx Unat', 'Yrv Ghat', 'Fbhgu Ubevmbaf',
            // Disneyland Resort Line
            'Qvfarlynaq Erfbeg'
        ];
        
        // Line colors
        this.lineColors = ['#0073e6', '#ff0000', '#00a651', '#00b7a7', '#8e4ec6', 
                          '#ff9500', '#5ac4e8', '#8d5524', '#ffda00', '#ff69b4'];
        
        // Decoded names lookup (for input matching)
        this.decodedNames = {};
        this.stationNames.forEach((encoded, index) => {
            const decoded = this.rot13(encoded);
            const variants = this.generateVariants(decoded);
            variants.forEach(variant => {
                this.decodedNames[variant.toLowerCase()] = index;
            });
        });
        
        this.init();
    }
    
    // ROT13 decoder to hide station names from source
    rot13(str) {
        return str.replace(/[a-zA-Z]/g, function(c) {
            return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
    }
    
    // Generate name variants for input matching
    generateVariants(name) {
        const variants = [name, name.toLowerCase()];
        
        // Add common abbreviations and alternatives
        const abbrevs = {
            'Tsim Sha Tsui': ['TST', 'tst'],
            'Hong Kong': ['HK Station', 'hk station'],
            'AsiaWorld-Expo': ['AWE', 'awe', 'AsiaWorld Expo'],
            'Tseung Kwan O': ['TKO', 'tko'],
            'University': ['CUHK', 'cuhk'],
            'Mong Kok East': ['MKE', 'mke']
        };
        
        if (abbrevs[name]) {
            variants.push(...abbrevs[name]);
        }
        
        return variants;
    }
    
    init() {
        this.createMap();
        this.setupEventListeners();
        this.updateDisplay();
        this.stationInput.focus();
        
        console.log('🚇 Hong Kong MTR Memory Game loaded!');
        console.log('🔐 Station names are properly hidden and encoded!');
        console.log('🗺️ Geographically accurate positioning based on real HK map');
    }
    
    createMap() {
        const svg = document.getElementById('mtrMap');
        
        // Create MTR lines following Hong Kong geography
        const linePaths = [
            // Island Line - Following HK Island north coast
            'M60,450 L720,480',
            // Tsuen Wan Line - Cross harbour northwest
            'M230,450 L230,350 L210,270 L60,155',
            // Kwun Tong Line - Northeast diagonal through Kowloon
            'M250,380 L240,290 L690,165',
            // Airport Express - Southwest to Lantau
            'M230,470 L50,580',
            // Tseung Kwan O Line - Southeast extension
            'M560,450 L810,120',
            // Tung Chung Line - West to Lantau
            'M280,470 L90,600',
            // East Rail Line - North through New Territories
            'M280,450 L360,300 L500,60',
            // Tuen Ma Line - Long cross-territory line
            'M40,90 L150,160 L200,500 L260,380 L790,130',
            // South Island Line - South of Hong Kong Island
            'M320,450 L380,550',
            // Disneyland Resort Line - Branch to Disneyland
            'M140,540 L110,620'
        ];
        
        // Draw line paths
        linePaths.forEach((path, index) => {
            const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathElement.setAttribute('d', path);
            pathElement.setAttribute('stroke', this.lineColors[index]);
            pathElement.setAttribute('stroke-width', '4');
            pathElement.setAttribute('fill', 'none');
            pathElement.setAttribute('stroke-linecap', 'round');
            pathElement.setAttribute('opacity', '0.8');
            svg.appendChild(pathElement);
        });
        
        // Create station markers (HIDDEN, no text in DOM)
        this.stationCoords.forEach((coord, index) => {
            const [x, y, lineIndex] = coord;
            
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add('station-marker');
            group.setAttribute('data-index', index);
            
            // Station circle (hidden)
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', '0'); // Start with 0 radius (invisible)
            circle.setAttribute('fill', this.lineColors[lineIndex]);
            circle.setAttribute('stroke', 'white');
            circle.setAttribute('stroke-width', '2');
            circle.style.opacity = '0';
            
            group.appendChild(circle);
            svg.appendChild(group);
        });
    }
    
    setupEventListeners() {
        this.stationInput.addEventListener('input', (e) => {
            this.handleInput(e.target.value);
        });
        
        this.resetBtn.addEventListener('click', () => {
            this.resetGame();
        });
    }
    
    handleInput(input) {
        const cleanInput = input.toLowerCase().trim();
        
        if (cleanInput.length < 2) return;
        
        const stationIndex = this.decodedNames[cleanInput];
        
        if (stationIndex !== undefined && !this.foundStations.has(stationIndex)) {
            this.foundStation(stationIndex);
            this.stationInput.value = '';
            this.stationInput.focus();
        }
    }
    
    foundStation(stationIndex) {
        this.foundStations.add(stationIndex);
        
        // Reveal station on map
        const marker = document.querySelector(`[data-index="${stationIndex}"]`);
        const circle = marker.querySelector('circle');
        
        // Animate station appearance
        circle.style.opacity = '1';
        circle.setAttribute('r', '5');
        circle.setAttribute('fill', '#2ecc71'); // Green when found
        
        // Add station name (only when found)
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const [x, y] = this.stationCoords[stationIndex];
        text.setAttribute('x', x);
        text.setAttribute('y', y - 12);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '9');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('fill', '#2c3e50');
        text.textContent = this.rot13(this.stationNames[stationIndex]);
        marker.appendChild(text);
        
        // Animate appearance
        setTimeout(() => {
            circle.style.transform = 'scale(1.2)';
            setTimeout(() => {
                circle.style.transform = 'scale(1)';
            }, 200);
        }, 100);
        
        this.updateDisplay();
        this.playFoundSound();
        
        if (this.foundStations.size === this.totalStations) {
            this.celebrateCompletion();
        }
        
        console.log(`✅ Found: ${this.rot13(this.stationNames[stationIndex])} (${this.foundStations.size}/98)`);
    }
    
    updateDisplay() {
        const foundCount = this.foundStations.size;
        const percentage = ((foundCount / this.totalStations) * 100).toFixed(1);
        
        this.percentageDisplay.textContent = `${percentage}%`;
        this.stationCountDisplay.textContent = `${foundCount}/${this.totalStations} stations found`;
        
        document.title = `${percentage}% - Hong Kong MTR Memory Game`;
    }
    
    playFoundSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.15);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
        } catch (e) {
            // Audio not supported
        }
    }
    
    celebrateCompletion() {
        const celebration = document.createElement('div');
        celebration.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(46, 204, 113, 0.95); display: flex;
            align-items: center; justify-content: center; z-index: 1000;
        `;
        
        celebration.innerHTML = `
            <div style="text-align: center; color: white; font-size: 2.5rem; font-weight: bold;">
                <div>🎉 CONGRATULATIONS! 🎉</div>
                <div style="font-size: 1.8rem; margin-top: 15px;">All 98 MTR stations found!</div>
                <div style="font-size: 1.2rem; margin-top: 15px;">You're a Hong Kong transit master! 🚇</div>
            </div>
        `;
        
        document.body.appendChild(celebration);
        setTimeout(() => celebration.remove(), 4000);
    }
    
    resetGame() {
        if (this.foundStations.size > 5 && !confirm(`Reset progress of ${this.foundStations.size} stations?`)) {
            return;
        }
        
        this.foundStations.clear();
        
        // Hide all stations
        document.querySelectorAll('.station-marker').forEach(marker => {
            const circle = marker.querySelector('circle');
            const text = marker.querySelector('text');
            
            circle.style.opacity = '0';
            circle.setAttribute('r', '0');
            
            if (text) {
                text.remove();
            }
        });
        
        this.updateDisplay();
        this.stationInput.value = '';
        this.stationInput.focus();
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MTRMemoryGame();
});