# cs-code-gen

You can find the full description of the problem in this link - https://bit.ly/2G8uDNM.

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
