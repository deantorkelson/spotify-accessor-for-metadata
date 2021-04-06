(this["webpackJsonpspotify-accessor-for-metadata"]=this["webpackJsonpspotify-accessor-for-metadata"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/black-logo.5e670a4b.png"},55:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/green-logo.feb227e2.png"},65:function(e,t,a){e.exports=a(96)},70:function(e,t,a){},71:function(e,t,a){},76:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(9),s=a.n(c),i=(a(70),a(24)),o=a(7),u=a(26),m=a(27),d=a(40),h=a(39),p=a(57),f=a.n(p),E=(a(71),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement(i.b,{className:"logo",to:"/"},l.a.createElement("img",{className:"logo-img",src:f.a,alt:"Logo for S.A.M."}),l.a.createElement("h1",{className:"title"},"Spotify Accessor for Metadata")),l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(i.b,{to:"/"},"HOME")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/search"},"SEARCH")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/playlist-compare"},"COMPARE PLAYLISTS"))))}}]),a}(l.a.Component)),v=a(34),b=a.n(v),y=(a(76),function(){var e="https://github.com/deantorkelson/spotify-accessor-for-metadata";return l.a.createElement("div",{className:"page"},l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement("br",null),l.a.createElement("br",null),"Welcome to the Spotify Accessor for Metadata!"),l.a.createElement("div",{className:"main-text"},l.a.createElement("h3",null,"This website was designed to allow you to do more with the metadata stored by Spotify. It's still in development, so please refer to the ",function(){var t="".concat(e,"/blob/master/README.md");return l.a.createElement("a",{className:"readme",href:t},"readme")}()," or ",function(){var t="".concat(e,"/issues");return l.a.createElement("a",{className:"readme",href:t},"Github Issues")}()," to see what's in store!"))),l.a.createElement("img",{className:"main-logo",src:b.a,alt:"Spotify Accessor for Metadata logo"}))}),g=a(13),k=a(23),N=a(31),O=a(60),S=a(63),j=a(58),w=a.n(j),T=a(48),A=(a(85),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).text="",e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(T.a,{className:"input",inline:!0},l.a.createElement(T.a.Control,{type:"text",onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),e.props.submit())},onChange:function(t){return e.text=t.target.value}}),l.a.createElement(k.a,{className:"submit",type:"button",variant:"outline-success",onClick:function(){return e.props.submit(e.text)}},l.a.createElement("img",{className:"submit-img",src:b.a,alt:"Submit"})))}}]),a}(l.a.Component)),C=/(spotify[/:]playlist[/:]([a-zA-Z0-9]+)[,\s]+)+(spotify[/:]playlist[/:]([a-zA-Z0-9]+))/;!function(e){e.GET="GET",e.POST="POST"}(n||(n={}));var _=function(){function e(){Object(u.a)(this,e),this.api_url=void 0,"1"===Object({NODE_ENV:"production",PUBLIC_URL:"/spotify-accessor-for-metadata",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_USE_LOCAL_BACKEND?this.api_url="http://127.0.0.1:5000":this.api_url="https://spotify-accessor-for-metadata.herokuapp.com"}return Object(m.a)(e,[{key:"searchTracks",value:function(e){return this.fetcher(this.api_url+"/search/tracks/".concat(e),n.GET)}},{key:"searchPlaylists",value:function(e){return this.fetcher(this.api_url+"/search/playlists/".concat(e),n.GET)}},{key:"fetchTrackMetadata",value:function(e){return this.fetcher(this.api_url+"/fetchTrackMetadata/".concat(e),n.GET)}},{key:"fetchArtistMetadata",value:function(e){return this.fetcher(this.api_url+"/fetchArtistMetadata/".concat(e),n.GET)}},{key:"comparePlaylists",value:function(e){var t=JSON.stringify({uris:e});return this.fetcher(this.api_url+"/comparePlaylists",n.POST,t)}},{key:"fetcher",value:function(e,t,a){var n={method:t,mode:"no-cors",headers:{"Content-Type":"application/json"}};return a&&(n.body=a),fetch(e,n).then((function(e){return e.json()}))}}]),e}(),P=(a(87),a(55),a(88)),x=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),s=Object(g.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(new Set),m=Object(g.a)(u,2),d=m[0],h=m[1],p=Object(r.useState)(!1),f=Object(g.a)(p,2),E=f[0],v=f[1],b=Object(r.useState)(!1),y=Object(g.a)(b,2),j=y[0],T=y[1],x=Object(r.useState)(),D=Object(g.a)(x,2),M=D[0],G=D[1],L=new _,R=function(){T(!1)},B=function(e,t){return l.a.createElement("div",{key:e.uri},l.a.createElement(k.a,{variant:"outline-secondary",onClick:function(){t(e)}},l.a.createElement("div",{className:"result"},l.a.createElement("img",{className:"cover-img",src:e.images[0].url,alt:"Cover for ".concat(e.name)}),l.a.createElement("section",{className:"result-text"},l.a.createElement("div",null,l.a.createElement("b",null,e.name)," by ",e.owner.display_name),e.description&&l.a.createElement("div",null,"Description: ",P.decode(e.description)),l.a.createElement("div",null,e.tracks.total," songs")))))};return l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"header"},"Enter the name of the playlist to search for, ",l.a.createElement("br",null),"or a comma-separated list of\xa0",l.a.createElement(S.a,{placement:"right",delay:{show:100,hide:400},overlay:function(e){return l.a.createElement(O.a,e,'These take the form "spotify:playlist:<something>" or "spotify/playlist/<something>"')}},l.a.createElement("span",{className:"uri-tooltip"},"Spotify URIs:"))),l.a.createElement(A,{submit:function(e){if(e)if(a=e,C.test(a)){v(!0);var t=e.split(", ");L.comparePlaylists(t).then((function(e){v(!1),T(!0),G(e)}))}else o(!0),L.searchPlaylists(e).then((function(e){n(e.playlists.items),o(!1)}));var a}}),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"column"},0!==a.length||i?l.a.createElement(l.a.Fragment,null,i?l.a.createElement("div",null,l.a.createElement(N.a,{animation:"border"}),l.a.createElement("div",null,"*note that the first search might take extra time while the Heroku dyno spins up.")):l.a.createElement("div",{className:"result-list"},a.map((function(e){return B(e,(function(){var t=new Set(d);t.add(e),h(t)}))})))):l.a.createElement("div",{key:"-1"},"No search results found.")),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"header"},"Comparing these playlists:"),0===d.size?l.a.createElement("div",null,"Please select some playlists to compare."):l.a.createElement("div",null,function(){var e=[];return d.forEach((function(t){e.push(B(t,(function(){var e=new Set(d);e.delete(t),h(e)})))})),e}(),E?l.a.createElement("div",null,l.a.createElement(N.a,{animation:"border"})):l.a.createElement(k.a,{className:"submit",type:"button",variant:"outline-success",onClick:function(){return function(e){v(!0);var t=[];e.forEach((function(e){t.push(e.uri)})),L.comparePlaylists(t).then((function(e){v(!1),T(!0),G(e)}))}(d)}},"Submit"))),l.a.createElement("div",null,l.a.createElement(w.a,{isOpen:j,onRequestClose:R},M?l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{variant:"outline-secondary",onClick:R},"Close"),l.a.createElement("div",{className:"modalContent"},"Comparing these playlists: "+M.names.join(", "),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"header"},"Common artists:"),l.a.createElement("ul",null,M.artists.map((function(e){return l.a.createElement("div",{className:"modal-li"},e)})))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"header"},"Common songs:"),l.a.createElement("ul",null,M.songs.map((function(e){return l.a.createElement("div",{className:"modal-li"},e)})))))):l.a.createElement(l.a.Fragment,null)))))},D=a(120),M=a(119),G=a(62),L=a.n(G);var R={search:{tooltips:{acousticness:"A confidence measure from 0.0 to 1.0 of whether the track is acoustic.",danceability:"Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.",energy:"Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.",instrumentalness:'Predicts whether a track contains no vocals. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content.',liveness:"Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.",loudness:"The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks.",speechiness:"Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.",valence:"A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track."}}},B=(a(91),function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),s=Object(g.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(""),m=Object(g.a)(u,2),d=m[0],h=m[1],p=Object(r.useState)(""),f=Object(g.a)(p,2),E=f[0],v=f[1],b=Object(r.useState)({}),y=Object(g.a)(b,2),O=y[0],S=y[1],j=Object(r.useState)({}),w=Object(g.a)(j,2),T=w[0],C=w[1],P=new _,x=function(e){return l.a.createElement("div",{key:e.uri},l.a.createElement(k.a,{variant:"outline-secondary",onClick:function(){!function(e,t){P.fetchTrackMetadata(e).then((function(e){S(e),h(t)}))}(e.uri,e.name),function(e,t){P.fetchArtistMetadata(e).then((function(e){C(e),v(t)}))}(e.artists[0].uri,e.artists[0].name)}},l.a.createElement("div",{className:"result"},l.a.createElement("img",{className:"cover-img",src:e.album.images[0].url,alt:"Album art for ".concat(e.album.name)}),l.a.createElement("section",{className:"result-text"},l.a.createElement("b",null,e.name),l.a.createElement("div",null,e.artists[0].name," \u2022 ",e.album.name)))))},G=function(e,t,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"attribute-title"},e),l.a.createElement(M.a,{title:t},l.a.createElement(L.a,{fontSize:"small"})),l.a.createElement(D.a,{disabled:!0,track:!1,value:a,max:1}))},B=function(e){return e.length?e.join(", "):"No genre information is available for this artist."};return l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"header"},"Enter the name of the track to search for:"),l.a.createElement(A,{submit:function(e){e&&(o(!0),P.searchTracks(e).then((function(e){n(e.tracks.items),o(!1)})))}}),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"column"},0!==a.length||i?l.a.createElement("div",null,i?l.a.createElement("div",null,l.a.createElement(N.a,{animation:"border"}),l.a.createElement("div",null,"*note that the first search might take extra time while the Heroku dyno spins up.")):l.a.createElement("div",{className:"result-list"},a.map((function(e){return x(e)})))):l.a.createElement("div",{key:"-1"},"No search results found.")),l.a.createElement("div",{className:"column"},function(){if(!(null===O||void 0===O?void 0:O.duration_ms))return l.a.createElement("div",null,"Please search for and select a song to view its metadata.");var e,t,a=function(e){return[{title:"Acousticness",tooltip:R.search.tooltips.acousticness,value:e.acousticness},{title:"Danceability",tooltip:R.search.tooltips.danceability,value:e.danceability},{title:"Energy",tooltip:R.search.tooltips.energy,value:e.energy},{title:"Instrumentalness",tooltip:R.search.tooltips.instrumentalness,value:e.instrumentalness},{title:"Liveness",tooltip:R.search.tooltips.liveness,value:e.liveness},{title:"Loudness",tooltip:R.search.tooltips.loudness,value:e.loudness/-60},{title:"Speechiness",tooltip:R.search.tooltips.speechiness,value:e.acousticness},{title:"Valence",tooltip:R.search.tooltips.valence,value:e.valence}]}(O);return l.a.createElement("div",null,l.a.createElement("h3",null,"Audio features for ",l.a.createElement("span",{className:"name"},d),":"),l.a.createElement("h5",null,"Key: ",(e=O.key,t=O.mode,"".concat(function(e){switch(e){case 0:return"C";case 1:return"C#/Db";case 2:return"D";case 3:return"D#/Eb";case 4:return"E";case 5:return"F";case 6:return"F#/Gb";case 7:return"G";case 8:return"G#/Ab";case 9:return"A";case 10:return"A#/Bb";case 11:return"B"}}(e)," ").concat(function(e){switch(e){case 0:return"minor";case 1:return"major"}}(t)))),l.a.createElement("h5",null,"Tempo: ",O.tempo),l.a.createElement("h5",null,"Beats/measure: ",O.time_signature),l.a.createElement("div",{className:"value-sliders"},l.a.createElement("div",{className:"reduced-column"},a.slice(0,4).map((function(e){return G(e.title,e.tooltip,e.value)}))),l.a.createElement("div",{className:"reduced-column"},a.slice(4,a.length).map((function(e){return G(e.title,e.tooltip,e.value)})))))}(),l.a.createElement("hr",null),(null===T||void 0===T?void 0:T.followers)?l.a.createElement("div",null,l.a.createElement("h3",null,"Additional information on ",l.a.createElement("span",{className:"name"},E),":"),l.a.createElement("h5",null,"Genres: ",B(T.genres)),l.a.createElement("h5",null,"Followers: ",T.followers.total.toLocaleString()),l.a.createElement("h5",null,"Popularity: ",T.popularity)):l.a.createElement("div",null,"Please search for and select a song to view its artist's metadata."))))});a(94);var F=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/search",component:B}),l.a.createElement(o.a,{path:"/playlist-compare",component:x}),l.a.createElement(o.a,{path:"/",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(95);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.adc97bfc.chunk.js.map