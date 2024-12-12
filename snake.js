class Snake {
    constructor() {
        this.canvas = document.getElementById('snakeCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.segments = [{x: 0, y: 0}];
        this.target = null;
        this.speed = 5;
        this.size = 8;
        this.trail = [];
        this.maxTrailLength = 20;
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        this.findNewTarget();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    findNewTarget() {
        const elements = document.querySelectorAll('p, .mission-statement, .contact-box');
        const validTargets = Array.from(elements).filter(el => {
            const rect = el.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0;
        });
        
        if (validTargets.length === 0) return;
        
        const randomElement = validTargets[Math.floor(Math.random() * validTargets.length)];
        const rect = randomElement.getBoundingClientRect();
        this.target = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }

    moveTowardsTarget() {
        if (!this.target) return;

        const head = this.segments[0];
        const dx = this.target.x - head.x;
        const dy = this.target.y - head.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.speed) {
            this.findNewTarget();
            this.segments.unshift({ x: this.target.x, y: this.target.y });
            if (this.segments.length > 15) {
                this.segments.pop();
            }
        } else {
            const angle = Math.atan2(dy, dx);
            const newX = head.x + Math.cos(angle) * this.speed;
            const newY = head.y + Math.sin(angle) * this.speed;
            this.segments.unshift({ x: newX, y: newY });
            this.segments.pop();
        }

        this.trail.unshift({ x: head.x, y: head.y });
        if (this.trail.length > this.maxTrailLength) {
            this.trail.pop();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw trail
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#8ecae6';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < this.trail.length; i++) {
            const alpha = 1 - (i / this.maxTrailLength);
            this.ctx.strokeStyle = `rgba(142, 202, 230, ${alpha * 0.3})`;
            if (i === 0) {
                this.ctx.moveTo(this.trail[i].x, this.trail[i].y);
            } else {
                this.ctx.lineTo(this.trail[i].x, this.trail[i].y);
            }
        }
        this.ctx.stroke();

        // Draw snake segments
        this.segments.forEach((segment, index) => {
            const alpha = 1 - (index / this.segments.length);
            this.ctx.fillStyle = `rgba(142, 202, 230, ${alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(segment.x, segment.y, this.size * (1 - index/this.segments.length), 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    animate() {
        this.moveTowardsTarget();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize snake when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Snake();
});
