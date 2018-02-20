import {Scene} from 'athenajs';
import {Bar} from './objects/bar';

export class Grid extends Scene {
    addObject: any;

    setup() {
        console.log('Game > Grid (Scene) > Setup ()');
    }
    start() {
        console.log('Game > Grid (Scene) > Start ()');
        this.addObject(new Bar({

        }));
    }
}

// import { Scene, Map, Tile } from 'athenajs';
//
// const   TILE_WIDTH  = 20,
//         TILE_HEIGHT = 20,
//         MAP_COLS    = 30,
//         MAP_ROWS    = 25;
//
// const   MAP_TILES_OFFSET_Y = 440,
//         WALL_TILE_OFFSET_X = 140,
//         BACK_TILE_OFFSET_X = 160;
//
// const   TOTAL_WIDTH = 800,
//         TOTAL_HEIGHT = 600;
//
// export class Grid extends Scene {
//     map: Map;
//
//     // ..
//     setBackgroundImage: any;
//     setMap: any;
//     // ..
//
//     constructor() {
//         super({
//             resources: [{
//                 id:     "tiles",
//                 type:   "image",
//                 src:    "img/breakout_tiles.png"
//             }]
//         });
//
//         console.log(this);
//     }
//
//     /**
//      * Generate tileset for the tetris map, mostly hardcoded stuff
//      *
//      * @returns {Array} The tileset for the map
//      */
//     generateTileSet() {
//         const tiles = [];
//
//         // Map background
//         tiles.push({
//             offsetX: 0,
//             offsetY: 0,
//             width: TILE_WIDTH,
//             height: TILE_HEIGHT
//         });
//
//         // Wall
//         tiles.push({
//             offsetX: TILE_WIDTH,
//             offsetY: 0,
//             width: TILE_WIDTH,
//             height: TILE_HEIGHT
//         });
//
//         return tiles;
//     }
//
//     /**
//      * Generates the map of the game, adding walls around the playground
//      */
//     createMap() {
//         // first create the map with an empty buffer
//         const map = new Map({
//             src:        "tiles",
//             tileWidth:  TILE_WIDTH,
//             tileHeight: TILE_HEIGHT,
//             width:      TILE_WIDTH * MAP_COLS,
//             height:     TILE_HEIGHT * MAP_ROWS,
//             buffer:     new ArrayBuffer(MAP_COLS * MAP_ROWS * 2)
//         });
//
//         map.addTileSet(this.generateTileSet());
//
//         return map;
//     }
//
//     resetMap() {
//         const map = this.map;
//
//         // Reset map using default background tiles and their behavior
//         map.clear(0, Tile.TYPE.AIR);
//
//         // Add walls on map's borders
//         for (let i = 0; i < map.numRows; ++i) {
//             // Side walls
//             map.updateTile(0, i, 1, Tile.TYPE.WALL);
//             map.updateTile(map.numCols - 1, i, 1, Tile.TYPE.WALL);
//         }
//
//         for (let i = 0; i < map.numCols; ++i) {
//             // Roof wall
//             map.updateTile(i, 0, 1, Tile.TYPE.WALL);
//         }
//     }
//
//     setup() {
//         // @todo createshapes
//
//         this.map = this.createMap();
//     }
//
//     start() {
//         const map = this.map;
//
//         this.setBackgroundImage("img/background.png");
//
//         // center map
//         this.setMap(
//             map,
//             (TOTAL_WIDTH - map.width) / 2,
//             (TOTAL_HEIGHT - map.height) / 2
//         );
//
//         this.reset();
//     }
//
//     reset() {
//         this.resetMap();
//     }
// }