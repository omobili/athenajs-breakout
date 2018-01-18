import {Game, Scene} from 'athenajs';
import {Grid} from './grid';

const breakout = new Game({
    name: 'athena-breakout',
    showFps: true,
    debug: true,
    width: 800,
    height: 600
});

const scene = new Grid();

breakout.setScene(scene);