"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[836],{6836:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i=t(9439),l=t(4190),r=t(7094),a=t(8625),s=t(2791),o=t(8039),c=t(8693),u=t(5650),d=t(1573),m=t(8982),x=t(2104),h=t(1892),b=t(8493),j=t(4304),p=t(4494),f=t(7677),g=t(1364),v=t(4749),S=t(5761),y=t(184);function C(e){var n,t=e.data,C=e.columnName,w=e.tableName;(0,f.jr)("Single Report: Table Column Details"),(0,f.Lp)({eventName:f.mk.PAGE_VIEW,eventProperties:{type:f.ll,page:"column-details-page"}});var P=(0,a.TH)(),R=(0,i.Z)(P,2)[1],O=(0,s.useState)(0),_=(0,i.Z)(O,2),D=_[0],T=_[1];(0,v.n)((function(e){return e.setReportRawData}))({base:t});var k=v.n.getState(),N=k.tableColumnsOnly,A=void 0===N?[]:N,H=k.assertionsOnly,E=A.find((function(e){return(0,i.Z)(e,1)[0]===w})),F=0===C.length,Q=t.tables[w],I=Q.columns[C],K=(0,f.SR)((null===H||void 0===H||null===(n=H.base)||void 0===n?void 0:n.filter((function(e){return(null===e||void 0===e?void 0:e.table)===w})))||[]),M=K.failed,W=K.total,Y=I||{},Z=Y.type,G=Y.histogram,L=Y.schema_type,q=(0,j.MM)(I),z=q.backgroundColor,J=q.icon;if(!w||!Q||!E)return(0,y.jsx)(o.o,{isSingleReport:!0,children:(0,y.jsx)(b.J,{text:"No profile data found for table name: ".concat(w)})});var V=(0,S.gq)(w,C),B=(0,j.hG)(Z);return(0,y.jsx)(o.o,{isSingleReport:!0,maxHeight:d.t4,children:(0,y.jsxs)(l.rj,{width:"inherit",templateColumns:{base:"1fr 2fr"},children:[(0,y.jsx)(l.P4,{colSpan:3,children:(0,y.jsx)(f.Qu,{breadcrumbList:V})}),(0,y.jsx)(l.P4,{overflowY:"scroll",maxHeight:d.t4,children:(0,y.jsx)(x._,{tableColEntry:E,currentTable:w,currentColumn:C,onSelect:function(e){var n=e.tableName,t=e.columnName;T(0),R("/tables/".concat(n,"/columns/").concat(t))},singleOnly:!0})}),F?(0,y.jsxs)(l.P4,{maxHeight:d.t4,overflowY:"auto",p:10,children:[(0,y.jsx)(g.Q,{title:Q.name,subtitle:"Table",infoTip:Q.description,mb:5}),(0,y.jsxs)(r.mQ,{mt:3,defaultIndex:0,children:[(0,y.jsxs)(r.td,{children:[(0,y.jsx)(r.OK,{children:"Overview"}),(0,y.jsx)(r.OK,{children:"Assertions"}),(0,y.jsx)(r.OK,{children:"Schema"})]}),(0,y.jsxs)(r.nP,{children:[(0,y.jsx)(r.x4,{children:(0,y.jsx)(l.rj,{templateColumns:"1fr 1fr",gap:3,children:(0,y.jsx)(p.m,{tableDatum:Q})})}),(0,y.jsxs)(r.x4,{children:[Number(W)>0&&(0,y.jsx)(l.kC,{mb:5,children:(0,y.jsx)(f.FC,{total:W,failed:M})}),(0,y.jsx)(f.Ox,{filterString:Q.name,caseSensitiveFilter:!0,comparableAssertions:H,singleOnly:!0,tableSize:"sm"})]}),(0,y.jsx)(r.x4,{children:(0,y.jsx)(f.rH,{baseTableEntryDatum:null===E||void 0===E?void 0:E[1].base,singleOnly:!0,onSelect:function(){}})})]})]})]}):(0,y.jsxs)(l.rj,{templateColumns:"1fr 1fr",templateRows:"8em 1fr 1fr ".concat(B?"1fr":""),gridAutoFlow:"column",width:"100%",pb:5,maxHeight:d.t4,overflowY:"auto",children:[(0,y.jsx)(l.P4,{colSpan:2,p:9,children:(0,y.jsx)(g.Q,{title:C,subtitle:L,infoTip:I.description,icon:J,iconColor:z,mb:5})}),(0,y.jsx)(l.P4,{colSpan:1,px:10,bg:"gray.50",borderRight:d.dx,children:(0,y.jsx)(c.t,{columnDatum:I,hasAnimation:!0})}),(0,y.jsx)(l.P4,{gridRow:"auto",px:10,bg:"gray.50",borderRight:d.dx,children:(0,j.jl)(Z)&&(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(h.E,{columnDatum:I})})}),B&&G&&(0,y.jsx)(l.P4,{bg:"gray.50",minWidth:"1px",borderRight:d.dx,p:10,children:(0,y.jsx)(m.M,{columnDatum:I})}),(0,y.jsx)(l.P4,{colSpan:1,rowSpan:B?3:2,minWidth:0,px:10,bg:"gray.50",children:(0,y.jsx)(u.r,{baseColumnDatum:I,hasAnimation:!0,tabIndex:D,onSelectTab:function(e){return T(e)}})})]})]})})}}}]);
//# sourceMappingURL=836.288f79f9.chunk.js.map