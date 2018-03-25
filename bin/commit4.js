#!/usr/bin/env node
var http=require('http');
var fs = require('fs');
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

let nf = program.filledCellCount;

var mySet = new Set();
while(true)
{
	let a = Math.floor(Math.random() * n);
	
	
	mySet.add(a);

	if(mySet.size == nf){
		//console.log(Array.from(mySet).sort());
		break;
	}
}

let len = 0;

if(n < (w * h))
		{
			len = n - (w * (h-1));
			console.log(`{last-row-len: ${len} }`);
		}
		else if(n == (w * h))
		{
			len = w;
			console.log(`{last-row-len: ${w} }`);
		}

let newArr = Array.from(mySet).sort();
newArr.sort();
console.log(newArr.sort());
		let count = 0;
		var data = '<table>';
		for(let i = 0; i < h; i++)
		{
			data += '<tr>';
			if(i === (h-1)){
				w = len;
			}
			for(let j = 0; j < w; j++)
			{
				if(count === n)
				{
					break;
				}
				else {
					if(newArr.indexOf(count) != -1)
					{
						//console.log(nf.indexOf(i));
						data += '<td height="20" width="20" bgcolor="#4286f4" style="border: 1px solid black"></td>';
					}
					else {

						data += '<td height="20" width="20" style="border: 1px solid black"></td>';
					}
					count++;
				}
			}
			data += '</tr>';
		}

		data += '</table>'

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, d) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	d = data;
    res.write(d);
    res.end();
  });
}).listen(3000, () => {
	console.log('server is running in port: 3000');
});


