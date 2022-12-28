(this["webpackJsonpspotify-accessor-for-metadata"]=this["webpackJsonpspotify-accessor-for-metadata"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/black-logo.5e670a4b.png"},45:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/green-logo.feb227e2.png"},66:function(e,t,a){e.exports=a(96)},71:function(e,t,a){},72:function(e,t,a){},77:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),c=a(9),s=a.n(c),i=(a(71),a(24)),o=a(7),u=a(26),m=a(27),d=a(40),h=a(39);!function(e){e.DEV="DEV",e.PROD="PROD"}(n||(n={}));var p,f="/",E="/search",v="/compare",b=a(58),y=a.n(b),g=(a(72),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(i.b,{className:"logo",to:f},r.a.createElement("img",{className:"logo-img",src:y.a,alt:"Logo for S.A.M."}),r.a.createElement("h1",{className:"title"},"Spotify Accessor for Metadata")),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement(i.b,{to:f},"HOME")),r.a.createElement("li",null,r.a.createElement(i.b,{to:E},"SEARCH")),r.a.createElement("li",null,r.a.createElement(i.b,{to:v},"COMPARE PLAYLISTS"))))}}]),a}(r.a.Component)),k=a(34),N=a.n(k),O=(a(77),function(){var e="https://github.com/deantorkelson/spotify-accessor-for-metadata";return r.a.createElement("div",{className:"page"},r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("br",null),r.a.createElement("br",null),"Welcome to the Spotify Accessor for Metadata!"),r.a.createElement("div",{className:"main-text"},r.a.createElement("h3",null,"This website was designed to allow you to do more with the metadata stored by Spotify. It's still in development, so please refer to the ",function(){var t="".concat(e,"/blob/master/README.md");return r.a.createElement("a",{className:"readme",href:t},"readme")}()," or ",function(){var t="".concat(e,"/issues");return r.a.createElement("a",{className:"readme",href:t},"Github Issues")}()," to see what's in store!"))),r.a.createElement("img",{className:"main-logo",src:N.a,alt:"Spotify Accessor for Metadata logo"}))}),S=a(13),j=a(19),w=a(31),C=a(61),T=a(64),_=a(59),A=a.n(_),D=a(49),P=(a(86),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).text="",e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(D.a,{className:"input",inline:!0},r.a.createElement(D.a.Control,{className:"text-input",placeholder:this.props.placeholder,type:"text",onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),e.props.submit())},onChange:function(t){return e.text=t.target.value}}),r.a.createElement(j.a,{className:"submit",type:"button",variant:"outline-success",onClick:function(){return e.props.submit(e.text)}},r.a.createElement("img",{className:"submit-img",src:N.a,alt:"Submit"})))}}]),a}(r.a.Component)),M=function(e){var t=e.split("?")[0].split("/").pop();return"spotify:playlist:".concat(t)};!function(e){e.GET="GET",e.POST="POST"}(p||(p={}));var x=function(){function e(){Object(u.a)(this,e),this.api_url=void 0,console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/spotify-accessor-for-metadata",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ENV),Object({NODE_ENV:"production",PUBLIC_URL:"/spotify-accessor-for-metadata",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ENV===n.DEV?this.api_url="http://127.0.0.1:5000":this.api_url="http://spotify-accessor-for-metadata.eba-7tn7wevk.us-east-2.elasticbeanstalk.com/"}return Object(m.a)(e,[{key:"searchTracks",value:function(e){return this.get(this.api_url+"/search/tracks?q=".concat(e))}},{key:"searchPlaylists",value:function(e){return this.get(this.api_url+"/search/playlists?q=".concat(e))}},{key:"playlistDetails",value:function(e){return this.get(this.api_url+"/playlistDetails/".concat(e))}},{key:"fetchTrackMetadata",value:function(e){return this.get(this.api_url+"/fetchTrackMetadata/".concat(e))}},{key:"fetchArtistMetadata",value:function(e){return this.get(this.api_url+"/fetchArtistMetadata/".concat(e))}},{key:"comparePlaylists",value:function(e){var t=JSON.stringify({uris:e});return this.post(this.api_url+"/comparePlaylists",t)}},{key:"get",value:function(e){return fetch(e).then((function(e){return e.json()}))}},{key:"post",value:function(e,t){var a={method:p.POST,headers:{"Content-Type":"application/json"},body:t};return fetch(e,a).then((function(e){return e.json()}))}}]),e}(),R={search:{tooltips:{acousticness:"A confidence measure from 0.0 to 1.0 of whether the track is acoustic.",danceability:"Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.",energy:"Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.",instrumentalness:'Predicts whether a track contains no vocals. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content.',liveness:"Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.",loudness:"The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks.",speechiness:"Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.",valence:"A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track."},placeholder:"Enter the name of a song or artist..."},playlistCompare:{placeholder:"Search for a playlist...",tooltip:'This would look like "https://open.spotify.com/playlist/5YfQFj40rrMiUp5hutvfH6"'}},L=(a(88),a(45),a(89)),F=function(){var e=Object(l.useState)([]),t=Object(S.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(!1),s=Object(S.a)(c,2),i=s[0],o=s[1],u=Object(l.useState)(new Set),m=Object(S.a)(u,2),d=m[0],h=m[1],p=Object(l.useState)(!1),f=Object(S.a)(p,2),E=f[0],v=f[1],b=Object(l.useState)(!1),y=Object(S.a)(b,2),g=y[0],k=y[1],N=Object(l.useState)(),O=Object(S.a)(N,2),_=O[0],D=O[1],F=new x,H=function(e){var t=new Set(d);t.add(e),h(t)},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];v(!0);var a=t;e.forEach((function(e){a.push(e.uri)})),a.concat(t),F.comparePlaylists(a).then((function(e){v(!1),k(!0),D(e)}))},W=function(){k(!1)},I=function(e,t){return r.a.createElement("div",{key:e.uri},r.a.createElement(j.a,{variant:"outline-secondary",onClick:function(){t(e)}},r.a.createElement("div",{className:"result"},r.a.createElement("img",{className:"cover-img",src:e.images[0].url,alt:"Cover for ".concat(e.name)}),r.a.createElement("section",{className:"result-text"},r.a.createElement("div",null,r.a.createElement("b",null,e.name)," by ",e.owner.display_name),e.description&&r.a.createElement("div",null,"Description: ",L.decode(e.description)),r.a.createElement("div",null,e.tracks.total," songs")))))};return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"header"},"Enter the name of the playlist to search for, ",r.a.createElement("br",null),"or a\xa0",r.a.createElement(T.a,{placement:"right",delay:{show:100,hide:400},overlay:function(e){return r.a.createElement(C.a,e,R.playlistCompare.tooltip)}},r.a.createElement("span",{className:"uri-tooltip"},"link to a playlist:"))),r.a.createElement(P,{placeholder:R.playlistCompare.placeholder,submit:function(e){if(e)if(console.log(e),function(e){return e.includes("open.spotify.com/playlist")}(e)){console.log("is playlist"),o(!0);var t=M(e);F.playlistDetails(t).then((function(e){console.log({data:e}),H(e)})),o(!1)}else console.log("is NAUR playlist"),o(!0),F.searchPlaylists(e).then((function(e){n(e.playlists.items),o(!1)}))}}),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"column"},0!==a.length||i?r.a.createElement(r.a.Fragment,null,i?r.a.createElement("div",null,r.a.createElement(w.a,{animation:"border"}),r.a.createElement("div",null,"*note that the first search might take extra time while the Heroku dyno spins up.")):r.a.createElement("div",{className:"result-list"},a.map((function(e){return I(e,(function(){return H(e)}))})))):r.a.createElement("div",{key:"-1"},"No search results found.")),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"header"},"Comparing these playlists:"),0===d.size?r.a.createElement("div",null,"Please select some playlists to compare."):r.a.createElement("div",null,function(){var e=[];return d.forEach((function(t){e.push(I(t,(function(){return H(t)})))})),e}(),E||0===d.size?r.a.createElement("div",null,r.a.createElement(w.a,{animation:"border"})):r.a.createElement("div",{className:"buttons"},r.a.createElement(j.a,{className:"submit",type:"button",variant:"success",onClick:function(){return B(d)}},"Submit"),r.a.createElement(j.a,{className:"submit",type:"button",variant:"secondary",onClick:function(){return h(new Set)}},"Clear"),r.a.createElement(j.a,{className:"submit",type:"button",variant:"danger",onClick:function(){return B(d,["spotify/playlist/0ndBAQglIRXPRdh2SDXfcD"])}},"Compare to Dean's music")))),r.a.createElement("div",null,r.a.createElement(A.a,{isOpen:g,onRequestClose:W,style:{content:{margin:"auto",width:"75%"}}},_?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"outline-secondary",onClick:W},"Close"),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"column-30"},r.a.createElement("div",{className:"header"},"Comparing these playlists:"),_.names.map((function(e){return r.a.createElement("div",null,e)}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"header"},"Common artists:"),r.a.createElement("ul",null,_.artists.map((function(e){return r.a.createElement("div",{className:"modal-li"},e)})))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"header"},"Common songs:"),r.a.createElement("ul",null,_.songs.map((function(e){return r.a.createElement("div",{className:"modal-li"},e)})))))):r.a.createElement(r.a.Fragment,null)))))},H=a(120),B=a(119),W=a(63),I=a.n(W);a(56);var K=function(e){var t=e.artistName,a=e.artistMetadata,n=e.audioFeatureSliderData,l=e.fetchMetadata,c=e.loading,s=e.searchResults,i=e.searchSubmit,o=e.trackName,u=e.trackMetadata,m=function(e){return r.a.createElement("div",{key:e.uri},r.a.createElement(j.a,{variant:"outline-secondary",onClick:function(){l(e.uri,e.name,e.artists[0].uri,e.artists[0].name)}},r.a.createElement("div",{className:"result"},r.a.createElement("img",{className:"cover-img",src:e.album.images[0].url,alt:"Album art for ".concat(e.album.name)}),r.a.createElement("section",{className:"result-text"},r.a.createElement("b",null,e.name),r.a.createElement("div",null,e.artists[0].name," \u2022 ",e.album.name)))))},d=function(e,t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"attribute-title"},e),r.a.createElement(B.a,{title:t},r.a.createElement(I.a,{fontSize:"small"})),r.a.createElement(H.a,{disabled:!0,track:!1,value:a,max:1}))},h=function(e){return e.length?e.join(", "):"No genre information is available for this artist."};return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"header"},"Enter the name of the track to search for:"),r.a.createElement(P,{placeholder:R.search.placeholder,submit:i}),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"column"},0!==s.length||c?r.a.createElement("div",null,c?r.a.createElement("div",null,r.a.createElement(w.a,{animation:"border"}),r.a.createElement("div",null,"*note that the first search might take extra time while the Heroku dyno spins up.")):r.a.createElement("div",{className:"result-list"},s.map((function(e){return m(e)})))):r.a.createElement("div",{key:"-1"},"No search results found.")),r.a.createElement("div",{className:"column"},function(){if(!(null===u||void 0===u?void 0:u.duration_ms))return r.a.createElement("div",null,"Please search for and select a song to view its metadata.");var e,t;return r.a.createElement("div",null,r.a.createElement("h3",null,"Audio features for ",r.a.createElement("span",{className:"name"},o),":"),r.a.createElement("h5",null,"Key: ",(e=u.key,t=u.mode,"".concat(function(e){switch(e){case 0:return"C";case 1:return"C#/Db";case 2:return"D";case 3:return"D#/Eb";case 4:return"E";case 5:return"F";case 6:return"F#/Gb";case 7:return"G";case 8:return"G#/Ab";case 9:return"A";case 10:return"A#/Bb";case 11:return"B"}}(e)," ").concat(function(e){switch(e){case 0:return"minor";case 1:return"major"}}(t)))),r.a.createElement("h5",null,"Tempo: ",u.tempo),r.a.createElement("h5",null,"Beats/measure: ",u.time_signature),r.a.createElement("div",{className:"value-sliders"},r.a.createElement("div",{className:"reduced-column"},n.slice(0,4).map((function(e){return d(e.title,e.tooltip,e.value)}))),r.a.createElement("div",{className:"reduced-column"},n.slice(4,n.length).map((function(e){return d(e.title,e.tooltip,e.value)})))))}(),r.a.createElement("hr",null),(null===a||void 0===a?void 0:a.followers)?r.a.createElement("div",null,r.a.createElement("h3",null,"Additional information on ",r.a.createElement("span",{className:"name"},t),":"),r.a.createElement("h5",null,"Genres: ",h(a.genres)),r.a.createElement("h5",null,"Followers: ",a.followers.total.toLocaleString()),r.a.createElement("h5",null,"Popularity: ",a.popularity)):r.a.createElement("div",null,"Please search for and select a song to view its artist's metadata."))))},V=function(){var e=Object(l.useState)(""),t=Object(S.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)({}),s=Object(S.a)(c,2),i=s[0],o=s[1],u=Object(l.useState)([]),m=Object(S.a)(u,2),d=m[0],h=m[1],p=Object(l.useState)(!1),f=Object(S.a)(p,2),E=f[0],v=f[1],b=Object(l.useState)(""),y=Object(S.a)(b,2),g=y[0],k=y[1],N=Object(l.useState)({}),O=Object(S.a)(N,2),j=O[0],w=O[1],C=new x,T=function(e,t){C.fetchTrackMetadata(e).then((function(e){w(e),k(t)}))},_=function(e,t){C.fetchArtistMetadata(e).then((function(e){o(e),n(t)}))};return r.a.createElement(K,{artistName:a,artistMetadata:i,audioFeatureSliderData:function(e){return[{title:"Acousticness",tooltip:R.search.tooltips.acousticness,value:e.acousticness},{title:"Danceability",tooltip:R.search.tooltips.danceability,value:e.danceability},{title:"Energy",tooltip:R.search.tooltips.energy,value:e.energy},{title:"Instrumentalness",tooltip:R.search.tooltips.instrumentalness,value:e.instrumentalness},{title:"Liveness",tooltip:R.search.tooltips.liveness,value:e.liveness},{title:"Loudness",tooltip:R.search.tooltips.loudness,value:e.loudness/-60},{title:"Speechiness",tooltip:R.search.tooltips.speechiness,value:e.acousticness},{title:"Valence",tooltip:R.search.tooltips.valence,value:e.valence}]}(j),fetchMetadata:function(e,t,a,n){T(e,t),_(a,n)},loading:E,searchResults:d,searchSubmit:function(e){e&&(v(!0),C.searchTracks(e).then((function(e){h(e.tracks.items),v(!1)})))},trackName:g,trackMetadata:j})};a(94);var G=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:E},r.a.createElement(V,null)),r.a.createElement(o.a,{exact:!0,path:v},r.a.createElement(F,null)),r.a.createElement(o.a,{exact:!0,path:f},r.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(95);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.f151fba1.chunk.js.map