webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n  <title>GOG-App</title>\n\n  <base href=\"/\">\n</head>\n\n<body>\n\n  <app-main-nav></app-main-nav>\n  <app-offer-grid></app-offer-grid>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GOG.com';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_nav_main_nav_component__ = __webpack_require__("./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offer_grid_offer_grid_component__ = __webpack_require__("./src/app/offer-grid/offer-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offer_grid_cart_cart_component__ = __webpack_require__("./src/app/offer-grid/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offer_grid_game_game_component__ = __webpack_require__("./src/app/offer-grid/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__games_service__ = __webpack_require__("./src/app/games.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__main_nav_main_nav_component__["a" /* MainNavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__offer_grid_offer_grid_component__["a" /* OfferGridComponent */],
                __WEBPACK_IMPORTED_MODULE_5__offer_grid_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_6__offer_grid_game_game_component__["a" /* GameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__games_service__["a" /* GamesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/games.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");

var GamesService = /** @class */ (function () {
    function GamesService() {
        this.removedFromCart$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.addedToCart$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    return GamesService;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"offer-header\" class=\"offer-header\">\n  <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n    <div class=\"container navbar-container\">\n\n      <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/img/gog_logo.png\" alt=\"GOG.com\">\n      </a>\n\n      <!-- <button class=\"navbar-toggler\"\n              type=\"button\"\n              data-toggle=\"collapse\"\n              data-target=\"#navbarSupportedContent\"\n              aria-controls=\"navbarSupportedContent\"\n              aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button> -->\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <div class=\"navbar-nav ml-auto\">\n\n          <app-cart></app-cart>\n\n        </div>\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavComponent = /** @class */ (function () {
    function MainNavComponent() {
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    MainNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-main-nav',
            template: __webpack_require__("./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__("./src/app/main-nav/main-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/models/cart-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartData; });
var CartData = [];


/***/ }),

/***/ "./src/app/models/game-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameData; });
var GameData = [
    {
        id: 1,
        price: 0,
        discount: 0,
        title: 'The Witcher: Adventure Game',
        imgPath: '../assets/img/the_witcher.png',
        status: 'featured_game'
    },
    {
        id: 2,
        price: 9.98,
        discount: 0.5,
        title: 'Oddworld: Stranger\'s Wrath',
        imgPath: 'assets/img/oddworld_strangers_wrath.png',
        status: 'available'
    },
    {
        id: 3,
        price: 9.98,
        discount: 0.5,
        title: 'Chaos On Deponia',
        imgPath: 'assets/img/chaos_on_deponia.png',
        status: 'owned'
    },
    {
        id: 4,
        price: 11.98,
        discount: 0.5,
        title: 'The Settlers 2: Gold Edition',
        imgPath: 'assets/img/settlers_2.png',
        status: 'available'
    },
    {
        id: 5,
        price: 9.98,
        discount: 0.5,
        title: 'Neverwinter Nights',
        imgPath: 'assets/img/neverwinter_nights.png',
        status: 'available'
    },
    {
        id: 6,
        price: 6.98,
        discount: 0,
        title: 'Assassin\'s Creed: Director\'s Cut',
        imgPath: 'assets/img/assassins_creed.png',
        status: 'available'
    }
];


/***/ }),

/***/ "./src/app/offer-grid/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"products-cart\">\n  <a class=\"cart-toggle\"\n     [class.active]=\"cartActive\"\n     (click)=\"cartToggle()\"\n     href=\"#\"\n     id=\"navbarDropdown\"\n     role=\"button\">\n    <span class=\"cart--items-ammount\">{{ cartArray.length }}</span>\n    <span class=\"sr-only\">Toggle cart contents</span>\n  </a>\n\n  <ul class=\"cart-contents\" aria-labelledby=\"navbarDropdown\">\n    <!-- cart header here -->\n    <li class=\"cart-header\">\n      <span class=\"cart--items-ammount\">{{ cartArray.length }} items in cart</span>\n\n      <div class=\"cart-header-wrap\">\n        <span class=\"cart--price-total\">$ {{ totalPrice }}</span>\n        <a class=\"button cart--clear\" (click)=\"clearCart()\">Clear cart</a>\n      </div>\n    </li>\n\n    <!-- list of games here -->\n    <li *ngFor=\"let elem of cartArray\" class=\"cart--game\" href=\"\">\n      <img class=\"game--img\" src=\"{{ elem.imgPath }}\" alt=\"{{ elem.title }}\">\n      <div class=\"game-item-wrap\">\n        <span class=\"game--title\">{{ elem.title }}</span>\n        <a class=\"game--remove\" (click)=\"removeFromCart(elem)\">Remove</a>\n      </div>\n      <span class=\"game--price\">{{ countPrice(elem.price, elem.discount) }}</span>\n    </li>\n\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/offer-grid/cart/cart.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offer-grid/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__games_service__ = __webpack_require__("./src/app/games.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cart_data__ = __webpack_require__("./src/app/models/cart-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(gamesService) {
        this.gamesService = gamesService;
        this.cartArray = __WEBPACK_IMPORTED_MODULE_2__models_cart_data__["a" /* CartData */];
        this.cartActive = false;
        this.totalPrice = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gamesService.addedToCart$.subscribe(function (data) {
            _this.cartArray.push(data);
            _this.updateTotalPrice();
        });
    };
    CartComponent.prototype.cartToggle = function () {
        this.cartActive = !this.cartActive;
    };
    CartComponent.prototype.countPrice = function (price, discount) {
        if (discount !== 0) {
            return (price * discount).toFixed(2);
        }
        return price;
    };
    CartComponent.prototype.updateTotalPrice = function () {
        var _this = this;
        this.totalPrice = 0;
        this.cartArray.forEach(function (cartItem) {
            if (cartItem.discount > 0) {
                _this.totalPrice += cartItem.price * cartItem.discount;
            }
            else {
                _this.totalPrice += cartItem.price;
            }
        });
        return this.totalPrice.toFixed(2);
    };
    CartComponent.prototype.removeFromCart = function (element) {
        this.cartArray = this.cartArray.filter(function (cartItem) {
            return cartItem.id !== element.id;
        });
        this.updateTotalPrice();
        this.gamesService.removedFromCart$.next(element.id);
    };
    CartComponent.prototype.clearCart = function () {
        this.cartArray.length = 0;
        this.gamesService.removedFromCart$.next('clear');
        this.updateTotalPrice();
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/offer-grid/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/offer-grid/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__games_service__["a" /* GamesService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/offer-grid/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product {{game.status}}\" >\n  <img src=\"{{game.imgPath}}\" alt=\"{{game.title}}\" />\n\n  <div class=\"game-info-wrapper\">\n\n    <h2 class=\"game-title\">{{game.title}}</h2>\n    <button (click)=\"addCart(game)\"\n              class=\"button product--add-cart\">\n              {{'&#36; ' + countPrice(game.price, game.discount) }}</button>\n    <span class=\"label owned-label\">Owned</span>\n    <span class=\"label in-cart-label\">In cart</span>\n    <span [class.hide]=\"checkDiscount(game.discount)\" class=\"label discount-label\">{{'-' + game.discount * 100 + '&#37;'}}</span>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/offer-grid/game/game.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offer-grid/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cart_data__ = __webpack_require__("./src/app/models/cart-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games_service__ = __webpack_require__("./src/app/games.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = /** @class */ (function () {
    function GameComponent(gamesService) {
        this.gamesService = gamesService;
        this.cartArray = __WEBPACK_IMPORTED_MODULE_1__models_cart_data__["a" /* CartData */];
    }
    GameComponent.prototype.ngOnInit = function () { };
    GameComponent.prototype.countPrice = function (price, discount) {
        if (discount !== 0) {
            return (price * discount).toFixed(2);
        }
        return price;
    };
    GameComponent.prototype.checkDiscount = function (discount) {
        if (discount === 0) {
            return true;
        }
        return false;
    };
    GameComponent.prototype.addCart = function (element) {
        if (element.status === 'available') {
            element.status = 'in_cart';
            this.gamesService.addedToCart$.next(element);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], GameComponent.prototype, "game", void 0);
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("./src/app/offer-grid/game/game.component.html"),
            styles: [__webpack_require__("./src/app/offer-grid/game/game.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__games_service__["a" /* GamesService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/offer-grid/offer-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"offer-grid\" class=\"offer-grid\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h1>Game of the week</h1>\n    </div>\n\n    <!-- game of the week -->\n    <div class=\"row\">\n      <div class=\"featured-game\">\n        <a class=\"button secret-button\" (click)=\"secretFeature()\">TRIGGER SECRET FEATURE!</a>\n        <img src=\"{{featuredGame['imgPath']}}\" alt=\"{{featuredGame['title']}}\">\n      </div>\n    </div>\n\n    <!-- games grid -->\n    <div class=\"row\">\n      <div class=\"game-shelf\">\n\n        <ng-container *ngFor=\"let item of gameArray\">\n\n          <app-game [game]=\"item\" *ngIf=\"item.status !== 'featured_game'\"></app-game>\n\n        </ng-container>\n\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/offer-grid/offer-grid.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offer-grid/offer-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_game_data__ = __webpack_require__("./src/app/models/game-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cart_data__ = __webpack_require__("./src/app/models/cart-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__games_service__ = __webpack_require__("./src/app/games.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfferGridComponent = /** @class */ (function () {
    function OfferGridComponent(gamesService) {
        this.gamesService = gamesService;
        this.gameArray = __WEBPACK_IMPORTED_MODULE_1__models_game_data__["a" /* GameData */];
    }
    OfferGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFeaturedGame();
        this.gamesService.removedFromCart$.subscribe(function (dataID) {
            if (dataID === 'clear') {
                _this.gameArray.forEach(function (element) {
                    if (element.status === 'in_cart') {
                        element.status = 'available';
                    }
                });
            }
            else {
                for (var index in _this.gameArray) {
                    if (_this.gameArray[index].id === dataID) {
                        _this.gameArray[index].status = 'available';
                    }
                }
            }
        });
        this.gamesService.addedToCart$.subscribe(function (dataID) {
            for (var index in _this.gameArray) {
                if (_this.gameArray[index].id === dataID) {
                    _this.gameArray[index].status = 'in_cart';
                    __WEBPACK_IMPORTED_MODULE_2__models_cart_data__["a" /* CartData */].push(_this.gameArray[index]);
                }
            }
        });
    };
    OfferGridComponent.prototype.getFeaturedGame = function () {
        for (var index in this.gameArray) {
            if (this.gameArray[index].status === 'featured_game') {
                this.featuredGame = this.gameArray[index];
            }
        }
    };
    ////////////////////////////
    OfferGridComponent.prototype.secretFeature = function () {
        var secretGame = {
            id: 7,
            price: 0,
            discount: 1,
            title: 'vestelth.github.io',
            imgPath: '../assets/img/secret_game.png',
            status: ''
        };
        __WEBPACK_IMPORTED_MODULE_2__models_cart_data__["a" /* CartData */].push(secretGame);
    };
    OfferGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-offer-grid',
            template: __webpack_require__("./src/app/offer-grid/offer-grid.component.html"),
            styles: [__webpack_require__("./src/app/offer-grid/offer-grid.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__games_service__["a" /* GamesService */]])
    ], OfferGridComponent);
    return OfferGridComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map