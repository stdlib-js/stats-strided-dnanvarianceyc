"use strict";var o=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var y=o(function(C,m){
function b(a,e,i,v,p){var s,u,c,f,r,q,t,n;if(a<=0)return NaN;if(a===1||v===0)return r=i[p],r===r&&a-e>0?0:NaN;for(u=p,n=0;n<a&&(r=i[u],r!==r);n++)u+=v;if(n===a)return NaN;for(u+=v,s=r,f=0,n+=1,t=1,n;n<a;n++)r=i[u],r===r&&(t+=1,s+=r,q=t*r-s,f+=1/(t*(t-1))*q*q),u+=v;return c=t-e,c<=0?NaN:f/c}m.exports=b
});var x=o(function(D,j){
var k=require('@stdlib/strided-base-stride2offset/dist'),E=y();function O(a,e,i,v){return E(a,e,i,v,k(a,v))}j.exports=O
});var R=o(function(F,N){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=x(),g=y();S(l,"ndarray",g);N.exports=l
});var h=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=R(),d,_=w(h(__dirname,"./native.js"));z(_)?d=A:d=_;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
