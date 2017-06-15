<style>
.bookmarklet {
	font-size: 2em;
	background-color: #2268b2;
	color: white;
	padding: 0.2em 0.8em;
	border-radius: 5px;
}
.bookmarklet:hover {
	color: white;
}
.example2 .spacer {
	border-bottom: 1px solid grey;
}
.example2 dt {
    display: inline-block;
    float: left;
}
.example2 dd {
    display: inline-block;
}
</style>


# Install

Drag the following button to your bookmarks bar or menu:

<a class="bookmarklet" href="javascript: (function() { @@include(escape("../build/bookmarklet.min.js")) }());">Sum it!</a>


# Usage

<ol>
	<li>Browse on a webpage containing a structured list of numbers</li>
	<li>Click on the "Sum it!" bookmark</li>
	<li>Click on the first number to sum</li>
	<li>Click on the last number to sum</li>
</ol>


# About

## What is it?

Sum it! is a bookmarklet that allows you to sum data
on a webpage in only two clicks.

## Features

<ul>
	<li>Sums data in two clicks (first and last values)</li>
	<li>Detects and understands differents formats (integers, floats, separators...)</li>
	<li>Cleans up irrelevant characters (spaces, currency signs...)</li>
	<li>Works on HTML tables and complex markup</li>
</ul>

## Whishlist

(To be implemented)

<ul>
	<li>Load once protection</li>
	<li>Play a sound when loaded</li>
	<li>Avoid using javascript alerts: replace with simple overlay</li>
	<li>Add a permanent options panel (configure format, operations...)</li>
	<li>From / to labels on selected cells</li>
	<li>Same cell detection (= cancel)</li>
</ul>

## Browser support

Sum it! is compatible with the latest version of Firefox, Chrome, Edge and Safari (you shouldn't use an [outdated browser](http://outdatedbrowser.com/en)).


# Want to try it first?

Click on the "Sum it!" button in the [Install](#install) section above.

Then go on with the two examples below.

## Example 1 - Bank account

This example features a simple HTML table.

Click on any two amounts below to get the total amount from the first to the second one:

<table class="example1">
	<thead>
		<tr><th>Details</th><th>Amount</th></tr>
	</thead>
	<tbody>
		<tr><td>Deposit</td><td>$500.00</td></tr>
		<tr><td>Bill payment</td><td>-$150.00</td></tr>
		<tr><td>Purchase</td><td>-$49.99</td></tr>
		<tr><td>Fees</td><td>$2.00</td></tr>
		<tr><td>Salaries</td><td>$3216.00</td></tr>
		<tr><td>Cheque n°103</td><td>-$100.00</td></tr>
		<tr><td>Mortgage</td><td>-$610.50</td></tr>
		<tr><td>Purchase</td><td>$130.00</td></tr>
		<tr><td>Bill payment</td><td>$69.70</td></tr>
	</tbody>
</table>

## Example 2 - Project funding

This example features a list with a complex markup structure.

Try to compute the total funding from project #2 to project #7: 

<div class="example2">
    <div class="container">
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #1</a></dt>
                <dd><span><span class="number">$45,000</span><span> funded</span><span class="number"> / $100,000</span><span></span></span><span><br>Time left:<span class="number"> 45 days</span></span>
                </dd>
            </dl>
        </div>
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #2</a></dt>
                <dd><span><span class="number">$11,000</span><span> funded</span><span class="number"> / $70,000</span><span></span></span><span><br>Time left:<span class="number"> 29 days</span></span>
                </dd>
            </dl>
        </div>
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #3</a></dt>
                <dd><span><span class="number">$0,00</span><span> funded</span><span class="number"> / $5000</span><span></span></span><span><br>Time left:<span class="number"> 15 days</span></span>
                </dd>
            </dl>
        </div>
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #4</a></dt>
                <dd><span><span class="number">$18,000</span><span> funded</span><span class="number"> / $20,000</span><span></span></span><span><br>Time left:<span class="number"> 4 days</span></span>
                </dd>
            </dl>
        </div>
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #5</a></dt>
                <dd><span><span class="number">$430,000</span><span> funded</span><span class="number"> / $1,000,000</span><span></span></span><span><br>Time left:<span class="number"> 30 days</span></span>
                </dd>
            </dl>
        </div>
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #6</a></dt>
                <dd><span><span class="number">$10,000</span><span> funded</span><span class="number"> / $10,000</span><span></span></span><span><br>Time left:<span class="number"> 0 days</span></span>
                </dd>
            </dl>
        </div>
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #7</a></dt>
                <dd><span><span class="number">$2,500</span><span> funded</span><span class="number"> / $10,000</span><span></span></span><span><br>Time left:<span class="number"> 7 days</span></span>
                </dd>
            </dl>
        </div>
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #8</a></dt>
                <dd><span><span class="number">$250,000</span><span> funded</span><span class="number"> / $300,000</span><span></span></span><span><br>Time left:<span class="number"> 14 days</span></span>
                </dd>
            </dl>
        </div>
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #9</a></dt>
                <dd><span><span class="number">$4,900</span><span> funded</span><span class="number"> / $12,000</span><span></span></span><span><br>Time left:<span class="number"> 15 days</span></span>
                </dd>
            </dl>
        </div>
        <div class="spacer"></div>
        <div class="project">
            <dl><dt><a href="#">Project #10</a></dt>
                <dd><span><span class="number">$0,00</span><span> funded</span><span class="number"> / $500</span><span></span></span><span><br>Time left:<span class="number"> 30 days</span></span>
                </dd>
            </dl>
        </div>
    </div>
</div>
