(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/ema.31ef00bb.png"},21:function(e,a,t){e.exports=t(33)},26:function(e,a,t){},31:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(17),i=t.n(r),l=(t(26),t(3)),c=t(4),o=t(6),m=t(5),p=t(7),u=t(36),d=t(2),h=t(37),v=t(35),g=t(38),f=t(12),j=t.n(f),b=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={bio:"",defaultBio:"Welcome, I am Emmanuel Alabi. You can call me ea. I am a fullstack Solution Provider(Software Engineer) with years of experience providing full stack web Solutions using Javascript and Nodejs. I follow TDD principles while programming and ensure that my code is properly optimised. I have a good eye for design and I can convert a design/mockup into an application. I am open to new ideas and a quick learner. I am a team player with great stakeholder management skills. If I am not coding, I am surfing the internet for Innovative Ideas, spending time with family, drawing or watching Sci Fi movies at play speed of 2. I also like passing down what I have learnt over time through direct mentorship. Master the logic, for languages are tools"},t.writeBio=t.writeBio.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("displayed");Date.now-e>864e5||null===e?(this.writeBio(),window.localStorage.setItem("displayed",Date.now())):this.setState({bio:this.state.defaultBio})}},{key:"writeBio",value:function(){var e=this,a=this.state.defaultBio,t=0,n=setInterval(function(){var s=e.state.bio;if(s+=a[t],!a[t])return clearInterval(n);e.setState({bio:s}),t+=1},100)}},{key:"render",value:function(){return s.a.createElement("div",{className:"profile"},s.a.createElement("div",{className:"text"},this.state.bio))}}]),a}(n.Component),E=Object(g.a)(b),y=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={bio:"",defaultBio:"Welcome, I am Emmanuel Alabi. You can call me ea. I am a fullstack Solution Provider(Software Engineer) with years of experience providing full stack web Solutions using Javascript and Nodejs. I follow TDD principles while programming and ensure that my code is properly optimised. I have a good eye for design and I can convert a design/mockup into an application. I am open to new ideas and a quick learner. I am a team player with great stakeholder management skills. If I am not coding, I am surfing the internet for Innovative Ideas, spending time with family, drawing or watching Sci Fi movies at play speed of 2. I also like passing down what I have learnt over time through direct mentorship. Master the logic, for languages are tools"},t.writeBio=t.writeBio.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.writeBio()}},{key:"writeBio",value:function(){var e=this,a=this.state.defaultBio,t=0,n=setInterval(function(){var s=e.state.bio;if(s+=a[t],!a[t])return clearInterval(n);e.setState({bio:s}),t+=1},100)}},{key:"render",value:function(){return s.a.createElement("div",{className:"profile"},s.a.createElement("span",{className:"heading"},"Blog"),s.a.createElement("div",{className:"text"},this.state.bio))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={bio:"",defaultBio:"Welcome, I am Emmanuel Alabi. You can call me ea. I am a fullstack Solution Provider(Software Engineer) with years of experience providing full stack web Solutions using Javascript and Nodejs. I follow TDD principles while programming and ensure that my code is properly optimised. I have a good eye for design and I can convert a design/mockup into an application. I am open to new ideas and a quick learner. I am a team player with great stakeholder management skills. If I am not coding, I am surfing the internet for Innovative Ideas, spending time with family, drawing or watching Sci Fi movies at play speed of 2. I also like passing down what I have learnt over time through direct mentorship. Master the logic, for languages are tools"},t.writeBio=t.writeBio.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.writeBio()}},{key:"writeBio",value:function(){var e=this,a=this.state.defaultBio,t=0,n=setInterval(function(){var s=e.state.bio;if(s+=a[t],!a[t])return clearInterval(n);e.setState({bio:s}),t+=1},100)}},{key:"render",value:function(){return s.a.createElement("div",{className:"profile"},s.a.createElement("div",{className:"text"},this.state.bio))}}]),a}(n.Component),k=t(20),O=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={email:"",firstname:"",lastname:"",message:""},t.onChange=t.onChange.bind(Object(d.a)(Object(d.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"onChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state)}},{key:"render",value:function(){var e=this.state,a=e.firstname,t=e.lastname,n=e.message,r=e.email;return s.a.createElement("div",{className:"profile"},s.a.createElement("div",{className:"text"},s.a.createElement("div",null,s.a.createElement("span",{className:"form-header"},"Send a Mail"),s.a.createElement("div",{className:"form-wrapper"},s.a.createElement("form",{className:"form",id:"gform",method:"POST",action:"https://script.google.com/macros/s/AKfycbzrLc48y0iVAmaHfp8LXE_3-sVECIR7PJtgg5sadQ/exec"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstname",value:a,onChange:this.onChange,required:!0}),s.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lastname",value:t,onChange:this.onChange,required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"email",placeholder:"Email",name:"email",value:r,onChange:this.onChange,required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",{placeholder:"Enter your message",name:"message",value:n,onChange:this.onChange,required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",value:"Send"}))))),s.a.createElement("div",null,s.a.createElement("div",{className:"connect-links"},s.a.createElement("span",{className:"link"},s.a.createElement("a",{href:"https://www.facebook.com/ema.evidence",target:"new"},"Facebook"),s.a.createElement("span",{className:"selected indicator"})),s.a.createElement("span",{className:"link"},s.a.createElement("a",{href:"https://www.linkedin.com/in/emmanuel-alabi-b0b98469/",target:"new"},"LinkedIn"),s.a.createElement("span",{className:"selected indicator"})),s.a.createElement("span",{className:"link"},s.a.createElement("a",{href:"https://twitter.com/EMMANUELALABI",target:"new"},"Twitter"),s.a.createElement("span",{className:"selected indicator"})),s.a.createElement("span",{className:"link"},s.a.createElement("a",{href:"https://github.com/EmaEvidence",target:"new"},"Github"),s.a.createElement("span",{className:"selected indicator"})),s.a.createElement("span",{className:"link"},s.a.createElement("a",{href:"https://medium.com/@emaevidence",target:"new"},"Blogs"),s.a.createElement("span",{className:"selected indicator"}))),s.a.createElement("span",{className:"email"},"Email: emmanuelalabi563@gmail.com"))))}}]),a}(n.Component),N=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={bio:"",defaultBio:"Welcome, I am Emmanuel Alabi. You can call me ea. I am a fullstack Solution Provider(Software Engineer) with years of experience providing full stack web Solutions using Javascript and Nodejs. I follow TDD principles while programming and ensure that my code is properly optimised. I have a good eye for design and I can convert a design/mockup into an application. I am open to new ideas and a quick learner. I am a team player with great stakeholder management skills. If I am not coding, I am surfing the internet for Innovative Ideas, spending time with family, drawing or watching Sci Fi movies at play speed of 2. I also like passing down what I have learnt over time through direct mentorship. Master the logic, for languages are tools"},t.writeBio=t.writeBio.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.writeBio()}},{key:"writeBio",value:function(){var e=this,a=this.state.defaultBio,t=0,n=setInterval(function(){var s=e.state.bio;if(s+=a[t],!a[t])return clearInterval(n);e.setState({bio:s}),t+=1},100)}},{key:"render",value:function(){return s.a.createElement("div",{className:"profile"},s.a.createElement("span",{className:"heading"},"Mentorship"),s.a.createElement("div",{className:"text"},this.state.bio))}}]),a}(n.Component),S=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={display:"none"},t.showOverlay=t.showOverlay.bind(Object(d.a)(Object(d.a)(t))),t.hideOverlay=t.hideOverlay.bind(Object(d.a)(Object(d.a)(t))),t.loadTech=t.loadTech.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"showOverlay",value:function(){this.setState({display:"flex"})}},{key:"hideOverlay",value:function(){this.setState({display:"none"})}},{key:"loadTech",value:function(e){return e.map(function(e){return s.a.createElement("span",{key:e,className:"tech-stack"},e)})}},{key:"render",value:function(){var e=this.props.project,a=this.state.display;return s.a.createElement("div",{className:"skill",onMouseOver:this.showOverlay,onMouseLeave:this.hideOverlay},s.a.createElement("div",{className:"overlay animate-skill",style:{display:a}},s.a.createElement("span",{className:"proficiency tech-container"},s.a.createElement("span",{className:"techs"},this.loadTech(e.technologies))),s.a.createElement("span",{className:"experience url"},s.a.createElement("span",{className:"value"},s.a.createElement("a",{href:e.url,target:"new"},e.url))),s.a.createElement("span",{className:"experience url"},s.a.createElement("span",{className:"value"},s.a.createElement("a",{href:e.repo,target:"new"},e.repo)))),s.a.createElement("h1",{className:"project-logo"},e.name[0].toUpperCase()),s.a.createElement("div",{className:"details"},s.a.createElement("span",null,e.name)))}}]),a}(n.Component),x=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={projects:[{name:"Alecia",technologies:["Reactjs","Redux","AWS Lambda","HTML","JavaScript","CSS"],tagline:"shoppable entertainment",url:"https://www.alecia.com",repo:"Third Party App"},{name:"Dashboards",technologies:["Vuejs","Vuex","HTML","JavaScript","CSS"],tagline:"Dashboard management system",url:"https://vuedashboad.herokuapp.com/",repo:"Private Repo"},{name:"PostIt(React)",technologies:["Nodejs","Postgresql","Expressjs","Jasmine","Jest","Reactjs","Redux","HTML","JavaScript","CSS"],tagline:"Whatsapp clone",url:"http://postaa.herokuapp.com/",repo:"https://github.com/EmaEvidence/PostIt"},{name:"PostIt(Vue)",technologies:["Nodejs","Postgresql","Expressjs","Jasmine","Jest","Vuejs","Vuex","HTML","JavaScript","CSS"],tagline:"Whatsapp clone",url:"https://vuepostit.herokuapp.com",repo:"https://github.com/EmaEvidence/PostIt_Frontend_vuejs"},{name:"fUpper",technologies:["Nodejs","Postgresql","Expressjs","Jasmine","Jest","Reactjs","HTML","JavaScript","CSS"],tagline:"Attendance management system",url:"https://fupper.herokuapp.com",repo:"Private Repo"},{name:"ART",technologies:["Reactjs","Redux","HTML","JavaScript","CSS","Jest"],tagline:"Asset Manager",url:"Private App",repo:"Third Party App"},{name:"CALM",technologies:["Reactjs","Redux","HTML","TypeScript","CSS","SCSS","Jest"],tagline:"Learning Mapper",url:"Archived",repo:"Third Party App"},{name:"Resolutionz",technologies:["Meteorjs","GraphQL","Reactjs","Appollo","HTML","JavaScript","CSS","MongoDB"],tagline:"Resolution management system",url:"https://resolutionzapp.herokuapp.com/",repo:"https://github.com/EmaEvidence/ApoMetGraReact"},{name:"Ideabox",src:"",technologies:["Nodejs","Expressjs","HTML","JavaScript","CSS"],tagline:"Idea collection app",url:"https://bc21-ideabox.herokuapp.com/passreset",repo:"https://github.com/EmaEvidence/bc-21-ideabox"},{name:"SMS Manager API",technologies:["Nodejs","Postgresql","Expressjs","Jasmine"],tagline:"SMS Management App",url:"Not Hosted",repo:"https://github.com/EmaEvidence/sms_manager"},{name:"Phone Number Generator",technologies:["Nodejs","Postgresql","Expressjs","Jasmine","Jest","Reactjs","HTML","JavaScript","CSS"],tagline:"Phone Number Generator",url:"Not Hosted",repo:"https://github.com/EmaEvidence/pNg"},{name:"Inverted Index API",technologies:["Nodejs","Expressjs","ES6","Jasmine"],tagline:"Elastic Search implementation",url:"https://indexaa2.herokuapp.com/",repo:"https://github.com/EmaEvidence/inverted-index-api"},{name:"PSM API",technologies:["Nodejs","Postgresql","Expressjs","Jasmine"],tagline:"Population Manager",url:"Not Hosted",repo:"https://github.com/EmaEvidence/PSM"},{name:"Edozzier",technologies:["PHP","MySQL","HTML","JavaScript","CSS"],tagline:"school management system",url:"https://edozzier.com",repo:"Third Party App"}]},t.loadProjects=t.loadProjects.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"loadProjects",value:function(){return this.state.projects.map(function(e){return s.a.createElement(S,{key:e.name,project:e})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"profile"},s.a.createElement("div",{className:"text skills"},this.loadProjects()))}}]),a}(n.Component),I=Object(g.a)(x),M=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={display:"none"},t.showOverlay=t.showOverlay.bind(Object(d.a)(Object(d.a)(t))),t.hideOverlay=t.hideOverlay.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"showOverlay",value:function(){this.setState({display:"flex"})}},{key:"hideOverlay",value:function(){this.setState({display:"none"})}},{key:"render",value:function(){var e=this.props.skill,a=this.state.display;return s.a.createElement("div",{className:"skill",onMouseOver:this.showOverlay,onMouseLeave:this.hideOverlay},s.a.createElement("div",{className:"overlay animate-skill",style:{display:a}},s.a.createElement("span",{className:"proficiency"},s.a.createElement("span",{className:"title"},"Proficiency: \xa0"),s.a.createElement("span",{className:"value"},e.level)),s.a.createElement("span",{className:"experience"},s.a.createElement("span",{className:"title"},"Years of Experience: "),s.a.createElement("span",{className:"value"},e.experience)),s.a.createElement("span",{className:"projects"},s.a.createElement("span",{className:"title"},"Completed Projects: "),s.a.createElement("span",{className:"value"},e.projects))),s.a.createElement("div",{className:"img"},s.a.createElement("img",{src:e.src||j.a,alt:e.name})),s.a.createElement("div",{className:"details"},s.a.createElement("span",null,e.name)))}}]),a}(n.Component),P=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={skills:[{name:"javascript",level:"expert",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/JScript_mzwyx2.png",projects:14},{name:"node",level:"expert",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/images_2_oukptv.png",projects:9},{name:"expressjs",level:"expert",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/nodejs-expressjs_qfbouv.jpg",projects:9},{name:"react and Redux",level:"expert",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/react_lkvpq6.png",projects:7},{name:"Meteor",level:"proficient",experience:2,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546955345/logo-meteor_rp3glq.png",projects:1},{name:"vuejs with vuex",level:"expert",experience:2,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/1200px-Vue.js_Logo_2.svg_oh7kk7.png",projects:2},{name:"PHP",level:"proficient",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/php_mlaodn.png",projects:1},{name:"GraphQL",level:"proficient",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/graphql_j9cpxw.png",projects:1},{name:"wordpress",level:"expert",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954086/WordPress_blue_logo.svg_rqumx4.png",projects:4},{name:"TDD",level:"expert",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954086/TDD_ikupjm.png",projects:8},{name:"Apollo",level:"proficient",experience:1,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954145/apollo_nopumb.svg",projects:1},{name:"jQuery",level:"proficient",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/jquery_hi3cmz.gif",projects:1},{name:"MySQL",level:"expert",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/MySQL_nyzxwl.png",projects:1},{name:"Postgresql",level:"expert",experience:3,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546955319/1200px-Postgresql_elephant.svg_l7fhmh.png",projects:3},{name:"MongoDB",level:"expert",experience:2,src:"https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/mongodb_kdeg9m.jpg",projects:1}]},t.loadSkills=t.loadSkills.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"loadSkills",value:function(){return this.state.skills.map(function(e,a){return s.a.createElement(M,{key:"".concat(e).concat(a),skill:e})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"profile"},s.a.createElement("div",{className:"text skills"},this.loadSkills()))}}]),a}(n.Component),C=t(34),B=function(e){var a=e.location.pathname;return s.a.createElement(n.Fragment,null,s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("span",null,s.a.createElement(C.a,{to:"/"},"Profile",s.a.createElement("span",{className:"/"===a?"selected indicator":"indicator"}))),s.a.createElement("span",null,s.a.createElement(C.a,{to:"/skills"},"Skills",s.a.createElement("span",{className:"/skills"===a?"selected indicator":"indicator"}))),s.a.createElement("span",null,s.a.createElement(C.a,{to:"/projects"},"Projects",s.a.createElement("span",{className:"/projects"===a?"selected indicator":"indicator"}))),s.a.createElement("span",null,s.a.createElement(C.a,{to:"/connect"},"Connect",s.a.createElement("span",{className:"/connect"===a?"selected indicator":"indicator"})))))},J=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={menuState:!1},t.toggleMenu=t.toggleMenu.bind(Object(d.a)(Object(d.a)(t))),t.closeMenu=t.closeMenu.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){e.setState({menuState:!1})})}},{key:"toggleMenu",value:function(){this.setState({menuState:!this.state.menuState})}},{key:"closeMenu",value:function(){this.setState({menuState:!1})}},{key:"render",value:function(){var e=this.state.menuState?"block":"none";return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"left"},s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:j.a,alt:""}),s.a.createElement("div",{className:"name"},s.a.createElement("span",{className:"handle"},"ea"),s.a.createElement("span",{className:"title"},"Fullstack Software Engineer"),s.a.createElement("span",{className:"tagline"},s.a.createElement("i",null,"making products Users love")))),s.a.createElement("div",{className:"name"},s.a.createElement("span",{className:"handle"},"ea"),s.a.createElement("span",{className:"title"},"Fullstack Software Engineer"),s.a.createElement("span",{className:"tagline"},s.a.createElement("i",null,"making products Users love"))),s.a.createElement("hr",null),s.a.createElement("div",{className:"links"},s.a.createElement(B,this.props)),s.a.createElement("div",{className:"hamburg",onClick:this.toggleMenu},"none"===e?s.a.createElement("i",{className:"fas fa-bars"}):s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"mobile-links",onMouseLeave:this.closeMenu,style:{display:e}},s.a.createElement(B,this.props))),s.a.createElement("div",{className:"right"},s.a.createElement(h.a,null,s.a.createElement(v.a,{path:"/",exact:!0,component:E}),s.a.createElement(v.a,{path:"/blogs",exact:!0,component:y}),s.a.createElement(v.a,{path:"/connect",exact:!0,component:O}),s.a.createElement(v.a,{path:"/links",exact:!0,component:w}),s.a.createElement(v.a,{path:"/mentorship",exact:!0,component:N}),s.a.createElement(v.a,{path:"/projects",exact:!0,component:I}),s.a.createElement(v.a,{path:"/skills",exact:!0,component:P}))))}}]),a}(n.Component),L=Object(g.a)(J),A=(t(31),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(u.a,{basename:"/profile"},s.a.createElement("div",{className:"App"},s.a.createElement(L,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.f4b5d1da.chunk.js.map