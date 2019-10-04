(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<app-search-filter></app-search-filter>\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"favicon.ico\">\n</div> -->\n<mat-slider min=\"1\" max=\"100\" step=\"1\" value=\"1\"></mat-slider>\n<app-body></app-body>\n<h1>Our Partners </h1>\n<app-footer></app-footer>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Imuka Access';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-filter/search-filter.component */ "./src/app/search-filter/search-filter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_9__["SearchFilterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.card {\n    /* box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2);*/\n     border: 0px;\n     transition: 0.3s;\n   \n   \n   }\n   \n   .card:hover {\n     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n   }\n   \n   .card-deck {\n     margin: auto;\n     background: white;\n     \n   }\n   \n   .card-header{\n       border: 0px;\n   }\n   \n   .card-body{\n       border: 0px;\n   }\n   \n   .card-footer {\n       background: white;\n       color: DodgerBlue ;\n       border: 0PX;\n   }\n   \n   .main_container{\n     width: 80%;\n     margin: auto;\n     overflow: hidden;\n   }\n   \n   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksOENBQThDO0tBQzdDLFlBQVk7S0FDWixpQkFBaUI7OztJQUdsQjs7R0FFRDtLQUNFLHlDQUF5QztJQUMxQzs7R0FDRDtLQUNFLGFBQWE7S0FDYixrQkFBa0I7O0lBRW5COztHQUNEO09BQ0ksWUFBWTtJQUNmOztHQUNEO09BQ0ksWUFBWTtJQUNmOztHQUNEO09BQ0ksa0JBQWtCO09BQ2xCLG1CQUFtQjtPQUNuQixZQUFZO0lBQ2Y7O0dBQ0Q7S0FDRSxXQUFXO0tBQ1gsYUFBYTtLQUNiLGlCQUFpQjtJQUNsQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZCB7XG4gICAgLyogYm94LXNoYWRvdzogMCA0cHggMTBweCAwIHJnYmEoMCwwLDAsMC4yKTsqL1xuICAgICBib3JkZXI6IDBweDtcbiAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgIFxuICAgXG4gICB9XG4gICBcbiAgIC5jYXJkOmhvdmVyIHtcbiAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgIH1cbiAgIC5jYXJkLWRlY2sge1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICBcbiAgIH1cbiAgIC5jYXJkLWhlYWRlcntcbiAgICAgICBib3JkZXI6IDBweDtcbiAgIH1cbiAgIC5jYXJkLWJvZHl7XG4gICAgICAgYm9yZGVyOiAwcHg7XG4gICB9XG4gICAuY2FyZC1mb290ZXIge1xuICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgIGNvbG9yOiBEb2RnZXJCbHVlIDtcbiAgICAgICBib3JkZXI6IDBQWDtcbiAgIH1cbiAgIC5tYWluX2NvbnRhaW5lcntcbiAgICAgd2lkdGg6IDgwJTtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgfVxuICAgXG4gICAiXX0= */"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main_container\">\n  <h2>Trending deals</h2>\n <div class=\"card-deck\">\n  \n   \n \n   <div class=\"card\" >\n     <header class=\"card-header\" style='color: white; background: DodgerBlue ;'>\n       <h1>Header</h1>\n     </header>\n \n     <div class=\"card-body\">\n       <p> \n     ACP digital financial services (Digital4Inclusion)- Call for proposals (General) The European Union (EU) is seeking proposals from eligible organisations for a program entitled “Digital Financial Services for ACP (Digital4Inclusion). The ...</p>\n     </div>\n \n     <footer class=\"card-footer\">\n      <button class=\"btn btn-info\">See More</button>\n     </footer>\n     \n   </div>\n    <div class=\"card\" >\n     <header class=\"card-header\" style='color: white; background: DodgerBlue ;'>\n       <h1>Header</h1>\n     </header>\n \n     <div class=\"card-body\">\n       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \n     </div>\n \n     <footer class=\"card-footer\">\n      <button class=\"btn btn-info\">See More</button>\n     </footer>\n     \n   </div>\n      <div class=\"card\" >\n     <header class=\"card-header\" style='color: white; background: DodgerBlue ;'>\n       <h1>Header</h1>\n     </header>\n \n     <div class=\"card-body\">\n       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \n     </div>\n \n     <footer class=\"card-footer\">\n       <button class=\"btn btn-info\">See More</button><button>7 d(s) left</button>\n     </footer>\n     \n   </div>\n    \n </div>\n \n \n \n  <h2>Treading deals</h2>\n <!-- Card deck -->\n <div class=\"card-deck\">\n \n   <!-- Card -->\n   <div class=\"card mb-4\">\n \n     <!--Card image-->\n     <div class=\"view overlay\">\n       <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/16.jpg\" alt=\"Card image cap\">\n       <a href=\"#!\">\n         <div class=\"mask rgba-white-slight\"></div>\n       </a>\n     </div>\n \n     <!--Card content-->\n     <div class=\"card-body\">\n \n       <!--Title-->\n       <h4 class=\"card-title\">Card title</h4>\n       <!--Text-->\n       <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n       <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n       <button type=\"button\" class=\"btn btn-info\">Read more</button>\n \n     </div>\n \n   </div>\n   <!-- Card -->\n \n   <!-- Card -->\n   <div class=\"card mb-4\">\n \n     <!--Card image-->\n     <div class=\"view overlay\">\n       <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/14.jpg\" alt=\"Card image cap\">\n       <a href=\"#!\">\n         <div class=\"mask rgba-white-slight\"></div>\n       </a>\n     </div>\n \n     <!--Card content-->\n     <div class=\"card-body\">\n \n       <!--Title-->\n       <h4 class=\"card-title\">Card title</h4>\n       <!--Text-->\n       <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n       <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n       <button type=\"button\" class=\"btn btn-info\">Read more</button>\n\n     </div>\n \n   </div>\n   <!-- Card -->\n \n   <!-- Card -->\n   <div class=\"card mb-4\">\n \n     <!--Card image-->\n     <div class=\"view overlay\">\n       <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/15.jpg\" alt=\"Card image cap\">\n       <a href=\"#!\">\n         <div class=\"mask rgba-white-slight\"></div>\n       </a>\n     </div>\n \n     <!--Card content-->\n     <div class=\"card-body\">\n \n       <!--Title-->\n       <h4 class=\"card-title\">Card title</h4>\n       <!--Text-->\n       \n       <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n       <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n       <button type=\"button\" class=\"btn btn-info\">Read more</button>\n \n     </div>\n \n   </div>\n   <!-- Card -->\n \n </div>\n <!-- Card deck -->\n </div>\n "

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-footer{\n    background-color: #e5d7d7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkN2Q3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <i class=\"m-2 text-primary fa fa-facebook-square fa-2x\"></i>\r\n            <i class=\"m-2 fa fa-twitter-square fa-2x\"></i>\r\n            <i class=\"m-2 fa fa-youtube-square fa-2x\"></i>\r\n            <i class=\"m-2 fa fa-linkedin-square fa-2x\"></i>\r\n          </div>\r\n        \r\n          <div class=\"col-md-8 row\">\r\n          \r\n              <div class=\"input-group mb-4\">\r\n                  <h4 class=\"ml-3 pr-2\">Newsletter: </h4><input type=\"text\" class=\"form-control\" placeholder=\"Enter Your Email Here\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-primary\" type=\"button\" id=\"button-addon2\">Subscribe</button>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"bg-footer py-4\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <h4>Connect With Us</h4>\r\n        <p>Food Technology Incubatrion Center</p>\r\n        <p>Makerere University,Uganda</p>\r\n        <p></p>\r\n        <p>+256-770-704-185</p>\r\n        <p>info@imukaventures.org</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <h4>Useful Links</h4>\r\n          <p> <a href=\"#\" class=\"text-dark\">Terms & Condition</a></p>\r\n          <p> <a href=\"#\" class=\"text-dark\">About Us</a></p>\r\n          <p> <a href=\"#\" class=\"text-dark\"></a></p>\r\n          <p> <a href=\"#\" class=\"text-dark\">Testimonies</a></p>\r\n          <p> <a href=\"#\" class=\"text-dark\">Investors</a></p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <h4>We are Open</h4>\r\n          <p>Monday- Friday   08:00AM- 05:00PM</p>\r\n          <p>Saturday         08:00AM- 03:00PM</p>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <p class=\"text-center pt-2\">&copy; Copyright 2019 Imuka Ventures Limited.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div>\r\n  <h1 class=\"bg-danger\">footer</h1>\r\n</div>\r\n\r\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"d-block w-100\" src=\"../../assets/img_1.png\" alt=\"First slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"../../assets/img_2.png\" alt=\"Second slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"../../assets/img_1.png\" alt=\"Third slide\">\r\n    </div>\r\n  </div>\r\n\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div> -->\r\n<!-- <div class=\"col-md-6 offset-md-3\">\r\n  <div class=\"carousel slide text-center\" id=\"myCarousel\" data-ride=\"carousel\">\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <div class=\"col-md-4\"><a href=\"#\"><img src=\"../../assets/img_2.png\" class=\"img-fluid\"></a></div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <div class=\"col-md-4\"><a href=\"#\"><img src=\"../../assets/img_1.png\" class=\"img-fluid\"></a></div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <div class=\"col-md-4\"><a href=\"#\"><img src=\"../../assets/img_2.png\" class=\"img-fluid\"></a></div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <div class=\"col-md-4\"><a href=\"#\"><img src=\"../../assets/img_1.png\" class=\"img-fluid\"></a></div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <div class=\"col-md-4\"><a href=\"#\"><img src=\"../../assets/img_2.png\" class=\"img-fluid\"></a></div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <div class=\"col-md-4\"><a href=\"#\"><img src=\"../../assets/img_1.png\" class=\"img-fluid\"></a></div>\r\n      </div>\r\n    </div>\r\n\r\n    <a class=\"left carousel-control mt-3 p-4\" href=\"#myCarousel\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a>\r\n    <a class=\"right carousel-control mt-3 p-4\" href=\"#myCarousel\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a>\r\n  </div>\r\n</div>\r\n\r\n<footer>\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n        \r\n      </div>\r\n  </div>     \r\n  <p>&copy; Copyright 2019 - Imuka Ventures - All rights reserved.</p>\r\n</footer> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    margin-left:10px;\n    color:white;\n    }\n\n    .form-control{\nborder-radius: 20px;\n\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7S0FDWDs7SUFFRDtBQUNKLG9CQUFvQjs7S0FFZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG5cbiAgICAuZm9ybS1jb250cm9se1xuYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Nav Bar header with Imuka Logo and search Buttons-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary sticky-top\">\n  <a class=\"navbar-brand\" href=\"#\"> \n      <img src=\"favicon.ico\" class=\"img-responsive\" alt=\"Cinque Terre\" width=\"60\" height=\"20\" alt=\"\">\n    Imuka Access\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  \n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  href=\"#\"  data-toggle=\"tooltip\" title=\"Look at Available Opportuities\">Opportunities <span class=\"badge badge-pill badge-danger\">4</span></a>\n        \n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"  data-toggle=\"tooltip\" title=\"See Available Deals\">Deals <span class=\"badge badge-pill badge-success\">23</span></a>\n      </li>\n    </ul>\n  </div>\n  <form class=\"form-inline\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search Imuka\" aria-label=\"Search\">\n    \n    <!-- <aio-search-box class=\"search-container\"></aio-search-box> -->\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    <span ></span>\n    <button class=\"btn  btn-outline-success\" type=\"button\">Login</button>\n    <button class=\"btn  btn-outline-success\" type=\"button\">Signup</button>\n  </form>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/search-filter/search-filter.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-filter/search-filter.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .industry{\n    margin-left:250px;\n}\n\n\n.location{\n    margin-left:30px;\n}\n\n.range{\n    margin-left:30px;\n}\n\n.btn{\n    margin-left:50px;\n} */\n\n.s-filter{\nborder-block-end-width: 10px;\nborder-block-color: red;\n\n}\n\n.filter{\n    /* The image used */\nbackground-image: url(\"/assets/imuka_investor.jpg\");\n\n /* Add the blur effect */\n /* filter: blur(1px);\n -webkit-filter: blur(8px); */\n\n /* Full height */\n height: 85%;\n\n /* Center and scale the image nicely */\n background-position: center;\n background-repeat: no-repeat;\n background-size: cover;\n\n}\n\n.search-form{\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */\n    color: white;\n    font-weight: bold;\n    border: 3px solid #f1f1f1;\n    position: absolute;\n    top: 80%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    width: 80%;\n    padding: 20px;\n    text-align: center;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztJQWVJOztBQUVKO0FBQ0EsNkJBQTZCO0FBQzdCLHdCQUF3Qjs7Q0FFdkI7O0FBRUQ7SUFDSSxvQkFBb0I7QUFDeEIsb0RBQW9EOztDQUVuRCx5QkFBeUI7Q0FDekI7OEJBQzZCOztDQUU3QixpQkFBaUI7Q0FDakIsWUFBWTs7Q0FFWix1Q0FBdUM7Q0FDdkMsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3Qix1QkFBdUI7O0NBRXZCOztBQUVEO0lBQ0ksNkJBQTZCLENBQUMsb0JBQW9CO0lBQ2xELG1DQUFtQyxDQUFDLGlDQUFpQztJQUNyRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1COztDQUV0QiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1maWx0ZXIvc2VhcmNoLWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmluZHVzdHJ5e1xuICAgIG1hcmdpbi1sZWZ0OjI1MHB4O1xufVxuXG5cbi5sb2NhdGlvbntcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xufVxuXG4ucmFuZ2V7XG4gICAgbWFyZ2luLWxlZnQ6MzBweDtcbn1cblxuLmJ0bntcbiAgICBtYXJnaW4tbGVmdDo1MHB4O1xufSAqL1xuXG4ucy1maWx0ZXJ7XG5ib3JkZXItYmxvY2stZW5kLXdpZHRoOiAxMHB4O1xuYm9yZGVyLWJsb2NrLWNvbG9yOiByZWQ7XG5cbn1cblxuLmZpbHRlcntcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbXVrYV9pbnZlc3Rvci5qcGdcIik7XG5cbiAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXG4gLyogZmlsdGVyOiBibHVyKDFweCk7XG4gLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTsgKi9cblxuIC8qIEZ1bGwgaGVpZ2h0ICovXG4gaGVpZ2h0OiA4NSU7XG5cbiAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG59XG5cbi5zZWFyY2gtZm9ybXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNCk7IC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDgwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogMjtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/search-filter/search-filter.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-filter/search-filter.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Search Filter Division -->\n<div class=\"filter\"></div>\n\n  <!-- <div style=\"text-align:center\">\n    \n    <img width=\"800\" alt=\"Angular Logo\" src=\"/assets/imuka_investor.jpg\">\n  </div> -->\n\n  <div class=\"search-form\" >\n\n  <form class=\"form-inline s-filter\" >\n   <div class=\"row\">\n    <div class=\"industry col\">\n      <select class=\"form-control\" id=\"industry\" aria-placeholder=\"Select Industry\">\n          <option selected disabled>Select Industry</option>\n        <option>Agriculture</option>\n        <option>Education</option>\n        <option>Poultry</option>\n        <option>Medicine</option>\n        <option>Catering</option>\n      </select>\n    </div>\n\n    <div class=\"location col\" >\n      <select class=\"form-control\" id=\"location\">\n          <option selected disabled>Location</option>\n        <option>Bundibugyo</option>\n        <option>Mubende</option>\n        <option>Hoima</option>\n        <option>Gulu</option>\n        <option>Fortportal</option>\n        <option>Kasese</option>\n      </select>\n    </div>\n\n    <div class=\"range col\" >\n      <select class=\"form-control\" id=\"range\">\n          <option selected disabled>Deal Value / Range</option>\n        <option>100,000-500,000</option>\n        <option>600,000-1,000,000</option>\n        <option>1M - 5M</option>\n        <option>6M - 10M</option>\n        <option>11M - 50M</option>\n        <option>60M - 100M</option>\n        <option>Over 100M</option>\n      </select>\n    </div>\n\n    \n    <button type=\"submit\" class=\"btn btn-primary mb-2 col\">Search  Deal</button>\n   </div>\n  </form>\n\n</div>\n\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/search-filter/search-filter.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-filter/search-filter.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterComponent", function() { return SearchFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchFilterComponent = /** @class */ (function () {
    function SearchFilterComponent() {
    }
    SearchFilterComponent.prototype.ngOnInit = function () {
    };
    SearchFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-filter',
            template: __webpack_require__(/*! ./search-filter.component.html */ "./src/app/search-filter/search-filter.component.html"),
            styles: [__webpack_require__(/*! ./search-filter.component.css */ "./src/app/search-filter/search-filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchFilterComponent);
    return SearchFilterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tendo/Imuka2-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map