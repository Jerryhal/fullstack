(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(39)},19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),u=n.n(a),o=n(11),c=n.n(o),l=function(e){var t=e.persons,n=e.removeContact;return u.a.createElement(u.a.Fragment,null,u.a.createElement("ul",null,t&&t.length&&t.length>0?t.map(function(e,t){return u.a.createElement("li",null,e.name," ",e.number," ",u.a.createElement("button",{onClick:function(){return n(e)}},"poista"))}):"no rows"))},i=function(e){var t=e.message;if(t){if(t.success)return u.a.createElement("div",{style:{borderStyle:"solid",borderColor:"green",backgroundColor:"light-green"}},t.success);if(t.error)return u.a.createElement("div",{style:{borderStyle:"solid",borderColor:"red",backgroundColor:"light-pink"}},t.error)}return""},m=function(e){var t=e.filterContacts;return u.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4 ",u.a.createElement("input",{onChange:t}))},s=function(e){var t=e.addContact,n=e.nameHandler,r=e.numberHandler;return u.a.createElement("form",{onSubmit:t},u.a.createElement("div",null,"nimi: ",u.a.createElement("input",{onChange:n})),u.a.createElement("div",null,"numero: ",u.a.createElement("input",{onChange:r})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},d=function(e){var t=e.filterContacts,n=e.addContact,r=e.nameHandler,a=e.numberHandler,o=e.removeContact,c=e.filteredContacts,d=e.message;return u.a.createElement("div",null,u.a.createElement(i,{message:d}),u.a.createElement("h2",null,"Puhelinluettelo"),u.a.createElement(m,{filterContacts:t}),u.a.createElement(s,{addContact:n,nameHandler:r,numberHandler:a}),u.a.createElement("h2",null,"Numerot"),u.a.createElement(l,{persons:c,removeContact:o}))},f=(n(19),n(12)),b=n(3),g=n.n(b),v="https://aqueous-sea-90201.herokuapp.com/api/persons";c.a.render(u.a.createElement(function(){Object(a.useEffect)(function(){g.a.get(v).then(function(e){return e.data}).then(function(e){y(e)})},[]);var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(r.a)(c,2),i=l[0],m=l[1],s=Object(a.useState)(""),b=Object(r.a)(s,2),E=b[0],h=b[1],p=Object(a.useState)({}),C=Object(r.a)(p,2),j=C[0],O=C[1],H=Object(a.useState)(n),S=Object(r.a)(H,2),k=S[0],w=S[1],y=function(e){o(e),w(e)};return u.a.createElement(d,{filterContacts:function(e){return w(n.filter(function(t){return t.name.substring(0,e.target.value.length)===e.target.value}))},addContact:function(e){e.preventDefault();var t,r={name:i,number:E},a=n.find(function(e){return e.name===r.name});a?a&&r.number&&r.number.length>0?function(e,t){var n=Object(f.a)({},e,{id:t});return g.a.put(v+"/"+n.id,n).then(function(e){return e.data}).catch(function(e){return e})}(r,a.id).then(function(){return y(n.map(function(e){return e.id!==a.id?e:r}))}):alert("".concat(i," on jo luettelossa")):(t=r,g.a.post(v,t).then(function(e){return e.data})).then(function(e){y(n.concat(e)),setTimeout(function(){O(null)},5e3),O({success:"List\xe4ttiin "+e.name})}).catch(function(e){setTimeout(function(){O(null)},5e3),O({error:e.response.data.error.errors.name.message})})},nameHandler:function(e){return m(e.target.value)},numberHandler:function(e){return h(e.target.value)},filteredContacts:k,message:j,removeContact:function(e){(function(e){return g.a.delete(v+"/"+e.id).then(function(e){return e.data})})(e).then(function(){y(n.filter(function(t){return t.id!==e.id}))})}})},null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e3f54b55.chunk.js.map