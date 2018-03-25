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


// (where W is width and H is height). Will print a JSON {last-row-len: L}
		let n = program.cellCount;
		let w = program.width;
		let h = program.height;

		if(n < (w * h))
		{
			let len = n - (w * (h-1));
			console.log(`{last-row-len: ${len} }`);
		}
		else if(n == (w * h))
		{

			console.log(`{last-row-len: ${w} }`);
		}

