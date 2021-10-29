(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[855],{3065:function(e,t,a){"use strict";a.r(t),a.d(t,{contentTitle:function(){return b},default:function(){return x},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return y}});var r=a(4034),n=a(9973),i=a(7294),o=a(3905),l=a(2389),s=a(9443);var c=function(){var e=(0,i.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(3039),p=a(6010),d="tabItem_1uMI";function m(e){var t,a,r,n=e.lazy,o=e.block,l=e.defaultValue,s=e.values,m=e.groupId,h=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=s?s:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===l?l:null!=(t=null!=l?l:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=c(),y=k.tabGroupChoices,w=k.setTabGroupChoices,x=(0,i.useState)(b),N=x[0],T=x[1],I=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=y[m];null!=A&&A!==N&&f.some((function(e){return e.value===A}))&&T(A)}var C=function(e){var t=e.currentTarget,a=I.indexOf(t),r=f[a].value;r!==N&&(E(t),T(r),null!=m&&w(m,r))},M=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;a=I[r]||I[0];break;case"ArrowLeft":var n=I.indexOf(e.currentTarget)-1;a=I[n]||I[I.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},h)},f.map((function(e){var t=e.value,a=e.label;return i.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":N===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:M,onFocus:C,onClick:C},null!=a?a:t)}))),n?(0,i.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function h(e){var t=(0,l.Z)();return i.createElement(m,(0,r.Z)({key:String(t)},e))}var v=function(e){var t=e.children,a=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:a,className:r},t)},f=["components"],g={id:"tutorials-overview",title:"Tutorials Overview",sidebar_position:1},b=void 0,k={unversionedId:"react-aptor/tutorials-overview",id:"react-aptor/tutorials-overview",isDocsHomePage:!1,title:"Tutorials Overview",description:"The minimal first-class API connector for react",source:"@site/docs/react-aptor/tutorials-overview.mdx",sourceDirName:"react-aptor",slug:"/react-aptor/tutorials-overview",permalink:"/docs/react-aptor/tutorials-overview",editUrl:"https://github.com/ahimico/ahimico.github.io/edit/master/website/docs/react-aptor/tutorials-overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"tutorials-overview",title:"Tutorials Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/docs/intro"},next:{title:"Quick Start",permalink:"/docs/react-aptor/quick-start"}},y=[{value:"Why",id:"why",children:[],level:2},{value:"Other concern on react-* packages:",id:"other-concern-on-react--packages",children:[],level:2},{value:"Features",id:"features",children:[],level:2},{value:"installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Integration examples",id:"integration-examples",children:[],level:2}],w={toc:y};function x(e){var t=e.components,a=(0,n.Z)(e,f);return(0,o.kt)("wrapper",(0,r.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The minimal first-class API connector for react"),(0,o.kt)("h2",{id:"why"},"Why"),(0,o.kt)("p",null,"Most packages are developed separately in JavaScript (typescript), increasing generality of being library/framework agnostic."),(0,o.kt)("p",null,"Connecting vanilla third parties to react is not a routine task especially those that need to change the DOM or to trigger render phase. On the other hand, these packages might be developed by different teams, hence development progress can be one step behind of the original or even be terminated at any time. Also, wrong abstraction or bad design patterns may interrupt the progress of these ",(0,o.kt)("inlineCode",{parentName:"p"},"react-*")," wrapper packages."),(0,o.kt)("h2",{id:"other-concern-on-react--packages"},"Other concern on react-","*"," packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Finding DOM nodes by ReactDOM.findDOMNode"),(0,o.kt)("li",{parentName:"ul"},"Extensively usage of memorization to improve performance or prevent extra re-renders"),(0,o.kt)("li",{parentName:"ul"},"Other duplication layer for all API definition in react that increase the project size"),(0,o.kt)("li",{parentName:"ul"},"Rely on a global scope (e.g. window) for internal settings (making it impossible to have more than one instance)"),(0,o.kt)("li",{parentName:"ul"},"backward compatible updates of the base package need another update for react-","*"," package")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"react-aptor \ud83d\udcaa")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We strive to solve all mentioned problems at once and for all."))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)(h,{defaultValue:"small",values:[{label:"Small",value:"small"},{label:"Manageable",value:"manageable"},{label:"React-ish",value:"react"},{label:"Simple",value:"simple"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},(0,o.kt)(v,{value:"small",mdxType:"TabItem"},"Zero-dependency with less than 1 kilobyte in size (327 B \ud83d\ude31)"," ",(0,o.kt)("a",{href:"https://bundlephobia.com/result?p=react-aptor"},"react-aptor")),(0,o.kt)(v,{value:"manageable",mdxType:"TabItem"},"Your used/defined APIs are entirely under your control. Make it possible to define a slice of APIs which you are surely going to use."),(0,o.kt)(v,{value:"react",mdxType:"TabItem"},"Developed with lots of care, try to be zero-anti-pattern in react."),(0,o.kt)(v,{value:"simple",mdxType:"TabItem"},"It's as simple as that. \ud83d\udc9b"),(0,o.kt)(v,{value:"typescript",mdxType:"TabItem"},"Feel free to contribute or suggest any changes in"," ",(0,o.kt)("a",{href:"https://github.com/amirHossein-Ebrahimi/react-aptor/issues"},"issues page"))),(0,o.kt)("h2",{id:"installation"},"installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Yarn\nyarn add react-aptor\n\n# Npm\nnpm install react-aptor\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="connector.jsx"',title:'"connector.jsx"'},"import useAptor from 'react-aptor'\nimport AudioPlayer from 'imaginary-audio-player'\n\nconst Connector = React.forwardRef((props, ref) => {\n  const aptorRef = useAptor(ref, {\n    instantiate: div => new AudioPlayer(div, props.sound),\n\n    getAPI: player => ({\n      toggle: () => {\n        if (!player) return\n\n        if (player.isPlaying) player.pause()\n        else player.play()\n      },\n    }),\n  })\n\n  return <div ref={aptorRef} />\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="consumer.jsx"',title:'"consumer.jsx"'},'const App = () => {\n  const ref = React.useRef()\n\n  return (\n    <div>\n      <Connector ref={ref} sound="imaginary sound" />\n      <button onClick={ref.current?.toggle}>toggle audio</button>\n    </div>\n  )\n}\n')),(0,o.kt)("h2",{id:"integration-examples"},"Integration examples"),(0,o.kt)("a",{href:"https://codesandbox.io/s/react-aptor--fabric-hp50c",title:"codesandbox | fabric.js"},(0,o.kt)("img",{src:"https://i.stack.imgur.com/GLnt7.png",width:"150"})),(0,o.kt)("a",{href:"https://codesandbox.io/s/react-aptor--quill-iqwcd",title:"codesandbox | quill.js"},(0,o.kt)("img",{src:"https://i.stack.imgur.com/wVBVM.png",width:"150"})),(0,o.kt)("a",{href:"https://github.com/amirHossein-Ebrahimi/raptor-howler",title:"github | react-howler",style:{margin:10}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/amirHossein-Ebrahimi/raptor-howler/master/doc/assets/logo.svg",width:"150"})),(0,o.kt)("a",{href:"https://stackblitz.com/edit/react-aptor-rivejs",title:"stackblitz | rive.js"},(0,o.kt)("img",{src:"https://i.stack.imgur.com/SYdgf.png",width:"150"})),(0,o.kt)("a",{href:"https://codesandbox.io/s/react-aptor--howler-4o8t4",title:"codesandbox | howler.js"},(0,o.kt)("img",{src:"https://i.stack.imgur.com/bmvAc.png",width:"150",height:"150"})))}x.isMDXComponent=!0}}]);