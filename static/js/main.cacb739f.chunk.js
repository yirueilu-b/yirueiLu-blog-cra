(this.webpackJsonpreact_blog=this.webpackJsonpreact_blog||[]).push([[0],{111:function(e,t,a){e.exports=a(393)},116:function(e,t,a){},117:function(e,t,a){},390:function(e,t,a){var n={"./testPost.md":391,"./utterancesComment.md":392};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=390},391:function(e,t,a){e.exports=a.p+"static/media/testPost.6fd37aaf.md"},392:function(e,t,a){e.exports=a.p+"static/media/utterancesComment.72077d3b.md"},393:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),l=(a(116),a(35)),c=a(36),s=a(53),m=a(41),d=a(40),u=(a(117),a(455)),p=a(445),g=a(5),h=a(437),b=a(454),f=a(33),y=a(12),v=a(436),E=a(50),k=a(435),x=a(58),w=a.n(x),_=a(59),j=a.n(_),O=a(459),B=a(439);function L(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(k.a,{color:"inherit",href:"https://material-ui.com/"},"Yiruei Lu")," ",(new Date).getFullYear(),".")}var C=Object(v.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0),textAlign:{alignment:"center"}},iconButton1:{marginLeft:-12},iconButton2:{}}}));function S(e){var t=C();return r.a.createElement("footer",{className:t.footer},r.a.createElement(h.a,{maxWidth:"sm"},r.a.createElement(O.a,{title:"LinkedIn"},r.a.createElement(B.a,{className:t.iconButton1,edge:"end",color:"inherit",href:"https://www.linkedin.com/in/a02496104/",target:"_blank"},r.a.createElement(w.a,null))),r.a.createElement(O.a,{title:"Github"},r.a.createElement(B.a,{className:t.iconButton2,edge:"end",color:"inherit",href:"https://github.com/yirueilu-b",target:"_blank"},r.a.createElement(j.a,null))),r.a.createElement(L,null)))}var N=a(21),A=a(446),T=a(447),M=a(443),F=a(449),D=a(101),W=a.n(D),I=a(444),H=a(460),R=a(99),P=a.n(R),z=a(100),q=a.n(z),U=a(14),G=a(62),Y=a(4),J=a(456),K=a(440),Q=a(461),V=a(441),X=a(442),$=a(98),Z=a.n($),ee=a(95),te=a.n(ee),ae=a(96),ne=a.n(ae),re=a(97),oe=a.n(re),ie=Object(v.a)((function(e){return{list:{width:264,marginTop:"30vh"},fullList:{width:"auto"},iconButton1:{marginRight:e.spacing(0)}}}));function le(){var e,t=ie(),a=r.a.useState({left:!1}),n=Object(G.a)(a,2),o=n[0],i=n[1],l={Blog:{icon:r.a.createElement(te.a,null),link:"/blog"},About:{icon:r.a.createElement(ne.a,null),link:"/about"},Category:{icon:r.a.createElement(oe.a,null),link:"/category"}},c=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&i(Object(U.a)(Object(U.a)({},o),{},Object(N.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,{key:"left"},r.a.createElement(O.a,{title:"Menu"},r.a.createElement(B.a,{onClick:c("left",!0),className:t.iconButton1,edge:"end",color:"default"},r.a.createElement(Z.a,null))),r.a.createElement(J.a,{anchor:"left",open:o.left,onClose:c("left",!1)},(e="left",r.a.createElement("div",{className:Object(Y.a)(t.list,Object(N.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:c(e,!1),onKeyDown:c(e,!1)},r.a.createElement(K.a,null,Object.keys(l).map((function(e,t){return r.a.createElement(Q.a,{button:!0,component:f.b,to:l[e].link,key:e},r.a.createElement(V.a,null,l[e].icon),r.a.createElement(X.a,{primary:e}))}))))))))}var ce=a(448),se=Object(v.a)((function(e){var t;return{root:(t={maxWidth:"100%"},Object(N.a)(t,e.breakpoints.up("sm"),{paddingLeft:"10%",paddingRight:"10%"}),Object(N.a)(t,"paddingLeft","0%"),Object(N.a)(t,"paddingRight","0%"),t),iconButton1:{marginRight:e.spacing(0),paddingLeft:0},iconButton2:{marginRight:0,marginLeft:"auto"}}})),me=Object(v.a)((function(e){return{root:{zIndex:100,position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function de(e){var t=e.children,a=e.window,n=Object(M.a)({target:a?a():void 0});return r.a.createElement(H.a,{appear:!1,direction:"down",in:!n},t)}function ue(e){var t=e.children,a=e.window,n=Object(M.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100}),o=me();return r.a.createElement(I.a,{in:n},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"end"})},role:"presentation",className:o.root},t))}function pe(e){var t=se();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(de,e,r.a.createElement(A.a,{className:t.root,color:"default"},r.a.createElement(T.a,null,r.a.createElement(le,null),r.a.createElement(ce.a,{component:f.b,to:"/blog"},r.a.createElement(E.a,{variant:"h6"},"YirueiLu's Blog")),r.a.createElement(O.a,{title:"light"===e.theme.palette.type?"Switch to dark theme":"Switch to light theme"},r.a.createElement(B.a,{className:t.iconButton2,edge:"end",color:"default",onClick:e.onToggleDark},"light"===e.theme.palette.type?r.a.createElement(P.a,null):r.a.createElement(q.a,null)))))),r.a.createElement(T.a,{id:"back-to-top-anchor"}),r.a.createElement(ue,e,r.a.createElement(F.a,{color:"default",size:"small","aria-label":"scroll back to top"},r.a.createElement(W.a,null))))}var ge=a(106),he=a(450),be="https://source.unsplash.com/random",fe=Object(v.a)((function(e){return{mainFeaturedPost:{paddingLeft:"10%",paddingRight:"10%",position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:287},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(N.a)({marginTop:e.spacing(2),textAlign:"left",position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0}),iconButton1:{marginLeft:-12},iconButton2:{}}}));function ye(e){var t=fe();return r.a.createElement(ge.a,{className:t.mainFeaturedPost,style:{backgroundImage:"url(".concat(be,")")}},r.a.createElement("img",{style:{display:"none"},src:be,alt:"imageText"}),r.a.createElement("div",{className:t.overlay}),r.a.createElement(he.a,{container:!0},r.a.createElement(he.a,{item:!0,md:6},r.a.createElement("div",{className:t.mainFeaturedPostContent},r.a.createElement(E.a,{gutterBottom:!0,variant:"h4",color:"inherit"},"YirueiLu's Blog"),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1",color:"inherit"},"Some notes about web applications, machine learning and coding."),r.a.createElement(O.a,{title:"LinkedIn"},r.a.createElement(B.a,{className:t.iconButton1,edge:"end",color:"inherit",href:"https://www.linkedin.com/in/a02496104/",target:"_blank"},r.a.createElement(w.a,null))),r.a.createElement(O.a,{title:"Github"},r.a.createElement(B.a,{className:t.iconButton2,edge:"end",color:"inherit",href:"https://github.com/yirueilu-b",target:"_blank"},r.a.createElement(j.a,null)))))))}var ve=a(451),Ee=a(453),ke=a(452),xe=a(458),we=a(102),_e=a.n(we),je=Object(v.a)((function(e){return{root:{height:"100%",display:"flex",backgroundColor:e.palette.background.default},card_image:{width:"40%"},card_info:{display:"flex",flexDirection:"column",borderBottom:"1px solid",borderBottomColor:e.palette.divider,width:"100%"},card_title:{textAlign:"left"},card_detail:{textAlign:"right"},read_button:{backgroundColor:"rgba(55, 168, 218, 1)",color:"white"}}}));function Oe(e){var t=je();return r.a.createElement(ve.a,{className:t.root,elevation:0,square:!0},r.a.createElement(xe.a,{xsDown:!0},r.a.createElement(ke.a,{className:t.card_image,image:e.image_url,title:""})),r.a.createElement("div",{className:t.card_info},r.a.createElement(Ee.a,{className:t.card_title},r.a.createElement(E.a,{gutterBottom:!0,variant:"h5"},e.post_title),r.a.createElement(E.a,{gutterBottom:!0,component:"h1",variant:"caption",color:"textSecondary"},e.post_datetime),r.a.createElement(E.a,{variant:"subtitle1",color:"textSecondary"},e.post_description)),r.a.createElement(Ee.a,{className:t.card_detail},r.a.createElement(ce.a,{component:f.b,className:t.read_button,size:"small",variant:"contained",endIcon:r.a.createElement(_e.a,{style:{fontSize:12,paddingLeft:1}}),to:e.post_link},"READ MORE"))))}var Be=a(60),Le=a(457),Ce=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handlePageChange=function(e,t){n.setState({current_page:t});var a=5*(t-1),r=a+5;n.setState({currentArticleList:n.state.articleList.slice(a,r)})},n.state={articleList:[],currentArticleList:[],current_page:1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(Be);this.setState({articleList:e});var t=5*(this.state.current_page-1),a=t+5;this.setState({currentArticleList:e.slice(t,a)})}},{key:"render",value:function(){for(var e=this.props.classes,t=[],a=0;a<this.state.currentArticleList.length;a++)t.push(r.a.createElement(he.a,{item:!0,xs:12,md:9,key:a,className:e.card_grid},r.a.createElement(Oe,{post_title:this.state.currentArticleList[a].article_title,post_datetime:this.state.currentArticleList[a].article_datetime,post_description:this.state.currentArticleList[a].article_description,image_url:this.state.currentArticleList[a].article_cover_image_url,post_link:"blog/"+this.state.currentArticleList[a].uuid})));return r.a.createElement(h.a,{className:e.root},r.a.createElement(he.a,{container:!0,spacing:0,direction:"row",alignItems:"flex-start",justify:"center"},t,r.a.createElement(he.a,{container:!0,item:!0,xs:12,md:9,justify:"center"},r.a.createElement(Le.a,{onChange:this.handlePageChange,defaultPage:1,className:e.pagination,count:Math.ceil(this.state.articleList.length/5),variant:"outlined",shape:"rounded",size:"small",hideNextButton:this.state.current_page===Math.ceil(this.state.articleList.length/5),hidePrevButton:1===this.state.current_page,showFirstButton:1!==this.state.current_page,showLastButton:this.state.current_page!==Math.ceil(this.state.articleList.length/5)}))))}}]),a}(r.a.Component),Se=Object(g.a)((function(e){return{root:{display:"flex",marginTop:"0vh",marginBottom:"10vh"},card_grid:{},pagination:{marginTop:24}}}))(Ce),Ne=(a(123),function(e){return{root:{flexGrow:1,minHeight:"90vh"},article_section:{marginTop:24,marginBottom:24,borderBottom:"3px solid ".concat(e.palette.divider)},comment_section:{marginTop:24,marginBottom:100},disqus:{width:"100%","& a":{color:"rgba(55, 168, 218, 1)"}},markdown_style:Object(U.a)(Object(U.a)({padding:e.spacing(3),maxWidth:"100%",textAlign:"left",wordWrap:"break-word","& img":{display:"block",marginTop:20,marginBottom:20},"& .katex":{display:"inline-block",maxWidth:"100%",overflowX:"scroll",verticalAlign:"middle"}},e.typography.body1),{},{color:e.palette.text.primary,wordBreak:"break-word","& .anchor-link":{marginTop:-96,position:"absolute"},"& pre":Object(N.a)({margin:e.spacing(3,"auto"),padding:e.spacing(2),direction:"ltr",overflow:"auto",WebkitOverflowScrolling:"touch",maxWidth:"calc(100vw - 32px)"},e.breakpoints.up("md"),{maxWidth:"calc(100vw - 32px - 16px)"}),"& p":{"& code":{direction:"ltr",lineHeight:1.4,display:"inline-block",fontFamily:'Consolas, "Liberation Mono", Menlo, Courier, monospace',WebkitFontSmoothing:"subpixel-antialiased",padding:"2px 6px",color:e.palette.text.primary,backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",fontSize:".85em"},'& code[class*="language-"]':{backgroundColor:"#272c34",color:"#fff",lineHeight:1.5}},"& pre code":{fontSize:"1em"},"& .token.operator":{background:"transparent"},"& h1":Object(U.a)(Object(U.a)({paddingBottom:"16px",borderBottom:"1px solid ".concat(e.palette.divider)},e.typography.h3),{},{fontSize:40,margin:"16px 0"}),"& .description":Object(U.a)(Object(U.a)({},e.typography.h5),{},{margin:"0 0 40px"}),"& h2":Object(U.a)(Object(U.a)({},e.typography.h4),{},{fontSize:30,margin:"40px 0 16px"}),"& h3":Object(U.a)(Object(U.a)({},e.typography.h5),{},{margin:"40px 0 16px"}),"& h4":Object(U.a)(Object(U.a)({},e.typography.h6),{},{margin:"32px 0 16px"}),"& h5":Object(U.a)(Object(U.a)({},e.typography.subtitle2),{},{margin:"32px 0 16px"}),"& p, & ul, & ol":{marginTop:0,marginBottom:16},"& ul":{paddingLeft:30},"& h1, & h2, & h3, & h4, & h5, & h6":{fontWeight:e.typography.fontWeightBold,"& code":{direction:"ltr",lineHeight:1.4,display:"inline-block",fontFamily:'Consolas, "Liberation Mono", Menlo, Courier, monospace',WebkitFontSmoothing:"subpixel-antialiased",padding:"2px 6px",color:e.palette.text.primary,backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",fontSize:".85em",wordBreak:"break-all"},"& .anchor-link-style":{display:"none"},"&:hover .anchor-link-style":{display:"inline-block",padding:"0 8px",color:e.palette.text.secondary,"&:hover":{color:e.palette.text.primary},"& svg":{width:"0.7em",height:"0.7em",fill:"currentColor"}}},"& table":{display:"block",wordBreak:"normal",width:"100%",overflowX:"auto",WebkitOverflowScrolling:"touch",borderCollapse:"collapse",marginTop:"16px",marginBottom:"16px",borderSpacing:0,overflow:"hidden","& .prop-name":{fontFamily:'Consolas, "Liberation Mono", Menlo, monospace'},"& .required":{color:"light"===e.palette.type?"#006500":"#a5ffa5"},"& .prop-type":{fontFamily:'Consolas, "Liberation Mono", Menlo, monospace',color:"light"===e.palette.type?"#932981":"#ffb6ec"},"& .prop-default":{fontFamily:'Consolas, "Liberation Mono", Menlo, monospace',borderBottom:"1px dotted ".concat(e.palette.divider)}},"& td":Object(U.a)(Object(U.a)({},e.typography.body2),{},{border:"1px solid ".concat(e.palette.divider),padding:12,color:e.palette.text.primary}),"& td code":{lineHeight:1.6},"& th":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",lineHeight:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightBold,color:e.palette.text.primary,whiteSpace:"pre",border:"1px solid ".concat(e.palette.divider),borderBottom:"2px solid ".concat(e.palette.divider),padding:12,textAlign:"left"},"& blockquote":{borderLeft:"2px solid rgba(55, 168, 218, 0.6)",backgroundColor:"rgba(55, 168, 218, 0.2)",padding:"4px 24px",margin:"12px 0","& p":{marginTop:"16px"}},"& a, & a code":{color:"rgba(55, 168, 218, 1)",textDecoration:"none","&:hover":{textDecoration:"underline"}},"& img, video":{maxWidth:"100%"},"& hr":{height:1,margin:e.spacing(6,0),border:"none",flexShrink:0,backgroundColor:e.palette.divider},"& kbd":{padding:"2px 5px",font:"11px Consolas,Liberation Mono,Menlo,monospace",lineHeight:"10px",color:"#444d56",verticalAlign:"middle",backgroundColor:"#fafbfc",border:"1px solid #d1d5da",borderRadius:3,boxShadow:"inset 0 -1px 0 #d1d5da"}})}}),Ae=a(103),Te=a.n(Ae),Me=a(125);function Fe(e){try{return e()}catch(t){return!1}}var De=function(e,t){return Fe((function(){return Me.highlight(t||"plaintext",e,!0).value}))||""},We=function(e,t){return t?De(e,t):Fe((function(){return Me.highlightAuto(e).value}))||""},Ie=function(e){return function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e.apply(this,a).replace('<code class="','<code class="hljs ').replace("<pre>",'<pre class="hljs">')}};function He(e,t,a){var n,r=e[t],o=e[t+1];if(o&&"text"===o.type){var i=/^{:?\.([^}]+)}/.exec(o.content);i&&(n=i[1],o.content=o.content.slice(i[0].length))}var l=a.highlight(r.content,n),c=n?' class="language-'.concat(n,'"'):"";return"<code".concat(c,">").concat(l,"</code>")}var Re=function e(t,a){var n;a=Object.assign({},e.defaults,a),(n=a.register)&&Object.entries(n).map((function(e){var t=Object(G.a)(e,2),a=t[0],n=t[1];Me.registerLanguage(a,n)})),t.options.highlight=a.auto?We:De,t.renderer.rules.fence=Ie(t.renderer.rules.fence),a.code&&(t.renderer.rules.code_block=Ie(t.renderer.rules.code_block)),a.inline&&(t.renderer.rules.code_inline=He)};Re.defaults={auto:!0,code:!0,inline:!1};var Pe=Re,ze=a(334)({html:!0,linkify:!0,typographer:!0});ze.use(Te.a),ze.use(Pe);var qe=ze,Ue=JSON.parse(Be),Ge=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={markdownHTML:null},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=Ue.filter((function(t){return t.uuid===e.props.match.params.uuid}))[0],n=t.article_md_path,r=a(390)("./"+n+".md");fetch(r).then((function(e){return e.text()})).then((function(t){var a=qe.render(t);e.setState({markdownHTML:a})}));var o=document.createElement("script"),i=document.getElementById("inject-comments-for-uterances");o.setAttribute("src","https://utteranc.es/client.js"),o.setAttribute("crossorigin","anonymous"),o.setAttribute("async",!0),o.setAttribute("repo","yirueilu-b/YirueiLuBlog"),o.setAttribute("issue-term",t.uuid),o.setAttribute("theme","dark"===this.props.theme.palette.type?"github-dark":"github-light"),i.appendChild(o)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(h.a,{className:e.root},r.a.createElement(he.a,{container:!0,spacing:0,direction:"row",alignItems:"flex-start",justify:"center"},r.a.createElement(he.a,{container:!0,item:!0,xs:12,md:9,className:e.article_section},r.a.createElement("div",{className:e.markdown_style,dangerouslySetInnerHTML:{__html:this.state.markdownHTML}})),r.a.createElement(he.a,{container:!0,item:!0,xs:12,md:9,className:e.comment_section},r.a.createElement("div",{className:e.disqus,id:"inject-comments-for-uterances"}))))}}]),n}(r.a.Component),Ye=Object(y.f)(Object(g.a)(Ne)(Ge)),Je=["Roboto","-apple-system","BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),Ke=Object(b.a)({palette:{type:"light"},typography:{fontFamily:Je}}),Qe=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).toggleDarkTheme=function(e){var t="light"===n.state.theme.palette.type?"dark":"light";Ke=Object(b.a)({palette:{type:t},typography:{fontFamily:Je}}),n.setState({theme:Ke});var a={type:"set-theme",theme:"light"===n.state.theme.palette.type?"github-dark":"github-light"};document.querySelector("iframe").contentWindow.postMessage(a,"https://utteranc.es")},n.state={theme:Ke},n.toggleDarkTheme=n.toggleDarkTheme.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(f.a,null,r.a.createElement(u.a,{theme:Ke},r.a.createElement(p.a,null),r.a.createElement(h.a,{className:e.root},r.a.createElement(pe,{theme:this.state.theme,onToggleDark:this.toggleDarkTheme}),r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/"},r.a.createElement(ye,null),r.a.createElement(Se,null)),r.a.createElement(y.a,{exact:!0,path:"/blog"},r.a.createElement(ye,null),r.a.createElement(Se,null)),r.a.createElement(y.a,{path:"/blog/:uuid"},r.a.createElement(Ye,{theme:this.state.theme})),r.a.createElement(y.a,{exact:!0,path:"/about"},r.a.createElement(Ve,null)),r.a.createElement(y.a,{exact:!0,path:"/category"},r.a.createElement(Xe,null))),r.a.createElement(S,null))))}}]),a}(r.a.Component);function Ve(){return r.a.createElement("h2",{style:{marginTop:"10vh",minHeight:"calc(90vh - 64px - 164px)"}},"About")}function Xe(){return r.a.createElement("h2",{style:{marginTop:"10vh",minHeight:"calc(90vh - 64px - 164px)"}},"Category")}var $e=Object(g.a)({root:{flexGrow:1,maxWidth:"100vw",minHeight:"100vh",padding:0,textAlign:"center"}})(Qe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e){e.exports=JSON.parse('"[\\n    {\\n        \\"article_title\\": \\"Markdown: Syntax\\",\\n        \\"article_description\\": \\"This markdown test file is from https://github.com/mxstbr/markdown-test-file and create by mxstbrNote: This document is itself written using Markdown;\\",\\n        \\"article_datetime\\": \\"Fri Sep  4 13:15:19 2020\\",\\n        \\"article_cover_image_url\\": \\"https://miro.medium.com/max/3118/1*iwPLQjyFYRTVeQ2cb4S9rA.png\\",\\n        \\"article_md_path\\": \\"testPost\\",\\n        \\"uuid\\": \\"55acc5\\"\\n    },\\n    {\\n        \\"article_title\\": \\"Use Utterances Comments with React App and Github page\\",\\n        \\"article_description\\": \\"I am building my personal blog and wondering if there is a simple way to implement a simple comment system, and then I found Disqus which is very easy\\",\\n        \\"article_datetime\\": \\"Fri Sep  4 10:39:12 2020\\",\\n        \\"article_cover_image_url\\": \\"https://i.imgur.com/rpGDKAul.png\\",\\n        \\"article_md_path\\": \\"utterancesComment\\",\\n        \\"uuid\\": \\"1cbdd7\\"\\n    }\\n]"')}},[[111,1,2]]]);
//# sourceMappingURL=main.cacb739f.chunk.js.map