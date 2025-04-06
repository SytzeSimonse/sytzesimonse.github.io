class OrbAnimation {
    constructor() {
        this.canvas = document.getElementById('orbCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.mouseX = 0;
        this.mouseY = 0;
        this.orbX = 0;
        this.orbY = 0;
        this.easing = 0.05;
        this.lastMouseMoveTime = Date.now();
        this.isAutonomous = false;
        this.targetX = 0;
        this.targetY = 0;
        this.wanderTimer = 0;
        
        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.lastMouseMoveTime = Date.now();
            this.isAutonomous = false;
            // Set initial target to current position when stopping autonomous mode
            this.targetX = this.orbX;
            this.targetY = this.orbY;
            this.wanderTimer = 0;
        });
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    drawOrb() {
        const currentTime = Date.now();
        if (currentTime - this.lastMouseMoveTime > 7000) {
            this.isAutonomous = true;
        }

        if (this.isAutonomous) {
            // Random wandering movement
            this.wanderTimer++;
            
            // Pick a new random target every 100 frames
            if (this.wanderTimer >= 100) {
                const padding = 100; // Keep orb away from edges
                this.targetX = padding + Math.random() * (this.canvas.width - 2 * padding);
                this.targetY = padding + Math.random() * (this.canvas.height - 2 * padding);
                this.wanderTimer = 0;
            }
            
            // Calculate direction vector
            const dx = this.targetX - this.orbX;
            const dy = this.targetY - this.orbY;
            
            // Calculate distance
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 1) {  // Only move if we're not already at the target
                // Normalize direction and apply constant speed
                const speed = 2;  // Pixels per frame
                this.orbX += (dx / distance) * speed;
                this.orbY += (dy / distance) * speed;
            }
        } else {
            // Normal mouse following behavior
            this.orbX += (this.mouseX - this.orbX) * this.easing;
            this.orbY += (this.mouseY - this.orbY) * this.easing;
        }

        // Create gradient
        const gradient = this.ctx.createRadialGradient(
            this.orbX, this.orbY, 0,
            this.orbX, this.orbY, 50
        );
        gradient.addColorStop(0, 'rgba(142, 202, 230, 0.5)');
        gradient.addColorStop(0.5, 'rgba(142, 202, 230, 0.2)');
        gradient.addColorStop(1, 'rgba(142, 202, 230, 0)');

        // Clear previous frame
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw orb
        this.ctx.beginPath();
        this.ctx.fillStyle = gradient;
        this.ctx.arc(this.orbX, this.orbY, 50, 0, Math.PI * 2);
        this.ctx.fill();
    }

    animate() {
        this.drawOrb();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize the orb animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new OrbAnimation();
});
