"use strict";(self["webpackChunkanything"]=self["webpackChunkanything"]||[]).push([[443],{3221:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var s=a(3396);const i={class:"about"};function n(e,t,a,n,o,r){const l=(0,s.up)("About");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(l)])}var o=a(6520),r=a(7139);const l={class:"aboutMain"};function c(e,t,a,i,n,o){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",{class:"moving-box",style:(0,r.j5)({top:e.boxTop+"vh",left:e.boxLeft+"vw"})},null,4),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.boxes,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"bouncing-box",key:e.id},[(0,s._)("div",{class:"box",style:(0,r.j5)(e.style)},null,4)])))),128))])}var d=a(7327);a(7658);class h extends o.w3{constructor(...e){super(...e),(0,d.Z)(this,"boxTop",20),(0,d.Z)(this,"boxLeft",48),(0,d.Z)(this,"boxes",[])}mounted(){this.createBoxes(),this.animateBoxes(),window.addEventListener("keydown",this.handleKeyDown)}beforeDestroy(){window.removeEventListener("keydown",this.handleKeyDown)}handleKeyDown(e){switch(e.key){case"ArrowUp":this.boxTop-=2;break;case"ArrowDown":this.boxTop+=2;break;case"ArrowLeft":this.boxLeft-=2;break;case"ArrowRight":this.boxLeft+=2;break}}createBoxes(){for(let e=1;e<=28;e++){const t={id:e,style:{top:100*Math.random()+"vh",left:100*Math.random()+"vw"},speed:{x:1*Math.random()-.6,y:1*Math.random()-.6}};this.boxes.push(t)}}animateBoxes(){requestAnimationFrame(this.animateBoxes),this.boxes.forEach((e=>{e.style.top=parseFloat(e.style.top)+e.speed.y+"vh",e.style.left=parseFloat(e.style.left)+e.speed.x+"vw",(parseInt(e.style.top)===this.boxTop+1&&parseInt(e.style.left)===this.boxLeft+1||parseInt(e.style.top)===this.boxTop+1.5&&parseInt(e.style.left)===this.boxLeft+1.5||parseInt(e.style.top)===this.boxTop-1&&parseInt(e.style.left)===this.boxLeft-1||parseInt(e.style.top)===this.boxTop-1.5&&parseInt(e.style.left)===this.boxLeft-1.5||parseInt(e.style.top)===this.boxTop+2&&parseInt(e.style.left)===this.boxLeft+2)&&(console.log("game over"),this.$router.push("/"),alert("game over")),(parseFloat(e.style.top)<-10||parseFloat(e.style.top)>100||parseFloat(e.style.left)<-10||parseFloat(e.style.left)>100)&&(e.style.top=50*Math.random()+"vh",e.style.left=90*Math.random()+"vw")}))}}var p=a(89);const u=(0,p.Z)(h,[["render",c]]);var m=u,g=function(e,t,a,s){var i,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,s);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(n<3?i(o):n>3?i(t,a,o):i(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o};let y=class extends o.w3{};y=g([(0,o.Ei)({components:{About:m}})],y);var f=y;const v=(0,p.Z)(f,[["render",n]]);var w=v},3486:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var s=a(3396);const i={class:"anyThingPage"};function n(e,t,a,n,o,r){const l=(0,s.up)("anyThingPage",!0);return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(l)])}var o=a(6520);const r={class:"case"},l=(0,s._)("div",{class:"top"},[(0,s._)("div",{class:"top-bar"})],-1),c={class:"screen"},d=(0,s._)("div",{class:"dot"},null,-1),h={class:"inner-screen"},p=(0,s.uE)('<div class="control"><div class="d-pad"><div class="bar"></div><div class="bar1"></div></div><div class="buttons"></div><div class="starts"></div><div class="barrs"></div></div>',1);function u(e,t,a,i,n,o){return(0,s.wg)(),(0,s.iD)("div",r,[l,(0,s._)("div",c,[d,(0,s._)("div",h,[(0,s._)("table",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.rows,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cells,(e=>((0,s.wg)(),(0,s.iD)("td",{key:e,class:"{cell}"},"■")))),128))])))),128))])])]),p])}var m=a(7327);class g extends o.w3{constructor(...e){super(...e),(0,m.Z)(this,"rows",6),(0,m.Z)(this,"cells",10),(0,m.Z)(this,"playfield",[])}mounted(){this.initializePlayfield()}initializePlayfield(){this.animatePlayfield()}animatePlayfield(){alert("제작중입니다."),console.log("게임 자동시작")}}var y=a(89);const f=(0,y.Z)(g,[["render",u]]);var v=f,w=function(e,t,a,s){var i,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,s);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(n<3?i(o):n>3?i(t,a,o):i(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o};let b=class extends o.w3{};b=w([(0,o.Ei)({components:{anyThingPage:v}})],b);var x=b;const _=(0,y.Z)(x,[["render",n]]);var k=_},9932:function(e,t,a){a.r(t),a.d(t,{default:function(){return ae}});var s=a(3396);const i={class:"pacman"};function n(e,t,a,n,o,r){const l=(0,s.up)("pacman",!0);return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(l)])}var o=a(6520),r=a(7139),l=a(9242),c=a.p+"media/bgm1.0f6fcc87.mp3";const d=e=>((0,s.dD)("data-v-0a3b26bc"),e=e(),(0,s.Cn)(),e),h={class:"gameContainer"},p={class:"gameBox"},u={ref:"audioPlayer",controls:"",loop:"",hidden:""},m=d((()=>(0,s._)("source",{src:c,type:"audio/mpeg"},null,-1))),g=[m],y={ref:"canvas",width:"360",height:"400"},f={class:"gameScores"},v={class:"danger",style:{"font-weight":"bold"}},w={style:{"font-weight":"bold"}},b={key:0,class:"gameOpen"},x={class:"modal"},_={class:"modal-content"},k={key:0},D=d((()=>(0,s._)("h4",null,[(0,s.Uk)(" 집게 사장으로 도망쳐 게살버거를 드세요!"),(0,s._)("br"),(0,s.Uk)(" 조종은 키보드 방향키로 해주세요(모바일X) ")],-1))),I=d((()=>(0,s._)("br",null,null,-1))),M={key:1},O={class:"reviewNone",style:{display:"block"}},L=(0,s.Uk)("Game Over "),T=d((()=>(0,s._)("br",null,null,-1))),j=d((()=>(0,s._)("br",null,null,-1))),P={class:"reviewShow",style:{display:"none"}},A=d((()=>(0,s._)("h4",null,"별점 평가",-1))),R=(0,s.uE)('<option value="1" data-v-0a3b26bc>1</option><option value="2" data-v-0a3b26bc>2</option><option value="3" data-v-0a3b26bc>3</option><option value="4" data-v-0a3b26bc>4</option><option value="5" data-v-0a3b26bc>5</option>',5),C=[R],S=d((()=>(0,s._)("h4",null,"당신은 누구인가요?",-1))),q=d((()=>(0,s._)("h4",null,"개발자에게 하고싶은 말은?",-1))),E=d((()=>(0,s._)("br",null,null,-1)));function Z(e,t,a,i,n,o){return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",p,[(0,s._)("audio",u,g,512),(0,s._)("canvas",y,null,512),(0,s._)("div",f,[(0,s._)("span",v,(0,r.zw)(e.message),1),(0,s._)("span",w,"점수: "+(0,r.zw)(e.score),1)])]),e.gameOn?((0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("div",x,[(0,s._)("div",_,[e.gameScore?e.gameScore?((0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("div",O,[(0,s._)("h4",null,[L,T,(0,s.Uk)("당신의 총 점수는 : "+(0,r.zw)(e.finalScore),1)]),j,(0,s._)("button",{onClick:t[1]||(t[1]=t=>e.reset("none"))},"돌아가기"),(0,s._)("button",{onClick:t[2]||(t[2]=t=>e.reset("email"))},"평가하기")]),(0,s._)("div",P,[A,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.rating=t),style:{width:"50px"}},C,512),[[l.bM,e.rating]]),S,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.reviewerName=t),type:"text",placeholder:"누군지 알려주세요"},null,512),[[l.nr,e.reviewerName]]),q,(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.reviewContent=t),placeholder:"아무말이라도 적어서 평가해주세요 :>",style:{width:"300px",height:"100px"}},null,512),[[l.nr,e.reviewContent]]),E,(0,s._)("button",{onClick:t[6]||(t[6]=t=>e.sendMail("send"))},"평가제출"),(0,s._)("button",{onClick:t[7]||(t[7]=t=>e.sendMail("close"))},"돌아가기")])])):(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",k,[D,I,(0,s._)("button",{onClick:t[0]||(t[0]=t=>e.startGame())},"게임 시작")]))])])])):(0,s.kq)("",!0)])}a(7658);const F={_origin:"https://api.emailjs.com"},N=(e,t="https://api.emailjs.com")=>{F._userID=e,F._origin=t},U=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ${constructor(e){this.status=e.status,this.text=e.responseText}}const z=(e,t,a={})=>new Promise(((s,i)=>{const n=new XMLHttpRequest;n.addEventListener("load",(({target:e})=>{const t=new $(e);200===t.status||"OK"===t.text?s(t):i(t)})),n.addEventListener("error",(({target:e})=>{i(new $(e))})),n.open("POST",F._origin+e,!0),Object.keys(a).forEach((e=>{n.setRequestHeader(e,a[e])})),n.send(t)})),K=(e,t,a,s)=>{const i=s||F._userID;U(i,e,t);const n={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:a};return z("/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})},B=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},H=(e,t,a,s)=>{const i=s||F._userID,n=B(a);U(i,e,t);const o=new FormData(n);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",i),z("/api/v1.0/email/send-form",o)};var V={init:N,send:K,sendForm:H};class G extends o.w3{data(){return{reviewContent:"",reviewerName:"",rating:5,message:"",gameScore:!1,gameOn:!0,score:0,finalScore:0,imagesData5:a(6741),imagesData4:a(7395),imagesData3:a(8964),imagesData2:a(8829),imagesData:a(2032),imageLoaded:!1,oranges:[]}}mounted(){document.body.style.overflow="hidden",this.playAudio()}playAudio(){this.$refs.audioPlayer.volume=.08;const e=this.$refs.audioPlayer;e.play()}initializeGame(){const e=this.$refs.canvas,t=e.getContext("2d"),a={x:200,y:200,radius:12,mouthOpen:90,image:new Image},s={x:Math.random()*e.width,y:Math.random()*e.height,radius:10,image:new Image},i={x:50,y:50,radius:10,speed:1,image:new Image},n={x:Math.random()*e.width,y:Math.random()*e.height,radius:10,speed:1,image:new Image},o={x:Math.random()*e.width,y:Math.random()*e.height,radius:10,speed:1,image:new Image};a.image.src=this.imagesData3,s.image.src=this.imagesData2,i.image.src=this.imagesData,n.image.src=this.imagesData4,o.image.src=this.imagesData5;const r=()=>{t.drawImage(i.image,i.x-40,i.y-40,80,80)},l=()=>{t.drawImage(n.image,n.x-40,n.y-40,80,80)},c=()=>{t.drawImage(o.image,o.x-40,o.y-40,80,80)};function d(e){const t=a.x-e.x,s=a.y-e.y,i=Math.atan2(s,t);e.x+=e.speed*Math.cos(i),e.y+=e.speed*Math.sin(i)}function h(){t.clearRect(0,0,e.width,e.height),t.drawImage(a.image,a.x-10,a.y-10,30,60)}function p(){t.drawImage(s.image,s.x-30,s.y-30,60,60)}function u(){0===a.direction&&a.x+a.radius<e.width?a.x+=2:1===a.direction&&a.y+a.radius<e.height?a.y+=2:2===a.direction&&a.x-a.radius>0?a.x-=2:3===a.direction&&a.y-a.radius>0&&(a.y-=2)}i.image.onload=function(){r()},a.image.onload=function(){h()},s.image.onload=function(){p()};const m=()=>{const t=a.x-s.x,n=a.y-s.y,r=Math.sqrt(t*t+n*n);if(r<a.radius+s.radius){switch(this.score+=1,this.score){case 4:i.speed=1.3,this.message="집게사장이 화났습니다. 속도가 빨라집니다.";break;case 6:i.speed=1.45,this.message="집게사장이 분신술을 사용했습니다.";break;case 7:this.message="";break;case 8:this.message="",i.speed=1.5;break;case 9:this.message="포식한 결과 징징이의 속도가 증가합니다!",a.speed=2.1;break;case 10:this.message="집게사장이 분노를 사용했습니다!",i.speed=1.7;break;case 13:this.message="집게사장의 졸개가 도착했습니다!",i.speed=1.8,o.speed=1.45;break;case 15:this.message="게임승리!";break}s.x=Math.random()*e.width,s.y=Math.random()*e.height}g(a,i,e)},g=(e,t,a)=>{const s=e.x-t.x,i=e.y-t.y,n=Math.sqrt(s*s+i*i);n<e.radius+t.radius&&(this.gameOn=!0,this.gameScore=!0,this.finalScore=this.score,e.x=t.x,e.y=t.y,a.removeEventListener("keydown",f))},y=()=>{a.mouthOpen=(a.mouthOpen+5)%360,e.addEventListener("keydown",f),u(),m(),d(i),h(),p(),r(),this.score>=6&&(l(),d(n),g(a,n,e),this.score>=13&&(c(),d(o),g(a,o,e))),requestAnimationFrame(y)};function f(e){"ArrowRight"===e.key?a.direction=0:"ArrowDown"===e.key?a.direction=1:"ArrowLeft"===e.key?a.direction=2:"ArrowUp"===e.key&&(a.direction=3)}e.setAttribute("tabindex","0"),e.focus(),y()}sendMail(e){"send"==e?""==this.reviewerName?alert("최소한 이름은 알려주이소 누군지 :<"):(V.init("RL-sgo5vo_PAEhlXN"),V.send("service_portfolio","template_1mkalef",{to_name:this.rating,from_name:this.reviewerName,message:this.reviewContent}).then((e=>{alert("개발자에게 메시지가 전송이 완료됐습니다."),this.$router.push("/")}),(e=>{console.error("이메일 전송 중 오류가 발생했습니다.")}))):this.$router.push("/")}reset(e){if("email"==e){const e=document.querySelector(".reviewNone"),t=document.querySelector(".reviewShow");null!==e&&null!==t&&(e.style.display="none",t.style.display="block")}else this.$nextTick((()=>{this.$router.push("/")}))}startGame(){this.gameOn=!1,this.initializeGame()}}var W=a(89);const X=(0,W.Z)(G,[["render",Z],["__scopeId","data-v-0a3b26bc"]]);var Y=X,J=function(e,t,a,s){var i,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,s);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(n<3?i(o):n>3?i(t,a,o):i(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o};let Q=class extends o.w3{};Q=J([(0,o.Ei)({components:{pacman:Y}})],Q);var ee=Q;const te=(0,W.Z)(ee,[["render",n]]);var ae=te},8829:function(e,t,a){e.exports=a.p+"img/ham.37edfb79.webp"},8964:function(e,t,a){e.exports=a.p+"img/j.722bb897.webp"},2032:function(e,t,a){e.exports=a.p+"img/kcar2.2a4a1105.png"},7395:function(e,t,a){e.exports=a.p+"img/kcar3.cbd40162.gif"},6741:function(e,t,a){e.exports=a.p+"img/sp.8ca72e4d.png"}}]);
//# sourceMappingURL=about.b4b0f47e.js.map