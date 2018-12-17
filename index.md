<!--

    /!\ WARNING : THIS FILE HAS BEEN GENERATED /!\

    Edit src/index.md, then rebuild with gulp.

-->

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

<a class="bookmarklet" href="javascript: (function() { &quot;use strict&quot;;function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError(&quot;Invalid attempt to destructure non-iterable instance&quot;)}function _iterableToArrayLimit(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&amp;&amp;(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError(&quot;Cannot call a class as a function&quot;)}function _defineProperties(e,t){for(var r=0;r&lt;t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,&quot;value&quot;in n&amp;&amp;(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&amp;&amp;_defineProperties(e.prototype,t),r&amp;&amp;_defineProperties(e,r),e}var Node={getAncestry:function(e){for(var t=[];e=e.parentNode;)t.unshift(e);return t},getCommonAncestor:function(e){var t=e.map(this.getAncestry);t.sort(function(e,t){return e.length-t.length});var r=t.shift(),n=null,a=function(e,a){for(var i=r[e],o=0,u=t.length;o&lt;u;o++){if(!t[o].some(function(e){return e===i}))return&quot;break|loop1&quot;}n=i};e:for(var i=0,o=r.length;i&lt;o;i++){if(&quot;break|loop1&quot;===a(i))break e}return console.log(&quot;Common ancestor:&quot;,n),n},getNthChild:function(e){for(var t=1;e=e.previousElementSibling;)t++;return t},querySimilarBetween:function(e,t,r){for(var n,a,i=r||this.getCommonAncestor([e,t]),o=this.getAncestry(t),u=[];e&amp;&amp;e!==i;)a=this.getNthChild(e),n=e.tagName.toLowerCase()+&quot;:nth-child(&quot;+a+&quot;)&quot;,u.unshift(n),e=e.parentNode;var s=u.shift().split(&quot;:&quot;)[0],l=a,c=this.getNthChild(o[o.indexOf(i)+1]);if(l&gt;c){var f=[c,l];l=f[0],c=f[1]}var h=s+&quot;:nth-child(n+&quot;+l+&quot;):nth-child(-n+&quot;+c+&quot;) &gt; &quot;+u.join(&quot; &gt; &quot;);return console.log(&quot;Selector:&quot;,h),i.querySelectorAll(h)}},Num={extractFloat:function(e){var t,r;if(t=(e=e.replace(/[^0-9,.-]+/g,&quot;&quot;)).match(/^-?(\d{1,3}(?:([,.])\d{3}(?:\2\d{3})*)?)((?!\2)[,.]\d+)?$/))r=t[1].replace(/[,.]/g,&quot;&quot;)+(t[3]?t[3].replace(&quot;,&quot;,&quot;.&quot;):&quot;&quot;);else{if(!(t=e.match(/^-?\d+([,.]\d+)?$/)))return[null,&quot;Ambiguous or badly formatted number: &quot;+e];r=e.replace(&quot;,&quot;,&quot;.&quot;)}return[parseFloat(r),null]},roundTwo:function(e){return Math.round(100*e)/100},format:function(e){return(new Intl.NumberFormat).format(this.roundTwo(e))}},Dataset=function(){function e(t){_classCallCheck(this,e),this.values=t||[]}return _createClass(e,[{key:&quot;add&quot;,value:function(e){return this.values.push(e),this}},{key:&quot;size&quot;,value:function(){return this.values.length}},{key:&quot;sum&quot;,value:function(){return this.values.reduce(function(e,t){return e+t},0)}},{key:&quot;sum_positive&quot;,value:function(){return this.values.filter(function(e){return e&gt;=0}).reduce(function(e,t){return e+t},0)}},{key:&quot;sum_negative&quot;,value:function(){return this.values.filter(function(e){return e&lt;0}).reduce(function(e,t){return e+t},0)}},{key:&quot;mean&quot;,value:function(){return this.sum()/this.size()}},{key:&quot;variance&quot;,value:function(){return new e(this.values.map(function(e){return Math.pow(e,2)})).mean()-Math.pow(this.mean(),2)}},{key:&quot;std&quot;,value:function(){return Math.sqrt(this.variance())}}]),e}(),Main={targets:[],listener:function(e){if(this.targets.length&gt;=2&amp;&amp;(this.targets[0].style.outline=&quot;none&quot;,this.targets[1].style.outline=&quot;none&quot;,this.targets=[]),e.target&amp;&amp;e.target.innerText&amp;&amp;e.target.innerText.match(/[0-9]+/)&amp;&amp;(this.targets.push(e.target),console.log(this.targets),e.target.style.outline=&quot;2px solid green&quot;,this.targets.length&gt;=2)){var t=Node.getCommonAncestor(this.targets);if(!t)return void alert(&quot;The clicked areas must belong to the same series of data&quot;);var r=Node.querySimilarBetween(this.targets[0],this.targets[1],t);console.log(&quot;Cells:&quot;,r);var n=new Dataset;Array.prototype.forEach.call(r,function(e){var t=_slicedToArray(Num.extractFloat(e.innerText),2),r=t[0],a=t[1];a?alert(a):(console.log(r),n.add(r))});var a=&quot;Total: &quot;+Num.format(n.sum())+&quot;  (+&quot;+Num.format(n.sum_positive())+&quot; / &quot;+Num.format(n.sum_negative())+&quot;)\n\nMean: &quot;+Num.format(n.mean())+&quot;\nStandard deviation: &quot;+Num.format(n.std())+&quot;\nVariance: &quot;+Num.format(n.variance())+&quot;\n\nNumber of values: &quot;+Num.format(n.size());setTimeout(function(){alert(a)},10)}}};document.querySelector(&quot;body&quot;).addEventListener(&quot;click&quot;,Main.listener.bind(Main)); }());">Sum it!</a>


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
