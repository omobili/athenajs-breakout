import {Behavior, Paint} from "athenajs";
import {Bar} from "./bar";

export const BALL_PARAMS = {
    radius: 10,
    speed: 4
};

export class BallBehavior extends Behavior {
    speed: number;
    angle: number;

    velocity: {
        x: number;
        y: number;
    };

    constructor(drawable, options) {
        super(drawable, options);

        this.speed = BALL_PARAMS.speed;

        this.angle = 55;
        this._calcVelocity();
    }

    onUpdate() {
        const sprite = this.sprite;

        this._move();
    }

    private _calcVelocity(): void {
        let angle = this.angle * (Math.PI / 180); // convert from degrees to radians

        this.velocity = {
            x: Math.cos(angle) * this.speed,
            y: (Math.sin(angle) * this.speed) * -1
        };

        console.log(this.velocity);
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
        } else if (sprite.y > 600 - 20) {
            sprite.y = 600 - 20;
            vel.y *= -1;
        }

        console.log(sprite.y);
        console.log(this);
    }
}

export class Ball extends Paint {
    constructor(options) {
        super('ball', options);
    }

    render() {
        this.circle(0, 0, BALL_PARAMS.radius, 'orange');
    }
}