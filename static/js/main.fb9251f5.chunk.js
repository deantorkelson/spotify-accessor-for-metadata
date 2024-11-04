(this["webpackJsonpspotify-accessor-for-metadata"]=this["webpackJsonpspotify-accessor-for-metadata"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),l=a(12),c=a.n(l),o=a(23),i=a(9);!function(e){e.DEV="development",e.PROD="production"}(n||(n={}));var u="/",m="/search",d="/compare",p="/tools",h=a(59),f=a.n(h),v=(a(81),function(){return s.a.createElement("div",{className:"navbar"},s.a.createElement(o.b,{exact:!0,className:"logo",to:u},s.a.createElement("img",{className:"logo-img",src:f.a,alt:"Logo for S.A.M."}),s.a.createElement("h1",{className:"title"},"Spotify Accessor for Metadata")),s.a.createElement("ul",{className:"links"},s.a.createElement("li",null,s.a.createElement(o.b,{exact:!0,to:u},"HOME")),s.a.createElement("li",null,s.a.createElement(o.b,{to:m},"SEARCH")),s.a.createElement("li",null,s.a.createElement(o.b,{to:d},"COMPARE PLAYLISTS")),s.a.createElement("li",null,s.a.createElement(o.b,{to:p},"TOOLS"))))}),b=a(37),E=a.n(b),y=a(60),g=(a(86),function(){var e="https://github.com/deantorkelson/spotify-accessor-for-metadata";return s.a.createElement("div",{className:"page"},s.a.createElement("div",null,s.a.createElement("h1",null,s.a.createElement("br",null),s.a.createElement("br",null),"Welcome to the Spotify Accessor for Metadata v",y.version,"!"),s.a.createElement("div",{className:"main-text"},s.a.createElement("h3",null,"This website was designed to allow you to do more with the metadata stored by Spotify. It's still in development, so please refer to the"," ",function(){var t="".concat(e,"/blob/master/README.md");return s.a.createElement("a",{className:"readme",href:t},"readme")}()," or ",function(){var t="".concat(e,"/issues");return s.a.createElement("a",{className:"readme",href:t},"Github Issues")}()," to see what's in store!"))),s.a.createElement("img",{className:"main-logo",src:E.a,alt:"Spotify Accessor for Metadata logo"}))}),k=a(11),j=a(20),N=a(40),w=a(66),O=a(68),S=a(61),x=a.n(S),C=a(128),D=a(130),M=a(38),A=a(39),T=a(70),_=a(69),P=a(51),F=(a(95),function(e){Object(T.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(M.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).text="",e}return Object(A.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(P.a,{className:"input",inline:!0},s.a.createElement(P.a.Control,{className:"text-input",placeholder:this.props.placeholder,type:"text",onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),e.props.submit())},onChange:function(t){return e.text=t.target.value}}),s.a.createElement(j.a,{className:"submit",type:"button",variant:"outline-success",onClick:function(){return e.props.submit(e.text)}},s.a.createElement("img",{className:"submit-img",src:E.a,alt:"Submit"})))}}]),a}(s.a.Component));function R(e,t,a){return e?s.a.createElement("div",null,s.a.createElement(N.a,{animation:"border"}),s.a.createElement("div",null,"*note that the first search might take extra time while the Heroku dyno spins up.")):t?t.length?s.a.createElement("div",{className:"result-list"},t.map((function(e,t){return a(e,t)}))):s.a.createElement("div",{key:"-1"},"No search results found."):null}var I,G=function(e){var t=e.split("?")[0].split("/").pop();return"spotify:playlist:".concat(t)};!function(e){e.GET="GET",e.POST="POST"}(I||(I={}));var Q=function(){function e(){Object(M.a)(this,e),this.api_url=void 0,"production"===n.DEV?this.api_url="http://0.0.0.0:5001":this.api_url="https://sam-backend-d60bd9ccf7b8.herokuapp.com"}return Object(A.a)(e,[{key:"searchTracks",value:function(e){return this.get(this.api_url+"/search/tracks?q=".concat(e))}},{key:"searchPlaylists",value:function(e){return this.get(this.api_url+"/search/playlists?q=".concat(e))}},{key:"playlistDetails",value:function(e){return this.get(this.api_url+"/playlist/".concat(e))}},{key:"fetchTrackMetadata",value:function(e){return this.get(this.api_url+"/track/".concat(e))}},{key:"fetchArtistMetadata",value:function(e){return this.get(this.api_url+"/artist/".concat(e))}},{key:"comparePlaylists",value:function(e){var t=JSON.stringify({uris:e});return this.post(this.api_url+"/playlists/compare",t)}},{key:"rubinQuote",value:function(){return this.get(this.api_url+"/random/rubin")}},{key:"bookQuote",value:function(){return this.get(this.api_url+"/random/book_quote")}},{key:"get",value:function(e){return fetch(e).then((function(e){return e.json()}))}},{key:"post",value:function(e,t){var a={method:I.POST,headers:{"Content-Type":"application/json"},body:t};return fetch(e,a).then((function(e){return e.json()}))}}]),e}(),B={search:{tooltips:{acousticness:"A confidence measure from 0.0 to 1.0 of whether the track is acoustic.",danceability:"Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.",energy:"Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.",instrumentalness:'Predicts whether a track contains no vocals. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content.',liveness:"Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.",loudness:"The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks.",speechiness:"Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.",valence:"A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track."},placeholder:"Enter the name of a song or artist..."},playlistCompare:{placeholder:"Search for a playlist...",tooltip:'This would look like "https://open.spotify.com/playlist/5YfQFj40rrMiUp5hutvfH6"'}},L=(a(97),a(47),a(98)),q=function(){var e=Object(r.useState)(null),t=Object(k.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(!1),c=Object(k.a)(l,2),o=c[0],i=c[1],u=Object(r.useState)(null),m=Object(k.a)(u,2),d=m[0],p=m[1],h=Object(r.useState)(!1),f=Object(k.a)(h,2),v=f[0],b=f[1],E=Object(r.useState)(!1),y=Object(k.a)(E,2),g=y[0],S=y[1],M=Object(r.useState)(null),A=Object(k.a)(M,2),T=A[0],_=A[1],P=new Q,I=function(e){var t=new Set(d);t.add(e),p(t)},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];b(!0);var a=t;e.forEach((function(e){a.push(e.uri)})),a.concat(t),P.comparePlaylists(a).then((function(e){S(!0),_(e)})).finally((function(){b(!1)}))},$=function(){S(!1)},U=function(e){return s.a.createElement("div",{className:"result-text"},s.a.createElement("div",null,s.a.createElement("b",null,e.name)," by ",e.owner.display_name),e.description&&s.a.createElement("div",null,L.decode(e.description).length>140?L.decode(e.description).substring(0,140)+"...":L.decode(e.description)),s.a.createElement("div",null,e.tracks.total," songs"))},H=function(e){return s.a.createElement("div",{key:e.uri},s.a.createElement("div",{className:"result"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{className:"cover-img",src:e.images[0].url,alt:"Cover for ".concat(e.name)}),s.a.createElement(j.a,{className:"result-button",variant:"link",onClick:function(){return function(e){var t=new Set(d);t.delete(e),p(t.size?t:null)}(e)}},s.a.createElement(D.a,null))),U(e)))};return s.a.createElement("div",{className:"page"},s.a.createElement("div",{className:"header"},"Enter the name of the playlist to search for, ",s.a.createElement("br",null),"or a\xa0",s.a.createElement(O.a,{placement:"right",delay:{show:100,hide:400},overlay:function(e){return s.a.createElement(w.a,e,B.playlistCompare.tooltip)}},s.a.createElement("span",{className:"uri-tooltip"},"link to a playlist:"))),s.a.createElement(F,{placeholder:B.playlistCompare.placeholder,submit:function(e){if(e)if(function(e){return e.includes("open.spotify.com/playlist")}(e)){i(!0);var t=G(e);P.playlistDetails(t).then((function(e){I(e)})),i(!1)}else i(!0),P.searchPlaylists(e).then((function(e){n(e.playlists.items),i(!1)}))}}),s.a.createElement("div",{className:"main-content"},s.a.createElement("div",{className:"column"},R(o,a,(function(e){return s.a.createElement("div",{key:e.uri},s.a.createElement("div",{className:"result"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{className:"cover-img",src:e.images[0].url,alt:"Cover for ".concat(e.name)}),s.a.createElement(j.a,{className:"result-button",variant:"link",onClick:function(){return I(e)}},s.a.createElement(C.a,null))),U(e)))}))),s.a.createElement("div",{className:"column"},d?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"header"},"Comparing these playlists:"),function(){if(!d)return null;var e=[];return d.forEach((function(t){e.push(H(t))})),e}(),v?s.a.createElement(N.a,{animation:"border"}):s.a.createElement("div",{className:"buttons"},s.a.createElement(j.a,{className:"submit",type:"button",variant:"success",onClick:function(){return q(d)}},"Submit"),s.a.createElement(j.a,{className:"submit",type:"button",variant:"secondary",onClick:function(){return p(null)}},"Clear"),s.a.createElement(j.a,{className:"submit",type:"button",variant:"danger",onClick:function(){return q(d,["spotify/playlist/0ndBAQglIRXPRdh2SDXfcD"])}},"Compare to Dean's music"))):null),s.a.createElement("div",null,s.a.createElement(x.a,{isOpen:g,onRequestClose:$,style:{content:{margin:"auto",width:"75%"}}},T?s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{variant:"outline-secondary",onClick:$},"Close"),s.a.createElement("div",{className:"modal-body"},s.a.createElement("div",{className:"column-30"},s.a.createElement("div",{className:"header"},"Comparing these playlists:"),T.names.map((function(e){return s.a.createElement("div",null,e)}))),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"header"},"Common artists:"),s.a.createElement("ul",null,T.artists.map((function(e){return s.a.createElement("div",{className:"modal-li"},e)})))),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"header"},"Common songs:"),s.a.createElement("ul",null,T.songs.map((function(e){return s.a.createElement("div",{className:"modal-li"},e)})))))):null))))},$=a(135),U=a(134),H=a(131),z=a(132);a(58);var J=function(e){var t=e.artistName,a=e.artistMetadata,n=e.fetchMetadata,r=e.loading,l=e.searchResults,c=e.searchSubmit,o=e.trackName,i=e.trackMetadata,u=function(e){return[{title:"Acousticness",tooltip:B.search.tooltips.acousticness,value:e.acousticness},{title:"Danceability",tooltip:B.search.tooltips.danceability,value:e.danceability},{title:"Energy",tooltip:B.search.tooltips.energy,value:e.energy},{title:"Instrumentalness",tooltip:B.search.tooltips.instrumentalness,value:e.instrumentalness},{title:"Liveness",tooltip:B.search.tooltips.liveness,value:e.liveness},{title:"Loudness",tooltip:B.search.tooltips.loudness,value:e.loudness/-60},{title:"Speechiness",tooltip:B.search.tooltips.speechiness,value:e.acousticness},{title:"Valence",tooltip:B.search.tooltips.valence,value:e.valence}]},m=function(e,t,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"attribute-title"},e),s.a.createElement(U.a,{title:t},s.a.createElement(z.a,{className:"info-icon",fontSize:"small"})),s.a.createElement($.a,{disabled:!0,track:!1,value:a,max:1}))},d=function(e){return e.length?e.join(", "):"No genre information is available for this artist."};return s.a.createElement("div",{className:"page"},s.a.createElement("div",{className:"header"},"Enter the name of the track to search for:"),s.a.createElement(F,{placeholder:B.search.placeholder,submit:c}),s.a.createElement("div",{className:"main-content"},s.a.createElement("div",{className:"column"},R(r,l,(function(e){return s.a.createElement("div",{key:e.uri},s.a.createElement("div",{className:"result"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{className:"cover-img",src:e.album.images[0].url,alt:"Cover for ".concat(e.album.name)}),s.a.createElement(j.a,{className:"result-button",variant:"link",onClick:function(){return n(e.uri,e.name,e.artists[0].uri,e.artists[0].name)}},s.a.createElement(H.a,{className:"select-logo-img"}))),s.a.createElement("section",{className:"result-text"},s.a.createElement("b",null,e.name),s.a.createElement("div",null,e.artists[0].name," \u2022 ",e.album.name))))}))),s.a.createElement("div",{className:"column"},function(){var e,t;return i?s.a.createElement("div",null,s.a.createElement("h3",null,"Audio features for ",s.a.createElement("span",{className:"name"},o),":"),s.a.createElement("h5",null,"Key: ",(e=i.key,t=i.mode,"".concat(function(e){switch(e){case 0:return"C";case 1:return"C#/Db";case 2:return"D";case 3:return"D#/Eb";case 4:return"E";case 5:return"F";case 6:return"F#/Gb";case 7:return"G";case 8:return"G#/Ab";case 9:return"A";case 10:return"A#/Bb";case 11:return"B"}}(e)," ").concat(function(e){switch(e){case 0:return"minor";case 1:return"major"}}(t)))),s.a.createElement("h5",null,"Tempo: ",i.tempo),s.a.createElement("h5",null,"Beats/measure: ",i.time_signature),s.a.createElement("div",{className:"value-sliders"},s.a.createElement("div",{className:"reduced-column"},u(i).slice(0,4).map((function(e){return m(e.title,e.tooltip,e.value)}))),s.a.createElement("div",{className:"reduced-column"},u(i).slice(4).map((function(e){return m(e.title,e.tooltip,e.value)}))))):null}(),a&&i?s.a.createElement("hr",null):null,a?s.a.createElement("div",null,s.a.createElement("h3",null,"Additional information on ",s.a.createElement("span",{className:"name"},t),":"),s.a.createElement("h5",null,"Genres: ",d(a.genres)),s.a.createElement("h5",null,"Followers: ",a.followers.total.toLocaleString()),s.a.createElement("h5",null,"Popularity: ",a.popularity)):null)))},V=function(){var e=Object(r.useState)(""),t=Object(k.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(null),c=Object(k.a)(l,2),o=c[0],i=c[1],u=Object(r.useState)(null),m=Object(k.a)(u,2),d=m[0],p=m[1],h=Object(r.useState)(!1),f=Object(k.a)(h,2),v=f[0],b=f[1],E=Object(r.useState)(""),y=Object(k.a)(E,2),g=y[0],j=y[1],N=Object(r.useState)(null),w=Object(k.a)(N,2),O=w[0],S=w[1],x=new Q,C=function(e,t){x.fetchTrackMetadata(e).then((function(e){S(e),j(t)}))},D=function(e,t){x.fetchArtistMetadata(e).then((function(e){i(e),n(t)}))};return s.a.createElement(J,{artistName:a,artistMetadata:o,fetchMetadata:function(e,t,a,n){C(e,t),D(a,n)},loading:v,searchResults:d,searchSubmit:function(e){e&&(b(!0),x.searchTracks(e).then((function(e){p(e.tracks.items),b(!1)})))},trackName:g,trackMetadata:O})},K=a(133),W=(a(101),function(e){var t=e.rubinQuote,a=e.bookQuote,n=e.scaleDegree,r=e.tonality,l=e.randomEnabled,c=e.setRandomEnabled,o=e.shouldUseFullScale,i=e.setShouldUseFullScale;return s.a.createElement("div",{className:"page"},s.a.createElement("h1",{className:"header"},"Let the hands of fate guide you"),s.a.createElement("div",null,"Rick Rubin keeps a library of books in his recording studio. If you're stuck, grab a book and find a random quote to inspire you. Rubin also said,",s.a.createElement("br",null),s.a.createElement("i",null,t),s.a.createElement("br",null),s.a.createElement("br",null),"May this quote help you resolve your creative conundrum:",s.a.createElement("br",null),'"',a.quote,'" -'," ",s.a.createElement("span",null,s.a.createElement("i",null,a.author)),s.a.createElement("hr",null),s.a.createElement("h1",{className:"header"},"Music tools"),s.a.createElement("p",null,'A small set of tools that I use for music practice. I use these random values for different freboard/scale/mode exercises, like "Play the pentatonic minor scale in the given key starting on the given scale degree"'),s.a.createElement("div",null,s.a.createElement(K.a,{onClick:function(e){c(!l)},value:l,color:"primary"}),"Enable random values?"),s.a.createElement("div",null,s.a.createElement(K.a,{onClick:function(e){i(!o)},value:o,color:"primary"}),"Enable full scale? (default is pentatonic)"),s.a.createElement("div",{className:"main-content"},s.a.createElement("div",{className:"column"},s.a.createElement("div",null),s.a.createElement("h4",null,"Random Key"),s.a.createElement("div",{className:"random-value"},r)),s.a.createElement("div",{className:"column"},s.a.createElement("div",null),s.a.createElement("h4",null,"Random Scale Degree"),s.a.createElement("div",{className:"random-value"},n)))))});var X=[1,3,4,5,7],Y=function(){var e=new Q,t=Object(r.useState)(""),a=Object(k.a)(t,2),n=a[0],l=a[1],c=Object(r.useState)({}),o=Object(k.a)(c,2),i=o[0],u=o[1],m=Object(r.useState)(1),d=Object(k.a)(m,2),p=d[0],h=d[1],f=Object(r.useState)("E"),v=Object(k.a)(f,2),b=v[0],E=v[1],y=Object(r.useState)(!1),g=Object(k.a)(y,2),j=g[0],N=g[1],w=Object(r.useState)(!1),O=Object(k.a)(w,2),S=O[0],x=O[1];return Object(r.useEffect)((function(){var e=setInterval((function(){j&&(E(function(e){switch(e){case 0:return"C";case 1:return"C#/Db";case 2:return"D";case 3:return"D#/Eb";case 4:return"E";case 5:return"F";case 6:return"F#/Gb";case 7:return"G";case 8:return"G#/Ab";case 9:return"A";case 10:return"A#/Bb";case 11:return"B";default:return"Unknown"}}(Math.floor(11*Math.random()))),h(S?Math.floor(7*Math.random())+1:X[Math.floor(5*Math.random())]))}),2e3);return function(){return clearInterval(e)}}),[j,S]),Object(r.useEffect)((function(){e.rubinQuote().then((function(e){l(e.quote)})),e.bookQuote().then((function(e){u(e)}))}),[]),s.a.createElement(W,{bookQuote:i,rubinQuote:n,scaleDegree:p,tonality:b,randomEnabled:j,setRandomEnabled:N,shouldUseFullScale:S,setShouldUseFullScale:x})};a(102);var Z=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v,null),s.a.createElement(o.a,null,s.a.createElement(i.a,{path:m,component:V}),s.a.createElement(i.a,{path:d,component:q}),s.a.createElement(i.a,{path:p,component:Y}),s.a.createElement(i.a,{exact:!0,path:u,component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(103),a(104);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(o.a,null,s.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){e.exports=a.p+"static/media/black-logo.5e670a4b.png"},47:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){e.exports=a.p+"static/media/green-logo.feb227e2.png"},60:function(e){e.exports=JSON.parse('{"name":"spotify-accessor-for-metadata","version":"0.4.0","private":true,"homepage":"http://deantorkelson.github.io/spotify-accessor-for-metadata","dependencies":{"@material-ui/core":"^4.10.0","@material-ui/icons":"^4.9.1","@testing-library/jest-dom":"^4.2.4","@types/react":"^16.9.34","@types/react-bootstrap":"^1.0.1","@types/react-dom":"^16.9.7","@types/react-modal":"^3.10.5","@types/react-router-dom":"^5.1.5","babel-jest":"^24.9.0","babel-loader":"8.1.0","babel-plugin-named-asset-import":"^0.3.6","babel-preset-react-app":"^9.1.2","bootstrap":"^4.5.0","camelcase":"^5.3.1","case-sensitive-paths-webpack-plugin":"2.3.0","css-loader":"3.4.2","dotenv":"8.2.0","dotenv-expand":"5.1.0","eslint":"^6.6.0","eslint-config-react-app":"^5.2.1","eslint-loader":"3.0.3","file-loader":"4.3.0","fs-extra":"^8.1.0","he":"^1.2.0","html-webpack-plugin":"4.0.0-beta.11","jest":"24.9.0","jest-environment-jsdom-fourteen":"1.0.1","jest-watch-typeahead":"0.4.2","mini-css-extract-plugin":"0.9.0","optimize-css-assets-webpack-plugin":"5.0.3","pnp-webpack-plugin":"1.6.4","postcss-flexbugs-fixes":"4.1.0","postcss-loader":"3.0.0","postcss-normalize":"8.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"4.0.1","react":"^16.13.1","react-app-polyfill":"^1.0.6","react-bootstrap":"^1.0.1","react-dev-utils":"^10.2.1","react-dom":"^16.13.1","react-modal":"^3.11.2","react-router-dom":"^5.2.0","resolve":"1.15.0","resolve-url-loader":"3.1.1","sass-loader":"8.0.2","style-loader":"0.23.1","terser-webpack-plugin":"2.3.5","ts-pnp":"1.1.6","url-loader":"2.3.0","webpack":"4.42.0","webpack-dev-server":"3.10.3","webpack-manifest-plugin":"2.2.0","workbox-webpack-plugin":"4.3.1"},"scripts":{"start":"set APP_ENV=dev && node scripts/start.js","build":"node scripts/build.js","test":"node scripts/test.js","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^3.1.0","prettier":"3.3.3"},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":["<rootDir>/src/setupTests.ts"],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jest-environment-jsdom-fourteen","transform":{"^.+\\\\.(js|jsx|ts|tsx)$":"<rootDir>/node_modules/babel-jest","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"]},"babel":{"presets":["react-app"]}}')},76:function(e,t,a){e.exports=a(105)},81:function(e,t,a){},86:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.fb9251f5.chunk.js.map