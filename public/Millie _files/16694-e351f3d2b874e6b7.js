!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d026645e-4054-4111-a67d-20126fecc73e",e._sentryDebugIdIdentifier="sentry-dbid-d026645e-4054-4111-a67d-20126fecc73e")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16694],{562994:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var i=n(224991);let o=(e,t,o)=>{let r=(0,i.an)(),a=[];a.push(`id=${encodeURIComponent(e)}`),a.push(`ev=${encodeURIComponent(t)}`),a.push(`dl=${encodeURIComponent(n.g.document.location.href)}`),r&&a.push(`rl=${encodeURIComponent(r)}`),a.push("if=false"),a.push(`ts=${new Date().getTime()}`),"object"==typeof o&&Object.entries(o).forEach(e=>{let[t,n]=e;if(Array.isArray(n)){let e=n.map(e=>`${e}`.replace(/^\s+|\s+$/gi,"").replace(/\s+/gi," ").replace(/,/gi,"\xa7"));a.push(`cd[${t}]=${encodeURIComponent(e.join(",").replace(/^/gi,"['").replace(/$/gi,"']").replace(/,/gi,"','").replace(/§/gi,","))}`)}else"string"==typeof n&&a.push(`cd[${t}]=${encodeURIComponent(n)}`)}),a.push(`v=${encodeURIComponent("2.7.19")}`);let l=new Date().getTime(),s=n.g.document.createElement("img");s.id=`fb_${l}`,s.src=`https://www.facebook.com/tr/?${a.join("&")}`,s.width=1,s.height=1,s.style.display="none",n.g.document.body.appendChild(s),n.g.window.setTimeout(()=>{let e=n.g.document.getElementById(`fb_${l}`);e?.parentElement?.removeChild(e)},1e3)}},686328:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});let i={FACEBOOK:"facebook",GOOGLE:"google"},o=e=>{if(!e||0===e.length)return{providerGA4:null,facebookPixel:null};let t="",n="";return e.forEach(e=>{let{code:o,provider:r}=e||{};o&&r&&(r===i.GOOGLE&&o.includes("G-")&&(t=o),r===i.FACEBOOK&&(n=o))}),{providerGA4:t,facebookPixel:n}}},363836:function(e,t,n){"use strict";function i(e){e&&window.gtag&&window.gtag("event","page_view",{title:window.document.title,page:window.location.pathname,send_to:e})}function o(e,t){let{eventId:n,eventAction:i,eventLabel:o,eventCurrency:r,eventValue:a,eventItems:l}=t;e&&e.includes("G-")&&i&&("purchase"===i?window.gtag("event",i,{transaction_id:n,value:a,currency:r,items:l,send_to:e}):window.gtag("event",i,{event_id:n,location_name:o,currency:r,value:a,send_to:e}))}n.d(t,{A:function(){return i},s:function(){return o}})},717925:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var i=n(667294),o=n(562994),r=n(686328),a=n(363836),l=n(526930);let s=e=>{let{location:t,pixelTrackType:n,gaEvent:s}=e,{facebookPixel:c,providerGA4:u}=(0,r.M)(t?.trackingCodes);return(0,i.useEffect)(()=>{if(!t||t?.trackingCodes.length<1)return;let e=t.name,i=t.id;u&&s?(0,a.s)(u,s):u&&(0,a.A)(u),c&&((0,o.$)(c,l.im.PAGE_VIEW,{location_name:e,location_unique_id:i}),(n===l.im.PURCHASE||n===l.im.BOOKING_COMPLETE)&&s?.eventValue!==void 0?(0,o.$)(c,n,{value:s.eventValue.toString(),currency:s.eventCurrency,location_name:e,location_unique_id:i}):n&&(0,o.$)(c,n,{location_name:e,location_unique_id:i}))},[]),null}},634051:function(e,t,n){"use strict";n.d(t,{H:function(){return f}});var i=n(785893),o=n(937514),r=n(142268),a=n(380395),l=n(794067),s=n(920518),c=n(770546),u=n(720014),d=n(234308),m=n(880574),p=n.n(m);let f=()=>{let e=(0,u.lR)(),t=(0,o.A)();return(0,i.jsx)(a.e,{unsafeClassName:p().self,width:"wide",children:(0,i.jsx)(l.k,{justifyContent:"center",grow:1,children:(0,i.jsx)(s.u,{header:(0,d.__)`No internet connection`,description:(0,d.__)`It looks like you're offline. Please check your internet connection and try again.`,primaryAction:(0,i.jsx)(c.z,{variant:"primary",onAction:()=>(e?window.location.reload():t.addToast(e=>(0,i.jsx)(r.F,{...e,children:(0,d.__)`Oops, it seems like you are offline.`})),Promise.resolve()),type:"button",children:(0,d.__)`Try again`})})})})}},543837:function(e,t,n){"use strict";n.d(t,{g:function(){return r}});var i=n(558166),o=n(702203);function r(e){let{locationId:t,interactions:n,providerId:r}=e,a=(0,i.E)(new Date,-7),l=n.sort((e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()).filter(e=>new Date(e.timestamp)>a);if(0===l.length)return null;let s=l.find(e=>e.properties.location_id?.toString()===t);if(!s||!s.properties.page_url)return o.kK.Marketplace;let c=new URL(s.properties.page_url,"http://a");for(let e of function(e){let{providerId:t}=e;return[{pathname:/^(\/[a-z]{2})?\/a\/.*$/,query:[{key:"pId",value:e=>e.split(",").includes(t)}]},{pathname:/^(\/[a-z]{2})?\/a\/[\w-]+\/.*$/,query:[{key:"menu",value:"true"}]},{pathname:/^(\/[a-z]{2})?\/(book-now|providers)\/.*$/}]}({providerId:r})){let{pathname:t,query:n=[]}=e;if(t.test(c.pathname)&&n.every(e=>{let{key:t,value:n}=e;if(!n&&!c.searchParams.has(t))return!1;let i=c.searchParams.get(t);return!!(null!==i&&(n instanceof Function?n(i):n===i))}))return o.kK.Direct}return o.kK.Marketplace}},222156:function(e,t,n){"use strict";n.d(t,{T4:function(){return i.T4},cG:function(){return i.cG}});var i=n(302982)},629177:function(e,t,n){"use strict";function i(e){return!!e}n.d(t,{y:function(){return i}})},225324:function(e,t,n){"use strict";function i(e){let[t,n]=e?.split(":")??[];return{appointmentId:t,bookingId:n}}n.d(t,{l:function(){return i}})},2666:function(e,t,n){"use strict";n.d(t,{o:function(){return p}});var i=n(785893),o=n(784748),r=n(96420),a=n(794067),l=n(587495);n(667294);var s=n(80128),c=n(234308),u=n(24252),d=n(751450);let m=(e,t)=>{if(!e.startDate||!e.endDate)return"";let n="number"==typeof e.startTime&&"number"==typeof e.endTime?[(0,u.CC)({secondsPastMidnight:e.startTime,use24HourFormat:t}),(0,u.CC)({secondsPastMidnight:e.endTime,use24HourFormat:t})].join(" - "):(0,c.__)("Any time");return e.startDate.toDateString()===e.endDate.toDateString()?`${(0,u.oC)(e.startDate)} \xa0•\xa0 ${n}`:`${(0,u.N3)(e.startDate)} - ${(0,u.N3)(e.endDate)} \xa0•\xa0 ${n}`},p=e=>{let{timeRanges:t}=e,n=(0,o.G)("laptop"),{location:c}=(0,d.l)();return t?.length?(0,i.jsx)(r.Z.Section,{variant:"lowest",verticalPadding:n?"l":"flush",horizontalPadding:n?"l":"flush",children:(0,i.jsx)(a.k,{direction:"column",justifyContent:"center",gap:"150",children:t.map(e=>(0,i.jsxs)(a.k,{direction:"row",alignContent:"center",gap:"100",qaType:"time-range",children:[(0,i.jsx)(s.Que,{color:"neutralFaded"}),(0,i.jsx)(l.x,{font:"body-s-regular",color:"neutralFaded",children:m(e,!!c?.timeFormat24h)})]},e.id))})}):null}},910251:function(e,t,n){"use strict";n.d(t,{s:function(){return c}});var i=n(785893),o=n(784748),r=n(96420),a=n(587495),l=n(794067);n(667294);var s=n(80128);let c=e=>{let{formattedDate:t,timeSpan:n,isLoading:c=!1}=e,u=(0,o.G)("laptop");return t&&n?c?(0,i.jsxs)(r.Z.Section,{variant:"lowest",verticalPadding:u?"l":"flush",horizontalPadding:u?"l":"flush",children:[(0,i.jsx)(a.x.Skeleton,{font:"header-s-semibold",width:"60%"}),(0,i.jsx)(a.x.Skeleton,{font:"header-s-semibold",width:"70%"})]}):(0,i.jsx)(r.Z.Section,{variant:"lowest",verticalPadding:u?"l":"flush",horizontalPadding:u?"l":"flush",children:(0,i.jsxs)(l.k,{direction:"column",justifyContent:"center",gap:"150",children:[(0,i.jsxs)(l.k,{direction:"row",alignContent:"center",gap:"100",children:[(0,i.jsx)(s.Que,{color:"neutralFaded"}),(0,i.jsx)(a.x,{font:"body-s-regular",color:"neutralFaded",children:t})]}),(0,i.jsxs)(l.k,{direction:"row",alignContent:"center",gap:"100",children:[(0,i.jsx)(s.T39,{color:"neutralFaded"}),(0,i.jsx)(a.x,{font:"body-s-regular",color:"neutralFaded",qaType:"timeslot-time",children:n})]})]})}):null}},462539:function(e,t,n){"use strict";n.d(t,{$:function(){return u}});var i=n(785893),o=n(96420),r=n(794067),a=n(587495);n(667294);var l=n(295999),s=n(658605),c=n.n(s);function u(e){let{isMobile:t=!1,isLoading:n=!1,payAtVenue:s,payNow:u}=e;if(!s||!u)return null;let d=t?e=>{let{children:t}=e;return(0,i.jsx)(i.Fragment,{children:t})}:o.Z.Section;return n?(0,i.jsx)(d,{variant:"lowest",horizontalPadding:"l",unsafeClassName:c().pay,children:(0,i.jsxs)(r.k,{gap:"200",direction:"horizontal",justifyContent:"space-between",children:[(0,i.jsx)(a.x.Skeleton,{font:"header-s-semibold",width:"50px"}),(0,i.jsx)(a.x.Skeleton,{font:"header-s-semibold",width:"40px"})]})}):(0,i.jsxs)(d,{variant:"lowest",horizontalPadding:"l",unsafeClassName:c().pay,children:[(0,i.jsx)(l.Z,{leftSection:(0,i.jsx)(a.x,{color:"positive",font:"body-m-semibold",qaType:"pay-now",children:u.formattedMessage}),rightSection:(0,i.jsx)(a.x,{color:"positive",font:"body-m-semibold",qaType:"pay-now-value",children:u.value})}),(0,i.jsx)(l.Z,{leftSection:(0,i.jsx)(a.x,{font:"body-s-regular",qaType:"pay-at-venue",color:"neutralFaded",children:s.formattedMessage}),rightSection:(0,i.jsx)(a.x,{font:"body-s-regular",qaType:"pay-at-venue-value",color:"neutralFaded",children:s.value})})]})}},287826:function(e,t,n){"use strict";n.d(t,{MZ:function(){return eu},s4:function(){return em},Bk:function(){return ef}});var i=n(785893),o=n(380270),r=n(667294),a=n(973314),l=n(234308),s=n(25869),c=n(859854),u=n(899877),d=n(388533),m=n(702203),p=n(751450),f=n(613374),g=n(247785),b=n(364171),h=n(96420),y=n(804601),v=n(770546),x=n(386010),k=n(116831),I=n(64549),S=n.n(I),_=n(823493),T=n.n(_);let C=e=>{let[t,n]=(0,r.useState)(!1),[i,o]=(0,r.useState)(!1);return{handleScroll:(0,r.useCallback)(T()(()=>{let r=e?.current?.scrollTop??0,a=e?.current?.clientHeight??0,l=(e?.current?.scrollHeight??0)-r-a-5;t&&0===r?n(!1):!t&&r>0&&n(!0),i&&l<=0?o(!1):!i&&l>0&&o(!0)},100),[e,i,t]),showLocationDivider:t,showFooterDivider:i}},j=e=>{let{footer:t,onContinue:n,location:o,isLoadingLocation:a,isPrimaryBtnPending:l=!1,primaryButtonLabel:s,timeSlotOverview:c,bookingItemsList:u,summary:d,additionalSections:m}=e,p=r.useRef(null),{handleScroll:f,showLocationDivider:g,showFooterDivider:b}=C(p);return(0,i.jsx)(h.Z,{id:"booking-flow-cart",horizontalPadding:"flush",verticalPadding:"flush",qaType:"cart",unsafeClassName:S().self,children:(0,i.jsxs)("div",{ref:p,className:S().scrollableWrapper,onScroll:f,children:[(0,i.jsx)(h.Z.Header,{variant:"lowest",unsafeClassName:(0,x.default)(S().headerWrapper,g&&S().showLocationDivider),horizontalPadding:"l",children:(0,i.jsx)(k.e,{location:o,isLoading:a})}),c,(0,i.jsx)(h.Z.Section,{variant:"lowest",verticalPadding:"m",unsafeClassName:S().itemsList,horizontalPadding:"l",children:u}),(0,i.jsxs)(h.Z.Section,{variant:"lowest",verticalPadding:"flush",unsafeClassName:S().itemsSummary,horizontalPadding:"l",children:[(0,i.jsx)(y.i,{verticalGap:"0",unsafeClassName:S().divider}),d]}),m,(0,i.jsxs)(h.Z.Footer,{variant:"lowest",horizontalPadding:"l",unsafeClassName:(0,x.default)(S().footerWrapper,b&&S().showFooterDivider),children:[t,(0,i.jsx)(v.z,{id:"continue-button",type:"button",onAction:n??(()=>Promise.resolve()),variant:"primary",size:"l",isDisabled:!n,isFull:!0,isPending:l,qaType:"continue-button",children:s})]})]})})};var A=n(910251),w=n(462539);let P=e=>{let{children:t,onContinue:n,isPrimaryBtnPending:o=!1,primaryButtonLabel:r,step:a}=e,l=(0,u.j)(),s=(0,d.j)(),{bookableItems:h,timeSlot:y,total:v,groupAttendees:x,employee:k}=s.expiresInSeconds&&s.cart?s.cart:l.cart,{typeOfBookingFlow:I}=(0,c.Wq)(),{location:S,isLoading:_}=(0,p.l)(),T=_||l.isLoading||s.isLoading;return(0,i.jsx)(j,{footer:t,onContinue:n,location:S,isLoadingLocation:_,isPrimaryBtnPending:o,primaryButtonLabel:r,timeSlotOverview:(0,i.jsx)(A.s,{formattedDate:y?.formattedDate,timeSpan:y?.timeSpan,isLoading:T}),bookingItemsList:(0,i.jsx)(g.e,{bookableItems:h,disableMembershipSelection:!1,locationUserMemberships:S&&"userMemberships"in S?S.userMemberships:void 0,isLoading:T,groupAttendees:x,step:a,isGroupBooking:(0,f.Cl)(I),allowEmployeeSelection:(0,f.bJ)({location:S,step:a,typeOfBookingFlow:I,isDirectLink:l.cart.channelType===m.xu.Direct}),globalEmployee:k||null}),summary:(0,i.jsx)(b.Z,{total:v,isLoading:T}),additionalSections:(0,i.jsx)(w.$,{payNow:s.reservation?.payNow||null,payAtVenue:s.reservation?.payAtVenue||null,isLoading:T})})};var E=n(790807),B=n(826045);let D=e=>{let{onContinue:t,isPrimaryBtnPending:n=!1,primaryButtonLabel:o,step:r}=e,{cart:a,appointmentLease:l}=(0,E.C)(),{location:s,isLoading:u}=(0,p.l)(),{bookableItems:d,timeSlot:m,total:h,groupAttendees:y,employee:v}=a,{typeOfBookingFlow:x}=(0,c.Wq)();return(0,i.jsx)(j,{onContinue:t,location:s,isLoadingLocation:u,isPrimaryBtnPending:n,primaryButtonLabel:o,timeSlotOverview:(0,i.jsx)(A.s,{formattedDate:m?.formattedDate,timeSpan:m?.timeSpan}),bookingItemsList:(0,i.jsx)(g.e,{bookableItems:d,disableMembershipSelection:!0,locationUserMemberships:s&&"userMemberships"in s?s.userMemberships:void 0,isLoading:u,groupAttendees:y,step:r,isGroupBooking:(0,f.Cl)(x),allowEmployeeSelection:(0,f.bJ)({location:s,step:r,typeOfBookingFlow:x,isDirectLink:!1}),globalEmployee:v||null}),summary:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.Z,{total:h,isLoading:u}),l.data?(0,i.jsx)(B.a,{confirmationDetails:l.data.confirmationDetails}):null]})})};var R=n(580827),N=n(2666);let M=e=>{let{onContinue:t,isPrimaryBtnPending:n=!1,primaryButtonLabel:o,step:r}=e,{cart:a}=(0,R.w)(),{bookableItems:l,timeRanges:s,total:u,groupAttendees:d,employee:m}=a,{typeOfBookingFlow:h}=(0,c.Wq)(),{location:y,isLoading:v}=(0,p.l)();return(0,i.jsx)(j,{onContinue:t,location:y,isLoadingLocation:v,isPrimaryBtnPending:n,primaryButtonLabel:o,timeSlotOverview:(0,i.jsx)(N.o,{timeRanges:s}),bookingItemsList:(0,i.jsx)(g.e,{bookableItems:l,disableMembershipSelection:!0,isLoading:v,groupAttendees:d,step:r,isGroupBooking:(0,f.Cl)(h),allowEmployeeSelection:!1,globalEmployee:m||null}),summary:(0,i.jsx)(b.Z,{total:u,isLoading:v})})};var O=n(364740),L=n(269131),$=n(380395),F=n(720014),q=n(447357),U=n(80128),W=n(634051),z=n(960704),G=n(800241),V=n(507603),H=n(545322),K=n.n(H),Z=n(873926),J=n(304616),X=n(710468),Y=n.n(X);let Q=e=>[f.me.Waitlist,f.me.WaitlistConfirmation].includes(e),ee=(e,t,n)=>{let i=n.indexOf(t),o=n.indexOf(e);return -1===o||-1===i?"future":o===i?"current":o>i?"previous":"future"},et=(e,t,n,i,o)=>{switch(t){case f.Bv.TeamSelection:return{text:(0,l.__)`Professional`,id:"team-step",linkTo:(0,s.zQ)(n),variant:ee(e,f.Bv.TeamSelection,i)};case f.Bv.TimeSelection:return{text:(0,l.__)`Time`,id:"time-step",linkTo:(0,s.AX)(n),variant:ee(e,f.Bv.TimeSelection,i)};case f.Bv.Confirmation:return{text:(0,l.__)`Confirm`,id:"confirm-step",linkTo:(0,s.C3u)(n),variant:ee(e,f.Bv.Confirmation,i)};case f.bo.GuestsAndServices:return{text:(0,l.__)`Guests and services`,id:"guests-and-services-step",linkTo:(0,s.cf)(n),variant:ee(e,f.bo.GuestsAndServices,i)};case f.bo.Professional:return{text:(0,l.__)`Professional`,id:"professional-step",linkTo:(0,s.jHS)(n),variant:ee(e,f.bo.Professional,i)};case f.bo.TimeSelection:return{text:(0,l.__)`Time`,id:"time-step",linkTo:(0,s.jHS)(n),variant:ee(e,f.bo.TimeSelection,i)};case f.bo.Confirmation:return{text:(0,l.__)`Confirm`,id:"confirm-step",linkTo:(0,s.jHS)(n),variant:ee(e,f.bo.Confirmation,i)};case f.me.ServiceSelection:return{text:(0,l.__)`Services`,id:"services-step",linkTo:(0,s.jHS)(n),variant:ee(e,f.me.ServiceSelection,i)};case f.me.TeamSelection:return{text:(0,l.__)`Professional`,id:"team-step",linkTo:(0,s.JSe)(n),variant:ee(e,f.me.TeamSelection,i)};case f.me.TimeSelection:return{text:(0,l.__)`Time`,id:"time-step",linkTo:(0,s.l6O)(n),variant:ee(e,f.me.TimeSelection,i)};case f.me.Confirmation:return{text:(0,l.__)`Confirm`,id:"confirm-step",variant:ee(e,f.me.Confirmation,i)};case f.me.Waitlist:return{text:(0,l.__)`Waitlist`,id:"waitlist-step",linkTo:(0,s.Uaz)(n,o),variant:ee(e,f.me.Waitlist,i)};case f.me.WaitlistConfirmation:return{text:(0,l.__)`Confirm`,id:"confirm-waitlist-step",variant:ee(e,f.me.WaitlistConfirmation,i)};default:return null}},en=e=>{let{step:t,typeOfBookingFlow:n,isLoading:o}=e,{locationSlug:l,bookingIdOrPreviewToken:s}=(0,a.UO)(),c=(0,a.lr)(),u=(0,r.useMemo)(()=>Object.fromEntries(c.entries()),[c]);if(o)return(0,i.jsx)(Z.t,{children:(0,i.jsx)(J.O,{width:"210px",height:"22px"})});let d=(0,f.xw)(n,{injectWaitlistFlow:Q(t)});return(0,i.jsx)(Z.t,{qaType:"progress-steps",children:d.map((e,n)=>{let o=et(t,e,s||l||"",d,u);if(!o)return null;let{text:r,id:a,linkTo:c,variant:m}=o;return(0,i.jsx)("div",{className:(0,x.default)("previous"===m&&Y()["crumb--previous"]),children:(0,i.jsx)(Z.t.Item,{id:a,qaType:`progress-step-${a}`,text:r,linkTo:c?{...c,query:u}:void 0,variant:m,iconSlot:U.XCv,isLast:d.length-1===n})},a)})})},ei=e=>{let{typeOfBookingFlow:t,isLoading:n,sidePanel:o,bottomBar:r,children:s,title:c,description:u,step:d,onBack:m,onClose:p,addMobilePadding:f,disableExitModal:g=!1,titleSuffix:b,withShadowOnScroll:h}=e,y=(0,F.lR)(),x=(0,V.c)(),k=(0,a.lr)(),I=!!k.get("menu"),S=(0,q.r)(),_="search"===k.get("via"),T=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(O.A.Title,{children:[(0,i.jsx)(G.E,{gte:"laptop",children:(0,i.jsx)("div",{children:(0,i.jsx)(L.V,{titleAs:"h1",title:c,button:b,subtitle:(0,i.jsx)(en,{typeOfBookingFlow:t,isLoading:n,step:d}),description:u,qaType:"header-title"})})}),(0,i.jsx)(G.E,{lt:"laptop",children:(0,i.jsx)("div",{children:f?(0,i.jsx)(L.V,{title:c,button:b,titleAs:"h1",description:u}):(0,i.jsx)(L.V,{title:c,button:b,titleAs:"h1",description:u,withSidePaddings:!0})})})]}),(0,i.jsx)(O.A.Content,{unsafeClassName:K()["fade-animation"],children:y?s:(0,i.jsx)(W.H,{})}),(0,i.jsx)(G.E,{gte:"laptop",children:(0,i.jsx)(O.A.Sidebar,{isSticky:!0,top:"108px",hasOffset:!0,children:o})})]});return(0,i.jsx)(z.l,{children:(0,i.jsxs)($.e,{width:"wide",children:[(0,i.jsx)($.e.Header,{content:(0,i.jsx)($.e.Header.TextTitle,{label:c}),onBack:S?m:void 0,qaType:"booking-flow-layout",unsafeStyle:void 0,suffix:I||S&&_?void 0:(0,i.jsx)(v.z,{id:"close-button",onAction:()=>(x(p,{disableWarning:g}),Promise.resolve()),variant:"tertiary",size:"l",icon:U.Two,isLabelHidden:!0,isCompact:!0,children:(0,l.__)`Close`}),backButtonIconSlot:U.Y4O,withShadowOnScroll:h??!0}),(0,i.jsx)(G.E,{lt:"laptop",children:(0,i.jsx)($.e.Container,{hasSidePadding:f,children:(0,i.jsx)(O.A,{type:"singleWithTitle",direction:"vertical",rowGap:"m",children:T})})}),(0,i.jsx)(G.E,{gte:"laptop",lt:"desktop",children:(0,i.jsx)($.e.Container,{hasSidePadding:f,children:(0,i.jsx)(O.A,{type:"sidebarAfterOffsetWithTitle",direction:"horizontal",rowGap:"m",columnGap:"m",sidebarWidth:"ml",children:T})})}),(0,i.jsx)(G.E,{gte:"desktop",children:(0,i.jsx)($.e.Container,{hasSidePadding:f,children:(0,i.jsx)(O.A,{type:"sidebarAfterOffsetWithTitle",direction:"horizontal",rowGap:"m",columnGap:"xl",sidebarWidth:"l",children:T})})}),r]})})};var eo=n(794067),er=n(587495),ea=n(740691),el=n.n(ea);let es=e=>{let{children:t,onContinue:n,isActionPending:o,primaryButtonLabel:r,title:a,description:l}=e;return n?(0,i.jsxs)(G.E,{lt:"laptop",children:[t,(0,i.jsx)($.e.BottomBar,{qaType:"bottom-bar",children:(0,i.jsxs)(eo.k,{justifyContent:"space-between",direction:"horizontal",gap:"200",unsafeClassName:el().container,children:[(0,i.jsxs)("div",{className:el().details,children:[(0,i.jsx)(er.x,{font:"body-s-semibold",children:a}),l?(0,i.jsx)(er.x,{font:"body-s-regular",color:"neutralFaded",overflow:"ellipsis",noWrap:!0,children:l}):null]}),(0,i.jsx)(v.z,{variant:"primary",size:"l",onAction:n,isFull:!1,isPending:o,qaType:"continue-button-mobile",children:r})]})})]}):null},ec=e=>{let{children:t,onContinue:n,isActionPending:o,primaryButtonLabel:r}=e,{cart:a}=(0,u.j)(),l=(0,d.j)(),s=l.expiresInSeconds&&l.cart?l.cart:a,{formatted:c}=s.total?.price||{};return(0,i.jsx)(es,{onContinue:n,isActionPending:o,primaryButtonLabel:r,title:c,description:s?.bookingCaption,children:t})},eu=e=>{let{bottomBar:t,children:n,title:r,description:m,step:p,onBack:f,onContinue:g,addMobilePadding:b,isCartPrimaryBtnPending:h=!1,primaryButtonLabel:y=(0,l.gl)("Button in the booking flow","Continue"),disableExitModal:v=!1,withShadowOnScroll:x=!0,sidebar:k,titleSuffix:I}=e,{redirectTo:S}=(0,o.H)(),{bookingIdOrPreviewToken:_,locationSlug:T}=(0,a.UO)(),C=(0,a.lr)(),{typeOfBookingFlow:j}=(0,c.Wq)(),A=(0,u.j)(),w=(0,d.j)(),E=w.expiresInSeconds&&w.cart;E?w.cart:A.cart;let B=E?w.isLoading:A.isLoading;return(0,i.jsx)(ei,{typeOfBookingFlow:j,isLoading:B,sidePanel:(0,i.jsx)(P,{isPrimaryBtnPending:h,onContinue:g,primaryButtonLabel:y,step:p,children:k}),bottomBar:(0,i.jsx)(ec,{onContinue:g,isActionPending:h,primaryButtonLabel:y,children:t}),title:r,titleSuffix:I,step:p,onBack:f,onClose:()=>{let e=!!C.get("rebook"),t=C.get("bookingId");return e&&t&&T?S((0,s.WhY)(t)):T?S({pathname:(0,s.WuJ)(T)}):_&&S({...(0,s.WhY)(_)}),Promise.resolve()},description:m,addMobilePadding:b,disableExitModal:v,withShadowOnScroll:x,children:n})},ed=e=>{let{onContinue:t,isActionPending:n,primaryButtonLabel:o,step:r}=e,{cart:a,appointmentLease:s}=(0,E.C)(),{formatted:c}=a.total?.price||{},u=c,d=a?.bookingCaption;return r===f.Bv.Confirmation&&(u=s.data?.date?.formattedDateWithTime,d=(0,l.gl)("In the booking flow bottom bar","Updated date & time")),(0,i.jsx)(es,{onContinue:t,isActionPending:n,primaryButtonLabel:o,title:u,description:d})},em=e=>{let{children:t,title:n,description:r,step:u,onBack:d,onContinue:m,addMobilePadding:p,isCartPrimaryBtnPending:f=!1,primaryButtonLabel:g=(0,l.gl)("Button in the booking flow","Continue"),titleSuffix:b}=e,{cart:h,isLoading:y}=(0,E.C)(),{redirectTo:v}=(0,o.H)(),{bookingIdOrPreviewToken:x}=(0,a.UO)(),{typeOfBookingFlow:k}=(0,c.Wq)();return(0,i.jsx)(ei,{typeOfBookingFlow:k,isLoading:y,sidePanel:(0,i.jsx)(D,{isPrimaryBtnPending:f,onContinue:m,primaryButtonLabel:g,step:u}),bottomBar:(0,i.jsx)(ed,{onContinue:m,isActionPending:f,primaryButtonLabel:g,step:u}),title:n,titleSuffix:b,step:u,onBack:d,onClose:()=>(x&&v({...(0,s.WhY)(x)}),Promise.resolve()),description:r,addMobilePadding:p,children:t})},ep=e=>{let{onContinue:t,isActionPending:n,primaryButtonLabel:o}=e,{cart:r}=(0,R.w)(),{formatted:a}=r.total?.price||{};return(0,i.jsx)(es,{onContinue:t,isActionPending:n,primaryButtonLabel:o,title:a,description:r?.bookingCaption})},ef=e=>{let{children:t,title:n,description:u,step:d,onBack:m,onContinue:p,isLoading:f=!1,isCartPrimaryBtnPending:g=!1,primaryButtonLabel:b=(0,l.gl)("Button in the booking flow","Continue")}=e,{redirectTo:h}=(0,o.H)(),{locationSlug:y}=(0,a.UO)(),v=(0,a.lr)(),x=(0,r.useMemo)(()=>Object.fromEntries(v.entries()),[v]),{typeOfBookingFlow:k}=(0,c.Wq)();return(0,i.jsx)(ei,{typeOfBookingFlow:k,isLoading:f,sidePanel:(0,i.jsx)(M,{isPrimaryBtnPending:g,onContinue:p,primaryButtonLabel:b,step:d}),bottomBar:(0,i.jsx)(ep,{onContinue:p,isActionPending:g,primaryButtonLabel:b}),title:n,step:d,onBack:m,onClose:()=>{let e=!!x.rebook,t=x.bookingId;return e&&t&&y?h((0,s.WhY)(t)):y&&h({pathname:(0,s.WuJ)(y)}),Promise.resolve()},description:u,addMobilePadding:!0,children:t})}},247785:function(e,t,n){"use strict";n.d(t,{e:function(){return z}});var i=n(785893),o=n(794067),r=n(587495),a=n(804601),l=n(667294),s=n(665049),c=n(774575),u=n(108529),d=n(138695),m=n(234308),p=n(484321),f=n(899877),g=n(388533);function b(e){let{closeModal:t,isOpen:n,item:o}=e,{cart:r,toggleMembership:a}=(0,f.j)(),l=(0,g.j)();if(!o||!o.bookableId||!o.memberships?.length||!o.name)return n&&t(),null;let s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;setTimeout(()=>{let{reservation:t,updateReservationItemMemberships:n}=l;t&&t.id&&o.bookingId&&n({id:t.id,itemId:o.bookingId,membershipId:e}),a(o.bookableId,e)},0)};return(0,i.jsx)(p.D,{isOpen:n,item:o,items:r.items,onAction:()=>(t(),s(),Promise.resolve()),onChange:e=>{t(),s(e)},onClose:t,title:(0,m.__)("Update membership")})}var h=n(781358),y=n(121804),v=n.n(y),x=n(224350),k=n.n(x),I=n(569232),S=n(181456),_=n(613374),T=n(9836),C=n(770546),j=n(80128),A=n(5690),w=n.n(A);function P(e){let{appliedMembership:t,memberships:n,onAction:o,simpleVariant:r=!1}=e;if(!t&&!n?.length)return null;let a=t?(0,m.gl)("Membership applied to service","Applied: %{membershipName}",{membershipName:t?.name}):(0,m.gl)("Select membership to apply to service","Select membership");return r?(0,i.jsx)(T.r,{font:"body-s-regular",onAction:o,iconPosition:"right",icon:j.v4q,qaType:"list-item-membership-chip-link",iconSize:"s",text:a}):(0,i.jsx)("div",{children:(0,i.jsx)(C.z,{variant:"secondary",shape:"pill",size:"m",id:`cart-membership-chip-${t?.id}`,onAction:o,suffix:(0,i.jsx)(C.z.IconAffix,{icon:j.v4q}),qaType:"list-item-membership-chip",unsafeClassName:w().chip,children:a})})}var E=n(295999),B=n(468942),D=n.n(B),R=n(240952),N=n(859854),M=n(652989),O=n(751450);let L=e=>{let{text:t,showLink:n,onAction:o}=e;return n?(0,i.jsx)(T.r,{font:"body-s-regular",onAction:()=>(o(),Promise.resolve()),qaType:"cart-list-link",text:t}):(0,i.jsx)(i.Fragment,{children:t})},$=e=>{let{onlyCaption:t,currentItem:n,globalEmployee:o,defaultEmployee:r,onAction:a,allowEmployeeSelection:l,location:s}=e,c=n?.captionShort||n?.caption;if(t)return c;if(o||r)return(0,m.do)((0,m.__)("%{serviceDetails} with <a>%{employeeName}</a>",{employeeName:o?.firstName??r?.firstName,serviceDetails:c}),{a:e=>(0,i.jsx)(L,{text:e,onAction:a,showLink:l})});if(n){if((0,R.C)([n]))return(0,m.do)((0,m.__)("%{packageDetails} with <a>multiple professionals</a>",{packageDetails:c}),{a:e=>(0,i.jsx)(L,{text:e,onAction:a,showLink:l})});if(s?.employees&&(0,M.o4)([n]))return(0,m.do)((0,m.__)("%{serviceDetails} with <a>%{employeeName}</a>",{serviceDetails:c,employeeName:s.employees.find(e=>e.id===n?.employeeAssociations?.[0])?.firstName}),{a:e=>(0,i.jsx)(L,{text:e,onAction:a,showLink:l})})}return(0,m.do)((0,m.__)("%{serviceDetails} with <a>any professional</a>",{serviceDetails:c}),{a:e=>(0,i.jsx)(L,{text:e,onAction:a,showLink:l})})},F=e=>{let{allowEmployeeSelection:t,onAction:n,currentItem:o,globalEmployee:a,onlyCaption:l}=e,{location:s}=(0,O.l)(),{defaultEmployee:c}=(0,N.Wq)(),u=$({onlyCaption:l,currentItem:o,globalEmployee:a,defaultEmployee:c,onAction:n,allowEmployeeSelection:t,location:s});return(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",qaType:"cart-list-description",children:u})},q=(e,t)=>{if(t)return e.find(e=>e.bookableId===t)},U=e=>{let{attendeeReference:t,locationUserMemberships:n,disableMembershipSelection:o=!1,displayItems:a,openModal:l,setSelectedItemForMembershipModal:s,allowEmployeeSelection:c=!1,step:u,globalEmployee:d}=e,{openMultiStaffModal:m}=(0,S.O)(),p=k()(n,"id"),f=(0,I.gl)("Booking flow cart new placeholder","No services selected");return a?.length?(0,i.jsx)(h.K,{gap:"200",direction:"vertical",display:"flex",children:a?.map(e=>{let{retailPrice:n,nonDiscountedPrice:f,...g}=e,{membershipId:b}=g,h=g.userMemberships||[],y=p[b],x="bookableId"in g,k=q(a,g.bookableId),I=_.iE(u);return i.jsx(E.Z,{qaType:`booking-info-service-${v()(g.name||"")}`,leftSection:i.jsxs(i.Fragment,{children:[i.jsx(r.x,{font:"body-s-medium",overflow:"break",qaType:"list-item-name",children:g.name}),k?i.jsx(F,{allowEmployeeSelection:c,currentItem:k,globalEmployee:d,onAction:()=>{m(g?.includes?"services":"employees",{attendeeReference:t,bookableId:g.bookableId})},onlyCaption:I}):null,!o&&1===(t||1)&&i.jsx(P,{appliedMembership:y,memberships:h,onAction:()=>(s({bookingId:g.id,bookableId:x?g.bookableId??"":g.id,membershipId:y?.id??b,memberships:h?.map(e=>{let{id:t}=e;return p[t]}).filter(Boolean)??[],name:g.name}),l(),Promise.resolve()),simpleVariant:!0})]}),rightSection:i.jsxs("div",{className:D().pricing,children:[n?.formatted?i.jsx(r.x,{font:"body-s-medium",color:"neutral",qaType:"list-item-retail-price",children:n.formatted}):null,f?.formatted?i.jsx(r.x,{font:"body-s-regular",color:"ghost",qaType:"list-item-non-discounted-price",unsafeClassName:D().lineThrough,children:f.formatted}):null]})},g.name)})}):(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",children:f})},W=()=>(0,i.jsxs)(o.k,{gap:"200",direction:"vertical",children:[(0,i.jsx)(r.x.Skeleton,{font:"header-s-semibold",width:"80px"}),(0,i.jsx)(r.x.Skeleton,{font:"body-s-semibold",width:"160px"})]}),z=e=>{let{bookableItems:t,locationUserMemberships:n,isLoading:o,disableMembershipSelection:m=!1,groupAttendees:p,step:f,globalEmployee:g,isGroupBooking:h,allowEmployeeSelection:y,membershipsModalHash:v="cart-memberships"}=e,[x,k]=l.useState(null),{isOpen:I,openModal:S,closeModal:_}=(0,s.W)({key:v}),{groupBookingAttendeeReference:T}=(0,d.f)();if(o)return(0,i.jsx)(W,{});let C=h?(0,c.w)((0,c.E)(t),p,T,f):null;return(0,i.jsxs)(i.Fragment,{children:[(C||[]).map((e,t)=>(0,i.jsxs)("div",{"data-qa":`cart-overview-guest-${e.reference}`,children:[0!==t&&(0,i.jsx)(a.i,{verticalGap:"250"}),(0,i.jsx)(r.x,{font:"body-m-semibold",mb:"200",qaType:"cart-overview-guest-name",children:(0,u.D)(e,t).fullName}),(0,i.jsx)(U,{attendeeReference:e.reference,locationUserMemberships:n,disableMembershipSelection:m,displayItems:e.items,openModal:S,setSelectedItemForMembershipModal:k,allowEmployeeSelection:y,step:f,globalEmployee:(C||[])?.length>1?null:g})]},e.reference)),!h&&(0,i.jsx)(U,{locationUserMemberships:n,disableMembershipSelection:m,displayItems:(0,c.E)(t),openModal:S,setSelectedItemForMembershipModal:k,allowEmployeeSelection:y,step:f,globalEmployee:g}),I?(0,i.jsx)(b,{closeModal:_,isOpen:I,item:x}):null]})}},364171:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(785893),o=n(794067),r=n(587495),a=n(804601),l=n(234308),s=n(295999);let c=()=>(0,i.jsxs)(o.k,{gap:"200",direction:"horizontal",justifyContent:"space-between",children:[(0,i.jsx)(r.x.Skeleton,{font:"header-s-semibold",width:"40px"}),(0,i.jsx)(r.x.Skeleton,{font:"header-s-semibold",width:"40px"})]});var u=e=>{let{total:t,isLoading:n}=e,{discounts:u,price:d,priceBeforeDiscount:m,tax:p}=t??{},f=!!u?.formatted&&"0"!==u.formatted,g=p?.formatted;return n?(0,i.jsx)(c,{}):(0,i.jsxs)(o.k,{direction:"vertical",gap:"25",children:[f?(0,i.jsxs)(i.Fragment,{children:[m?.formatted?(0,i.jsx)(s.Z,{leftSection:(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",children:(0,l.gl)("In the booking flow cart summary","Subtotal")}),rightSection:(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",qaType:"total-price-before-discounts",children:m.formatted})}):null,(0,i.jsx)(s.Z,{leftSection:(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",children:(0,l.gl)("In the booking flow cart summary","Discounts")}),rightSection:(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",qaType:"total-discounts",children:u.formatted})})]}):null,g?(0,i.jsx)(s.Z,{leftSection:(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",children:(0,l.gl)("The amount of tax included in booking fee","Tax")}),rightSection:(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",qaType:"total-tax",children:p.formatted})}):null,f||g?(0,i.jsx)(a.i,{verticalGap:"200"}):null,(0,i.jsx)(s.Z,{leftSection:(0,i.jsx)(r.x,{font:"body-m-semibold",children:(0,l.gl)("In the booking flow cart summary","Total")}),rightSection:(0,i.jsx)(r.x,{font:"body-m-semibold",qaType:"total-price",children:d?.formatted})})]})}},295999:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(785893),o=n(135424),r=e=>{let{leftSection:t,rightSection:n,qaType:r}=e;return(0,i.jsx)(o.H,{qaType:r,children:(0,i.jsx)(o.H.Content,{children:(0,i.jsx)(o.H.Row,{leftSection:t,rightSection:n,rightSectionAlignment:"flex-start"})})})}},83003:function(e,t,n){"use strict";n.d(t,{B:function(){return h},E:function(){return b}});var i=n(785893),o=n(70969),r=n.n(o),a=n(770546),l=n(587495),s=n(786546),c=n(973314),u=n(805575),d=n(379648),m=n(234308),p=n(25869),f=n(206468),g=n.n(f);let b=(0,s.BX)(`
  fragment DiscountsAndRewardsUpsellBanner on Reservation {
    discountsAndRewards: discountsAndBenefits @include(if: $isLoyaltyEnabled) {
      isUpsellBannerVisible
    }
  }
`),h=e=>{let{reservation:t}=e,{locationSlug:n}=(0,c.UO)(),o=(0,c.lr)();return s.vz(b,t)?.discountsAndRewards?.isUpsellBannerVisible?(0,i.jsx)(d.L0,{name:"B2C_LOYALTY_BOOKING_FLOW_WEB",enabled:(0,i.jsx)("div",{className:g().self,style:{backgroundImage:`url(${r()})`},children:(0,i.jsx)(a.z,{isFull:!0,linkTo:{...(0,p.qpo)(n,o),hash:"#modal-discounts-and-rewards"},prefix:(0,i.jsx)(u.e,{color:"onLoud",name:"SparklingIcon",size:"l"}),size:"l",suffix:(0,i.jsx)(u.e,{color:"onLoud",name:"ChevronRightIcon",size:"l"}),unsafeClassName:g().self__button,variant:"tertiary",children:(0,i.jsx)(l.x,{color:"onLoud",font:"body-s-medium",children:(0,m.__)`Apply loyalty rewards`})})})}):null}},540365:function(e,t,n){"use strict";n.d(t,{i:function(){return b},z:function(){return g}});var i=n(785893),o=n(380270),r=n(587495),a=n(304616),l=n(770546),s=n(786546),c=n(667294),u=n(973314),d=n(234308),m=n(25869),p=n(292685),f=n.n(p);let g=(0,s.BX)(`
  fragment DiscountsButton on Reservation {
    discountsAndRewards: discountsAndBenefits @include(if: $isLoyaltyEnabled) {
      description
      openTrigger {
        action
        label
      }
    }
  }
`),b=e=>{let{isLoading:t,reservation:n}=e,p=(0,s.vz)(g,n),{navigateTo:b}=(0,o.H)(),h=(0,u.lr)(),{locationSlug:y}=(0,u.UO)(),v=(0,c.useCallback)(()=>{p?.discountsAndRewards&&b({...(0,m.qpo)(y,h),hash:"#modal-discounts-and-rewards"})},[y,b,p,h]);return(0,i.jsxs)("div",{className:f().self,children:[(0,i.jsx)("div",{className:f().self__name,children:t?(0,i.jsx)(r.x.Skeleton,{font:{default:"body-m-medium",tablet:"header-s-semibold"},isAnimated:!0,width:"130px"}):(0,i.jsx)(r.x,{font:{default:"body-m-medium",tablet:"header-s-semibold"},children:(0,d.gl)("Discounts modal","Discounts and rewards")})}),(0,i.jsx)("div",{className:f().self__description,children:t?(0,i.jsx)(r.x.Skeleton,{font:"body-s-regular",isAnimated:!0,width:"70px"}):(0,i.jsx)(r.x,{color:"neutralFaded",font:"body-s-regular",children:p?.discountsAndRewards?.description})}),(0,i.jsx)("div",{className:f().self__button,children:t?(0,i.jsx)(a.O,{height:"36px",isAnimated:t,shape:"rounded",width:"64px"}):(0,i.jsx)(l.z,{onAction:v,shape:"pill",variant:"secondary",children:p?.discountsAndRewards?.openTrigger.label})})]})}},116831:function(e,t,n){"use strict";n.d(t,{e:function(){return h}});var i=n(785893),o=n(794067),r=n(304616),a=n(587495),l=n(784748),s=n(875916),c=n(652462),u=n(456624),d=n(795928);n(667294);var m=n(80128),p=n(25869),f=n(77341),g=n.n(f);let b=e=>{let{unsafeClassName:t,unsafeStyle:n,_isAnimated:l=!0}=e;return(0,i.jsxs)(o.k,{gap:"200",direction:"horizontal",unsafeClassName:t,unsafeStyle:n,children:[(0,i.jsx)(r.O,{width:"64px",height:"64px",isAnimated:l}),(0,i.jsxs)(o.k,{gap:"25",direction:"vertical",children:[(0,i.jsx)(a.x.Skeleton,{font:"body-m-semibold",width:"80px"}),(0,i.jsx)(a.x.Skeleton,{font:"body-s-semibold",width:"120px"}),(0,i.jsx)(a.x.Skeleton,{font:"body-s-regular",width:"240px"})]})]})},h=e=>{let{location:t,isLoading:n,withRating:r=!0,displayShortAddress:f=!1,skeletonClassName:h,skeletonStyle:y,qaType:v}=e,x=(0,l.G)("laptop");if(!t||n)return(0,i.jsx)(b,{unsafeClassName:h,unsafeStyle:y});let{name:k,rating:I,reviewsCount:S,address:_,coverImage:T,slug:C}=t;return(0,i.jsxs)("div",{className:g().self,"data-qa":v,children:[(0,i.jsx)(s.f,{isExternal:!0,linkTo:(0,p.WuJ)(C),children:(0,i.jsx)(c.l,{image:(0,i.jsx)(u.E,{alt:`${k} - ${_?.shortFormatted}`,src:T?.url||"",loading:"lazy"}),size:"2xl"})}),(0,i.jsxs)(o.k,{gap:"25",direction:"vertical",unsafeStyle:{minWidth:"0"},children:[(0,i.jsx)(a.x,{font:"body-m-semibold",children:k}),r&&I?(0,i.jsx)(d.g,{halfStarIconSlot:m.$Dh,id:"rating",rating:I,ratingCount:S??void 0,stars:"five",variant:"default",size:"m",qaType:"rating"}):null,_?(0,i.jsx)(a.x,{font:"body-s-regular",color:"neutralFaded",overflow:"ellipsis",noWrap:x,children:f&&_.shortFormatted?_.shortFormatted:_.simpleFormatted}):null]})]})}},826045:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var i=n(785893),o=n(794067),r=n(804601),a=n(587495),l=n(234308),s=n(295999);let c=e=>{let{confirmationDetails:t}=e;return t?(0,i.jsxs)(o.k,{direction:"vertical",gap:"250",padding:["250","0","0","0"],children:[(0,i.jsx)(r.i,{verticalGap:"0"}),(0,i.jsx)(s.Z,{leftSection:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.x,{font:"body-s-medium",children:t.label}),(0,i.jsx)(a.x,{font:"body-s-regular",color:"neutralFaded",children:t.content})]}),rightSection:(0,i.jsx)(a.x,{font:"body-s-medium",qaType:"deposit-paid",children:t.formattedAmount})}),(0,i.jsx)(s.Z,{leftSection:(0,i.jsx)(a.x,{font:"body-s-semibold",children:(0,l.gl)("In the booking flow cart - how much there is to pay after deposit was collected","Left to pay at store")}),rightSection:(0,i.jsx)(a.x,{font:"body-s-semibold",qaType:"left-to-pay",children:t.formattedLeftToPay})})]}):null}},387078:function(e,t,n){"use strict";n.d(t,{h:function(){return w},Z:function(){return P}});var i=n(785893),o=n(901313),r=n(587495),a=n(304616),l=n(380270),s=n(667294),c=n(973314),u=n(234308),d=n(25869),m=n(287826),p=n(859854),f=n(899877),g=n(652989),b=n(751450),h=n(108529),y=n(710768),v=n(297657),x=n.n(v),k=n(135424),I=n(770546),S=n(460236),_=n(1566),T=n(80128);function C(e){let{bookableId:t,caption:n,employee:a,name:l,onAction:s}=e;return(0,i.jsx)(o.o.Item,{primitiveType:"none",value:"",children:e=>{let{labelProps:o,descriptionProps:c}=e;return(0,i.jsx)(k.H.Row,{qaType:"service-item",leftSection:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.x,{...o,as:"h3",font:"body-m-medium",qaType:"select-service-employee-name",children:l}),(0,i.jsx)(r.x,{...c,font:"body-s-regular",color:"neutralFaded",mb:"150",qaType:"select-service-employee-caption",children:n}),(0,i.jsx)(I.z,{variant:"secondary",shape:"pill",size:"m",id:`${t}-chip`,onAction:s,prefix:(0,i.jsx)(S.c.Affix,{prefixType:"compact",size:"m",children:(0,i.jsx)(_.q,{size:"xs",src:a.avatar?.url,firstName:a.firstName})}),suffix:(0,i.jsx)(I.z.IconAffix,{icon:T.v4q}),qaType:"select-service-employee-dropdown",children:a.firstName||(0,u.gl)("Auto applied employee","Any professional")})]})})}})}var j=n(181456),A=n(554670);function w(e){let{bookableItems:t,employeeId:n,groupAttendees:l,hideAttendeeName:c}=e,{openMultiStaffModal:u}=(0,j.O)(),{location:d,isLoading:m}=(0,b.l)(),p=function(e){let{bookableItems:t,groupAttendees:n}=e;if(n.length<=1)return[{attendee:void 0,bookableItems:t}];let i=n?.reduce((e,t)=>({...e,[t.reference.toString()]:t}),{});return Object.values(t.reduce((e,t)=>{let n=t.attendeeReference||1;return{...e,[n]:{attendee:i[n],bookableItems:[...e[n]?.bookableItems||[],t]}}},{}))}({bookableItems:t,groupAttendees:l}),f=e=>()=>(u("employees",e),Promise.resolve());return(0,i.jsx)(o.o,{choiceType:"single-optional",name:"select-service-employee",onChange:()=>null,value:[],children:p.map((e,t)=>{let{attendee:o,bookableItems:l}=e;return(0,i.jsxs)(s.Fragment,{children:[!c&&o?(0,i.jsx)(r.x,{font:"header-s-semibold",qaType:"multi-staff-attendee-name",unsafeClassName:x().attendeeName,children:(0,h.D)(o,t).fullName}):null,l.map(e=>{let{bookableId:t,caption:r,employeeAssociations:l,name:s,...c}=e,{includes:u}=c;return u?.length?u.map((e,r)=>{let{caption:s,name:c}=e,u=`${t}-${r}`;return m?(0,i.jsx)(a.O,{height:"132px"},u):t?(0,i.jsx)(C,{bookableId:t,caption:s,employee:(0,A.J)(d?.employees,{associatedEmployeeId:l?.[r],globalEmployeeId:n}),name:c,onAction:f({bookableId:t,packageItemIndex:r,attendeeReference:o?.reference})},u):null}):m?(0,i.jsx)(a.O,{height:"132px"},t):t?(0,i.jsx)(C,{bookableId:t,caption:r,employee:(0,A.J)(d?.employees,{associatedEmployeeId:l?.[0],globalEmployeeId:n}),name:s,onAction:f({bookableId:t,attendeeReference:o?.reference})},t):null})]},o?.reference||t)})})}function P(e){let{locationSlug:t}=e,n=(0,c.lr)(),{navigateBack:o,navigateTo:r}=(0,l.H)(),{cart:a}=(0,f.j)(),{typeOfBookingFlow:s}=(0,p.Wq)();return(0,y.A)(),(0,i.jsx)(m.MZ,{title:(0,u.gl)("Choose employee to perform your service","Select professional"),step:"groupBooking"===s||"groupBookingSkipTeamStepInNavigation"===s?"groupProfessionalSelection":"teamSelection",onContinue:()=>(r((0,d.l6O)(t,n)),Promise.resolve()),onBack:()=>(o((0,d.JSe)(t,n)),Promise.resolve()),addMobilePadding:!0,children:(0,i.jsx)(w,{bookableItems:a.items.map(g.qC),employeeId:a.employee?.id,groupAttendees:a.groupAttendees})})}},181456:function(e,t,n){"use strict";n.d(t,{t:function(){return T},O:function(){return C}});var i=n(785893),o=n(667294),r=n(665049),a=n(899877),l=n(790807),s=n(89760),c=n(527787),u=n(973314),d=n(80128),m=n(730602),p=n(234308),f=n(654796),g=n(596242),b=n.n(g),h=n(900506),y=n(554670);let v=(0,f.B)(`
  query PossibleEmployees($id: ID!, $locationSlug: String!, $input: CartInput!) {
    cart(id: $id, locationSlug: $locationSlug, input: $input) {
      items {
        attendeeReference
        id
        ... on CartLineItemServiceVariant {
          possibleEmployees {
            id
            firstName
            title
            avatar {
              url
            }
            formattedMinimumPrice
            rating
          }
        }
        ... on CartLineItemPackage {
          packageServiceVariants {
            possibleEmployees {
              id
              firstName
              title
              avatar {
                url
              }
              formattedMinimumPrice
              rating
            }
          }
        }
      }
    }
  }
`),x=(0,f.B)(`
  query ReschedulePossibleEmployees($appointmentId: ID!) {
    cart: rescheduleAppointmentCart(appointmentId: $appointmentId) {
      items {
        attendeeReference
        id: bookableId
        ... on RescheduleAppointmentCartItemPackage {
          packageServiceVariants {
            possibleEmployees {
              id
              firstName
              title
              avatar {
                url
              }
              formattedMinimumPrice
              rating
            }
          }
        }
        ... on RescheduleAppointmentCartItemServiceVariant {
          possibleEmployees {
            id
            firstName
            title
            avatar {
              url
            }
            formattedMinimumPrice
            rating
          }
        }
      }
    }
  }
`);function k(e){let{appointmentId:t,attendeeReference:n,bookableId:r,bookableItems:a,employeeId:l,locationSlug:f,onClose:g,packageItemIndex:k,setEmployee:I}=e,{locationSlug:S}=(0,u.UO)(),{data:_,isLoading:T}=(0,m.aT)(t?x:v,t?{appointmentId:t,input:{items:a.map(e=>({bookableId:e.bookableId,employeeAssociations:e.employeeAssociations,id:e.id}))}}:{id:"xxxx-xxxx-xxxx",locationSlug:f||S,input:{items:a.map(e=>{let{attendeeReference:t=1,bookableId:n,employeeAssociations:i,...o}=e,{membershipId:r=null}=o;return{attendeeReference:t,bookableId:n,employeeAssociations:i,id:n,membershipId:r}})}}),C=a.find(e=>e.bookableId===r&&e.attendeeReference===n),j=(_?.cart?.items||[]).find(e=>e?.id===r&&(e.attendeeReference||1)===(n||1)),A=j?.packageServiceVariants?.[k||0]?.possibleEmployees||j?.possibleEmployees,w=!C||!A&&!T;if((0,o.useEffect)(()=>{w&&g()},[w,g]),w)return null;let P=(0,y.J)(A,{associatedEmployeeId:C.employeeAssociations?.[k??0],globalEmployeeId:l});return(0,i.jsxs)(s.p,{isOpen:!0,onClose:g,setOpen:()=>null,onOpen:()=>null,qaType:"employee-selection-modal",size:"wide",title:"includes"in C?C.includes?.[k||0]?.name:C.name,children:[(0,i.jsx)(s.p.Header,{onClose:()=>(g(),Promise.resolve())}),(0,i.jsx)(s.p.Body,{children:(0,i.jsx)(s.p.Body.Section,{children:(0,i.jsxs)(c.p,{name:"employee-selection",value:P.id,onChange:e=>{I(A?.find(t=>{let{id:n}=t;return n===e})??null,{attendeeReference:n,bookableId:r,packageItemIndex:k||0}),g()},children:[(0,i.jsx)(h.p,{value:"",qaType:"any-staff-tile",thumbnail:{icon:d.oyc,header:(0,p.__)("Any professional"),subheader:(0,p.__)("Maximum availability")},unsafeClassName:b().employeeThumbnail}),T?Array.from({length:2}).map((e,t)=>(0,i.jsx)(c.p.ItemSkeleton,{},t)):A?.map(e=>{let{avatar:t,firstName:n,formattedMinimumPrice:o,id:r,rating:a,title:l}=e;return i.jsx(h.p,{value:r,qaType:`employee-tile-${r}`,employee:{firstName:n,rating:a??void 0,src:t?.url,description:l,price:o}},r)})]})})})]})}var I=n(387078);function S(e){let{bookableItems:t,employeeId:n,groupAttendees:r,hideAttendeeName:a,onClose:l}=e;return((0,o.useEffect)(()=>{t.length||l()},[t.length,l]),t.length)?(0,i.jsxs)(s.p,{isOpen:!0,onClose:l,setOpen:()=>null,onOpen:()=>null,qaType:"multi-staff-modal",size:"wide",title:(0,p.gl)("Choose employee to perform your service","Select professional"),children:[(0,i.jsx)(s.p.Header,{onClose:()=>(l(),Promise.resolve())}),(0,i.jsx)(s.p.Body,{children:(0,i.jsx)(s.p.Body.Section,{children:(0,i.jsx)(I.h,{bookableItems:t,employeeId:n,groupAttendees:r,hideAttendeeName:a})})})]}):null}let _=(0,o.createContext)({openMultiStaffModal:()=>null});function T(e){let{children:t,isReschedule:n}=e,{cart:s,setEmployee:c,...u}=(n?l.C:a.j)(),[d,m]=(0,o.useState)(),[p,f]=(0,o.useState)(),[g,b]=(0,o.useState)(),{isOpen:h,openModal:y,closeModal:v}=(0,r.W)({key:"multi-staff-services"}),{isOpen:x,openModal:I,closeModal:T}=(0,r.W)({key:"multi-staff-employees"}),C=(0,o.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m(t.attendeeReference||1),f(t.bookableId),b(t.packageItemIndex),"employees"===e?I():y()},[I,y]),j=(0,o.useMemo)(()=>({openMultiStaffModal:C}),[C]);return(0,i.jsxs)(_.Provider,{value:j,children:[t,h?(0,i.jsx)(S,{bookableItems:s.bookableItems,employeeId:s.employee?.id,groupAttendees:s.groupAttendees,hideAttendeeName:!!p,onClose:v}):null,x&&p?(0,i.jsx)(k,{attendeeReference:d,employeeId:s.employee?.id,appointmentId:"rescheduleAppointmentId"in u?u.rescheduleAppointmentId:void 0,bookableId:p,bookableItems:s.bookableItems,packageItemIndex:g,onClose:T,setEmployee:c}):null]})}function C(){return(0,o.useContext)(_)}},554670:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});let i={id:"",firstName:"",avatar:null,rating:null,title:null};function o(e,t){let{associatedEmployeeId:n,globalEmployeeId:o}=t;return e&&e?.length&&(n||o)&&(e.find(e=>{let{id:t}=e;return t===n})||e.find(e=>{let{id:t}=e;return t===o}))||i}},240952:function(e,t,n){"use strict";function i(e){return[...new Set(e.flatMap(e=>e.employeeAssociations||[null]))].length>1}n.d(t,{C:function(){return i}})},484321:function(e,t,n){"use strict";n.d(t,{N:function(){return k},D:function(){return x}});var i=n(785893),o=n(667294),r=n(234308),a=n(899877),l=n(751450),s=n(550705),c=n(734800),u=n(89760),d=n(901313),m=n(135424),p=n(936171),f=n(781358),g=n(587495),b=n(770546),h=n(80128),y=n(702203);let v={[y.z.Blue]:"gradient1",[y.z.Dark]:"gradient3",[y.z.Green]:"gradient5",[y.z.Orange]:"gradient4",[y.z.Purple]:"gradient2",[y.z.Gray]:"gradient3",[y.z.Metallic]:"gradient3"};function x(e){let{isOpen:t,item:n,items:o,onAction:a,onChange:l,onClose:s,onOpen:c=()=>null,setOpen:y=()=>null,title:x}=e,k=o.reduce((e,t)=>"Service"===t.__typename&&t.membershipId?{...e,[t.membershipId]:(e[t.membershipId]||0)+1}:e,{});return(0,i.jsxs)(u.p,{title:x,isOpen:t,setOpen:y,onOpen:c,onClose:s,qaType:"membership-modal",children:[(0,i.jsx)(u.p.Header,{onClose:()=>(s(),Promise.resolve()),qaType:"membership-modal-header"}),(0,i.jsxs)(u.p.Body,{children:[(0,i.jsx)(u.p.Body.Section,{children:(0,r.__)("Select membership you want to be used on %{serviceName}",{serviceName:n.name})}),(0,i.jsx)(u.p.Body.Section,{children:(0,i.jsx)(d.o,{name:"memberships-choice-list",value:n.membershipId||"",onChange:l,gap:"250",choiceType:"single",children:n.memberships.map(e=>{let{availableSessions:t,formattedExpirationDate:o,id:a,isRecurring:l,isUnlimitedSessions:s,name:c,color:u}=e,b=Math.max(t-(k[a]??0),0),y=!s&&b<=0,x=!n.membershipId&&y;return(0,i.jsx)(d.o.Item,{value:a,primitiveType:"radio",variant:"lowest",qaType:"membership-modal-list-item",isDisabled:x,children:e=>{let{labelProps:n,descriptionProps:s}=e;return(0,i.jsxs)(m.H,{children:[(0,i.jsx)(m.H.Prefix,{leftSection:(0,i.jsx)(p.y,{icon:l?h.i3U:h.VlL,gradientBackground:v[u],size:"2xl"})}),(0,i.jsx)(m.H.Content,{children:(0,i.jsx)(m.H.Row,{leftSection:(0,i.jsxs)(f.K,{as:"div",gap:"0",children:[(0,i.jsx)(g.x,{...n,qaType:`membership-${a}-title`,font:"body-s-semibold",children:c}),(0,i.jsx)(g.x,{qaType:`membership-${a}-sessions`,...s,color:y?"danger":"neutral",font:"body-s-regular",children:t?(0,r.dw)("%{remainingSessions} session remaining","%{remainingSessions} sessions remaining",b,{remainingSessions:b}):(0,r.__)("Unlimited sessions")}),(0,i.jsx)(g.x,{font:"body-s-regular",children:o})]})})})]})}},a)})})})]}),(0,i.jsx)(u.p.Footer,{children:(0,i.jsx)(b.z,{variant:"secondary",onAction:a,size:"l",isFull:!0,qaType:"membership-modal-remove-button",children:(0,r.__)("Continue without membership")})})]})}function k(){let{cart:e}=(0,a.j)(),{location:t}=(0,l.l)(),{listSelectedItem:n,setSelectedListItemMembership:u,setMembershipHasBeenChanged:d,selectedListItemMembership:m,selectedListItemVariant:p,membershipModal:{closeMembershipsModal:f,isMembershipsModalOpen:g,openMembershipsModal:b}}=(0,c.tw)(),h=(0,o.useMemo)(()=>((p?p?.userMemberships?.map(e=>{let{id:t}=e;return t}):(0,s.D4)({preLeaseItem:n}))||[]).map(e=>t?.userMemberships?.find(t=>t.id===e)).filter(e=>!!e),[p,n,t]);return((0,o.useEffect)(()=>{!h.length&&g&&f()},[h,f,g]),n&&g&&h.length)?(0,i.jsx)(x,{isOpen:g,item:{bookableId:n.id,name:n.name,membershipId:m?.id,memberships:h},items:e.items,onAction:()=>(null!==m&&d(!0),u(null),f()),onChange:e=>{u(e),d(!0),f()},onClose:f,onOpen:b,title:(0,r.__)("Redeem membership")}):null}},734800:function(e,t,n){"use strict";n.d(t,{_o:function(){return g},tw:function(){return b}});var i=n(785893),o=n(667294),r=n(665049),a=n(899877),l=n(266753),s=n(652989),c=n(751450),u=n(68572),d=n(138695),m=n(550705),p=n(222921);let f=(0,o.createContext)(null);function g(e){let{children:t}=e,{cart:n,toggleItem:g}=(0,a.j)(),{addToCartEvent:b,removeCartItemEvent:h}=(0,l.my)(),{location:y}=(0,c.l)(),[v,x]=(0,o.useState)(null),[k,I]=(0,o.useState)(void 0),[S,_]=(0,o.useState)(null),[T,C]=(0,o.useState)(!1),{groupBookingAttendeeReference:j}=(0,d.f)(),A=n.items.filter(e=>{let{attendeeReference:t}=e;return t===j}).length===u.m,w=n.groupAttendees?.length?j:void 0,P=(0,o.useMemo)(()=>y?.userMemberships?y?.userMemberships.reduce((e,t)=>(e[t.id]=t,e),{}):{},[y?.userMemberships]),{closeModal:E,isOpen:B,setOpen:D}=(0,r.W)({key:"details"}),{closeModal:R,isOpen:N,openModal:M}=(0,r.W)({key:"memberships"}),O=(0,o.useCallback)(e=>{I("string"==typeof e?P[e]:e)},[P]),L=(0,o.useCallback)(e=>{_(v&&"variants"in v&&v.variants.find(t=>t.bookableId===e)||null)},[v]),$=(0,o.useCallback)(e=>{if("Service"===e.__typename){let t=n.items.map(s.qC).find(t=>{let{attendeeReference:n,bookableId:i}=t;return e.variants.some(e=>e.bookableId===i)&&w===n}),i=t&&"membershipId"in t?t.membershipId:void 0;void 0===i&&1===(w||1)&&(i=(0,m.uV)({cartItems:n.items,membershipIds:(0,m.D4)({preLeaseItem:e}),memberships:y?.userMemberships,attendeeReference:w||1})),O(i||null),C(!1)}return x(e),D(!0)},[D,n.items,w,y?.userMemberships,O]),F=(0,o.useCallback)(()=>(_(null),E()),[E]),q=(0,o.useCallback)((e,t)=>{let n=(0,s.qC)(e);b({offerItem:(0,p.d)(n)}),t&&g({__typename:"Service",variants:[{bookableId:t}],membershipId:e.membershipId},w),g(e,w),_(null)},[b,g,w]),U=(0,o.useCallback)(e=>{h(e),g({__typename:"Service",variants:[{bookableId:e}]},w),_(null)},[h,g,w]),W=(0,o.useCallback)(e=>{let t=(0,s.jg)(e),i=(0,s.Fb)({cartItems:n.items,bookableId:t}),o=(0,p.d)(e);g(e,w),i?h(t):b({offerItem:o})},[n.items,g,w,h,b]),z=(0,o.useMemo)(()=>({listSelectedItem:v,setListSelectedItem:x,selectedListItemMembership:k,setSelectedListItemMembership:O,selectedListItemVariant:S,setSelectedListItemVariant:L,detailsModal:{closeDetailsModal:F,isDetailsModalOpen:B,setDetailsModalOpen:D,openDetailsModal:$},membershipModal:{closeMembershipsModal:R,isMembershipsModalOpen:N,openMembershipsModal:M},membershipHasBeenChanged:T,setMembershipHasBeenChanged:C,onServiceVariantChange:q,onServiceVariantRemove:U,onPackageToggle:W,offersGiftCards:!!y?.hasGiftCards,offersMemberships:!!y?.offers?.hasMembershipTypes,offersProducts:!!y?.hasProductStore,offersVouchers:!!y?.offers?.hasVouchers,productStoreSlug:y?.productStoreSlug||null,hasGroupAppointments:y?.hasGroupAppointments||!1,disableServicesSelection:A}),[v,k,O,S,L,F,B,D,$,R,N,M,T,q,U,W,y?.hasGiftCards,y?.offers?.hasMembershipTypes,y?.offers?.hasVouchers,y?.hasProductStore,y?.productStoreSlug,y?.hasGroupAppointments,A]);return(0,i.jsx)(f.Provider,{value:z,children:t})}function b(){let e=(0,o.useContext)(f);if(!e)throw Error("No Service step context was found");return e}},900506:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var i=n(785893),o=n(527787);function r(e){let{employee:t,thumbnail:n,...r}=e;return(0,i.jsx)(o.p.Item,{...r,children:e=>n?(0,i.jsx)(o.c.ThumbnailContent,{...e,...n}):(0,i.jsx)(o.c.EmployeeContent,{...e,...t})})}},408777:function(e,t,n){"use strict";n.d(t,{LP:function(){return s},Mw:function(){return c},Wq:function(){return u}});var i=n(785893),o=n(667294),r=n(973314),a=n(613374);let l=o.createContext({defaultEmployee:null,setDefaultEmployee:()=>console.error("setDefaultEmployee not implemented"),typeOfBookingFlow:a.e0.DEFAULT,setTypeOfBookingFlow:()=>console.error("setTypeOfBookingFlow not implemented")}),s=e=>{let{children:t}=e,n=(0,r.lr)(),s=n.get("groupBooking"),c=!n.get("groupBooking")&&!n.get("rebook")&&n.get("employeeId"),u=a.e0.DEFAULT;s?u=a.e0.GROUP_BOOKING:c&&(u=a.e0.BOOK_WITH_STAFF);let[d,m]=(0,o.useState)(null),[p,f]=(0,o.useState)(u),g=(0,o.useMemo)(()=>({defaultEmployee:d,setDefaultEmployee:m,typeOfBookingFlow:p,setTypeOfBookingFlow:f}),[d,p]);return(0,i.jsx)(l.Provider,{value:g,children:t})},c=e=>{let{children:t}=e,[n,r]=(0,o.useState)(null),[s,c]=(0,o.useState)(a.e0.RESCHEDULE),u=(0,o.useMemo)(()=>({defaultEmployee:n,setDefaultEmployee:r,typeOfBookingFlow:s,setTypeOfBookingFlow:c}),[n,s]);return(0,i.jsx)(l.Provider,{value:u,children:t})},u=()=>(0,o.useContext)(l)},859854:function(e,t,n){"use strict";n.d(t,{LP:function(){return i.LP},Wq:function(){return i.Wq}});var i=n(408777)},791486:function(e,t,n){"use strict";n.d(t,{A:function(){return R},Z:function(){return M}});var i=n(785893),o=n(380270),r=n(667294),a=n(730280),l=n(973314),s=n(268930),c=n(234308),u=n(806483),d=n(65608),m=n(84392),p=n(240952),f=n(859854),g=n(751450),b=n(613374),h=n(241839);function y(e){return function(){e(e=>{e.employee=null,e.items=[],e.bookableItems=[]})}}var v=n(224437),x=n(652989);function k(e){e.items.forEach((t,n)=>{let{employeeAssociations:i}=t;i&&(e.items[n].employeeAssociations=void 0)})}var I=n(884270),S=n(68572),_=n(693513),T=n(266753),C=n(636729),j=n(786546),A=n(730602),w=n(25869);let P=(0,j.BX)(`
  mutation TrackWaitlistEntry($token: String!, $date: String) {
    trackWaitlistEntry(token: $token, date: $date) {
      success
    }
  }
`),E=(0,j.BX)(`
  query CreateCartFromWaitlistEntry($locationSlug: String!, $waitlistEntryToken: ID!) {
    cart(id: "", waitlistEntryToken: $waitlistEntryToken, locationSlug: $locationSlug, input: {}) {
      firstAvailableTimeSlot {
        date {
          iso
        }
      }
      items {
        ... on CartLineItemPackage {
          __typename
          bookableId
          attendeeReference
          packageServiceVariants {
            employee {
              id
            }
          }
        }
        ... on CartLineItemServiceVariant {
          __typename
          bookableId
          employee {
            id
          }
          attendeeReference
        }
      }
    }
  }
`),B=(e,t,n,i,o)=>{let{addSuccessToast:a}=(0,m.e)(),l=(0,c.gl)("Error toast message on booking flow","Some of the services you are attempting to book are no longer available"),s=(0,c.gl)("Error toast message on booking flow","Preferred time slot is no longer available"),u=e.get("waitlistEntryToken")??void 0,{data:d}=(0,A.aT)(u?E:null,{locationSlug:t,waitlistEntryToken:u}),{trigger:p}=(0,A.pk)(P);(0,r.useEffect)(()=>{if(!d)return;let r=(d.cart?.items||[]).map(e=>e?"CartLineItemServiceVariant"===e.__typename?{__typename:"Service",bookableId:e.bookableId,attendeeReference:e.attendeeReference,employeeAssociations:[e.employee?.id||null],variants:[{bookableId:e.bookableId,userMemberships:null}]}:"CartLineItemPackage"===e.__typename?{__typename:"Package",bookableId:e.bookableId,attendeeReference:e.attendeeReference,employeeAssociations:e.packageServiceVariants.map(e=>e.employee?.id||null)}:null:null).filter(Boolean);if(i(b.e0.WAITLIST_ENTRY),!d.cart||0===r.length){a(l,{size:"expanded"});return}n(r);let c=(0,x.D7)(r).join(),m=d.cart.firstAvailableTimeSlot?.date.iso;u&&p({token:u,date:m});let f=new URLSearchParams(e);if(f.set("offerItems",c),!m){o((0,w.l6O)(t,f)),a(s,{size:"expanded"});return}f.set("date",m.split("T")[0]),o((0,w.l6O)(t,f))},[d])};var D=n(741297);let R=(0,r.createContext)(null),N=(e,t)=>t?{...e,timeSlot:e.timeSlot?{...e.timeSlot,timeSpan:t.timeSlot?.timeSpan}:null,bookableItems:e.bookableItems.map(e=>{let n=t.items.find(t=>t.bookableId===e.bookableId);return{...e,formattedNonDiscountedPrice:n?.formattedNonDiscountedPrice,formattedRetailPrice:n?.formattedRetailPrice}}),total:{...e.total,discounts:t.total?.discounts.formatted?{formatted:t.total?.discounts.formatted}:null,price:t.total?.price?.formatted?{formatted:t.total?.price?.formatted,value:t.total?.price?.value||void 0}:null,priceBeforeDiscount:t.total?.priceBeforeDiscount.formatted?{formatted:t.total?.priceBeforeDiscount.formatted}:null}}:e;function M(e){let{children:t,initialValue:n,allowChoosePreferableEmployee:j,providerId:A}=e,{locationSlug:w}=(0,l.UO)(),P=(0,u.N)(),E=(0,l.lr)(),M=(0,s.H)(),O=(0,r.useRef)(n||(0,D.DC)({searchParams:E})),[L,$]=(0,a.x)(O.current),{location:F}=(0,g.l)(),{addErrorToast:q}=(0,m.e)(),{redirectTo:U}=(0,o.H)(),[W,z]=(0,r.useState)(!1),G=!!E.get("rebook"),V=function(e){$(t=>{t.items=(0,_.Uy)([],t=>{e.forEach(e=>{t.push(e)})})})},{typeOfBookingFlow:H,setTypeOfBookingFlow:K}=(0,f.Wq)(),{cart:Z,isEnhancing:J,isLoading:X}=(0,T.T8)({basicCart:L,location:F,locationId:F?.id,clearCart:y($),setTypeOfBookingFlow:K,setItems:V,updateBasicCart:$}),Y=N(Z,(0,C.W0)({basicCart:L,locationSlug:w}).cart),Q=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(n){let{attendeeReference:i,bookableId:o,packageItemIndex:r=0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{bookableId:""};e(e=>{if(o){let a=e.items.map(x.qC).findIndex(e=>e.bookableId===o&&e.attendeeReference===i),l=e.items[a],s=t[a];if(!l||!s){(0,v.tz)("setEmployee cart items not found",{itemIndex:a,attendeeReference:i,bookableId:o,packageItemIndex:r,items:e.items,enhancedItems:t});return}e.employee?.id&&function(e,t,n){e.items.forEach((i,o)=>{let{employeeAssociations:r}=i;r?e.items[o].employeeAssociations=r.map(e=>e??n):e.items[o].employeeAssociations=Array(t[o].includes?.length??1).fill(n)})}(e,t,e.employee.id),"Package"===s.__typename?l.employeeAssociations=[...Array(s.includes.length)].map((e,t)=>(t===r?n?.id:l.employeeAssociations?.[t])??null):l.employeeAssociations=[n?.id??null],e.employee=void 0,(0,x.o4)(e.items)&&(k(e),e.employee=n)}else e.employee=n,k(e);e.timeSlot=null})}}($,Y.items);B(E,w,V,K,U),(0,r.useEffect)(()=>{!1===j&&"groupBooking"!==H&&"groupBookingSkipTeamStepInNavigation"!==H&&K(b.e0.OMIT_TEAM_SELECTION)},[K,H,j]),(0,r.useEffect)(()=>{let e=E.get("marketingToken");!e&&A&&(e=(0,d.GD)(A)),e&&$(t=>{t.marketingToken=e})},[$,A,E]),(0,r.useEffect)(()=>{let e=E.get("cnToken");!e&&A&&(e=(0,d.OB)(A)),e&&$(t=>{t.customerNotifierToken=e})},[$,A,E]),(0,r.useEffect)(()=>{let e=(0,x.D7)(L.items).join()||void 0,{offerItems:t,...n}=Object.fromEntries(E.entries()),i=E.get("groupBooking"),o=E.get("waitlistEntryToken");i||t===e||o&&!t||U({pathname:P,query:{...n,...e&&{offerItems:e}},hash:M})},[L.items,M,P,U]);let ee=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=O.current.employee?.id,t=(0,p.C)(O.current.bookableItems),n=!!e;G&&(n||t)&&(async()=>{let t=await (0,h.dQ)({cart:Y,locationSlug:w,typeOfBookingFlow:H}),n=(0,h.z6)({data:t?.data,errors:t?.errors,variables:t?.variables,requestedEmployeeId:e});n.size?(z(!0),n.forEach(e=>{Q(null,e||void 0)}),ee.current=()=>{q(n.size>1?(0,c.__)("The team members you are trying to book with are no longer available"):(0,c.__)("The team member you are trying to book with is no longer available"),{size:"expanded"}),ee.current=null}):e&&Q((0,h.bI)(t?.data,e))})()},[]);let et=(0,r.useMemo)(()=>{let[e,t]=[O.current.bookableItems,Y.bookableItems].map(e=>e.map(e=>e.bookableId).sort().join(","));return e===t},[Y.bookableItems]),en=(0,r.useMemo)(()=>({cart:Y,isEnhancing:J,isLoading:X,isInitial:et,isMissingEmployees:W,isRebook:G,clearCart:y($),setEmployee:Q,setTimeSlot:function(e){$(t=>{t.timeSlot=e})},setGroupBookingGuest:function(e){$(t=>{t.groupAttendees||(t.groupAttendees=[{...e,reference:1,isBooker:!0}]);let n=t.groupAttendees?.findIndex(t=>t.reference===e.reference);n>=0&&t.groupAttendees[n]?t.groupAttendees[n]=e:t.groupAttendees.push(e)})},removeGroupBookingGuest:function(e){$(t=>{t.groupAttendees=t.groupAttendees?.filter(t=>t.reference!==e),t.items=t.items.filter(t=>t.attendeeReference!==e)})},toggleItem:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;$(n=>{let{bookableId:i}=(0,x.qC)(e),o=n.items.map(x.qC).findIndex(e=>e.bookableId===i&&e.attendeeReference===t);if("Service"!==e.__typename||e.variants[0]||(0,I.b2)("invalid-service-definition-in-toggle-item",Error("Invalid service definition in toggle item"),{item:e,currentCart:n.items}),o>=0)n.items.splice(o,1);else if(!(t?n.items.filter(e=>e.attendeeReference===t).length>=S.m:n.items.length>=S.m)){let o=(0,x.L5)(E)[i];n.items.push({...o&&{employeeAssociations:o},...e,attendeeReference:t})}})},toggleMembership:function(e,t){$(n=>{let i=n.items.map(x.qC).findIndex(t=>{let{bookableId:n}=t;return n===e});n.items[i]?.__typename==="Service"&&(n.items[i].membershipId===t?n.items[i].membershipId=null:n.items[i].membershipId=t)})},setIsFirstVisit:function(e){$(t=>{t.isFirstVisit=e})},setHasValidPatchTest:function(e){$(t=>{t.hasValidPatchTest=e})},clearUpsoldItems:function(){$(e=>{let t=e.items.filter(e=>"Service"!==e.__typename||!e.isUpsold);e.items=t,e.bookableItems=t.map(x.qC)})},showMissingEmployeesError:ee.current}),[Y,J,X,et,W,G,E,$,Q]);return(0,i.jsx)(R.Provider,{value:en,children:t})}},266753:function(e,t,n){"use strict";n.d(t,{jD:function(){return i.j},T8:function(){return _},my:function(){return T.m}});var i=n(795770),o=n(380270),r=n(667294),a=n(720014),l=n(973314),s=n(702203),c=n(379648),u=n(234308),d=n(884270),m=n(25869),p=n(84392),f=n(613374),g=n(958399),b=n(222156);function h(e){let t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60);return t>0&&n>0?(0,u.dw)("%{hours} hour %{minutes} mins","%{hours} hours %{minutes} mins",t,{hours:t,minutes:n}):t>0?(0,u.dw)("%{hours} hour","%{hours} hours",t,{hours:t}):n>0?(0,u.__)("%{minutes} mins",{minutes:n}):""}var y=n(937982),v=n(652989),x=n(550705);function k(e,t,n){return e.reduce((e,i)=>{let o=(0,v.jg)(i),r=t.find(e=>"Package"===e.__typename&&e.bookableId===o||"Service"===e.__typename&&e.variants.some(e=>o===e.bookableId));if(!r)return e;if("Service"===r.__typename){let t=r.variants.find(e=>{let{bookableId:t}=e;return o===t});if(!t)return e;if(i?.isUpsold)return[...e,i];let a="membershipId"in i?i?.membershipId:void 0;return null!==a&&1===(i.attendeeReference||1)&&(a=(0,x.uV)({cartItems:e,membershipIds:void 0===a?(0,x.D4)({preLeaseItem:r,variantBookableId:t.bookableId}):[a],memberships:n,attendeeReference:i.attendeeReference||1})),[...e,{...r,variants:[t],membershipId:a,attendeeReference:i?.attendeeReference||1,employeeAssociations:i?.employeeAssociations}]}return[...e,{...r,employeeAssociations:i?.employeeAssociations,attendeeReference:i?.attendeeReference||1}]},[])}let I=e=>{let{priceType:t,...n}=e.reduce((e,t)=>{if("Package"===t.__typename&&(e.totalDiscounts-=t.discount?.value?.value??0,e.totalPrice+=t.retailPrice?.value??0,e.totalPriceBeforeDiscount+=t.nonDiscountedPrice?.value??t.retailPrice?.value??0,e.priceType=t.priceType===s.FT.StartsAt?s.FT.StartsAt:e.priceType),"Service"===t.__typename){let{value:n=0}=t.variants[0]?.retailPrice??{};e.totalDiscounts-=(t.membershipId?n:0)+(t.variants[0].discount?.value?.value??0),e.totalPrice+=t.membershipId?0:n,e.totalPriceBeforeDiscount+=t.variants[0].nonDiscountedPrice?.value??t.variants[0].retailPrice?.value??0,e.priceType=t.variants[0].priceType!==s.FT.StartsAt||t.membershipId?e.priceType:s.FT.StartsAt}return e},{totalDiscounts:0,totalPrice:0,totalPriceBeforeDiscount:0,priceType:s.FT.Fixed});return{...n,priceType:b.cG[t]}},S=e=>!!e&&!!e.message&&e.message.includes("Network request failed");function _(e){let{basicCart:t,clearCart:n,setItems:i,location:x,setTypeOfBookingFlow:_}=e,T=!!(0,c.a3)("B2C_SERVICE_SEQUENCE"),{navigateTo:C}=(0,o.H)(),{locationSlug:j}=(0,l.UO)(),A=(0,l.lr)(),[w,P]=(0,r.useState)(!1),{addErrorToast:E}=(0,p.e)(),{marketingToken:B}=t,{data:D,error:R,isValidating:N}=(0,g.E)({context:t.channelType===s.xu.Direct?s.z0.BookingFlowDirectLink:s.z0.BookingFlow,slug:j,employeeId:t.employee?.id,marketingToken:B},{isPaused:()=>!1}),M=function(e){var t;let{basicCart:n,data:i,userMemberships:o,isServiceSequenceEnabled:r}=e;if(!i)return n;let a=k(n.items,(t=i.serviceCatalog,t?.reduce((e,t)=>[...e,...t.items],[])||[]),o),l=a;r&&(l=a.sort((e,t)=>e.cartInsertionOrder-t.cartInsertionOrder));let s=l.map(v.qC),{totalDiscounts:c,totalPrice:d,totalPriceBeforeDiscount:m,priceType:p}=I(l),f=i.employee;return n.employee&&"firstName"in n.employee?i.employee&&f?.id===n.employee.id||(f=n.employee):null===n.employee?f=null:void 0===n.employee&&(f=void 0),{...n,timeSlot:n.timeSlot?{...n.timeSlot,formattedDate:(0,y.i)(n.timeSlot.dateParts)}:null,employee:f,items:l,bookableItems:s,location:{id:i.id,address:i.address,currency:i.currency,name:i.name,rating:i.rating,reviewsCount:i.reviewsCount,slug:i.slug,owner:{id:i.owner?.id||""}},bookingCaption:function(e){if(!e.length)return null;let t=e.reduce((e,t)=>{let{attendeeReference:n=1,maxInSeconds:i=0,minInSeconds:o=0}=t;return{...e,[n.toString()]:{max:(e[n.toString()]?.max||0)+i,min:(e[n.toString()]?.min||0)+o}}},{}),n=e.reduce((e,t)=>e+="Package"===t.__typename?t.includes?.length||0:1,0),i=Math.max(...Object.values(t).map(e=>{let{min:t=0}=e;return t})),o=Math.max(...Object.values(t).map(e=>{let{max:t=0}=e;return t}));return[(0,u.dw)("%{serviceCount} service","%{serviceCount} services",n,{serviceCount:n}),i===o?h(i):`${h(i)} - ${h(o)}`].join(" \xa0•\xa0 ")}(s),total:k.length?{discounts:{formatted:0!==c?(0,b.T4)(c,{code:i.currency}):"",value:0!==c?c:void 0},price:{formatted:(0,b.T4)(d,{code:i.currency,priceType:p}),value:d},priceBeforeDiscount:{formatted:(0,b.T4)(m,{code:i.currency}),value:m}}:null}}({basicCart:t,data:D?.location,userMemberships:x?.userMemberships,isServiceSequenceEnabled:T}),O=S(R),L=(0,a.lR)(),$=!!R,F=L&&!N&&$&&!O,q=A.get("employeeId"),U=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{!N&&!U.current&&(U.current=!0,D?.location?.serviceCatalog&&t.items.length>M.items.length&&(i?.(M.items),_?.(f.e0.DEFAULT),E((0,u.gl)("Error toast message on booking flow","Some of the services you are attempting to book are no longer available"),{size:"expanded"})))},[D?.location?.serviceCatalog,t.items,M.items,N,q,_,i,E]),(0,r.useEffect)(()=>{if(F){if(w){(0,d.b2)("emergency-exit-booking-flow",Error("Emergency exit booking flow"),{apiErrors:{offerCatalogApiError:R},isEnhancing:N,cartEmployee:M?.employee||"Not found in cart",basicCartEmployee:t.employee,cart:JSON.stringify(M),isConnectionError:O,hasInternetConnection:L}),C({pathname:(0,m.WuJ)(j)});return}n(),P(!0)}},[M,n,w,L,O,j,C,R,F]),{cart:M,isEnhancing:N,isLoading:N&&!D}}var T=n(496)},496:function(e,t,n){"use strict";n.d(t,{m:function(){return m}});var i=n(667294),o=n(699378),r=n(603793),a=n(940907),l=n(185920),s=n(222921),c=n(652989),u=n(795770);let d=(e,t)=>{let n={item_id:e.id,item_name:e.name,item_category:a.ItemCategory.TREATMENT,quantity:1,discount:e.discount||0,price:e.retailPrice};return void 0!==t&&(n.index=t),e.caption&&(n.item_variant=e.caption),n},m=function(){let{isReschedule:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{cart:t}=(0,u.j)(),{location:n,items:a,total:m}=t,p=(0,i.useCallback)(()=>{if(!n)return;let e=[];return a.forEach(t=>{"caption"in t&&t.id&&("Service"===t.__typename&&e.push({id:t.id,caption:t.caption||"",name:t.name||"",discount:t.variants[0]?.discount?.value?.value,retailPrice:t.variants[0].retailPrice?.value}),"Package"===t.__typename&&e.push({id:t.id,caption:t.caption||"",name:t.name||"",discount:t.discount?.value?.value,retailPrice:t.retailPrice?.value}))}),{value:m?.price?.value||0,currency:n.currency,items:e.map(d).map(e=>({...e,item_brand:n.name,location_id:n.slug,affiliation:n.slug}))}},[a,n,m?.price?.value]),f=(0,i.useCallback)(t=>{let{step:i,flowType:a,stepTitle:s}=t;if(e||!n)return;let{cart:c}=(0,r.getAll)();(0,o.AB)({event:`${l.V.BOOKING_STEP_PREFIX}${i}`,booking_type:a,step_title:s,venue_name:n.name,...c})},[e,n]),g=(0,i.useCallback)(e=>{let{flowType:t}=e;if(!n)return;let{cart:i}=(0,r.getAll)();(0,o.AB)({event:l.V.BEGIN_CHECKOUT,venue_name:n.name,booking_type:t,...i})},[n]),b=(0,i.useCallback)(function(){let{offerItem:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e||!n)return;let{name:t,currency:i,slug:r}=n,a=d(e,void 0);(0,o.AB)({event:l.V.VIEW_ITEM,venue_name:t,value:a.price,currency:i,items:[{...a,item_brand:t,location_id:r,affiliation:r}]})},[n]),h=(0,i.useCallback)(e=>{let{offerItem:t}=e;if(!t||!n)return;let{name:i,currency:a,slug:s}=n,{cart:c}=(0,r.getAll)(),u=d(t,c?.items.length||0);(0,o.AB)({event:l.V.ADD_TO_CART,venue_name:i,value:u.price,currency:a,items:[{...u,item_brand:i,location_id:s,affiliation:s}]})},[n]),y=(0,i.useCallback)(e=>{if(!e||!n)return;let i=(0,s.N)(t.items,e);if(!i)return;let{cart:a}=(0,r.getAll)(),u=(0,c.qC)(i),m=(0,s.d)(u),{name:p,currency:f,slug:g}=n,b=a?.items.findIndex(e=>e.item_id===m.id)||0,h=d(m,b);(0,o.AB)({event:l.V.REMOVE_FROM_CART,remove_from_cart_counter:1,venue_name:p,value:h.price,currency:f,items:[{...h,item_brand:p,location_id:g,affiliation:g}]})},[n,t.items]),v=(0,i.useCallback)(e=>{let{paymentMethod:t,transactionId:i,flowType:a,currency:s,tax:c,email:u,phone:d,value:m,totalFeeEstimate:p}=e,{cart:f}=(0,r.getAll)();(0,o.AB)({event:l.V.PURCHASE,payment_method:t,transaction_id:i,booking_type:a,venue_name:n?.name,...f,value:m,...void 0!==c?{tax:c}:{},useremail:u,userphone:d,currency:s,total_fee_estimate:p||0})},[n?.name]),x=(0,i.useCallback)(e=>{let{bookingItemsLeases:t,coupon:n}=e,{cart:i}=(0,r.getAll)();return i?.items&&t.length===i.items.length&&(i.items=i.items.map((e,i)=>{let{price:o,discount:r,...a}=e;return{price:t[i].retailPrice,discount:Number((t[i].nonDiscountedPrice-t[i].retailPrice).toFixed(2)),...n?{coupon:n}:{},...a}}),i.value=t.reduce((e,t)=>t.retailPrice+e,0)),i},[]);return(0,i.useMemo)(()=>({prepareBookingCart:p,onFlowStepEvent:f,onBeginCheckoutEvent:g,onViewItemEvent:b,addToCartEvent:h,removeCartItemEvent:y,onPurchaseEvent:v,updateBookingCartWithLeases:x}),[p,f,g,b,h,y,v,x])}},958399:function(e,t,n){"use strict";n.d(t,{E:function(){return r}});var i=n(730602);let o=(0,n(654796).B)(`
  query BookingFlowCatalog(
    $slug: String!
    $context: LocationOfferContext = BOOKING_FLOW
    $employeeId: ID! = ""
    $marketingToken: String
  ) {
    location(slug: $slug) {
      id
      slug
      timeFormat24h
      address {
        shortFormatted
      }
      owner {
        id
      }
      currency
      name
      rating
      reviewsCount
      employee(employeeId: $employeeId) {
        id
        firstName
        title
        rating
        avatar {
          url
        }
      }
      serviceCatalog(context: $context, employeeId: $employeeId, marketingToken: $marketingToken) {
        ...BookingFlowServiceCatalog
      }
    }
  }
`),r=(e,t)=>{let{context:n,slug:r,employeeId:a="",marketingToken:l}=e;return(0,i.aT)(o,{context:n,slug:r,employeeId:a,marketingToken:l},{revalidateIfStale:!0,...t})}},795770:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});var i=n(667294),o=n(791486);function r(){let e=(0,i.useContext)(o.A);if(!e)throw Error("No Cart Context was found");return e}},797900:function(e,t,n){"use strict";n.d(t,{e5:function(){return l},i9:function(){return s}});var i,o,r=n(629177),a=n(652989);function l(e,t){let n=t.reduce((e,t)=>(t&&t.bookableId&&(e[t.bookableId]=t),e),{});return e.reduce((e,t)=>{let i=n[(0,a.jg)(t)];if(!i)return e;if("CartLineItemPackage"===i.__typename){let t=[...new Set(i.packageServiceVariants.map(e=>{let{possibleEmployees:t}=e;return t}).filter(r.y).flat().map(e=>{let{id:t}=e;return t}))];return[...e,{...i,type:"package",attendeeReference:i.attendeeReference||1,canEmployeeBeChanged:t.length>1,employeeAssociations:i.packageServiceVariants.map(e=>{let{employee:t}=e;return t?.id||null})}]}return"CartLineItemServiceVariant"===i.__typename?[...e,{...i,type:"service",attendeeReference:i.attendeeReference||1,canEmployeeBeChanged:!!i.possibleEmployees&&i.possibleEmployees.length>1,employeeAssociations:[i.employee?.id||null]}]:e},[])}function s(e){let{basicCart:t,data:n}=e;if(!n)return null;let i=l(t.items,n.items);return{...t,timeSlot:n.date?.formattedDate&&n.formattedHourRange?{formattedDate:n.date?.formattedDate,timeSpan:n.formattedHourRange}:null,employee:null,items:i,bookableItems:i,bookingCaption:n.caption||null,total:{discounts:{formatted:n.totals.totalDiscount?.formatted||null,value:n.totals.totalDiscount?.value||null},price:{formatted:n.totals.totalPrice?.formatted||null,value:n.totals.totalPrice?.value||null},priceBeforeDiscount:{formatted:n.totals.subtotal?.formatted||null,value:n.totals.subtotal?.value||null}}}}(i=o||(o={})).SERVICE="service",i.PACKAGE="package"},636729:function(e,t,n){"use strict";n.d(t,{J3:function(){return s},W0:function(){return c}});var i=n(730602),o=n(654796),r=n(652989),a=n(797900);let l=(0,o.B)(`
  query Cart($cartId: ID!, $slug: String!, $input: CartInput!) {
    cart(id: $cartId, locationSlug: $slug, input: $input) {
      totals {
        totalPrice {
          formatted
          value
        }
        subtotal {
          formatted
          value
        }
        totalDiscount {
          formatted
          value
        }
      }
      date {
        formattedDate
      }
      formattedHourRange
      caption
      items {
        id
        attendeeReference
        caption
        formattedDiscountInfo
        name
        formattedRetailPrice
        formattedNonDiscountedPrice
        ... on CartLineItemServiceVariant {
          __typename
          bookableId
          appliedUserMembership {
            id
          }
          employee {
            id
            firstName
          }
          possibleEmployees {
            id
          }
        }
        ... on CartLineItemPackage {
          __typename
          bookableId
          packageServiceVariants {
            employee {
              id
              firstName
            }
            possibleEmployees {
              id
            }
          }
        }
      }
    }
  }
`),s=e=>({attendees:e.groupAttendees.map(e=>{let{reference:t,isBooker:n}=e;return{reference:t,isBooker:n}}),items:e.items.map(r.qC).map((t,n)=>{let i,{employeeAssociations:o,attendeeReference:r,bookableId:a}=t,l=e.items[n];return"Service"===l.__typename&&(i=l.membershipId),{id:`${r}-${a}`,bookableId:a,attendeeReference:r,employeeAssociations:o,membershipId:i}}),marketingToken:e.marketingToken,date:e.timeSlot?.date,startTimeInSeconds:e.timeSlot?.startTimeInSeconds?Number(e.timeSlot?.startTimeInSeconds):null,requestedEmployeeId:e.employee?.id});function c(e){let{basicCart:t,locationSlug:n}=e,o=s(t),r=t.timeSlot?.startTimeInSeconds!==void 0,{data:c,isValidating:u}=(0,i.aT)(o.items?.length&&r?l:null,{cartId:"",slug:n,input:o},{isPaused:()=>!1});return{cart:(0,a.i9)({basicCart:t,data:r?c?.cart:null}),isLoading:u&&!c}}},899877:function(e,t,n){"use strict";n.d(t,{Z:function(){return i.Z},j:function(){return o.jD}});var i=n(791486),o=n(266753)},741297:function(e,t,n){"use strict";n.d(t,{DC:function(){return d},zy:function(){return c}});var i=n(702203),o=n(224991),r=n(350470),a=n(629177),l=n(763072),s=n(652989);function c(e){let t=r.x.get("rwgSessionData");if(t){let{rwgToken:n,geiToken:o,pId:r}=JSON.parse(t);if((n||o)&&r===e)return i.m$.GoogleReserve}return!1}let u={channelType:null,channelSource:null,marketingToken:null,timeSlot:null,isFirstVisit:null,hasValidPatchTest:i.af.PatchTestNotRequired,bookingCaption:"",location:null,customerNotifierToken:null,groupAttendees:[{reference:1,isBooker:!0}]},d=e=>{let{searchParams:t}=e,n=[...new Set((t.get("offerItems")||"").split(",").filter(Boolean))],r=t.get("employeeId")||null;"all"===r&&(r=null);let c=(0,s.L5)(t),d=n.map(e=>e.startsWith("sv")?{__typename:"Service",variants:[{bookableId:e}],...c[e]&&{employeeAssociations:c[e]},attendeeReference:1}:e.startsWith("p")?{__typename:"Package",bookableId:e,...c[e]&&{employeeAssociations:c[e]},attendeeReference:1}:null).filter(a.y);return{...u,employee:r?{id:r}:null,channelSource:function(e){let t=e.get("employeeId")||null,n=!!e.get("rebook"),r=!!e.get("groupBooking");if(t&&!n&&!r)return i.m$.StaffProfile;let a=(0,o.an)();return/\.facebook\.com/.exec(a)?i.m$.Facebook:/\.instagram\.com/.exec(a)?i.m$.Instagram:i.m$.Other}(t),channelType:(0,l.q)(t),items:d,bookableItems:d.map(s.qC),marketingToken:t.get("marketingToken")||null,customerNotifierToken:t.get("cnToken")||null}}},652989:function(e,t,n){"use strict";n.d(t,{Cd:function(){return u},D7:function(){return l},Fb:function(){return o},Gb:function(){return s},L5:function(){return m},bd:function(){return c},jg:function(){return a},o4:function(){return d},qC:function(){return r}});var i=n(629177);let o=e=>{let{cartItems:t,bookableId:n}=e;return t.find(e=>"Package"===e.__typename&&e.bookableId===n||"Service"===e.__typename&&e.variants.some(e=>e?.bookableId===n))},r=e=>{if("Service"===e.__typename){let t=e.variants[0]?.caption,n=e.variants[0]?.captionShort;return e.variants[0]?.name!==e.name&&(t=`${e.variants[0]?.caption} \xa0•\xa0 ${e.variants[0]?.name}`,n=`${e.variants[0]?.captionShort} \xa0•\xa0 ${e.variants[0]?.name}`),{...e.variants[0],attendeeReference:e.attendeeReference,name:e.name,caption:t,captionShort:n,membershipId:e.membershipId,employeeAssociations:e.employeeAssociations}}if("Package"===e.__typename)return e;throw Error("Invalid cart item type")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("Service"===e.__typename)return e.variants[t].bookableId;if("Package"===e.__typename)return e.bookableId;throw Error("Invalid cart item type")};function l(e){return e.map(e=>"Service"===e.__typename?e.variants[0].bookableId:"Package"===e.__typename?e.bookableId:null).filter(Boolean)}function s(e,t,n){return t.filter(t=>!e||!("attendeeReference"in t)||t.attendeeReference===n).map(e=>"bookableId"in e?e.bookableId:null).filter(i.y)}let c=e=>e.employee?.id?[e.employee.id]:[...new Set(e.bookableItems.flatMap(e=>e.employeeAssociations||[null]))];function u(e){return void 0===e.employee?void 0:null===e.employee?null:e.employee.id}function d(e){let t=new Set(e.flatMap(e=>e.employeeAssociations??[null]).filter(e=>void 0!==e));return 1===t.size&&!t.has(null)}function m(e){return(e.get("employeeAssociations")||"").split(";").reduce((e,t)=>{let[n,i]=t.split("=");return{...e,...n&&i&&{[n]:i.split(",").map(e=>e||null)}}},{})}},507603:function(e,t,n){"use strict";n.d(t,{r:function(){return m},c:function(){return p}});var i=n(785893),o=n(89760),r=n(587495),a=n(770546),l=n(667294),s=n(437781),c=n(234308),u=n(665049);let d=(0,l.createContext)(s.A);function m(e){let{children:t}=e,{isOpen:n,closeModal:s,openModal:m}=(0,u.W)({key:"warning"}),p=(0,l.useRef)(null),f=(0,l.useCallback)(function(e){let{disableWarning:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t?e():(p.current=e,m())},[m]),g=(0,l.useCallback)(()=>(p.current=null,s(),Promise.resolve()),[s]);return(0,i.jsxs)(d.Provider,{value:f,children:[n&&p.current?(0,i.jsxs)(o.p,{isOpen:!0,onClose:g,setOpen:()=>null,onOpen:()=>null,qaType:"exit-warning-modal",title:(0,c.gl)("Modal title label to confirm user wants to leaving group booking flow","Are you sure you want to leave this booking?"),children:[(0,i.jsx)(o.p.Header,{onClose:g}),(0,i.jsx)(o.p.Body,{children:(0,i.jsx)(o.p.Body.Section,{children:(0,i.jsx)(r.x,{font:"body-m-regular",children:(0,c.gl)("Modal description label describing potential impact of leaving booking flow","All selections will be lost")})})}),(0,i.jsxs)(o.p.Footer,{children:[(0,i.jsx)(a.z,{id:"heed-warning",size:"l",variant:"secondary",onAction:g,isFull:!0,children:(0,c.gl)("Button label to close modal","Cancel")}),(0,i.jsx)(a.z,{id:"ignore-warning",size:"l",variant:"primary",onAction:p.current,isFull:!0,children:(0,c.gl)("Button label to continue navigating away from booking flow","Yes, exit")})]})]}):null,t]})}function p(){return(0,l.useContext)(d)}},751450:function(e,t,n){"use strict";n.d(t,{v:function(){return a},l:function(){return l}});var i=n(785893),o=n(667294);let r=(0,o.createContext)(null);function a(e){let{children:t,refetch:n,location:a,isLoading:l}=e,s=(0,o.useMemo)(()=>({location:a,refetch:n,isLoading:l}),[a,n,l]);return(0,i.jsx)(r.Provider,{value:s,children:t})}function l(){let e=(0,o.useContext)(r);if(!e)throw Error("No Location context was found");return e}},133300:function(e,t,n){"use strict";n.d(t,{B:function(){return _},e:function(){return T}});var i=n(785893),o=n(667294),r=n(730280),a=n(859854),l=n(652989),s=n(751450),c=n(613374);function u(e){e.bookableItems.forEach((t,n)=>{let{employeeAssociations:i}=t;i&&(e.bookableItems[n].employeeAssociations=void 0)})}var d=n(730602),m=n(884270),p=n(222156),f=n(225324),g=n(937982),b=n(654796);let h=(0,b.B)(`
  query RescheduleAppointmentCart($appointmentId: ID!, $input: RescheduleAppointmentCartInput) {
    rescheduleAppointmentCart(appointmentId: $appointmentId, input: $input) {
      availabilityAssignments
      cancellationPolicy {
        title
        formattedContent
      }
      canSelectMultipleEmployees
      caption
      confirmationDetails {
        amount {
          currency
          value
        }
        content
        formattedAmount
        formattedLeftToPay
        label
      }
      date {
        formattedDateWithTime
      }
      deposit {
        title
        content
        formattedContent
        termsAndCondition {
          title
          content
        }
      }
      extraPaymentInformationWhenAddedCard
      formattedHourRange
      items {
        __typename
        bookableId
        caption
        formattedDiscountInfo
        id
        name
        nonDiscountedPrice {
          currency
          value
        }
        priceType
        retailPrice {
          currency
          value
        }
        ... on RescheduleAppointmentCartItemPackage {
          packageServiceVariants {
            caption
            employee {
              id
            }
            name
          }
        }
        ... on RescheduleAppointmentCartItemServiceVariant {
          employee {
            id
          }
        }
      }
      isPatchTestRequired
      patchTestPolicy {
        formattedPolicyMessage
        policyMessage
      }
      requiresAddedCardForConfirmation
      subtotalPrice {
        value
      }
      totalDiscount: discount {
        value
      }
      totalPrice {
        value
      }
      totalPriceType
      totalTaxes: totalTax {
        value
      }
    }
  }
`),y=(0,b.B)(`
  mutation RescheduleAppointment($id: ID!, $input: RescheduleAppointmentInput!) {
    rescheduleAppointment(id: $id, input: $input) {
      id
    }
  }
`),v=e=>{let t={date:e.timeSlot?.date,timeslot:void 0};return e.timeSlot?.startTimeInSeconds!==void 0&&e.timeSlot?.startTimeInSeconds!==null&&(t.timeslot=Number(e.timeSlot.startTimeInSeconds)),e.bookableItems?.length&&(t.items=e.bookableItems.map(e=>({id:e.id,bookableId:e.bookableId,employeeAssociations:e.employeeAssociations}))),e.bookableItems?.some(e=>e.employeeAssociations?.length)||(e.employee?.id&&(t.requestedEmployeeId=e.employee?.id),e.employee?.id===null&&(t.requestedEmployeeId=null)),t},x={value:0,formatted:"0"},k=e=>{let{basicCart:t,data:n,isLoading:i,location:o}=e;if(!n)return t;let r=o.employees?.find(e=>{let{id:n}=e;return n===t?.employee?.id})||t.employee,a=n.totalDiscount?{formatted:(0,p.T4)(n.totalDiscount.value,{code:o.currency}),value:n.totalDiscount.value}:x,l=n.subtotalPrice?{formatted:(0,p.T4)(n.subtotalPrice.value,{code:o.currency}),value:n.subtotalPrice.value}:x;return{...t,bookingCaption:n.caption,timeSlot:t.timeSlot?{...t.timeSlot,isLoading:i,formattedDate:(0,g.i)(t.timeSlot.dateParts),timeSpan:i||!n.formattedHourRange?t.timeSlot.time:n.formattedHourRange}:null,employee:r,bookableItems:n.bookingItems,total:{discounts:a,price:{formatted:(0,p.T4)(n.totalPrice.value,{code:o.currency,priceType:p.cG[n.totalPriceType]}),value:n.totalPrice.value},tax:n.totalTaxes?.value?{formatted:(0,p.T4)(n.totalTaxes?.value,{code:o.currency})}:null,priceBeforeDiscount:l},isPatchTestRequired:n.isPatchTestRequired||null,patchTestPolicy:n.patchTestPolicy||null}},I=(e,t)=>e&&e.rescheduleAppointmentCart?{...e.rescheduleAppointmentCart,bookingItems:e.rescheduleAppointmentCart.items.map((e,n)=>{let i=t.bookableItems[n];return{attendeeReference:1,bookableId:e.bookableId,caption:e.caption,formattedDiscountInfo:e.formattedDiscountInfo,id:e.id,name:e.name,nonDiscountedPrice:e.nonDiscountedPrice,priceType:e.priceType,retailPrice:e.retailPrice,...e?.__typename==="RescheduleAppointmentCartItemServiceVariant"&&{employeeAssociations:"employeeAssociations"in(i||{})?i.employeeAssociations:[e?.employee?.id||null]},...e?.__typename==="RescheduleAppointmentCartItemPackage"&&{employeeAssociations:"employeeAssociations"in(i||{})?i.employeeAssociations:e.packageServiceVariants.map(e=>e?.employee?.id||null),includes:e.packageServiceVariants.map(e=>{let{caption:t,name:n}=e;return{caption:t,name:n}})}}})}:null,S=()=>({timeSlot:null,employee:void 0,bookableItems:[],bookingCaption:"",appointmentLease:{confirmAppointmentLease:()=>Promise.resolve(""),status:{error:void 0,hasExpired:null,isLoading:!1},data:null},groupAttendees:[{reference:1,isBooker:!0}],isPatchTestRequired:null,patchTestPolicy:null}),_=(0,o.createContext)(null);function T(e){let{children:t,initialValue:n,allowChoosePreferableEmployee:p,appointmentOriginalDate:g,appointmentId:b,rescheduleAppointmentId:x,appointmentOriginalFormattedDateWithTime:T}=e,[C,j]=(0,r.x)(n||S()),{location:A}=(0,s.l)(),{typeOfBookingFlow:w,setTypeOfBookingFlow:P}=(0,a.Wq)();(0,o.useEffect)(()=>{!1===p&&"groupBooking"!==w&&"groupBookingSkipTeamStepInNavigation"!==w&&P(c.e0.RESCHEDULE_OMIT_TEAM_SELECTION)},[P,w]);let E=(0,o.useRef)(null),{cart:B,isEnhancing:D,isLoading:R,appointmentLease:N}=function(e){let{basicCart:t,location:n,appointmentId:i}=e,{data:r,error:a,errors:l,isLoading:s,isValidating:c}=(0,d.aT)(i?h:null,{appointmentId:`sa:${i}`,input:v(t)},{keepPreviousData:!0}),{trigger:u}=(0,d.pk)(y,{}),p=t.employee?.id??"",g=I(r,t),b={confirmAppointmentLease:(0,o.useCallback)(async e=>{if(!t.timeSlot?.date)return Promise.resolve("");let n={appointmentDate:t.timeSlot.date,appointmentStartTimeInSeconds:Number(t.timeSlot.startTimeInSeconds),requestedEmployeeId:p,availabilityAssignments:e??g?.availabilityAssignments},o=await u({id:i||"",input:n});o?.errors&&(0,m.b2)("Unhandled error on reschedule confirmation",Error("Unhandled error on reschedule confirmation"),{appointmentId:i,input:n,response:JSON.stringify(o.errors)});let{bookingId:r}=(0,f.l)(o?.result?.rescheduleAppointment?.id);return r},[t.timeSlot,g?.availabilityAssignments,p,i,u]),data:g,confirmation:void 0,status:{error:s?void 0:l?.[0]||a,hasExpired:!1,isLoading:s}};return n?.id?{cart:k({basicCart:t,data:g,isLoading:s||c,location:n}),isEnhancing:c,isLoading:s&&!r,appointmentLease:b}:{cart:t,isEnhancing:!0,isLoading:!0,appointmentLease:b}}({basicCart:C,location:A,appointmentId:b}),M=(0,o.useMemo)(()=>{var e;return{cart:B,isEnhancing:D,isLoading:R,setEmployee:(e=B.bookableItems,function(t){let{bookableId:n,packageItemIndex:i=0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{bookableId:""};j(o=>{if(o.bookableItems=e,n){let e=o.bookableItems.findIndex(e=>e.bookableId===n),r=o.bookableItems[e];o.employee?.id&&function(e,t){e.bookableItems.forEach((n,i)=>{let{employeeAssociations:o}=n;o?e.bookableItems[i].employeeAssociations=o.map(e=>e??t):e.bookableItems[i].employeeAssociations=Array(e.bookableItems[i].includes?.length??1).fill(t)})}(o,o.employee.id),r.includes?.length?r.employeeAssociations=[...Array(r.includes.length)].map((e,n)=>(n===i?t?.id:r.employeeAssociations?.[n])??null):o.bookableItems[e].employeeAssociations=[t?.id??null],o.employee=void 0,(0,l.o4)(o.bookableItems)&&(u(o),o.employee=t)}else u(o),o.employee=t;o.timeSlot=null})}),setTimeSlot:function(e){j(t=>{t.timeSlot=e})},appointmentLease:N,appointmentOriginalDate:g,rescheduleAppointmentId:x,appointmentOriginalFormattedDateWithTime:T}},[B,D,R,j,N,g,x,T]);return(0,o.useEffect)(()=>{if(!E.current&&A?.employees?.length&&(0,l.o4)(B.bookableItems)){let e=B.bookableItems[0]?.employeeAssociations?.[0],t=(A?.employees||[]).find(t=>t.id===e);E.current=t??null,M.setEmployee(E.current)}},[A?.employees,B.bookableItems,M]),(0,i.jsx)(_.Provider,{value:M,children:t})}},790807:function(e,t,n){"use strict";n.d(t,{C:function(){return r}});var i=n(667294),o=n(133300);function r(){let e=(0,i.useContext)(o.B);if(!e)throw Error("No reschedule cart context was found");return e}},171106:function(e,t,n){"use strict";n.d(t,{F:function(){return s},J:function(){return l}});var i=n(785893),o=n(667294),r=n(899877),a=n(429924);let l=(0,o.createContext)(null);function s(e){let{children:t}=e,{cart:n}=(0,r.j)(),o=(0,a.b)(n);return(0,i.jsx)(l.Provider,{value:o,children:t})}},388533:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});var i=n(667294),o=n(171106);function r(){let e=(0,i.useContext)(o.J);if(!e)throw Error("No reservation cart context was found");return e}},429924:function(e,t,n){"use strict";n.d(t,{q:function(){return o},b:function(){return E}});var i,o,r=n(380270),a=n(786546),l=n(667294),s=n(414354),c=n(699378),u=n(973314),d=n(400645),m=n(730602),p=n(702203),f=n(379648),g=n(234308),b=n(806483),h=n(65608),y=n(224437),v=n(84392),x=n(266753),k=n(763072),I=n(654796);let S=(0,I.B)(`
  mutation CancelReservation($id: ID!) {
    cancelReservation(id: $id) {
      id
    }
  }
`),_=(0,I.B)(`
  mutation ConfirmReservation($id: ID!, $input: ConfirmReservationComplementaryDataInput!) {
    confirmReservation(id: $id, input: $input) {
      id
    }
  }
`),T=(0,I.B)(`
  mutation ConfirmReservationWithCard($id: ID!, $input: ConfirmReservationComplementaryDataInput!) {
    confirmReservationWithCard(id: $id, input: $input) {
      id
    }
  }
`),C=(0,I.B)(`
  mutation CreateReservation($id: ID!, $input: CreateReservationInput!) {
    createReservation(id: $id, input: $input) {
      id
      expiresInSeconds
      formattedNotificationMessage
    }
  }
`),j=(0,I.B)(`
  mutation UpdateReservationItemMemberships($id: ID!, $itemId: ID!, $membershipId: ID) {
    updateReservationItemMembership(id: $id, itemId: $itemId, membershipId: $membershipId) {
      id
    }
  }
`),A=(0,I.B)(`
  mutation UpdateReservationPromoCode($id: ID!, $input: UpdateReservationPromoCodeInput!) {
    updateReservationPromoCode(id: $id, input: $input) {
      id
    }
  }
`);var w=n(609405),P=n(61727);(i=o||(o={})).MissingTimeslot="MISSING_TIMESLOT",i.MissingItems="MISSING_ITEMS";let E=e=>{let{trigger:t}=(0,m.pk)(C),{trigger:n}=(0,m.pk)(_),{trigger:i}=(0,m.pk)(T),{trigger:o}=(0,m.pk)(S),{trigger:I}=(0,m.pk)(A),{trigger:E}=(0,m.pk)(j),[B,D]=(0,l.useState)(!1),[R,N]=(0,l.useState)(!1),[M,O]=(0,l.useState)(!1),[L,$]=(0,l.useState)(null),[F,q]=(0,l.useState)(null),[U,W]=(0,l.useState)([]),{updateBookingCartWithLeases:z}=(0,x.my)(),G=(0,h.zY)(h.Iv.externalReferrerUrl)||"",V=decodeURIComponent((0,h.zY)(h.Iv.rwgToken)||""),H=(0,h.zY)(h.Iv.userLandedFirstUrl)||"",K=(0,f.a3)("B2C_LOYALTY_BOOKING_FLOW_WEB"),Z=(0,l.useMemo)(()=>({isLoyaltyEnabled:!!K,id:null==K?"":L,externalReferrerUrl:G,landingPageUrl:H,rwgToken:V}),[L,G,K,H,V]),{data:J,errors:X,isLoading:Y}=(0,w.RQ)(Z),Q=(0,a.vz)(w._O,J?.reservation),ee=(0,P.Ew)(J,e.groupAttendees),et=(0,l.useRef)(null),en=Y||B||R,{addErrorToast:ei}=(0,v.e)();et.current=Q?.status,(0,l.useEffect)(()=>{X?.length&&W(X)},[X]),(0,l.useEffect)(()=>{Q?.payment?.id&&Q?.payment?.status===p.WO.Failed&&(ei((0,g.__)`We could not process payment, please try again.`,{size:"expanded"}),O(!1))},[Q?.payment?.id,Q?.payment?.status,ei]);let{redirectTo:eo}=(0,r.H)(),er=(0,b.N)(),ea=(0,u.lr)(),el=ea.get("waitlistEntryToken")??void 0,es=(0,l.useCallback)(async()=>{if(!e.timeSlot)throw Error("MISSING_TIMESLOT");if(!e.items?.length)throw Error("MISSING_ITEMS");let n=(0,s.Z)(),i=e.groupAttendees?.length>1,o=null,r=null;D(!0);try{if(o=await t({id:n,input:{date:e.timeSlot.date,startTimeInSeconds:Number(e.timeSlot.startTimeInSeconds),locationId:String(e.location?.id||""),items:(0,P.pC)(e.items,i),employeeId:e.employee?.id,attendees:e.groupAttendees?.map(e=>({reference:e.reference,isBooker:e.isBooker}))||[{reference:1,isBooker:!0}],marketingOfferToken:e.marketingToken,hasValidPatchTest:e.hasValidPatchTest,waitlistEntryToken:el,...(0,P.zR)(e)}}),r=o?.errors,o?.result?.createReservation?.id&&!ea.has("reservation-id")&&er){let e=new URLSearchParams(ea||"");e.set("reservation-id",o.result.createReservation.id),eo({pathname:er,search:e.toString()})}}catch(e){r=e instanceof Error?[e]:[Error("Failed to create reservation")]}return D(!1),r?W(r):($(n),q(o?.result.createReservation?.expiresInSeconds||null)),o},[e,t,el,er,ea,eo]),ec=(0,l.useCallback)(async e=>{let t=null;try{if(N(!0),t=await (0,d.W)(w.HC,{reservationId:e}),t.errors?.length)throw 1===t.errors.length?t.errors[0]:t.errors;if(!t.data.reservation)throw Error("Reservation not found");$(t.data.reservation.id),q(1200)}catch(e){W(()=>e instanceof Error?[e]:Array.isArray(e)&&e.every(e=>e instanceof Error)?e:[Error("Failed to retrieve reservation")])}return N(!1),t},[]),eu=(0,l.useCallback)(async(t,o)=>{let r;if(!L)return Promise.reject(Error("reservationId is not set"));if(!e.channelType)return Promise.reject(Error("channel type is not set"));let a={id:L,input:{notes:t,channelType:(0,k.D)(String(e.location?.owner?.id))||e.channelType||p.xu.Generic}};O(!0);try{if(o===p.Qn.Cwc&&(r=await i(a)),o===p.Qn.PayAtStore&&(r=await n(a)),r?.errors?.length)return O(!1),Promise.reject(r.errors);return Promise.resolve()}catch(e){O(!1),(0,y.tz)(Error("Confirmation failed"),{error:e,protectionStrategy:o,apiErrors:r?.errors?JSON.stringify(r?.errors):void 0})}throw Error(`Unknown protection strategy:${o}`)},[n,i,e.location?.owner?.id,L,e.channelType]),ed=(0,l.useCallback)(e=>(W([]),e&&et.current!==p.Jr.Confirmed)?($(null),o({id:e})):Promise.resolve(),[o]),em=(0,l.useCallback)(async e=>{if(!L||!ee)return Promise.reject(Error("reservationId is not set"));try{let t=await I({id:L,input:{promoCode:e}});if(t?.errors?.[0])return t.errors[0].extensions?.formattedMessage||(0,g.__)`Invalid code. Got a gift card? Redeem at venue`;c.Kk.save(c.Kk.TrackingDataKeys.cart,z({bookingItemsLeases:ee.bookableItems.map(e=>({retailPrice:e.retailPrice.value,nonDiscountedPrice:e.nonDiscountedPrice?.value||e.retailPrice.value})),...e&&{coupon:e}}))}catch(e){if(e?.response?.errors?.[0])return e.response.errors[0].extensions?.formattedMessage||(0,g.__)`Invalid code. Got a gift card? Redeem at venue`}},[ee,L,z,I]);return{cart:ee,isLoading:en,shouldBlockConfirming:en||M,reservation:(0,a.vz)(w._O,J?.reservation)||null,setReservationId:$,expiresInSeconds:F,confirmReservation:eu,createReservation:es,cancelReservation:ed,updateReservationPromotionCode:em,updateReservationItemMemberships:E,errors:U,retrieveReservation:ec,subscriptionErrors:X,subscriptionVariables:Z}}},609405:function(e,t,n){"use strict";n.d(t,{HC:function(){return u},RQ:function(){return d},_O:function(){return s},iS:function(){return l},tA:function(){return c}});var i=n(786546),o=n(730602),r=n(83003),a=n(540365);let l=(0,i.BX)(`
  fragment ReservationAppliedMembershipFragment on UserMembership {
    availableSessions
    color
    formattedExpirationDate
    id
    isRecurring
    name
  }
`),s=(0,i.BX)(`
    fragment ReservationFragment on Reservation {
      id
      canPayWithOwnFreshaAccount
      appointment {
        bookingRef
        total {
          value
          currency
        }
        items {
          bookableId
          title
          retailPrice {
            value
            currency
          }
        }
      }
      location {
        owner {
          paymentWithGiftCardsSupported
        }
      }
      parentBookingId
      status
      totalFeeEstimate
      payment {
        status
        id
      }
      groupAttendees: attendees {
        isBooker
        name
        reference
      }
      formattedSubtotal
      formattedTotalDiscount
      formattedTotalPrice
      formattedTotalTax
      formattedHourRange
      caption
      date {
        dayName
        dayOfMonth
        monthName
      }
      usedPromotionCode {
        code
        name
      }
      requiresAddedCardForConfirmation
      extraPaymentInformationWhenAddedCard
      protectionStrategy
      cancelationPolicy {
        content
        formattedContent
        title
      }
      patchTestPolicy {
        policyMessage
        formattedPolicyMessage
      }
      payNow {
        value
        formattedMessage
        monetaryValue {
          value
          currency
        }
      }
      payAtVenue {
        value
        formattedMessage
        monetaryValue {
          value
        }
      }
      deposit {
        title
        content
        termsAndCondition {
          title
          content
        }
      }
      items {
        __typename
        id
        name
        caption
        priceType
        retailPrice {
          currency
          value
        }
        formattedRetailPrice
        attendeeReference
        nonDiscountedPrice {
          currency
          value
        }
        formattedNonDiscountedPrice
        formattedDiscountInfo
        ... on CartLineItemPackage {
          bookableId
          packageServiceVariants {
            employee {
              id
            }
          }
        }
        ... on CartLineItemServiceVariant {
          employee {
            id
          }
          bookableId
          isUserMembershipExpired
          userMemberships: possibleUserMemberships {
            id
            expirationDate {
              formattedDate
            }
          }
          appliedUserMembership {
            ...ReservationAppliedMembershipFragment
          }
        }
      }
      ...DiscountsButton
      ...DiscountsAndRewardsUpsellBanner
    }
  `,[l,r.E,a.z]),c=(0,i.BX)(`
    subscription ReservationSubscription(
      $isLoyaltyEnabled: Boolean!
      $id: ID!
      $externalReferrerUrl: String
      $landingPageUrl: String
      $rwgToken: String
    ) {
      reservation(
        id: $id
        externalReferrerUrl: $externalReferrerUrl
        landingPageUrl: $landingPageUrl
        rwgToken: $rwgToken
      ) {
        ...ReservationFragment
      }
    }
  `,[s]),u=(0,i.BX)(`
    query RetrieveReservation($reservationId: ID!) {
      reservation(id: $reservationId) {
        id
      }
    }
  `,[]),d=e=>{let{id:t,externalReferrerUrl:n,isLoyaltyEnabled:r,landingPageUrl:a,rwgToken:l}=e,{data:u,error:d}=(0,o.pM)(t?c:null,{isLoyaltyEnabled:r,id:t,externalReferrerUrl:n,landingPageUrl:a,rwgToken:l}),m=u?.reservation?(0,i.vz)(s,u.reservation).id:null;return!t||m&&t!==m?{data:void 0,errors:void 0,isLoading:!!t}:{data:u,errors:d,isLoading:void 0===u}}},61727:function(e,t,n){"use strict";n.d(t,{zR:function(){return b},Ew:function(){return g},pC:function(){return f}});var i=n(786546),o=n(543837),r=n(692553),a=n(702203),l=n(629177),s=n(741297),c=n(763072),u=n(354197),d=n(937982);let m=e=>null===e?a.wI.AlreadyKnownAtLocation:e?a.wI.FirstVisit:a.wI.NotFirstVisit;var p=n(609405);let f=(e,t)=>e.map(e=>{if("Package"===e.__typename)return{id:e.bookableId,bookableId:e.bookableId,employeeAssociations:e.employeeAssociations,attendeeReference:e.attendeeReference};if(t&&e.isUpsold)return null;if("Service"===e.__typename){let{membershipId:t}=e;return{id:e.variants[0].bookableId,bookableId:e.variants[0].bookableId,...t&&{membershipId:t},employeeAssociations:e.employeeAssociations,attendeeReference:e.attendeeReference,upsold:e.isUpsold||!1}}return null}).filter(l.y),g=(e,t)=>{if(!e?.reservation)return null;let n=(0,i.vz)(p._O,e.reservation);return{groupAttendees:t,bookableItems:n.items.map(e=>{if("CartLineItemServiceVariant"===e.__typename){let t=(0,i.vz)(p.iS,e.appliedUserMembership);return{...e,employeeAssociations:[e.employee?.id],caption:e.caption||"",bookableId:e.id,isUserMembershipExpired:!!e.isUserMembershipExpired,attendeeReference:e.attendeeReference??1,membershipId:t?t.id:null}}if("CartLineItemPackage"===e.__typename)return{...e,employeeAssociations:e.packageServiceVariants.map(e=>e.employee?.id),caption:e.caption||"",bookableId:e.id,attendeeReference:e.attendeeReference??1};throw Error("Unsupported item type")}),timeSlot:n.date?{formattedDate:(0,d.i)(n.date),dateParts:n.date,timeSpan:n.formattedHourRange??void 0}:null,bookingCaption:n.caption??"",usedPromotionCode:n.usedPromotionCode??null,employee:null,total:{discounts:{formatted:n.formattedTotalDiscount||""},price:{formatted:n.formattedTotalPrice||""},priceBeforeDiscount:{formatted:n.formattedSubtotal||""},tax:{formatted:n.formattedTotalTax||""}}}},b=e=>{let t=(0,o.g)({locationId:e.location?.id||"",providerId:e.location?.owner?.id||"",interactions:(0,r.Ld)()}),n=(0,u.U)(e.location.slug,t,e.isFirstVisit);return{channelSource:(0,s.zy)(String(e.location?.owner?.id))||e.channelSource||a.m$.Other,channelType:(0,c.D)(String(e.location?.owner?.id))||e.channelType||a.xu.Generic,customerNotifierToken:e.customerNotifierToken,clientChannelType:t,isFirstVisit:m(e.isFirstVisit),bookingFirstTouchAttribution:n}}},26659:function(e,t,n){"use strict";n.d(t,{k:function(){return B},z:function(){return D}});var i=n(785893),o=n(667294),r=n(973314),a=n(899877),l=n(380270),s=n(786546),c=n(618446),u=n.n(c),d=n(414354),m=n(400645),p=n(234308),f=n(24252),g=n(224437),b=n(25869),h=n(84392),y=n(797900),v=n(652989),x=n(751450),k=n(61727);let I=(0,s.BX)(`
  fragment FirstAvailableTimeSlotFragment on Cart {
    firstAvailableTimeSlot {
      date {
        iso
      }
      startTime
    }
  }
`),S=(0,s.BX)(`
    query FirstAvailableTimeSlot($cartId: ID!, $slug: String!, $input: CartInput!) {
      cart(id: $cartId, locationSlug: $slug, input: $input) {
        ...FirstAvailableTimeSlotFragment
      }
    }
  `,[I]),_=(0,s.BX)(`
  fragment NonDiscountedCartFragment on Cart {
    totals {
      totalPrice {
        formatted
      }
      subtotal {
        formatted
      }
      totalDiscount {
        formatted
      }
    }
    date {
      formattedDate
    }
    formattedHourRange
    caption
    items {
      id
      attendeeReference
      caption
      formattedDiscountInfo
      name
      formattedRetailPrice
      formattedNonDiscountedPrice
      ... on CartLineItemServiceVariant {
        __typename
        bookableId
        employee {
          id
          firstName
        }
      }
      ... on CartLineItemPackage {
        __typename
        bookableId
        packageServiceVariants {
          employee {
            id
            firstName
          }
        }
      }
    }
  }
`),T=(0,s.BX)(`
    query NonDiscountedCart($cartId: ID!, $slug: String!, $input: CartInput!) {
      cart(id: $cartId, locationSlug: $slug, input: $input) {
        ...NonDiscountedCartFragment
      }
    }
  `,[_]),C=(0,s.BX)(`
  mutation JoinWaitlist($input: JoinWaitlistInput!) {
    joinWaitlist(input: $input) {
      id
    }
  }
`),j=(e,t,n)=>t?{...e,timeRanges:n.timeRanges,nextAvailableDate:n.nextAvailableDate,timeSlot:null,bookableItems:e.bookableItems.map(e=>{let n=t.items.find(t=>t.bookableId===e.bookableId);return{...e,retailPrice:void 0,nonDiscountedPrice:void 0,priceType:void 0,membershipId:void 0,...n&&{formattedNonDiscountedPrice:n.formattedNonDiscountedPrice,formattedRetailPrice:n.formattedRetailPrice}}}),total:{...e.total,discounts:t.total?.discounts.formatted?{formatted:t.total?.discounts.formatted}:null,price:t.total?.price?.formatted?{formatted:t.total?.price?.formatted,value:t.total?.price?.value||void 0}:null,priceBeforeDiscount:t.total?.priceBeforeDiscount.formatted?{formatted:t.total?.priceBeforeDiscount.formatted}:null}}:{...e,timeRanges:n.timeRanges,nextAvailableDate:n.nextAvailableDate},A=e=>{if(void 0!==e)return`${Math.floor(e/3600).toString().padStart(2,"0")}:${Math.floor(e%3600/60).toString().padStart(2,"0")}:${(e%60).toString().padStart(2,"0")}`},w=e=>86400===e,P=e=>({attendees:e.groupAttendees.map(e=>{let{reference:t,isBooker:n}=e;return{reference:t,isBooker:n}}),items:e.items.map(v.qC).map(e=>{let{employeeAssociations:t,attendeeReference:n,bookableId:i}=e;return{id:`${n}-${i}`,bookableId:i,attendeeReference:n,employeeAssociations:t}}),requestedEmployeeId:e.employee?.id}),E=(e,t,n)=>{let i=(0,o.useMemo)(()=>({...P(e),waitlist:{timeWindows:[]}}),[e]),{navigateTo:a}=(0,l.H)(),{addErrorToast:c}=(0,h.e)(),v=(0,r.lr)(),[E,B]=(0,o.useState)(!1),[D,R]=(0,o.useState)(!1),{location:N}=(0,x.l)(),M=v.get("date")||"",O=(0,o.useMemo)(()=>{if(N?.utcOffset===void 0)return null;let e=(0,f.vp)(new Date(M),0),t=Number.isNaN(e.getDate())?(0,f.vp)(new Date,N.utcOffset):e;return{startDate:t,endDate:t,startTime:void 0,endTime:void 0,id:(0,d.Z)()}},[M,N?.utcOffset]),[L,$]=(0,o.useState)({timeRanges:[],nextAvailableDate:null}),[F,q]=(0,o.useState)(null),U=(0,o.useCallback)(async e=>{if(B(!0),e.length&&e[0].startDate&&e[0].endDate){let t=await (0,m.B)(S,{cartId:"",slug:n,input:{...i,waitlist:{timeWindows:e.filter(e=>e.endDate&&e.startDate).map(e=>({startDate:(0,f.Aq)(e.startDate),endDate:(0,f.Aq)(e.endDate),startTime:A(e.startTime),endTime:w(e.endTime)?void 0:A(e.endTime)}))}}}),o=(0,s.vz)(I,t.data.cart);$(e=>({...e,nextAvailableDate:o?.firstAvailableTimeSlot?{date:o.firstAvailableTimeSlot?.date.iso,time:o.firstAvailableTimeSlot.startTime}:null}))}B(!1)},[i,n]),W=j(e,F,L),z=(0,o.useCallback)(e=>{let t=e(L.timeRanges);return u()(L.timeRanges,t)||($(e=>({...e,timeRanges:t})),U(t)),Promise.resolve()},[L.timeRanges,$,U]),G=(0,o.useCallback)(()=>z(e=>[...e,{...O,id:(0,d.Z)()}]),[O,z]);return{cart:W,isLoading:D,shouldBlockConfirming:E,confirmWaitlist:async(t,n)=>{let o;B(!0);try{let r=(0,k.zR)(e),l=L.timeRanges.map(e=>({startDate:(0,f.Aq)(e.startDate),endDate:(0,f.Aq)(e.endDate),startTime:A(e.startTime),endTime:w(e.endTime)?void 0:A(e.endTime)})),s={attendees:[{isBooker:!0,reference:1}],items:i.items,timeWindows:l,notes:t,locationSlug:e.location.slug,employeeId:e.employee?.id,...r};if(o=await (0,m.B)(C,{input:s}),o.data.joinWaitlist?.id)return n(),a((0,b.db2)(o.data.joinWaitlist.id)),null;if(o.errors)return B(!1),o.errors;throw Error("Waitlist confirmation failed without reason nor id")}catch(e){c((0,p.__)`Oops! Something went wrong`,{size:"expanded"}),(0,g.tz)(e,{response:o})}return B(!1),null},onWaitlistFlowStart:async()=>{R(!0),t(),O&&z(()=>[O]);try{let t=await (0,m.B)(T,{cartId:"",slug:n,input:i});if(t.errors||!t.data?.cart)throw Error("Waitlist cart failed to load");q(function(e){let{basicCart:t,data:n}=e;if(!n)return null;let i=(0,y.e5)(t.items,n.items);return{...t,timeSlot:null,employee:null,items:i,bookableItems:i,bookingCaption:n.caption||null,total:{discounts:{formatted:n.totals.totalDiscount?.formatted||null,value:null},price:{formatted:n.totals.totalPrice?.formatted||null,value:null},priceBeforeDiscount:{formatted:n.totals.subtotal?.formatted||null,value:null}}}}({basicCart:e,data:(0,s.vz)(_,t.data.cart)}))}catch{throw R(!1),Error("Waitlist cart failed to load")}R(!1)},addTimeRange:G,removeTimeRange:(0,o.useCallback)(e=>z(t=>[...t.slice(0,e),...t.slice(e+1)]),[z]),updateTimeRange:(0,o.useCallback)((e,t)=>z(n=>[...n.slice(0,e),{...n[e],...t},...n.slice(e+1)]),[z])}},B=(0,o.createContext)(null);function D(e){let{children:t}=e,{cart:n,setTimeSlot:l}=(0,a.j)(),{locationSlug:s}=(0,r.UO)(),c=E(n,(0,o.useCallback)(()=>l(null),[l]),s);return(0,i.jsx)(B.Provider,{value:c,children:t})}},580827:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});var i=n(667294),o=n(26659);function r(){let e=(0,i.useContext)(o.k);if(!e)throw Error("No Waitlist cart context was found");return e}},763072:function(e,t,n){"use strict";n.d(t,{D:function(){return r},q:function(){return a}});var i=n(702203),o=n(350470);function r(e){let t=o.x.get("rwgSessionData");if(t){let{rwgToken:n,geiToken:o,pId:r}=JSON.parse(t);if((n||o)&&r===e)return i.xu.Direct}return!1}function a(e){return"true"===e.get("menu")?i.xu.Direct:i.xu.Generic}},354197:function(e,t,n){"use strict";n.d(t,{U:function(){return c}});var i=n(558166),o=n(692553),r=n(702203),a=n(224437);let l=e=>{switch(e){case r.kK.Direct:return r.Nz.Direct;case r.kK.Marketplace:return r.Nz.Marketplace;default:return null}},s=e=>{switch(e){case null:return r.ed.Unknown;case!0:return r.ed.Yes;case!1:return r.ed.No;default:return(0,a.tz)(Error("Invalid first visit status")),r.ed.Unknown}},c=(e,t,n)=>{let r=(0,o.Ld)(),a=(0,i.E)(new Date,-7),c=r.filter(t=>{let n=new Date(t.timestamp);return"marketplace_page_viewed"===t.event_type&&t.properties.page_url.includes(e)&&n>a}).sort((e,t)=>e.timestamp-t.timestamp)[0];return{firstTouchAt:c?new Date(c.timestamp).toISOString():null,type:l(t),bookingCustomerFirstVisitAnswer:s(n)}}},613374:function(e,t,n){"use strict";n.d(t,{Bv:function(){return l},Cl:function(){return C},Zq:function(){return k},bJ:function(){return T},bo:function(){return a},e0:function(){return o},iE:function(){return S},kU:function(){return _},me:function(){return r},pb:function(){return x},xw:function(){return y}});var i=n(25869);let o={BOOK_WITH_STAFF:"bookWithStaff",OMIT_TEAM_SELECTION:"omitTeamSelection",SKIP_TEAM_STEP_IN_NAVIGATION:"skipTeamStepInNavigation",DEFAULT:"default",RESCHEDULE:"reschedule",RESCHEDULE_OMIT_TEAM_SELECTION:"rescheduleOmitTeamSelection",GROUP_BOOKING:"groupBooking",GROUP_BOOKING_SKIP_TEAM_STEP_IN_NAVIGATION:"groupBookingSkipTeamStepInNavigation",WAITLIST_ENTRY:"waitlistEntry"},r={ServiceSelection:"serviceSelection",TeamSelection:"teamSelection",MultiStaff:"multiStaff",TimeSelection:"timeSelection",Waitlist:"waitlistSetup",WaitlistConfirmation:"waitlistConfirmation",Confirmation:"confirmation"},a={GuestsAndServices:"groupGuestsAndServices",Professional:"groupProfessionalSelection",TimeSelection:"groupTimeSelection",Confirmation:"groupConfirmation",MultiStaff:"groupMultiStaff"},l={TeamSelection:"teamSelectionReschedule",TimeSelection:"timeSelectionReschedule",Confirmation:"confirmationReschedule",MultiStaff:"multiStaffReschedule"},s=[r.ServiceSelection,r.TeamSelection,r.TimeSelection,r.Confirmation],c=[a.GuestsAndServices,a.Professional,a.TimeSelection,a.Confirmation],u=[r.ServiceSelection,r.TimeSelection,r.Confirmation],d=[l.TeamSelection,l.TimeSelection,l.Confirmation],m=[l.TimeSelection,l.Confirmation];function p(e,t,n){if(t>=0){let i=[...e];return i.splice(t,0,n),i}return e}let f=e=>{switch(e){case o.BOOK_WITH_STAFF:case o.OMIT_TEAM_SELECTION:return u;case o.RESCHEDULE:return d;case o.RESCHEDULE_OMIT_TEAM_SELECTION:return m;case o.GROUP_BOOKING:case o.GROUP_BOOKING_SKIP_TEAM_STEP_IN_NAVIGATION:return c;case o.SKIP_TEAM_STEP_IN_NAVIGATION:default:return s}},g=(e,t)=>{switch(t){case o.RESCHEDULE:return p(e,e.indexOf(l.TimeSelection),l.MultiStaff);case o.GROUP_BOOKING:case o.GROUP_BOOKING_SKIP_TEAM_STEP_IN_NAVIGATION:return p(e,e.indexOf(a.TimeSelection),a.MultiStaff);case o.BOOK_WITH_STAFF:case o.OMIT_TEAM_SELECTION:case o.RESCHEDULE_OMIT_TEAM_SELECTION:return e;case o.SKIP_TEAM_STEP_IN_NAVIGATION:default:return p(e,e.indexOf(r.TimeSelection),r.MultiStaff)}},b=e=>{let t=e.indexOf(r.Confirmation),n=[...e];return n.splice(t,1),[...n,r.Waitlist,r.WaitlistConfirmation]},h=(e,t)=>{switch(t){case o.RESCHEDULE:case o.GROUP_BOOKING:case o.GROUP_BOOKING_SKIP_TEAM_STEP_IN_NAVIGATION:case o.RESCHEDULE_OMIT_TEAM_SELECTION:return e;default:return b(e)}},y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=f(e);return t.injectMultiStaffStep&&(n=g(n,e)),t.injectWaitlistFlow&&(n=h(n,e)),n},v={[r.ServiceSelection]:i.jHS,[r.TeamSelection]:i.JSe,[r.TimeSelection]:i.l6O,[r.Confirmation]:i.qpo,[r.MultiStaff]:i.dBJ,[r.Waitlist]:i.Uaz,[r.WaitlistConfirmation]:i.L18,[l.TeamSelection]:i.zQ,[l.TimeSelection]:i.AX,[l.Confirmation]:i.C3u,[l.MultiStaff]:i.AyD,[a.GuestsAndServices]:i.cf,[a.Professional]:i.JSe,[a.TimeSelection]:i.l6O,[a.Confirmation]:i.qpo,[a.MultiStaff]:i.dBJ},x=(e,t,n)=>{let i=y(e,n),l=i.indexOf(t);if(0===l)return null;let s=i[l-1];return(e===o.SKIP_TEAM_STEP_IN_NAVIGATION&&s===r.TeamSelection||e===o.GROUP_BOOKING_SKIP_TEAM_STEP_IN_NAVIGATION&&s===a.Professional)&&(s=i[l-2]),v[s]},k=(e,t,n)=>{let i=y(e,n),o=i.indexOf(t);return o===i.length-1?null:v[i[o+1]]},I=e=>e===r.TimeSelection||e===l.TimeSelection||e===a.TimeSelection,S=e=>e===r.ServiceSelection,_=e=>e===a.GuestsAndServices,T=e=>{let{location:t,step:n,typeOfBookingFlow:i,isDirectLink:o}=e;return!!(t?.allowChoosePreferableEmployee&&(t?.employees?.length||0)>1&&I(n)&&"skipTeamStepInNavigation"!==i&&"groupBookingSkipTeamStepInNavigation"!==i&&!("bookWithStaff"===i&&o))},C=e=>"groupBooking"===e||"groupBookingSkipTeamStepInNavigation"===e},68572:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});let i=6},937982:function(e,t,n){"use strict";function i(e){return`${e.dayName} ${e.dayOfMonth} ${e.monthName}`}n.d(t,{i:function(){return i}})},774575:function(e,t,n){"use strict";n.d(t,{E:function(){return a},w:function(){return l}});var i=n(302982),o=n(629177),r=n(613374);let a=e=>e.map(e=>{let t;if(!e.retailPrice&&!("formattedRetailPrice"in e))return null;let n="appliedUserMembership"in e&&e.appliedUserMembership||"membershipId"in e&&!!e.membershipId,o="formattedRetailPrice"in e&&e.formattedRetailPrice?e.formattedRetailPrice:(0,i.T4)(e.retailPrice.value,{code:e.retailPrice.currency,priceType:e.priceType?i.cG[e.priceType]:void 0,fromFreeEnabled:!0});n&&e.retailPrice?.currency&&(o=(0,i.T4)(0,{code:e.retailPrice.currency,fromFreeEnabled:!0}));let r=e.nonDiscountedPrice&&e.nonDiscountedPrice.value!==e.retailPrice?.value?(0,i.T4)(e.nonDiscountedPrice.value,{code:e.nonDiscountedPrice?.currency??"",fromFreeEnabled:!0}):null,a="formattedNonDiscountedPrice"in e?e.formattedNonDiscountedPrice:r;return"membershipId"in e&&(t=e.membershipId),{id:e.id,bookableId:"bookableId"in e?e.bookableId:void 0,name:e.name||"",caption:e.caption||"",..."captionShort"in e&&{captionShort:e.captionShort},..."includes"in e&&{includes:e.includes},..."employeeAssociations"in e&&{employeeAssociations:e.employeeAssociations?.map(e=>e||null)},retailPrice:{formatted:o},nonDiscountedPrice:a?{formatted:a}:null,attendeeReference:"attendeeReference"in e&&e.attendeeReference?e.attendeeReference:void 0,membershipId:t,userMemberships:"userMemberships"in e?e.userMemberships:void 0}}).filter(o.y),l=(e,t,n,i)=>{if(!t.length)return[];let o=e.length?e.reduce((e,n)=>{if("attendeeReference"in n&&n.attendeeReference){let i=e.findIndex(e=>e.reference===n.attendeeReference);if(i>=0)e[i].items.push(n);else{let i=t.find(e=>e.reference===n.attendeeReference);e.push({items:[n],reference:n.attendeeReference,firstName:i?.firstName,lastName:i?.lastName,avatarUrl:i?.avatarUrl||"",isBooker:!!i?.isBooker})}}return e},[]):[{items:[],reference:t[0].reference,firstName:t[0]?.firstName,lastName:t[0]?.lastName,avatarUrl:t[0].avatarUrl,isBooker:!!t[0]?.isBooker}];if((0,r.kU)(i)&&!o.find(e=>{let{reference:t}=e;return t===n})){let e=t.find(e=>e.reference===n);e&&o.push({items:[],reference:e.reference,firstName:e?.firstName,lastName:e?.lastName,avatarUrl:e.avatarUrl,isBooker:e.isBooker})}return o}},108529:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var i=n(234308);let o=(e,t)=>e.firstName?{firstName:e.firstName,lastName:e.lastName,fullName:`${e.firstName} ${e.lastName}`,isAnActualName:!0}:e.isBooker||1===e.reference?{fullName:(0,i.gl)("Guest name counterpart for non logged in user","Me"),isAnActualName:!1}:{fullName:(0,i.gl)("Guest name in the group booking flow","Guest %{guestNumber}",{guestNumber:t+1}),isAnActualName:!1}},138695:function(e,t,n){"use strict";n.d(t,{f:function(){return o}});var i=n(973314);let o=()=>({groupBookingAttendeeReference:Number((0,i.lr)().get("guest"))||1})},550705:function(e,t,n){"use strict";function i(e){let{preLeaseItem:t,variantBookableId:n}=e;return t&&"Service"===t.__typename?[...new Set(((n?t.variants.find(e=>e.bookableId===n)?.userMemberships:t.variants.map(e=>e?.userMemberships))?.flat()||[]).map(e=>e?.id).filter(e=>!!e))]:[]}function o(e){let{preLeaseItem:t}=e;return!!i({preLeaseItem:t}).length}function r(e){let{cartItems:t,membershipIds:n,memberships:i,attendeeReference:o}=e;if(1!==o)return;let r=t.reduce((e,t)=>({...e,..."membershipId"in t&&t.membershipId&&{[t.membershipId]:(e[t.membershipId]||0)+1}}),{}),a=e=>e.availableSessions-(r[e.id]||0),l=[];return(n||[]).forEach(e=>{let t=i?.find(t=>t.id===e);t&&(t.isUnlimitedSessions||a(t)>0)&&l.push(t)}),l.sort((e,t)=>e.expirationDate.iso<t.expirationDate.iso?-1:e.expirationDate.iso>t.expirationDate.iso?1:e.isUnlimitedSessions?-1:a(e)>a(t)?1:a(e)<a(t)?-1:0),l[0]?.id}n.d(t,{D4:function(){return i},jZ:function(){return o},uV:function(){return r}})},222921:function(e,t,n){"use strict";n.d(t,{N:function(){return o},d:function(){return i}});let i=e=>{let{id:t,caption:n,retailPrice:i,discount:o,name:r}=e;return{caption:n||"",id:t||"",name:r||"",retailPrice:i?.value||0,discount:o?.value?.value||0}},o=(e,t)=>e.find(e=>{let n="Package"===e.__typename&&e.bookableId===t,i="Service"===e.__typename&&e.variants.some(e=>e.bookableId===t);return n||i})},710768:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});var i=n(667294),o=n(899877);let r=()=>{let{cart:e,setTimeSlot:t}=(0,o.j)();(0,i.useEffect)(()=>{e.timeSlot&&t(null)},[e.timeSlot,t])}},241839:function(e,t,n){"use strict";n.d(t,{dQ:function(){return p},bI:function(){return u},iy:function(){return f},z6:function(){return d}});var i=n(973314),o=n(400645),r=n(730602),a=n(654796),l=n(859854),s=n(899877);let c=(0,a.B)(`
  query EmployeesByLocationAndServices(
    $slug: String!
    $bookableItems: [EmployeeBookableItemInput!]!
    $input: CartInput!
    $skipEmployees: Boolean = false
  ) {
    location(slug: $slug) {
      employees(bookableItems: $bookableItems) @skip(if: $skipEmployees) {
        id
        firstName
        rating
        title
        avatar {
          url(class: SQUARE128)
        }
        formattedMinimumPrice
        minimumPrice {
          discount {
            description
          }
        }
      }
      noPreferenceEmployee(bookableItems: $bookableItems) {
        formattedRetailPrice
      }
    }
    cart(id: "", locationSlug: $slug, input: $input) {
      canSelectMultipleEmployees
      items {
        id
        ... on CartLineItemServiceVariant {
          employee {
            id
          }
        }
        ... on CartLineItemPackage {
          packageServiceVariants {
            employee {
              id
            }
          }
        }
      }
    }
  }
`);function u(e,t){return e?.location?.employees?.find(e=>{let{id:n}=e;return n===t})??null}function d(e){let{data:t,errors:n,variables:i,requestedEmployeeId:o}=e,r=new Map,a=i?.input.items||[],l=u(t,o);return o&&!l&&r.set(o,null),(n||[])?.forEach(e=>{let t=e.extensions?.code,n=/input\.lineItems\.(\d+)\.employeeAssociations\.(\d+)/.exec(e.extensions?.fields?.[0]?.key);if("BAD_USER_INPUT"===t&&n){let[,e,t]=n,i=a[Number(e)];i?.bookableId&&r.set(i.bookableId,{bookableId:i.bookableId,packageItemIndex:Number(t)||0,attendeeReference:i.attendeeReference||1})}}),r}function m(e){let{cart:t,locationSlug:n,typeOfBookingFlow:i}=e,o=t.bookableItems.map(e=>({id:e.id??e.bookableId,bookableId:e.bookableId,membershipId:("membershipId"in e?e.membershipId:null)??null,attendeeReference:e.attendeeReference,employeeAssociations:e.employeeAssociations}));return{slug:n,bookableItems:o.map(e=>({id:e.bookableId,membershipId:e.membershipId})),input:{items:o},skipEmployees:("groupBooking"===i||"groupBookingSkipTeamStepInNavigation"===i)&&new Set(t.bookableItems.filter(e=>{let{attendeeReference:t}=e;return!!t}).map(e=>{let{attendeeReference:t}=e;return t})).size>1}}async function p(e){let{cart:t,locationSlug:n,typeOfBookingFlow:i}=e,r=m({cart:t,locationSlug:n,typeOfBookingFlow:i});return{...await (0,o.B)(c,r),variables:r}}function f(){let{locationSlug:e}=(0,i.UO)(),{cart:t}=(0,s.j)(),{typeOfBookingFlow:n}=(0,l.Wq)(),o=m({cart:t,locationSlug:e,typeOfBookingFlow:n});return(0,r.aT)(c,o)}},64549:function(e){e.exports={self:"BookingFlowCart_self__AaeJu",scrollableWrapper:"BookingFlowCart_scrollableWrapper__ASysm",headerWrapper:"BookingFlowCart_headerWrapper__tk7Fb",showLocationDivider:"BookingFlowCart_showLocationDivider__z4ddX",itemsList:"BookingFlowCart_itemsList__XBxJU",itemsSummary:"BookingFlowCart_itemsSummary__jBROj",divider:"BookingFlowCart_divider__Esdk1",appointmentSection:"BookingFlowCart_appointmentSection__inAFw",footerWrapper:"BookingFlowCart_footerWrapper__SASfK",showFooterDivider:"BookingFlowCart_showFooterDivider__RYDVs"}},5690:function(e){e.exports={chip:"MembershipsChip_chip__xQHyy"}},658605:function(e){e.exports={pay:"Pay_pay__DjTBb"}},545322:function(e){e.exports={"stack-animation":"BookingFlowLayout_stack-animation__NbYrR",stackAnimation:"BookingFlowLayout_stack-animation__NbYrR","lift-in":"BookingFlowLayout_lift-in__Y_kt_",liftIn:"BookingFlowLayout_lift-in__Y_kt_","fade-animation":"BookingFlowLayout_fade-animation__MHpnm",fadeAnimation:"BookingFlowLayout_fade-animation__MHpnm","fade-in":"BookingFlowLayout_fade-in__qs094",fadeIn:"BookingFlowLayout_fade-in__qs094"}},468942:function(e){e.exports={pricing:"BookingItemsList_pricing__S6A7T",lineThrough:"BookingItemsList_lineThrough__28ery"}},206468:function(e){e.exports={self:"DiscountsAndRewardsUpsellBanner_self__PktMH",self__button:"DiscountsAndRewardsUpsellBanner_self__button__tVifN",selfButton:"DiscountsAndRewardsUpsellBanner_self__button__tVifN"}},292685:function(e){e.exports={self:"DiscountsButton_self__bh4XI",self__name:"DiscountsButton_self__name__4xINc",selfName:"DiscountsButton_self__name__4xINc",self__description:"DiscountsButton_self__description__d9acS",selfDescription:"DiscountsButton_self__description__d9acS",self__button:"DiscountsButton_self__button__PbUFx",selfButton:"DiscountsButton_self__button__PbUFx"}},77341:function(e){e.exports={self:"LocationInfo_self__AAmxd"}},297657:function(e){e.exports={attendeeName:"MultiStaff_attendeeName__PO4Xj"}},596242:function(e){e.exports={choiceList:"Staff_choiceList__UQHkS",employeeThumbnail:"Staff_employeeThumbnail__zPDCI"}},880574:function(e){e.exports={self:"NoConnectionPlaceholder_self__fM_Jj"}},740691:function(e){e.exports={container:"BaseFlowLayoutBottomBar_container__IMS4m",details:"BaseFlowLayoutBottomBar_details__R0M_O"}},710468:function(e){e.exports={"crumb--previous":"BaseFlowLayoutBreadCrumbs_crumb--previous__TxiXB",crumbPrevious:"BaseFlowLayoutBreadCrumbs_crumb--previous__TxiXB"}}}]);
//# sourceMappingURL=16694-e351f3d2b874e6b7.js.map