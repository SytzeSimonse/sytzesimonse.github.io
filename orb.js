class OrbAnimation {
    constructor() {
        this.canvas = document.getElementById('orbCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.mouseX = 0;
        this.mouseY = 0;
        this.orbX = 0;
        this.orbY = 0;
        this.easing = 0.1;
        
        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    drawOrb() {
        // Smooth movement towards mouse position
        this.orbX += (this.mouseX - this.orbX) * this.easing;
        this.orbY += (this.mouseY - this.orbY) * this.easing;

        // Create gradient
        const gradient = this.ctx.createRadialGradient(
            this.orbX, this.orbY, 0,
            this.orbX, this.orbY, 30
        );
        gradient.addColorStop(0, 'rgba(142, 202, 230, 0.3)');
        gradient.addColorStop(0.5, 'rgba(142, 202, 230, 0.1)');
        gradient.addColorStop(1, 'rgba(142, 202, 230, 0)');

        // Clear previous frame
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw orb
        this.ctx.beginPath();
        this.ctx.fillStyle = gradient;
        this.ctx.arc(this.orbX, this.orbY, 30, 0, Math.PI * 2);
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
