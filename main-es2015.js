(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/contact\">Contact</a> <br>\r\n<a routerLink=\"/detailcontact\">Detail</a>\r\n<router-outlet></router-outlet> \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book/book.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book/book.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>book works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let contact of contacts\">\n    <a routerLink=\"/detailcontact/{{ contact.id }}/{{contact.name}}/{{contact.phoneNumber}}\">{{ contact.name}}</a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/learn-pipe/learn-pipe.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/learn-pipe/learn-pipe.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{ 1.9 | roundNum : true : 10}}</p>\n<p>{{ 3.5 | roundNum : false: 1 }}</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list-person/list-person.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-person/list-person.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let person of arrPeople\">\n    <app-person \n        [name]=\"person.name\" \n        [age]=\"person.age\"\n        (removePerson)=\"removePersonByName($event)\"\n        >\n    </app-person>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found-component/page-not-found-component.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found-component/page-not-found-component.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found-component works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/person/person.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/person/person.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Tên: {{name}}</h3>\n<p>Tuổi: {{age}}</p>\n<button (click)=\"removeByClick()\">Xoa</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-in.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-in.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form (ngSubmit)=\"onSubmit(formSignIn);\" #formSignIn=\"ngForm\">\r\n        <br>\r\n        <input \r\n            type=\"text\"\r\n            placeholder=\"Email\"\r\n            ngModel \r\n            #txtEmail=\"ngModel\" \r\n            name=\"email\" \r\n            required \r\n            email\r\n        />\r\n        <p *ngIf=\"txtEmail.touched && txtEmail.errors?.required\">\r\n            Email is required\r\n        </p>\r\n        <p *ngIf=\"txtEmail.touched && txtEmail.errors?.email\">\r\n            Email is not valid\r\n        </p>\r\n        <br><br>\r\n        <input \r\n            type=\"password\" \r\n            placeholder=\"password\" \r\n            ngModel \r\n            #txtPassword=\"ngModel\"\r\n            name='password'\r\n            minlength=\"6\"\r\n            pattern=\"[a-z]*\"\r\n        />\r\n        <br><br>\r\n        <div ngModelGroup=\"subjects\">\r\n            <label> <input type=\"checkbox\" [ngModel]=\"false\" name=\"NodeJS\" /> NodeJS </label>\r\n            <label> <input type=\"checkbox\" [ngModel]=\"false\" name=\"Angular\" /> Angular </label>\r\n            <label> <input type=\"checkbox\" [ngModel]=\"false\" name=\"ReactJS\" /> ReactJS </label>\r\n        </div>\r\n        <br>\r\n        <button [disabled]=\"formSignIn.invalid\"> Submit</button>\r\n    </form>\r\n    <br>\r\n    <button (click)=\"postToExpress();\">POST</button>\r\n\r\n    <p>{{txtEmail.errors | json }}</p>\r\n    <p>{{txtPassword.errors | json }}</p>\r\n    <p>{{formSignIn.value | json}}</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"onSubmit();\" [formGroup]=\"formSignUp\">\n        \n        <input \n            type=\"text\"\n            placeholder=\"Email\"\n            formControlName=\"email\"\n        />\n        <p *ngIf=\"formSignUp.get('email').invalid && formSignUp.controls.email.touched\">Email is required</p>\n        <br><br>\n        <input \n            type=\"password\" \n            placeholder=\"password\" \n            formControlName=\"password\"\n        />\n        <br><br>\n        <div formGroupName=\"subject\">\n            <label> <input type=\"checkbox\"  name=\"NodeJS\" formControlName=\"nodeJS\" /> NodeJS </label>\n            <label> <input type=\"checkbox\"  name=\"Angular\" formControlName=\"angular\"/> Angular </label>\n            <label> <input type=\"checkbox\"  name=\"ReactJS\" formControlName=\"reactJS\"/> ReactJS </label>\n        </div>\n        <br><br>\n    \n        <button [disabled]=\"formSignUp.invalid\"> Submit</button>\n    </form>\n    <code>{{ formSignUp.controls.email.errors | json }}</code>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/struct/struct.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/struct/struct.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"isShow\" >struct works!</p>\n<button (click)=\"isShow=!isShow\" >Toggle</button>\n\n<ul>\n    <li *ngFor='let subject of arrSubject'>\n        <p>{{\"subject = \"+subject}}</p>\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>test works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-form/user-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-form/user-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input placeholder=\"inputNameEnter\" [(ngModel)]=\"name\" #txtUserName />\n<h5 [ngStyle]=\"name.length  %2===0 ?  eventStyle : ollStyle\">input ban nhập là: {{ name }} </h5>\n<code> {{txtUserName.value | json}} </code>\n\n<div [ngClass]=\"currentClass\"></div>\n>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather/weather.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather/weather.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{ getMessage() }}</h3>\n<input placeholder=\"Enter City name\" [(ngModel)]=\"txtCityName\">\n<br><br>\n<button (click)=\"getWeather()\">Get Weather</button>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/word/word.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/word/word.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 [hidden]=\"forgot\">{{en}}</h3>\r\n<p>{{vn}}</p>\r\n<img [src]=\"imagesURL\" />\r\n<button class=\"btn btn-primary\" (click)=\"toggleForgot()\">Toggle Forgot</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/works/works.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/works/works.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div *ngIf=\"isShow\">\n    <input  placeholder=\"Enlish\" [(ngModel)]=\"newEn\" />\n    <br/>\n    <input  placeholder=\"vietNam\" [(ngModel)]=\"newVn\" />\n</div>\n<br/>\n<button (click)=\"isShow=!isShow\" (click)=\"addWord()\" >Them tu moi</button>\n\n<br><br>\n<select [(ngModel)]=\"filterStatus\">\n    <option value=\"XEM_TAT_CA\">xem tat ca </option>\n    <option value=\"XEM_DA_NHO\">xem tu da nho </option>\n    <option value=\"XEM_CHUA_NHO\">xem chua nho </option>\n</select>\n<div *ngFor=\"let word of arrWords\">\n    <div  class=\"word\" *ngIf=\"getShowStatus(word.menoryzed)\">\n        <h4 [ngStyle]=\"{color: word.menoryzed ? 'green' : 'red' }\">\n            {{word.en}}\n        </h4>\n        <p>\n            {{word.vn}}\n        </p>\n        <button (click)=\"removeWord(word.id)\">Xoa</button>\n        <button (click)=\"word.menoryzed=!word.menoryzed\">\n            {{word.menoryzed ? 'chua nho' : 'da nho'}}\n        </button>\n    </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.module */ "./src/app/contact/contact.module.ts");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/contact-detail/contact-detail.component.ts");
/* harmony import */ var _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found-component/page-not-found-component.component */ "./src/app/page-not-found-component/page-not-found-component.component.ts");







const routesConfig = [
    { path: 'detailcontact/:id/:name/:phoneNumber', component: _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailComponent"] },
    { path: '', redirectTo: '/contact', pathMatch: 'full' },
    { path: '**', component: _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponentComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routesConfig),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ],
        declarations: [
            _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailComponent"],
            _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponentComponent"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = ' appp ';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _word_word_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./word/word.component */ "./src/app/word/word.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _struct_struct_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./struct/struct.component */ "./src/app/struct/struct.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-person/list-person.component */ "./src/app/list-person/list-person.component.ts");
/* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parent.component */ "./src/app/parent.component.ts");
/* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./child.component */ "./src/app/child.component.ts");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./card.component */ "./src/app/card.component.ts");
/* harmony import */ var _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./learn-pipe/learn-pipe.component */ "./src/app/learn-pipe/learn-pipe.component.ts");
/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./round.pipe */ "./src/app/round.pipe.ts");
/* harmony import */ var _ip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ip.component */ "./src/app/ip.component.ts");
/* harmony import */ var _ip_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ip.service */ "./src/app/ip.service.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sign-in-component */ "./src/app/sign-in-component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");




// import Httpmodule

//import sẵn AppRoutingModule rồi 




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _word_word_component__WEBPACK_IMPORTED_MODULE_7__["Wordcomponent"],
            _book_book_component__WEBPACK_IMPORTED_MODULE_8__["BookComponent"],
            _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_9__["UserFormComponent"],
            _struct_struct_component__WEBPACK_IMPORTED_MODULE_10__["StructComponent"],
            _works_works_component__WEBPACK_IMPORTED_MODULE_11__["WorksComponent"],
            _person_person_component__WEBPACK_IMPORTED_MODULE_12__["PersonComponent"],
            _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_13__["ListPersonComponent"],
            _parent_component__WEBPACK_IMPORTED_MODULE_14__["ParentComponent"],
            _child_component__WEBPACK_IMPORTED_MODULE_15__["ChildComponent"],
            _card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
            _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_17__["LearnPipeComponent"],
            _round_pipe__WEBPACK_IMPORTED_MODULE_18__["RoundPipe"],
            _ip_component__WEBPACK_IMPORTED_MODULE_19__["IpComponent"],
            _weather_weather_component__WEBPACK_IMPORTED_MODULE_21__["WeatherComponent"],
            _sign_in_component__WEBPACK_IMPORTED_MODULE_22__["SignInComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__["SignUpComponent"],
            _test_test_component__WEBPACK_IMPORTED_MODULE_24__["TestComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [_ip_service__WEBPACK_IMPORTED_MODULE_20__["IpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BookComponent = class BookComponent {
    constructor() { }
    ngOnInit() {
    }
};
BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book',
        template: __webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/index.js!./src/app/book/book.component.html"),
        styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
    })
], BookComponent);



/***/ }),

/***/ "./src/app/card.component.ts":
/*!***********************************!*\
  !*** ./src/app/card.component.ts ***!
  \***********************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
};
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: `
        <div class="card">
            <div class="header">
                <ng-content select=".card-header"></ng-content>
            </div>
            <div class="body">
                <ng-content select=".card-body"></ng-content>
            </div> 
        </div>
    `,
        styles: ["\n        .card {\n            padding: 5px;\n            margin: 5px;\n            background: #fff;\n            border-radius: 2px;\n            display: inline-block;\n            width: 300px;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n        }\n    "]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/child.component.ts":
/*!************************************!*\
  !*** ./src/app/child.component.ts ***!
  \************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChildComponent = class ChildComponent {
    constructor() {
        this.value = 0;
        // 1.tạo sự kiện output
        // 2.hàm thực thi và phát sinh sự kiện dùng .emit
        //@Output() myClick=new EventEmitter<boolean>();
        //addParent(){
        //  this.myClick.emit(true);
        //}
        //subParent(){
        //  this.myClick.emit(false);
        //}
    }
};
ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-child',
        template: `<h3>{{value}}</h3>
    `
    })
], ChildComponent);



/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZGV0YWlsL2NvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ContactDetailComponent = class ContactDetailComponent {
    constructor(route) {
        this.route = route;
        this.name = '';
        this.phoneNumber = '';
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            this.name = params.get('name');
            this.phoneNumber = params.get('phoneNumber');
            console.log(id, this.name, this.phoneNumber);
        });
    }
};
ContactDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ContactDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-detail',
        template: `<p> Ten: {{name}} </p> <p> SDT: {{phoneNumber}} </p> `,
        styles: [__webpack_require__(/*! ./contact-detail.component.css */ "./src/app/contact-detail/contact-detail.component.css")]
    })
], ContactDetailComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() {
        this.contacts = [
            { id: 1, name: 'Teo', phoneNumber: '0123' },
            { id: 2, name: 'Ti', phoneNumber: '0456' },
            { id: 3, name: 'Tun', phoneNumber: '0789' },
        ];
    }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





const routesConfig = [
    { path: 'contact', component: _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] }
];
let ContactModule = class ContactModule {
};
ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routesConfig)
        ],
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]]
    })
], ContactModule);



/***/ }),

/***/ "./src/app/ip.component.ts":
/*!*********************************!*\
  !*** ./src/app/ip.component.ts ***!
  \*********************************/
/*! exports provided: IpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpComponent", function() { return IpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ip.service */ "./src/app/ip.service.ts");



let IpComponent = class IpComponent {
    constructor(ipService) {
        this.ipService = ipService;
    }
    ngOnInit() {
        this.ipService.getIp().then(ip => this.ip = ip);
    }
};
IpComponent.ctorParameters = () => [
    { type: _ip_service__WEBPACK_IMPORTED_MODULE_2__["IpService"] }
];
IpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ip',
        template: `<h3> {{ip}} </h3>`
    })
], IpComponent);



/***/ }),

/***/ "./src/app/ip.service.ts":
/*!*******************************!*\
  !*** ./src/app/ip.service.ts ***!
  \*******************************/
/*! exports provided: IpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpService", function() { return IpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let IpService = class IpService {
    constructor(http) {
        this.http = http;
    }
    getIp() {
        return this.http.get('http://ip.jsontest.com/').toPromise()
            .then(rs => rs['ip']); // cách 2 doituong['bien']=doituong.bien
    }
};
IpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
IpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IpService);



/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.css":
/*!*****************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuLXBpcGUvbGVhcm4tcGlwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.ts":
/*!****************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.ts ***!
  \****************************************************/
/*! exports provided: LearnPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPipeComponent", function() { return LearnPipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LearnPipeComponent = class LearnPipeComponent {
    constructor() {
        this.birthday = new Date(2015, 7, 25);
        this.person = { name: 'khoa pham', age: 30 };
        this.address = Promise.resolve('92 Le Thi Rieng');
    }
    ngOnInit() {
    }
};
LearnPipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learn-pipe',
        template: __webpack_require__(/*! raw-loader!./learn-pipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/learn-pipe/learn-pipe.component.html"),
        styles: [__webpack_require__(/*! ./learn-pipe.component.css */ "./src/app/learn-pipe/learn-pipe.component.css")]
    })
], LearnPipeComponent);



/***/ }),

/***/ "./src/app/list-person/list-person.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-person/list-person.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcGVyc29uL2xpc3QtcGVyc29uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/list-person/list-person.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-person/list-person.component.ts ***!
  \******************************************************/
/*! exports provided: ListPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPersonComponent", function() { return ListPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListPersonComponent = class ListPersonComponent {
    constructor() {
        this.arrPeople = [
            { name: 'Ti', age: 10 },
            { name: 'Teo', age: 15 },
            { name: 'Tun', age: 7 },
        ];
    }
    ngOnInit() {
    }
    removePersonByName(name) {
        const index = this.arrPeople.findIndex(e => e.name === name);
        //xoa 
        this.arrPeople.splice(index, 1);
    }
};
ListPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-person',
        template: __webpack_require__(/*! raw-loader!./list-person.component.html */ "./node_modules/raw-loader/index.js!./src/app/list-person/list-person.component.html"),
        styles: [__webpack_require__(/*! ./list-person.component.css */ "./src/app/list-person/list-person.component.css")]
    })
], ListPersonComponent);



/***/ }),

/***/ "./src/app/page-not-found-component/page-not-found-component.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/page-not-found-component/page-not-found-component.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kLWNvbXBvbmVudC9wYWdlLW5vdC1mb3VuZC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/page-not-found-component/page-not-found-component.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/page-not-found-component/page-not-found-component.component.ts ***!
  \********************************************************************************/
/*! exports provided: PageNotFoundComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponentComponent", function() { return PageNotFoundComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponentComponent = class PageNotFoundComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found-component',
        template: __webpack_require__(/*! raw-loader!./page-not-found-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found-component/page-not-found-component.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found-component.component.css */ "./src/app/page-not-found-component/page-not-found-component.component.css")]
    })
], PageNotFoundComponentComponent);



/***/ }),

/***/ "./src/app/parent.component.ts":
/*!*************************************!*\
  !*** ./src/app/parent.component.ts ***!
  \*************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child.component */ "./src/app/child.component.ts");



let ParentComponent = class ParentComponent {
    // khai bao bien kieu ChildComponent
    addForChild() {
        this.myChild.value++;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"], { static: true })
], ParentComponent.prototype, "myChild", void 0);
ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parent',
        template: `
                <button (click)="addForChild();">Add for child</button>
                <app-child></app-child>
    `
    })
], ParentComponent);



/***/ }),

/***/ "./src/app/person/person.component.css":
/*!*********************************************!*\
  !*** ./src/app/person/person.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonComponent = class PersonComponent {
    constructor() {
        //ten ham su kien tao ben kia removePerson , new su kien
        this.removePerson = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    removeByClick() {
        // .emit thực thi sự kiện
        this.removePerson.emit(this.name);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonComponent.prototype, "age", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PersonComponent.prototype, "removePerson", void 0);
PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-person',
        template: __webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/index.js!./src/app/person/person.component.html"),
        styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/person/person.component.css")]
    })
], PersonComponent);



/***/ }),

/***/ "./src/app/round.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/round.pipe.ts ***!
  \*******************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RoundPipe = class RoundPipe {
    transform(value, isUpper, addTo) {
        //lam tron so len Math.ceil
        if (isUpper) {
            return Math.ceil(value + addTo);
        }
        // lam tron so xuong Math.floor
        return Math.floor(value + addTo);
    }
};
RoundPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'roundNum' })
], RoundPipe);



/***/ }),

/***/ "./src/app/sign-in-component.ts":
/*!**************************************!*\
  !*** ./src/app/sign-in-component.ts ***!
  \**************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SignInComponent = class SignInComponent {
    constructor(http) {
        this.http = http;
    }
    onSubmit(formSignIn) {
        this.postToExpress(formSignIn.value);
        //  console.log(formSignIn.value);
        //console.log(formSignIn); 
    }
    postToExpress(body) {
        const url = 'http://localhost:3006/signin';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        // const body=JSON.stringify({name:'Khoa Pham'});
        this.http.post(url, body, { headers })
            .toPromise()
            .then(res => console.log(res));
        //.then(resText => console.log(resText));
        // this.http.post(url,body, { headers }).subscribe(x=>console.log(x))
    }
};
SignInComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign-in.component.html"),
        selector: 'app-sign-in'
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SignUpComponent = class SignUpComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.formSignUp = this.fb.group({
            // email k de trong : Validators.required , 
            //kiểu email: Validators.email
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, gmailVadiator]],
            password: '',
            subject: this.fb.group({
                nodeJS: false,
                angular: true,
                reactJS: false
            })
        });
    }
    onSubmit() {
        console.log(this.formSignUp.value);
        console.log(this.formSignUp);
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.component.html"),
        selector: 'app-sign-up'
    })
], SignUpComponent);

function gmailVadiator(formControl) {
    if (formControl.value.includes('@gmail.com')) {
        return null;
    }
    return { gmail: true };
}


/***/ }),

/***/ "./src/app/struct/struct.component.css":
/*!*********************************************!*\
  !*** ./src/app/struct/struct.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cnVjdC9zdHJ1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/struct/struct.component.ts":
/*!********************************************!*\
  !*** ./src/app/struct/struct.component.ts ***!
  \********************************************/
/*! exports provided: StructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructComponent", function() { return StructComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StructComponent = class StructComponent {
    constructor() {
        this.isShow = true;
        this.arrSubject = ['angular', 'csss', 'phpppp', 'llll'];
    }
    ngOnInit() {
    }
};
StructComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-struct',
        template: __webpack_require__(/*! raw-loader!./struct.component.html */ "./node_modules/raw-loader/index.js!./src/app/struct/struct.component.html"),
        styles: [__webpack_require__(/*! ./struct.component.css */ "./src/app/struct/struct.component.css")]
    })
], StructComponent);



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponent = class TestComponent {
    constructor() {
        InSo();
    }
    ngOnInit() {
    }
};
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html"),
        styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
    })
], TestComponent);

function InSo() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 == 0 || i % 5 == 0) {
            if (i % 3 == 0) {
                console.log('Fizz');
            }
            else {
                console.log('Buzz');
            }
        }
        else {
            console.log(i);
        }
    }
}


/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle{\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 25px;\r\n    background-color: aquamarine;\r\n}\r\n.square{\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 2px;\r\n    background-color: aquamarine;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xle1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxufVxyXG4uc3F1YXJle1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserFormComponent = class UserFormComponent {
    constructor() {
        this.name = '';
        this.isHightLight = true;
        this.eventStyle = { color: 'red' };
        this.ollStyle = { color: 'black' };
        this.currentClass = { 'circle': !this.isHightLight, square: this.isHightLight };
    }
    ngOnInit() {
    }
};
UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-form',
        template: __webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-form/user-form.component.html"),
        styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")]
    })
], UserFormComponent);



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather/weather.service.ts");



let WeatherComponent = class WeatherComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.txtCityName = '';
        this.cityName = '';
        this.temp = null;
        this.isLoading = false;
    }
    ngOnInit() {
        this.weatherService.getTemp('tokyo')
            .then(temp => console.log(temp))
            .catch(err => console.log(err));
    }
    getWeather() {
        this.isLoading = true;
        this.weatherService.getTemp(this.txtCityName)
            .then(temp => {
            this['cityName'] = this['txtCityName'];
            this['temp'] = temp;
            this.isLoading = false;
            this.txtCityName = '';
        })
            .catch(err => {
            alert('canot find your city !');
            this.isLoading = false;
            this.cityName = '';
            this.txtCityName = '';
        });
    }
    getMessage() {
        if (this.isLoading) {
            return "loading...";
        }
        return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' temp is now ' + this.temp);
    }
};
WeatherComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
];
WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: __webpack_require__(/*! raw-loader!./weather.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather/weather.component.html"),
        providers: [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]],
        styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
    })
], WeatherComponent);



/***/ }),

/***/ "./src/app/weather/weather.service.ts":
/*!********************************************!*\
  !*** ./src/app/weather/weather.service.ts ***!
  \********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
    }
    getTemp(cityName) {
        // truyen vào đường dẫn API + tên cần tuyền vào
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=8e3e876d95f7aaa480beef260cf364fb&units=metric&q='
            + cityName;
        return this.http.get(url)
            .toPromise()
            .then(resJson => resJson['main']['temp']); // lấy nhiệt độ
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WeatherService);



/***/ }),

/***/ "./src/app/word/word.component.css":
/*!*****************************************!*\
  !*** ./src/app/word/word.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n    color: red;\r\n    font-size: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZC93b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3dvcmQvd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/word/word.component.ts":
/*!****************************************!*\
  !*** ./src/app/word/word.component.ts ***!
  \****************************************/
/*! exports provided: Wordcomponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wordcomponent", function() { return Wordcomponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Wordcomponent = class Wordcomponent {
    constructor() {
        this.en = 'Hello';
        this.vn = 'Xin chao';
        this.imagesURL = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
        this.forgot = false; // đã quên (hiển thị hay không)
    }
    toggleForgot() {
        this.forgot = !this.forgot;
    }
};
Wordcomponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./word.component.html */ "./node_modules/raw-loader/index.js!./src/app/word/word.component.html"),
        selector: 'app-word',
        styles: [__webpack_require__(/*! ./word.component.css */ "./src/app/word/word.component.css")]
    })
], Wordcomponent);



/***/ }),

/***/ "./src/app/works/works.component.css":
/*!*******************************************!*\
  !*** ./src/app/works/works.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".word{\r\n    background-color: aqua;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    width: 150px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3Mvd29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93b3Jrcy93b3Jrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/works/works.component.ts":
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorksComponent = class WorksComponent {
    constructor() {
        this.arrWords = [
            { id: 1, en: 'action', vn: 'hanh dong', menoryzed: true },
            { id: 2, en: 'actor', vn: 'dien vien', menoryzed: false },
            { id: 3, en: 'action', vn: 'hanh dong', menoryzed: true },
            { id: 4, en: 'action', vn: 'hanh dong', menoryzed: true },
            { id: 5, en: 'bath', vn: 'tam', menoryzed: false },
            { id: 6, en: 'action', vn: 'hanh dong', menoryzed: true },
        ];
        this.newEn = '';
        this.newVn = '';
        this.isShow = true;
        // lọc mảng hiển thj:
        this.filterStatus = 'XEM_TAT_CA';
    }
    ngOnInit() {
    }
    addWord() {
        //unshift them vao dau, them vao cuoi dung .push
        this.arrWords.unshift({
            id: this.arrWords.length + 1,
            en: this.newEn,
            vn: this.newVn,
            menoryzed: false
        });
        this.newEn = '';
        this.newVn = '';
    }
    removeWord(id) {
        // tìm xem id nằm ở đâu sử dụng hàm 
        const index = this.arrWords.findIndex(e => e.id === id);
        // xoa 
        this.arrWords.splice(index, 1);
    }
    getShowStatus(menoryzed) {
        var dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
        const dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && menoryzed;
        const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !menoryzed;
        return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
    }
};
WorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-works',
        template: __webpack_require__(/*! raw-loader!./works.component.html */ "./node_modules/raw-loader/index.js!./src/app/works/works.component.html"),
        styles: [__webpack_require__(/*! ./works.component.css */ "./src/app/works/works.component.css")]
    })
], WorksComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map