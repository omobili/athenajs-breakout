import {Paint, Behavior, InputManager as Input} from 'athenajs';

export const BarParams = {
    width: 120,
    height: 20
};

export class BarBehavior extends Behavior {
    // Missing @types from Athena //
    sprite: any;
    // .. //

    constructor(drawable, options) {
        super(drawable, options);
    }

    onUpdate() {
        const sprite = this.sprite;

        if (Input.isKeyDown('RIGHT') && sprite.x < (800 - sprite.width)) {
            sprite.x += 8
        } else if (Input.isKeyDown('LEFT') && sprite.x > 7) {
            sprite.x -= 8;
        }
    }
}

export class Bar extends Paint {
    // Missing @types from Athena //
    rect: any;
    // .. //

    constructor(options) {
        super(Paint.name, options);
    }

    render() {
        this.rect(0, 0, BarParams.width, BarParams.height, 'black');
    }
}