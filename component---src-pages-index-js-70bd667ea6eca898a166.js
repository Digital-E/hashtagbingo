(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),o=(a(167),a(168),a(146)),s=(a(34),a(75),a(36)),c=a.n(s),l=a(7),d=a.n(l),u=a(156),g=a.n(u),p=a(169),h=a(154),f=a(170),m=a.n(f);a(158),a(159),a(160);function b(){var e=g()(["\n  font-size: 12px;\n  height: auto;\n  width: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  background-color: rgba(255,255,255,1);\n  padding: 10%;\n  \n  span {\n    // transform: rotateZ(45deg);\n    // transform-origin: center center;\n    text-align: center\n  }\n"]);return b=function(){return e},e}var y=a(193).a.div({selected:{opacity:1,scale:1,rotate:0,zIndex:999,backgroundColor:"rgba(0, 255, 255, 1)",transition:{scale:{type:"keyframes",values:[1,2.5,1],duration:500},rotate:{type:"keyframes",values:[0,360],times:[0,.8],duration:1500}}},notselected:{opacity:1,scale:1,zIndex:0,backgroundColor:"rgba(255, 255, 255, 1)",transition:{scale:{type:"keyframes",values:[1,.5,1],times:[0,.25,1],duration:500}}}}),w=Object(h.a)(y)(b()),v=function(e){return r.a.createElement(w,{pose:e.isSelected?"selected":"notselected",onClick:function(){e._onClickSquare(e.gridIndex)}},e.children)};function k(){var e=g()(["\n    display: flex !important;\n    width: 600px;\n    height: 600px;\n    justify-content: center;\n    align-items: center;\n"]);return k=function(){return e},e}function S(){var e=g()(["\n    position: absolute;\n    bottom: 0;\n"]);return S=function(){return e},e}function A(){var e=g()(["\n"]);return A=function(){return e},e}function x(){var e=g()(["\n    width: 100vw;\n    height: 100vw;\n    max-width: 500px;\n    max-height: 500px;\n    display: grid !important;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    grid-gap: 1px;\n"]);return x=function(){return e},e}var E=h.a.div(x()),C=h.a.div(A()),q=h.a.div(S()),R=h.a.div(k()),B=function(e){function t(){var t;return(t=e.call(this)||this).state={grids:null},t.updateInput=t.updateInput.bind(c()(t)),t.generateGrid=t.generateGrid.bind(c()(t)),t.cleanLocalStorage=t.cleanLocalStorage.bind(c()(t)),t}d()(t,e);var a=t.prototype;return a.componentWillMount=function(){},a.componentDidMount=function(){this.hydrateStateWithLocalStorage()},a.hydrateStateWithLocalStorage=function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{var a;t=JSON.parse(t),this.setState(((a={})[e]=t,a))}catch(r){var n;this.setState(((n={})[e]=t,n))}}},a.updateInput=function(e){this.setState({grids:e}),localStorage.setItem("grids",JSON.stringify(e))},a.generateGrid=function(){var e=[];function t(e){this.roundName=e.round_name.text,this.tags=e.tags.text.split(",").map(function(e){return{tag:e.trim(),isSelected:!1}})}this.props.data.allPrismicBingogrids.edges.forEach(function(a){!function(a){var n=new t(a);e.push(n)}(a.node.data)});var a=e.map(function(e){return function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e.splice(0,16)}(e.tags)});this.updateInput(a)},a.cleanLocalStorage=function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){localStorage.removeItem(e);try{var t;this.setState(((t={})[e]=null,t))}catch(n){var a;this.setState(((a={})[e]=null,a))}}},a._onClickSquare=function(e){var t=e.gridIndex,a=e.index,n=this.state.grids.slice(),r=!n[t][a].isSelected;n[t][a].isSelected=r,this.setState({grids:n}),localStorage.setItem("grids",JSON.stringify(n))},a.render=function(){var e=this;return this.state.grids?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{dots:!0,speed:500,slidesToShow:1,slidesToScroll:1},this.state.grids.map(function(t,a){var n=a;return r.a.createElement(R,{key:a},r.a.createElement(E,null,t.map(function(t,a){return r.a.createElement(v,{className:"square",key:a,isSelected:t.isSelected,gridIndex:n,_onClickSquare:function(){return e._onClickSquare({gridIndex:n,index:a})}},r.a.createElement("span",null,t.tag))})))})),r.a.createElement(q,{onClick:this.cleanLocalStorage},"Clean Local Storage")):r.a.createElement(C,{onClick:this.generateGrid},"Generate Grid")},t}(r.a.Component),I=function(e){return r.a.createElement(i.b,{query:"222032871",render:function(t){return r.a.createElement(B,Object.assign({data:t},e))},data:p})};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement("h1",null,"#Hashtag Bingo"),r.a.createElement(I,null))}},146:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(152),l=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,c=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=d},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(149);var l=r.a.createContext({}),d=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},167:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/hashtagbingo/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/hashtagbingo/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/hashtagbingo/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/hashtagbingo/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/hashtagbingo/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/hashtagbingo/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/hashtagbingo/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},169:function(e){e.exports={data:{allPrismicBingogrids:{edges:[{node:{id:"Prismic__Bingogrids__XPY7MRAAAIGaEqpD",uid:"shortcuts",data:{round_name:{text:"Short Cuts"},tags:{text:"copy, undo, find, spotlight, newsprint, open desktop folder, save, create new folder, paste, page setup, close, find again, quit, cut, quick look, switch apps, add link, force quit, show ruler, open computer window, open, switch windows, delete, screenshot, move to trash, help, duplicate, use selection for find, hide applications, open downloads folder, preferences, bold, underline, eject, open network window, show view options, empty the trash, minimize, show fonts, paste style, show color, go to previous folder, italicize selected text, screenshot of a selected portion of screen, boldface selected text,open all my files window, show or hide the dock, make an alias, open utilities folder"}}}},{node:{id:"Prismic__Bingogrids__XPY7FBAAAAeQEqm4",uid:"wordgames",data:{round_name:{text:"Word Games"},tags:{text:"babybell, croatia, romania, soccer, keyboard, klinsmann, putin, shakespeare, vitality, pocahontas, ciabatta, money penny, dragndrop, analyse, boxingday, cloudrap, internet, startrek, pepsi, shwarma, brexit, crystal meth, picture, folklore, bechance, macbook, spaghetti, photoshopping, superbowl,backup, comic sans, foodtruck, merryjane, timeout, helvetica, liverpool, sailermoon, doctor, sauerkraut, flowerpower, aladin, brainwash, digital native, sugardaddy, backstreet boy, acrobat reader, flash player, supermarket, java script, wordpress, bold italic, yokohama, ipads, pineapple, share button, triathlon, cabriole, bondage, greys anatomy, cruise line"}}}},{node:{id:"Prismic__Bingogrids__XPY8rRAAAIGaErEC",uid:"gif-it-to-me-2",data:{round_name:{text:"Gif It To Me (Round 2)"},tags:{text:"kongfu,ladyfucking,gaga,games,emotions,dreamer,bigdaddy,downstairs,cowgirl,bigballs,beginner,babyonboard,payday,wellness,fries,vacuum,favoritecolleague,family,light,housekeeping,girlpower,sugarman,acrobat,move,rocket,high5,saturdaynight,burnout,workout,beauty,date,kellogs,tequila,unicorn,airport,byebye,killer,downhill,karma,followfish,finger,socket,trainshopping,karate,safetycheck,gamer,boreout,boss,busy,coffee,dolphins,friday,homeoffice,telephone,keyboard,kebab,gosling,orange"}}}},{node:{id:"Prismic__Bingogrids__XPY63xAAAMGaEqjE",uid:"allstars",data:{round_name:{text:"All Stars"},tags:{text:"Alan Fletcher,Helmut Newton,Alexey Brodovitch,Annie Leibovitz,Cipe Pineles,Nobuyoshi Araki,Cindy Sherman,Paula Scher,Marina Abramović,Irma Boom,Daniel Josefsohn,Henri Cartier-Bresson,Gerhard Richter,Peter Saville,Wolfgang Weingart, Neville Brody,Otl Aicher,Lucian Bernhard,Josef Müller-Brockmann,David Carson,Wolfgang Tillmans,Sigmar Polke,Christoph Niemann, Murielle Cooper,Massimo Vignelli,Saul Bass,Martin Kippenberger,Paul Rand,Robert Rauschenberg,Ellen von Unwerth,Susan Kare,El Lissitzky,Jenny Holzer,Yayoi Kusama,Keith Haring,Milton Glaser,Louise Bourgeoise,Olafur Eliasson,Jürgen Teller,Jan Tschichold,Josef Beuys,Georg Baselitz,Christopher Wool,Richard Buckminster Fuller,Ellen Gallagher,David LaChapelle,Damien Hirst,Robert Cappa,David Bailey,Andy Warhol,Terry Richardson,Neo Rauch,Jean-Michel Basquiat,Man Ray,Alexander Calder,Jeff Koon,Sol LeWitt,Robert Rauschenberg,Eva Hesse"}}}},{node:{id:"Prismic__Bingogrids__XPY6yxAAACVnEqhk",uid:"gif-it-to-me-1",data:{round_name:{text:"Gif It To Me (Round 1)"},tags:{text:"pizza,coordination,wave,sandwich,gimmefive,happy,exercise,shopping,beer,kevin,interview,popcorn,rideabike,micdrop,rollercoaster,onfire,nicetomeetyou,freshprince,surf,magnum,newjob,melon,potatoe,taco,party,slowmo,kanye,almost,abs,toothbush,yummy,bodypainting,workflow,drake,ball,alien,cocktail,neverending,babyface,thankyou,pro,fail,woof,suprise,spaghetti,backflip,water,teamplayer,sweetonion,stillbeginner,justcool,quiet,sibling,sexy,snowwhite,emotions,dance,weddingfun,goldie,carousel,icecream"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-70bd667ea6eca898a166.js.map