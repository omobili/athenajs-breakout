import {Paint} from 'athenajs';

export class Bar extends Paint {
    rect: any;

    constructor(options) {
        super(Paint.name, options);
    }

    render() {
        this.rect(0, 0, 60, 20, 'black');
    }
}