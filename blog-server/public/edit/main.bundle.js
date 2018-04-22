webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */] },
    { path: 'preview/:id', component: __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__["a" /* PreviewComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\r\n* {\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-list></app-list>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__["a" /* PreviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__blog_service__["a" /* BlogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Post */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Post = /** @class */ (function () {
    function Post(pid, created, modified, title, body) {
        this.postid = pid;
        this.created = created;
        this.modified = modified;
        this.title = title;
        this.body = body;
    }
    return Post;
}());

var BlogService = /** @class */ (function () {
    function BlogService(http, router) {
        this.http = http;
        this.router = router;
        this.user = null;
        this.posts = [];
        this.fetchPosts();
    }
    BlogService.prototype.findCookie = function (cookies) {
        for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
            var cookie = cookies_1[_i];
            var name_1 = cookie.split('=')[0];
            if (name_1 == __WEBPACK_IMPORTED_MODULE_4__config__["a" /* config */].jwtCookie)
                return cookie.split('=')[1];
        }
        return null;
    };
    // Populates the posts property by retrieving all posts of current user
    BlogService.prototype.fetchPosts = function () {
        var _this = this;
        // Get cookie and decode it
        // document.cookie shouldn't be null since user is required to login first
        var cookies = document.cookie.split(';');
        var jwtCookie = this.findCookie(cookies);
        var decoded = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(jwtCookie);
        // Get posts corresponding to username from decoded token through api
        this.user = decoded.usr;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* config */].apiUrl + this.user)
            .subscribe(function (posts) { return posts.forEach(function (post) { return _this.posts.push(post); }); });
    };
    // Return posts
    BlogService.prototype.getPosts = function () {
        return this.posts;
    };
    // Return a post given its id
    BlogService.prototype.getPost = function (pid) {
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.postid == pid)
                return post;
        }
        return null;
    };
    // Return a newly created post
    BlogService.prototype.newPost = function () {
        var _this = this;
        var postNum = this.posts.length;
        var nextPID = (postNum == 0) ? 1 : (this.posts[postNum - 1].postid + 1);
        var now = new Date();
        // Create new post
        var newPost = new Post(nextPID, now, now, "", "");
        // Add to posts
        this.posts.push(newPost);
        // Create new post at server through api
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* config */].apiUrl + this.user + '/' + nextPID, newPost, { responseType: 'text' })
            .subscribe(function (res) { }, function (err) {
            _this.posts.pop();
            window.alert("Error creating post at server");
            _this.router.navigate(['/']);
        });
        return newPost;
    };
    // Update the given post
    BlogService.prototype.updatePost = function (anotherPost) {
        var _this = this;
        var _loop_1 = function (post) {
            if (post.postid == anotherPost.postid) {
                // Update modified time, title and body
                var now = new Date();
                post.modified = now;
                post.title = anotherPost.title;
                post.body = anotherPost.body;
                // Update to server through api
                this_1.http.put(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* config */].apiUrl + this_1.user + '/' + post.postid, post, { responseType: 'text' })
                    .subscribe(function (res) { }, function (err) {
                    window.alert("Error updating post at server");
                    _this.router.navigate(['edit', post.postid]);
                });
                return { value: void 0 };
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var post = _a[_i];
            var state_1 = _loop_1(post);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    // Delete a post
    BlogService.prototype.deletePost = function (pid) {
        var _this = this;
        // Delete post with corresponding pid
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.postid == pid) {
                this.posts.splice(this.posts.indexOf(post), 1);
                // Delete post at server through api
                this.http.delete(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* config */].apiUrl + this.user + '/' + post.postid, { responseType: 'text' })
                    .subscribe(function (res) { }, function (err) {
                    window.alert("Error deleting post at server");
                    _this.router.navigate(['/']);
                });
            }
        }
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "../../../../../src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    apiUrl: "http://localhost:3000/api/",
    jwtCookie: "jwt",
    secret: "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"
};


/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit {\r\n    float: left;\r\n    margin-left: 25%;\r\n}\r\n\r\n.titleDiv {\r\n    font-weight: bold;\r\n    margin-left: 20px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#title {\r\n    color: rgb(0, 0, 0);\r\n    height: 25px;\r\n    width: 300px;\r\n    margin-left: 10px;\r\n    font-size: 15px;\r\n    font-family: Console, monospace;\r\n    font-weight: bold;\r\n    background-color: transparent;\r\n    border-top: transparent;\r\n    border-left: transparent;\r\n    border-right: transparent;\r\n    border-bottom: 3px solid rgb(0, 0, 0);\r\n}\r\n\r\n#body {\r\n    color: #fff; \r\n    background: #5F777E;\r\n    padding: 0 10px; \r\n    height: 20rem;\r\n    width: 150%; \r\n    line-height: 25px; \r\n    outline: none;\r\n    border: none; \r\n}\r\n\r\n.timestamp {\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n    font-style: italic;\r\n}\r\n\r\nbutton {\r\n    color: #fff;\r\n    font-size: 12px;\r\n    background: hsl(195, 26%, 82%); \r\n    border-radius: 4px;\r\n    padding: 6px 10px;\r\n    outline:none;\r\n    border:none;\r\n}\r\n\r\nbutton:disabled {\r\n    background: hsl(205, 13%, 64%);\r\n}\r\n\r\n.green {\r\n    border: none;\r\n    background: hsl(145, 60%, 49%);\r\n}\r\n\r\n.green:hover:enabled {\r\n    background: hsl(145, 64%, 42%);\r\n}\r\n\r\n.green:active:enabled {\r\n    background: hsl(145, 66%, 29%);\r\n}\r\n\r\n.red {\r\n    border: none;\r\n    background: hsl(6, 71%, 57%);\r\n}\r\n\r\n.red:hover {\r\n    background: hsl(6, 62%, 45%)\r\n}\r\n\r\n.red:active {\r\n    background: hsl(6, 62%, 35%)\r\n}\r\n\r\n.yellow {\r\n    border: none;\r\n    background: hsl(48, 87%, 47%);\r\n}\r\n\r\n.yellow:hover {\r\n    background: hsl(48, 85%, 45%);\r\n}\r\n\r\n.yellow:active {\r\n    background: hsl(48, 86%, 31%);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n  <form [formGroup]=\"form\" class=\"edit\">\n    <div class=\"titleDiv\">\n      Title: <input id=\"title\" type=\"text\" formControlName=\"title\" [(ngModel)]=\"post.title\">\n    </div>\n    <div>\n      <textarea id=\"body\" formControlName=\"body\" placeholder=\"Body\" [(ngModel)]=\"post.body\"></textarea>\n    </div>\n\n    <div class=\"timestamp\">\n      Last Modified: {{ post.modified | date:'short' }}\n    </div>\n\n    <div class=\"option\">\n      <button class=\"green\" (click)=\"save()\" [disabled]=\"form.pristine\">Save</button>\n      <button class=\"red\" (click)=\"delete()\">Delete</button>\n      <button class=\"yellow\" (click)=\"preview()\">Preview</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(blogService, formBuilder, route, router) {
        this.blogService = blogService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            title: '',
            body: '',
        });
    };
    // Get the corresponding post to edit based on given url
    EditComponent.prototype.getPost = function () {
        // Save the current first if it was modified
        if (this.post && this.form.dirty)
            this.save();
        // Getting new post based on the url
        var pid = +this.route.snapshot.paramMap.get('id');
        var wantedPost = this.blogService.getPost(pid);
        if (wantedPost == null)
            this.router.navigate(['/']);
        else
            this.post = wantedPost;
    };
    // Save the current post to localStorage then disable save button
    EditComponent.prototype.save = function () {
        this.blogService.updatePost(this.post);
        this.form.markAsPristine();
    };
    // Delete the current post and redirect to list view 
    EditComponent.prototype.delete = function () {
        this.blogService.deletePost(this.post.postid);
        this.router.navigate(['/']);
    };
    // Preview the current post
    EditComponent.prototype.preview = function () {
        this.router.navigate(['preview', this.post.postid]);
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function () { return _this.getPost(); });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        if (this.form.dirty)
            this.save();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:unload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "save", null);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list {\r\n    position: absolute;\r\n    width: 23%;\r\n}\r\n\r\nbutton {\r\n    color: #fff;\r\n    font-size: 12px;\r\n    background: hsl(195, 26%, 82%); \r\n    border-radius: 4px;\r\n    padding: 6px 10px;\r\n    outline:none;\r\n    border:none;\r\n}\r\n\r\n.green {\r\n    border: none;\r\n    background: hsl(145, 60%, 49%);\r\n}\r\n\r\n.green:hover {\r\n    background: hsl(145, 64%, 42%);\r\n}\r\n\r\n.green:active {\r\n    background: hsl(145, 66%, 29%);\r\n}\r\n\r\n.posts {\r\n    counter-reset: li;\r\n    overflow: hidden;\r\n}\r\n\r\n.post {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-decoration: none;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n            transform: perspective(1px) translateZ(0);\r\n    -webkit-box-shadow: 0 0 1px transparent;\r\n            box-shadow: 0 0 1px transparent;\r\n    -webkit-transition-duration: 0.2s;\r\n            transition-duration: 0.2s;\r\n    -webkit-transition-property: -webkit-transform;\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n}\r\n\r\n.post:hover, .post:focus, .post:active {\r\n    -webkit-transform: translateX(15px);\r\n            transform: translateX(15px);\r\n}\r\n\r\nli {\r\n    position: relative;\r\n    list-style: none;\r\n    display: block;\r\n    padding: 4px 8px;\r\n    background: hsl(97, 96%, 98%);\r\n}\r\n\r\nli:before {\r\n    position: absolute;\r\n    content: counter(li); \r\n    counter-increment: li;\r\n    top: 0;\r\n    left: -2em;\r\n    width: 2em;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-right: 20px;\r\n    padding: 14px;\r\n    color: white;\r\n    background: hsl(163, 96%, 24%);\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\nli:hover {\r\n    background: bisque;\r\n}\r\n\r\n.date {\r\n    color: hsl(24, 96%, 43%);\r\n    background: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n  <button class=\"green\" (click)=\"create()\">New Post</button>\n  <ul class=\"posts\">\n    <li *ngFor=\"let post of posts\">\n      <a class=\"post\" routerLink=\"edit/{{ post.postid }}\">\n        <span class=\"date\">{{ post.created | date:'short' }}</span>\n        <br>{{ post.title }}<br>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
    }
    ListComponent.prototype.create = function () {
        var newPost = this.blogService.newPost();
        this.router.navigate(['edit', newPost.postid]);
    };
    ListComponent.prototype.ngOnInit = function () {
        this.posts = this.blogService.getPosts();
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".postPreview {\r\n    float: left;\r\n    margin-left: 25%;\r\n}\r\n\r\n.preview {\r\n    background: #C6E0CF;\r\n    color: #6e402d;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    border: 8px double rgba(94, 146, 104, 0.6);\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    margin: 20px;\r\n}\r\n\r\nbutton {\r\n    color: #fff;\r\n    font-size: 12px;\r\n    background: hsl(195, 26%, 82%); \r\n    border-radius: 4px;\r\n    padding: 6px 10px;\r\n    outline:none;\r\n    border:none;\r\n}\r\n\r\n.yellow {\r\n    border: none;\r\n    background: hsl(48, 87%, 47%);\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.yellow:hover {\r\n    background: hsl(48, 85%, 45%);\r\n}\r\n\r\n.yellow:active {\r\n    background: hsl(48, 86%, 31%);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"postPreview\" *ngIf=\"post\">\n  <button class=\"yellow\" (click)=\"edit()\">Edit</button>\n  <div class=\"preview\">\n    <h2 [innerHTML]=\"render(post.title)\"></h2>\n    <div [innerHTML]=\"render(post.body)\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_commonmark__ = __webpack_require__("../../../../commonmark/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_commonmark___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_commonmark__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    // Get the corresponding post to preview based on given url
    PreviewComponent.prototype.getPost = function () {
        var pid = +this.route.snapshot.paramMap.get('id');
        var wantedPost = this.blogService.getPost(pid);
        if (wantedPost == null)
            this.router.navigate(['/']);
        else
            this.post = wantedPost;
    };
    // Render markdown into html
    PreviewComponent.prototype.render = function (content) {
        var reader = new __WEBPACK_IMPORTED_MODULE_2_commonmark__["Parser"]();
        var writer = new __WEBPACK_IMPORTED_MODULE_2_commonmark__["HtmlRenderer"]();
        var parsed = reader.parse(content);
        return writer.render(parsed);
    };
    // Edit the current post
    PreviewComponent.prototype.edit = function () {
        this.router.navigate(['edit', this.post.postid]);
    };
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function () { return _this.getPost(); });
    };
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map