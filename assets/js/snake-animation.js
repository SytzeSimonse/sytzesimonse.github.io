console.log('Snake animation script loaded - This is a playful snake animation that runs in the background.');Y

// Playful Snake Animation
class SnakeAnimation {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.snake = [];
        this.food = [];
        this.animationId = null;
        this.lastTime = 0;
        this.moveInterval = 150; // milliseconds between moves
        this.direction = { x: 1, y: 0 };
        this.nextDirection = { x: 1, y: 0 };
        
        // Settings
        this.gridSize = 20;
        this.maxFood = 3;
        this.maxSnakeLength = 15;
        this.directionChangeChance = 0.02; // 2% chance per frame
        
        this.init();
    }
    
    init() {
        console.log('Initializing snake animation...');
        this.createCanvas();
        this.initSnake();
        console.log('Snake initialized with', this.snake.length, 'segments');
        this.spawnFood();
        console.log('Food spawned:', this.food.length, 'items');
        this.animate();
        console.log('Animation started');
        
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
    }
    
    createCanvas() {
        console.log('Creating canvas...');
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'snake-animation';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
        `;
        document.body.appendChild(this.canvas);
        console.log('Canvas added to body');
        
        this.ctx = this.canvas.getContext('2d');
        console.log('Canvas context created');
        this.resizeCanvas();
        console.log('Canvas resized, dimensions:', this.canvas.width, 'x', this.canvas.height);
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gridWidth = Math.floor(this.canvas.width / this.gridSize);
        this.gridHeight = Math.floor(this.canvas.height / this.gridSize);
    }
    
    handleResize() {
        this.resizeCanvas();
        // Keep snake within new bounds
        this.snake = this.snake.filter(segment => 
            segment.x >= 0 && segment.x < this.gridWidth && 
            segment.y >= 0 && segment.y < this.gridHeight
        );
        // Remove food outside bounds
        this.food = this.food.filter(food => 
            food.x >= 0 && food.x < this.gridWidth && 
            food.y >= 0 && food.y < this.gridHeight
        );
    }
    
    initSnake() {
        const startX = Math.floor(this.gridWidth / 4);
        const startY = Math.floor(this.gridHeight / 2);
        
        console.log('Grid dimensions:', this.gridWidth, 'x', this.gridHeight);
        console.log('Snake starting position:', startX, startY);
        
        this.snake = [
            { x: startX, y: startY },
            { x: startX - 1, y: startY },
            { x: startX - 2, y: startY }
        ];
        
        console.log('Snake segments:', this.snake);
    }
    
    spawnFood() {
        while (this.food.length < this.maxFood) {
            const food = {
                x: Math.floor(Math.random() * this.gridWidth),
                y: Math.floor(Math.random() * this.gridHeight)
            };
            
            // Don't spawn food on snake
            if (!this.isOnSnake(food)) {
                this.food.push(food);
            }
        }
    }
    
    isOnSnake(pos) {
        return this.snake.some(segment => segment.x === pos.x && segment.y === pos.y);
    }
    
    findNearestFood() {
        if (this.food.length === 0) return null;
        
        const head = this.snake[0];
        let nearest = this.food[0];
        let minDistance = this.getDistance(head, nearest);
        
        for (let i = 1; i < this.food.length; i++) {
            const distance = this.getDistance(head, this.food[i]);
            if (distance < minDistance) {
                minDistance = distance;
                nearest = this.food[i];
            }
        }
        
        return nearest;
    }
    
    getDistance(pos1, pos2) {
        return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y);
    }
    
    updateDirection() {
        const head = this.snake[0];
        const nearestFood = this.findNearestFood();
        
        // Random direction change chance
        if (Math.random() < this.directionChangeChance) {
            const directions = [
                { x: 0, y: -1 }, // up
                { x: 1, y: 0 },  // right
                { x: 0, y: 1 },  // down
                { x: -1, y: 0 }  // left
            ];
            this.nextDirection = directions[Math.floor(Math.random() * directions.length)];
            return;
        }
        
        // Move towards food
        if (nearestFood) {
            const dx = nearestFood.x - head.x;
            const dy = nearestFood.y - head.y;
            
            // Choose direction based on largest distance
            if (Math.abs(dx) > Math.abs(dy)) {
                this.nextDirection = { x: dx > 0 ? 1 : -1, y: 0 };
            } else if (dy !== 0) {
                this.nextDirection = { x: 0, y: dy > 0 ? 1 : -1 };
            }
        }
    }
    
    moveSnake() {
        // Update direction
        this.direction = { ...this.nextDirection };
        
        const head = { ...this.snake[0] };
        head.x += this.direction.x;
        head.y += this.direction.y;
        
        // Wrap around screen edges
        if (head.x < 0) head.x = this.gridWidth - 1;
        if (head.x >= this.gridWidth) head.x = 0;
        if (head.y < 0) head.y = this.gridHeight - 1;
        if (head.y >= this.gridHeight) head.y = 0;
        
        this.snake.unshift(head);
        
        // Check for food collision
        const ateFood = this.food.findIndex(food => food.x === head.x && food.y === head.y);
        
        if (ateFood !== -1) {
            // Remove eaten food
            this.food.splice(ateFood, 1);
            // Spawn new food
            this.spawnFood();
        } else {
            // Remove tail if no food eaten
            this.snake.pop();
        }
        
        // Limit snake length
        if (this.snake.length > this.maxSnakeLength) {
            this.snake.pop();
        }
    }
    
    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw snake
        this.ctx.fillStyle = '#1a3329'; // Primary color
        this.snake.forEach((segment, index) => {
            const alpha = 1 - (index / this.snake.length) * 0.5; // Fade towards tail
            this.ctx.globalAlpha = alpha;
            this.ctx.fillRect(
                segment.x * this.gridSize,
                segment.y * this.gridSize,
                this.gridSize - 1,
                this.gridSize - 1
            );
        });
        
        // Draw food
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = '#7fb3d5'; // Accent color
        this.food.forEach(food => {
            this.ctx.beginPath();
            this.ctx.arc(
                food.x * this.gridSize + this.gridSize / 2,
                food.y * this.gridSize + this.gridSize / 2,
                this.gridSize / 3,
                0,
                Math.PI * 2
            );
            this.ctx.fill();
        });
        
        // Debug: Draw a test rectangle to confirm drawing is working
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(10, 10, 20, 20);
    }
    
    animate(currentTime = 0) {
        if (currentTime - this.lastTime >= this.moveInterval) {
            this.updateDirection();
            this.moveSnake();
            this.lastTime = currentTime;
        }
        
        this.draw();
        this.animationId = requestAnimationFrame((time) => this.animate(time));
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas) {
            this.canvas.remove();
        }
        window.removeEventListener('resize', this.handleResize);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Snake animation script loaded, current path:', window.location.pathname);
    
    // Only run on main page (not on writings or other subpages)
    const isMainPage = !window.location.pathname.includes('/writings/') && 
                      !window.location.pathname.includes('/presentations/');
    
    console.log('Is main page?', isMainPage);
    console.log('Current pathname:', window.location.pathname);
    
    if (isMainPage) {
        console.log('Starting snake animation...');
        const snake = new SnakeAnimation();
        console.log('Snake animation initialized');
    }
});