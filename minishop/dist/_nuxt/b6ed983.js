(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{391:function(t,e,r){"use strict";r(17),r(11),r(12),r(7),r(16),r(63);var c=r(27),o=(r(33),r(25),r(26),r(2)),n=r(5),l=r(384),d=r(390);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{VueSlideToggle:l.a,QuantityInput:d.a},props:{product:{type:Object}},watch:{product:{deep:!0,handler:function(){this.productPrice=this.formatPrice(this.product.price),this.$forceUpdate()}}},data:function(){return{variationGroup:[],selectableGroup:[],sizeArray:[],colorArray:[],selectedVariant:{color:null,colorName:null,price:null,size:null},maxPrice:0,minPrice:99999,qty:1,qty2:1,productPrice:0}},computed:v(v(v(v({},Object(n.c)("cart",["canAddToCart"])),Object(n.c)("wishlist",["isInWishlist"])),Object(n.c)("compare",["isInCompare"])),{},{showClear:function(){return!(!this.selectedVariant.color&&!this.selectedVariant.size)},showVariationPrice:function(){return!(!this.selectedVariant.color||!this.selectedVariant.size)},isCartSticy:function(){return this.$route.path.includes("/product/default")}}),created:function(){var t=this.minPrice,e=this.maxPrice;this.variationGroup=this.product.variants.reduce((function(r,c){return c.size.map((function(t){r.push({color:c.color,colorName:c.color_name,size:t.name,price:c.price})})),t>c.price&&(t=c.price),e<c.price&&(e=c.price),r}),[]),0==this.product.variants.length&&(t=this.product.sale_price?this.product.sale_price:this.product.price,e=this.product.price),this.minPrice=t,this.maxPrice=e,this.refreshSelectableGroup()},updated:function(){},methods:v(v(v(v({},Object(n.b)("cart",["addToCart"])),Object(n.b)("wishlist",["addToWishlist"])),Object(n.b)("compare",["addToCompare"])),{},{refreshSelectableGroup:function(){var t=this,e=Object(c.a)(this.variationGroup);this.selectedVariant.color&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.color!==r.color?e:[].concat(Object(c.a)(e),[r])}),[])),this.sizeArray=e.reduce((function(t,e){return-1!==t.findIndex((function(t){return t.size==e.size}))?t:[].concat(Object(c.a)(t),[e])}),[]),e=Object(c.a)(this.variationGroup),this.selectedVariant.size&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.size!==r.size?e:[].concat(Object(c.a)(e),[r])}),[])),this.colorArray=this.product.variants.reduce((function(t,r){return-1==e.findIndex((function(t){return t.color==r.color}))?[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!0}]):[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!1}])}),[])},selectColor:function(t){t.color==this.selectedVariant.color?this.selectedVariant=v(v({},this.selectedVariant),{},{color:null,colorName:null,price:t.price}):this.selectedVariant=v(v({},this.selectedVariant),{},{color:t.color,colorName:t.colorName,price:t.price}),this.refreshSelectableGroup()},selectSize:function(){"null"==this.selectedVariant.size&&(this.selectedVariant=v(v({},this.selectedVariant),{},{size:null})),this.refreshSelectableGroup()},changeQty:function(t){this.qty=t},changeQty2:function(t){this.qty2=t},clearSelection:function(){this.selectedVariant=v(v({},this.selectedVariant),{},{color:null,colorName:null,size:null}),this.refreshSelectableGroup()},addCart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=v({},this.product);this.addToCart({product:e,qty:0==t?this.qty:this.qty2})}})},m=r(6),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"product-details"},[r("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),0==t.product.stock?r("div",{key:"outPrice",staticClass:"product-price"},[r("span",{staticClass:"out-price"},[t._v(t._s(t.productPrice||"Miễn phí"))])]):[t.minPrice==t.maxPrice?r("div",{staticClass:"product-price"},[t._v("\n            "+t._s(t.productPrice||"Miễn phí")+"\n        ")]):[0==t.product.variants.length?r("div",{staticClass:"product-price"},[r("span",{staticClass:"new-price"},[t._v(t._s(t.formatPrice(t.minPrice)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v(t._s(t.formatPrice(t.maxPrice)))])]):r("div",{staticClass:"product-price"},[t._v("\n                "+t._s(t.formatPrice(t.minPrice))+" -\n                "+t._s(t.formatPrice(t.maxPrice))+"\n            ")])]],t._v(" "),r("div",{staticClass:"product-content"},[r("p",[t._v(t._s(t.product.short_desc))])]),t._v(" "),r("div",{staticClass:"details-filter-row details-row-size"},[r("label",{attrs:{for:"qty"}},[t._v("Qty:")]),t._v(" "),r("quantity-input",{attrs:{product:t.product},on:{"change-qty":t.changeQty}})],1),t._v(" "),r("div",{staticClass:"product-details-action"},[r("a",{staticClass:"btn-product btn-cart",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.addCart(0)}}},[r("span",[t._v("thêm vào giỏ hàng")])]),t._v(" "),r("div",{staticClass:"details-action-wrapper"},[t.isInWishlist(t.product)?r("nuxt-link",{key:"inWishlist",staticClass:"btn-product btn-wishlist added-to-wishlist",attrs:{to:"/shop/wishlist",title:"Wishlist"}},[r("span",[t._v("Xem trong yêu thích")])]):r("a",{key:"notInWishlist",staticClass:"btn-product btn-wishlist",attrs:{href:"#",title:"Wishlist"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[r("span",[t._v("Thêm vào yêu thích")])])],1)]),t._v(" "),r("div",{staticClass:"product-details-footer"},[r("div",{staticClass:"product-cat w-100 text-truncate"},[r("span",[t._v("Phân loại:")]),t._v(" "),t._l(t.product.category,(function(e,c){return r("span",{key:c,staticClass:"mr-2"},[t._v("\n                •\n                "),r("nuxt-link",{attrs:{to:{path:"/shop/sidebar/list",query:{category:e.slug}}}},[t._v(t._s(e.name))])],1)}))],2),t._v(" "),t._m(0)])],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social-icons social-icons-sm"},[e("span",{staticClass:"social-label"},[this._v("Chia sẻ:")]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])])}],!1,null,null,null);e.a=component.exports},426:function(t,e,r){"use strict";r(33);var c=r(27),o=r(400),n=r.n(o),l=(r(401),{components:{LightBox:n.a},props:{product:{type:Object,default:function(){return{sm_pictures:[],pictures:[]}}}},data:function(){return{currentIndex:0}},computed:{lightBoxMedia:function(){var t=this;return this.product.pictures.reduce((function(e,r){return[].concat(Object(c.a)(e),[{thumb:"".concat(r.url),src:"".concat(r.url),caption:t.product.name}])}),[])}},methods:{changePicture:function(t){this.currentIndex=t},openLightBox:function(){this.$refs.lightbox.showImage(this.currentIndex)}}}),d=r(6),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"product-gallery product-gallery-vertical"},[r("div",{staticClass:"row m-0"},[r("figure",{staticClass:"product-main-image"},[0===t.product.stock?r("span",{staticClass:"product-label label-out"},[t._v("Out Of Stock")]):t._e(),t._v(" "),t.product.pictures[t.currentIndex]?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.product.pictures[t.currentIndex].url,expression:"`${product.pictures[currentIndex].url}`"}],attrs:{id:"product-zoom",alt:"product",width:t.product.pictures[t.currentIndex].width,height:t.product.pictures[t.currentIndex].height}}):t._e(),t._v(" "),r("a",{staticClass:"btn-product-gallery",attrs:{href:"#",id:"btn-product-gallery"},on:{click:function(e){return e.preventDefault(),t.openLightBox(e)}}},[r("i",{staticClass:"icon-arrows"})])]),t._v(" "),r("div",{staticClass:"product-image-gallery",attrs:{id:"product-zoom-gallery"}},t._l(t.product.sm_pictures,(function(e,c){return r("a",{key:c,staticClass:"product-gallery-item h-100 h-lg-auto carousel-dot",class:{active:t.currentIndex==c},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePicture(c)}}},[r("img",{attrs:{src:""+e.url,width:e.width,height:e.height,alt:"product side"}})])})),0),t._v(" "),t.product.pictures[0]?r("light-box",{ref:"lightbox",staticClass:"light-box",attrs:{media:t.lightBoxMedia,"show-caption":!0,"show-light-box":!1}}):t._e()],1)]):t._e()}),[],!1,null,null,null);e.a=component.exports},655:function(t,e,r){"use strict";r.r(e);r(17),r(11),r(12),r(7),r(16);var c=r(2),o=r(5),n=r(426),l=r(391),d=r(413),h=r(393),v=r(394);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{DetailOne:l.a,InfoOne:d.a,Breadcrumb:h.a,GalleryVertical:n.a,RelatedProductsOne:v.a},data:function(){return{product:null,relatedProducts:[],loaded:!0}},computed:m(m({},Object(o.c)("product",["getCurrentItem"])),Object(o.c)("product",["getItems"])),created:function(){this.getDetail(this.$route.params.slug)},methods:m({},Object(o.b)("product",["getDetail"]))},y=r(6),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("div",{staticClass:"page-content"},[r("div",{staticClass:"container skeleton-body container_padding",staticStyle:{background:"white","border-radius":"6px"}},[r("div",{staticClass:"product-details-top"},[r("div",{staticClass:"row skel-pro-single",class:{loaded:t.loaded}},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"skel-product-gallery"}),t._v(" "),t.getCurrentItem?r("gallery-vertical",{attrs:{product:t.getCurrentItem}}):t._e()],1),t._v(" "),r("div",{staticClass:"col-md-6"},[t._m(0),t._v(" "),t.getCurrentItem?r("detail-one",{attrs:{product:t.getCurrentItem}}):t._e()],1)])]),t._v(" "),r("info-one"),t._v(" "),r("related-products-one",{attrs:{products:t.getItems}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"entry-summary row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary1 mt-2 mt-md-0"})]),this._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary2"})])])}],!1,null,null,null);e.default=component.exports}}]);