# cs-code-gen

You can find the full description of the problem in this link - https://bit.ly/2G8uDNM.

![Alt text](https://preview.ibb.co/k1CVkS/Screenshot_from_2018_03_29_19_09_11.png?raw=true "Title") 

# Detail Specification

* It contains 52 cells (N = 52)
* Horizontal span of the rectangle in cells is 9 (W = 9)
* Vertical span of the rectangle is cells is 6 (H = 6)
* W and H maintains a ratio R (R = 9/6 = 1.5)
* Each cell has a specific fixed dimension (Wc = Cell Width, Hc = Cell Height)
* Some cells are styled blank (css-class = blank-style)
* Some cells are styled filled (css-class = filled-style)
* Out of N = 52 cells, 19 cells are filled (Nf = 19)
* Out of N = 52 cells, 33 cells are blank (Nb = 33)
* Note that the last row of cells spans only 7 cells, not 9 cells. Because when W x H > N, we need to adjust last row so that total number of cells are always N

# Output Specification and Schedule

* We need to write a javascript library that will contain functions
* To take N and R as input and determine the optimal value of W and H
* To take N, W and H as input and calculate what should be the span of last row so that total cells equal to N
* Take N and Nf as input and generate Nf random numbers between 0 to N-1
* Map the Nf numbers to cell position where 0 starts at top left and follows the left to right alphabetical ordering

# We need a final function which takes 
* N, R, Nf and generates a nice HTML/CSS/Javascript page (all embedded in a single file) which shows the output in a nice tabular format
* As a Node package so that anyone can run it under Node.js
* The package will have following executables that can be run from command line after installing the package. Let the package name be cs-code-gen
* cs-gen-wh --cell-count=N --ratio=R (where N is number of cells, R is ratio). Will print a JSON {width: W, height: H}
* cs-gen-last-row-len --cell-count=N --width=W --height=H (where W is width and H is height). Will print a JSON {last-row-len: L}
* cs-gen-random-list --cell-count=N --filled-cell-count=Nf (where Nf <= N and Nf is number of filled cells). Output will be a jSON array of numbers with length Nf and no element will be repeated twice and all elements are between 0 to N-1
* cs-get-random-filled-div --cell-count=N --ratio=R --filled-cell-count=Nf. Output will be a nice HTML fragment (with inline or linked css) that shows the table/UI as depicted in the top.


For this project you need to have node js installed in your computer. To install node js see this link: https://bit.ly/2G5Dq6X . I personally prefer node js installation using NVM.


# Installation

`npm install -g cs-code-gen`


# commands-to-run-it

To get width and height you need to give total number of cells and the ratio of height and width. The command is:

`cs-gen-wh --cell-count N --ratio R`


Length of the last row:

`cs-gen-last-row-len --cell-count N --width W --height H`


Indexes of filled cells:

`cs-gen-random-list --cell-count N --filled-cell-count Nf`


For  a nice HTML fragment output:

`cs-get-random-filled-div --cell-count N --ratio R --filled-cell-count Nf`


The HTML output will run in http://localhost:3000/ .
