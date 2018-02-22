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
    }

    //
    // Drawable
    //

    interface DrawableOptions {
        objectId?: string;
        collideGroup?: number;
        master?: boolean;
        visible?: boolean;
    }

    export class Drawable {
        x: number;
        y: number;
        width: number;
        height: number;

        constructor(type: string, options: DrawableOptions);
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

    class Behavior {
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