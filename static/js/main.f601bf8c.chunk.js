(this.webpackJsonpdynamic=this.webpackJsonpdynamic||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),i=n.n(l),u=(n(15),n(7)),c=n(2),o=n(3),s=n(8),h=n(6),p=n(1),d=n(9),m=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"optimalPath",value:function(e){var t=[],n=[];if(0===e.length||e[0]<=0)return!1;if(e.length-1<=e[0])return[0,e.length-1];t[0]=e[0],n[0]=0;for(var a=0;a<e.length;){for(var r=0,l=a+1,i=0;l<=a+t[t.length-1];l+=1)r<e[l]&&(r=e[l],i=l);if(r<1)return!1;if(t.push(r),n.push(i),a=i,e.length-1<=t[t.length-1]+i){t.push(e[e.length-1]),n.push(e.length-1);break}}return n}},{key:"parseInput",value:function(e){var t=e.match(/-?[0-9]+/g),n=[];try{return null!==t?(t.forEach((function(e){n.push(parseInt(e,10))})),n):null}catch(a){return null}}}]),e}();n(16);function f(e){var t=e.handleChange;return r.a.createElement("textarea",{className:"customTextArea",onBlur:function(e){return t(e.target.value)}})}f.defaultProps={handleChange:function(){}};var v=f;n(17);function k(e){var t=e.handleClick,n=e.Text;return r.a.createElement("button",{onClick:function(){return t()},type:"button",className:"button"},n)}k.defaultProps={handleClick:function(){},Text:""};var g=k,b=(n(18),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={input:"",error:null,optimalPath:null,parsedArray:null},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleInput=n.handleInput.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){var e=this.state.input,t=m.parseInput(e);if(null===t||void 0===t)this.setState({error:"Provided input was invalid, please provide a valid list of numbers.",optimalPath:null,parsedArray:null});else{var n=m.optimalPath(t);n?this.setState({error:null,optimalPath:n,parsedArray:t}):this.setState({error:"The provided array has no possible paths to reach the end.",optimalPath:null,parsedArray:null})}}},{key:"handleInput",value:function(e){this.setState({input:e})}},{key:"filterPath",value:function(){var e=this.state,t=e.parsedArray,n=e.optimalPath,a=Object(u.a)(n);return console.log(a),t.map((function(e,t){return t!==a[0]?r.a.createElement("span",{key:t},"".concat(e," ")):(a.shift(),r.a.createElement("span",{key:t,className:"successText"},"".concat(e," ")))}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.optimalPath;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"container"},r.a.createElement(v,{handleChange:this.handleInput}),r.a.createElement(g,{Text:"Calculate",handleClick:this.handleClick}),t?r.a.createElement("p",{className:"errorText"},t):null,n?r.a.createElement("div",null,r.a.createElement("p",{className:"successText"},"Success!"),r.a.createElement("p",null,"The optimal path is marked in green:"),this.filterPath()):null))}}]),t}(r.a.Component));var y=function(){return r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f601bf8c.chunk.js.map