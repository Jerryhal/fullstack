(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(39)},19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),u=n.n(r),c=n(11),o=n.n(c),l=function(e){var t=e.persons,n=e.removeContact;return u.a.createElement(u.a.Fragment,null,u.a.createElement("ul",null,t&&t.length&&t.length>0?t.map(function(e,t){return u.a.createElement("li",null,e.name," ",e.number," ",u.a.createElement("button",{onClick:function(){return n(e)}},"poista"))}):"no rows"))},i=function(e){var t=e.successMessage;return t?u.a.createElement("div",{style:{borderStyle:"solid",borderColor:"green",backgroundColor:"light-green"}},t):""},s=function(e){var t=e.filterContacts;return u.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4 ",u.a.createElement("input",{onChange:t}))},m=function(e){var t=e.addContact,n=e.nameHandler,a=e.numberHandler;return u.a.createElement("form",{onSubmit:t},u.a.createElement("div",null,"nimi: ",u.a.createElement("input",{onChange:n})),u.a.createElement("div",null,"numero: ",u.a.createElement("input",{onChange:a})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},d=function(e){var t=e.filterContacts,n=e.addContact,a=e.nameHandler,r=e.numberHandler,c=e.removeContact,o=e.filteredContacts,d=e.successMessage;return u.a.createElement("div",null,u.a.createElement(i,{successMessage:d}),u.a.createElement("h2",null,"Puhelinluettelo"),u.a.createElement(s,{filterContacts:t}),u.a.createElement(m,{addContact:n,nameHandler:a,numberHandler:r}),u.a.createElement("h2",null,"Numerot"),u.a.createElement(l,{persons:o,removeContact:c}))},f=(n(19),n(12)),b=n(3),v=n.n(b),E="http://localhost:3001/persons";o.a.render(u.a.createElement(function(){Object(r.useEffect)(function(){v.a.get(E).then(function(e){return e.data}).then(function(e){k(e)})},[]);var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),l=Object(a.a)(o,2),i=l[0],s=l[1],m=Object(r.useState)(""),b=Object(a.a)(m,2),g=b[0],h=b[1],p=Object(r.useState)(""),C=Object(a.a)(p,2),j=C[0],O=C[1],H=Object(r.useState)(n),w=Object(a.a)(H,2),S=w[0],y=w[1],k=function(e){c(e),y(e)};return u.a.createElement(d,{filterContacts:function(e){return y(n.filter(function(t){return t.name.substring(0,e.target.value.length)===e.target.value}))},addContact:function(e){e.preventDefault();var t,a={name:i,number:g},r=n.find(function(e){return e.name===a.name});r?r&&a.number&&a.number.length>0?function(e,t){var n=Object(f.a)({},e,{id:t});return v.a.put(E+"/"+n.id,n).then(function(e){return e.data})}(a,r.id).then(function(e){return k(n.map(function(e){return e.id!==r.id?e:a}))}):alert("".concat(i," on jo luettelossa")):(t=a,v.a.post(E,t).then(function(e){return e.data})).then(function(e){k(n.concat(e)),setTimeout(function(){O(null)},5e3),O("List\xe4ttiin "+e.name)})},nameHandler:function(e){return s(e.target.value)},numberHandler:function(e){return h(e.target.value)},filteredContacts:S,successMessage:j,removeContact:function(e){(function(e){return v.a.delete(E+"/"+e.id).then(function(e){return e.data})})(e).then(function(){k(n.filter(function(t){return t.id!==e.id}))})}})},null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.894ad582.chunk.js.map