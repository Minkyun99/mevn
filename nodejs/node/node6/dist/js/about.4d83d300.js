"use strict";(self["webpackChunkchat02"]=self["webpackChunkchat02"]||[]).push([[443],{8924:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a=t(3396),i=t(7139),u={__name:"AboutView",setup(e){const n="이것은 setup으로 작성한 것임";return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,(0,i.zw)(`${this.$kmk}`),1),(0,a._)("div",null,(0,i.zw)(n))],64))}};const s=u;var l=s},7371:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(3396),i=t(7139),u=t(9242);const s={id:"container"},l={id:"chatid1"},c={key:0},d={id:"messages"},o={id:"chatid2"},r=["disabled"],m={id:"send"};function p(e,n,t,p,k,h){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",l,[(0,a._)("span",null,[(0,a.Uk)("대화명 "),(0,a._)("input",{id:"chatidi",onInput:n[0]||(n[0]=e=>k.myname=e.target.value),placeholder:"대화명을 입력하세요."},null,32),(0,a._)("input",{type:"button",value:"확인",onClick:n[1]||(n[1]=e=>h.makeName())})]),"익명"!==k.myname?((0,a.wg)(),(0,a.iD)("span",c,"대화명 : "+(0,i.zw)(k.myname),1)):(0,a.kq)("",!0)]),(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.chatData,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{class:"chat-line",key:n},(0,i.zw)(e),1)))),128))]),(0,a._)("div",o,[(0,a.Uk)(" 귓속말: "),(0,a._)("input",{type:"checkbox",onClick:n[2]||(n[2]=e=>k.ck=e.target.checked)}),(0,a.wy)((0,a._)("input",{disabled:k.ck,"onUpdate:modelValue":n[3]||(n[3]=e=>k.toname=e),placeholder:"상대이름"},null,8,r),[[u.nr,k.toname]]),(0,a.Uk)("에게 ")]),(0,a._)("div",m,[(0,a.wy)((0,a._)("input",{type:"text",id:"input","onUpdate:modelValue":n[4]||(n[4]=e=>k.message=e),autocomplete:"off",onKeyup:n[5]||(n[5]=(0,u.D2)((e=>h.sendMesssage()),["enter"]))},null,544),[[u.nr,k.message]])])])}var k={name:"app",data(){return{chatData:[],myname:"익명",chat:"",ck:"",toname:"",message:""}},methods:{makeName:function(){console.log("나중에 씀")},sendMesssage:function(){console.log(this.message)}}},h=t(89);const g=(0,h.Z)(k,[["render",p]]);var v=g}}]);
//# sourceMappingURL=about.4d83d300.js.map