import {Game} from 'athenajs';
import {Level} from './level';

const breakout = new Game({
    name: 'athena-breakout',
    showFps: true,
    debug: true,
    width: 800,
    height: 600
});

const level = new Level({});

breakout.setScene(level);