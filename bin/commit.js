#!/usr/bin/env node
//console.log('Hello, world!');
var program = require('commander');
program
 .option('--cell-count <cellCount>', 'number of cells')
 .option('--ratio <ratio>', 'ratio of width and height')
 .option('--width <width>', 'width')
 .option('--height <height>', 'height')
 .option('--filled-cell-count <filledCellCount>', 'filled cell amount')
.parse(process.argv);

	let n = program.cellCount;
	let r = program.ratio;

	let w = r;
	let h = 1;
	
	while((w * h) < n){
		if(w * h < n){
			h++;
			w = h * r;
		}
		else
			break;
	}

	h = Math.round(h);

	w = Math.round(w);

	
	console.log(`{ width: ${w}, height: ${h} }`);
