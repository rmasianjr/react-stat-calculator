(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),c=a.n(s),r=(a(15),a(2)),i=a(3),o=a(6),u=a(4),m=a(5),p=a(1),v=(a(17),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderStats",value:function(){var e=this.props,t=e.stats,a=e.onIncrementStat,n=e.onDecrementStat;return Object.keys(t).map(function(e){return l.a.createElement("li",{key:e,className:"stat-item"},l.a.createElement("div",{className:"stat-controls"},l.a.createElement("span",null,l.a.createElement("i",{onClick:function(){return a(e)},class:"icon ion-ios-add-circle-outline"})),l.a.createElement("span",null,l.a.createElement("i",{onClick:function(){return n(e)},class:"icon ion-ios-remove-circle-outline"}))),l.a.createElement("p",{className:"stat-text"},e.toUpperCase()," : ",l.a.createElement("span",null,t[e])))})}},{key:"render",value:function(){return l.a.createElement("div",{className:"stats"},l.a.createElement("h2",{className:"stats-title"},"Stats"),l.a.createElement("ul",null,this.renderStats()))}}]),t}(n.Component)),d=(a(19),function(e){var t=e.stats,a=t.str,n=t.agi,s=t.int,c=t.vit;return l.a.createElement("div",{className:"status-info"},l.a.createElement("h2",{class:"status-info-title"},"Status Information"),l.a.createElement("p",null,"HP: ",l.a.createElement("span",{className:"status-info-value"},50*c+1e3)," "),l.a.createElement("p",null,"MP: ",l.a.createElement("span",{className:"status-info-value"},20*s+700)," "),l.a.createElement("p",null,"Physical Damage:"," ",l.a.createElement("span",{className:"status-info-value"},5*a+30)," "),l.a.createElement("p",null,"Defense: ",l.a.createElement("span",{className:"status-info-value"},7*c+50)," "),l.a.createElement("p",null,"Magic Damage: ",l.a.createElement("span",{className:"status-info-value"},7*s+20)," "),l.a.createElement("p",null,"Magic Defense: ",l.a.createElement("span",{className:"status-info-value"},4*s+40)," "),l.a.createElement("p",null,"Critical:"," ",l.a.createElement("span",{className:"status-info-value"},parseFloat(.3*n/100*100).toFixed(1),"%")," "),l.a.createElement("p",null,"Attack Speed:"," ",l.a.createElement("span",{className:"status-info-value"},parseFloat(.7*n/100*100).toFixed(1),"%")," "))}),h=(a(21),function(e){var t=e.level,a=e.onLevelUp,s=e.spCount,c=e.onReset;return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"header-title"},"Stat Calculator"),l.a.createElement("div",{className:"header-content"},l.a.createElement("div",{className:"header-controls"},l.a.createElement("p",null,"Level: ",l.a.createElement("span",null,t)),l.a.createElement("span",null,l.a.createElement("i",{onClick:a,class:"icon ion-ios-add-circle-outline"})),l.a.createElement("span",null,l.a.createElement("i",{onClick:c,class:"icon ion-ios-refresh-circle"}))),l.a.createElement("div",{className:"header-sp"},l.a.createElement("p",null,"Available SP: ",l.a.createElement("span",null,s)))))}),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={level:1,stats:{str:0,int:0,agi:0,vit:0},spCount:0},a.handleIncrementStat=a.handleIncrementStat.bind(Object(p.a)(Object(p.a)(a))),a.handleDecrementStat=a.handleDecrementStat.bind(Object(p.a)(Object(p.a)(a))),a.handleLevelUp=a.handleLevelUp.bind(Object(p.a)(Object(p.a)(a))),a.handleReset=a.handleReset.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleLevelUp",value:function(){this.setState(function(e){return{level:e.level+1,spCount:e.spCount+3}})}},{key:"handleReset",value:function(){this.setState(function(){return{level:1,stats:{str:0,int:0,agi:0,vit:0},spCount:0}})}},{key:"handleIncrementStat",value:function(e){this.setState(function(t){var a=t.stats,n=t.spCount;if(!(n<1)){var l=Object.assign({},a);return l[e]=l[e]+1,{stats:l,spCount:n-1}}})}},{key:"handleDecrementStat",value:function(e){this.setState(function(t){var a=t.stats,n=t.spCount,l=Object.assign({},a);if(l[e]=l[e]-1,!(l[e]<0))return{stats:l,spCount:n+1}})}},{key:"render",value:function(){var e=this.state,t=e.level,a=e.stats,n=e.spCount;return l.a.createElement("div",{className:"container"},l.a.createElement(h,{level:t,spCount:n,onLevelUp:this.handleLevelUp,onReset:this.handleReset}),l.a.createElement("div",{className:"content"},l.a.createElement(v,{stats:a,onIncrementStat:this.handleIncrementStat,onDecrementStat:this.handleDecrementStat}),l.a.createElement(d,{stats:a})),l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"Created by:"," ",l.a.createElement("a",{href:"https://twitter.com/rmasianjr",target:"_blank",rel:"noopener noreferrer"},"Ricardo Masian Jr.")),l.a.createElement("p",null,"Link to"," ",l.a.createElement("a",{href:"https://github.com/rmasianjr/react-stat-calculator",target:"_blank",rel:"noopener noreferrer"},"Repo"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.ed510a62.chunk.js.map