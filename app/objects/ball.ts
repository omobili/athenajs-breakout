import {Behavior, Paint, InputManager as Input, Drawable} from "athenajs";
import {Bar} from './bar';

export const BALL_PARAMS = {
    radius: 10,
    speed: 4,
    angle: 65
};

export class BallBehavior extends Behavior {
    speed: number;
    angle: number;

    velocity: { x: number; y: number; } = {
        x: 0,
        y: 0
    };

    isMoving: boolean = false;
    bounce: number = 0;

    constructor(drawable, options) {
        super(drawable, options);

        this.angle = options.angle || BALL_PARAMS.angle;
        this.speed = options.speed || BALL_PARAMS.speed;
    }

    onUpdate() {
        const sprite = this.sprite;

        if (!this.isMoving && Input.isKeyDown('SPACE')) {
            this._start();
            this.isMoving = true;
        }

        if (this.isMoving) {
            this._move();
        }
    }

    bounceOnBar(bar: Bar): void {
        const ball = this.sprite;

        if (this.speed <=10 && ++this.bounce >= 5) {
            this.bounce = 0;
            this.speed ++;
        }

        let angle;

        angle = ((ball.x - bar.x) * 180) / bar.width;
        angle < 20 ? angle = 20 : '';
        angle > 160 ? angle = 160 : '';

        this.angle = 180 - angle;
        this._calcVelocity();
     }

    private _start(): void {
        this._calcVelocity();
    }

    private _calcVelocity(): void {
        let angle = this.angle * (Math.PI / 180); // convert from degrees to radians

        this.velocity = {
            x: Math.cos(angle) * this.speed,
            y: (Math.sin(angle) * this.speed) * -1
        };
    }

    private _move(): void {
        const sprite = this.sprite;
        const vel = this.velocity;

        sprite.x += vel.x;
        sprite.y += vel.y;

        if (sprite.x < 0) {
            sprite.x = 0;
            vel.x *= -1;
        } else if (sprite.x > 800 - 20) {
            sprite.x = 800 - 20;
            vel.x *= -1;
        }

        if (sprite.y < 0) {
            sprite.y = 0;
            vel.y *= -1;
        } else if (sprite.y > 650) {
            this._fail();
        }
    }

    private _fail(): void {

    }
}

export class Ball extends Paint {
    behavior: BallBehavior;

    constructor(options) {
        super('ball', options);

        console.log(this);
    }

    render() {
        this.circle(0, 0, BALL_PARAMS.radius, 'orange');
    }

    checkForCollisions(object: Drawable): void {
        if (!this.hitTest(object)) {
            return;
        }

        if (object instanceof Bar) {
            this.behavior.bounceOnBar(object);
        }
    }
}