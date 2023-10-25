"use strict";(self["webpackChunkanything"]=self["webpackChunkanything"]||[]).push([[443],{3221:function(e,t,o){o.r(t),o.d(t,{default:function(){return v}});var s=o(3396);const n={class:"about"};function a(e,t,o,a,r,i){const l=(0,s.up)("About");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(l)])}var r=o(6520),i=o(7139);const l={class:"aboutMain"};function c(e,t,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",{class:"moving-box",style:(0,i.j5)({top:e.boxTop+"vh",left:e.boxLeft+"vw"})},null,4),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.boxes,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"bouncing-box",key:e.id},[(0,s._)("div",{class:"box",style:(0,i.j5)(e.style)},null,4)])))),128))])}var h=o(7327);o(7658);class d extends r.w3{constructor(...e){super(...e),(0,h.Z)(this,"boxTop",20),(0,h.Z)(this,"boxLeft",48),(0,h.Z)(this,"boxes",[])}mounted(){this.createBoxes(),this.animateBoxes(),window.addEventListener("keydown",this.handleKeyDown)}beforeDestroy(){window.removeEventListener("keydown",this.handleKeyDown)}handleKeyDown(e){switch(e.key){case"ArrowUp":this.boxTop-=2;break;case"ArrowDown":this.boxTop+=2;break;case"ArrowLeft":this.boxLeft-=2;break;case"ArrowRight":this.boxLeft+=2;break}}createBoxes(){for(let e=1;e<=28;e++){const t={id:e,style:{top:100*Math.random()+"vh",left:100*Math.random()+"vw"},speed:{x:1*Math.random()-.6,y:1*Math.random()-.6}};this.boxes.push(t)}}animateBoxes(){requestAnimationFrame(this.animateBoxes),this.boxes.forEach((e=>{e.style.top=parseFloat(e.style.top)+e.speed.y+"vh",e.style.left=parseFloat(e.style.left)+e.speed.x+"vw",(parseInt(e.style.top)===this.boxTop+1&&parseInt(e.style.left)===this.boxLeft+1||parseInt(e.style.top)===this.boxTop+1.5&&parseInt(e.style.left)===this.boxLeft+1.5||parseInt(e.style.top)===this.boxTop-1&&parseInt(e.style.left)===this.boxLeft-1||parseInt(e.style.top)===this.boxTop-1.5&&parseInt(e.style.left)===this.boxLeft-1.5||parseInt(e.style.top)===this.boxTop+2&&parseInt(e.style.left)===this.boxLeft+2)&&(console.log("game over"),this.$router.push("/"),alert("game over")),(parseFloat(e.style.top)<-10||parseFloat(e.style.top)>100||parseFloat(e.style.left)<-10||parseFloat(e.style.left)>100)&&(e.style.top=50*Math.random()+"vh",e.style.left=90*Math.random()+"vw")}))}}var u=o(89);const f=(0,u.Z)(d,[["render",c]]);var p=f,y=function(e,t,o,s){var n,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(r=(a<3?n(r):a>3?n(t,o,r):n(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let x=class extends r.w3{};x=y([(0,r.Ei)({components:{About:p}})],x);var m=x;const b=(0,u.Z)(m,[["render",a]]);var v=b},8093:function(e,t,o){o.r(t),o.d(t,{default:function(){return S}});var s=o(3396);const n={class:"pacman"};function a(e,t,o,a,r,i){const l=(0,s.up)("pacman",!0);return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(l)])}var r=o(6520),i=o(7139);const l=e=>((0,s.dD)("data-v-724326d6"),e=e(),(0,s.Cn)(),e),c={class:"gameBox"},h={ref:"canvas",width:"400",height:"400"},d={key:0,class:"gameOpen"},u={class:"modal"},f={class:"modal-content"},p={key:0},y=l((()=>(0,s._)("br",null,null,-1))),x=l((()=>(0,s._)("br",null,null,-1))),m={key:1},b=l((()=>(0,s._)("br",null,null,-1))),v=l((()=>(0,s._)("br",null,null,-1)));function w(e,t,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",c,[(0,s._)("canvas",h,null,512),(0,s._)("div",null,"획득 점수: "+(0,i.zw)(e.score),1)]),e.gameOn?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",u,[(0,s._)("div",f,[e.gameScore?e.gameScore?((0,s.wg)(),(0,s.iD)("div",m,[(0,s.Uk)(" Game Over"),b,(0,s.Uk)(" 당신의 총 점수는 : "+(0,i.zw)(e.finalScore),1),v,(0,s._)("button",{onClick:t[1]||(t[1]=t=>e.reset("none"))},"돌아 가기"),(0,s._)("button",{onClick:t[2]||(t[2]=t=>e.reset("email"))}," 개발자에게 점수 및 평가보내기 ")])):(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",p,[(0,s.Uk)(" 환영합니다"),y,(0,s.Uk)(" 조종은 키보드 방향키로 해주세요"),x,(0,s._)("button",{onClick:t[0]||(t[0]=t=>e.startGame())},"게임 시작")]))])])])):(0,s.kq)("",!0)])}o(7658);class g extends r.w3{data(){return{gameScore:!1,gameOn:!0,score:0,finalScore:0}}mounted(){console.log("게임실행")}initializeGame(){const e=this.$refs.canvas,t=e.getContext("2d"),o={x:200,y:200,radius:13,mouthOpen:30},s={x:Math.random()*e.width,y:Math.random()*e.height,radius:10},n={x:Math.random()*e.width,y:Math.random()*e.height,radius:10,speed:1},a=()=>{t.beginPath(),t.arc(n.x,n.y,n.radius,0,2*Math.PI),t.fillStyle="orange",t.fill(),t.closePath()};function r(){const e=o.x-n.x,t=o.y-n.y,s=Math.atan2(t,e);n.x+=n.speed*Math.cos(s),n.y+=n.speed*Math.sin(s)}function i(){t.clearRect(0,0,e.width,e.height),t.beginPath(),t.arc(o.x,o.y,o.radius,o.mouthOpen/180*Math.PI,(360-o.mouthOpen/180)*Math.PI),t.lineTo(o.x,o.y),t.fillStyle="yellow",t.fill(),t.closePath()}function l(){t.beginPath(),t.arc(s.x,s.y,s.radius,0,2*Math.PI),t.fillStyle="red",t.fill(),t.closePath()}function c(){0===o.direction&&o.x+o.radius<e.width?o.x+=2:1===o.direction&&o.y+o.radius<e.height?o.y+=2:2===o.direction&&o.x-o.radius>0?o.x-=2:3===o.direction&&o.y-o.radius>0&&(o.y-=2)}const h=()=>{const t=o.x-s.x,a=o.y-s.y,r=Math.sqrt(t*t+a*a);r<o.radius+s.radius&&(this.score+=1,this.score>=5?n.speed=1.4:this.score>=10&&(n.speed=1.8),s.x=Math.random()*e.width,s.y=Math.random()*e.height);const i=o.x-n.x,l=o.y-n.y,c=Math.sqrt(i*i+l*l);c<o.radius+n.radius&&(this.gameOn=!0,this.gameScore=!0,this.gameScore&&(this.score<this.finalScore?this.finalScore=this.finalScore+0:this.score>this.finalScore&&(this.finalScore=this.score)),e.removeEventListener("keydown",u))};function d(){o.mouthOpen=(o.mouthOpen+5)%360,e.addEventListener("keydown",u),c(),h(),r(),i(),l(),a(),requestAnimationFrame(d)}function u(e){"ArrowRight"===e.key?o.direction=0:"ArrowDown"===e.key?o.direction=1:"ArrowLeft"===e.key?o.direction=2:"ArrowUp"===e.key&&(o.direction=3)}e.setAttribute("tabindex","0"),e.focus(),d()}reset(e){"email"==e&&alert("아직 미구현 10/25"),this.$nextTick((()=>{this.$router.push("/")}))}startGame(){this.gameOn=!1,this.initializeGame()}}var k=o(89);const M=(0,k.Z)(g,[["render",w],["__scopeId","data-v-724326d6"]]);var D=M,O=function(e,t,o,s){var n,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(r=(a<3?n(r):a>3?n(t,o,r):n(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let _=class extends r.w3{};_=O([(0,r.Ei)({components:{pacman:D}})],_);var I=_;const L=(0,k.Z)(I,[["render",a]]);var S=L}}]);
//# sourceMappingURL=about.fef7a63b.js.map