(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),s=n.n(o),c=n(7),i=n.n(c),u=n(11),l=n(3),p=n(4),h=n(6),f=n(5),m=(n(35),n(36),n(37),n(28)),N=n.n(m),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Notes-Note"},r.a.createElement("span",{className:"Notes-Note-Delete",onClick:this.props.onDelete},"\xd7"),r.a.createElement("span",{className:"Notes-Note-Text"}," ",r.a.createElement(N.a,{source:this.props.text})))}}]),n}(a.Component),d=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onTextChange=function(e){a.setState({text:e.target.value})},a.onReset=function(){a.setState({text:""},(function(){a.inputRef.current.focus()}))},a.onSave=function(){a.props.onCreate(a.state.text),a.onReset()},a.state={text:""},a.inputRef=r.a.createRef(),a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Notes-Create-Wrapper"},r.a.createElement("div",{className:"Notes-Create"},r.a.createElement("div",{className:"Notes-Create__Header-Wrapper"},"  ",r.a.createElement("h1",{className:"Notes-Create__header"},"\u0417\u0430\u043c\u0435\u0442\u043a\u0438")),r.a.createElement("textarea",{ref:this.inputRef,className:"Notes-Create-Input",value:this.state.text,onChange:this.onTextChange}),"  ")," ",r.a.createElement("div",{className:"Notes-Create-Buttons"},r.a.createElement("button",{className:"Notes-Create-Button",onClick:this.onSave}," \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c ")," ",r.a.createElement("button",{className:"Notes-Create-Button Notes-Create-Button_reset",onClick:this.onReset}," \u0421\u0431\u0440\u043e\u0441 "),"     "))}}]),n}(a.Component),b=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Notes"},r.a.createElement(d,{onCreate:this.props.onCreate}),r.a.createElement("hr",null),this.props.notes.map((function(t,n){return""!==t.trim()&&r.a.createElement(v,{text:t,key:n,onDelete:function(){return e.props.onDelete(n)}})}))," ")}}]),n}(a.Component),C=n(12),x=n.n(C),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={notes:[]},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.getNotes()}},{key:"getNotes",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,x.a.getJSON("./api/notes.json",(function(e){for(var n=0;n<e.length;n++)t.push(e[n])}));case 3:return e.next=5,this.setState({notes:t});case 5:console.log("notes.json:"),console.log(t);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onNoteDelete",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState((function(e){return{notes:(n=e.notes,a=t,n.slice(0,a).concat(n.slice(a+1)))};var n,a}));case 2:return n=JSON.stringify(this.state.notes),console.log(n),e.next=6,x.a.ajax({url:"./api/deleteNote.php",method:"POST",async:!1,data:{notes:n}});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onNoteCreate",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState((function(e){return{notes:[t].concat(e.notes)}}));case 2:return n=JSON.stringify(this.state.notes),console.log(n),e.next=6,x.a.ajax({url:"./api/saveNote.php",method:"POST",async:!1,data:{text:t,notes:n}});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(b,{notes:this.state.notes,onDelete:this.onNoteDelete.bind(this),onCreate:this.onNoteCreate.bind(this)})}}]),n}(a.Component),j=document.getElementById("root");s.a.render(r.a.createElement(O,null),j)},29:function(e,t,n){e.exports=n(122)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){}},[[29,1,2]]]);
//# sourceMappingURL=main.705149d1.chunk.js.map