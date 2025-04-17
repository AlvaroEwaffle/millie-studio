!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="00229a5e-c54c-47c4-897e-a9983200e0c0",e._sentryDebugIdIdentifier="sentry-dbid-00229a5e-c54c-47c4-897e-a9983200e0c0")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19279],{882770:function(e,t,n){"use strict";n.d(t,{r:function(){return f},S:function(){return x}});var i=n(785893),o=n(770546),a=n(781358),r=n(587495),s=n(89760),l=n(893062),d=n(234308),c=n(80128),u=n(525040),m=n.n(u);let p=()=>{},f=e=>{let{close:t,isOpen:n,onContinueAction:u,useLegacyModal:f=!1}=e,h=(0,d.__)`This venue cannot accept your Fresha gift card`,x=(0,i.jsx)(o.z,{isFull:!0,onAction:t,size:"l",variant:"secondary",children:(0,d.__)`Go back`}),g=(0,i.jsx)(o.z,{isFull:!0,onAction:u,size:"l",variant:"primary",children:(0,d.__)`Continue anyway`}),_=(0,i.jsxs)(a.K,{as:"div",direction:"vertical",gap:"100",unsafeClassName:m().body,children:[(0,i.jsx)(r.x,{font:"body-s-regular",children:(0,d.__)`Only verified venues will accept Fresha gift cards. You can still book this appointment, but you will need to pay with another method in-store.`}),(0,i.jsx)(r.x,{font:"body-s-regular",children:(0,d.do)((0,d.__)`All venues with the verified badge <icon></icon> can accept Fresha gift cards.`,{icon:()=>(0,i.jsx)(c.so4,{unsafeClassName:m().badge,color:"accent",size:"l"})})})]});return f?(0,i.jsxs)(s.p,{title:h,isOpen:n,setOpen:p,onOpen:p,onClose:t,unsafeClassName:m().legacy,children:[(0,i.jsx)(s.p.Header,{onClose:t}),(0,i.jsx)(s.p.Body,{children:_}),(0,i.jsxs)(s.p.Footer,{children:[x,g]})]}):(0,i.jsx)(l.rv,{footer:(0,i.jsxs)("div",{className:m().buttons,children:[x,g]}),isOpen:n,setOpen:p,title:h,className:m().self,children:_})};var h=n(667294);let x=e=>{let[t,n]=(0,h.useState)(!1),i=(0,h.useRef)(!1);return{handleWarning:(0,h.useCallback)(()=>{let t=e?.canPayWithOwnFreshaAccount===!1;return!i.current&&t?(i.current=!0,n(!0),{canContinue:!1}):(n(!1),{canContinue:!0})},[e]),isOpen:t,close:(0,h.useCallback)(()=>(n(!1),Promise.resolve()),[])}}},532055:function(e,t,n){"use strict";n.d(t,{Zv:function(){return f},j8:function(){return c},nj:function(){return h},on:function(){return d}});var i=n(785893),o=n(214614),a=n(786546),r=n(973314),s=n(80128),l=n(805575);let d=(0,a.BX)(`
  fragment RewardRedeemable on Reward {
    __typename
    id
    name
    description(displayContext: LIST)
  }
`),c=(0,a.BX)(`
  fragment RewardClaimable on LoyaltyPointsBasedReward {
    __typename
    id
    name
    description(displayContext: LIST)
  }
`),u={RewardFixedAmountDiscount:"CoinsIcon",RewardFreeProduct:"BottleIcon",RewardFreeService:"CalendarCheckIcon",RewardPercentageDiscount:"PercentageIcon"},m={LoyaltyPointsBasedRewardConfigurableAmountDiscount:"CoinsIcon",LoyaltyPointsBasedRewardFixedAmountDiscount:"CoinsIcon",LoyaltyPointsBasedRewardFreeProduct:"BottleIcon",LoyaltyPointsBasedRewardFreeService:"CalendarCheckIcon",LoyaltyPointsBasedRewardPercentageDiscount:"PercentageIcon"},p=e=>Reflect.has(e,"rewardClaimable"),f=e=>{let{className:t,iconColor:n,iconSize:o,rewardClaimable:r,rewardRedeemable:s}=e,p=r?m[(0,a.vz)(c,r).__typename]:s?u[(0,a.vz)(d,s).__typename]:null;return p?(0,i.jsx)(l.e,{name:p,color:n,size:o??"l",className:t}):null},h=e=>{let t=p(e)?(0,a.vz)(c,e.rewardClaimable):void 0,n=p(e)?void 0:(0,a.vz)(d,e.rewardRedeemable),l=t??n,u=(0,r.tv)();return(0,i.jsx)(o.v.Item,{label:l?.name,"aria-label":l?.name,description:l?.description,onAction:()=>{u.push(e.link,{scroll:!1})},prefix:(0,i.jsx)(f,{...e}),suffix:(0,i.jsx)(s.XCv,{size:"l"}),size:"l"},l?.id)}},565704:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var i=n(785893),o=n(667294),a=n(459252),r=n(568924),s=n.n(r);let l=(0,o.memo)(e=>{let{as:t="p",children:n,className:o}=e;return(0,i.jsx)(t,{className:o,dangerouslySetInnerHTML:{__html:(0,a.Z)(s()((n||"").replaceAll(/([^\n]|^)\n([^\n]|$)/g,"$1\n\n$2")))}})})},449594:function(e,t,n){"use strict";n.d(t,{T:function(){return d}});var i=n(785893),o=n(135424),a=n(625196),r=n(587495),s=n(234308),l=n(800241);let d=e=>{let{extraPaymentInformationWhenAddedCard:t}=e,n=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.H.Prefix,{leftSection:(0,i.jsx)(a.o,{variant:"venue",size:"xl"})}),(0,i.jsx)(o.H.Content,{children:(0,i.jsx)(o.H.Row,{leftSection:(0,i.jsx)(r.x,{font:"body-s-medium",children:(0,s.__)("Pay at venue")}),leftSectionAlignment:"center"})})]});return(0,i.jsxs)("div",{children:[(0,i.jsx)(r.x,{font:"header-s-semibold",mb:t?"50":"250",children:(0,s.__)("Payment method")}),t?(0,i.jsx)(r.x,{font:"body-s-regular",mb:"250",children:t}):null,(0,i.jsx)(l.E,{lt:"laptop",children:(0,i.jsx)(o.H,{qaType:"selected-payment-method-button",linkTo:void 0,children:n})}),(0,i.jsx)(l.E,{gte:"laptop",children:(0,i.jsx)(o.H,{variant:"medium",qaType:"selected-payment-method-button",linkTo:void 0,children:n})})]})}},520899:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var i=n(785893),o=n(770546),a=n(386010),r=n(190699),s=n.n(r);let l=e=>{let{loading:t=!1,payWithApplePay:n}=e;return t?(0,i.jsx)(o.z,{size:"l",isFull:!0,isPending:!0,onAction:()=>Promise.resolve(),children:null}):(0,i.jsx)("button",{className:(0,a.default)("apple-pay-button",s().applePayButton),type:"button",onClick:n,"data-qa":"apple-pay-button"})}},850589:function(e,t,n){"use strict";n.d(t,{d:function(){return a}});var i=n(786546),o=n(482747);let a=i.BX.persisted("sha256:2494b558492954109793837f37806bcad218fbc7e46fdeb464965f7803b5c384",(0,i.BX)(`
      query AvailablePaymentMethods(
        $scope: PaymentMethodsScope!
        $slug: String
        $locationId: ID
        $amount: Float
      ) {
        availablePaymentMethods(
          scope: $scope
          slug: $slug
          locationId: $locationId
          amount: $amount
        ) {
          ...PaymentMethods
        }
      }
    `,[o.eM]))},353817:function(e,t,n){"use strict";n.d(t,{D:function(){return m},H:function(){return x}});var i=n(785893),o=n(9836),a=n(386010),r=n(786546),s=n(667294),l=n(80128),d=n(702203),c=n(494066),u=n.n(c);let m=(0,r.BX)(`
  fragment RichTextField on RichText {
    fragments {
      __typename
      ... on RichTextFragmentText {
        ...RichTextPlain
      }
      ... on RichTextFragmentIcon {
        fallback {
          ...RichTextPlain
        }
        textScreenReader
        icon
      }
    }
  }
  fragment RichTextPlain on RichTextFragmentText {
    bold
    italic
    link
    text
  }
`),p={[d.ir.FreshaVerified]:l.so4,[d.ir.Check]:l.nQG},f=e=>e.map(e=>{switch(e.__typename){case"RichTextFragmentText":return e.text;case"RichTextFragmentIcon":return e.icon;case"RichTextFragmentLineBreak":return"<cr>";default:return"<unknown>"}}).join("-"),h=e=>{let{node:t}=e;switch(t.__typename){case"RichTextFragmentText":{let e=t.text;return t.bold&&t.italic?e=(0,i.jsx)("b",{children:(0,i.jsx)("em",{children:e})}):t.bold?e=(0,i.jsx)("b",{children:e}):t.italic&&(e=(0,i.jsx)("em",{children:e})),t.link?(0,i.jsx)(o.r,{linkTo:t.link,text:e}):e}case"RichTextFragmentIcon":{let e=p[t.icon];return e?(0,i.jsx)("span",{className:u().icon,children:(0,i.jsx)(e,{})}):null}case"RichTextFragmentLineBreak":return(0,i.jsx)("br",{});default:{let{fallback:e}=t;return e?(0,i.jsx)(h,{node:e}):null}}},x=(0,s.memo)(e=>{let{children:t,className:n}=e,o=(0,r.vz)(m,t);return(0,i.jsx)("div",{className:(0,a.default)(u().self,n),children:o?.fragments.reduce((e,t,n)=>"RichTextFragmentParagraphSeparator"===t.__typename?{paragraphs:[...e.paragraphs,e.next],next:[]}:n<o.fragments.length-1?{paragraphs:e.paragraphs,next:[...e.next,t]}:{paragraphs:[...e.paragraphs,[...e.next,t]],next:[]},{paragraphs:[],next:[]}).paragraphs.map(e=>i.jsx("p",{children:e.map((e,t)=>i.jsx(h,{node:e},`${t}-${e.__typename}`))},f(e)))})});x.displayName="RichText"},682997:function(e,t,n){"use strict";n.d(t,{T4:function(){return d}});var i,o,a=n(234308);(i=o||(o={})).Fixed="fixed",i.Free="free",i.StartsAt="starts_at";let r={USD:"\xa2",AUD:"\xa2",EUR:"\xa2",GBP:"p"},s={precision:2},l=(e,t,n)=>{let i=(100*e).toFixed(n);return`${parseFloat(i)%1?i:parseFloat(i)}${r[t]}`};function d(e,t){let n;let{code:i,negative:d,priceType:c,locale:u=(0,a.Kd)(),fromFreeEnabled:m,subunit:p}=t;if(c===o.Free&&0===e)return(0,a.__)`free`;let f=Number.isInteger(e)?0:void 0;try{n=new Intl.NumberFormat(u,{style:"currency",currency:i,minimumFractionDigits:f,maximumFractionDigits:f}).format(e).replace(/\s?([A-Z]+)\s?/," $1 ").trim()}catch(t){n=`${i} ${d?"-":""}${e}`}return((m&&c===o.StartsAt||c===o.Fixed)&&0===e&&(n=(0,a.__)`free`),e<1&&p&&i in r&&(n=l(e,i,f||s.precision)),c===o.StartsAt)?(0,a.__)("from %{price}",{price:n}):n}},194239:function(e,t,n){"use strict";n.d(t,{nv:function(){return c},zC:function(){return d}});var i=n(973314),o=n(786546),a=n(730602),r=n(667294),s=n(65608);let l=o.BX.persisted("sha256:96c035fd64de41504f5b63479eea6fc82f6104c3d9d956c88f2fe27793cfee02",(0,o.BX)(`
    query MarketingTokenValidation($slug: String!, $token: String!) {
      location(slug: $slug) {
        marketingTokenValidity(token: $token) {
          formattedInvalidReasonForCustomer
          invalidReasonForCustomer
          isValid
        }
        owner {
          id
        }
      }
    }
  `));function d(){return(0,i.lr)().get("marketingToken")}function c(e){let{marketingToken:t,slug:n,onSuccess:i,onError:o}=e,d=(0,r.useRef)(i);d.current=i;let c=(0,r.useRef)(o);c.current=o;let u=!!(t&&n),{data:m,errors:p,isValidating:f,variables:h}=(0,a.aT)(u?l:null,{slug:n,token:t??""});(0,r.useEffect)(()=>{if(!f&&m&&h){if(m.location?.marketingTokenValidity?.isValid){let e=m.location?.owner?.id;e&&(0,s.uh)({providerId:e,token:h.token}),d.current?.()}else{let e=m.location?.marketingTokenValidity?.formattedInvalidReasonForCustomer||p?.[0].extensions?.formattedMessage||p?.[0].message;e&&c.current?.(e)}}},[f,m,p,h])}},145613:function(e,t,n){"use strict";n.d(t,{jA:function(){return l},bv:function(){return r},Jj:function(){return c.Jj},JV:function(){return d.JV},Tk:function(){return d.Tk},WZ:function(){return d.WZ},Ek:function(){return c.Ek}});var i=n(234308),o=n(603096),a=n(25869);function r(e,t,n){return(0,a.jQs)(e,(0,o.Le)({linkTo:(0,a.jHS)(t),locale:n}))}let s=e=>{let{name:t,address:n}=e,i=[t,[n?.streetAddress,n?.apartmentSuite].filter(Boolean).join(" "),n?.cityName].filter(Boolean).join(" - ");return`${i} | Fresha`};function l(e){let{name:t,address:n}=e;return(0,i.__)("Make an appointment at %{location}",{location:s({name:t,address:n})})}var d=n(25687),c=n(499930)},25687:function(e,t,n){"use strict";n.d(t,{JV:function(){return s},Tk:function(){return d},WZ:function(){return l},rC:function(){return r}});var i=n(786546),o=n(234308);n(25869);var a=n(499930);let r=(0,i.BX)(`
  fragment LocationProfileMetaFragment on Location {
    name
    address {
      apartmentSuite
      cityName
      servicingAreas
      streetAddress
    }
    primaryBusinessType {
      name
    }
  }
`);function s(e){let t=e.address?.servicingAreas?[...e.address.servicingAreas]:[],n=t.pop();return t.length>1?(0,o.gl)("Hair services London | Book with SalonName at King's Street. Nearby District 1, District 2 and District 3.","%{businessType} %{city} | Book with %{name} at %{address}. Nearby %{listOfDistrictsNames} and %{lastDistrictName}.",{name:e.name,address:(0,a.H)(e.address?.streetAddress,e.address?.apartmentSuite),city:e.address?.cityName,businessType:e.primaryBusinessType?.name,listOfDistrictsNames:t.join(", "),lastDistrictName:n}):(0,o.__)("%{businessType} %{city} | Book with %{name} at %{address}.",{name:e.name,address:(0,a.H)(e.address?.streetAddress,e.address?.apartmentSuite),city:e.address?.cityName,businessType:e.primaryBusinessType?.name})}function l(e){let t=[e.name,(0,a.H)(e.address?.streetAddress,e.address?.apartmentSuite),e.address?.cityName].filter(Boolean).join(" - ");return`${t} | Fresha`}function d(e){let t=e.address?.servicingAreas?[...e.address.servicingAreas]:[];return[e.name,e.address?.cityName,(0,a.H)(e.address?.streetAddress,e.address?.apartmentSuite),e.primaryBusinessType?.name,...t].filter(Boolean).join(", ")}},499930:function(e,t,n){"use strict";n.d(t,{Ek:function(){return r},H:function(){return o},Jj:function(){return a},mN:function(){return s}});var i=n(25869);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function a(e,t){return(0,i.jQs)(e,t)}function r(e){return e?"index, follow":"noindex, noarchive, follow"}function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((e,t)=>`${e} ${t+1}x`).join(", ")}},544592:function(e,t,n){"use strict";n.d(t,{c:function(){return iY},Z:function(){return iJ}});var i=n(785893),o=n(667294),a=n(730602),r=n(369219),s=n(379648),l=n(606204),d=n(786546),c=n(339332),u=n(692553),m=n(926739),p=n(84392),f=n(744204),h=n(706251),x=n.n(h),g=n(920518),_=n(652462),b=n(456624),y=n(770546),v=n(960704),j=n(234308),S=n(224437),w=n(855023),k=n.n(w),A=n(58437),C=n(224991);let B=(0,d.BX)(`
  fragment BookingFlowRichTextField on BookingFlowRichText {
    fragments {
      ... on BookingFlowRichTextFragmentText {
        bold
        italic
        action {
          id
        }
        text
      }
      __typename
    }
  }
`),F=(0,d.BX)(`
    fragment BookingFlowModalAuthFragment on BookingFlowModalAuth {
      authSubmit: submitAction {
        id
      }
      closeAction {
        id
      }
      __typename
    }
  `),T=(0,d.BX)(`
    fragment BookingFlowModalEmployeeFragment on BookingFlowModalEmployee {
      title
      choices {
        action {
          id
        }
        displayName
        avatar {
          url
        }
        icon
        jobTitle
        isSelected
        price {
          formatted
        }
        icon
        initials
        rating
        avatar {
          url
        }
      }
      closeAction {
        id
      }
      __typename
    }
  `),I=(0,d.BX)(`
    fragment BookingFlowModalEmployeeBulkFragment on BookingFlowModalEmployeeBulk {
      title
      closeAction {
        id
      }
      attendees {
        displayName
        items {
          name
          employee {
            id
            avatar {
              url
            }
            displayName
          }
          caption
        }
      }
      __typename
    }
  `),D=(0,d.BX)(`
    fragment BookingFlowModalMembershipFragment on BookingFlowModalMembership {
      title
      description
      tiles {
        name
        caption
        errorCaption
        color
        expiryDate
        isSelected
        isRecurring
        primaryAction {
          id
          isDisabled
          label
        }
      }
      closeAction {
        id
      }
      deleteAction {
        id
        isDisabled
        label
      }
      __typename
    }
  `),R=(0,d.BX)(`
    fragment BookingFlowModalPackageFragment on BookingFlowModalPackage {
      title
      caption
      description
      sectionTitle
      discount
      price {
        formatted
      }
      items {
        caption
        name
      }
      closeAction {
        id
      }
      submitAction {
        id
        isDisabled
        label
      }
      deleteAction {
        id
        isDisabled
        label
      }
      __typename
    }
  `),P=(0,d.BX)(`
    fragment BookingFlowModalServiceFragment on BookingFlowModalService {
      closeAction {
        id
      }
      deleteAction {
        id
        isDisabled
        label
      }
      title
      caption
      description
      submitAction {
        id
        isDisabled
        label
      }
      membershipChip {
        id
        isDisabled
        label
      }
      price {
        formatted
      }
      discount
      serviceVariants {
        caption
        name
        isSelected
        discount
        price {
          formatted
        }
        primaryAction {
          id
          isDisabled
          label
        }
      }
      __typename
    }
  `),N=(0,d.BX)(`
    fragment BookingFlowModalUpsellFragment on BookingFlowModalUpsell {
      title
      tiles {
        caption
        discount
        isSelected
        name
        price {
          formatted
        }
        primaryAction {
          id
        }
      }
      primaryAction {
        id
        isDisabled
        label
      }
      secondaryAction {
        id
        isDisabled
        label
      }
      closeAction {
        id
      }
      __typename
    }
  `),O=(0,d.BX)(`
    fragment BookingFlowLayoutFragment on BookingFlowLayout @_unmask {
      breadcrumbs {
        state
        label
        id
        isDisabled
      }
      canExit
      cart {
        slug
        name
        address
        dateFormatted
        timeRangeFormatted
        waitlistDateTimeRanges
        avatarUrl
        rating
        reviewsCount
        subtotal {
          formatted
        }
        discountsTotal {
          formatted
        }
        priceTotal {
          formatted
        }
        attendees {
          name
          items {
            name
            caption {
              ...BookingFlowRichTextField
            }
            membership {
              ...BookingFlowRichTextField
            }
            price {
              formatted
            }
            priceWithoutDiscounts {
              formatted
            }
          }
        }
      }
      cartSummaryBar {
        header
        caption
      }
    }
  `,[B]),L=(0,d.BX)(`
    fragment BookingFlowScreenAllEmployeesFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenAllEmployees: screen {
        ... on BookingFlowScreenAllEmployees {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          tiles {
            ... on BookingFlowScreenAllEmployeesTileAction {
              title
              caption
              action {
                id
              }
              isSelected
              icon
            }
            ... on BookingFlowScreenAllEmployeesTileEmployee {
              name
              caption
              isSelected
              avatar {
                url
              }
              rating
              action {
                id
              }
            }
            __typename
          }
        }
        __typename
      }
    }
  `,[O]),M=(0,d.BX)(`
    fragment BookingFlowScreenConfirmFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenConfirm: screen {
        ... on BookingFlowScreenConfirm {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          reservationId
        }
        __typename
      }
    }
  `,[O]),E=(0,d.BX)(`
    fragment BookingFlowScreenCustomerBlockedFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenCustomerBlocked: screen {
        ... on BookingFlowScreenCustomerBlocked {
          message
        }
        __typename
      }
    }
  `,[O]),z=(0,d.BX)(`
    fragment BookingFlowScreenEmployeeFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenEmployee: screen {
        ... on BookingFlowScreenEmployee {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          tiles {
            ... on BookingFlowScreenEmployeeTileAction {
              title
              caption
              action {
                id
              }
              isSelected
              price {
                formatted
              }
              discount
              icon
            }
            ... on BookingFlowScreenEmployeeTileEmployee {
              name
              caption
              isSelected
              avatar {
                url
              }
              rating
              discount
              price {
                formatted
              }
              action {
                id
              }
            }
            __typename
          }
        }
        __typename
      }
    }
  `,[O]),H=(0,d.BX)(`
    fragment BookingFlowScreenFirstVisitFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenFirstVisit: screen {
        ... on BookingFlowScreenFirstVisit {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          choices {
            action {
              id
            }
            isDisabled
            isSelected
            label
            caption
          }
        }
        __typename
      }
    }
  `,[O]),q=(0,d.BX)(`
    fragment BookingFlowScreenGuestsAndServicesFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenGuestsAndServices: screen {
        ... on BookingFlowScreenGuestsAndServices {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          addGuestAction {
            id
            label
            isDisabled
          }
          attendees {
            avatar {
              url
            }
            caption
            displayName
            editServicesAction {
              id
              label
              isDisabled
            }
            removeGuestAction {
              id
              label
              isDisabled
            }
          }
          __typename
        }
        __typename
      }
    }
  `,[O]),W=(0,d.BX)(`
    fragment BookingFlowScreenMultiEmployeeFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenMultiEmployee: screen {
        ... on BookingFlowScreenMultiEmployee {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          attendees {
            displayName
            items {
              name
              employee {
                id
                avatar {
                  url
                }
                displayName
                initials
              }
              caption
            }
          }
        }
        __typename
      }
    }
  `,[O]),$=(0,d.BX)(`
    fragment BookingFlowScreenPatchTestFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenPatchTest: screen {
        ... on BookingFlowScreenPatchTest {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          choices {
            action {
              id
            }
            isDisabled
            isSelected
            label
            caption
          }
        }
        __typename
      }
    }
  `,[O]),U=(0,d.BX)(`
    fragment BookingFlowScreenServiceFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenServices: screen {
        ... on BookingFlowScreenServices {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          sectionCurrentAttendee {
            avatarUrl
            initials
            name
          }
          sectionSelectedEmployee {
            avatar {
              url
            }
            name
            rating
            title
          }
          categories {
            name
            description
            items {
              name
              caption
              description
              price {
                formatted
              }
              discount
              isSelected
              membershipChip
              membershipUpsellingCallout {
                text {
                  ...BookingFlowRichTextField
                }
                url
              }
              primaryAction {
                id
                isDisabled
                label
              }
              secondaryAction {
                id
              }
            }
          }
          sectionUpselling {
            title
            tiles {
              title
              caption
              ... on BookingFlowUpsellingItemWithAction {
                caption
                title
                id
              }
              ... on BookingFlowUpsellingItemWithLink {
                caption
                title
                url
              }
            }
          }
          sectionMembershipUpselling {
            text {
              ...BookingFlowRichTextField
            }
            url
          }
          __typename
        }
      }
    }
  `,[O,B]),G=(0,d.BX)(`
    fragment BookingFlowScreenTimeFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenTime: screen {
        ... on BookingFlowScreenTime {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          dates {
            date {
              dayNameShort
              dayOfMonth
              iso
              monthAndYearFormatted
            }
            icon
            isAvailableToBeBooked
            isLoading
            isSelected
            action {
              id
            }
          }
          day {
            ... on BookingFlowScreenTimeDayUnavailable {
              icon
              employeeSelection {
                image {
                  url
                }
                initials
              }
              remainingNumberOfEmployees
              actions {
                id
                label
                isDisabled
              }
              caption
              icon
              sectionAdditional {
                ...BookingFlowRichTextField
              }
              title
            }
            ... on BookingFlowScreenTimeDayAvailable {
              sectionJoinWaitlist {
                textFormatted {
                  ...BookingFlowRichTextField
                }
              }
              timeslots {
                discount
                highDemandLabel
                isSelected
                price {
                  formatted
                }
                priceWithoutDiscount {
                  formatted
                }
                action {
                  id
                }
                time
              }
            }
            __typename
          }
          employeeSelection {
            employees {
              image {
                url
              }
              initials
            }
            remainingNumberOfEmployees
            primaryAction {
              id
              label
              isDisabled
            }
          }
          patchTestCalloutBanner {
            message {
              ...BookingFlowRichTextField
            }
          }
        }
        __typename
      }
    }
  `,[O,B]),V=(0,d.BX)(`
    fragment BookingFlowScreenUnrecoverableErrorFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenUnrecoverableError: screen {
        __typename
      }
    }
  `,[O]),X=(0,d.BX)(`
    fragment BookingFlowScreenWaitlistConfirmFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenWaitlistConfirm: screen {
        ... on BookingFlowScreenWaitlistConfirm {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          submitAction {
            isDisabled
            label
          }
          notes {
            title
            lengthLimit
            placeholder
          }
          sectionPayments {
            title
            description
            paymentMethodName
          }
        }
        __typename
      }
    }
  `,[O]),K=(0,d.BX)(`
    fragment BookingFlowScreenWaitlistFirstVisitFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenWaitlistFirstVisit: screen {
        ... on BookingFlowScreenWaitlistFirstVisit {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          choices {
            action {
              id
            }
            isDisabled
            isSelected
            label
            caption
          }
        }
        __typename
      }
    }
  `,[O]),Y=(0,d.BX)(`
    fragment BookingFlowScreenWaitlistSetupFragment on BookingFlow {
      layout {
        ...BookingFlowLayoutFragment
      }
    
      screenWaitlistSetup: screen {
        ... on BookingFlowScreenWaitlistSetup {
          title
          description
          backAction {
            id
            isDisabled
            label
          }
          continueAction {
            id
            isDisabled
            label
          }
          addNextTimeRangeAction {
            id
            isDisabled
            label
          }
          form {
            dateRangeSelectorLabel
            dates
            rows {
              dateFormatted
              dateFrom
              dateTo
              deleteAction {
                id
                isDisabled
                label
              }
              predefinedOptions {
                from
                to
                label
              }
              timeFrom
              timeFromFormatted
              timeToFormatted
              timeRangeFormatted
              timeOptions {
                label
                value
              }
              timeTo
            }
            timeRangeSelectorLabel
          }
          sectionGoBackToTimeSelection {
            ...BookingFlowRichTextField
          }
          callout {
            text
            primaryAction {
              id
              isDisabled
              label
            }
          }
        }
        __typename
      }
    }
  `,[O,B]),Z=(0,d.BX)(`
    fragment BookingFlowRootFragment on BookingFlow {
      ...BookingFlowScreenServiceFragment
      ...BookingFlowScreenPatchTestFragment
      ...BookingFlowScreenEmployeeFragment
      ...BookingFlowScreenAllEmployeesFragment
      ...BookingFlowScreenMultiEmployeeFragment
      ...BookingFlowScreenFirstVisitFragment
      ...BookingFlowScreenGuestsAndServicesFragment
      ...BookingFlowScreenTimeFragment
      ...BookingFlowScreenConfirmFragment
      ...BookingFlowScreenWaitlistSetupFragment
      ...BookingFlowScreenWaitlistFirstVisitFragment
      ...BookingFlowScreenWaitlistConfirmFragment
      ...BookingFlowScreenCustomerBlockedFragment
      ...BookingFlowScreenUnrecoverableErrorFragment
    
      screen {
        __typename
      }
    
      modal {
        __typename
        ...BookingFlowModalServiceFragment
        ...BookingFlowModalPackageFragment
        ...BookingFlowModalMembershipFragment
        ...BookingFlowModalEmployeeFragment
        ...BookingFlowModalEmployeeBulkFragment
        ...BookingFlowModalAuthFragment
        ...BookingFlowModalUpsellFragment
      }
    
      toasts {
        ... on BookingFlowSuccessToast {
          message {
            ...BookingFlowRichTextField
          }
        }
        ... on BookingFlowToastError {
          message {
            ...BookingFlowRichTextField
          }
        }
        __typename
      }
    }
  `,[U,$,z,L,W,H,E,V,q,G,M,Y,K,X,P,R,D,T,I,F,N,B]),J=d.BX.persisted("sha256:7fa5fdbea8bc7ead81109e80e1a5a853c08de25956a309223d64af62ea0ab0ba",(0,d.BX)(`
      query BookingFlowRoot($locationSlug: String!) {
        bookingFlow(locationSlug: $locationSlug) {
          ...BookingFlowRootFragment
        }
      }
    `,[Z])),Q=d.BX.persisted("sha256:8edacf032de4d88a1601238273501a5a47a95c4e281f054cb6da2cf1fff041ae",(0,d.BX)(`
      mutation BookingFlowInitialize($input: bookingFlowInitializeInput!) {
        bookingFlowInitialize(input: $input) {
          ...BookingFlowRootFragment
        }
      }
    `,[Z])),ee=d.BX.persisted("sha256:6291dae698f38365813a757238fc57d3456c68fe0a4e8c959d8903792bed5832",(0,d.BX)(`
      mutation BookingFlowActionButtonPressed($id: ID!, $shouldAutoContinue: Boolean) {
        bookingFlowActionButtonPressed(input: { id: $id, shouldAutoContinue: $shouldAutoContinue }) {
          ...BookingFlowRootFragment
        }
      }
    `,[Z])),et=(0,o.createContext)(null),en=e=>{let{children:t,locationId:n,locationSlug:r,locationProviderId:s,locationName:l,locationTrackingCodes:u}=e,m=(0,A.i)(),f=(0,o.useRef)(!1),[h,x]=(0,o.useState)(!0),[g,_]=(0,o.useState)(!1),b=(0,c.useSearchParams)(),{addErrorToast:y}=(0,p.e)(),v=(0,o.useMemo)(()=>({locationSlug:r}),[r]),S=(0,a.aT)(J,v,{revalidateIfStale:!1,revalidateOnMount:!1}),w=S.isLoading||h,k=S.isValidating||g,{trigger:B}=(0,a.pk)(Q),F=(0,o.useCallback)(async(e,t)=>{if(k)return;let n=t?.shouldDisableUI??!0,i=t?.shouldFailGracefully??!0;if(!e){await S.mutate();return}n&&_(!0);let o=null;try{o=await e()}catch{}finally{!o&&i?y((0,j.__)`Something went wrong, please try again later.`):await S.mutate({result:{bookingFlow:o},variables:v},{revalidate:!1})}n&&_(!1)},[S.mutate,v,k,y]);(0,o.useEffect)(()=>{m&&!f.current&&e();async function e(){f.current=!0,await F(async()=>{let e=await B({input:{locationSlug:r,referer:(0,C.an)(),options:null,search:b?.toString()??""}});return(0,d.vz)(Z,e.result.bookingFlowInitialize)},{shouldFailGracefully:!1}),x(!1)}},[F,r,B,b,m]);let T=(0,o.useMemo)(()=>({data:S.data,isLoading:w,isValidating:k,mutate:F,locationId:n,locationSlug:r,locationProviderId:s,locationName:l,locationTrackingCodes:u}),[S,w,k,F,n,r,s,l,u]);return(0,i.jsx)(et.Provider,{value:T,children:t})};function ei(){let e=(0,o.useContext)(et);if(!e)throw Error("useBookingFlowRoot must be used inside a <BookingFlowRootContextProvider>");return e}function eo(e,t){let{isValidating:n,mutate:i}=ei(),[r,s]=(0,o.useState)(!1),{trigger:l}=(0,a.pk)(ee);return(0,o.useMemo)(()=>{if(!e)return null;let o=(e.isDisabled??!1)||n;return{onAction:async()=>{if(o||!e.id)return;let n=e.id;s(!0),await i(async()=>{let e=await l({id:n,shouldAutoContinue:t?.shouldAutoContinue});return(0,d.vz)(Z,e.result.bookingFlowActionButtonPressed)}),s(!1)},isDisabled:o,isPending:r,..."label"in e&&{label:e.label}}},[e,r,n,i,l,t?.shouldAutoContinue])}let ea=e=>(0,i.jsx)(v.l,{children:(0,i.jsx)(g.u,{...e,unsafeClassName:k().placeholder})}),er=()=>{let{mutate:e}=ei();return(0,i.jsx)(ea,{header:(0,j.__)("An unexpected error has occurred"),description:(0,j.__)("We are having some trouble loading the app, please try again."),topSlot:(0,i.jsx)(_.l,{noBorder:!0,size:"2xl",image:(0,i.jsx)(b.E,{src:x(),alt:(0,j.__)`Illustration`,ratio:"1x1"})}),actionSlot:(0,i.jsx)(y.z,{onAction:()=>e(),children:(0,j.__)("Reload")})})},es=e=>{let{type:t}=e;return(0,o.useEffect)(()=>{(0,S.tz)(Error(`[BF_v2] - Unexpected modal type: ${t}`))},[t]),(0,i.jsx)(er,{})};var el=n(531395),ed=n(364740),ec=n(269131),eu=n(304616),em=n(794067),ep=n(96420),ef=n(587495),eh=n(804601),ex=n(135424),eg=n(380395),e_=n(800241),eb=n(775063),ey=n.n(eb),ev=n(308943),ej=n.n(ev),eS=n(406076),ew=n.n(eS),ek=n(241487),eA=n.n(ek);let eC=()=>{let{getOrderedAppearSequenceItemProps:e}=(0,el.j)({animationDelay:50,animationDuration:500}),t=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ed.A.Title,{children:(0,i.jsx)(ec.V,{titleAs:"h1",title:(0,i.jsx)(eu.O,{width:"287px",height:"44px"}),subtitle:(0,i.jsx)(eu.O,{width:"210px",height:"22px"})})}),(0,i.jsx)(ed.A.Content,{children:(0,i.jsx)(em.k,{direction:"column",gap:"200",children:Array.from({length:3},(t,n)=>(0,o.createElement)("div",{...e(`CONTENT_${n}`),key:n},(0,i.jsx)(eu.O,{height:"130px",width:"100%"})))})}),(0,i.jsx)(e_.E,{gte:"laptop",children:(0,i.jsx)(ed.A.Sidebar,{isSticky:!0,top:"108px",hasOffset:!0,children:(0,i.jsxs)(ep.Z,{id:"booking-flow-cart",horizontalPadding:"flush",verticalPadding:"flush",qaType:"cart",unsafeClassName:ey().self,children:[(0,i.jsx)("div",{className:ey().locationDetails,children:(0,i.jsx)(ep.Z.Header,{variant:"lowest",horizontalPadding:"l",children:(0,i.jsxs)("div",{className:eA().self,children:[(0,i.jsx)(eu.O,{height:"64px",width:"64px"}),(0,i.jsxs)(em.k,{gap:"25",direction:"vertical",unsafeStyle:{minWidth:"0"},children:[(0,i.jsx)(ef.x.Skeleton,{font:"body-m-semibold",width:"140px"}),(0,i.jsx)(eu.O,{height:"20px",width:"170px"}),(0,i.jsx)(ef.x.Skeleton,{font:"body-s-regular",width:"197px"})]})]})})}),(0,i.jsx)(ep.Z.Section,{variant:"lowest",verticalPadding:"m",unsafeClassName:ej().self,horizontalPadding:"l",children:(0,i.jsx)(ef.x.Skeleton,{font:"body-s-regular",width:"150px"})}),(0,i.jsx)(eh.i,{verticalGap:"200",horizontalGap:"300"}),(0,i.jsx)("div",{className:ew().self,children:(0,i.jsx)(ep.Z.Section,{variant:"lowest",verticalPadding:"flush",horizontalPadding:"l",children:(0,i.jsx)(em.k,{direction:"vertical",gap:"25",children:(0,i.jsx)(ex.H,{children:(0,i.jsx)(ex.H.Content,{children:(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)(ef.x.Skeleton,{font:"body-m-semibold",width:"77px"}),rightSection:(0,i.jsx)(ef.x.Skeleton,{font:"body-m-semibold",width:"57px"}),rightSectionAlignment:"flex-start"})})})})})}),(0,i.jsx)(ep.Z.Footer,{variant:"lowest",horizontalPadding:"l",unsafeClassName:ey().footerWrapper,children:(0,i.jsx)(eu.O,{shape:"hard",height:"48px",width:"100%"})})]})})})]});return(0,i.jsx)(v.l,{children:(0,i.jsxs)(eg.e,{width:"wide",children:[(0,i.jsx)(eg.e.Header,{}),(0,i.jsx)(e_.E,{lt:"laptop",children:(0,i.jsx)(eg.e.Container,{hasSidePadding:!0,children:(0,i.jsx)(ed.A,{type:"singleWithTitle",direction:"vertical",rowGap:"m",children:t})})}),(0,i.jsx)(e_.E,{gte:"laptop",lt:"desktop",children:(0,i.jsx)(eg.e.Container,{hasSidePadding:!0,children:(0,i.jsx)(ed.A,{type:"sidebarAfterOffsetWithTitle",direction:"horizontal",rowGap:"m",columnGap:"m",sidebarWidth:"ml",children:t})})}),(0,i.jsx)(e_.E,{gte:"desktop",children:(0,i.jsx)(eg.e.Container,{hasSidePadding:!0,children:(0,i.jsx)(ed.A,{type:"sidebarAfterOffsetWithTitle",direction:"horizontal",rowGap:"m",columnGap:"xl",sidebarWidth:"l",children:t})})})]})})};var eB=n(9836),eF=n(386010),eT=n(489011),eI=n.n(eT);let eD=e=>e.map(e=>"BookingFlowRichTextFragmentText"===e.__typename?e.text:"").join("-"),eR=(0,o.memo)(e=>{let{action:t,text:n}=e,o=eo(t);return(0,i.jsx)(eB.r,{text:n,onAction:o.onAction})}),eP=e=>{let{node:t}=e;if("BookingFlowRichTextFragmentText"===t.__typename){let e=t.text;return t.bold&&t.italic?e=(0,i.jsx)("b",{children:(0,i.jsx)("em",{children:e})}):t.bold?e=(0,i.jsx)("b",{children:e}):t.italic&&(e=(0,i.jsx)("em",{children:e})),t.action?(0,i.jsx)(eR,{action:t.action,text:e}):e}{let{fallback:e}=t;return e?(0,i.jsx)(eP,{node:e}):null}},eN=(0,o.memo)(e=>{let{children:t,className:n}=e,o=(0,d.vz)(B,t);return(0,i.jsx)("div",{className:(0,eF.default)(eI().self,n),children:o?.fragments.reduce((e,t,n)=>n<o.fragments.length-1?{paragraphs:e.paragraphs,next:[...e.next,t]}:{paragraphs:[...e.paragraphs,[...e.next,t]],next:[]},{paragraphs:[],next:[]}).paragraphs.map(e=>i.jsx("p",{children:e.map((e,t)=>i.jsx(eP,{node:e},`${t}-${e.__typename}`))},eD(e)))})});eN.displayName="BookingFlowRichText";var eO=n(767554);let eL=()=>{},eM=e=>{let{data:t}=e,n=(0,d.vz)(F,t);if("BookingFlowModalAuth"!==n.__typename)return null;let o=eo(n.authSubmit),a=eo(n.closeAction);return(0,i.jsx)(eO.Q,{isOpen:!0,setOpen:eL,onOpen:eL,onClose:a.onAction,onSuccess:o.onAction})};var eE=n(89760),ez=n(76876),eH=n(460236),eq=n(347316),eW=n(936171),e$=n(80128),eU=n(722563),eG=n.n(eU);let eV=e=>{let{tile:t,className:n,style:o,shouldAutoContinue:a}=e,r=eo({id:t.action?.id},{shouldAutoContinue:a});return(0,i.jsx)(ez.H,{onAction:r.onAction,isSelected:t.isSelected,isDisabled:r.isDisabled,unsafeClassName:(0,eF.default)(eG()["employee-tile"],n),unsafeStyle:o,hasPressAnimation:!0,children:(0,i.jsx)(em.k,{padding:["400","200","400","200"],alignItems:"center",direction:"column",gap:"100",children:r.isPending?(0,i.jsx)(eH.c.Loader,{variant:"secondary"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eq.X,{src:t.avatar?.url,firstName:t.name,size:"2xl",rating:t.rating??void 0,description:t.caption}),t.price?(0,i.jsx)(ef.x,{font:"body-xs-medium",align:"center",children:t.price.formatted}):null,t.discount?(0,i.jsx)(ef.x,{font:"body-xs-regular",color:"positive",align:"center",children:t.discount}):null]})})})},eX=e=>{let{tile:t,className:n,style:o,shouldAutoContinue:a}=e,r=eo({id:t.action?.id},{shouldAutoContinue:a});return(0,i.jsx)(ez.H,{onAction:r.onAction,isSelected:t.isSelected,isDisabled:r.isDisabled,unsafeClassName:n,unsafeStyle:o,hasPressAnimation:!0,children:(0,i.jsx)(em.k,{padding:["400","200","400","200"],alignItems:"center",direction:"column",gap:"100",children:r.isPending?(0,i.jsx)(eH.c.Loader,{variant:"secondary"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eW.y,{icon:"ANY_EMPLOYEE"===t.icon?e$.oyc:e$._F$,size:"2xl",variant:"transparentNeutral"}),(0,i.jsxs)(em.k,{direction:"column",gap:"25",children:[(0,i.jsx)(ef.x,{overflow:"ellipsis",font:"body-s-medium",align:"center",preWrap:!0,lineLimit:2,children:t.title}),t.caption?(0,i.jsx)(ef.x,{overflow:"ellipsis",font:"body-xs-regular",color:"neutralFaded",align:"center",preWrap:!0,lineLimit:2,children:t.caption}):null]}),t.price?(0,i.jsx)(ef.x,{font:"body-xs-medium",children:t.price.formatted}):null,t.discount?(0,i.jsx)(ef.x,{font:"body-xs-regular",color:"positive",children:t.discount}):null]})})})},eK=e=>{let{tiles:t,shouldAutoContinue:n}=e,a=(0,o.useRef)(null),{getOrderedAppearSequenceItemProps:r}=(0,el.j)({animationDelay:50,animationDuration:500}),s=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{if(!s.current){s.current=!0;let e=t.findIndex(e=>e.isSelected);a.current?.children[e]?.scrollIntoView({block:"center",behavior:"smooth"})}},[t]),(0,i.jsx)("div",{className:eG()["choice-list"],ref:a,children:t.map((e,t)=>"name"in e?(0,i.jsx)(eV,{tile:e,shouldAutoContinue:n,...r(`TILE_${t}`)},`${e.name}-${e.caption}`):"icon"in e?(0,i.jsx)(eX,{tile:e,shouldAutoContinue:n,...r(`TILE_${t}`)},`${e.title}-${e.caption}`):null)})},eY=()=>{},eZ=e=>{let{data:t}=e,n=(0,d.vz)(T,t);if("BookingFlowModalEmployee"!==n.__typename)return null;let a=eo(n.closeAction),r=(0,o.useMemo)(()=>n.choices.map(e=>e.icon?{icon:e.icon,action:{id:e.action?.id??""},isSelected:e.isSelected,caption:e.jobTitle,title:e.displayName,...e.price}:{action:{id:e.action?.id??""},isSelected:e.isSelected,caption:e.jobTitle,name:e.displayName,rating:e.rating,avatar:e.avatar,...e.price}),[n.choices]);return(0,i.jsxs)(eE.p,{isOpen:!0,onClose:a.onAction,setOpen:eY,onOpen:eY,size:"wide",title:n.title,children:[(0,i.jsx)(eE.p.Header,{onClose:a.onAction}),(0,i.jsx)(eE.p.Body,{children:(0,i.jsx)(eE.p.Body.Section,{children:(0,i.jsx)(eK,{tiles:r})})})]})};var eJ=n(901313),eQ=n(1566),e0=n(149999),e1=n.n(e0);let e4=()=>{};function e6(e){let{style:t,className:n,tile:{caption:o,name:a,employee:r}}=e,s=eo(r);return(0,i.jsx)(eJ.o.Item,{primitiveType:"none",value:`${a}${o}`,unsafeClassName:n,unsafeStyle:t,children:e=>{let{labelProps:t,descriptionProps:n}=e;return(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ef.x,{...t,as:"h3",font:"body-m-medium",children:a}),(0,i.jsx)(ef.x,{...n,font:"body-s-regular",color:"neutralFaded",mb:"150",children:o}),r&&(0,i.jsx)(y.z,{variant:"secondary",shape:"pill",size:"m",onAction:s.onAction,isDisabled:s.isDisabled,prefix:(0,i.jsx)(eH.c.Affix,{prefixType:"compact",size:"m",children:(0,i.jsx)(eQ.q,{size:"xs",src:r.avatar?.url,firstName:r.initials||""})}),suffix:(0,i.jsx)(y.z.IconAffix,{icon:e$.v4q}),children:r.displayName})]})})}})}let e5=e=>{let{tiles:t}=e,{getOrderedAppearSequenceItemProps:n}=(0,el.j)({animationDelay:50,animationDuration:500});return(0,i.jsx)(eJ.o,{choiceType:"single",name:"select-service-employee",onChange:e4,value:null,children:t.map(e=>(0,i.jsxs)(o.Fragment,{children:[e.displayName?(0,i.jsx)(ef.x,{font:"header-s-semibold",unsafeClassName:e1().attendeeName,children:e.displayName}):null,e.items.map((e,t)=>(0,i.jsx)(e6,{tile:e,...n(`TILE_${t}`)},`${e.name}_${e.caption}`))]},e.displayName))})},e2=()=>{},e8=e=>{let{data:t}=e,n=(0,d.vz)(I,t);if("BookingFlowModalEmployeeBulk"!==n.__typename)return null;let o=eo(n.closeAction);return(0,i.jsxs)(eE.p,{isOpen:!0,onClose:o.onAction,setOpen:e2,onOpen:e2,size:"wide",title:n.title,children:[(0,i.jsx)(eE.p.Header,{onClose:o.onAction}),(0,i.jsx)(eE.p.Body,{children:(0,i.jsx)(eE.p.Body.Section,{children:(0,i.jsx)(e5,{tiles:n.attendees})})})]})};var e3=n(781358),e9=n(702203);let e7={[e9.z.Blue]:"gradient1",[e9.z.Dark]:"gradient3",[e9.z.Green]:"gradient5",[e9.z.Orange]:"gradient4",[e9.z.Purple]:"gradient2",[e9.z.Gray]:"gradient3",[e9.z.Metallic]:"gradient3"},te=()=>{},tt=e=>{let t=eo(e.primaryAction);return(0,i.jsx)(eJ.o.Item,{value:`${e.name}-${e.caption}`,primitiveType:"radio",variant:"lowest",onAction:t?.onAction,isDisabled:t?.isDisabled,isSelected:e.isSelected,"aria-label":t?.label,children:t=>{let{labelProps:n,descriptionProps:o}=t;return(0,i.jsxs)(ex.H,{children:[(0,i.jsx)(ex.H.Prefix,{leftSection:(0,i.jsx)(eW.y,{icon:e.isRecurring?e$.i3U:e$.VlL,gradientBackground:e7[e.color],size:"2xl"})}),(0,i.jsx)(ex.H.Content,{children:(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsxs)(e3.K,{as:"div",gap:"0",children:[(0,i.jsx)(ef.x,{...n,font:"body-s-semibold",children:e.name}),e.errorCaption?(0,i.jsx)(ef.x,{...o,color:"danger",font:"body-s-regular",children:e.errorCaption}):(0,i.jsx)(ef.x,{...o,color:"neutral",font:"body-s-regular",children:e.caption}),(0,i.jsx)(ef.x,{font:"body-s-regular",children:e.expiryDate})]})})})]})}})};function tn(e){let{data:t}=e,n=(0,d.vz)(D,t);if("BookingFlowModalMembership"!==n.__typename)return null;let{title:o,description:a,tiles:r}=n,s=eo(n.closeAction),l=eo(n.deleteAction);return(0,i.jsxs)(eE.p,{title:o,isOpen:!0,setOpen:te,onOpen:te,onClose:s.onAction,qaType:"membership-modal",children:[(0,i.jsx)(eE.p.Header,{onClose:s.onAction}),(0,i.jsxs)(eE.p.Body,{children:[(0,i.jsx)(eE.p.Body.Section,{children:a}),(0,i.jsx)(eE.p.Body.Section,{children:(0,i.jsx)(eJ.o,{name:"memberships-choice-list",value:null,onChange:te,gap:"250",choiceType:"single",children:r.map(e=>(0,i.jsx)(tt,{...e},`${e.name}-${e.caption}`))})})]}),l&&(0,i.jsx)(eE.p.Footer,{children:(0,i.jsx)(y.z,{variant:"secondary",onAction:l.onAction,isDisabled:l.isDisabled,size:"l",isFull:!0,children:l.label})})]})}var ti=n(82654);let to=()=>{},ta=e=>{let{data:t}=e,n=(0,d.vz)(R,t);if("BookingFlowModalPackage"!==n.__typename)return null;let{title:o,caption:a,description:r,sectionTitle:s,discount:l,price:c,items:u}=n,m=eo(n.closeAction),p=eo(n.submitAction),f=eo(n.deleteAction);return(0,i.jsxs)(eE.p,{title:o,isOpen:!0,setOpen:to,onOpen:to,onClose:m.onAction,qaType:"package-modal",size:"wide",children:[(0,i.jsx)(eE.p.Header,{onClose:m.onAction,qaType:"package-modal-header"}),(0,i.jsx)(eE.p.Body,{children:(0,i.jsxs)(eE.p.Body.Section,{children:[(0,i.jsx)(ef.x,{color:"neutralFaded",font:"body-m-regular",qaType:"package-modal-caption",children:a}),(0,i.jsxs)(e3.K,{as:"span",gap:"100",direction:"horizontal",children:[(0,i.jsx)(ef.x,{font:"body-m-medium",mb:"150",qaType:"package-modal-price",children:c.formatted}),l?(0,i.jsx)(ef.x,{font:"body-m-regular",color:"positive",qaType:"offer-item-discount",children:l}):null]}),r?(0,i.jsx)(ti.u,{characterLimit:170,font:"body-s-regular",qaType:"package-modal-description",children:r}):null,(0,i.jsx)(eh.i,{verticalGap:"250"}),(0,i.jsx)(ef.x,{font:"header-s-semibold",mb:"250",children:s}),(0,i.jsx)(e3.K,{direction:"vertical",gap:"200",children:u.map(e=>(0,i.jsxs)("div",{"data-qa":"package-modal-package-item",children:[(0,i.jsx)(ef.x,{font:"body-m-medium",qaType:"package-modal-package-item-name",children:e.name}),(0,i.jsx)(ef.x,{color:"neutralFaded",font:"body-s-regular",children:e.caption})]},`${e.name}-${e.caption}`))})]})}),(0,i.jsxs)(eE.p.Footer,{children:[f&&(0,i.jsx)(y.z,{size:"l",isFull:!0,onAction:f.onAction,isDisabled:f.isDisabled,variant:"secondary",children:f.label}),p&&(0,i.jsx)(y.z,{size:"l",isFull:!0,onAction:p.onAction,isDisabled:p.isDisabled,children:p.label})]})]})},tr=()=>{},ts=e=>{let t=eo(e.primaryAction);return(0,i.jsx)(eJ.o.Item,{value:`${e.name}-${e.caption}`,primitiveType:"radio",variant:"lower",onAction:t?.onAction,isDisabled:t?.isDisabled,"aria-label":t?.label,isSelected:e.isSelected,children:t=>{let{labelProps:n,descriptionProps:o}=t;return(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ef.x,{font:"body-m-medium",...n,overflow:"break",children:e.name}),(0,i.jsx)(ef.x,{color:"neutralFaded",font:"body-s-regular",mb:"150",children:e.caption}),(0,i.jsxs)(e3.K,{gap:"100",direction:"horizontal",as:"div",children:[(0,i.jsx)(ef.x,{font:"body-s-medium",...o,children:e.price.formatted}),e.discount?(0,i.jsx)(ef.x,{font:"body-s-regular",color:"positive",children:e.discount}):null]})]})})}})},tl=e=>{let{data:t}=e,n=(0,d.vz)(P,t);if("BookingFlowModalService"!==n.__typename)return null;let{title:o,description:a,discount:r,caption:s,price:l,serviceVariants:c}=n,u=c.length>1,m=eo(n.closeAction),p=eo(n.submitAction),f=eo(n.deleteAction),h=eo(n.membershipChip),x=!u||!!h||!!a;return(0,i.jsxs)(eE.p,{title:o,isOpen:!0,setOpen:tr,onOpen:tr,onClose:m.onAction,size:"wide",children:[(0,i.jsx)(eE.p.Header,{backButtonIconSlot:e$.Y4O,onClose:m.onAction}),(0,i.jsx)(eE.p.Body,{children:(0,i.jsx)(eE.p.Body.Section,{children:(0,i.jsxs)(e3.K,{gap:"400",direction:"vertical",as:"div",display:"flex",children:[x?(0,i.jsxs)(e3.K,{gap:"200",direction:"vertical",as:"div",children:[u?null:(0,i.jsxs)("div",{children:[(0,i.jsx)(ef.x,{color:"neutralFaded",font:"body-m-regular",children:s}),(0,i.jsxs)(e3.K,{gap:"100",direction:"horizontal",as:"div",children:[(0,i.jsx)(ef.x,{font:"body-m-medium",children:l.formatted}),r?(0,i.jsx)(ef.x,{font:"body-m-regular",color:"positive",children:r}):null]})]}),h?(0,i.jsx)("div",{children:(0,i.jsx)(y.z,{variant:"secondary",shape:"pill",size:"m",onAction:h.onAction,isDisabled:h.isDisabled,suffix:(0,i.jsx)(y.z.IconAffix,{icon:e$.v4q}),children:h.label})}):null,a?(0,i.jsx)(ti.u,{characterLimit:u?170:1/0,font:"body-s-regular",children:a}):null]}):null,u?(0,i.jsx)(eJ.o,{value:null,onChange:tr,label:`${(0,j.gl)("Select service variant","Select an option")} *`,name:(0,j.gl)("Select service variant","Select an option"),choiceType:"single",gap:"0",children:c.map(e=>(0,i.jsx)(ts,{...e},`${e.name}-${e.caption}`))}):null]})})}),(0,i.jsxs)(eE.p.Footer,{children:[f&&(0,i.jsx)(y.z,{size:"l",isFull:!0,onAction:f.onAction,isDisabled:f.isDisabled,variant:"secondary",children:f.label}),p&&(0,i.jsx)(y.z,{size:"l",isFull:!0,onAction:p.onAction,isDisabled:p.isDisabled,children:p.label})]})]})},td=()=>{},tc=e=>{let{tile:t}=e,n=eo(t.primaryAction);return(0,i.jsx)(eJ.o.Item,{variant:"low",primitiveType:"radio",value:t.name+t.caption,isSelected:t.isSelected,onAction:n?.onAction,isDisabled:n?.isDisabled,children:e=>{let{labelProps:n,descriptionProps:o}=e;return(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ef.x,{as:"h3",...n,font:"body-m-medium",children:t.name}),(0,i.jsx)(ef.x,{...o,font:"body-s-regular",color:"neutralFaded",mb:"150",children:t.caption}),(0,i.jsxs)(e3.K,{as:"span",gap:"100",direction:"horizontal",children:[(0,i.jsx)(ef.x,{font:"body-s-medium",children:t.price.formatted}),t.discount?(0,i.jsx)(ef.x,{font:"body-s-regular",color:"positive",children:t.discount}):null]})]})})}})},tu=e=>{let{data:t}=e,n=(0,d.vz)(N,t);if("BookingFlowModalUpsell"!==n.__typename)return null;let o=eo(n.closeAction),a=eo(n.primaryAction),r=eo(n.secondaryAction);return(0,i.jsxs)(eE.p,{isOpen:!0,onClose:o.onAction,setOpen:td,onOpen:td,size:"wide",title:n.title,children:[(0,i.jsx)(eE.p.Header,{onClose:o.onAction}),(0,i.jsx)(eE.p.Body,{children:(0,i.jsx)(eE.p.Body.Section,{children:(0,i.jsx)(e3.K,{display:"flex",gap:{default:"500",laptop:"400"},direction:"vertical",children:(0,i.jsx)(eJ.o,{name:"services-choice-list",onChange:td,gap:{default:"0",laptop:"150"},choiceType:"single",value:null,children:n.tiles.map(e=>(0,i.jsx)(tc,{tile:e},`${e.name}_${e.caption}`))})})})}),(0,i.jsxs)(eE.p.Footer,{children:[r?(0,i.jsx)(y.z,{onAction:r.onAction,size:"l",isFull:!0,isDisabled:r.isDisabled,variant:"secondary",children:r.label}):null,a?(0,i.jsx)(y.z,{onAction:a.onAction,size:"l",isFull:!0,isDisabled:a.isDisabled,children:a.label}):null]})]})};var tm=n(784748),tp=n(873926),tf=n(380270),th=n(823493),tx=n.n(th),tg=n(25869);let t_=()=>null;function tb(e){let{isOpen:t,onClose:n,onSubmit:o}=e;return(0,i.jsxs)(eE.p,{isOpen:t,onClose:n,setOpen:t_,onOpen:t_,title:(0,j.gl)("Modal title label to confirm user wants to leaving group booking flow","Are you sure you want to leave this booking?"),children:[(0,i.jsx)(eE.p.Header,{onClose:n}),(0,i.jsx)(eE.p.Body,{children:(0,i.jsx)(eE.p.Body.Section,{children:(0,i.jsx)(ef.x,{font:"body-m-regular",children:(0,j.gl)("Modal description label describing potential impact of leaving booking flow","All selections will be lost")})})}),(0,i.jsxs)(eE.p.Footer,{children:[(0,i.jsx)(y.z,{id:"heed-warning",size:"l",variant:"secondary",onAction:n,isFull:!0,children:(0,j.gl)("Button label to close modal","Cancel")}),(0,i.jsx)(y.z,{id:"ignore-warning",size:"l",variant:"primary",onAction:o,isFull:!0,children:(0,j.gl)("Button label to continue navigating away from booking flow","Yes, exit")})]})]})}var ty=n(295999);let tv=e=>{let{item:t}=e;return(0,i.jsx)(ty.Z,{leftSection:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ef.x,{font:"body-s-medium",overflow:"break",children:t.name}),(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:(0,i.jsx)(eN,{children:t.caption})}),t.membership?(0,i.jsx)(ef.x,{font:"body-s-regular",children:(0,i.jsx)(eN,{children:t.membership})}):null]}),rightSection:(0,i.jsxs)("div",{className:ej().pricing,children:[t.price.formatted?(0,i.jsx)(ef.x,{font:"body-s-medium",color:"neutral",children:t.price.formatted}):null,t.priceWithoutDiscounts?(0,i.jsx)(ef.x,{font:"body-s-regular",color:"ghost",textTransform:"strikethrough",children:t.priceWithoutDiscounts.formatted}):null]})})},tj=e=>{let{attendees:t}=e;return(0,i.jsx)("div",{children:t.flatMap(e=>e.items).length?t.map((e,t,n)=>{let o=n.length>1;return(0,i.jsxs)("div",{children:[o?(0,i.jsxs)(i.Fragment,{children:[0!==t&&(0,i.jsx)(eh.i,{verticalGap:"250"}),(0,i.jsx)(ef.x,{font:"body-m-semibold",mb:"200",children:e.name})]}):null,(0,i.jsx)(e3.K,{gap:"200",direction:"vertical",display:"flex",children:e.items.map((e,t)=>(0,i.jsx)(tv,{item:e},`${e.name}_${t}`))})]},`${e.name}_${t}`)}):(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:(0,j.gl)("Booking flow cart new placeholder","No services selected")})})},tS=e=>{let{subtotal:t,discountsTotal:n,priceTotal:o,taxTotal:a}=e,r=t?.formatted!=null,s=n?.formatted!=null,l=a?.formatted!=null;return(0,i.jsx)(ep.Z.Section,{variant:"lowest",verticalPadding:"flush",horizontalPadding:{default:"flush",laptop:"l"},children:(0,i.jsxs)(em.k,{direction:"vertical",gap:"25",children:[(r||s||l)&&(0,i.jsx)(eh.i,{verticalGap:"200"}),r?(0,i.jsx)(ty.Z,{leftSection:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:(0,j.gl)("In the booking flow cart summary","Subtotal")}),rightSection:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:t.formatted})}):null,s?(0,i.jsx)(ty.Z,{leftSection:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:(0,j.gl)("In the booking flow cart summary","Discounts")}),rightSection:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:n.formatted})}):null,l?(0,i.jsx)(ty.Z,{leftSection:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:(0,j.gl)("The amount of tax included in booking fee","Tax")}),rightSection:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:a.formatted})}):null,(r||s||l)&&(0,i.jsx)(eh.i,{verticalGap:"200"}),(0,i.jsx)(ty.Z,{leftSection:(0,i.jsx)(ef.x,{font:"body-m-semibold",children:(0,j.gl)("In the booking flow cart summary","Total")}),rightSection:(0,i.jsx)(ef.x,{font:"body-m-semibold",children:o.formatted})})]})})},tw=e=>{let{dateFormatted:t,timeRangeFormatted:n,waitlistDateTimeRanges:a}=e,r=(0,tm.G)("laptop"),s=(0,o.useMemo)(()=>[t,...a||[]].filter(e=>!!e),[t,a]),l=(0,o.useMemo)(()=>n?[n]:[],[n]);return 0===l.length&&0===s.length?null:(0,i.jsx)(ep.Z.Section,{variant:"lowest",verticalPadding:r?"l":"flush",horizontalPadding:r?"l":"flush",children:(0,i.jsxs)(em.k,{direction:"column",justifyContent:"center",gap:"150",children:[s.map(e=>(0,i.jsx)(em.k,{direction:"row",alignContent:"center",gap:"100",children:(0,i.jsxs)(em.k,{direction:"row",alignContent:"center",gap:"100",children:[(0,i.jsx)(e$.Que,{color:"neutralFaded"}),(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:e})]})},e)),l.map(e=>(0,i.jsxs)(em.k,{direction:"row",alignContent:"center",gap:"100",children:[(0,i.jsx)(e$.T39,{color:"neutralFaded"}),(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:e})]},e))]})})};var tk=n(875916),tA=n(795928);let tC=e=>{let{name:t,slug:n,address:o,rating:a,avatarUrl:r,reviewsCount:s}=e;return(0,i.jsxs)("div",{className:eA().self,children:[(0,i.jsx)(tk.f,{isExternal:!0,linkTo:(0,tg.WuJ)(n),children:(0,i.jsx)(_.l,{image:(0,i.jsx)(b.E,{alt:`${t} - ${o}`,src:r||"",loading:"lazy"}),size:"2xl"})}),(0,i.jsxs)(em.k,{gap:"25",direction:"vertical",unsafeStyle:{minWidth:"0"},children:[(0,i.jsx)(ef.x,{font:"body-m-semibold",children:t}),a?(0,i.jsx)(tA.g,{halfStarIconSlot:e$.$Dh,id:"rating",rating:a,ratingCount:s??void 0,stars:"five",variant:"default",size:"m"}):null,o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e_.E,{gte:"laptop",children:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",overflow:"ellipsis",noWrap:!0,children:o})}),(0,i.jsx)(e_.E,{lt:"laptop",children:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",overflow:"ellipsis",children:o})})]}):null]})]})},tB=e=>{let t;t="CURRENT"===e.state?"current":"NEXT"===e.state?"future":"previous";let n=eo(e);return(0,i.jsx)(tp.t.Item,{text:n.label,onAction:n.onAction,variant:t,iconSlot:e$.XCv,isLast:e.isLast})},tF=e=>{let{data:t}=e;return(0,i.jsx)(tp.t,{children:t.breadcrumbs.map((e,t,n)=>(0,i.jsx)(tB,{...e,isLast:t===n.length-1},`${e.label}_${t}`))})},tT=e=>{let[t,n]=(0,o.useState)(!1),[i,a]=(0,o.useState)(!1);return{handleScroll:(0,o.useCallback)(tx()(()=>{let o=e?.current?.scrollTop??0,r=e?.current?.clientHeight??0,s=(e?.current?.scrollHeight??0)-o-r-5;t&&0===o?n(!1):!t&&o>0&&n(!0),i&&s<=0?a(!1):!i&&s>0&&a(!0)},100),[e,i,t]),showLocationDivider:t,showFooterDivider:i}},tI=e=>{let{data:t,continueAction:n,slotFooter:a,slotAboveFooter:r}=e,{cart:{name:s,slug:l,address:d,rating:c,avatarUrl:u,reviewsCount:m,dateFormatted:p,timeRangeFormatted:f,waitlistDateTimeRanges:h,subtotal:x,discountsTotal:g,priceTotal:_,taxTotal:b,attendees:v}}=t,j=o.useRef(null),{handleScroll:S,showLocationDivider:w,showFooterDivider:k}=tT(j);return(0,i.jsx)(ep.Z,{id:"booking-flow-cart",horizontalPadding:"flush",verticalPadding:"flush",unsafeClassName:ey().self,children:(0,i.jsxs)("div",{ref:j,className:ey().scrollableWrapper,onScroll:S,children:[(0,i.jsx)("div",{className:(0,eF.default)(ey().locationDetails,w&&ey().withDivider),children:(0,i.jsx)(ep.Z.Header,{variant:"lowest",horizontalPadding:"l",children:(0,i.jsx)(tC,{name:s,slug:l,address:d,rating:c,avatarUrl:u,reviewsCount:m})})}),(0,i.jsx)(tw,{dateFormatted:p,timeRangeFormatted:f,waitlistDateTimeRanges:h}),(0,i.jsx)(ep.Z.Section,{variant:"lowest",verticalPadding:"m",unsafeClassName:ey().itemsList,horizontalPadding:"l",children:(0,i.jsx)(tj,{attendees:v})}),null==x&&null==g&&null==b?(0,i.jsx)("div",{children:(0,i.jsx)(eh.i,{verticalGap:"200",horizontalGap:"300"})}):null,(0,i.jsx)("div",{className:ey().summaryWrapper,children:(0,i.jsx)(tS,{subtotal:x,discountsTotal:g,priceTotal:_,taxTotal:b})}),r,(0,i.jsxs)(ep.Z.Footer,{variant:"lowest",horizontalPadding:"l",unsafeClassName:(0,eF.default)(ey().footerWrapper,k&&ey().showFooterDivider),children:[a,n?(0,i.jsx)(y.z,{id:"continue-button",type:"button",onAction:n.onAction,variant:"primary",size:"l",isDisabled:n.isDisabled,isFull:!0,children:n.label}):null]})]})})},tD=e=>{let{data:t,continueAction:n,slotFooter:o}=e,a=t.cartSummaryBar;return a&&(0,i.jsxs)(e_.E,{lt:"laptop",children:[o,(0,i.jsx)(eg.e.BottomBar,{unsafeClassName:ey().bottomBar,children:(0,i.jsxs)(em.k,{justifyContent:"space-between",direction:"horizontal",gap:"200",unsafeClassName:ey().container,children:[(0,i.jsxs)("div",{className:ey().details,children:[(0,i.jsx)(ef.x,{font:"body-s-semibold",children:a.header}),a.caption?(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",overflow:"ellipsis",noWrap:!0,children:a.caption}):null]}),n&&(0,i.jsx)(y.z,{variant:"primary",size:"l",onAction:n.onAction,isDisabled:n.isDisabled,isFull:!1,children:n.label})]})})]})},tR=e=>{let{title:t,description:n,continueAction:a,backAction:r,data:s,children:l,slotFooter:c,slotAboveFooter:u,withShadowOnScroll:m,withSidePadding:p=!0,withCartSummaryBar:f=!0}=e,{navigateBack:h}=(0,tf.H)(),[x,g]=(0,o.useState)(!1),_=(0,d.vz)(O,s),b=_.cart.slug,S=(0,o.useCallback)(()=>(h({pathname:(0,tg.WuJ)(b)}),Promise.resolve()),[h,b]),w=(0,o.useCallback)(()=>(g(!0),Promise.resolve()),[]),k=(0,o.useCallback)(()=>(g(!1),Promise.resolve()),[]),{getOrderedAppearSequenceItemProps:A,animationComplete:C}=(0,el.j)({animationDelay:50,animationDuration:500}),B=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ed.A.Title,{children:[(0,i.jsx)(e_.E,{gte:"laptop",children:(0,i.jsx)("div",{children:(0,i.jsx)(ec.V,{titleAs:"h1",title:t,subtitle:(0,i.jsx)(tF,{data:_}),description:n})})}),(0,i.jsx)(e_.E,{lt:"laptop",children:(0,i.jsx)("div",{children:(0,i.jsx)(ec.V,{titleAs:"h1",title:t,description:n,withSidePaddings:!p})})})]}),(0,i.jsx)(ed.A.Content,{...C?{}:A("SCREEN"),children:l}),(0,i.jsx)(e_.E,{gte:"laptop",children:(0,i.jsx)(ed.A.Sidebar,{isSticky:!0,top:"108px",hasOffset:!0,children:(0,i.jsx)(tI,{data:_,continueAction:a,slotFooter:c,slotAboveFooter:u})})})]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.l,{children:(0,i.jsxs)(eg.e,{width:"wide",children:[(0,i.jsx)(eg.e.Header,{content:(0,i.jsx)(eg.e.Header.TextTitle,{label:t}),onBack:r?.onAction||S,suffix:_.canExit?(0,i.jsx)(y.z,{id:"close-button",onAction:w,variant:"tertiary",size:"l",icon:e$.Two,isLabelHidden:!0,isCompact:!0,children:(0,j.__)`Close`}):null,backButtonIconSlot:e$.Y4O,withShadowOnScroll:m}),(0,i.jsx)(e_.E,{lt:"laptop",children:(0,i.jsx)(eg.e.Container,{hasSidePadding:p,children:(0,i.jsx)(ed.A,{type:"singleWithTitle",direction:"vertical",rowGap:"m",children:B})})}),(0,i.jsx)(e_.E,{gte:"laptop",lt:"desktop",children:(0,i.jsx)(eg.e.Container,{hasSidePadding:p,children:(0,i.jsx)(ed.A,{type:"sidebarAfterOffsetWithTitle",direction:"horizontal",rowGap:"m",columnGap:"m",sidebarWidth:"ml",children:B})})}),(0,i.jsx)(e_.E,{gte:"desktop",children:(0,i.jsx)(eg.e.Container,{hasSidePadding:p,children:(0,i.jsx)(ed.A,{type:"sidebarAfterOffsetWithTitle",direction:"horizontal",rowGap:"m",columnGap:"xl",sidebarWidth:"l",children:B})})}),f&&(0,i.jsx)(tD,{data:_,continueAction:a,slotFooter:c})]})}),_.canExit?(0,i.jsx)(tb,{onClose:k,onSubmit:S,isOpen:x}):null]})},tP=e=>{let{data:t}=e,{layout:n,screenAllEmployees:o}=(0,d.vz)(L,t);if("BookingFlowScreenAllEmployees"!==o.__typename)return null;let a=eo(o.backAction),r=eo(o.continueAction),s=!(0,tm.G)("laptop");return(0,i.jsx)(tR,{title:o.title,description:o.description,backAction:a,continueAction:r,data:n,withCartSummaryBar:!s,children:(0,i.jsx)(eK,{tiles:o.tiles,shouldAutoContinue:s})})};var tN=n(154769),tO=n(751450),tL=n(625196),tM=n(648145),tE=n(993062),tz=n(591518),tH=n(3244),tq=n(395811),tW=n(973314),t$=n(927609),tU=n(882770),tG=n(565704),tV=n(449594),tX=n(876926),tK=n(200843),tY=n(850589),tZ=n(578931),tJ=n(85723),tQ=n(520695),t0=n(400645),t1=n(569232),t4=n(65608),t6=n(293978),t5=n(665049),t2=n(462539),t8=n(804163),t3=n(83003),t9=n(540365),t7=n(166169),ne=n(641918),nt=n(606960),nn=n(580301),ni=n(891730),no=n(916576),na=n(746878),nr=n(341328),ns=n(609405),nl=n(562994),nd=n(686328);function nc(){let{locationId:e,locationName:t,locationTrackingCodes:n}=ei(),{facebookPixel:i,providerGA4:a}=(0,nd.M)(n),r=(0,o.useCallback)(e=>{if(!a)return;let{name:t,...n}=e;window.gtag("event",t,{...n,send_to:a})},[a]),s=(0,o.useCallback)(n=>{if(!i)return;let{name:o}=n;(0,nl.$)(i,o,{location_name:t,location_unique_id:e})},[i,t,e]);return(0,o.useMemo)(()=>({sendProviderGaEvent:r,sendProviderPixelEvent:s}),[r,s])}var nu=n(763072);let nm=(0,o.createContext)(null),np=e=>{let{children:t,reservationId:n,locationProviderId:r}=e,{trigger:l}=(0,a.pk)(tN.oT),{trigger:c}=(0,a.pk)(tN.rL),{trigger:u}=(0,a.pk)(tN.Hm),{trigger:m}=(0,a.pk)(tN.Xd),{addErrorToast:f}=(0,p.e)(),h=(0,tW.lr)(),[x,g]=(0,o.useState)(!1),_=(0,s.a3)("B2C_LOYALTY_BOOKING_FLOW_WEB"),b=(0,o.useMemo)(()=>({isLoyaltyEnabled:!!_,id:null==_?"":n,externalReferrerUrl:(0,t4.zY)(t4.Iv.externalReferrerUrl)||"",landingPageUrl:(0,t4.zY)(t4.Iv.userLandedFirstUrl)||"",rwgToken:decodeURIComponent((0,t4.zY)(t4.Iv.rwgToken)||"")}),[n,_]),{data:y,error:v}=(0,a.pM)(n?ns.tA:null,b),w=(0,d.vz)(ns._O,y?.reservation)??null,k=(0,o.useRef)(null);k.current=w?.status,(0,o.useEffect)(()=>{w?.payment?.id&&w?.payment?.status===e9.WO.Failed&&(f((0,j.__)`We could not process payment, please try again.`,{size:"expanded"}),g(!1))},[w?.payment?.id,w?.payment?.status,f]),(0,o.useEffect)(()=>()=>{k.current!==e9.Jr.Confirmed&&u({id:n})},[u,n]);let A=(0,o.useCallback)(async(e,t)=>{let i;if(!n)return Promise.reject(Error("reservationId is not set"));let o={id:n,input:{notes:e,channelType:(0,nu.D)(r)||(0,nu.q)(h)||e9.xu.Generic}};g(!0);try{if(t===e9.Qn.Cwc&&(i=await c(o)),t===e9.Qn.PayAtStore&&(i=await l(o)),i?.errors?.length)return g(!1),Promise.reject(i.errors);return Promise.resolve()}catch(e){g(!1),(0,S.tz)(Error("Confirmation failed"),{error:e,protectionStrategy:t,apiErrors:i?.errors?JSON.stringify(i?.errors):void 0})}throw Error(`Unknown protection strategy:${t}`)},[l,c,n,r,h]),C=(0,o.useCallback)(async e=>{try{let t=await m({id:n,input:{promoCode:e}});if(t?.errors?.[0])return t.errors[0].extensions?.formattedMessage||(0,j.__)`Invalid code. Got a gift card? Redeem at venue`}catch(e){if(e?.response?.errors?.[0])return e.response.errors[0].extensions?.formattedMessage||(0,j.__)`Invalid code. Got a gift card? Redeem at venue`}},[n,m]),B=(0,o.useMemo)(()=>({shouldBlockConfirming:void 0===y||x,reservation:w,confirmReservation:A,updateReservationPromotionCode:C,errors:v||[],subscriptionVariables:b}),[y,x,w,A,C,v,b]);return(0,i.jsx)(nm.Provider,{value:B,children:t})};function nf(){let e=(0,o.useContext)(nm);if(!e)throw Error("useReservation must be used inside a <ReservationContext.Provider>");return e}var nh=n(734386),nx=n.n(nh);let ng=e=>{let{card:t,didAddCard:n,onContinue:i,refPaymentMethod:a}=e;(0,o.useEffect)(()=>{n.current&&(void 0!==a.current&&!a.current&&t&&(t?.__typename==="PaymentApplePay"?(0,S.tz)("Incorrect auto-confirming with Apple Pay payment"):window.setTimeout(()=>i(),0)),a.current=t)},[t,n,i,a])},n_=e=>{let{isDepositRequired:t}=e,n=(0,tO.l)(),{reservation:i}=nf(),{triggerSplash:a}=(0,tQ.NN)(),{sendProviderGaEvent:r,sendProviderPixelEvent:l}=nc(),c=(0,s.a3)("B2C_GA4_SEND_PURCHASE_EVENT_ENABLED"),{navigateTo:m}=(0,tf.H)(),p=(0,tq.kj)(),f=(0,d.vz)(ns._O,i),h=(0,o.useRef)(!1),x=(0,o.useCallback)(()=>{if(!p.isLoading&&f?.parentBookingId){h.current=!0;try{let e=(0,d.vz)(tq.li,p.data?.profile);l({name:"Purchase",value:f.appointment?.total.value,currency:f.appointment?.total.currency}),r({name:"appointment",event_id:f.appointment?.bookingRef,location_name:n.location?.name,value:f.appointment?.total.value,currency:f.appointment?.total.currency}),c&&r({name:"purchase",transaction_id:f.appointment?.bookingRef,value:f.appointment?.total.value,currency:f.appointment?.total.currency,items:f.appointment?.items?.map(e=>({item_id:e.bookableId,item_name:e.title,price:e.retailPrice?.value}))});let t=(0,u.Ld)();if(f.parentBookingId&&t.length){let n=t.map(t=>({event_type:t.event_type,timestamp:t.timestamp,properties:{...t.properties,appointment_id:Number(f.parentBookingId),marketplace_user_id:e?Number(e?.id):null}})),i=n[n.length-1];(0,tH.L)(tH.I.USER_INTERACTIONS_PRIOR_TO_APPOINTMENT_CONFIRMATION,{events:[...n,{...i,timestamp:Date.now()}]})}(0,t4.e8)(t4.Iv.userBookingJourney),a({header:(0,t1.gl)("This appears at the end of the booking flow on a splash screen","Appointment confirmed")})}catch(e){(0,S.tz)(e)}m((0,tg.WhY)(f.parentBookingId,{web2app:"1"}))}},[m,f,a,n.location?.name,p.data?.profile,p.isLoading,r,l,c]);return(0,o.useEffect)(()=>{t||h.current||f?.status!==e9.Jr.Confirmed||x()},[t,x,f?.status]),x},nb=e=>{if(!e)throw Error("Payment method is required");let t=function(e){switch(e.card?.__typename){case"PaymentCardOnFile":return{brand:e.card.brand,description:e.card.redactedCardNumber};case"PaymentApplePay":return{brand:"apple-pay",description:(0,t1.__)("Apple Pay")};case"PaymentIDeal":return{brand:"ideal",description:(0,t1.__)("iDEAL")};case null:case void 0:return{brand:"",description:""};default:throw new t6.S(e.card)}}(e);if(e.freshaAccount||e.providerAccount){let n=!!e.card?.id,o=(0,tZ.CS)(e.providerAccount)?e.providerAccount.providerAccount.balance?.[0]?.amount.formattedShort:null,a=(0,tJ.T)(e.freshaAccount)?e.freshaAccount.freshaAccount.balance.amount.formattedShort:null;return{brand:(0,i.jsx)(tL.o,{variant:n?"multiple":"wallet",size:"2xl"}),description:n&&!(o&&a)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)(ef.x,{font:"body-s-semibold",children:(0,t1.gl)("Split payment methods","Multiple")}),leftSectionAlignment:"flex-end"}),(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)(ef.x,{font:"body-s-medium",children:(0,t1.gl)("Split payment methods","%{giftCardBalance} wallet + %{selectedCard}",{giftCardBalance:o??a,selectedCard:t.description})}),leftSectionAlignment:"flex-start"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)(ef.x,{font:"body-s-medium",children:(0,t1.__)("Wallet")}),leftSectionAlignment:"flex-end"}),(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:o&&a?(0,t1.__)`Wallet balance`:(0,t1.__)("%{amount} balance",{amount:o??a})}),leftSectionAlignment:"flex-start"})]})}}return t},ny=e=>{let{layout:t,screen:n,bookingNotes:a,canMakePayment:r,handlePaymentError:l,isDepositRequired:d,isLoadingPaymentMethods:c,isPaymentSelectionDisabled:u,hasMadePayment:m,paymentMethods:p,makePayment:f,refreshAvailablePaymentMethods:h,requestedPaymentMethods:x,setBookingNotes:g,selectedPaymentMethods:_,setSelectedPaymentMethods:b}=e,v=(0,o.useRef)(null),j=(0,tm.G)("laptop"),{location:w}=(0,tO.l)(),{reservation:k,shouldBlockConfirming:A,confirmReservation:C,updateReservationPromotionCode:B,errors:F}=nf(),T=(0,tW.lr)(),I=w?.slug;(0,o.useRef)(T).current=T;let{openModal:D}=(0,t5.W)({key:nn.H.key}),{requiresAddedCardForConfirmation:R,protectionStrategy:P,extraPaymentInformationWhenAddedCard:N,deposit:O,cancelationPolicy:L,status:M,patchTestPolicy:E}=k||{},{closeModal:z,isOpen:H,setOpen:q,openModal:W}=(0,t5.W)({key:"notes"}),{closeModal:$,isOpen:U,setOpen:G,openModal:V}=(0,t5.W)({key:"cancellation-policy"}),{closeModal:X,isOpen:K,setOpen:Y,openModal:Z}=(0,t5.W)({key:"add-card-method"}),J=p.find(e=>e?.__typename==="PaymentCardOnFile"),Q=p.find(e=>e?.__typename==="PaymentIDeal"),ee=(0,o.useRef)(J||null),et=(0,o.useRef)(void 0),en=(0,o.useRef)(void 0);en.current={...en.current,transactionFlowEnabled:d,shouldBlockConfirming:A,errors:F,isReservationLoading:!1,reservation:{reservationId:k?.id,status:M,requiresAddedCardForConfirmation:R,protectionStrategy:P,parentBooking:k?.parentBookingId},selectedPaymentMethods:Object.values(_||{}).map(e=>e?.__typename).filter(Boolean),paymentStatus:k?.payment?.status};let{isOpen:ei,handleWarning:ea,close:er}=(0,tU.S)(k),es=(0,o.useCallback)(async()=>{if(ea().canContinue){if(d){let e=Date.now();await f(),en.current&&(en.current.makePaymentConfirmed=!0,en.current.makePaymentConfirmedDurationInSeconds=(Date.now()-e)/1e3),et.current=setTimeout(()=>{en.current?.paymentStatus!==e9.WO.Failed&&(0,S.tz)(Error("Timeout - Failed to confirm appointment within given threshold"),en.current)},1e4)}else try{await C(a,k.protectionStrategy)}catch(e){l(e)}}},[a,C,l,d,f,k,ea]),el=(0,o.useCallback)(()=>($(),es()),[$,es]),ed=(0,o.useRef)(!1),ec=(0,o.useCallback)(async()=>d&&(!R||!(_?.card?.__typename!=="PaymentApplePay"))||r||!R||J?d&&!r?Z():O?D():!j&&L?V():es():j&&v.current?.submit?v.current?.submit():Z(),[L,r,O,j,es,V,D,Z,R,_,d,J]),eu=(0,o.useCallback)(async()=>{ed.current=!0},[]),ep=(0,o.useCallback)(()=>{es()},[es]),eg=(0,o.useCallback)(()=>es(),[es]),e_=(0,o.useCallback)(e=>{g(e.target.value)},[g]);ng({card:d?_.card:J||null,didAddCard:ed,onContinue:ec,refPaymentMethod:ee}),(0,o.useEffect)(()=>()=>clearTimeout(et.current),[]);let eb=eo(n.backAction),ey=eo(t.breadcrumbs.find(e=>e.id.includes("onBackToTimeSelection"))),ev=eo(t.breadcrumbs.find(e=>e.id.includes("onBackToServices"))),ej=(0,o.useMemo)(()=>({label:(0,t1.__)`Confirm`,isDisabled:!1,onAction:ec}),[ec]);if(M===e9.Jr.Expired||F?.[0])return(0,i.jsx)(tR,{title:n.title,description:n.description,backAction:eb,continueAction:{...ej,isDisabled:!0,isPending:!1},data:t,children:(0,i.jsx)(no.q,{error:F?.[0],hasExpired:M===e9.Jr.Expired,timeslotSelectionOnAction:ey?.onAction??eb?.onAction,servicesSelectionOnAction:ev?.onAction??eb?.onAction})});let eS=k?.payNow||null;return(0,i.jsx)(tR,{title:n.title,description:n.description,backAction:eb,continueAction:{...ej,isPending:A||m},slotAboveFooter:(0,i.jsx)(t2.$,{payNow:k?.payNow||null,payAtVenue:k?.payAtVenue||null}),slotFooter:(0,i.jsx)(t3.B,{reservation:k}),data:t,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(tM.E,{display:{default:"flex",laptop:"none"},children:(0,i.jsx)("div",{className:nx().mobileSummary,children:(0,i.jsxs)(e3.K,{qaType:"cart-mobile",direction:"vertical",gap:"400",as:"div",children:[(0,i.jsx)(tC,{name:t.cart.name,slug:t.cart.slug,address:t.cart.address,avatarUrl:t.cart.avatarUrl,rating:t.cart.rating,reviewsCount:t.cart.reviewsCount}),(0,i.jsx)(tw,{timeRangeFormatted:t.cart.timeRangeFormatted,dateFormatted:t.cart.dateFormatted,waitlistDateTimeRanges:t.cart.waitlistDateTimeRanges}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tj,{attendees:t.cart.attendees}),(0,i.jsx)(s.L0,{name:"B2C_LOYALTY_BOOKING_FLOW_WEB",enabled:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eh.i,{verticalGap:"200"}),(0,i.jsx)(t9.i,{reservation:k})]})}),null==t.cart.subtotal&&null==t.cart.discountsTotal&&null==t.cart.taxTotal?(0,i.jsx)(eh.i,{verticalGap:"200"}):null,(0,i.jsxs)(em.k,{gap:"100",direction:"vertical",children:[(0,i.jsx)(tS,{subtotal:t.cart.subtotal,discountsTotal:t.cart.discountsTotal,priceTotal:t.cart.priceTotal,taxTotal:t.cart.taxTotal}),(0,i.jsx)("div",{children:(0,i.jsx)(t2.$,{isMobile:!0,payNow:k?.payNow||null,payAtVenue:k?.payAtVenue||null})})]})]})]})})}),(0,i.jsxs)(em.k,{gap:"400",direction:"vertical",padding:{laptop:["0","0","400","0"]},children:[(0,i.jsx)(s.L0,{name:"B2C_LOYALTY_BOOKING_FLOW_WEB",disabled:w?.hasPromoCodes?(0,i.jsx)(tM.E,{display:{default:"block",laptop:"none"},children:(0,i.jsx)("div",{children:(0,i.jsx)(na.V,{usedPromotionCode:k?.usedPromotionCode,updateReservationPromotionCode:B})})}):null}),!!I&&(c||R)&&!d&&(0,i.jsx)(tX.e,{isDepositRequired:!!O,onAddCard:eu,paymentText:N,location:w,closePaymentModal:X,isPaymentModalOpen:K,paymentMethodCard:J,setPaymentModalOpen:Y,openPaymentModal:Z,ref:v,refreshAvailablePaymentMethods:h}),!!I&&(c||R)&&d&&(0,i.jsx)(tX.X,{accountsEnabled:!0,claimGiftCardEnabled:k?.location?.owner.paymentWithGiftCardsSupported!==!1,onAddCard:eu,paymentText:N,paymentMethods:p,closePaymentModal:X,isPaymentModalOpen:K,isDisabled:u,setPaymentModalOpen:Y,openPaymentModal:Z,ref:v,refreshAvailablePaymentMethods:h,requestedPaymentMethods:x,setSelectedPaymentMethods:b,selectedPaymentMethods:_,payNow:eS?{...eS,monetaryValue:{...eS.monetaryValue,value:String(eS.monetaryValue.value)}}:null,location:w,isLoadingPaymentMethods:c}),!!I&&!c&&!R&&(0,i.jsx)(tV.T,{extraPaymentInformationWhenAddedCard:N}),(0,i.jsx)(s.L0,{name:"B2C_LOYALTY_BOOKING_FLOW_WEB",disabled:w?.hasPromoCodes?(0,i.jsx)(tM.E,{display:{default:"none",laptop:"block"},children:(0,i.jsx)("div",{children:(0,i.jsx)(na.V,{usedPromotionCode:k?.usedPromotionCode,updateReservationPromotionCode:B})})}):null,enabled:(0,i.jsx)(t9.i,{reservation:k})}),!!Q&&_?.card?.id!==Q.id&&(0,i.jsx)(ez.H,{variant:"accentFaded",children:(0,i.jsxs)(ex.H,{unsafeStyle:{background:"transparent"},noBorder:!0,variant:"medium",qaType:"ideal-callout",linkTo:void 0,children:[(0,i.jsx)(ex.H.Prefix,{leftSection:(0,i.jsx)(t$.Z,{brand:"ideal",size:"m"})}),(0,i.jsx)(ex.H.Content,{children:(0,i.jsx)(em.k,{direction:"vertical",justifyContent:"center",children:(0,i.jsx)(ef.x,{font:"header-xs-semibold",children:(0,t1.__)("iDEAL now available")})})}),(0,i.jsx)(ex.H.Suffix,{leftSection:(0,i.jsx)(y.z,{shape:"pill",variant:"secondary",onAction:()=>b({card:Q}),linkTo:void 0,children:(0,t1.__)`Select`})})]})}),O?(0,i.jsx)(ni.F,{title:O.title,content:O.content,termsAndConditionsTitle:O.termsAndCondition.title,termsAndContitionsContent:O.termsAndCondition.content}):null,L?(0,i.jsx)(nr.Z,{title:L.title,content:L.formattedContent}):null,w?.marketplaceInfo?(0,i.jsx)(nr.Z,{title:(0,t1.__)("Important info"),content:w?.marketplaceInfo}):null,E?(0,i.jsx)(tE.X,{description:(0,i.jsx)(tG.U,{as:"span",children:E.formattedPolicyMessage}),hasIcon:!1,qaType:"patch-test-banner-warning",variant:"warning"}):null,(0,i.jsx)(tM.E,{display:{default:"block",laptop:"block"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)(ef.x,{font:"header-s-semibold",mb:"200",children:(0,t1.__)("Booking notes")}),(0,i.jsx)(tz.K,{placeholder:(0,t1.__)("Include comments or requests about your booking"),label:(0,t1.__)("Booking notes"),isLabelHidden:!0,"aria-hidden":!0,value:a,onChange:e_})]})})]}),(0,i.jsx)(ne.Z,{onClose:z,onOpen:W,isOpen:H,setOpen:q,onChange:g,initialValue:a}),(0,i.jsx)(tU.r,{isOpen:ei,onContinueAction:eg,close:er}),O?(0,i.jsx)(nn.H,{deposit:O,handleDepositPaid:ep,paymentMethod:d&&_?nb(_):{brand:J?.brand||"",description:J?.redactedCardNumber||""}}):null,L?(0,i.jsx)(nt.Z,{onClose:$,onOpen:V,isOpen:U,setOpen:G,onAccept:el,content:L.formattedContent,title:L.title}):null,k?.id?(0,i.jsx)(s.L0,{name:"B2C_LOYALTY_BOOKING_FLOW_WEB",enabled:(0,i.jsx)(t8.k$,{reservationId:k.id})}):null]})})},nv=e=>{let{location:t}=(0,tO.l)(),{reservation:n,errors:r,subscriptionVariables:l}=nf(),[c,u]=(0,o.useState)(""),{trigger:m}=(0,a.pk)(t7.n),p=(0,o.useCallback)(async e=>{let{payments:t}=e;if(!n?.id)throw Error("Tried to initialise payment without reservation");let{result:i,errors:o}=await m({notes:c,payments:t,reservationId:n.id});return{data:i?.confirmReservationWithTransactions?.payment,errors:o}},[c,n?.id,m]),f=n?.protectionStrategy===e9.Qn.Deposit,h="string"==typeof n?.protectionStrategy&&"PAY_AT_STORE"!==n.protectionStrategy&&t?.slug,x=f?e9.Vt.BookingFlow:e9.Vt.Cwc,{data:g,isLoading:_,mutate:b}=(0,a.aT)(h?tY.d:null,{scope:x,slug:t?.slug,amount:n?.payNow?.monetaryValue?.value}),y=f&&n?.payAtVenue?.monetaryValue?.value!==0,v=(0,s.a3)("B2C_RECURRING_CHECKOUT_COM_APPLE_PAY"),j=g?.availablePaymentMethods?.find(e=>e?.__typename==="PaymentCardOnFile"),S=t?.paymentProvider?.type??e9.h7.Adyen,w=(0,o.useMemo)(()=>{let e=S===e9.h7.Adyen||S===e9.h7.Checkout&&!!v||!!j||!y;return g?.availablePaymentMethods?.filter(t=>t?.__typename!=="PaymentApplePay"||e).filter(e=>f||e?.__typename!=="PaymentProviderAccount"&&e?.__typename!=="PaymentFreshaAccount")??[]},[g,f,y,j,S,v]),k=Number(n?.payNow?.monetaryValue?.value||1),A=(0,o.useCallback)(async e=>{if(!n?.id)return;let t=await (0,t0.B)(t7.V,{excludedPayments:e,reservationId:n?.id});if(t.errors)throw 1===t.errors.length?t.errors[0]:t.errors;return t.data.outstandingBalanceForReservation?.balance??void 0},[n?.id]),C=n_({isDepositRequired:f});return(n||r.length)&&t?(0,i.jsx)(tK.H,{amount:k,applePayLabel:(0,t1.__)`Upfront payment`,currency:n?.payNow?.monetaryValue?.currency??"",countryCode:t?.address?.countryCode??"",getOutstandingBalance:A,initialisePayment:p,isLoadingPaymentMethods:_,isPaid:e=>d.vz(ns._O,e.reservation)?.status===e9.Jr.Confirmed,onPaid:C,provider:t?.paymentProvider?.type??e9.h7.Adyen,paymentMethods:w,subscription:l.id?ns.tA:null,subscriptionVariables:l,validateSelectedPaymentMethodsVariables:{locationSlug:t?.slug,scope:x},children:t=>{let{canMakePayment:n,handleError:o,hasMadePayment:a,isLoading:r,isPaymentSelectionDisabled:s,makePayment:l,paymentMethods:d,requestedPaymentMethods:m,selectedPaymentMethods:p,setSelectedPaymentMethods:h}=t;return(0,i.jsx)(ny,{...e,bookingNotes:c,canMakePayment:n,handlePaymentError:o,isDepositRequired:f,isLoadingPaymentMethods:r,isPaymentSelectionDisabled:s,hasMadePayment:a,makePayment:l,onConfirmed:C,paymentMethods:d,refreshAvailablePaymentMethods:b,requestedPaymentMethods:m,selectedPaymentMethods:p,setSelectedPaymentMethods:h,setBookingNotes:u})}}):(0,i.jsx)(eC,{})},nj=e=>{let{layout:t,screen:n}=e,{reservation:a}=nf(),r=(0,o.useMemo)(()=>a?.status==="EXPIRED"?t:{...t,cart:{...t.cart,attendees:t.cart.attendees.map(e=>({...e,items:e.items.map(e=>{let t=a?.items?.find(t=>t.name===e.name);return{...e,price:{formatted:t?.formattedRetailPrice??e.price.formatted},priceWithoutDiscounts:t?.formattedNonDiscountedPrice?{formatted:t.formattedNonDiscountedPrice}:e.priceWithoutDiscounts}})})),subtotal:a?.formattedSubtotal?{formatted:a.formattedSubtotal}:null,discountsTotal:a?.formattedTotalDiscount?{formatted:a.formattedTotalDiscount}:null,priceTotal:a?.formattedTotalPrice?{formatted:a.formattedTotalPrice}:t.cart.priceTotal,...a?.formattedTotalTax&&{taxTotal:{formatted:a.formattedTotalTax}}}},[t,a]);return(0,i.jsx)(nv,{layout:r,screen:n})},nS=e=>{let{data:t}=e,{layout:n,screenConfirm:r}=(0,d.vz)(M,t);if("BookingFlowScreenConfirm"!==r.__typename)return null;let{locationSlug:s,locationProviderId:l}=ei(),{sendProviderPixelEvent:c}=nc(),{data:u,isValidating:m,mutate:p}=(0,a.aT)(tN.sv,{slug:s});return(0,o.useEffect)(()=>{c({name:"AddPaymentInfo"})},[]),(0,i.jsx)(tO.v,{refetch:p,location:u?.location,isLoading:m,children:(0,i.jsx)(np,{reservationId:r.reservationId,locationProviderId:l,children:(0,i.jsx)(nj,{layout:n,screen:r})})})};var nw=n(760604);let nk=e=>{let{data:t}=e,{screenCustomerBlocked:n}=(0,d.vz)(E,t);return"BookingFlowScreenCustomerBlocked"!==n.__typename?null:(0,i.jsx)(ea,{icon:e$.P4w,header:(0,j.__)("Booking unavailable"),description:n.message,actionSlot:(0,i.jsx)(y.z,{size:"m",variant:"primary",linkTo:nw.mo,children:(0,j.__)("Discover similar locations")})})},nA=e=>{let{data:t}=e,{layout:n,screenEmployee:o}=(0,d.vz)(z,t);if("BookingFlowScreenEmployee"!==o.__typename)return null;let a=eo(o.backAction),r=eo(o.continueAction),s=!(0,tm.G)("laptop");return(0,i.jsx)(tR,{title:o.title,description:o.description,continueAction:r,backAction:a,data:n,withCartSummaryBar:!s,children:(0,i.jsx)(eK,{tiles:o.tiles,shouldAutoContinue:s})})};var nC=n(888043),nB=n.n(nC);let nF=e=>{let t=eo({id:e.action?.id,isDisabled:e.isDisabled,label:e.label},{shouldAutoContinue:e.shouldAutoContinue});return(0,i.jsx)(eJ.o.Item,{variant:"medium",isChecked:!!e.isSelected,isDisabled:!!t.isDisabled,onAction:t.onAction,value:t.label,unsafeClassName:nB()["choice-list-item"],children:n=>{let{labelProps:o,descriptionProps:a}=n;return t.isPending?(0,i.jsx)(eH.c.Loader,{variant:"secondary"}):(0,i.jsxs)(em.k,{direction:"vertical",gap:"25",children:[(0,i.jsx)(ef.x,{...o,font:"body-m-medium",children:t.label}),(0,i.jsx)(ef.x,{...a,font:"body-s-regular",color:"neutralFaded",children:e.caption})]})}})},nT=()=>{},nI=e=>{let{data:t}=e,{layout:n,screenFirstVisit:o}=(0,d.vz)(H,t);if("BookingFlowScreenFirstVisit"!==o.__typename)return null;let a=eo(o.backAction),r=eo(o.continueAction),s=!(0,tm.G)("laptop");return(0,i.jsx)(tR,{title:o.title,description:o.description,backAction:a,continueAction:r,data:n,withCartSummaryBar:!s,children:(0,i.jsx)(eJ.o,{name:"first-visit-check-options",value:null,onChange:nT,choiceType:"single",gap:"150",children:o.choices.map(e=>(0,i.jsx)(nF,{...e,shouldAutoContinue:s},e.label))})})};var nD=n(19054);let nR=e=>{let{attendee:t,index:n}=e,o=(0,tm.G)("laptop"),a=eo(t.editServicesAction),r=eo(t.removeGuestAction);return(0,i.jsxs)(ex.H,{variant:"low",children:[(0,i.jsx)(ex.H.Prefix,{leftSection:(0,i.jsx)(eQ.q,{firstName:0===n?t.displayName:"",src:t.avatar?.url,size:"l"})}),(0,i.jsx)(ex.H.Content,{children:(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ef.x,{font:"body-m-semibold",mb:"25",children:t.displayName}),(0,i.jsx)(ef.x,{font:"body-s-medium",children:t.caption})]})})}),(0,i.jsx)(ex.H.Suffix,{rightSection:(0,i.jsx)(nD.L,{placement:"bottom end",triggerComponent:e=>{let{triggerRef:t,menuTriggerProps:n}=e;return o?(0,i.jsx)(y.z,{variant:"secondary",shape:"pill",size:"m",suffix:(0,i.jsx)(y.z.IconAffix,{icon:e$.v4q}),...n,ref:t,children:(0,j.gl)("Make changes to guest in group booking","Options")}):(0,i.jsx)(y.z,{icon:e$.SVL,isLabelHidden:!0,...n,ref:t,type:"button",variant:"tertiary",children:(0,j.gl)("Make changes to guest in group booking","Options")})},children:(0,i.jsxs)(nD.L.List,{children:[(0,i.jsx)(nD.L.Item,{onAction:a.onAction,textValue:a.label,color:"default",children:(0,i.jsx)(nD.V.Inline,{title:a.label})}),r?(0,i.jsx)(nD.L.Item,{onAction:r.onAction,textValue:r.label,color:"destructive",children:(0,i.jsx)(nD.V.Inline,{title:r.label})}):null]})})})]})},nP=e=>{let{data:t}=e,{layout:n,screenGuestsAndServices:o}=(0,d.vz)(q,t);if("BookingFlowScreenGuestsAndServices"!==o.__typename)return null;let a=eo(o.addGuestAction),r=eo(o.backAction),s=eo(o.continueAction);return(0,i.jsx)(tR,{title:o.title,description:o.description,backAction:r,continueAction:s,data:n,children:(0,i.jsxs)(em.k,{direction:"vertical",gap:"300",children:[(0,i.jsx)(em.k,{direction:"vertical",gap:{default:"0",laptop:"150"},children:o.attendees.map((e,t)=>(0,i.jsx)(nR,{attendee:e,index:t},`${e.displayName}_${e.caption}`))}),a?(0,i.jsx)(ef.x,{font:"link-m-medium",children:(0,i.jsx)(y.z,{onAction:a.onAction,isDisabled:a.isDisabled,icon:e$.pOD,iconPosition:"left",variant:"secondary",shape:"pill",children:a.label})}):null]})})},nN=e=>{let{data:t}=e,{layout:n,screenMultiEmployee:o}=(0,d.vz)(W,t);if("BookingFlowScreenMultiEmployee"!==o.__typename)return null;let a=eo(o.backAction),r=eo(o.continueAction);return(0,i.jsx)(tR,{title:o.title,description:o.description,backAction:a,continueAction:r,data:n,children:(0,i.jsx)(e5,{tiles:o.attendees})})},nO=()=>{},nL=e=>{let{data:t}=e,{layout:n,screenPatchTest:o}=(0,d.vz)($,t);if("BookingFlowScreenPatchTest"!==o.__typename)return null;let a=eo(o.backAction),r=eo(o.continueAction),s=!(0,tm.G)("laptop");return(0,i.jsx)(tR,{title:o.title,description:o.description,backAction:a,continueAction:r,data:n,withCartSummaryBar:!s,children:(0,i.jsx)(eJ.o,{name:"valid-patch-test-check-options",value:null,onChange:nO,choiceType:"single",gap:"150",children:o.choices.map(e=>(0,i.jsx)(nF,{...e,shouldAutoContinue:s},e.label))})})};var nM=n(485563),nE=n(956224),nz=n(112628),nH=n(850308),nq=n.n(nH),nW=n(826246),n$=n(899760),nU=n(81880),nG=n(194239),nV=n(924899),nX=n(916399),nK=n.n(nX);let nY=[],nZ=e=>{let{tile:t}=e,n=eo("id"in t?{id:t.id}:null);return(0,i.jsx)(ex.H,{variant:"medium",linkTo:"url"in t?t.url:void 0,onAction:n?.onAction,children:(0,i.jsxs)(ex.H.Content,{children:[(0,i.jsx)(ef.x,{font:"body-m-medium",mb:"25",children:t.title}),(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",children:t.caption})]})},t.title)},nJ=e=>{let{text:t,url:n}=e;return(0,i.jsxs)(ex.H,{linkTo:n,variant:"high",unsafeClassName:nK().upsellMembershipBanner,children:[(0,i.jsx)(ex.H.Prefix,{leftSection:(0,i.jsx)(e$.Que,{})}),(0,i.jsx)(ex.H.Content,{children:(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)(ef.x,{font:"body-s-regular",children:(0,i.jsx)(eN,{children:t})})})}),(0,i.jsx)(ex.H.Suffix,{rightSection:(0,i.jsx)(e$.XCv,{})})]})},nQ=o.memo(e=>{let{name:t,description:n}=e;return(0,i.jsxs)(em.k,{gap:"50",unsafeClassName:nK().offerItemsList__headerWrapper,direction:"column",children:[(0,i.jsx)(ef.x,{font:{default:"header-s-semibold",laptop:"header-m-semibold"},overflow:"break",children:t}),n?(0,i.jsx)(ef.x,{font:"body-m-regular",overflow:"break",unsafeClassName:nK().offerItemsList__headerDescription,children:n}):null]})}),n0=o.memo(e=>{let{item:t,onItemIntersectionIn:n,onItemIntersectionOut:a}=e,r=(0,o.useRef)(null),s=eo(t.primaryAction),l=eo(t.secondaryAction);(0,nU.Or)(r,{onShow:()=>n(t),onHide:()=>a(t)});let d=(0,tm.G)("tablet");return(0,i.jsxs)("div",{className:(0,eF.default)(nK().offerItemsList__item,t.isLast&&nK()["offerItemsList__item--last"]),children:[(0,i.jsx)("div",{ref:r,children:(0,i.jsx)(eJ.o.Item,{isChecked:t.isSelected,variant:"low",primitiveType:"cumulative",value:t.name,primitiveActionText:s.label,onAction:s.onAction,isDisabled:s.isDisabled,onPrimitiveAction:l.onAction,qaType:"offer-item",children:e=>{let{labelProps:n,descriptionProps:o}=e;return(0,i.jsxs)("div",{className:nK().content,children:[(0,i.jsx)(ef.x,{as:"h3",mb:"25",...n,font:"body-m-medium",overflow:"break",qaType:"offer-item-name",children:t.name}),(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",mb:"25",qaType:"offer-item-caption",children:t.caption}),t.description?(0,i.jsx)(ef.x,{...o,color:"neutralFaded",font:"body-s-regular",noWrap:!0,overflow:"ellipsis",qaType:"offer-item-description",children:t.description}):null,(0,i.jsxs)(e3.K,{as:"span",gap:"100",direction:"horizontal",unsafeClassName:nK().pricing,children:[(0,i.jsx)(ef.x,{font:"body-s-medium",qaType:"offer-item-price",children:t.price.formatted}),t.discount?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ef.x,{font:"body-s-medium",color:"neutralFaded",children:" \xa0•\xa0 "}),(0,i.jsx)(ef.x,{font:"body-s-regular",color:"positive",qaType:"offer-item-discount",children:t.discount})]}):null]}),t.membershipChip?(0,i.jsx)("div",{children:(0,i.jsx)(y.z,{variant:"secondary",shape:"pill",size:"m",unsafeClassName:nK().membership,children:t.membershipChip})}):null]})}})}),d&&t.membershipUpsellingCallout?(0,i.jsx)("div",{className:nK().membership,children:(0,i.jsx)(nJ,{text:t.membershipUpsellingCallout.text,url:t.membershipUpsellingCallout.url})}):null]})}),n1=(e,t,n)=>"category"===t.__typename?(0,i.jsx)(nQ,{name:t.name,description:t.description}):"item"===t.__typename?(0,i.jsx)(n0,{item:t,onItemIntersectionIn:n.onItemIntersectionIn,onItemIntersectionOut:n.onItemIntersectionOut}):null,n4=e=>{let{data:t}=e,{layout:n,screenServices:a}=(0,d.vz)(U,t);if("BookingFlowScreenServices"!==a.__typename)return null;let r=a.categories,s=(0,o.useRef)(null),l=(0,o.useRef)(!1),c=(0,tm.G)("tablet"),{locationSlug:u}=ei(),[m,f]=(0,o.useState)(!1),[h,x]=(0,o.useState)(!0),[g,_]=(0,o.useState)(!1),b=(0,o.useRef)(new Set),[y,v]=(0,o.useState)(a.categories[0]?.name??null),[j,S]=(0,o.useState)(!1),[w,k]=(0,o.useState)(0),[A,C]=(0,o.useState)(0),B=(0,o.useRef)(null),F=(0,o.useRef)({}),{addErrorToast:T}=(0,p.e)(),I=(0,nG.zC)();(0,nG.nv)({marketingToken:I,slug:u,onError:e=>T(e,{size:"expanded"})});let D=(0,o.useCallback)(e=>()=>{if(B.current){let t=B.current.scrollLeft+("left"===e?-1:1)*B.current.clientWidth/2;B.current?.scrollTo({left:t,behavior:"smooth"})}return Promise.resolve()},[]),{selectionIndicatorProps:R,listContainerProps:P}=(0,nM.Q)(B,y||""),N=(0,o.useMemo)(()=>{let e=0,t=[];return r.forEach(n=>{let{items:i,...o}=n;t.push({...o,index:e,__typename:"category"}),i.forEach((n,i,a)=>{e++,t.push({...n,categoryName:o.name,isLast:i===a.length-1,index:e,__typename:"item"})}),e++}),t},[r]),O=e=>{let t=N.findIndex(t=>"category"===t.__typename&&t.name===e)||0;0===t?s.current?.scrollTo({behavior:"auto",top:-2*164}):s.current?.scrollToIndex({index:t,behavior:"auto",offset:-164}),t===r.length-1&&(l.current=!0),v(e)},L=(0,o.useCallback)(e=>{l.current||v(e.categoryName),b.current.add(e.index)},[]),M=(0,o.useCallback)(e=>{b.current.delete(e.index)},[]),E=(0,o.useMemo)(()=>N.filter(e=>"item"===e.__typename&&e.isSelected).map(e=>e.index).sort((e,t)=>e-t),[N]),z=(0,o.useCallback)(e=>(("string"==typeof e.index||"number"==typeof e.index&&e.index>=0)&&s.current?.scrollToIndex({align:"center",behavior:"smooth",...e}),Promise.resolve()),[]),H=(0,o.useRef)(void 0);if(void 0===H.current){let e=N.findIndex(e=>"item"===e.__typename&&e.isSelected);e>=0?H.current={index:e,align:"center",behavior:"auto"}:H.current=0}let q=(0,o.useCallback)(()=>{let e=Math.min(...b.current);return z({index:E.reverse().find(t=>t<e)||0})},[E,z]),W=(0,o.useCallback)(()=>{let e=Math.max(...b.current);return z({index:E.find(t=>t>e)||"LAST"})},[E,z]),$=(0,o.useCallback)(e=>{let t=Math.min(...b.current),n=Math.max(...b.current);return k(E.filter(e=>e<t).length),C(E.filter(e=>e>n).length),S(e)},[E]),G=(0,o.useCallback)(e=>{l.current=e,e&&r.length>0&&v(r[r.length-1].name)},[r]);(0,o.useEffect)(()=>{let e=B.current,t=F.current[y||""];e&&t&&e.scrollTo({left:t.offsetLeft})},[y]);let V=(0,o.useCallback)(e=>{e&&(B.current=e)},[]),X=eo(a.continueAction),K=eo(a.backAction);return(0,i.jsxs)(tR,{title:a.title,description:a.description,continueAction:X,backAction:K,data:n,withShadowOnScroll:c&&r.length>1,withSidePadding:!1,children:[a.sectionSelectedEmployee?(0,i.jsx)(tM.E,{display:{default:"flex",laptop:"none"},children:(0,i.jsx)("div",{className:nK().selectedStaffRow,children:(0,i.jsxs)(ex.H,{qaType:"selected-staff-row-on-mobile-time-step",children:[(0,i.jsx)(ex.H.Prefix,{rightSection:(0,i.jsx)(eq.X,{firstName:"",src:a.sectionSelectedEmployee.avatar?.url??void 0,rating:a.sectionSelectedEmployee.rating??void 0,size:"2xl"})}),(0,i.jsx)(ex.H.Content,{children:(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsxs)(em.k,{direction:"vertical",children:[(0,i.jsx)(ef.x,{font:"body-s-semibold",qaType:"employee-first-name",children:a.sectionSelectedEmployee.name}),a.sectionSelectedEmployee.title?(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutralFaded",qaType:"employee-title",children:a.sectionSelectedEmployee.title}):null]})})})]})})}):null,(0,i.jsxs)(nU.ck,{children:[(0,i.jsx)(nU.Xu,{className:nK().tabsStructureAnchor,onShow:()=>_(!1),onHide:()=>_(!0)}),a.sectionCurrentAttendee&&(0,i.jsxs)(ex.H,{unsafeClassName:nK().guestRow,children:[(0,i.jsx)(ex.H.Prefix,{leftSection:(0,i.jsx)(eQ.q,{firstName:a.sectionCurrentAttendee.initials?.[0]??"",src:a.sectionCurrentAttendee.avatarUrl??void 0,size:"l"})}),(0,i.jsx)(ex.H.Content,{children:(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)(em.k,{direction:"vertical",children:(0,i.jsx)(ef.x,{font:"body-m-semibold",children:a.sectionCurrentAttendee.name})})})})]}),r.length>1&&(0,i.jsx)("div",{className:(0,eF.default)(nK().tabsStructure,g&&nK()["tabsStructure--scrolled"]),children:(0,i.jsxs)(nE.F,{variant:"pill",backgroundVariant:"onPage",children:[(0,i.jsx)(nE.F.ScrollShadow,{location:"start",visible:!h&&m}),(0,i.jsxs)(nE.F.Rail,{padding:"responsive",ref:V,children:[(0,i.jsx)(nU.Xu,{onShow:()=>x(!0),onHide:()=>x(!1)}),(0,i.jsx)(nE.F.SelectionIndicator,{...R}),(0,i.jsx)(nE.F.ListContainer,{...P,children:r.map(e=>{let{name:t}=e;return(0,i.jsx)("li",{children:(0,i.jsx)(nE.F.Item,{ref:e=>{e&&(F.current[t]=e)},"aria-selected":y===t,onClick:()=>O(t),unsafeClassName:nK().tabsStructure__button,children:t})},t)})}),(0,i.jsx)(nU.Xu,{onShow:()=>f(!0),onHide:()=>f(!1)})]}),(0,i.jsx)(nE.F.ScrollShadow,{location:"end",visible:!m}),m&&h?null:(0,i.jsx)(nE.F.ChevronControls,{prevAction:D("left"),nextAction:D("right"),isPrevDisabled:h,isNextDisabled:m})]})})]}),w>0&&(0,i.jsx)("div",{className:(0,eF.default)(nK().selectionOffscreenContainer,nK().selectionOffscreenAbove),children:(0,i.jsxs)(nz.Y,{id:"button-scroll-up",className:(0,eF.default)(j&&nK().selectionOffscreenScrolling,nK().selectionOffscreenButton),onAction:q,excludeFromTabOrder:!0,children:[(0,i.jsx)(ef.x,{font:"body-s-regular",color:"accent",children:(0,t1.dw)("%{numberOfSelectionsAbove} selected service","%{numberOfSelectionsAbove} selected services",w,{numberOfSelectionsAbove:w})}),(0,i.jsx)(e$.Hf3,{color:"accent"})]})}),(0,i.jsx)(nU.ck,{rootMargin:"-164px 0px 0px 0px",children:(0,i.jsx)("div",{className:nK().offerItemsList,children:(0,i.jsx)(eJ.o,{name:"services-choice-list",gap:"0",value:nY,onChange:nq(),choiceType:"multiple",children:(0,i.jsx)(nW.OO,{initialTopMostItemIndex:H.current,atBottomStateChange:G,atBottomThreshold:328,context:{onItemIntersectionIn:L,onItemIntersectionOut:M},data:N,isScrolling:$,itemContent:n1,overscan:{reverse:window.innerHeight,main:0},ref:s,useWindowScroll:!0})})})}),a.sectionUpselling?(0,i.jsxs)("div",{className:nK().upsellingSection,children:[(0,i.jsx)(ef.x,{font:"header-m-semibold",children:a.sectionUpselling.title}),(0,i.jsx)(e3.K,{as:"ul",gap:"150",direction:"vertical",children:a.sectionUpselling.tiles.map(e=>(0,i.jsx)(nZ,{tile:e},e.title))})]}):null,(0,i.jsxs)("div",{className:nK().floatingBottomBar,children:[A>0&&(0,i.jsx)("div",{className:(0,eF.default)(nK().selectionOffscreenContainer,nK().selectionOffscreenBelow),children:(0,i.jsxs)(nz.Y,{id:"button-scroll-down",className:(0,eF.default)(j&&nK().selectionOffscreenScrolling,nK().selectionOffscreenButton),onAction:W,excludeFromTabOrder:!0,children:[(0,i.jsx)(ef.x,{font:"body-s-regular",color:"accent",children:(0,t1.dw)("%{numberOfSelectionsBelow} selected service","%{numberOfSelectionsBelow} selected services",A,{numberOfSelectionsBelow:A})}),(0,i.jsx)(e$.veu,{color:"accent"})]})}),!c&&a.sectionMembershipUpselling?(0,i.jsx)(nJ,{text:a.sectionMembershipUpselling.text,url:a.sectionMembershipUpselling.url}):null]}),(0,i.jsx)(n$.r,{children:(0,i.jsx)(nV.N,{locationSlug:u})})]})};var n6=n(851189),n5=n.n(n6),n2=n(639086),n8=n.n(n2),n3=n(926528),n9=n(434545),n7=n(998692),ie=n(100990),it=n(821995),ii=n(780933),io=n(135890),ia=n(606005),ir=n(885142);let is=e=>{let{scrollableContainerRef:t,handleScrollChange:n,prevScrollPosition:i}=e,[a,r]=(0,o.useState)(()=>({canScrollPrev:!1,canScrollNext:!0})),s=(0,o.useCallback)((e,n)=>{if(t.current){let i=(t.current?Array.from(t.current.querySelectorAll("[data-item]")):[]).find(t=>t.dataset.isoDate===e);i?.scrollIntoView({behavior:n||"smooth",block:"end",inline:"start"})}return Promise.resolve()},[t]),l=(0,o.useCallback)(()=>{if(t.current){let{scrollLeft:e,scrollWidth:n,offsetWidth:o}=t.current;e!==i.current&&(i.current=e),r(()=>({canScrollPrev:Math.abs(e)>0,canScrollNext:Math.ceil(Math.abs(e)+o)<n}))}},[i,t]),d=(0,o.useCallback)(()=>{n(),l()},[n,l]),c=(0,o.useMemo)(()=>(0,ia.Z)(d,{debounce:!0,interval:300}),[d]),u=(0,o.useCallback)(()=>{let e=(0,j.Kd)().getTextInfo().direction;if(t.current){let n=(Math.abs(t.current.scrollLeft)-t.current.clientWidth)*("rtl"===e?-1:1);t.current.scrollTo({left:n})}},[t]),m=(0,o.useCallback)(()=>{let e=(0,j.Kd)().getTextInfo().direction;if(t.current){let n=(Math.abs(t.current.scrollLeft)+t.current.clientWidth)*("rtl"===e?-1:1);t.current.scrollTo({left:n})}},[t]);(0,o.useEffect)(()=>{let e=t?.current;return e&&e.addEventListener("scroll",c),()=>{e&&e.removeEventListener("scroll",c)}},[c,t]);let p=(0,o.useRef)(null),f=(0,ir.f)(()=>{d()}),h=(0,ir.f)(()=>(0,ia.Z)(()=>{p.current&&window.cancelAnimationFrame(p.current),p.current=window.requestAnimationFrame(f)},{debounce:!0,interval:300}));return(0,io.y)({onResize:h,ref:t}),{...a,scrollToTile:s,scrollPrev:u,scrollNext:m}};var il=n(278143),id=n.n(il);let ic=d.BX.persisted("sha256:69a523ec006114fb88e6b5cc47e757a8adef7ce97b110b222b5143fd058ca8c3",(0,d.BX)(`
      mutation BookingFlowScreenTimeOnScrollEnd($input: BookingFlowScreenTimeOnScrollEndInput!) {
        bookingFlowScreenTimeOnScrollEnd(input: $input) {
          ...BookingFlowRootFragment
        }
      }
    `,[Z])),iu=()=>{},im=e=>{let{text:t}=e,[n,a]=(0,o.useState)(t),[r,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(t!==n){s(!0);let e=setTimeout(()=>{a(t),s(!1)},500);return()=>clearTimeout(e)}},[t,n]),(0,i.jsx)("div",{children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:(0,eF.default)(id()["text-fade-animation"],id()["text-fade-out"]),children:n}),(0,i.jsx)("span",{className:(0,eF.default)(id()["text-fade-animation"],id()["text-fade-in"]),children:t})]}):(0,i.jsx)("span",{children:n})})},ip=e=>{let{data:t,onAction:n,isSelected:a}=e,r=eo({id:t.action?.id}),s=t.isLoading||r.isDisabled,l=(0,o.useCallback)(()=>{if(!s)return n(),r?.onAction()},[n,s,r?.onAction]);return(0,i.jsx)(n3.v,{dayName:t.date.dayNameShort,dayNumber:t.date.dayOfMonth,size:"default",variant:"default",hasDeal:t.icon,isSelected:a,isUnavailable:!a&&!t.isAvailableToBeBooked,isPending:!a&&s,onAction:l,useShortHandDayName:!1})},ih=e=>{let{data:t,selectedDate:n,setSelectedDate:r,setIsLoadingTimeSlots:s}=e,{mutate:l,locationSlug:c}=ei(),{trigger:u}=(0,a.pk)(ic),m=(0,o.useRef)(null),p=(0,o.useRef)(null),f=(0,o.useRef)(0),[h,x]=(0,o.useState)(n),g=(0,o.useRef)(!n),_=(0,o.useCallback)(()=>{let e=function(e,t){if(!e.current)return null;let n=e.current.scrollWidth,i=e.current.clientWidth,o=e.current.scrollLeft,a=n/t.length;return{leftMostDate:t[Math.floor(o/a)],rightMostDate:t[Math.floor((o+i-a)/a)]}}(m,t);e?.leftMostDate&&(x(e.leftMostDate),e.rightMostDate&&(e.leftMostDate.isLoading||e.rightMostDate.isLoading)&&l(async()=>{let t=await u({input:{leftMostDate:e.leftMostDate.date.iso.split("T")[0],locationSlug:c}});return(0,d.vz)(ic,t.result.bookingFlowScreenTimeOnScrollEnd)},{shouldDisableUI:!1}))},[t,u,c,l]),{scrollPrev:b,scrollNext:v,scrollToTile:S,canScrollPrev:w,canScrollNext:k}=is({scrollableContainerRef:m,handleScrollChange:_,prevScrollPosition:f});return(0,o.useEffect)(()=>{n&&(S(n.date.iso,g.current?"smooth":"instant"),g.current=!0)},[n,S]),(0,i.jsxs)("div",{className:(0,eF.default)(id().dateCarousel,id()["fade-animation"]),children:[(0,i.jsx)("div",{className:id().buttons,children:(0,i.jsxs)(n9.h,{children:[(0,i.jsx)(y.z,{size:"m",variant:"tertiary",onAction:()=>(b(),Promise.resolve()),isLabelHidden:!0,isDisabled:!w,icon:e$.wyc,children:(0,j.__)`Go to earlier date`}),(0,i.jsx)(y.z,{type:"button",size:"m",variant:"tertiary",onAction:()=>(v(),Promise.resolve()),isDisabled:!k,isLabelHidden:!0,icon:e$.XCv,children:(0,j.__)`Go to later date`})]})}),(0,i.jsx)("div",{className:(0,eF.default)(id().monthName,id()["fade-animation"]),children:h?(0,i.jsx)(ef.x,{as:"span",font:"header-xs-semibold",unsafeClassName:id().monthNameText,children:(0,i.jsx)(im,{text:h.date.monthAndYearFormatted})}):null}),(0,i.jsx)("div",{ref:m,className:(0,eF.default)(id().scrollable,id()["fade-animation"]),children:(0,i.jsx)("div",{className:id().scrollableInner,ref:p,children:t.map(e=>(0,i.jsx)("div",{"data-item":!0,"data-iso-date":e.date.iso,"data-selected":e.isSelected,className:id().tileWrapper,children:(0,i.jsx)(ip,{data:e,onAction:()=>{s(!0),r(e)},isSelected:e.date.iso===n?.date.iso},e.date.iso)},e.date.iso))})})]})},ix=e=>{let{data:t,index:n}=e,o=(0,tm.G)("tablet"),a=(0,tm.G)("laptop"),r=eo({id:t.action?.id},{shouldAutoContinue:!a});return(0,i.jsx)(eJ.o.Item,{value:t.time,onAction:r.onAction,isDisabled:r.isDisabled,isChecked:t.isSelected,variant:"low",unsafeClassName:id()["stack-animation"],unsafeStyle:{minHeight:a?"65px":"auto","--animation-order":n+1},children:()=>r.isPending?(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)("div",{style:{height:"10px"},children:(0,i.jsx)(eH.c.Loader,{variant:"secondary"})}),unsafeStyle:a?void 0:{paddingTop:"11px",paddingBottom:"11px"}}):(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)(ef.x,{font:"body-m-medium",children:t.time}),rightSection:(0,i.jsxs)(em.k,{gap:"100",direction:"horizontal",alignItems:"center",children:[t.highDemandLabel?(0,i.jsx)(ef.x,{font:"body-s-regular",color:"ghost",children:t.highDemandLabel}):null,t.discount?(0,i.jsx)(em.k,{padding:["0","50","0","0"],children:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"positive",children:t.discount})}):null,t.priceWithoutDiscount?(0,i.jsx)(ef.x,{font:"body-m-regular",color:"ghost",unsafeStyle:{textDecoration:"line-through"},children:t.priceWithoutDiscount.formatted}):null,t.price?(0,i.jsx)(ef.x,{font:"body-m-medium",children:t.price.formatted}):null,o?null:(0,i.jsx)("div",{...n7.O.getWrapperProps({isChecked:!0}),style:{display:t.isSelected?"block":"none"},children:(0,i.jsx)("div",{...n7.O.getPrimitiveProps(),style:{height:"24px",width:"24px"},children:(0,i.jsx)(n7.O.Primitive,{isChecked:!0})})})]}),unsafeStyle:a?void 0:{paddingTop:"4px",paddingBottom:"4px"}})},t.time)},ig=e=>{let{data:t}=e;return(0,o.useEffect)(()=>{document.querySelector('input[type="radio"]:checked')?.scrollIntoView({block:"center",behavior:"smooth"})},[]),(0,i.jsxs)(em.k,{direction:"vertical",gap:"400",padding:{laptop:["0","0","300","0"]},children:[(0,i.jsx)(eJ.o,{name:"time-slot-selection",value:null,onChange:iu,choiceType:"single",gap:{default:"0",laptop:"150"},unsafeClassName:(0,eF.default)(id()["fade-animation"],id().timeslots),children:t.timeslots.map((e,t)=>(0,i.jsx)(ix,{data:e,index:t},e.time))}),t.sectionJoinWaitlist?(0,i.jsx)("div",{className:(0,eF.default)(id().joinWaitlistLink),children:(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutral",children:(0,i.jsx)(eN,{children:t.sectionJoinWaitlist.textFormatted})})}):null]})},i_=e=>{let{data:t}=e,n=eo(t);return(0,i.jsx)(y.z,{variant:"secondary",shape:"pill",size:"m",onAction:n.onAction,isDisabled:n.isDisabled,children:n.label})},ib=e=>{let{data:t}=e,n=(0,tm.G)("tablet");return(0,i.jsx)("div",{className:(0,eF.default)(id().notAvailableDay,id()["fade-animation"]),children:(0,i.jsx)(g.u,{unsafeClassName:id().notAvailableDay__container,header:t.title,description:t.caption,withBorder:n,topSlot:t.employeeSelection.length>0?(0,i.jsxs)(ie.H,{size:"l",isTooltipDisabled:!0,disableElevation:!0,children:[t.employeeSelection.map(e=>(0,i.jsx)(ie.H.Item,{src:e.image?.url,firstName:e.initials},`${e.initials}-${e.image?.url}`)),t.remainingNumberOfEmployees>0?(0,i.jsx)(ie.H.MoreIndicator,{counter:t.remainingNumberOfEmployees}):null]}):(0,i.jsx)(b.E,{src:{CLOSED:n8(),NO_TIMESLOTS:n5()}[t.icon]??n5(),className:id().notAvailableDay__icon,alt:(0,j.__)`Not available time slot icon`,ratio:"1x1"}),actionSlot:t.actions.length?(0,i.jsx)(e3.K,{gap:"150",as:"div",direction:n?"horizontal":"vertical",display:"flex",unsafeClassName:id().notAvailableDay__stack,children:t.actions.map(e=>(0,i.jsx)(i_,{data:e},e.id))}):null,footer:t.sectionAdditional?(0,i.jsxs)("div",{className:(0,eF.default)(id().notAvailableDay__footer),children:[(0,i.jsx)(eh.i,{verticalGap:"200"}),(0,i.jsx)(ef.x,{font:"body-s-regular",align:"center",color:"neutralFaded",children:(0,i.jsx)(eN,{children:t.sectionAdditional})})]}):void 0})})},iy=e=>{let{data:t}=e,n=eo(t?.primaryAction);return(0,i.jsx)(y.z,{variant:"secondary",shape:"pill",size:"m",onAction:n?.onAction,isDisabled:n?.isDisabled,prefix:(0,i.jsx)(eH.c.Affix,{prefixType:"compact",size:"m",children:(0,i.jsxs)(ie.H,{size:"xs",isTooltipDisabled:!0,disableElevation:!0,children:[t.employees.length?t.employees.map(e=>(0,i.jsx)(ie.H.Item,{src:e.image?.url,firstName:e.initials},`${e.initials}-${e.image?.url}`)):(0,i.jsx)(ie.H.Item,{src:void 0,firstName:void 0}),t.remainingNumberOfEmployees>0?(0,i.jsx)(ie.H.MoreIndicator,{counter:t.remainingNumberOfEmployees}):null]})}),suffix:(0,i.jsx)(y.z.IconAffix,{icon:e$.v4q}),children:n.label})},iv=e=>{let{dates:t,selectedDateIso:n,setSelectedDate:r,setIsLoadingTimeSlots:s}=e,{isValidating:l,mutate:c}=ei(),{trigger:u}=(0,a.pk)(ee),m=(0,o.useMemo)(()=>t.find(e=>e.isAvailableToBeBooked),[t]),p=(0,o.useCallback)(e=>{let n=t.find(t=>t.date.iso.includes(e)),i=n?.action?.id;!l&&i&&(s(!0),r(n),c(async()=>{let e=await u({id:i});return(0,d.vz)(Z,e.result.bookingFlowActionButtonPressed)}))},[t,c,l,u,r,s]),f=n?new Date(n):null,h=m?new Date(m?.date.iso):null,x=t[t.length-1]?new Date(t[t.length-1].date.iso):null,g=new Date,_=(0,o.useMemo)(()=>[h?{before:h}:null,...t.filter(e=>!e.isAvailableToBeBooked).map(e=>new Date(e.date.iso.replace(/Z.*/,""))),x?{after:x}:null],[t,h,x]);return m&&(0,i.jsx)(it.B,{onChange:p,selectedDate:f||h||g,disabledDays:_,today:h||g,maxDate:x||void 0})},ij=e=>{let{data:t}=e,{layout:n,screenTime:a}=(0,d.vz)(G,t);if("BookingFlowScreenTime"!==a.__typename)return null;let[r,s]=(0,o.useState)(()=>a.dates.find(e=>e.isSelected)??null),[l,c]=(0,o.useState)(!1);(0,o.useEffect)(()=>{c(!1),s(e=>{let t=a.dates.find(e=>e.isSelected)??null;return t?.date.iso===e?.date.iso?e:t})},[a.dates]);let u=eo(a.continueAction),m=eo(a.backAction);return(0,i.jsxs)(tR,{title:a.title,description:a.description,continueAction:u,backAction:m,data:n,withSidePadding:!1,children:[(0,i.jsxs)("div",{className:id().filtersRow,children:[a.employeeSelection?(0,i.jsx)(iy,{data:a.employeeSelection}):null,(0,i.jsx)(iv,{dates:a.dates,setSelectedDate:s,setIsLoadingTimeSlots:c,selectedDateIso:r?.date.iso})]}),a.patchTestCalloutBanner?(0,i.jsx)("div",{className:id().patchTestCalloutBanner,children:(0,i.jsx)(tE.X,{description:(0,i.jsx)(eN,{children:a.patchTestCalloutBanner.message}),hasIcon:!1,variant:"warning"})}):null,(0,i.jsx)("div",{className:id().carousel,children:(0,i.jsx)(ih,{data:a.dates,selectedDate:r,setSelectedDate:s,setIsLoadingTimeSlots:c})}),l?(0,i.jsx)(ii.hG,{}):(0,i.jsxs)(i.Fragment,{children:["BookingFlowScreenTimeDayUnavailable"===a.day.__typename?(0,i.jsx)(ib,{data:a.day}):null,"BookingFlowScreenTimeDayAvailable"===a.day.__typename?(0,i.jsx)(ig,{data:a.day}):null]})]})},iS=e=>{let{data:t}=e,{screenUnrecoverableError:n}=(0,d.vz)(V,t);return"BookingFlowScreenUnrecoverableError"!==n.__typename?null:(0,i.jsx)(er,{})};var iw=n(543837),ik=n(354197),iA=n(75618),iC=n.n(iA);let iB=d.BX.persisted("sha256:faf3555a06b2bef3d7dc77ddf995734cc3694bb485b57bcfb2ea6103040d522e",(0,d.BX)(`
      mutation BookingFlowScreenWaitlistConfirmSubmit(
        $input: BookingFlowScreenWaitlistConfirmSubmitInput!
      ) {
        bookingFlowScreenWaitlistConfirmSubmit(input: $input) {
          id
        }
      }
    `)),iF=d.BX.persisted("sha256:c55a7e2d02dc8346612a5f79fe22a5459f8e93122d5e3c075dc018a0475c3070",(0,d.BX)(`
      query BookingFlowWaitlistLocation($slug: String!) {
        location(slug: $slug) {
          phoneNumber
        }
      }
    `)),iT=e=>{let{data:t}=e,{layout:n,screenWaitlistConfirm:r}=(0,d.vz)(X,t);if("BookingFlowScreenWaitlistConfirm"!==r.__typename)return null;let{locationId:s,locationSlug:l,locationProviderId:c}=ei(),{navigateTo:m}=(0,tf.H)(),[p,f]=(0,o.useState)(!1),[h,x]=(0,o.useState)(""),[_,y]=(0,o.useState)(!1),{data:v}=(0,a.aT)(iF,{slug:n.cart.slug},{isPaused:()=>p}),S=(0,o.useCallback)(e=>x(e.target.value),[]),{trigger:w}=(0,a.pk)(iB),{triggerSplash:k}=(0,tQ.NN)(),A=r.submitAction,C=(0,o.useMemo)(()=>({label:A.label,isDisabled:A.isDisabled,onAction:async()=>{try{y(!0);let e=(0,iw.g)({locationId:s,providerId:c,interactions:(0,u.Ld)()}),t=(0,ik.U)(l,e,null),{errors:i,result:o}=await w({input:{locationSlug:n.cart.slug,note:h,clientChannelType:e||"MARKETPLACE",firstTouchAt:t.firstTouchAt}});if(i){f(!0);return}k({header:(0,j.gl)("This appears at the end of the waitlist flow on a splash screen","You're on the waitlist")}),m((0,tg.db2)(o.bookingFlowScreenWaitlistConfirmSubmit.id))}catch(e){f(!0)}finally{y(!1)}},isPending:_}),[_,A,n.cart.slug,h,w,k,m,l,c,s]),B=eo(r.backAction);return(0,i.jsx)(tR,{title:r.title,description:r.description,continueAction:C,backAction:B,data:n,children:p&&v?(0,i.jsx)("div",{children:(0,i.jsx)(g.u,{topSlot:(0,i.jsx)(b.E,{src:n5(),alt:(0,j.__)`Waitlist unavailable icon`,ratio:"1x1",className:iC().icon}),header:(0,j.__)("Waitlist unavailable"),description:(0,j.__)("Oops! There was a problem with your waitlist. If this problem persists please call %{venueName} directly to continue. You can contact them on %{phoneNumber}",{venueName:n.cart.name,phoneNumber:v.location?.phoneNumber.replaceAll(" ",`\u00a0`)}),withBorder:!0})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(tM.E,{display:{default:"flex",laptop:"none"},children:(0,i.jsx)("div",{className:iC().summary,children:(0,i.jsxs)(e3.K,{direction:"vertical",gap:"400",as:"div",children:[(0,i.jsx)(tC,{name:n.cart.name,slug:n.cart.slug,address:n.cart.address,avatarUrl:n.cart.avatarUrl,rating:null,reviewsCount:null}),(0,i.jsx)(tw,{timeRangeFormatted:n.cart.timeRangeFormatted,dateFormatted:n.cart.dateFormatted,waitlistDateTimeRanges:n.cart.waitlistDateTimeRanges}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tj,{attendees:n.cart.attendees}),null==n.cart.subtotal&&null==n.cart.discountsTotal?(0,i.jsx)(eh.i,{verticalGap:"200"}):null,(0,i.jsx)(tS,{subtotal:n.cart.subtotal,discountsTotal:n.cart.discountsTotal,priceTotal:n.cart.priceTotal})]})]})})}),(0,i.jsxs)(e3.K,{gap:"300",direction:"vertical",children:[r.sectionPayments?(0,i.jsxs)("div",{children:[(0,i.jsx)(ef.x,{font:"header-s-semibold",mb:"50",children:r.sectionPayments.title}),(0,i.jsx)(ef.x,{font:"body-s-regular",mb:"200",children:r.sectionPayments.description}),(0,i.jsxs)(ex.H,{variant:"medium",children:[(0,i.jsx)(ex.H.Prefix,{leftSection:(0,i.jsx)(tL.o,{variant:"venue",size:"xl"})}),(0,i.jsx)(ex.H.Content,{children:(0,i.jsx)(ex.H.Row,{leftSection:(0,i.jsx)(ef.x,{font:"body-s-medium",children:r.sectionPayments.paymentMethodName}),leftSectionAlignment:"center"})})]})]}):null,(0,i.jsx)(tM.E,{display:{default:"block",laptop:"block"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)(ef.x,{font:"header-s-semibold",mb:"100",children:r.notes.title}),(0,i.jsx)(tz.K,{placeholder:r.notes.placeholder,label:r.notes.title,isLabelHidden:!0,"aria-hidden":!0,value:h,onChange:S,maxLength:r.notes.lengthLimit})]})})]})]})})},iI=()=>{},iD=e=>{let{data:t}=e,{layout:n,screenWaitlistFirstVisit:o}=(0,d.vz)(K,t);if("BookingFlowScreenWaitlistFirstVisit"!==o.__typename)return null;let a=eo(o.backAction),r=eo(o.continueAction),s=!(0,tm.G)("laptop");return(0,i.jsx)(tR,{title:o.title,description:o.description,backAction:a,continueAction:r,data:n,withCartSummaryBar:!s,children:(0,i.jsx)(eJ.o,{name:"first-visit-check-options",value:null,onChange:iI,choiceType:"single",gap:"150",children:o.choices.map(e=>(0,i.jsx)(nF,{...e,shouldAutoContinue:s},e.label))})})};var iR=n(429810),iP=n(917843),iN=n(24369),iO=n(653007),iL=n.n(iO);let iM=d.BX.persisted("sha256:5a0fedd647e62d9818de50f2972fe0fefca28ed2c005c4aea8f06953894af438",(0,d.BX)(`
      mutation BookingFlowScreenWaitlistSetupUpdateRow($input: BookingFlowWaitlistSetupUpdateRowInput!) {
        bookingFlowScreenWaitlistSetupUpdateRow(input: $input) {
          ...BookingFlowRootFragment
        }
      }
    `,[Z])),iE=e=>{let{row:t,index:n,dateRangeSelectorLabel:r,timeRangeSelectorLabel:s,isDatePickerOpened:l,availableDates:c}=e,{isValidating:u,mutate:m,locationSlug:p}=ei(),{trigger:f}=(0,a.pk)(iM),h=0===n,x=eo(t.deleteAction),g=(0,o.useCallback)(e=>{let t=e.toISOString().split("T")[0];return!c.includes(t)},[c]),_=(0,o.useCallback)(e=>{let{index:t,fromDate:n,toDate:i,fromTime:o,toTime:a}=e;return m(async()=>{let e=await f({input:{index:t,fromDate:n,toDate:i||n,fromTime:o,toTime:a||o,locationSlug:p}});return(0,d.vz)(iM,e.result.bookingFlowScreenWaitlistSetupUpdateRow)})},[m,f,p]);return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)(iR.M.Item,{colspan:{default:5},children:(0,i.jsx)("div",{children:(0,i.jsx)(iP.D,{name:`date-range-${n}`,label:r,labelHidden:!h,initiallyOpened:l,header:(0,j.__)("Select date"),onChange:(e,i)=>{_({index:n,fromDate:e.toISOString().split("T")[0],toDate:i.toISOString().split("T")[0],fromTime:t.timeFrom,toTime:t.timeTo})},disabledDays:g,startDate:t.dateFrom?new Date(t.dateFrom):void 0,endDate:t.dateTo?new Date(t.dateTo):void 0,currentDate:new Date,isLoading:u,dateRangeLabel:t.dateFormatted})})}),(0,i.jsx)(iR.M.Item,{colspan:{default:5},children:(0,i.jsx)("div",{children:(0,i.jsx)(iN.X,{name:`time-range-${n}`,label:s,labelHidden:!h,header:(0,j.__)("Select start time"),onChange:(e,i)=>_({index:n,fromDate:t.dateFrom,toDate:t.dateTo,fromTime:e,toTime:i}),timeOptions:t.timeOptions,timeOptionsPredefined:t.predefinedOptions,timeRangeLabel:t.timeRangeFormatted,timeFrom:t.timeFrom,timeTo:t.timeTo,isLoading:u},`${t.dateFrom}-${t.dateTo}`)})}),x?(0,i.jsx)(iR.M.Item,{colspan:{default:1},alignSelf:"end",children:(0,i.jsx)(y.z,{onAction:x.onAction,isDisabled:x.isDisabled,icon:e$.XHJ,size:"l",variant:"tertiary",isLabelHidden:!0,children:x.isDisabled})}):null]},`${t.dateFormatted}-${n}`)},iz=e=>{let{data:t}=e,{layout:n,screenWaitlistSetup:a}=(0,d.vz)(Y,t);if("BookingFlowScreenWaitlistSetup"!==a.__typename)return null;let r=eo(a.addNextTimeRangeAction),s=eo(a.callout?.primaryAction),l=(a.form.rows?.length||1)>1,c=(0,o.useRef)(-1),u=eo(a.continueAction),m=eo(a.backAction);return(0,i.jsxs)(tR,{title:a.title,description:a.description,continueAction:u,backAction:m,data:n,children:[(0,i.jsx)(iR.M,{colspan:12,columnGap:16,rowGap:16,columnCount:l?11:10,children:a.form.rows?.map((e,t)=>i.jsx(iE,{row:e,index:t,timeRangeSelectorLabel:a.form.timeRangeSelectorLabel,dateRangeSelectorLabel:a.form.dateRangeSelectorLabel,isDatePickerOpened:t===c.current,availableDates:a.form.dates},`${e.dateFormatted}-${t}`))}),r?(0,i.jsx)("div",{className:iL().addTimeRangeButton,children:(0,i.jsx)(y.z,{size:"m",icon:e$.pOD,iconPosition:"left",variant:"secondary",shape:"pill",onAction:()=>(c.current=a.form.rows.length+1,r.onAction()),isDisabled:r.isDisabled,children:r.label})}):null,a.callout&&s?(0,i.jsx)("div",{className:iL().calloutBanner,children:(0,i.jsx)(tE.X,{description:a.callout.text,variant:"accent",hasIcon:!1,children:(0,i.jsx)(y.z,{variant:"tertiary",onAction:s.onAction,isDisabled:s.isDisabled,size:"m",shape:"square",isCompact:!0,icon:e$.LZ3,children:s.label})})}):null,(0,i.jsx)(ef.x,{font:"body-s-regular",color:"neutral",unsafeClassName:iL().changedYourMind,children:(0,i.jsx)(eN,{children:a.sectionGoBackToTimeSelection})})]})},iH=e=>{let{data:t}=e,n=(0,d.vz)(Z,t),o=n.screen.__typename;switch(o){case"BookingFlowScreenServices":return(0,i.jsx)(n4,{data:n});case"BookingFlowScreenPatchTest":return(0,i.jsx)(nL,{data:n});case"BookingFlowScreenEmployee":return(0,i.jsx)(nA,{data:n});case"BookingFlowScreenAllEmployees":return(0,i.jsx)(tP,{data:n});case"BookingFlowScreenMultiEmployee":return(0,i.jsx)(nN,{data:n});case"BookingFlowScreenFirstVisit":return(0,i.jsx)(nI,{data:n});case"BookingFlowScreenGuestsAndServices":return(0,i.jsx)(nP,{data:n});case"BookingFlowScreenTime":return(0,i.jsx)(ij,{data:n});case"BookingFlowScreenConfirm":return(0,i.jsx)(nS,{data:n});case"BookingFlowScreenWaitlistSetup":return(0,i.jsx)(iz,{data:n});case"BookingFlowScreenWaitlistFirstVisit":return(0,i.jsx)(iD,{data:n});case"BookingFlowScreenWaitlistConfirm":return(0,i.jsx)(iT,{data:n});case"BookingFlowScreenCustomerBlocked":return(0,i.jsx)(nk,{data:n});case"BookingFlowScreenUnrecoverableError":return(0,i.jsx)(iS,{data:n});default:return(0,i.jsx)(es,{type:o})}},iq=e=>{let{data:t}=e,n=(0,d.vz)(Z,t);if(!n.modal)return null;let o=n.modal.__typename;switch(o){case"BookingFlowModalService":return(0,i.jsx)(tl,{data:n.modal});case"BookingFlowModalPackage":return(0,i.jsx)(ta,{data:n.modal});case"BookingFlowModalMembership":return(0,i.jsx)(tn,{data:n.modal});case"BookingFlowModalEmployee":return(0,i.jsx)(eZ,{data:n.modal});case"BookingFlowModalEmployeeBulk":return(0,i.jsx)(e8,{data:n.modal});case"BookingFlowModalAuth":return(0,i.jsx)(eM,{data:n.modal});case"BookingFlowModalUpsell":return(0,i.jsx)(tu,{data:n.modal});default:return(0,i.jsx)(es,{type:o})}},iW=e=>{let{data:t}=e,{addErrorToast:n,addSuccessToast:a}=(0,p.e)(),r=(0,d.vz)(Z,t);return(0,o.useEffect)(()=>{r.toasts?.forEach(e=>{let t=i.jsx(eN,{children:e.message});switch(e.__typename){case"BookingFlowToastError":return n(t);case"BookingFlowSuccessToast":return a(t)}})},[r.toasts,n,a]),null};function i$(){let e=(0,o.useRef)(!1),{data:t,isLoading:n}=ei(),{sendProviderGaEvent:a,sendProviderPixelEvent:r}=nc();if((0,o.useEffect)(()=>{e.current||(e.current=!0,r({name:"InitiateCheckout"}),r({name:"PageView"}),a({name:"page_view",title:window.document.title,page:window.location.pathname}))},[a,r]),n)return(0,i.jsx)(eC,{});if(!t?.bookingFlow)return(0,i.jsx)(er,{});let s=(0,d.vz)(Z,t.bookingFlow);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(iH,{data:s}),(0,i.jsx)(iq,{data:s}),(0,i.jsx)(iW,{data:s})]})}function iU(e){let{locationId:t,locationSlug:n,locationProviderId:a,locationName:r,locationTrackingCodes:s,locationMeta:l}=e,d=(0,c.useSearchParams)(),p=d?.get("rwg_token")??void 0,h=d?.get("gei")??void 0;return(0,u.XE)({venueID:t}),(0,o.useEffect)(()=>{(0,m.Y)({rwgTokenToSave:p,geiTokenToSave:h,providerId:a})},[a,h,p]),(0,i.jsxs)(en,{locationId:t,locationSlug:n,locationProviderId:a,locationName:r,locationTrackingCodes:s,children:[(0,i.jsx)(f.Z,{location:l}),(0,i.jsx)(i$,{})]})}var iG=n(837238),iV=n(515293),iX=n(243064);let iK=()=>{let e=(0,r.d)(),t=e.locationSlug||"",n=e.initialData?.bookingLocationProfile[t],s={slug:t},{data:l}=(0,a.aT)(iG.s,s,{fallbackData:n&&{result:n,variables:s},revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),d=(0,o.useMemo)(()=>l?.location?{description:l.location.description,name:l.location.name,slug:l.location.slug,allowSeoIndex:l.location.allowSeoIndex,address:l.location.address,ogImage:l.location.ogImage}:void 0,[l?.location]);return l?.location?(0,i.jsx)(iU,{locationId:l.location.id,locationSlug:l.location.slug,locationProviderId:l.location.owner.id,locationName:l.location.name,locationTrackingCodes:l.location.trackingCodes,locationMeta:d}):(0,i.jsx)(eC,{})},iY=e=>{let{legacyComponent:t}=e;return(0,i.jsx)(s.L0,{name:"B2C_WEB_BOOKING_FLOW_V2",enabled:(0,i.jsx)(iK,{}),disabled:t})},iZ=e=>(0,i.jsx)(iY,{legacyComponent:(0,i.jsx)(l.Z,{params:{locationSlug:e.locationSlug}})});iZ.getLayout=iX.P,iZ.getInitialProps=iV.k;var iJ=iZ},837238:function(e,t,n){"use strict";n.d(t,{s:function(){return v}});var i=n(785893),o=n(667294),a=n(973314),r=n(717925),s=n(692553),l=n(526930),d=n(730602),c=n(369219),u=n(926739),m=n(654796),p=n(744204),f=n(181456),h=n(859854),x=n(899877),g=n(507603),_=n(751450),b=n(171106),y=n(26659);let v=(0,m.B)(`
  query BookingFlowBasicLocation($slug: String!) {
    location(slug: $slug) {
      id
      slug
      currency
      description
      allowSeoIndex
      address {
        shortFormatted
        simpleFormatted
        streetAddress
        countryCode
        apartmentSuite
        cityName
      }
      name
      rating
      marketplaceInfo
      reviewsCount
      phoneNumber
      ogImage: coverImage(transformer: OG_IMAGE) {
        url
      }
      coverImage(transformer: THUMB) {
        url
      }
      allowChoosePreferableEmployee
      userMemberships {
        availableSessions
        color
        formattedExpirationDate
        id
        isRecurring
        isUnlimitedSessions
        name
        expirationDate {
          iso
        }
      }
      paymentProvider {
        type
        adyenClientKey
        card {
          brand
          redactedCardNumber
        }
      }
      trackingCodes {
        code
        provider
      }
      offers {
        hasMembershipTypes
        hasVouchers
      }
      hasGiftCards
      hasProductStore
      hasGroupAppointments
      hasWaitList
      productStoreSlug
      owner {
        id
      }
      employees {
        id
        firstName
        title
        avatar {
          url
        }
      }
      maximumGroupSize
      hasPromoCodes
      isBookable
      timeFormat24h
      bookingMaxAdvanceTimeInMonths
      utcOffset
      workingTime {
        closedDates {
          iso
        }
      }
      bookingMinAdvanceTimeInSeconds
    }
  }
`);t.Z=e=>{let{children:t}=e,{locationSlug:n}=(0,a.UO)(),{initialData:m}=(0,c.d)(),j=m?.bookingLocationProfile?.[n],{data:S,isLoading:w,isValidating:k,mutate:A}=(0,d.aT)(v,{slug:n},{fallbackData:j?{result:j,variables:{slug:n}}:void 0});(0,s.XE)({venueID:S?.location?.id||m?.bookingLocationProfile?.[n]?.location?.id});let C=(0,a.lr)(),B=C.get("rwg_token")??void 0,F=C.get("gei")??void 0;return(0,o.useEffect)(()=>{(0,u.Y)({rwgTokenToSave:B,geiTokenToSave:F,providerId:S?.location?.owner?.id||""})},[S?.location?.owner?.id,F,B]),(0,i.jsxs)(_.v,{refetch:A,location:S?.location,isLoading:k,children:[(0,i.jsx)(p.Z,{location:S?.location}),!w&&(0,i.jsx)(r.c,{location:S?.location,pixelTrackType:l.im.INITIATE_CHECKOUT}),(0,i.jsx)(h.LP,{children:(0,i.jsx)(x.Z,{allowChoosePreferableEmployee:S?.location?.allowChoosePreferableEmployee,providerId:S?.location?.owner?.id,children:(0,i.jsx)(g.r,{children:(0,i.jsx)(f.t,{children:(0,i.jsx)(y.z,{children:(0,i.jsx)(b.F,{children:t})})})})})})]})}},515293:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var i=n(423541);n(400645),n(512434),n(603096),n(25869),n(609405),n(837238);let o=(0,i.bH)(async(e,t)=>{let{locale:n}=t,{locationSlug:i,locale:o,...a}=e.query;if("string"!=typeof i)throw Error("locationSlug not found");return{locationSlug:i,initialData:{bookingLocationProfile:{}}}})},744204:function(e,t,n){"use strict";var i=n(785893),o=n(186667),a=n(559670),r=n(234308),s=n(145613),l=n(25869);t.Z=e=>{let{location:t}=e;if(!t)return null;let{host:n}=new URL(o.APP_URL),d=t.description.split(".")[0],c=(0,s.jA)({name:t.name,address:t.address||{}}),u=t.ogImage?.url||"",m=(0,s.Jj)(n,(0,l.WuJ)(t.slug)),p=(0,s.bv)(n,t.slug,(0,r.Kd)().language),f=(0,s.Ek)(t.allowSeoIndex);return(0,i.jsx)(a.ZP,{canonical:m,description:d,robots:f,openGraph:{title:c,image:u,url:p},title:c})}},972232:function(e,t,n){"use strict";n.d(t,{B:function(){return v},c:function(){return _}});var i=n(785893),o=n(226006),a=n(794067),r=n(430539),s=n(972586),l=n(770546),d=n(667294),c=n(875443),u=n(241533),m=n(730602),p=n(234308),f=n(553196),h=n(433736),x=n(84392),g=n(831252);let _=(0,n(654796).B)(`
  mutation UpdateUserPhoneNumber($newPhoneNumber: String!) {
    updateUserPhoneNumber(newPhoneNumber: $newPhoneNumber) {
      user {
        id
        phone
      }
    }
  }
`),b=()=>{let{trigger:e}=(0,m.pk)(_);return(0,d.useCallback)(t=>e({newPhoneNumber:t}),[e])},y=()=>{let e=(0,c.I)();return(0,d.useCallback)(t=>e((e,n)=>{let i=n();return{type:"PROFILE_SAVE_PROFILE_INFO",profileInfo:{...i.profile.user,attributes:{...i.profile.user?.attributes,phone:t}}}}),[e])},v=e=>{let{onSuccess:t,hideRequiredHint:n}=e,{addErrorToast:c}=(0,x.e)(),m=(0,d.useMemo)(()=>(0,f.Ds)(),[]),_=(0,d.useCallback)(e=>m.find(t=>{let{code:n}=t;return n===e})?g.z2.required({message:(0,p.__)("Mobile number is required")})(""):void 0,[m]),v=(0,d.useMemo)(()=>(0,f.Fk)(u.q.countryCode),[]),j=(0,h.U)({initialValue:v,validators:[_],validateOnChange:!1}),S=(0,o.Q)({value:j.value,onChange:j.updateValue,onBlur:j.onBlur,normalizeMobile:f.q_,options:m}),w=b(),k=y(),A=(0,d.useRef)(!1);(0,d.useEffect)(()=>{let e=(0,p.R4)();if(e&&!A.current){A.current=!0;let t=(0,f.Fk)(e),n=m.findIndex(e=>{let{code:n}=e;return n===t});S.onPrefixChange({target:{selectedIndex:n}})}},[S.onPrefixChange]);let C=async()=>{try{let e=await w(j.value);if(!e?.errors){k(j.value),t();return}let n=e?.errors?.find(e=>{let{extensions:t}=e;return t?.code==="BAD_USER_INPUT"});if(n){let e=(n.extensions?.fields)[0].formattedMessage;j.updateError(e)}}catch(e){c((0,p.__)`Oops! Something went wrong`)}};return(0,i.jsxs)(a.k,{gap:"300",direction:"vertical",children:[(0,i.jsx)(r.z.Section,{children:(0,i.jsx)(r.z.Section.Body,{children:(0,i.jsx)(s.g,{...S,label:(0,p.__)`Mobile number`,autoComplete:"tel-local",name:"phone",selectAreaCodeOptions:(0,i.jsx)(f._l,{withEmoji:!0}),isRequired:!0,showRequiredHint:!n,error:j.error})})}),(0,i.jsx)(l.z,{isFull:!0,type:"button",variant:"primary",qaType:"continue-button-mobile",onAction:C,size:"l",children:(0,p.__)("Continue")})]})}},767554:function(e,t,n){"use strict";n.d(t,{Q:function(){return j}});var i=n(785893),o=n(89760),a=n(587495),r=n(786546),s=n(667294),l=n(395811),d=n(973314),c=n(945),u=n(944594),m=n(634746),p=n(85204),f=n(200806),h=n(678576),x=n(80128),g=n(400645),_=n(234308),b=n(763072),y=n(972232),v=n(103373);let j=e=>{let{isOpen:t,onClose:n,onOpen:j,onSuccess:S,setOpen:w}=e,{email:k,onError:A,onBack:C,title:B,showSubtitle:F,subtitle:T,view:I,setView:D,setEmail:R,setShowSubtitle:P,signUpFields:N}=(0,h.f)({isOpen:t,titles:{identity:(0,_.__)`Log in or sign up`},subtitles:{identity:(0,_.__)`Log in or sign up to complete your booking`}}),{data:{profile:O}={}}=(0,l.kj)({fetchOnMount:!1}),L=(0,d.lr)(),{locationSlug:M}=(0,d.UO)(),E=!!O,z=(0,s.useRef)(!1),H=E&&(0,r.vz)(l.li,O).requiresUpdatePhoneNumber?"add_phone":I,q="add_phone"===H?(0,_.__)`Add Phone`:B,W="add_phone"===H?(0,_.__)`Enter your phone number to confirm your appointment`:T,$=async()=>{if(z.current)return;z.current=!0;let e=null;try{e=await (0,g.B)(v.b,{slug:M,channelType:(0,b.q)(L)})}catch(e){}return S({requiresFirstVisitCheck:!e?.data.user?.isKnownAtLocation})},U=async e=>e.requiresUpdatePhoneNumber?Promise.resolve():$();return E&&"add_phone"!==H&&t&&$(),(0,i.jsxs)(o.p,{headerInBodySlot:F&&W?(0,i.jsx)(a.x,{font:"body-s-regular",color:"neutral",children:W}):null,isOpen:t,onClose:n,onOpen:j,setOpen:w,title:q,qaType:"authmodal-dialog",mobileHeight:"full",children:[(0,i.jsx)(o.p.Header,{backButtonIconSlot:x.Y4O,onBack:C,onClose:n,qaType:"authmodal-header"}),(0,i.jsx)(o.p.Body,{children:(0,i.jsxs)(c.h,{showSubtitle:!1,children:["reset_password"===H&&(0,i.jsx)(u.o,{email:k,onError:A,setShowSubtitle:P,setView:D}),"login"===H&&(0,i.jsx)(p.m,{email:k,onError:A,onLogin:U,setView:D,hideRequiredHint:!0}),"signup"===H&&(0,i.jsx)(f.M,{signUpFields:N,email:k,onError:A,onLogin:U,setView:D}),"identity"===H&&(0,i.jsx)(m.i,{email:k,onLogin:U,setEmail:R,setView:D}),"add_phone"===H&&(0,i.jsx)(y.B,{onSuccess:$,hideRequiredHint:!0})]})})]})}},103373:function(e,t,n){"use strict";n.d(t,{b:function(){return d},i:function(){return c}});var i=n(786546),o=n(395811),a=n(973314),r=n(730602),s=n(654796),l=n(763072);let d=(0,s.B)(`
  query FetchVisitType($slug: String!, $channelType: ChannelType!) {
    user {
      isKnownAtLocation(slug: $slug, channelType: $channelType)
    }
  }
`),c=function(){let{isPaused:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.lr)(),{locationSlug:n}=(0,a.UO)(),s=(0,o.kj)({fetchOnMount:!0,paused:e}),c=(0,r.aT)(!e&&n&&s.data?.profile?d:null,{slug:n,channelType:(0,l.q)(t)}),u=s.isValidating||c.isValidating;return{isAuthLoading:u,requiresLogin:!s.data?.profile,requiresPhone:!s.data?.profile||(0,i.vz)(o.li,s.data?.profile).requiresUpdatePhoneNumber,requiresFirstVisitCheck:!c.data?.user?.isKnownAtLocation}}},924899:function(e,t,n){"use strict";n.d(t,{N:function(){return y}});var i=n(785893),o=n(380270),a=n(770546),r=n(587495),s=n(786546),l=n(667294),d=n(973314),c=n(268930),u=n(945),m=n(823403),p=n(893062),f=n(691807),h=n(730602),x=n(234308),g=n(768514),_=n.n(g);let b=s.BX.persisted("sha256:24f00dc10cfce792b86a0f607c8f6e3fae90090b8fee0fe1c94adbec66b02bda",(0,s.BX)(`
      query GiftCardByCode($giftCardCode: ID!, $providerSlug: String, $locationSlug: String) {
        giftCardByCode(
          code: $giftCardCode
          providerSlug: $providerSlug
          locationSlug: $locationSlug
        ) {
          animationUrlLottie
          image {
            url
          }
          isFreshaTheme
          ...ClaimGiftCardOnVisit
        }
      }
    `,[m.q])),y=e=>{let{providerSlug:t,locationSlug:n}=e,{redirectTo:s}=(0,o.H)(),g=(0,d.lr)(),y=(0,c.H)(),v=(0,d.jD)(),j=g.get("claim-gift")??g.get("claim_gift"),S=(0,l.useRef)(j);j&&(S.current=j);let{data:w,errors:k,isLoading:A}=(0,h.aT)(j&&(n||t)?b:null,{giftCardCode:j??"",providerSlug:t,locationSlug:n}),C=(0,l.useCallback)(()=>s({hash:y,pathname:v,query:Object.fromEntries([...g.entries()].filter(e=>{let[t]=e;return"claim-gift"!==t&&"claim_gift"!==t}))}),[y,v,s,g]),B=(0,l.useRef)(null),F=(0,m.z)({data:w?.giftCardByCode,errors:k,giftCardCode:S.current??"",isLoading:A,onClaimed:C,partScreenDialogRef:B,providerSlug:t}),[T,I]=(0,l.useState)(!1),D=(0,l.useCallback)(()=>I(!0),[]),R=F?.showSkeleton||!T;return S.current&&F?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.rv,{footer:(0,i.jsx)(a.z,{isDisabled:R,isFull:!0,onAction:F.triggerClaim,size:"l",children:(0,x.gl)("Claim gift card on visit button","Add to my account")}),isOpen:F.isOpen,setOpen:F.setOpen,ref:B,title:(0,x.__)`Here's your gift card`,children:(0,i.jsxs)("div",{className:_().self,children:[(0,i.jsx)(f.d$,{animationUrl:w?.giftCardByCode?.animationUrlLottie,className:_().self__image,imageUrl:w?.giftCardByCode?.image?.url,isAnimated:!0,onLoad:D,isLoading:A,showSkeleton:F.showSkeleton,showFreshaThemeText:!!w?.giftCardByCode?.isFreshaTheme}),(0,i.jsx)("div",{className:_().self__details,children:R?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.x.Skeleton,{font:"header-xl-bold",isAnimated:A,width:"140px"}),(0,i.jsx)(r.x.Skeleton,{font:"body-m-regular",isAnimated:A,width:"300px"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.x,{font:"header-xl-bold",children:F.giftCard?.balance?.amount.formattedShort}),(0,i.jsx)(r.x,{font:"body-m-regular",children:F.providerName?(0,x.__)("Add the gift card to your wallet, so you can use it at %{providerName} for your next appointment.",{providerName:F.providerName}):(0,x.__)`Add the gift card to your wallet, so you can use it for your next appointment.`})]})})]})}),(0,i.jsx)(p.rv,{footer:(0,i.jsxs)("div",{className:_().self__buttons,children:[(0,i.jsx)(a.z,{isFull:!0,onAction:()=>Promise.resolve(F.setConfirmCloseOpen(!1)),size:"l",variant:"secondary",children:(0,x.__)`Go back`}),(0,i.jsx)(a.z,{isFull:!0,onAction:()=>(F.modal.setOpen(!1),F.authModal.setOpen(!1),F.setConfirmCloseOpen(!1),Promise.resolve()),size:"l",children:(0,x.gl)("Confirm close dialog","Yes, close")})]}),isOpen:F.isOpenConfirmClose,setOpen:F.setConfirmCloseOpen,title:(0,x.__)`Are you sure?`,children:(0,i.jsx)(r.x,{font:"body-s-regular",children:(0,x.__)`This gift card hasn't been claimed yet. Are you sure you want to close?`})}),(0,i.jsx)(u.Q,{isOpen:F.isOpenAuthModal,onClose:F.closeAuthModal,onOpen:F.openAuthModal,setOpen:F.setOpen,acquisitionSource:"gift-card",claimableGiftCardCode:j??"",giftCardProviderSlug:t,disableAnimations:!0,onLogin:F.onClaimed,subtitles:F.authModalSubtitles})]}):null}},917843:function(e,t,n){"use strict";n.d(t,{D:function(){return b}});var i=n(785893),o=n(784748),a=n(873900),r=n(966165),s=n(482964),l=n(107588),d=n(209937),c=n(434545),u=n(770546),m=n(396650),p=n(667294),f=n(80128),h=n(234308),x=n(24252);let g=e=>e.toISOString().split("T")[0],_=(e,t)=>e.toDateString()===t.toDateString(),b=e=>{let{label:t,labelHidden:n,initiallyOpened:b=!1,disabledDays:y=[],name:v,qaType:j="date",header:S,onChange:w,startDate:k,endDate:A,currentDate:C,isLoading:B=!1,dateRangeLabel:F}=e,T=k||C,I=A||T,[D,R]=(0,p.useState)(b),P=(0,p.useRef)(null),N=(0,p.useRef)(null),[O,L]=(0,p.useState)(null),[M,E]=(0,p.useState)(T),[z,H]=(0,p.useState)(I),q=(0,o.G)("tablet"),W={isOpen:D,close:()=>{w(M,z),R(!1)},open:()=>R(!0),toggle:()=>{},setOpen:()=>{}},$=F||(_(M,z)?(0,x.N3)(M):`${(0,x.N3)(M)} - ${(0,x.N3)(z)}`),U=(0,p.useRef)("even"),G=(0,p.useMemo)(()=>_(M,z)?M:{from:M,to:z},[M,z]),V=G,X=null;return O&&G instanceof Date&&(a.DatePicker.DateUtils.isDayBefore(O,G)?(V={from:O,to:G},X="from"):a.DatePicker.DateUtils.isDayAfter(O,G)&&(V={from:G,to:O},X="to")),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.b,{ref:P,qaType:`${j}-field`,children:[n?null:(0,i.jsx)(r.b.Label,{htmlFor:`input-${v}`,children:(0,i.jsx)(r.b.Label.Text,{children:t})}),(0,i.jsxs)(s.P,{children:[(0,i.jsx)(s.P.Value,{text:$}),(0,i.jsx)(s.P.NativeSelect,{id:`input-${v}`,name:`input-${v}`,value:$,onMouseDown:e=>e.preventDefault(),onTouchStart:e=>e.preventDefault(),onClick:()=>R(e=>!e),qaType:`${j}-select`,"aria-label":t,disabled:B,children:null}),B?(0,i.jsx)(l.a.LoadingSuffix,{}):(0,i.jsx)(s.P.ChevronSuffix,{})]})]}),(0,i.jsxs)(d.J,{triggerRef:P,popoverRef:N,state:W,shape:"sheetResponsive",placement:"bottom start",offset:parseInt(m.YK,10),header:S,hideHeader:q,children:[(0,i.jsx)(a.DatePicker,{formatMonthTitle:x.Pb,formatWeekdayShort:x.l_,currentDate:C,selectedDays:V,selectingSecondDay:X,disabledDays:y,toMonth:e.maxDate,onDayClick:(e,t)=>{let{disabled:n,outside:i}=t;if(n||i)return;let o=g(e),a=g(M);"even"===U.current?(E(e),H(e),U.current="odd"):(o<a?(H(M),E(e)):(H(e),E(M)),U.current="even")},onDayMouseEnter:(e,t)=>{G&&G instanceof Date&&(a.DatePicker.DateUtils.isDayAfter(e,G)||a.DatePicker.DateUtils.isDayBefore(e,G))&&!t.disabled?L(e):L(null)},month:z?new Date(z):void 0,qaType:j?`datepicker-${j}`:void 0,nextMonthButtonIconIconSlot:f.XCv,prevMonthButtonIconIconSlot:f.wyc}),(0,i.jsxs)(c.h,{direction:"row",wrap:"nowrap",unsafeStyle:{justifyContent:"end"},children:[(0,i.jsx)(u.z,{id:"clear-date-range",size:"l",variant:q?"tertiary":"secondary",onAction:()=>(E(T),H(I),Promise.resolve()),isFull:!q,children:(0,h.gl)("Button label to clear date range selection in modal","Clear")}),(0,i.jsx)(u.z,{id:"confirm-range-selection",isFull:!q,size:"l",variant:"primary",onAction:()=>(W.close(),Promise.resolve()),children:(0,h.gl)("Button label to confirm selection","Done")})]})]})]})}},804163:function(e,t,n){"use strict";n.d(t,{k$:function(){return Z},Tm:function(){return X}});var i=n(785893),o=n(786546),a=n(667294),r=n(893062),s=n(400645),l=n(730602),d=n(234308),c=n(224437),u=n(293978),m=n(325870),p=n(652102),f=n(665049),h=n(587495),x=n(781358),g=n(304616),_=n(985744),b=n(770546),y=n(284815),v=n(135424),j=n(214614),S=n(805575),w=n(532055),k=n(353817),A=n(433736),C=n(84392),B=n(831252),F=n(348763),T=n(43588),I=n.n(T);let D=(0,o.BX)(`
    fragment DiscountsAndRewardsModalBodyListModal on ReservationDiscountsAndBenefitsModalList {
      closeAction
      promotionCode {
        isDisabled
        isSelected
        promotionCode {
          code
          id
          name
          type
        }
        toggleAction
      }
      redeemableRewards {
        edges {
          node {
            isDisabled
            isSelected
            reward {
              ...RewardRedeemable
              __typename
              id
              name
              description(displayContext: LIST)
            }
            toggleAction
          }
        }
      }
      claimableRewards {
        edges {
          node {
            isDisabled
            previewTrigger {
              action
              label
            }
            reward {
              ...RewardClaimable
              id
              name
              description(displayContext: LIST)
            }
          }
        }
      }
    }
  `,[w.j8,w.on,k.D]),R=(0,o.BX)(`
  fragment DiscountsAndRewardsModalBodyList on Reservation {
    id
    loyaltyAccount {
      pointsCaption
      theme {
        backgroundGradientName
      }
    }
  }
`),P=e=>{let{onAction:t,reservation:n,setState:r,state:l}=e,{addErrorToast:c}=(0,C.e)(),{id:u,loyaltyAccount:m}=(0,o.vz)(R,n)??{},p=(0,o.vz)(D,l),f=!(n&&p),k=(0,A.U)({validators:[(0,B.C1)({message:(0,d.__)`Discount code is required`})]}),T=(0,a.useCallback)(async()=>{if(!k.validate())return;let e=await (0,s.B)(X,{promotionCode:k.value,reservationId:u});e.errors&&c(e.errors?.[0]?.extensions?.formattedMessage),e.data.reservationDiscountsAndRewardsPromotionCodeAdd&&r(e.data.reservationDiscountsAndRewardsPromotionCodeAdd)},[c,k.validate,k.value,u,r]),P=(0,a.useCallback)((e,n)=>t(n===p.promotionCode?.promotionCode.id?p.promotionCode.toggleAction:p.redeemableRewards.edges.find(e=>e.node.reward.id===n)?.node.toggleAction),[t,p]),N=(0,a.useMemo)(()=>p?.redeemableRewards.edges.filter(e=>e.node.isSelected).map(e=>e.node.reward.id)??[],[p]);return(0,i.jsxs)("div",{className:I().self,children:[f?(0,i.jsx)(h.x.Skeleton,{font:"body-s-regular",width:"300px"}):(0,i.jsx)(h.x,{color:"neutralFaded",font:"body-s-regular",children:(0,d.__)`Use your rewards or enter a discount code`}),f?(0,i.jsxs)(x.K,{as:"div",direction:"horizontal",gap:"100",unsafeClassName:I()["skeleton__promotion-code"],children:[(0,i.jsx)(g.O,{height:"48px"}),(0,i.jsx)(g.O,{height:"48px"})]}):(0,i.jsx)(_.n,{error:k.error,fieldSuffix:(0,i.jsx)(b.z,{onAction:T,size:"l",variant:"secondary",children:(0,d.__)`Add`}),placeholder:(0,d.__)`Enter discount or referral code`,onBlur:k.onBlur,onChange:k.onChange,value:k.value}),(0,i.jsxs)("div",{className:I().self__rewards,children:[f?(0,i.jsxs)(x.K,{direction:"vertical",gap:"300",children:[(0,i.jsx)(g.O,{height:"36px",width:"100%"}),(0,i.jsx)(g.O,{height:"36px",width:"100%"})]}):(0,i.jsxs)(y.A,{isLabelHidden:!0,label:null,name:"rewards-selected",onChange:P,unsafeClassName:I().self__rewards__redeemable,value:N,children:[!!p.promotionCode&&(0,i.jsxs)(v.H,{hasInteraction:!0,isSelected:p.promotionCode.isSelected,children:[(0,i.jsx)(v.H.Prefix,{leftSection:"FIXED"===p.promotionCode.promotionCode.type?(0,i.jsx)(S.e,{name:"CoinsIcon",color:"neutral",size:"xl"}):(0,i.jsx)(S.e,{name:"PercentageIcon",color:"neutral",size:"xl"})}),(0,i.jsx)(v.H.Content,{children:(0,i.jsx)(v.H.Row,{leftSection:(0,i.jsxs)("div",{className:I().self__rewards__redeemable__row,children:[(0,i.jsx)(h.x,{font:"body-s-medium",children:p.promotionCode.promotionCode.name}),(0,i.jsx)(h.x,{color:"neutralFaded",font:"body-xs-regular",children:p.promotionCode.promotionCode.code})]})})}),(0,i.jsx)(v.H.Suffix,{rightSection:(0,i.jsx)(y.A.Item,{"aria-selected":p.promotionCode.isSelected,isSelected:p.promotionCode.isSelected,isLabelHidden:!0,label:(0,d.gl)("Discounts and rewards modal","Promotion code checkbox"),value:p.promotionCode.promotionCode.id})})]},p.promotionCode.promotionCode.id),p.redeemableRewards.edges.map(e=>(0,i.jsxs)(v.H,{hasInteraction:!0,isDisabled:e.node.isDisabled,isSelected:e.node.isSelected,children:[(0,i.jsx)(v.H.Prefix,{leftSection:(0,i.jsx)(w.Zv,{iconColor:"neutral",iconSize:"xl",rewardRedeemable:e.node.reward})}),(0,i.jsx)(v.H.Content,{children:(0,i.jsx)(v.H.Row,{leftSection:(0,i.jsxs)("div",{className:I().self__rewards__redeemable__row,children:[(0,i.jsx)(h.x,{font:"body-s-medium",children:e.node.reward.name}),(0,i.jsx)(h.x,{color:"neutralFaded",font:"body-xs-regular",children:e.node.reward.description})]})})}),(0,i.jsx)(v.H.Suffix,{rightSection:(0,i.jsx)(y.A.Item,{"aria-selected":e.node.isSelected,isDisabled:e.node.isDisabled,isSelected:e.node.isSelected,isLabelHidden:!0,label:(0,d.gl)("Discounts and rewards modal","Discount checkbox %{rewardName}",{rewardName:e.node.reward.name}),value:e.node.reward.id})})]},e.node.reward.id))]}),(0,i.jsxs)("div",{className:I().self__rewards__claimable,children:[(0,i.jsxs)("div",{className:I().self__rewards__claimable__title,children:[f?(0,i.jsx)(h.x.Skeleton,{font:"header-s-semibold",unsafeClassName:I().self__rewards__title,width:"240px"}):(0,i.jsx)(h.x,{font:"header-s-semibold",unsafeClassName:I().self__rewards__title,children:(0,d.__)`Spend your loyalty points`}),f?(0,i.jsx)(h.x.Skeleton,{font:"body-s-regular",width:"144px"}):(0,i.jsx)(h.x,{color:"neutralFaded",font:"body-s-regular",children:m?.pointsCaption})]}),f?(0,i.jsxs)(x.K,{direction:"vertical",gap:"400",children:[(0,i.jsx)(g.O,{height:"36px",width:"100%"}),(0,i.jsx)(g.O,{height:"36px",width:"100%"})]}):(0,i.jsx)(j.v,{children:p.claimableRewards.edges.map(e=>(0,i.jsx)(j.v.Item,{isDisabled:e.node.isDisabled,isPrefixInteractive:!1,label:(0,i.jsx)(h.x,{font:"body-s-medium",children:e.node.reward.name}),description:e.node.reward.description,prefix:(0,i.jsx)(w.Zv,{iconColor:(0,F.h)(m?.theme.backgroundGradientName),iconSize:"xl",rewardClaimable:e.node.reward}),suffix:(0,i.jsx)(b.z,{onAction:()=>t(e.node.previewTrigger.action),shape:"pill",variant:"secondary",children:e.node.previewTrigger.label}),size:"l"},e.node.reward.id))})]})]})]})};var N=n(850308),O=n.n(N),L=n(459591);let M=(0,o.BX)(`
    fragment DiscountsAndRewardsModalBodyPreviewClaimableRewardModal on ReservationDiscountsAndBenefitsModalPreviewClaimableReward {
      description {
        ...RichTextField
      }
      reward {
        __typename
        name
        description(displayContext: DETAILS)
        id
        provider {
          name
        }
        termsAndConditions {
          text
        }
        ...ClaimPointsBasedRewardContent
      }
    }
  `,[L.S$,k.D]),E=e=>{let{pointSpend:t,pointSpendDebounced:n,setPointSpend:r,state:s}=e,{reward:l}=(0,o.vz)(M,s),d=(0,a.useRef)(!1),[c,u]=(0,a.useState)(!1);return(0,i.jsx)(L.lK,{claimData:void 0,hasUserInteractedWithSlider:d,isPreviewLoading:c,pointSpend:t,pointSpendDebounced:n,pointsBasedRewardId:l.id,setApplicableItemType:O(),setIsPreviewLoading:u,setPointSpend:r,setTransitioning:O(),transitioning:!1})};var z=n(591164),H=n.n(z);let q=(0,o.BX)(`
    fragment DiscountsAndRewardsModalFooter on ReservationDiscountsAndBenefitsModal {
      step {
        __typename
        ... on ReservationDiscountsAndBenefitsModalList {
          cancelTrigger {
            action
            label
          }
          applyTrigger {
            action
            label
          }
        }
        ... on ReservationDiscountsAndBenefitsModalPreviewClaimableReward {
          applyTrigger {
            label
          }
          claimDialog {
            applyLabel
            cancelLabel
            description {
              ...RichTextField
            }
            title
          }
          description {
            ...RichTextField
          }
          reward {
            id
          }
        }
      }
    }
  `,[k.D]),W=e=>{let{onClaimReward:t,step:n}=e,{applyTrigger:o,claimDialog:s,description:l,reward:d}=n,[c,u]=(0,a.useState)(!1),m=(0,a.useCallback)(()=>t({isConfigurableAmountDiscount:"LoyaltyPointsBasedRewardConfigurableAmountDiscount"===d.__typename}),[t,d.__typename]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:H().previewClaimableReward,children:[(0,i.jsx)("div",{className:H().previewClaimableReward__description,children:(0,i.jsx)(k.H,{children:l})}),(0,i.jsx)(b.z,{onAction:s?()=>u(!0):m,size:"l",variant:"primary",children:o.label})]}),!!s&&(0,i.jsx)(r.rv,{footer:(0,i.jsxs)("div",{className:H().buttons,children:[(0,i.jsx)(b.z,{isFull:!0,onAction:()=>u(!1),size:"l",variant:"secondary",children:s.cancelLabel}),(0,i.jsx)(b.z,{isFull:!0,onAction:m,size:"l",variant:"primary",children:s.applyLabel})]}),isOpen:c,setOpen:u,title:s.title,children:(0,i.jsx)(k.H,{children:s.description})})]})},$=e=>{let{onAction:t,onClaimReward:n,state:a}=e,r=(0,o.vz)(q,a);if(!r)return(0,i.jsxs)("div",{className:H().list,children:[(0,i.jsx)(b.z,{isDisabled:!0,isFull:!0,size:"l",variant:"secondary",children:(0,d.__)`Cancel`}),(0,i.jsx)(b.z,{isDisabled:!0,isFull:!0,size:"l",variant:"primary",children:(0,d.__)`Apply`})]});let s=r?.step;switch(s?.__typename){case"ReservationDiscountsAndBenefitsModalList":{let{applyTrigger:e,cancelTrigger:n}=s;return(0,i.jsxs)("div",{className:H().list,children:[(0,i.jsx)(b.z,{isFull:!0,onAction:()=>t(n.action),size:"l",variant:"secondary",children:n.label}),(0,i.jsx)(b.z,{isFull:!0,onAction:()=>t(e.action),size:"l",variant:"primary",children:e.label})]})}case"ReservationDiscountsAndBenefitsModalPreviewClaimableReward":return(0,i.jsx)(W,{onClaimReward:n,step:s});case void 0:case null:return null;default:throw new u.S(s)}},U=(0,o.BX)(`
    fragment DiscountsAndRewards on ReservationDiscountsAndBenefitsModal {
      ...DiscountsAndRewardsModalFooter
      openTrigger {
        action
      }
      step {
        __typename
        ...DiscountsAndRewardsModalBodyListModal
        ...DiscountsAndRewardsModalBodyPreviewClaimableRewardModal
        ... on ReservationDiscountsAndBenefitsModalList {
          closeAction
        }
        ... on ReservationDiscountsAndBenefitsModalPreviewClaimableReward {
          closeAction
        }
      }
    }
  `,[D,q,M]),G=o.BX.persisted("sha256:c1a15672e8d4f81de9e669b418d7f2c0042cb3214f2f417a9d5138661a72f2df",(0,o.BX)(`
      query DiscountsAndRewardsModal($reservationId: ID!) {
        reservation(id: $reservationId) {
          discountsAndRewards: discountsAndBenefits {
            ...DiscountsAndRewards
          }
          ...DiscountsAndRewardsModalBodyList
        }
      }
    `,[U,R])),V=o.BX.persisted("sha256:37a940ad7bb5cc955914781132afb3a97613b2ddfca80e91dfa2a34ab459814c",(0,o.BX)(`
      mutation DiscountsAndRewardsAction($reservationId: ID!, $action: ID!) {
        reservationDiscountsAndRewardsActionTriggered: reservationDiscountsAndBenefitsActionTriggered(
          reservationId: $reservationId
          action: $action
        ) {
          ...DiscountsAndRewards
        }
      }
    `,[U])),X=o.BX.persisted("sha256:6736b2e5eb4bf9556b036ab984b53c5c059a7add7709a4a8a62efca5fe02f809",(0,o.BX)(`
      mutation DiscountsAndRewardsPromotionCodeAdd($reservationId: ID!, $promotionCode: String!) {
        reservationDiscountsAndRewardsPromotionCodeAdd: reservationDiscountsAndBenefitsPromotionCodeAdd(
          reservationId: $reservationId
          promotionCode: $promotionCode
        ) {
          ...DiscountsAndRewards
        }
      }
    `,[U])),K=(0,o.BX)(`
    mutation ReservationDiscountsAndRewardsClaimableRewardApply($points: Int, $reservationId: ID!) {
      reservationDiscountsAndRewardsClaimableRewardApply(
        points: $points
        reservationId: $reservationId
      ) {
        ...DiscountsAndRewards
      }
    }
  `,[U]),Y=e=>{let{onAction:t,pointSpend:n,pointSpendDebounced:o,reservation:a,setPointSpend:r,setState:s,state:l}=e;if(!a||!l)return(0,i.jsx)(P,{onAction:t,reservation:void 0,setState:s,state:void 0});switch(l?.step?.__typename){case"ReservationDiscountsAndBenefitsModalList":return(0,i.jsx)(P,{onAction:t,reservation:a,setState:s,state:l.step});case"ReservationDiscountsAndBenefitsModalPreviewClaimableReward":return(0,i.jsx)(E,{pointSpend:n,pointSpendDebounced:o,setPointSpend:r,state:l.step});case void 0:case null:break;default:throw new u.S(l.step)}},Z=e=>{let{reservationId:t}=e,n=(0,f.W)({key:"discounts-and-rewards"}),u=(0,a.useRef)(null),{data:h}=(0,l.aT)(G,{reservationId:t},{isPaused:()=>!n.isOpen}),x=(0,o.vz)(U,h?.reservation?.discountsAndRewards)??null,[g,_]=(0,a.useState)(x),b=(0,a.useCallback)(e=>{let t=(0,o.vz)(U,e);_(t),t.step||n.closeModal()},[n.closeModal]),y=(0,a.useRef)(!!x);(0,a.useEffect)(()=>{!y.current&&null==g&&x&&(y.current=!0,_(x))},[x,g]);let v=(0,a.useCallback)(e=>u.current?.addErrorToast(e??d.__`Something went wrong, please try again later`),[]),j=(0,a.useCallback)(async e=>{if(!t||!e)return;let n=await (0,s.B)(V,{reservationId:t,action:e});if(n.errors){v(n.errors?.[0]?.extensions?.formattedMessage);return}b(n.data.reservationDiscountsAndRewardsActionTriggered)},[v,t,b]),S=g?.openTrigger.action,w=g?.step?.closeAction,k=(0,m.y)(e=>j(e?S:w),300),A=(0,a.useCallback)((e,t)=>{(e||t)&&k(e),n.setOpen(e)},[n.setOpen,k]),C=(0,a.useRef)(!1);(0,a.useEffect)(()=>{n.isOpen&&!C.current?(C.current=!0,k(!0)):n.isOpen||(C.current=!1)},[n.isOpen,k]);let[B,F]=(0,a.useState)(0),T=(0,p.G)(B,300),I=(0,a.useCallback)(async e=>{let{isConfigurableAmountDiscount:n,pointsBasedRewardId:i}=e;try{let e=await (0,s.B)(K,{points:n?B:null,pointsBasedRewardId:i,reservationId:t});if(e.errors){let t=e.errors?.[0]?.extensions?.formattedMessage;v(t);return}b(e.data.reservationDiscountsAndRewardsClaimableRewardApply)}catch(e){(0,c.tz)(e,{msg:"Error claiming reward on booking flow"}),v(void 0)}},[v,B,t,b]);return t?(0,i.jsx)(r.rv,{footer:(0,i.jsx)($,{onAction:j,onClaimReward:I,state:g}),isOpen:n.isOpen,ref:u,setOpen:A,title:g?.step?.__typename==="ReservationDiscountsAndBenefitsModalList"?(0,d.gl)("Discounts and rewards modal","Discounts and rewards"):null,children:(0,i.jsx)(Y,{onAction:j,pointSpend:B,pointSpendDebounced:T,reservation:h?.reservation,setPointSpend:F,setState:b,state:g})}):null}},123962:function(e,t,n){"use strict";n.d(t,{r:function(){return f}});var i=n(785893),o=n(89760),a=n(781358),r=n(587495),s=n(82654),l=n(901313),d=n(135424);n(667294);var c=n(80128),u=n(682997),m=n(234308);let p=()=>{},f=e=>{let{isOpen:t,onClose:n,onBack:f,selectedItem:h,onSelectionChange:x,selectedVariant:g,selectedMembership:_,membershipsChip:b,buttons:y}=e,v=h.variants.length>1,j=_?(0,m.gl)("Discount description","Save 100%"):h.discount?.description,S=!v||!!b||!!h.description;return(0,i.jsxs)(o.p,{title:h.name,isOpen:t,setOpen:p,onOpen:p,onClose:n,size:"wide",qaType:"service-modal",children:[(0,i.jsx)(o.p.Header,{backButtonIconSlot:c.Y4O,onClose:n,onBack:f,qaType:"service-modal-header"}),(0,i.jsx)(o.p.Body,{children:(0,i.jsx)(o.p.Body.Section,{children:(0,i.jsxs)(a.K,{gap:"400",direction:"vertical",as:"div",display:"flex",children:[S?(0,i.jsxs)(a.K,{gap:"200",direction:"vertical",as:"div",children:[v?null:(0,i.jsxs)("div",{children:[(0,i.jsx)(r.x,{color:"neutralFaded",font:"body-m-regular",qaType:"service-modal-caption",children:h.caption}),(0,i.jsxs)(a.K,{gap:"100",direction:"horizontal",as:"div",children:[(0,i.jsx)(r.x,{font:"body-m-medium",qaType:"service-modal-price",children:_?(0,u.T4)(0,{code:h.retailPrice.currency}):h.formattedRetailPrice}),j?(0,i.jsx)(r.x,{font:"body-m-regular",color:"positive",qaType:"offer-item-discount",children:j}):null]})]}),b,h.description?(0,i.jsx)(s.u,{characterLimit:v?170:1/0,font:"body-s-regular",qaType:"service-modal-description",children:h.description}):null]}):null,v?(0,i.jsx)(l.o,{value:g,onChange:x,label:`${(0,m.gl)("Select service variant","Select an option")} *`,name:(0,m.gl)("Select service variant","Select an option"),choiceType:"single",gap:"0",children:h.variants.map(e=>{let{caption:t,formattedRetailPrice:n,bookableId:o,name:s,discount:c,retailPrice:p,userMemberships:f,description:h}=e,x=!!f?.find(e=>e.id===_),g=f&&f.length>=1,b=null;return _&&!x&&g?b=(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",children:(0,m.gl)("Label describing that selected service variant has other memberships that could be applied","Available in another membership")}):g?b=(0,i.jsx)(r.x,{font:"body-s-regular",color:"positive",children:(0,m.gl)("Label describing that selected service variant has applied membership which will reduce the cost to 0 for it","Included in membership")}):c?.description&&(b=(0,i.jsx)(r.x,{font:"body-s-regular",color:"positive",children:c?.description})),(0,i.jsx)(l.o.Item,{value:o,primitiveType:"radio",variant:"lower",qaType:"service-modal-service-variant",children:e=>{let{labelProps:o,descriptionProps:l}=e;return(0,i.jsx)(d.H.Row,{leftSection:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.x,{font:"body-m-medium",...o,overflow:"break",children:s}),(0,i.jsxs)(r.x,{color:"neutralFaded",font:"body-s-regular",mb:"150",children:[t,h?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),h]}):null]}),(0,i.jsxs)(a.K,{gap:"100",direction:"horizontal",as:"div",children:[(0,i.jsx)(r.x,{font:"body-s-medium",qaType:"service-variant-price",...l,children:x?(0,u.T4)(0,{code:p.currency}):n}),b]})]})})}},o)})}):null]})})}),(0,i.jsx)(o.p.Footer,{children:y})]})}},24369:function(e,t,n){"use strict";n.d(t,{X:function(){return y}});var i=n(785893),o=n(983864),a=n(784748),r=n(966165),s=n(482964),l=n(107588),d=n(209937),c=n(433090),u=n(429810),m=n(434545),p=n(770546),f=n(396650),h=n(850308),x=n.n(h),g=n(667294),_=n(234308);let b=e=>{let t=String(e.value);return(0,i.jsx)(o.P.Option,{value:t,children:e.label},t)},y=e=>{let{label:t,labelHidden:n=!0,name:h,qaType:y="time",header:v,timeOptions:j,timeOptionsPredefined:S,isLoading:w=!1,onOpen:k}=e,[A,C]=(0,g.useState)(!1),[B,F]=(0,g.useState)(!1),T=(0,g.useRef)(null),I=(0,g.useRef)(null),[D,R]=(0,g.useState)(null==e.timeFrom?"":String(e.timeFrom)),[P,N]=(0,g.useState)(null==e.timeTo?"":String(e.timeTo)),[O,L]=(0,g.useState)(""),M=(0,g.useRef)(""),E=(0,a.G)("tablet"),z=(0,g.useMemo)(()=>j.reduce((e,t)=>({...e,...null!==t.value&&{[t.value.toString()]:t}}),{}),[j]);(0,g.useEffect)(()=>{if(!M.current&&S[0]){let e=`${S[0].from}-${S[0].to}`;M.current=e,L(e)}},[S]);let H=e=>{R(e),L("");let t=Number(e)>Number(P);if(!P||t){let t=j.findIndex(t=>String(t.value)===e),n=-1!==t?j[t+1].value:null;"number"==typeof n&&N(String(n))}},q=e=>{N(e),L("");let t=j[0].value;D||"number"!=typeof t||R(String(t))},W=(0,g.useCallback)(async()=>{let t=e=>e?Number(e):void 0;return F(!0),await e.onChange(t(D),t(P)),F(!1),C(!1),Promise.resolve()},[e,D,P]),$=(0,g.useCallback)(()=>{k?.(),C(!0)},[k]),U=(0,g.useMemo)(()=>({isOpen:A,close:W,open:$,toggle:x(),setOpen:x()}),[A,W,$]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.b,{ref:T,qaType:`${y}-field`,children:[n?null:(0,i.jsx)(r.b.Label,{htmlFor:`input-${h}`,children:(0,i.jsx)(r.b.Label.Text,{children:t})}),(0,i.jsxs)(s.P,{children:[(0,i.jsx)(s.P.Value,{text:e.timeRangeLabel||[z[D]?.label,z[P]?.label].filter(Boolean).join(" - ")||(0,_.gl)('One of radio select "Pick day part" options, others are like "morning", "evening" etc.',"Any time")}),(0,i.jsx)(s.P.NativeSelect,{id:`input-${h}`,name:`input-${h}`,onMouseDown:e=>e.preventDefault(),onTouchStart:e=>e.preventDefault(),onClick:()=>C(e=>!e),qaType:`${y}-select`,"aria-label":t,disabled:w,children:null}),w?(0,i.jsx)(l.a.LoadingSuffix,{}):(0,i.jsx)(s.P.ChevronSuffix,{})]})]}),(0,i.jsxs)(d.J,{triggerRef:T,popoverRef:I,state:U,shape:"sheetResponsive",placement:"bottom end",offset:parseInt(f.YK,10),header:E?void 0:v,qaType:`${y}-popover`,minWidth:E?430:void 0,children:[(0,i.jsx)(c.t,{id:"choice-list-chip-single",label:(0,_.__)("Select part of the day"),name:"chips",value:O,choiceType:"single",onChange:e=>{let[t,n]=e.split("-");return R(z[t]?t:""),N(z[n]?n:""),L(e),Promise.resolve()},isLabelHidden:!0,children:S.map(e=>(0,i.jsx)(c.t.Item,{value:`${e.from}-${e.to}`,label:e.label,shape:"pill",size:"m",isDisabled:B},e.label))}),(0,i.jsxs)(u.M,{colspan:{default:12},children:[(0,i.jsx)(u.M.Item,{colspan:{default:6},children:(0,i.jsxs)(o.P,{onChange:e=>H(e.target.value),value:D,disabled:B,qaType:"time-from-select",children:[(0,i.jsx)(o.P.Option,{value:"",disabled:!0,children:(0,_.gl)("Time from","From")}),j.slice(0,-1).map(b)]})}),(0,i.jsx)(u.M.Item,{colspan:{default:6},children:(0,i.jsxs)(o.P,{onChange:e=>q(e.target.value),value:P,disabled:B,qaType:"time-to-select",children:[(0,i.jsx)(o.P.Option,{value:"",disabled:!0,children:(0,_.gl)("Time to","To")}),j.filter(e=>e.value&&e.value>Number(D)).map(b)]})})]}),(0,i.jsxs)(m.h,{direction:"row",wrap:"nowrap",unsafeStyle:{justifyContent:"end"},children:[(0,i.jsx)(p.z,{id:"clear-time-range",qaType:`${y}-clear-btn`,size:"l",variant:E?"tertiary":"secondary",onAction:()=>(R(""),N(""),L(M.current),Promise.resolve()),isDisabled:B,isFull:!E,children:(0,_.gl)("Button label to clear time range selection in modal","Clear")}),(0,i.jsx)(p.z,{id:"confirm-range-selection",qaType:`${y}-done-btn`,isFull:!E,size:"l",variant:"primary",onAction:W,children:(0,_.gl)("Button label to confirm selection","Done")})]})]})]})}},821995:function(e,t,n){"use strict";n.d(t,{B:function(){return h}});var i=n(785893),o=n(784748),a=n(304616),r=n(770546),s=n(209937),l=n(873900),d=n(533395),c=n(667294),u=n(80128),m=n(234308),p=n(24252);let f=e=>e.toISOString().split("T")[0],h=e=>{let{disabledDays:t=[],onChange:n,selectedDate:h,isLoading:x,today:g,maxDate:_}=e,[b,y]=(0,c.useState)(!1),v=(0,c.useRef)(null),j=(0,c.useRef)(null),[S,w]=(0,c.useState)(h),k=(0,o.G)("tablet"),A={isOpen:b,close:()=>{y(!1)},open:()=>{w(h),y(!0)},toggle:()=>{A.isOpen?A.close():A.open()},setOpen:y};return x?(0,i.jsx)("div",{children:(0,i.jsx)(a.O,{height:"36px",width:"52px",shape:"rounded"})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.z,{shape:"pill",onAction:()=>(A.toggle(),Promise.resolve()),ref:v,variant:"secondary",icon:u.Que,iconPosition:"right",isLabelHidden:!0,children:(0,m.__)("Select date from a date picker")}),(0,i.jsx)(s.J,{triggerRef:v,popoverRef:j,state:A,shape:"sheetResponsive",placement:"bottom",offset:parseInt(d.Z.popover.shape.default.container.offset.value,10),hideHeader:k,children:(0,i.jsx)(l.DatePicker,{formatMonthTitle:p.Pb,formatWeekdayShort:p.l_,currentDate:g,selectedDays:S,disabledDays:t,onDayClick:(e,t)=>{let{disabled:i,outside:o}=t;i||o||(w(e),n(f(e)))},month:S,qaType:"timeslot-date-picker",nextMonthButtonIconIconSlot:u.XCv,prevMonthButtonIconIconSlot:u.wyc,toMonth:_})})]})}},243064:function(e,t,n){"use strict";n.d(t,{P:function(){return u}});var i=n(785893);n(667294);var o=n(973314),a=n(899760),r=n(369219),s=n(379648),l=n(837238),d=n(744204);let c=e=>{let{children:t}=e,{locationSlug:n}=(0,o.UO)(),{initialData:c}=(0,r.d)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{location:c?.bookingLocationProfile?.[n]?.location}),(0,i.jsx)(s.L0,{name:"B2C_WEB_BOOKING_FLOW_V2",enabled:t,disabled:(0,i.jsx)(l.Z,{children:(0,i.jsx)(a.r,{children:t})})})]})},u=e=>(0,i.jsx)(c,{children:e})},166169:function(e,t,n){"use strict";n.d(t,{V:function(){return r},n:function(){return a}});var i=n(786546),o=n(200843);let a=i.BX.persisted("sha256:40e9cffeea4c83caae71788ed701d83e2ef0a5f3181de0d0f5b96ae17e144fa1",(0,i.BX)(`
      mutation ConfirmReservationWithTransactions(
        $reservationId: ID!
        $payments: [PaymentInput!]!
        $notes: String
      ) {
        confirmReservationWithTransactions(id: $reservationId, payments: $payments, notes: $notes) {
          reservationId
          payment {
            ...PaymentResult
          }
        }
      }
    `,[o.f])),r=i.BX.persisted("sha256:189c1a3a2917ce18622790142776e78e241912f885bc935a8fd59cb2841e24f9",(0,i.BX)(`
    query OutstandingBalanceForReservation(
      $reservationId: ID!
      $excludedPayments: [ExcludedPayment!]!
    ) {
      outstandingBalanceForReservation(
        reservationId: $reservationId
        excludedPayments: $excludedPayments
      ) {
        balance
      }
    }
  `))},641918:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(785893),o=n(784748),a=n(89760),r=n(591518),s=n(770546),l=n(742138),d=n(667294),c=n(234308),u=e=>{let{isOpen:t,setOpen:n,onOpen:u,onClose:m,onChange:p,initialValue:f}=e,h=(0,o.G)("laptop"),x=(0,l.TA)({initialValues:{notes:""},onSubmit:e=>{p(e.notes),m()}});(0,d.useEffect)(()=>{t&&x.setFieldValue("notes",f)},[t]),(0,d.useEffect)(()=>{h&&t&&m()},[h,m,t]);let g=(0,d.useCallback)(()=>(x.submitForm(),Promise.resolve()),[]);return h?null:(0,i.jsxs)(a.p,{title:(0,c.__)("Booking notes"),isOpen:t,setOpen:n,onOpen:u,onClose:m,children:[(0,i.jsx)(a.p.Header,{onClose:m}),(0,i.jsx)(a.p.Body,{children:(0,i.jsx)(a.p.Body.Section,{children:(0,i.jsx)("form",{onSubmit:x.handleSubmit,children:(0,i.jsx)(r.K,{placeholder:(0,c.__)("Include comments or requests about your booking"),label:(0,c.__)("Booking notes"),isLabelHidden:!0,name:"notes",onChange:x.handleChange,value:x.values.notes})})})}),(0,i.jsx)(a.p.Footer,{children:(0,i.jsx)(s.z,{id:"primaryAction",variant:"primary",onAction:g,isFull:!0,children:(0,c.__)("Done")})})]})}},92844:function(e,t,n){"use strict";var i=n(785893),o=n(89760),a=n(587495),r=n(770546),s=n(565704),l=n(569232);t.Z=e=>{let{isOpen:t,onOpen:n,onClose:d,setOpen:c,content:u,title:m,onAccept:p}=e;return(0,i.jsxs)(o.p,{title:m,isOpen:t,onOpen:n,onClose:d,setOpen:c,mobileHeight:"hug",qaType:"cancellation-modal",children:[(0,i.jsx)(o.p.Header,{onClose:d}),(0,i.jsx)(o.p.Body,{children:(0,i.jsx)(o.p.Body.Section,{children:(0,i.jsx)(a.x,{font:"body-s-regular",children:(0,i.jsx)(s.U,{as:"span",children:u})})})}),(0,i.jsx)(o.p.Footer,{children:(0,i.jsx)(r.z,{id:"primaryAction",variant:"primary",onAction:p,isFull:!0,qaType:"cancellation-modal-button",children:(0,l.__)("Accept and confirm")})})]})}},606960:function(e,t,n){"use strict";n.d(t,{Z:function(){return i.Z}});var i=n(92844)},580301:function(e,t,n){"use strict";n.d(t,{H:function(){return _}});var i=n(785893),o=n(667294),a=n(665049),r=n(89760),s=n(794067),l=n(587495),d=n(135424),c=n(625196),u=n(781358),m=n(770546),p=n(633510),f=n(520899),h=n(569232);let x=e=>{let{isOpen:t,onOpen:n,onClose:o,setOpen:a,depositPolicyContent:x,onPay:g,paymentMethod:{brand:_,description:b}}=e;return(0,i.jsxs)(r.p,{title:(0,h.__)("Pay deposit to confirm"),isOpen:t,onOpen:n,onClose:o,setOpen:a,mobileHeight:"hug",qaType:"pay-deposit-modal",children:[(0,i.jsx)(r.p.Header,{onClose:o}),(0,i.jsx)(r.p.Body,{children:(0,i.jsx)(r.p.Body.Section,{children:(0,i.jsxs)(s.k,{direction:"vertical",gap:"200",children:[(0,i.jsx)(l.x,{font:"body-s-regular",children:x}),(0,i.jsxs)(d.H,{children:[(0,i.jsx)(d.H.Prefix,{leftSection:"string"==typeof _?(0,i.jsx)(c.o,{variant:(0,p.v)(_),size:"xl"}):_}),(0,i.jsx)(d.H.Content,{children:(0,i.jsx)(d.H.Row,{leftSection:(0,i.jsx)(l.x,{font:"body-s-medium",children:b}),leftSectionAlignment:"center"})})]})]})})}),(0,i.jsx)(r.p.Footer,{children:"apple-pay"===_?(0,i.jsx)(u.K,{gap:"300",unsafeStyle:{inlineSize:"100%"},children:(0,i.jsx)(f.x,{payWithApplePay:g})}):(0,i.jsx)(m.z,{id:"primaryAction",variant:"primary",onAction:g,isFull:!0,size:"l",children:(0,h.__)("Pay now")})})]})},g="deposit",_=e=>{let{deposit:t,handleDepositPaid:n,paymentMethod:r}=e,{closeModal:s,isOpen:l,setOpen:d,openModal:c}=(0,a.W)({key:g,replace:!0}),u=(0,o.useCallback)(()=>(n(),s(),Promise.resolve()),[s,n]);return t?(0,i.jsx)(x,{onClose:s,onOpen:c,isOpen:l,setOpen:d,onPay:u,depositPolicyContent:t.content,paymentMethod:r}):null};_.key=g},891730:function(e,t,n){"use strict";n.d(t,{F:function(){return a}});var i=n(785893),o=n(341328);let a=e=>{let{title:t,content:n,termsAndConditionsTitle:a,termsAndContitionsContent:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{title:t,content:n,qaType:"deposit-info"}),a&&r?(0,i.jsx)(o.Z,{title:a,content:r}):null]})}},916576:function(e,t,n){"use strict";n.d(t,{q:function(){return d}});var i=n(785893),o=n(920518),a=n(770546),r=n(80128),s=n(569232);let l="reservation-error",d=e=>{let{error:t,hasExpired:n,expireDuration:d,...c}=e,u="timeslotSelectionLink"in c?c.timeslotSelectionLink:void 0,m="timeslotSelectionOnAction"in c?c.timeslotSelectionOnAction:void 0,p="servicesSelectionLink"in c?c.servicesSelectionLink:void 0,f="servicesSelectionOnAction"in c?c.servicesSelectionOnAction:void 0;if(n)return(0,i.jsx)(o.u,{qaType:l,icon:r.ANZ,header:(0,s.gl)("Confirmation Expired Header","Session timeout"),description:d?(0,s.__)("You didn't complete your booking within %{duration} minutes",{duration:Math.round(d/60)}):(0,s.__)("You didn't complete your booking within given time frame"),primaryAction:(0,i.jsx)(a.z,{qaType:"expired-button",size:"m",variant:"primary",linkTo:u,onAction:m,children:(0,s.gl)("Link to Time Selection Step","Try again")})});if(t){if("extensions"in t&&t.extensions){let e=t.extensions.formattedMessage,n=t.message,d=t.extensions.code;return"BAD_USER_INPUT"===d?(0,i.jsx)(o.u,{qaType:l,icon:r.P4w,header:(0,s.__)("An error occurred"),description:e||n,primaryAction:(0,i.jsx)(a.z,{qaType:"time-unavailable-button",size:"m",variant:"primary",linkTo:u,onAction:m,children:(0,s.gl)("Link to Time Selection Step","Select another time")})}):"UNPROCESSABLE"===d?(0,i.jsx)(o.u,{qaType:l,icon:r.P4w,header:(0,s.__)("An error occurred"),description:e||n,primaryAction:p||f?(0,i.jsx)(a.z,{qaType:"reservation-unprocessable-button",size:"m",variant:"primary",linkTo:p,onAction:f,children:(0,s.gl)("Link to Services Selection Step","Try again")}):void 0}):(0,i.jsx)(o.u,{qaType:l,icon:r.P4w,header:(0,s.__)("An error occurred"),description:e||n})}return(0,i.jsx)(o.u,{qaType:l,icon:r.P4w,header:(0,s.__)("An error occurred"),description:(0,s.__)("Hang tight while we try to solve the problem")})}return null}},746878:function(e,t,n){"use strict";n.d(t,{V:function(){return u}});var i=n(785893),o=n(794067),a=n(587495),r=n(985744),s=n(770546),l=n(993062),d=n(667294),c=n(234308);let u=e=>{let{usedPromotionCode:t,updateReservationPromotionCode:n}=e,[u,m]=(0,d.useState)(""),[p,f]=(0,d.useState)(""),h=(0,d.useCallback)(e=>(f(""),m(e.target.value.toUpperCase())),[]),x=async()=>{if(""===u)return f((0,c.__)("Invalid code. Got a gift card? Redeem at venue")),Promise.resolve();let e=await n(u);return e?f(e):(f(""),m("")),Promise.resolve()};return(0,i.jsxs)(o.k,{direction:"vertical",gap:"200",children:[(0,i.jsx)(a.x,{font:"header-s-semibold",mb:"25",children:(0,c.__)("Discount code")}),(0,i.jsx)(o.k,{direction:"horizontal",alignItems:"flex-end",gap:"100",children:(0,i.jsx)(r.n,{qaType:"discount-code-input",inputMode:"text",error:p,placeholder:(0,c.__)("Enter discount code"),label:(0,c.__)("Discount code"),isLabelHidden:!0,"aria-hidden":!0,value:u,onChange:h,fieldSuffix:(0,i.jsx)(s.z,{variant:"secondary",onAction:x,qaType:"discount-code-button",size:"l",children:(0,c.__)`Apply`})})}),!!t?.name&&(0,i.jsx)(l.X,{hasIcon:!1,variant:"positive",title:t.name,description:t.code||"",dismissIcon:"trash",qaType:"discount-code-callout-banner",onDismiss:()=>n(null)})]})}},341328:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(785893),o=n(587495);n(667294);var a=n(565704),r=e=>{let{title:t,content:n,qaType:r}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.x,{font:"header-s-semibold",mb:"25",qaType:r?`${r}-header`:void 0,children:t}),(0,i.jsx)(o.x,{font:"body-s-regular",qaType:r?`${r}-content`:void 0,children:(0,i.jsx)(a.U,{as:"span",children:n})})]})}},606204:function(e,t,n){"use strict";n.d(t,{Y:function(){return e4},Z:function(){return e6}});var i=n(785893),o=n(380270),a=n(667294),r=n(699378),s=n(940907),l=n(973314),d=n(268930),c=n(899760),u=n(400645),m=n(702203),p=n(234308),f=n(806483),h=n(194239),x=n(25869),g=n(84392),_=n(654796),b=n(636729),y=n(550705),v=n(924899),j=n(859854),S=n(899877),w=n(266753),k=n(681876),A=n(958399),C=n(652989),B=n(507603),F=n(751450),T=n(613374),I=n(68572),D=n(138695),R=n(222921),P=n(710768),N=n(241839),O=n(794067),L=n(587495),M=n(784748),E=n(485563),z=n(648145),H=n(956224),q=n(112628),W=n(901313),$=n(386010),U=n(850308),G=n.n(U),V=n(826246),X=n(80128),K=n(81880),Y=n(108529),Z=n(287826),J=n(135424),Q=n(347316);let ee=e=>{let{employee:t}=e;return"avatar"in t?(0,i.jsxs)(J.H,{qaType:"selected-staff-row-on-mobile-time-step",children:[(0,i.jsx)(J.H.Prefix,{rightSection:(0,i.jsx)(Q.X,{id:"cart-avatar",firstName:"",src:t?.avatar?.url,rating:t.rating??void 0,size:"2xl"})}),(0,i.jsx)(J.H.Content,{children:(0,i.jsx)(J.H.Row,{leftSection:(0,i.jsxs)(O.k,{direction:"vertical",children:[(0,i.jsx)(L.x,{font:"body-s-semibold",qaType:"employee-first-name",children:t?.firstName}),t.title?(0,i.jsx)(L.x,{font:"body-s-regular",color:"neutralFaded",qaType:"employee-title",children:t.title}):null]})})})]}):null};var et=n(734800);let en=(e,t)=>{let n=(0,a.useRef)(!1);(0,a.useEffect)(()=>{e&&!n.current&&(t(e),n.current=!0)},[e,t])};var ei=n(1566);let eo=e=>{let{className:t,firstName:n,lastName:o,fullName:a,avatarUrl:r,avatarUseInitials:s}=e;return(0,i.jsxs)(J.H,{qaType:"current-guest-configured",unsafeClassName:t,children:[(0,i.jsx)(J.H.Prefix,{leftSection:(0,i.jsx)(ei.q,{firstName:s?n:"",lastName:s?o:"",src:r,size:"l"})}),(0,i.jsx)(J.H.Content,{children:(0,i.jsx)(J.H.Row,{leftSection:(0,i.jsx)(O.k,{direction:"vertical",children:(0,i.jsx)(L.x,{font:"body-m-semibold",children:a})})})})]})};var ea=n(89760),er=n(781358),es=n(82654),el=n(804601),ed=n(770546);let ec=()=>{},eu=e=>{let{isOpen:t,onClose:n,initialBookableId:o,selectedItem:a,onPackageToggle:r,disableServicesSelection:s,onDisabledAddClick:l}=e,{formattedRetailPrice:d,description:c,includes:u,discount:m}=a,f=()=>s&&!o&&l?l():(r(a),n()),h={onAction:f,variant:"secondary",qaType:"package-modal-remove-from-booking",children:(0,p.__)("Remove")},x={onAction:f,variant:"primary",qaType:"package-modal-add-to-booking",children:(0,p.__)("Add to booking")};return(0,i.jsxs)(ea.p,{title:a.name,isOpen:t,setOpen:ec,onOpen:ec,onClose:n,qaType:"package-modal",size:"wide",children:[(0,i.jsx)(ea.p.Header,{onClose:n,qaType:"package-modal-header"}),(0,i.jsx)(ea.p.Body,{children:(0,i.jsxs)(ea.p.Body.Section,{children:[(0,i.jsx)(L.x,{color:"neutralFaded",font:"body-m-regular",qaType:"package-modal-caption",children:a.caption}),(0,i.jsxs)(er.K,{as:"span",gap:"100",direction:"horizontal",children:[(0,i.jsx)(L.x,{font:"body-m-medium",mb:"150",qaType:"package-modal-price",children:d}),m?(0,i.jsx)(L.x,{font:"body-m-regular",color:"positive",qaType:"offer-item-discount",children:m.description}):null]}),c?(0,i.jsx)(es.u,{characterLimit:170,font:"body-s-regular",qaType:"package-modal-description",children:c}):null,(0,i.jsx)(el.i,{verticalGap:"250"}),(0,i.jsx)(L.x,{font:"header-s-semibold",mb:"250",children:(0,p.gl)("What's included in service package","What's included")}),(0,i.jsx)(er.K,{direction:"vertical",gap:"200",children:u.map(e=>{let{caption:t,name:n}=e;return(0,i.jsxs)("div",{"data-qa":"package-modal-package-item",children:[(0,i.jsx)(L.x,{font:"body-m-medium",qaType:"package-modal-package-item-name",children:n}),(0,i.jsx)(L.x,{color:"neutralFaded",font:"body-s-regular",children:t})]},`${n}-${t}`)})})]})}),(0,i.jsx)(ea.p.Footer,{children:(0,i.jsx)(ed.z,{isFull:!0,size:"l",...o?h:x})})]})};var em=n(123962);function ep(e){let{id:t,membershipId:n,onAction:o,suffix:r,unsafeClassName:s,qaType:l,isDisabled:d}=e,c=(0,F.l)(),u=(0,a.useMemo)(()=>{let e=c.location&&"userMemberships"in c.location&&c.location.userMemberships||[];return e?.find(e=>e.id===n)},[c.location,n]);return(0,i.jsx)("div",{children:(0,i.jsx)(ed.z,{variant:"secondary",shape:"pill",size:"m",id:`memberships-chip-${t}`,onAction:o,isDisabled:d,suffix:r,unsafeClassName:s,qaType:l,children:u?(0,p.__)("Applied: %{membership}",{membership:u.name}):(0,p.__)(r?"Select membership":"Included in membership")})})}let ef=(e,t)=>{if("Service"===e.__typename){let n=e.variants.find(e=>{let{bookableId:n}=e;return n===t});return{...e,variants:[n]}}if("Package"===e.__typename)return e;throw Error("Invalid item type")},eh=e=>{let{isOpen:t,onClose:n,onServiceVariantChange:o,onServiceVariantRemove:r,initialBookableId:s,selectedItem:l,onDisabledAddClick:d}=e,{variants:c}=l,u=c.length>1,{groupBookingAttendeeReference:m}=(0,D.f)(),{addSuccessToast:f}=(0,g.e)(),{cart:h}=(0,S.j)(),x=(0,F.l)(),{selectedListItemMembership:_,setSelectedListItemMembership:b,setListSelectedItem:v,selectedListItemVariant:j,setSelectedListItemVariant:w,membershipModal:{openMembershipsModal:k},membershipHasBeenChanged:A,disableServicesSelection:C}=(0,et.tw)(),B=()=>n().then(()=>{b(void 0),v(null),w(null)});(0,a.useEffect)(()=>{_&&j&&!j.userMemberships?.find(e=>e.id===_.id)&&(b((0,y.uV)({cartItems:h.items,membershipIds:(0,y.D4)({preLeaseItem:l,variantBookableId:j.bookableId}),memberships:x.location?.userMemberships,attendeeReference:m})),f((0,p.__)`Membership changed`))},[j]),(0,a.useEffect)(()=>{t&&!j&&w(s)},[s,t]);let T=()=>{let e=j?.bookableId||l.variants[0].bookableId;return o({...ef(l,e),membershipId:_?.id??null},s),B()},I=u&&s!==j?.bookableId&&s||!!s&&A,R=!!s,P=!s,N=[R&&(0,i.jsx)(ed.z,{variant:"secondary",onAction:()=>(s&&r(s),n()),size:"l",isFull:!0,qaType:"service-modal-remove-from-booking",children:(0,p.gl)("CTA to remove service from cart","Remove")},"remove"),I&&(0,i.jsx)(ed.z,{onAction:T,size:"l",isFull:!0,qaType:"service-modal-update-booking",children:(0,p.gl)("CTA for changing service variant in cart","Update")},"update"),P&&(0,i.jsx)(ed.z,{onAction:C?d:T,size:"l",isFull:!0,isDisabled:!!(u&&!j),qaType:"service-modal-add-to-booking",children:(0,p.gl)("CTA to add service to cart","Add to booking")},"add")];return(0,i.jsx)(em.r,{isOpen:t,onClose:n,selectedItem:l,onSelectionChange:w,selectedVariant:j?.bookableId||null,selectedMembership:_?.id,membershipsChip:1===(m||1)&&(0,y.jZ)({preLeaseItem:l})?(0,i.jsx)(ep,{isDisabled:C||!!(j&&!j.userMemberships?.length),id:l.id,membershipId:_?.id,onAction:()=>(k(),Promise.resolve()),suffix:(0,i.jsx)(ed.z.IconAffix,{icon:X.v4q}),qaType:"service-modal-membership-chip"}):void 0,buttons:N})},ex=e=>{let{attendeeReference:t,cartItems:n,listSelectedItem:i}=e;if(i?.__typename==="Service"){let e=i.variants.map(e=>{let{bookableId:t}=e;return t});return n.find(n=>e.includes(n.bookableId)&&n.attendeeReference===t)?.bookableId??null}return i?.__typename==="Package"?n.find(e=>e.bookableId===i.bookableId&&e.attendeeReference===t)?.bookableId??null:null};var eg=()=>{let{addErrorToast:e}=(0,g.e)(),{cart:t}=(0,S.j)(),{groupBookingAttendeeReference:n}=(0,D.f)(),{listSelectedItem:o,detailsModal:{closeDetailsModal:r,isDetailsModalOpen:s},onServiceVariantChange:l,onServiceVariantRemove:d,onPackageToggle:c,disableServicesSelection:u}=(0,et.tw)();if((0,a.useEffect)(()=>{!o&&s&&r()},[o,r,s]),!o||!s)return null;let m=ex({attendeeReference:n,cartItems:t.items.map(C.qC),listSelectedItem:o}),f=()=>(e((0,p.dw)("You can only add %{maxServicesCount} service to your booking","You can only add %{maxServicesCount} services to your booking",I.m,{maxServicesCount:I.m}),{qaType:"cart-limit-reached-toast"}),Promise.resolve());return"Service"===o.__typename?(0,i.jsx)(eh,{isOpen:s,onClose:r,onServiceVariantChange:l,onServiceVariantRemove:d,selectedItem:o,initialBookableId:m,onDisabledAddClick:f}):"Package"===o.__typename?(0,i.jsx)(eu,{onPackageToggle:c,isOpen:s,onClose:r,selectedItem:o,initialBookableId:m,onDisabledAddClick:f,disableServicesSelection:u}):null},e_=n(484321),eb=n(565704);function ey(e){let{qaType:t="upsell-banner",upsellableMembership:n,selectedItemsIds:o}=e,{locationSlug:a}=(0,l.UO)(),r=(0,l.lr)(),s=(0,x.A4q)(a,{...Object.fromEntries(r.entries()),bookingFlow:!0,selected:n.membership.id,offerItems:o.join(",")});return(0,i.jsxs)(J.H,{linkTo:s,variant:"high",qaType:t,children:[(0,i.jsx)(J.H.Prefix,{leftSection:(0,i.jsx)(X.Que,{})}),(0,i.jsx)(J.H.Content,{children:(0,i.jsx)(J.H.Row,{leftSection:(0,i.jsx)(L.x,{font:"body-s-regular",children:(0,i.jsx)(eb.U,{as:"span",children:n.formattedBannerText})})})}),(0,i.jsx)(J.H.Suffix,{rightSection:(0,i.jsx)(X.XCv,{})})]})}var ev=n(50911),ej=n.n(ev);let eS=(e,t)=>"Service"===e.__typename?e.variants.find(e=>{let{bookableId:n}=e;return t.includes(n)}):"Package"===e.__typename&&t.includes(e.bookableId)?e:void 0,ew=e=>{let{item:t,selectedItemsIds:n,disableServicesSelection:i}=e,{captionShort:o,discount:a,formattedRetailPrice:r,description:s}=t,l=eS(t,n),d=!!l,c={isChecked:d,isDisabled:i&&!d};return l?{...c,captionShort:l.captionShort,formattedRetailPrice:l.formattedRetailPrice,discount:l.discount?.description,description:s}:{...c,captionShort:o,formattedRetailPrice:r,discount:a?.description,description:s}};var ek=e=>{let{item:t,onRowIconClick:n,upsellMemberships:o,onIntersectionIn:r,onIntersectionOut:s}=e,{cart:l}=(0,S.j)(),{onViewItemEvent:d}=(0,w.my)(),c=!!l.groupAttendees?.length,{groupBookingAttendeeReference:u}=(0,D.f)(),m=(0,a.useRef)(null),f=(0,C.Gb)(c,l.bookableItems,u);(0,K.Or)(m,{onShow:()=>r(t),onHide:()=>s(t)});let{detailsModal:{openDetailsModal:h},disableServicesSelection:x}=(0,et.tw)(),g=(0,M.G)("tablet"),{id:_,name:b}=t,v=o[_],j=(0,y.jZ)({preLeaseItem:t}),{captionShort:k,description:A,discount:B,formattedRetailPrice:F,isChecked:T,isDisabled:I}=ew({disableServicesSelection:x,item:t,selectedItemsIds:f}),P=(0,a.useMemo)(()=>l.items.reduce((e,t)=>({...e,...t.id&&{[t.id]:t}}),{}),[l.items]),N=(0,a.useCallback)(()=>(d({offerItem:(0,R.d)(t)}),h(t)),[t,d,h]),O=(0,a.useCallback)(()=>{n(t,()=>h(t))},[t,n,h]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:m,children:(0,i.jsx)(W.o.Item,{isChecked:T,isDisabled:I,variant:"low",primitiveType:"cumulative",value:t.id,primitiveActionText:(0,p.__)("Add %{service} to cart",{service:b}),onAction:N,onPrimitiveAction:O,qaType:"offer-item",children:e=>{let{labelProps:n,descriptionProps:o}=e,a=P[t.id],r=a&&"membershipId"in a?a.membershipId:null;return(0,i.jsxs)("div",{className:ej().content,children:[(0,i.jsx)(L.x,{as:"h3",mb:"25",...n,font:"body-m-medium",overflow:"break",qaType:"offer-item-name",children:b}),(0,i.jsx)(L.x,{font:"body-s-regular",color:"neutralFaded",mb:"25",qaType:"offer-item-caption",children:k}),A?(0,i.jsx)(L.x,{...o,color:"neutralFaded",font:"body-s-regular",noWrap:!0,overflow:"ellipsis",qaType:"offer-item-description",children:A}):null,(0,i.jsxs)(er.K,{as:"span",gap:"100",direction:"horizontal",unsafeClassName:ej().pricing,children:[(0,i.jsx)(L.x,{font:"body-s-medium",qaType:"offer-item-price",children:F}),B?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(L.x,{font:"body-s-medium",color:"neutralFaded",children:" \xa0•\xa0 "}),(0,i.jsx)(L.x,{font:"body-s-regular",color:"positive",qaType:"offer-item-discount",children:B})]}):null]}),"Service"===t.__typename&&1===(u||1)&&j?(0,i.jsx)(ep,{id:t.id,membershipId:r,onAction:()=>h(t),unsafeClassName:ej().membership,qaType:"offer-item-membership-chip"}):null]})}})}),g&&v&&"Service"===t.__typename&&!j?(0,i.jsx)("div",{className:ej().membership,children:(0,i.jsx)(ey,{upsellableMembership:v,selectedItemsIds:f,qaType:`upsell-banner-${_}`})}):null]})},eA=n(629177),eC=n(465836),eB=n.n(eC);let eF=(e,t,n,i,o,a,r,s,l,d)=>{let c={...s?{menu:s}:{},...r?{marketingToken:r}:{}};return[l&&{title:(0,p.gl)("Link to the group booking flow","Group appointment"),description:(0,p.gl)("Description below the group booking flow link","Book for yourself and others"),onAction:d,id:"try-sth-else-group-appointments-option"},n&&{title:(0,p.__)`Membership`,description:(0,p.gl)("Section description (Membership)","Bundle your services in to a membership"),linkTo:(0,x.iAm)(e,c),id:"try-sth-else-membership-option"},o&&{title:(0,p.__)`Voucher`,description:(0,p.gl)("Section description (Voucher)","Treat yourself or a friend to future visits"),linkTo:(0,x.WCI)(e,c),id:"try-sth-else-voucher-option"},t&&{title:(0,p.__)`Gift cards`,description:(0,p.gl)("Section description (Gift cards)","Treat yourself or a friend to future visits"),linkTo:(0,x.pWD)(e,c),id:"try-sth-else-gift-cards-option"},i&&a&&{title:(0,p.__)`Products`,description:(0,p.gl)("Section description (Products)","Buy products online"),linkTo:(0,x.nox)(a,{utm_medium:"link",utm_campaign:"link+builder"}),id:"try-sth-else-products-option"}].filter(eA.y)};function eT(e){let{offersMemberships:t,offersVouchers:n,offersGiftCards:o,offersProducts:r,hasGroupAppointments:s,locationSlug:l,marketingTokenSearchParam:d,menuSearchParam:c,productStoreSlug:u,onGroupAppointmentsClick:m}=e,f=t||n||o||r,h=(0,a.useMemo)(()=>eF(l,o,t,r,n,u,d,c,s,m),[l,o,t,r,n,u,d,c,s,m]);return f?(0,i.jsxs)("div",{className:eB().self,children:[(0,i.jsx)(L.x,{font:"header-m-semibold",children:(0,p.gl)("Title of a section offering vouchers, memberships etc.","Try something else")}),(0,i.jsx)(er.K,{as:"ul",gap:"150",direction:"vertical",children:h.map(e=>{let{title:t,description:n,linkTo:o,onAction:a,id:r}=e;return(0,i.jsx)(J.H,{id:r,variant:"medium",linkTo:o,onAction:a,children:(0,i.jsxs)("div",{className:eB().optionContainer,children:[(0,i.jsx)(L.x,{font:"body-m-medium",mb:"25",children:t}),(0,i.jsx)(L.x,{font:"body-s-regular",color:"neutralFaded",children:n})]})},t)})})]}):null}var eI=n(237665),eD=n.n(eI);let eR=[],eP=a.memo(e=>{let{name:t,description:n}=e;return(0,i.jsxs)(O.k,{gap:"50",unsafeClassName:eD().offerItemsList__headerWrapper,direction:"column",children:[(0,i.jsx)(L.x,{font:{default:"header-s-semibold",laptop:"header-m-semibold"},overflow:"break",children:t}),n?(0,i.jsx)(L.x,{font:"body-m-regular",overflow:"break",unsafeClassName:eD().offerItemsList__headerDescription,children:n}):null]})}),eN=a.memo(e=>{let{item:t,onRowIconClick:n,onItemIntersectionIn:o,onItemIntersectionOut:a,upsellMemberships:r}=e;return(0,i.jsx)("div",{className:(0,$.default)(eD().offerItemsList__item,t.isLast&&eD()["offerItemsList__item--last"]),children:(0,i.jsx)(ek,{item:t,onRowIconClick:n,upsellMemberships:r,onIntersectionIn:o,onIntersectionOut:a})})}),eO=(e,t,n)=>"LocationServiceCatalogCategory"===t.__typename?(0,i.jsx)(eP,{name:t.name,description:t.description}):"Service"===t.__typename||"Package"===t.__typename?(0,i.jsx)(eN,{item:t,upsellMemberships:n.upsellMemberships,onItemIntersectionIn:n.onItemIntersectionIn,onItemIntersectionOut:n.onItemIntersectionOut,onRowIconClick:n.onRowIconClick}):null,eL=e=>{let{serviceCatalog:t,onRowIconClick:n,onBack:o,onContinue:r,upsellMemberships:s,latestUpsellMembership:d,searchItemToOpen:c,groupBookingAttendeeReference:u}=e,{cart:m}=(0,S.j)(),{detailsModal:{openDetailsModal:f},offersGiftCards:h,offersMemberships:x,offersProducts:g,offersVouchers:_,productStoreSlug:b,listSelectedItem:y,hasGroupAppointments:v}=(0,et.tw)(),w=(0,M.G)("tablet"),k=(0,a.useRef)(null),A=(0,a.useRef)(!1),{typeOfBookingFlow:C,setTypeOfBookingFlow:B}=(0,j.Wq)(),F=(0,a.useMemo)(()=>m.bookableItems.filter(e=>e.attendeeReference===u).map(e=>e.bookableId),[m.bookableItems,u]),{locationSlug:I}=(0,l.UO)(),D=(0,l.lr)(),R=m.groupAttendees?.findIndex(e=>e.reference===u)??-1,P=m.groupAttendees[R],N="groupBooking"===C||"groupBookingSkipTeamStepInNavigation"===C,[O,U]=(0,a.useState)(!1),[J,Q]=(0,a.useState)(!0),[ei,ea]=(0,a.useState)(!1),er=(0,a.useRef)(new Set),[es,el]=(0,a.useState)(t[0]?.id??null),[ed,ec]=(0,a.useState)(!1),[eu,em]=a.useState(0),[ep,ef]=a.useState(0),eh=(0,a.useRef)(null),ex=(0,a.useRef)({});en(c,f);let eb=(0,a.useCallback)(e=>()=>{if(eh.current){let t=eh.current.scrollLeft+("left"===e?-1:1)*eh.current.clientWidth/2;eh.current?.scrollTo({left:t,behavior:"smooth"})}return Promise.resolve()},[]),{selectionIndicatorProps:ev,listContainerProps:ej}=(0,E.Q)(eh,es),eS=(0,a.useMemo)(()=>{let e=0,n=[];return t.forEach(t=>{let{items:i,...o}=t;n.push({...o,index:e}),i.forEach((t,i,a)=>{e++,n.push({...t,categoryId:o.id,isLast:i===a.length-1,index:e})}),e++}),n},[t]),ew=e=>{let n=eS.findIndex(t=>"LocationServiceCatalogCategory"===t.__typename&&t.id===e)||0;0===n?k.current?.scrollTo({behavior:"auto",top:-2*164}):k.current?.scrollToIndex({index:n,behavior:"auto",offset:-164}),n===t.length-1&&(A.current=!0),el(e)},ek=(0,a.useCallback)(e=>{A.current||el(e.categoryId),er.current.add(e.index)},[]),eA=(0,a.useCallback)(e=>{er.current.delete(e.index)},[]),eC=(0,a.useMemo)(()=>F.map(e=>eS.findIndex(t=>"Package"===t.__typename?t.bookableId===e:"Service"===t.__typename?t.variants.find(t=>t.bookableId===e):null)).sort((e,t)=>e-t),[F,eS]),eB=(0,a.useCallback)(e=>(("string"==typeof e.index||"number"==typeof e.index&&e.index>=0)&&k.current?.scrollToIndex({align:"center",behavior:"smooth",...e}),Promise.resolve()),[]),eF=(0,a.useMemo)(()=>{if(!N){let e=m.items.map(e=>e.id),t=eS.findIndex(t=>"LocationServiceCatalogCategory"!==t.__typename&&e.includes(t.id));if(t>=0)return{index:t,align:"center",behavior:"auto"}}return 0},[]),eI=(0,a.useCallback)(()=>{let e=Math.min(...er.current);return eB({index:eC.reverse().find(t=>t<e)||0})},[eC,eB]),eP=(0,a.useCallback)(()=>{let e=Math.max(...er.current);return eB({index:eC.find(t=>t>e)||"LAST"})},[eC,eB]),eN=(0,a.useCallback)(e=>{let t=Math.min(...er.current),n=Math.max(...er.current);return em(eC.filter(e=>e<t).length),ef(eC.filter(e=>e>n).length),ec(e)},[eC]),eL=(0,a.useCallback)(e=>{A.current=e,e&&t.length>0&&el(t[t.length-1].id)},[t]);(0,a.useEffect)(()=>{let e=eh.current,t=ex.current[es];e&&t&&e.scrollTo({left:t.offsetLeft})},[es]);let eM=P?(0,Y.D)(P,R):null;return(0,i.jsxs)(Z.MZ,{title:(0,p.__)`Select services`,step:N?"groupGuestsAndServices":"serviceSelection",onBack:o,onContinue:r,disableExitModal:!m.items.length,withShadowOnScroll:w||1===t.length,children:[(0,i.jsx)(eg,{},y?.id),(0,i.jsx)(e_.N,{}),m.employee?(0,i.jsx)(z.E,{display:{default:"flex",laptop:"none"},children:(0,i.jsx)("div",{className:eD().selectedStaffRow,children:(0,i.jsx)(ee,{employee:m.employee})})}):null,(0,i.jsxs)(K.ck,{children:[(0,i.jsx)(K.Xu,{className:eD().tabsStructureAnchor,onShow:()=>ea(!1),onHide:()=>ea(!0)}),!!N&&(0,i.jsx)(eo,{className:(0,$.default)(eD().guestRow,eD().guestRowListItem),firstName:eM?.firstName,lastName:eM?.lastName,fullName:eM?.fullName,avatarUrl:0===R?P.avatarUrl||"":void 0,avatarUseInitials:eM?.isAnActualName||!1}),t.length>1&&(0,i.jsx)("div",{className:(0,$.default)(eD().tabsStructure,ei&&eD()["tabsStructure--scrolled"]),children:(0,i.jsxs)(H.F,{variant:"pill",backgroundVariant:"onPage",children:[(0,i.jsx)(H.F.ScrollShadow,{location:"start",visible:!J&&O}),(0,i.jsxs)(H.F.Rail,{padding:"responsive",ref:eh,children:[(0,i.jsx)(K.Xu,{onShow:()=>Q(!0),onHide:()=>Q(!1)}),(0,i.jsx)(H.F.SelectionIndicator,{...ev}),(0,i.jsx)(H.F.ListContainer,{...ej,children:t.map(e=>{let{id:t,name:n}=e;return(0,i.jsx)("li",{children:(0,i.jsx)(H.F.Item,{ref:e=>{e&&(ex.current[t]=e)},"aria-selected":es===t,onClick:()=>ew(t),unsafeClassName:eD().tabsStructure__button,children:n})},t)})}),(0,i.jsx)(K.Xu,{onShow:()=>U(!0),onHide:()=>U(!1)})]}),(0,i.jsx)(H.F.ScrollShadow,{location:"end",visible:!O}),O&&J?null:(0,i.jsx)(H.F.ChevronControls,{prevAction:eb("left"),nextAction:eb("right"),isPrevDisabled:J,isNextDisabled:O})]})})]}),eu>0&&(0,i.jsx)("div",{className:(0,$.default)(eD().selectionOffscreenContainer,eD().selectionOffscreenAbove),children:(0,i.jsxs)(q.Y,{id:"button-scroll-up",className:(0,$.default)(ed&&eD().selectionOffscreenScrolling,eD().selectionOffscreenButton),onAction:eI,excludeFromTabOrder:!0,children:[(0,i.jsx)(L.x,{font:"body-s-regular",color:"accent",children:(0,p.dw)("%{numberOfSelectionsAbove} selected service","%{numberOfSelectionsAbove} selected services",eu,{numberOfSelectionsAbove:eu})}),(0,i.jsx)(X.Hf3,{color:"accent"})]})}),(0,i.jsx)(K.ck,{rootMargin:"-164px 0px 0px 0px",children:(0,i.jsxs)("div",{className:eD().offerItemsList,children:[(0,i.jsx)(W.o,{name:"services-choice-list",gap:"0",value:eR,onChange:G(),choiceType:"multiple",children:(0,i.jsx)(V.OO,{initialTopMostItemIndex:eF,atBottomStateChange:eL,atBottomThreshold:328,context:{onRowIconClick:n,onItemIntersectionIn:ek,onItemIntersectionOut:eA,upsellMemberships:s},data:eS,isScrolling:eN,itemContent:eO,overscan:{reverse:window.innerHeight,main:0},ref:k,useWindowScroll:!0})}),(0,i.jsxs)("div",{className:eD().floatingBottomBar,children:[ep>0&&(0,i.jsx)("div",{className:(0,$.default)(eD().selectionOffscreenContainer,eD().selectionOffscreenBelow),children:(0,i.jsxs)(q.Y,{id:"button-scroll-down",className:(0,$.default)(ed&&eD().selectionOffscreenScrolling,eD().selectionOffscreenButton),onAction:eP,excludeFromTabOrder:!0,children:[(0,i.jsx)(L.x,{font:"body-s-regular",color:"accent",children:(0,p.dw)("%{numberOfSelectionsBelow} selected service","%{numberOfSelectionsBelow} selected services",ep,{numberOfSelectionsBelow:ep})}),(0,i.jsx)(X.veu,{color:"accent"})]})}),!w&&d?(0,i.jsx)(ey,{upsellableMembership:d,selectedItemsIds:F}):null]})]})}),!N&&(0,i.jsx)(eT,{offersGiftCards:h,offersMemberships:x,offersProducts:g,offersVouchers:_,productStoreSlug:b,hasGroupAppointments:v,onGroupAppointmentsClick:()=>(B(T.e0.GROUP_BOOKING),Promise.resolve()),marketingTokenSearchParam:D.get("marketingToken")??void 0,menuSearchParam:D.get("menu")??void 0,locationSlug:I})]})};var eM=n(304616),eE=n(293668),ez=n.n(eE);let eH=e=>{let{_isAnimated:t}=e;return(0,i.jsx)(W.o.Item,{variant:"low",value:"",children:()=>(0,i.jsx)(J.H.Row,{leftSection:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:ez().name,children:(0,i.jsx)(eM.O,{width:"216px",height:"8px",isAnimated:t})}),(0,i.jsx)("div",{className:ez().caption,children:(0,i.jsx)(eM.O,{width:"80px",height:"8px",isAnimated:t})}),(0,i.jsx)("div",{className:ez().price,children:(0,i.jsx)(eM.O,{width:"128px",height:"8px",isAnimated:t})})]})})})},eq=e=>{let{onBack:t,_isAnimated:n=!0,isGroupBooking:o=!1}=e;return(0,i.jsxs)(Z.MZ,{title:(0,p.__)`Select services`,step:o?"groupGuestsAndServices":"serviceSelection",onBack:t,children:[o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(z.E,{display:{default:"none",tablet:"flex"},children:(0,i.jsx)(eM.O,{width:"612px",height:"80px",shape:"default",isAnimated:n,unsafeClassName:eD().guestRow})}),(0,i.jsx)(z.E,{display:{default:"flex",tablet:"none"},children:(0,i.jsx)(eM.O,{width:"92%",height:"80px",shape:"hard",isAnimated:n,unsafeClassName:eD().guestRow})})]}):null,(0,i.jsx)("div",{className:(0,$.default)(ez().pillsContainer,ez()["stack-animation"]),style:{"--animation-order":1},children:(0,i.jsxs)(er.K,{gap:"200",direction:"horizontal",unsafeClassName:ez().noWrap,children:[(0,i.jsx)(eM.O,{width:"120px",height:"36px",shape:"rounded",isAnimated:n}),(0,i.jsx)(eM.O,{width:"120px",height:"36px",shape:"rounded",isAnimated:n}),(0,i.jsx)(eM.O,{width:"120px",height:"36px",shape:"rounded",isAnimated:n})]})}),(0,i.jsx)(er.K,{gap:{default:"500",laptop:"400"},direction:"vertical",unsafeClassName:ez().offerItemsList,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:(0,$.default)(ez().category,ez()["stack-animation"]),style:{"--animation-order":2},children:(0,i.jsx)(eM.O,{width:"120px",height:"12px",isAnimated:n})}),(0,i.jsxs)(W.o,{name:"services-choice-list",value:[],onChange:()=>{},choiceType:"multiple",children:[(0,i.jsx)("div",{className:ez()["stack-animation"],style:{"--animation-order":3},children:(0,i.jsx)(eH,{_isAnimated:n})}),(0,i.jsx)("div",{className:ez()["stack-animation"],style:{"--animation-order":4},children:(0,i.jsx)(eH,{_isAnimated:n})}),(0,i.jsx)("div",{className:ez()["stack-animation"],style:{"--animation-order":5},children:(0,i.jsx)(eH,{_isAnimated:n})}),(0,i.jsx)("div",{className:ez().stackAnimiation,style:{"--animation-order":6},children:(0,i.jsx)(eH,{_isAnimated:n})})]})]})})]})};var eW=n(730602);let e$=(0,_.B)(`
  query FetchUser {
    user {
      id
      firstName
      lastName
      avatar {
        url
      }
    }
  }
`),eU=e=>{let{isGroupBooking:t}=e,{redirectTo:n}=(0,o.H)(),{locationSlug:i}=(0,l.UO)(),r=(0,l.lr)(),s=(0,a.useMemo)(()=>Object.fromEntries(r.entries()),[r]),{cart:d,setGroupBookingGuest:c}=(0,S.j)(),{data:u=null,isLoading:m}=(0,eW.aT)(t?e$:null,{},{revalidateOnMount:!0});return(0,a.useEffect)(()=>{if(t&&u){let e="guest"in s,t=Number(s.guest)||1;if(e&&d.groupAttendees?.length===1&&0===d.items.length){let{guest:e,...t}=s;u.user&&c({reference:1,firstName:u.user?.firstName||"",lastName:u.user?.lastName||"",isBooker:!0,avatarUrl:u.user?.avatar?.url||void 0}),n((0,x.jHS)(i,t));return}if(t>1&&!d.groupAttendees?.length){n((0,x.cf)(i,s));return}1===t&&u.user?c({reference:1,firstName:u.user?.firstName||"",lastName:u.user?.lastName||"",isBooker:!0,avatarUrl:u.user?.avatar?.url||void 0}):c({reference:t,isBooker:1===t})}},[t,u,m]),{isUserLoading:m}};var eG=n(65608);let eV=e=>{let{providerId:t,searchParams:n}=e,i=n.get("cnToken");(0,a.useEffect)(()=>{i&&"undefined"!==i&&t&&(0,eG.tp)({providerId:t,token:i})},[i,t])};var eX=n(58437),eK=n(885142);let eY=e=>{let{redirectTo:t,pathname:n,searchParams:i,hash:o,locationData:r,isLoading:s,toggleItem:l}=e,d=(0,eX.i)(),[c,u]=(0,a.useState)(null),[m,f]=(0,a.useState)(!1),h=(0,eK.f)(()=>{f(!0);let{offerItemId:e,...a}=Object.fromEntries(i.entries());t({pathname:n,query:a,hash:o})}),{addErrorToast:x}=(0,g.e)();return(0,a.useEffect)(()=>{if(s||!r?.location?.serviceCatalog||m)return;let e=i.get("offerItemId");if(d&&!e){f(!0);return}let t=r.location.serviceCatalog.flatMap(e=>e.items).find(t=>t.id===e);t?"Package"===t.__typename?(l(t),h()):"Service"===t.__typename&&1===t.variants.length?(l({__typename:"Service",variants:[{bookableId:t.variants[0].bookableId}]}),h()):"Service"===t.__typename&&t.variants.length>1?(u(t),h()):f(!0):(h(),x((0,p.__)("Selected item is no longer available"),{size:"expanded",qaType:"invalid-item-id-from-search"}))},[x,s,r,i,l,h,m,d]),(0,a.useMemo)(()=>({item:c,isReady:m}),[m,c])};var eZ=n(618446),eJ=n.n(eZ),eQ=n(396829);let e0=(0,_.B)(`
  query UpsellMembership($slug: String!, $itemId: ID!) {
    upsellMembership(slug: $slug, serviceCatalogCategoryItem: $itemId) {
      formattedBannerText
      membership {
        id
      }
    }
  }
`);function e1(e){return!!(e.id&&"Service"===e.__typename&&!(0,y.jZ)({preLeaseItem:e}))}let e4=(0,_.B)(`
  query PatchTestRequirement($cartId: ID!, $slug: String!, $input: CartInput!) {
    cart(id: $cartId, locationSlug: $slug, input: $input) {
      isCustomerPatchTestValid
    }
  }
`);var e6=e=>{let{params:{locationSlug:t}}=e,{location:n}=(0,F.l)(),{locationSlug:_}=(0,l.UO)(),O=(0,f.N)(),L=(0,l.lr)(),M=(0,d.H)(),E=(0,a.useMemo)(()=>Object.fromEntries(L.entries()),[L]),{onBeginCheckoutEvent:z,prepareBookingCart:H,removeCartItemEvent:q,addToCartEvent:W}=(0,w.my)(),{cart:$,toggleItem:U,isLoading:G,isMissingEmployees:V,isInitial:X,isRebook:K,setHasValidPatchTest:Y}=(0,S.j)(),{addErrorToast:Z}=(0,g.e)(),{employee:J}=$,{navigateTo:Q,redirectTo:ee,navigateBack:en}=(0,o.H)(),{setDefaultEmployee:ei,typeOfBookingFlow:eo,setTypeOfBookingFlow:ea}=(0,j.Wq)(),er="groupBooking"===eo||"groupBookingSkipTeamStepInNavigation"===eo,{isUserLoading:es}=eU({isGroupBooking:er}),{groupBookingAttendeeReference:el}=(0,D.f)(),ed=(0,B.c)(),ec=$.items.filter(e=>{let{attendeeReference:t}=e;return t===el}).length===I.m,{data:eu,isValidating:em,errors:ep}=(0,A.E)({context:$.channelType===m.xu.Direct?m.z0.BookingFlowDirectLink:m.z0.BookingFlow,slug:t,employeeId:J?.id,marketingToken:$.marketingToken}),{item:ef,isReady:eh}=eY({redirectTo:ee,pathname:O,searchParams:L,hash:M,locationData:eu,isLoading:em,toggleItem:U});(0,a.useEffect)(()=>{if(!n?.name||G)return;let e=H();e&&(r.Kk.save(r.Kk.TrackingDataKeys.cart,e),z({flowType:s.FlowType.BOOKING}))},[G]),(0,k.R)({type:s.BookingFlowStepTitles.SERVICES}),eV({searchParams:L,providerId:eu?.location?.owner?.id}),(0,P.A)();let ex=(0,h.zC)();(0,h.nv)({marketingToken:ex,slug:t,onError:e=>Z(e,{size:"expanded"})});let{latestUpsellMembership:eg,upsellMemberships:e_}=function(e){let{isGroupBooking:t,items:n,slug:i}=e,o=(0,eQ.Z)(n),[r,s]=a.useState({});return a.useEffect(()=>{eJ()(n,o)||(async()=>{let e=await Promise.all(t?[]:n.filter(e1).map(async function(e){if(void 0===r[e.id]){let{data:t}=await (0,u.B)(e0,{itemId:e.id,slug:i}),{upsellMembership:n}=t;return{key:e.id,value:n}}return{key:e.id,value:r[e.id]}}));s(t=>({...t,...e.reduce((e,t)=>{let{key:n,value:i}=t;return{...e,[n]:i}},{})}))})()},[n,i]),function(e,t){let n;let i=[...t].reverse().reduce((t,i)=>{if(i.id){let{id:o}=i,a=void 0!==e[o],r=Object.values(t).some(t=>t?.membership?.id===e[o]?.membership?.id);return n||!a||(0,y.jZ)({preLeaseItem:i})||(n=e[o]),{...t,...a&&!r&&{[o]:e[o]}}}return t},{});return{latestUpsellMembership:n,upsellMemberships:i}}(r,n)}({isGroupBooking:er,items:$.items,slug:t}),eb=()=>{let e=(0,T.pb)(eo,"serviceSelection");return ed(()=>{let n=L.get("back");return n?en({pathname:n}):e?Q(e(t)):Q({pathname:(0,x.WuJ)(t)}),Promise.resolve()},{disableWarning:!0}),Promise.resolve()},ey=!!n,ev=(0,a.useMemo)(()=>$.items.filter(e=>{let{attendeeReference:t}=e;return t===el}).length?async()=>{if(Y(m.af.PatchTestNotRequired),ey){let e=H();r.Kk.save(r.Kk.TrackingDataKeys.cart,e)}if(er){Q((0,x.cf)(t,E));return}let e=await (0,u.B)(e4,{cartId:"",slug:t,input:(0,b.J3)($)});if(e?.data?.cart?.isCustomerPatchTestValid===!1){Q((0,x.xL4)(t,E));return}if(eo!==T.e0.DEFAULT&&eo!==T.e0.SKIP_TEAM_STEP_IN_NAVIGATION){let e=(0,T.Zq)(eo,"serviceSelection");e&&Q(e(t,E));return}let n=await (0,N.dQ)({cart:$,locationSlug:_,typeOfBookingFlow:eo});if(n?.data.cart?.canSelectMultipleEmployees||(n?.data?.location?.employees?.length||0)>1){if(ea(T.e0.DEFAULT),K){if(X&&!V){Q((0,x.l6O)(t,E));return}if(!X){Q((0,x.dBJ)(t,E));return}}Q((0,x.JSe)(t,E))}else ea(T.e0.SKIP_TEAM_STEP_IN_NAVIGATION),ei(n.data?.location?.employees?.[0]||null),Q((0,x.l6O)(t,E))}:void 0,[$,el,ey,er,X,V,K,t,Q,H,E,ei,Y,ea,_,eo]);return((0,a.useEffect)(()=>{em||void 0===eu||eu?.location?.serviceCatalog||ep?.some(e=>{let{extensions:t}=e;return t?.code==="BAD_USER_INPUT"})||ee((0,x.XGn)(t))},[eu,t,ee,em,ep]),em||G||es||!eh)?(0,i.jsx)(eq,{locationSlug:t,onBack:eb,isGroupBooking:er}):eu?.location?.serviceCatalog?(0,i.jsxs)(et._o,{children:[(0,i.jsx)(eL,{serviceCatalog:eu.location.serviceCatalog,onRowIconClick:(e,t)=>{let i=(0,C.jg)(e);if("Service"===e.__typename&&e.variants.length>1){t();return}if("Service"===e.__typename&&1===e.variants.length||"Package"===e.__typename){let t=(0,C.Fb)({cartItems:$.items,bookableId:i});if(ec&&!t){Z((0,p.dw)("You can only add %{maxServicesCount} service to your booking","You can only add %{maxServicesCount} services to your booking",I.m,{maxServicesCount:I.m}),{qaType:"cart-limit-reached-toast"});return}let o=(0,C.qC)(e),a=(0,R.d)(o);t?q(i):W({offerItem:a});let r=(0,y.uV)({cartItems:$.items,membershipIds:(0,y.D4)({preLeaseItem:e}),memberships:n?.userMemberships,attendeeReference:el});U({...e,...r&&{membershipId:r}},el)}},onBack:eb,onContinue:ev,upsellMemberships:e_,latestUpsellMembership:eg,searchItemToOpen:ef,groupBookingAttendeeReference:el}),(0,i.jsx)(c.r,{children:(0,i.jsx)(v.N,{locationSlug:_})})]}):null}},562012:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});let i=3},780933:function(e,t,n){"use strict";n.d(t,{Md:function(){return P},l6:function(){return c},hG:function(){return x}});var i=n(785893),o=n(784748),a=n(135424),r=n(587495),s=n(794067),l=n(998692),d=n(234308),c=e=>{let{time:t,discount:n,formattedRetailPrice:c,formattedNonDiscountedPrice:u,isSelected:m,isHighDemand:p}=e,f=!(0,o.G)("laptop");return(0,i.jsx)(a.H.Row,{qaType:`time-slot-${t}`,leftSection:(0,i.jsx)(r.x,{font:"body-m-medium",children:t}),unsafeStyle:f?{paddingTop:"4px",paddingBottom:"4px"}:void 0,rightSection:(0,i.jsxs)(s.k,{gap:"100",direction:"horizontal",alignItems:"center",children:[!n&&p?(0,i.jsx)(r.x,{font:"body-s-regular",color:"ghost",children:(0,d.gl)("Label for Highly Demanded Time Slots","High demand")}):null,n?(0,i.jsx)(s.k,{padding:["0","50","0","0"],children:(0,i.jsx)(r.x,{font:"body-s-regular",color:"positive",children:n})}):null,u?(0,i.jsx)(r.x,{font:"body-m-regular",color:"ghost",unsafeStyle:{textDecoration:"line-through"},children:u}):null,(0,i.jsx)(r.x,{font:"body-m-medium",children:c}),f?(0,i.jsx)("div",{...l.O.getWrapperProps({isChecked:!0}),style:{display:m?"block":"none"},children:(0,i.jsx)("div",{...l.O.getPrimitiveProps(),style:{height:"24px",width:"24px"},children:(0,i.jsx)(l.O.Primitive,{isChecked:!0})})}):null]})})},u=n(781358),m=n(304616),p=n(667294),f=n(453701),h=n.n(f);let x=e=>{let{_isAnimated:t}=e,n=Array.from(Array(10).keys());return(0,i.jsx)(u.K,{as:"ul",gap:{default:"0",laptop:"150"},direction:"vertical",display:"flex",unsafeClassName:h().self,children:n.map((e,n)=>(0,i.jsx)(a.H,{variant:"low",unsafeClassName:h()["stack-animation"],unsafeStyle:{"--animation-order":n+1},children:(0,i.jsx)(a.H.Content,{children:(0,i.jsx)(a.H.Row,{leftSection:(0,i.jsxs)(u.K,{gap:"100",direction:"horizontal",display:"flex",unsafeStyle:{alignItems:"center"},children:[(0,i.jsx)(m.O,{width:"64px",height:"8px",isAnimated:t}),(0,i.jsx)(r.x,{font:"body-m-regular",children:"\xa0"})]}),rightSection:(0,i.jsx)(m.O,{width:"40px",height:"8px",isAnimated:t})})})},e))})};var g=n(851189),_=n.n(g),b=n(639086),y=n.n(b),v=n(380270),j=n(920518),S=n(100990),w=n(456624),k=n(770546),A=n(804601),C=n(9836),B=n(386010),F=n(702203),T=n(25869),I=n(562012),D=n(334130),R=n.n(D);let P=e=>{let{noSlotsAvailableDetails:t,handleDateChange:n,handleEmployeeChange:a,params:{locationSlug:s,bookingIdOrPreviewToken:l},selectedStaffMembers:c,selectedDate:m}=e,{displayAs:f,title:h,subtitle:x,offerNextAvailableDate:g,offerOtherEmployees:b,offerOtherServices:D,canJoinWaitlist:P}=t||{},{redirectTo:N}=(0,v.H)(),O=(0,o.G)("tablet"),L=f===F.hb.FullyBooked&&!!c?.length,M=[g,b,D].filter(e=>!!e).length>1,E=(0,p.useMemo)(()=>{if(g?.nextAvailableDate){let{language:e}=(0,d.Kd)();return"ar"===e?new Date(g.nextAvailableDate).getFullYear().toLocaleString(`${e}-SA`):new Date(g.nextAvailableDate).getFullYear().toString()}return new Date().getFullYear().toString()},[g?.nextAvailableDate]);return(0,i.jsx)("div",{className:(0,B.default)(R().self,R()["fade-animation"]),children:(0,i.jsx)(j.u,{unsafeClassName:R().self__container,qaType:"not-available-empty-state",header:h||"",description:x||"",withBorder:O,topSlot:L?(0,i.jsxs)(S.H,{size:"l",isTooltipDisabled:!0,disableElevation:!0,children:[c.slice(0,I.q).map(e=>(0,i.jsx)(S.H.Item,{src:e?.avatar?.url,firstName:e?.firstName},e?.id)),c.length>I.q&&(0,i.jsx)(S.H.MoreIndicator,{counter:c.length-I.q})]}):(0,i.jsx)(w.E,{src:f===F.hb.Closed?y():_(),className:R().self__icon,alt:(0,d.__)`Not available time slot icon`,ratio:"1x1"}),actionSlot:(0,i.jsxs)(u.K,{gap:"150",as:"div",direction:O?"horizontal":"vertical",display:"flex",unsafeClassName:R().stack,children:[g?(0,i.jsx)(k.z,{variant:"secondary",shape:"pill",size:"m",id:"next-date",qaType:"next-date",onAction:()=>n(g.nextAvailableDate,E),children:g.actionText}):null,b?(0,i.jsx)(k.z,{variant:"secondary",shape:"pill",size:"m",id:"other-employees",qaType:"other-employees",onAction:a,children:b.actionText}):null,D?(0,i.jsx)(k.z,{variant:"secondary",shape:"pill",size:"m",id:"other-services",qaType:"other-services",onAction:()=>(N((0,T.jHS)(s)),Promise.resolve()),children:D.actionText}):null,P&&!M?(0,i.jsx)(k.z,{variant:"secondary",shape:"pill",size:"m",id:"join-waitlist",qaType:"join-waitlist-btn",linkTo:(0,T.Uaz)(s,{date:m}),children:(0,d.__)("Join the waitlist")}):null]}),footer:P&&M?(0,i.jsxs)("div",{className:(0,B.default)(R().footer),children:[(0,i.jsx)(A.i,{verticalGap:"200"}),(0,i.jsx)(r.x,{font:"body-s-regular",align:"center",color:"neutralFaded",children:(0,d.do)((0,d.__)("You can <a>join the waitlist</a> instead."),{a:e=>(0,i.jsx)(C.r,{qaType:"join-waitlist-link",text:e,linkTo:(0,T.Uaz)(s,{date:m})})})})]}):void 0})})}},681876:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var i=n(667294),o=n(940907),a=n(859854),r=n(795770),s=n(496);let l=e=>{let{type:t}=e,{onFlowStepEvent:n}=(0,s.m)(),{cart:l}=(0,r.j)(),{typeOfBookingFlow:d}=(0,a.Wq)(),c=()=>{switch(t){case o.BookingFlowStepTitles.SERVICES:return 1;case o.BookingFlowStepTitles.STAFF:return 2;case o.BookingFlowStepTitles.TIME:if("bookWithStaff"===d)return 2;return 3;case o.BookingFlowStepTitles.CONFIRMATION:if("bookWithStaff"===d)return 3;return 4;default:return 1}};return(0,i.useEffect)(()=>{l.location?.name&&n({step:c(),stepTitle:t,flowType:o.FlowType.BOOKING})},[l.location?.name]),null}},459591:function(e,t,n){"use strict";n.d(t,{S$:function(){return C},lK:function(){return N},p2:function(){return O},wR:function(){return R}});var i=n(785893),o=n(936171),a=n(304616),r=n(587495),s=n(682159),l=n(380270),d=n(142268),c=n(770546),u=n(174809),m=n(386010),p=n(786546),f=n(667294),h=n(80128),x=n(582122),g=n(800241),_=n(730602),b=n(234308),y=n(692034),v=n(25869),j=n(348763),S=n(47564),w=n(400575),k=n(505182),A=n.n(k);let C=(0,p.BX)(`
    fragment ClaimPointsBasedRewardContent on LoyaltyPointsBasedReward {
      __typename
      name
      description(displayContext: DETAILS)
      provider {
        name
        loyaltyScheme {
          theme {
            backgroundGradientName
          }
        }
      }
      ...PointsBasedRewardTermsAndConditions
      ... on LoyaltyPointsBasedRewardConfigurableAmountDiscount {
        preview {
          caption
          name
          pointSpend
          remainingPointsLabel
          summary
        }
        pointSpendMaximum
        pointSpendMinimum
        pointSpendStep
      }
    }
  `,[S.A_]),B=(0,p.BX)(`
  fragment ClaimPointsBasedRewardFooter on LoyaltyPointsBasedReward {
    __typename
    name
    description(displayContext: DETAILS)
    provider {
      slug
    }
    ... on LoyaltyPointsBasedRewardConfigurableAmountDiscount {
      preview {
        caption
        name
        pointSpend
        remainingPointsLabel
        summary
      }
    }
  }
`),F=p.BX.persisted("sha256:51b0ff0a3a22a63f27601c148298e075326503fd568c58880c172b46c3c2b5ea",(0,p.BX)(`
      query ClaimPointsBasedReward($pointsBasedRewardId: ID!) {
        pointsBasedReward(id: $pointsBasedRewardId) {
          ...ClaimPointsBasedRewardContent
          ...ClaimPointsBasedRewardFooter
        }
      }
    `,[B,C])),T=p.BX.persisted("sha256:012f332d5d7f19ac1943771608649c9b525a862cda281928bdef532f637e1565",(0,p.BX)(`
    query PreviewConfigurableAmountDiscountReward($pointsBasedRewardId: ID!, $pointSpend: Int!) {
      pointsBasedReward(id: $pointsBasedRewardId) {
        __typename
        ... on LoyaltyPointsBasedRewardConfigurableAmountDiscount {
          preview(pointSpend: $pointSpend) {
            caption
            name
            remainingPointsLabel
            summary
          }
        }
      }
    }
  `)),I=(0,p.BX)(`
  fragment ClaimPointsBasedRewardClaimPayloadContent on LoyaltyClaimPointsBasedRewardPayload {
    reward {
      name
      expirationLabel
      provider {
        name
        loyaltyScheme {
          theme {
            backgroundGradientName
          }
        }
      }
    }
    message
  }
`),D=(0,p.BX)(`
  fragment ClaimPointsBasedRewardClaimPayloadFooter on LoyaltyClaimPointsBasedRewardPayload {
    reward {
      id
      name
      isRedeemableOnline
      provider {
        slug
      }
    }
  }
`),R=p.BX.persisted("sha256:c996e17a599ae76d73f0156b42fc3d91a1dff91948bec00ad98b79a89c0d78e6",(0,p.BX)(`
      mutation ClaimPointsBasedRewardPayload($reward: ClaimableReward!) {
        loyaltyClaimPointsBasedReward(reward: $reward) {
          reward {
            __typename
          }
          ...ClaimPointsBasedRewardClaimPayloadContent
          ...ClaimPointsBasedRewardClaimPayloadFooter
        }
      }
    `,[I,D])),P={LoyaltyPointsBasedRewardFixedAmountDiscount:h.Oo1,LoyaltyPointsBasedRewardFreeProduct:h.VGi,LoyaltyPointsBasedRewardFreeService:h.YPO,LoyaltyPointsBasedRewardPercentageDiscount:h.SpC,LoyaltyPointsBasedRewardConfigurableAmountDiscount:h.Oo1,RewardFreeProduct:h.VGi,RewardFreeService:h.YPO,RewardPercentageDiscount:h.SpC,RewardFixedAmountDiscount:h.Oo1},N=e=>{let{pointsBasedRewardId:t,pointSpend:n,pointSpendDebounced:l,setPointSpend:d,transitioning:c,setTransitioning:g,claimData:y,hasUserInteractedWithSlider:v,isPreviewLoading:w,setIsPreviewLoading:k,setApplicableItemType:B}=e,{data:D}=(0,_.aT)(F,{pointsBasedRewardId:t},{keepPreviousData:!1}),R=(0,p.vz)(I,y),N=(0,p.vz)(C,D?.pointsBasedReward),{pointSpendMaximum:O,pointSpendMinimum:L,pointSpendStep:M,preview:E}=(N?.__typename==="LoyaltyPointsBasedRewardConfigurableAmountDiscount"?N:{})??{};(0,f.useEffect)(()=>{E?.pointSpend&&d(E.pointSpend)},[E?.pointSpend,d]);let{data:z,isLoading:H,isValidating:q,variables:W}=(0,_.aT)(l&&v.current?T:null,{pointsBasedRewardId:t,pointSpend:l});(0,f.useEffect)(()=>{if(H||q){let e=setTimeout(()=>{k(!0)},1e3);return()=>{clearInterval(e)}}k(!1)},[H,q,k]);let{preview:$}=(z?.pointsBasedReward?.__typename==="LoyaltyPointsBasedRewardConfigurableAmountDiscount"?z?.pointsBasedReward:{})??{},U=N?.__typename==="LoyaltyPointsBasedRewardConfigurableAmountDiscount"&&(O||0)>(L||0),G=(0,b.Kd)().toString(),V=(0,f.useMemo)(()=>new Intl.NumberFormat(G),[G]),X=(0,b.gl)('The amount of points a customer intends to spend on their reward. i.e "1,000 points"',"%{pointSpend} points",{pointSpend:V.format(n)}),K=R?.reward||N,Y=R?.reward?.name||$?.name||E?.name||N?.name;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:(0,m.default)(A().body,{[A()["body--configurable-amount-discount"]]:U}),children:[(0,i.jsx)("section",{className:(0,m.default)(A().terms,{[A().terms__dismissed]:!!R||c}),children:(0,i.jsx)(S.K5,{pointsBasedRewardData:N,onAction:B})}),(0,i.jsxs)("div",{className:A().container,children:[c&&(0,i.jsx)(x.F,{unsafeClassName:A().confetti,options:{loop:!1,path:u.m.ILL_ANIM_BENEFIT_CONFETTI},eventListeners:[{eventName:"complete",callback:()=>{g(!1)}}]}),(0,i.jsxs)("header",{className:(0,m.default)(A().header,{[A().header__finished]:c||R}),children:[(0,i.jsx)("div",{className:A().icon,children:K?.__typename?(0,i.jsx)(o.y,{icon:K?.__typename?P[K?.__typename]:h.TEx,gradientBackground:K?.provider?.loyaltyScheme?.theme?.backgroundGradientName?(0,j.h)(K.provider.loyaltyScheme.theme.backgroundGradientName):void 0,shape:"hexagon",size:"4xl",unsafeClassName:(0,m.default)(A().icon__inner,{[A().icon__transitioning]:c,[A().icon__finished]:R&&!c}),variant:"neutral"}):(0,i.jsx)(a.O,{width:"96px",height:"96px"})}),(0,i.jsx)(r.x,{align:"center",color:w?"neutralFaded":"neutral",font:"header-l-semibold",unsafeClassName:(0,m.default)(A().text,{[A().text__transitioning]:c,[A().text__finished]:R&&!c}),children:Y??(0,i.jsx)(a.O,{height:"32px",width:"200px",mb:"50"})}),(0,i.jsx)(r.x,{align:"center",font:"body-ml-medium",mb:{default:"100"},unsafeClassName:(0,m.default)(A().text,{[A().text__transitioning]:c,[A().text__finished]:R&&!c}),children:K?.provider?.name??(0,i.jsx)(a.O,{height:"28px",width:"300px"})}),(0,i.jsx)(r.x,{align:"center",font:"body-s-regular",color:"neutralFaded",unsafeClassName:(0,m.default)(A().text,{[A().text__transitioning]:c,[A().text__finished]:R&&!c}),children:c?R?.message:R?.reward?.expirationLabel??N?.description}),!R&&!!n&&!!L&&!!O&&!!M&&O>L&&(0,i.jsxs)("div",{className:(0,m.default)(A()["configurable-amount"],{[A()["configurable-amount__transitioning"]]:c,[A()["configurable-amount__finished"]]:R&&!c}),children:[(0,i.jsx)(r.x,{align:"center",font:"header-m-semibold",children:X||E?.summary}),(0,i.jsx)(s.i,{minValue:L,maxValue:O,step:M,value:n,onChange:e=>{"number"==typeof e&&(v.current=!0,d(e))},label:(0,b.__)("Choose how many points you'd like to spend"),unsafeClassName:A().slider}),(0,i.jsx)(r.x,{align:"center",color:"neutralFaded",font:"body-s-regular",children:$?.remainingPointsLabel||E?.remainingPointsLabel})]})]})]})]})})},O=e=>{let{claimData:t,claimTrigger:n,isClaiming:o,locationSlug:a,onRewardClaimed:s,pointsBasedRewardId:u,pointSpend:h,pointSpendDebounced:x,setOpen:j,setTransitioning:S,transitioning:k,hasUserInteractedWithSlider:C,isPreviewLoading:I}=e,{navigateTo:R}=(0,l.H)(),P=(0,p.vz)(D,t),[N,O]=(0,f.useState)(null),{data:L}=(0,_.aT)(F,{pointsBasedRewardId:u},{keepPreviousData:!1}),M=(0,p.vz)(B,L?.pointsBasedReward),{data:E}=(0,_.aT)(x&&C.current?T:null,{pointsBasedRewardId:u,pointSpend:x}),z=(0,b.Kd)().toString(),H=(0,f.useMemo)(()=>new Intl.NumberFormat(z),[z]),q=(0,b.gl)('The amount of points a customer intends to spend on their reward. i.e "1,000 points"',"%{pointSpend} points",{pointSpend:H.format(h)}),{preview:W}=(E?.pointsBasedReward?.__typename==="LoyaltyPointsBasedRewardConfigurableAmountDiscount"?E?.pointsBasedReward:{})??{},{preview:$}=(M?.__typename==="LoyaltyPointsBasedRewardConfigurableAmountDiscount"?M:{})??{},U=P?.reward?.name||W?.name||$?.name||M?.name,G=(0,f.useCallback)(async()=>{try{await n({reward:{id:u,...h&&{points:h}}}),s?.(),S(!0)}catch(e){O((0,b.__)("Something went wrong. Please try again."))}},[u,h,n,S,s]),{id:V,isRedeemableOnline:X,provider:K}=P?.reward??{},{slug:Y}=K??{},Z=(0,f.useCallback)(()=>{Y&&X?(0,y.n)()?(0,w.q)({locationSlug:a,providerSlug:Y}):R((0,v.XaI)({providerSlug:Y,rewardId:V,locationSlug:a})):j(!1)},[X,a,R,Y,V,j]),J=t&&!k;return(0,i.jsxs)(i.Fragment,{children:[N&&(0,i.jsx)(d.F,{variant:"danger",onClose:()=>O(null),children:N}),(0,i.jsxs)("div",{className:(0,m.default)(A().footer,{[A().footer__transitioning]:k}),children:[(0,i.jsx)(g.E,{lt:"tablet",children:(0,i.jsxs)(i.Fragment,{children:[!J&&(0,i.jsxs)("div",{className:A().footer__points,children:[(0,i.jsx)(r.x,{font:"body-m-semibold",children:h?q:M?.description}),(0,i.jsx)(r.x,{font:"body-s-regular",color:"neutralFaded",children:U&&(0,b.gl)("description of what they are spending on","for %{rewardName}",{rewardName:U})})]}),(0,i.jsx)(c.z,{onAction:J?Z:G,isDisabled:o||k||I,size:"l",isFull:!!J,children:J?X&&Y?(0,b.__)("Book now"):(0,b.__)("Done"):(0,b.__)("Claim")})]})}),(0,i.jsx)(g.E,{gte:"tablet",children:(0,i.jsx)(c.z,{onAction:J?Z:G,isDisabled:o||k||I,isFull:!0,size:"l",children:J?X&&Y?(0,b.__)("Book now"):(0,b.__)("Done"):(0,b.__)("Claim")})})]})]})}},47564:function(e,t,n){"use strict";n.d(t,{A_:function(){return p},K5:function(){return f},O:function(){return m}});var i=n(785893),o=n(587495),a=n(11653),r=n(9836),s=n(304616),l=n(786546),d=n(234308),c=n(393265),u=n.n(c);let m=(0,l.BX)(`
  fragment RewardTermsAndConditionsItems on Reward {
    __typename
    termsAndConditionsItems {
      text
      action
      items {
        text
        action
      }
    }
  }
`),p=(0,l.BX)(`
  fragment PointsBasedRewardTermsAndConditions on LoyaltyPointsBasedReward {
    __typename
    termsAndConditions {
      text
      action
      items {
        text
        action
      }
    }
  }
`),f=e=>{let{rewardData:t,pointsBasedRewardData:n,isLoading:c,onAction:f}=e;if(!t&&!n)return null;let h=(0,l.vz)(m,t),x=(0,l.vz)(p,n),g=h?.termsAndConditionsItems||x?.termsAndConditions;return g?(0,i.jsxs)(i.Fragment,{children:[c&&g?(0,i.jsx)(o.x.Skeleton,{isAnimated:c,font:"header-s-semibold",width:"100px",unsafeClassName:u().self__title}):(0,i.jsx)(o.x,{mb:{default:"50"},font:"header-xs-semibold",unsafeClassName:u().self__title,children:(0,d.__)("Terms and conditions")}),(0,i.jsx)(a.L,{listStyle:"bullet",children:g&&!c?g.map(e=>(0,i.jsxs)(a.L.Item,{children:[(0,i.jsx)(o.x,{font:"body-s-regular",children:e.text}),!!e.items?.length&&(0,i.jsx)(a.L,{listStyle:"bullet",children:e.items.map(e=>{let{text:t,action:n}=e;return(0,i.jsx)(a.L.Item,{children:n?(0,i.jsx)(r.r,{font:"body-s-regular",text:t,onAction:()=>{f(n)}}):(0,i.jsx)(o.x,{font:"body-s-regular",children:t})},`${t}`)})})]},`${e.text}`))??[void 0,void 0,void 0,void 0].map((e,t)=>(0,i.jsx)(a.L.Item,{children:(0,i.jsx)(s.O,{height:"20px"})},t)):[void 0,void 0].map((e,t)=>(0,i.jsx)(o.x.Skeleton,{isAnimated:c,font:"body-s-regular",width:"100px"},t))})]}):null}},400575:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var i=n(25869);function o(e){let{locationSlug:t,providerSlug:o}=e;t?n.g.location.href=(0,i.F_o)((0,i.jHS)(t).pathname):n.g.location.href=(0,i.F_o)(`${(0,i.sfD)({providerSlug:o})}?param=true`)}},348763:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});let i={BLUE_DEEP:"blueDeep",BLUE_RICH:"blueRich",GREEN_DEEP:"greenDeep",GREEN_RICH:"greenRich",ORANGE_DEEP:"orangeDeep",ORANGE_RICH:"orangeRich",PINK_DEEP:"pinkDeep",PINK_RICH:"pinkRich",PURPLE_DEEP:"purpleDeep",PURPLE_RICH:"purpleRich",NEUTRAL_DEEP:"neutralDeep",NEUTRAL_RICH:"neutralRich"},o=e=>e&&i[e]||"blueRich"},768514:function(e){e.exports={self:"ClaimGiftCardOnVisit_self__C5ZkZ",self__image:"ClaimGiftCardOnVisit_self__image__aOaQn",selfImage:"ClaimGiftCardOnVisit_self__image__aOaQn",self__details:"ClaimGiftCardOnVisit_self__details__13CPU",selfDetails:"ClaimGiftCardOnVisit_self__details__13CPU",self__buttons:"ClaimGiftCardOnVisit_self__buttons__iye4V",selfButtons:"ClaimGiftCardOnVisit_self__buttons__iye4V"}},43588:function(e){e.exports={self:"DiscountsAndRewardsModalBodyList_self__HH0dX",self__rewards:"DiscountsAndRewardsModalBodyList_self__rewards__4Cfx6",selfRewards:"DiscountsAndRewardsModalBodyList_self__rewards__4Cfx6",self__rewards__redeemable:"DiscountsAndRewardsModalBodyList_self__rewards__redeemable__sK6qG",selfRewardsRedeemable:"DiscountsAndRewardsModalBodyList_self__rewards__redeemable__sK6qG",self__rewards__redeemable__row:"DiscountsAndRewardsModalBodyList_self__rewards__redeemable__row__SXUbV",selfRewardsRedeemableRow:"DiscountsAndRewardsModalBodyList_self__rewards__redeemable__row__SXUbV",self__rewards__claimable:"DiscountsAndRewardsModalBodyList_self__rewards__claimable__ZW69P",selfRewardsClaimable:"DiscountsAndRewardsModalBodyList_self__rewards__claimable__ZW69P",self__rewards__claimable__title:"DiscountsAndRewardsModalBodyList_self__rewards__claimable__title__VdONc",selfRewardsClaimableTitle:"DiscountsAndRewardsModalBodyList_self__rewards__claimable__title__VdONc",self__buttons:"DiscountsAndRewardsModalBodyList_self__buttons__GBKMF",selfButtons:"DiscountsAndRewardsModalBodyList_self__buttons__GBKMF",self__buttons__content:"DiscountsAndRewardsModalBodyList_self__buttons__content__uO2Ul",selfButtonsContent:"DiscountsAndRewardsModalBodyList_self__buttons__content__uO2Ul","skeleton__promotion-code":"DiscountsAndRewardsModalBodyList_skeleton__promotion-code__AdwVV",skeletonPromotionCode:"DiscountsAndRewardsModalBodyList_skeleton__promotion-code__AdwVV"}},591164:function(e){e.exports={list:"DiscountsAndRewardsModalFooter_list__UUCp_",previewClaimableReward:"DiscountsAndRewardsModalFooter_previewClaimableReward__X9x7K",previewClaimableReward__description:"DiscountsAndRewardsModalFooter_previewClaimableReward__description__0jYjX",previewClaimableRewardDescription:"DiscountsAndRewardsModalFooter_previewClaimableReward__description__0jYjX",buttons:"DiscountsAndRewardsModalFooter_buttons__7gUdV"}},50911:function(e){e.exports={content:"ServiceCatalogChoiceItem_content__4pbeg",membership:"ServiceCatalogChoiceItem_membership__xk8Eo",pricing:"ServiceCatalogChoiceItem_pricing__xX8cN"}},237665:function(e){e.exports={"stack-animation":"ServicesUI_stack-animation___ZVoN",stackAnimation:"ServicesUI_stack-animation___ZVoN","lift-in":"ServicesUI_lift-in__b8SW1",liftIn:"ServicesUI_lift-in__b8SW1","fade-animation":"ServicesUI_fade-animation__g_BAi",fadeAnimation:"ServicesUI_fade-animation__g_BAi","fade-in":"ServicesUI_fade-in__0lz6d",fadeIn:"ServicesUI_fade-in__0lz6d",selectionOffscreenContainer:"ServicesUI_selectionOffscreenContainer__xwKcI",selectionOffscreenButton:"ServicesUI_selectionOffscreenButton__a0uE9",selectionOffscreenScrolling:"ServicesUI_selectionOffscreenScrolling__NHe9V",selectionOffscreenAbove:"ServicesUI_selectionOffscreenAbove__A43iU",selectionOffscreenBelow:"ServicesUI_selectionOffscreenBelow__Vm5FG",selectedStaffRow:"ServicesUI_selectedStaffRow__Z89Sk",guestRow:"ServicesUI_guestRow__lgXwb",guestRowListItem:"ServicesUI_guestRowListItem__iXAT9",offerItemsList:"ServicesUI_offerItemsList__6B2JN",offerItemsList__headerWrapper:"ServicesUI_offerItemsList__headerWrapper__Bzs1p",offerItemsListHeaderWrapper:"ServicesUI_offerItemsList__headerWrapper__Bzs1p",offerItemsList__headerDescription:"ServicesUI_offerItemsList__headerDescription__ZzLFc",offerItemsListHeaderDescription:"ServicesUI_offerItemsList__headerDescription__ZzLFc",offerItemsList__item:"ServicesUI_offerItemsList__item__4kYNX",offerItemsListItem:"ServicesUI_offerItemsList__item__4kYNX","offerItemsList__item--last":"ServicesUI_offerItemsList__item--last__mz4Wl",offerItemsListItemLast:"ServicesUI_offerItemsList__item--last__mz4Wl",tabsStructureAnchor:"ServicesUI_tabsStructureAnchor__3SA2Q",tabsStructure:"ServicesUI_tabsStructure___Q9Qu",tabsStructure__button:"ServicesUI_tabsStructure__button__aWwNr",tabsStructureButton:"ServicesUI_tabsStructure__button__aWwNr","tabsStructure--scrolled":"ServicesUI_tabsStructure--scrolled__FDtzn",tabsStructureScrolled:"ServicesUI_tabsStructure--scrolled__FDtzn",floatingBottomBar:"ServicesUI_floatingBottomBar__gztkS"}},293668:function(e){e.exports={"stack-animation":"Skeleton_stack-animation__uaLv4",stackAnimation:"Skeleton_stack-animation__uaLv4","lift-in":"Skeleton_lift-in__Cu2bh",liftIn:"Skeleton_lift-in__Cu2bh","fade-animation":"Skeleton_fade-animation__YxTON",fadeAnimation:"Skeleton_fade-animation__YxTON","fade-in":"Skeleton_fade-in__hdrcR",fadeIn:"Skeleton_fade-in__hdrcR",pillsContainer:"Skeleton_pillsContainer__xp2DU",noWrap:"Skeleton_noWrap__xL7QQ",offerItemsList:"Skeleton_offerItemsList__vw284",category:"Skeleton_category__DivPu",name:"Skeleton_name__GE42T",caption:"Skeleton_caption__ktfPO",price:"Skeleton_price__85ac4"}},334130:function(e){e.exports={self:"NotAvailableEmptyState_self__hP8zc",self__container:"NotAvailableEmptyState_self__container__Yuweq",selfContainer:"NotAvailableEmptyState_self__container__Yuweq",self__icon:"NotAvailableEmptyState_self__icon__e6mSc",selfIcon:"NotAvailableEmptyState_self__icon__e6mSc",footer:"NotAvailableEmptyState_footer__c5dk6",stack:"NotAvailableEmptyState_stack__tGoSx"}},453701:function(e){e.exports={"stack-animation":"TimeSlotsSkeleton_stack-animation__1elqk",stackAnimation:"TimeSlotsSkeleton_stack-animation__1elqk","lift-in":"TimeSlotsSkeleton_lift-in__i3lM6",liftIn:"TimeSlotsSkeleton_lift-in__i3lM6","fade-animation":"TimeSlotsSkeleton_fade-animation__n6KuJ",fadeAnimation:"TimeSlotsSkeleton_fade-animation__n6KuJ","fade-in":"TimeSlotsSkeleton_fade-in__FHt_W",fadeIn:"TimeSlotsSkeleton_fade-in__FHt_W",self:"TimeSlotsSkeleton_self__9GPbT"}},888043:function(e){e.exports={"choice-list-item":"BookingFlowChoiceCard_choice-list-item__Myebb",choiceListItem:"BookingFlowChoiceCard_choice-list-item__Myebb"}},734386:function(e){e.exports={mobileSummary:"ConfirmReservation_mobileSummary__jEELh"}},722563:function(e){e.exports={"choice-list":"BookingFlowEmployeeUI_choice-list__bnY_H",choiceList:"BookingFlowEmployeeUI_choice-list__bnY_H","employee-tile":"BookingFlowEmployeeUI_employee-tile__U_4Q0",employeeTile:"BookingFlowEmployeeUI_employee-tile__U_4Q0"}},308943:function(e){e.exports={pricing:"BookingFlowLayoutItemsList_pricing__U1qRh"}},406076:function(e){e.exports={self:"BookingFlowLayoutSummary_self__Ee9sh"}},241487:function(e){e.exports={self:"BookingFlowLocationDetails_self__xXD_O"}},149999:function(e){e.exports={attendeeName:"BookingFlowMultiEmployeeUI_attendeeName__Q_YFy"}},916399:function(e){e.exports={"stack-animation":"Services_stack-animation__6YOqa",stackAnimation:"Services_stack-animation__6YOqa","lift-in":"Services_lift-in__xBL0a",liftIn:"Services_lift-in__xBL0a","fade-animation":"Services_fade-animation__Y7tsh",fadeAnimation:"Services_fade-animation__Y7tsh","fade-in":"Services_fade-in__IMIz_",fadeIn:"Services_fade-in__IMIz_",selectionOffscreenContainer:"Services_selectionOffscreenContainer__Q8Svg",selectionOffscreenButton:"Services_selectionOffscreenButton__f_FWK",selectionOffscreenScrolling:"Services_selectionOffscreenScrolling__fRJaz",selectionOffscreenAbove:"Services_selectionOffscreenAbove__wDO0E",selectionOffscreenBelow:"Services_selectionOffscreenBelow__j1vAa",selectedStaffRow:"Services_selectedStaffRow__b4ip7",guestRow:"Services_guestRow__TBP2t",offerItemsList:"Services_offerItemsList__T6auW",offerItemsList__headerWrapper:"Services_offerItemsList__headerWrapper__vf7ZC",offerItemsListHeaderWrapper:"Services_offerItemsList__headerWrapper__vf7ZC",offerItemsList__headerDescription:"Services_offerItemsList__headerDescription__7S5D7",offerItemsListHeaderDescription:"Services_offerItemsList__headerDescription__7S5D7",offerItemsList__item:"Services_offerItemsList__item__8ETBd",offerItemsListItem:"Services_offerItemsList__item__8ETBd","offerItemsList__item--last":"Services_offerItemsList__item--last__jFMxg",offerItemsListItemLast:"Services_offerItemsList__item--last__jFMxg",tabsStructureAnchor:"Services_tabsStructureAnchor__Mvagk",tabsStructure:"Services_tabsStructure__VI3xl",tabsStructure__button:"Services_tabsStructure__button__IMPl7",tabsStructureButton:"Services_tabsStructure__button__IMPl7","tabsStructure--scrolled":"Services_tabsStructure--scrolled__JEYYa",tabsStructureScrolled:"Services_tabsStructure--scrolled__JEYYa",floatingBottomBar:"Services_floatingBottomBar__oAEgg",content:"Services_content__WvVCV",membership:"Services_membership___V6lz",pricing:"Services_pricing__vBs9E",upsellMembershipBanner:"Services_upsellMembershipBanner__tJfRh",upsellingSection:"Services_upsellingSection__U7yPO"}},278143:function(e){e.exports={"stack-animation":"Time_stack-animation__IvtYN",stackAnimation:"Time_stack-animation__IvtYN","lift-in":"Time_lift-in__orJcG",liftIn:"Time_lift-in__orJcG","fade-animation":"Time_fade-animation__qUmNn",fadeAnimation:"Time_fade-animation__qUmNn","fade-in":"Time_fade-in__yWggR",fadeIn:"Time_fade-in__yWggR",selectedStaffRow:"Time_selectedStaffRow__Oa7rT",timeslots:"Time_timeslots__9s_fJ",carousel:"Time_carousel__95kWe",joinWaitlistLink:"Time_joinWaitlistLink__zWZUB",filtersRow:"Time_filtersRow__hzjDd",patchTestCalloutBanner:"Time_patchTestCalloutBanner__Uvj8p",dateCarousel:"Time_dateCarousel___eC0W",scrollable:"Time_scrollable__Er3TG",scrollableInner:"Time_scrollableInner__w5DZL",tileWrapper:"Time_tileWrapper__MTyRn",tile:"Time_tile__Ypm6z",monthName:"Time_monthName__RlNfq",monthNameText:"Time_monthNameText__iVicb",buttons:"Time_buttons__pYYDM","text-fade-animation":"Time_text-fade-animation__6jiz7",textFadeAnimation:"Time_text-fade-animation__6jiz7","text-fade-in":"Time_text-fade-in__nSOiS",textFadeIn:"Time_text-fade-in__nSOiS","text-fade-out":"Time_text-fade-out__n1n1U",textFadeOut:"Time_text-fade-out__n1n1U",notAvailableDay:"Time_notAvailableDay__qjk9G",notAvailableDay__container:"Time_notAvailableDay__container__tfW51",notAvailableDayContainer:"Time_notAvailableDay__container__tfW51",notAvailableDay__icon:"Time_notAvailableDay__icon__v1fZZ",notAvailableDayIcon:"Time_notAvailableDay__icon__v1fZZ",notAvailableDay__footer:"Time_notAvailableDay__footer__IgAYC",notAvailableDayFooter:"Time_notAvailableDay__footer__IgAYC",notAvailableDay__stack:"Time_notAvailableDay__stack__K8Mc7",notAvailableDayStack:"Time_notAvailableDay__stack__K8Mc7"}},75618:function(e){e.exports={summary:"WaitlistConfirm_summary__0IBwT",icon:"WaitlistConfirm_icon__PvDQS"}},653007:function(e){e.exports={changedYourMind:"WaitlistSetup_changedYourMind__X2apM",addTimeRangeButton:"WaitlistSetup_addTimeRangeButton__Ttuny",calloutBanner:"WaitlistSetup_calloutBanner__S48DN"}},525040:function(e){e.exports={self:"FreshaGiftCardWarningModal_self__G1hxo",badge:"FreshaGiftCardWarningModal_badge__1s4Lu",buttons:"FreshaGiftCardWarningModal_buttons__Hk5jj",legacy:"FreshaGiftCardWarningModal_legacy__vYxNH",body:"FreshaGiftCardWarningModal_body__Kaz0m"}},190699:function(e){e.exports={applePayButton:"ApplePayButton_applePayButton__kRCrn"}},494066:function(e){e.exports={self:"RichText_self__FOhvq",icon:"RichText_icon__vzjlx"}},465836:function(e){e.exports={self:"TrySomethingElse_self__tbSgO",optionContainer:"TrySomethingElse_optionContainer__oBKoW"}},855023:function(e){e.exports={placeholder:"BookingFlowError_placeholder__8DJS_"}},775063:function(e){e.exports={self:"BookingFlowLayout_self__zz2A_",scrollableWrapper:"BookingFlowLayout_scrollableWrapper__vHssk",footerWrapper:"BookingFlowLayout_footerWrapper___CDbU",showFooterDivider:"BookingFlowLayout_showFooterDivider__Q5Dzz",locationDetails:"BookingFlowLayout_locationDetails__bRTMn",withDivider:"BookingFlowLayout_withDivider__959uo",itemsList:"BookingFlowLayout_itemsList__Dfq5W",summaryWrapper:"BookingFlowLayout_summaryWrapper__sUkIQ",bottomBar:"BookingFlowLayout_bottomBar__M_Y8O",container:"BookingFlowLayout_container__O6_V3",details:"BookingFlowLayout_details__y2AZA"}},489011:function(e){e.exports={self:"BookingFlowRichText_self__gguU9"}},505182:function(e){e.exports={container:"ClaimPointsBasedReward_container__aW5sB",header:"ClaimPointsBasedReward_header__yy0RS","configurable-amount":"ClaimPointsBasedReward_configurable-amount__E4hQS",configurableAmount:"ClaimPointsBasedReward_configurable-amount__E4hQS","configurable-amount__transitioning":"ClaimPointsBasedReward_configurable-amount__transitioning__MGbPi",configurableAmountTransitioning:"ClaimPointsBasedReward_configurable-amount__transitioning__MGbPi","configurable-amount__finished":"ClaimPointsBasedReward_configurable-amount__finished__p2_44",configurableAmountFinished:"ClaimPointsBasedReward_configurable-amount__finished__p2_44",slider:"ClaimPointsBasedReward_slider__LZq9y",header__finished:"ClaimPointsBasedReward_header__finished__mdHMA",headerFinished:"ClaimPointsBasedReward_header__finished__mdHMA",icon:"ClaimPointsBasedReward_icon__XuIdl",icon__inner:"ClaimPointsBasedReward_icon__inner__MipIe",iconInner:"ClaimPointsBasedReward_icon__inner__MipIe",icon__transitioning:"ClaimPointsBasedReward_icon__transitioning__8fwGY",iconTransitioning:"ClaimPointsBasedReward_icon__transitioning__8fwGY",icon__finished:"ClaimPointsBasedReward_icon__finished__1U2jF",iconFinished:"ClaimPointsBasedReward_icon__finished__1U2jF",body:"ClaimPointsBasedReward_body__mqYL_","body--configurable-amount-discount":"ClaimPointsBasedReward_body--configurable-amount-discount__1Dynj",bodyConfigurableAmountDiscount:"ClaimPointsBasedReward_body--configurable-amount-discount__1Dynj",text:"ClaimPointsBasedReward_text__zlhFw",text__transitioning:"ClaimPointsBasedReward_text__transitioning__FEJAg",textTransitioning:"ClaimPointsBasedReward_text__transitioning__FEJAg",text__finished:"ClaimPointsBasedReward_text__finished__3YPYf",textFinished:"ClaimPointsBasedReward_text__finished__3YPYf",confetti:"ClaimPointsBasedReward_confetti__LbvLZ",terms:"ClaimPointsBasedReward_terms__qO74u",terms__dismissed:"ClaimPointsBasedReward_terms__dismissed__5Itn2",termsDismissed:"ClaimPointsBasedReward_terms__dismissed__5Itn2",footer:"ClaimPointsBasedReward_footer__WOVB6",footer__points:"ClaimPointsBasedReward_footer__points__riukV",footerPoints:"ClaimPointsBasedReward_footer__points__riukV",footer__transitioning:"ClaimPointsBasedReward_footer__transitioning__4DOem",footerTransitioning:"ClaimPointsBasedReward_footer__transitioning__4DOem"}},393265:function(e){e.exports={self__title:"TermsAndConditions_self__title__tGGtr",selfTitle:"TermsAndConditions_self__title__tGGtr"}}}]);
//# sourceMappingURL=19279-af3f8ad99d23daed.js.map