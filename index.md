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

<a class="bookmarklet" href="javascript: (function() { &quot;use strict&quot;;function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError(&quot;Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.&quot;)}function _unsupportedIterableToArray(t,e){if(t){if(&quot;string&quot;==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return&quot;Object&quot;===r&amp;&amp;t.constructor&amp;&amp;(r=t.constructor.name),&quot;Map&quot;===r||&quot;Set&quot;===r?Array.from(t):&quot;Arguments&quot;===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e&gt;t.length)&amp;&amp;(e=t.length);for(var r=0,n=new Array(e);r&lt;e;r++)n[r]=t[r];return n}function _iterableToArrayLimit(t,e){var r=null==t?null:&quot;undefined&quot;!=typeof Symbol&amp;&amp;t[Symbol.iterator]||t[&quot;@@iterator&quot;];if(null!=r){var n,o,a,i,u=[],l=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&amp;&amp;(u.push(n.value),u.length!==e);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&amp;&amp;null!=r.return&amp;&amp;(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return u}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _typeof(t){return(_typeof=&quot;function&quot;==typeof Symbol&amp;&amp;&quot;symbol&quot;==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&amp;&amp;&quot;function&quot;==typeof Symbol&amp;&amp;t.constructor===Symbol&amp;&amp;t!==Symbol.prototype?&quot;symbol&quot;:typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError(&quot;Cannot call a class as a function&quot;)}function _defineProperties(t,e){for(var r=0;r&lt;e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,&quot;value&quot;in n&amp;&amp;(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&amp;&amp;_defineProperties(t.prototype,e),r&amp;&amp;_defineProperties(t,r),Object.defineProperty(t,&quot;prototype&quot;,{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,&quot;string&quot;);return&quot;symbol&quot;===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if(&quot;object&quot;!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||&quot;default&quot;);if(&quot;object&quot;!==_typeof(n))return n;throw new TypeError(&quot;@@toPrimitive must return a primitive value.&quot;)}return(&quot;string&quot;===e?String:Number)(t)}var Node={getAncestry:function(t){for(var e=[];t=t.parentNode;)e.unshift(t);return e},getCommonAncestor:function(t){var e=t.map(this.getAncestry);e.sort(function(t,e){return t.length-e.length});var r=e.shift(),n=null,o=function(){for(var t=r[a],o=0,i=e.length;o&lt;i;o++){if(!e[o].some(function(e){return e===t}))return 1}n=t};t:for(var a=0,i=r.length;a&lt;i&amp;&amp;!o();a++);return console.log(&quot;Common ancestor:&quot;,n),n},getNthChild:function(t){for(var e=1;t=t.previousElementSibling;)e++;return e},querySimilarBetween:function(t,e,r){for(var n,o,a=r||this.getCommonAncestor([t,e]),i=this.getAncestry(e),u=[];t&amp;&amp;t!==a;)o=this.getNthChild(t),n=t.tagName.toLowerCase()+&quot;:nth-child(&quot;+o+&quot;)&quot;,u.unshift(n),t=t.parentNode;var l=u.shift().split(&quot;:&quot;)[0],s=o,c=this.getNthChild(i[i.indexOf(a)+1]);if(s&gt;c){var f=[c,s];s=f[0],c=f[1]}var m=l+&quot;:nth-child(n+&quot;+s+&quot;):nth-child(-n+&quot;+c+&quot;) &gt; &quot;+u.join(&quot; &gt; &quot;);return console.log(&quot;Selector:&quot;,m),a.querySelectorAll(m)}},Num={extractFloat:function(t){var e,r;if(e=(t=t.replace(/[^0-9,.-]+/g,&quot;&quot;)).match(/^-?(\d{1,3}(?:([,.])\d{3}(?:\2\d{3})*)?)((?!\2)[,.]\d+)?$/))r=e[1].replace(/[,.]/g,&quot;&quot;)+(e[3]?e[3].replace(&quot;,&quot;,&quot;.&quot;):&quot;&quot;);else{if(!(e=t.match(/^-?\d+([,.]\d+)?$/)))return[null,&quot;Ambiguous or badly formatted number: &quot;+t];r=t.replace(&quot;,&quot;,&quot;.&quot;)}return[parseFloat(r),null]},roundTwo:function(t){return Math.round(100*t)/100},format:function(t){return(new Intl.NumberFormat).format(this.roundTwo(t))}},Dataset=function(){function t(e){_classCallCheck(this,t),this.values=e||[]}return _createClass(t,[{key:&quot;add&quot;,value:function(t){return this.values.push(t),this}},{key:&quot;size&quot;,value:function(){return this.values.length}},{key:&quot;sum&quot;,value:function(){return this.values.reduce(function(t,e){return t+e},0)}},{key:&quot;sum_positive&quot;,value:function(){return this.values.filter(function(t){return t&gt;=0}).reduce(function(t,e){return t+e},0)}},{key:&quot;sum_negative&quot;,value:function(){return this.values.filter(function(t){return t&lt;0}).reduce(function(t,e){return t+e},0)}},{key:&quot;mean&quot;,value:function(){return this.sum()/this.size()}},{key:&quot;variance&quot;,value:function(){return new t(this.values.map(function(t){return Math.pow(t,2)})).mean()-Math.pow(this.mean(),2)}},{key:&quot;std&quot;,value:function(){return Math.sqrt(this.variance())}}]),t}(),Main={targets:[],listener:function(t){if(this.targets.length&gt;=2&amp;&amp;(this.targets[0].style.outline=&quot;none&quot;,this.targets[1].style.outline=&quot;none&quot;,this.targets=[]),t.target&amp;&amp;t.target.innerText&amp;&amp;t.target.innerText.match(/[0-9]+/)&amp;&amp;(this.targets.push(t.target),console.log(this.targets),t.target.style.outline=&quot;2px solid green&quot;,this.targets.length&gt;=2)){var e=Node.getCommonAncestor(this.targets);if(!e)return void alert(&quot;The clicked areas must belong to the same series of data&quot;);var r=Node.querySimilarBetween(this.targets[0],this.targets[1],e);console.log(&quot;Cells:&quot;,r);var n=new Dataset;Array.prototype.forEach.call(r,function(t){var e=_slicedToArray(Num.extractFloat(t.innerText),2),r=e[0],o=e[1];o?alert(o):(console.log(r),n.add(r))});var o=&quot;Total: &quot;+Num.format(n.sum())+&quot;  (+&quot;+Num.format(n.sum_positive())+&quot; / &quot;+Num.format(n.sum_negative())+&quot;)\n\nMean: &quot;+Num.format(n.mean())+&quot;\nStandard deviation: &quot;+Num.format(n.std())+&quot;\nVariance: &quot;+Num.format(n.variance())+&quot;\n\nNumber of values: &quot;+Num.format(n.size());setTimeout(function(){alert(o)},10)}}};document.querySelector(&quot;body&quot;).addEventListener(&quot;click&quot;,Main.listener.bind(Main)); }());">Sum it!</a>


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
