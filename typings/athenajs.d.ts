declare module 'athenajs' {

    //
    // Game
    //

    interface GameOptions {
        name?: string;
        width?: number;
        height?: number;
        target?: string | HTMLElement;
        debug?: boolean;
        showFps?: boolean;
        resources?:	Array<object>
    }

    export class Game {
        constructor(options: GameOptions);

        setScene(scene: Scene): void;
    }

    //
    // Scene
    //

    interface SceneOptions {

    }

    export class Scene {
        constructor(options: SceneOptions);

        addObject(objects: Array<object>|Drawable, layerIndex?: number): void;

        update(timestamp: number): void;
    }

    //
    // Drawable
    //

    interface DrawableOptions {
        objectId?: string;
        collideGroup?: number;
        master?: boolean;
        visible?: boolean;
        canCollide?: boolean;
    }

    export class Drawable {
        x: number;
        y: number;
        width: number;
        height: number;

        behavior: Behavior;
        currentScene: Scene;

        constructor(type: string, options: DrawableOptions);

        hitTest(obj: Drawable): boolean;
        onHit(obj: Drawable): void;

    }

    //
    // Paint
    //

    interface PaintOptions {
        width?: number;
        height?: number;
        x?: number;
        y?: number;
        colors?: string;
    }

    export class Paint extends Drawable {
        constructor(name: string, options: PaintOptions);

        rect(x: number, y: number, width: number, height: number, color?: string);
        circle(x: number, y: number, radius: number, color: string, strokeWidth?: number, strokeStyle?: string);
    }

    //
    // Behavior
    //

    interface BehaviorOptions {
        gravity?: number;
        vx?: number;
        vy?: number;
        onVXChange?: Function;
        onVYChange?: Function;
    }

    export class Behavior {
        sprite: Drawable;

        constructor(sprite: Drawable, options: BehaviorOptions);

        onUpdate(t: number): void;
    }

    //
    // Input Manager
    //

    export const InputManager: {
        isKeyDown (key: string, latch?: boolean): boolean;
    }
}