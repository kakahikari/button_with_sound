"use strict";(self["webpackChunkbutton_with_sound"]=self["webpackChunkbutton_with_sound"]||[]).push([[317],{7377:function(t,e,n){n.d(e,{Z:function(){return d}});var o=n(3396),i=n.p+"img/mushroom.fdb0a1c8.gif";const u=t=>((0,o.dD)("data-v-98f6056a"),t=t(),(0,o.Cn)(),t),c=u((()=>(0,o._)("img",{id:"cuteGif",src:i,alt:"Mushroom GIF",style:{width:"200px",height:"200px"}},null,-1))),s=[c];function l(t,e,n,i,u,c){return(0,o.wg)(),(0,o.iD)("div",{onClick:e[0]||(e[0]=(...t)=>c.clickMushroom&&c.clickMushroom(...t))},s)}n(560);var r={name:"CuteMushroom",data(){return{cuteGif:null}},mounted(){this.cuteGif=document.getElementById("cuteGif"),setTimeout((()=>{this.animate()}),3e4)},methods:{clickMushroom(){this.$router.push("/mole")},animate(){let t=-200;const e=3;this.cuteGif.style.display="block",this.cuteGif.style.left="-200px",this.cuteGif.style.bottom="0";const n=setInterval((()=>{t+=e,this.cuteGif.style.left=t+"px",t>=window.innerWidth&&(clearInterval(n),this.cuteGif.style.display="none",setTimeout((()=>{this.animate()}),3e4))}),10)}}},a=n(89);const h=(0,a.Z)(r,[["render",l],["__scopeId","data-v-98f6056a"]]);var d=h},2939:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var o=n(3396),i=n.p+"img/wall_v1.f605110d.jpg";const u=(0,o._)("h3",null,"夢迴2023 傳送門",-1),c=(0,o._)("h3",null,"死去的記憶突然攻擊你",-1),s=[u,c];function l(t,e,n,u,c,l){const r=(0,o.up)("CuteMushroom");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("img",{style:{padding:"5px"},width:"65%",height:"65%",alt:"logo",src:i,onClick:e[0]||(e[0]=(...t)=>l.clickIcon&&l.clickIcon(...t))}),(0,o._)("div",{class:"empty mt-3",onClick:e[1]||(e[1]=(...t)=>l.portal&&l.portal(...t))},s),(0,o.Wm)(r)],64)}var r=n(7377),a=n.p+"media/laugh.f5afb59f.mp3",h={name:"EasterEggView",data(){return{esterEggCount:0}},components:{CuteMushroom:r.Z},methods:{clickIcon(){this.esterEggCount+=1,this.playSoundEffect()},portal(){window.open("/#/pope_hbd_2023")},playSoundEffect(){const t=new Audio(a);let e=!1,n=!1;n&&(t.pause(),t.currentTime=0),e&&(e=!1,n=!1,t.onerror=function(){e=!0});const o=t.play();void 0!==o&&o.then((t=>{n=!0})).catch((t=>{e=!0}))}}},d=n(89);const m=(0,d.Z)(h,[["render",l]]);var f=m}}]);
//# sourceMappingURL=317.0a4bc76a.js.map