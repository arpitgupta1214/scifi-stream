(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://localhost',
            routes: [{
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "api\/user",
                "name": null,
                "action": "Closure"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "\/",
                "name": null,
                "action": "Closure"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "home",
                "name": null,
                "action": "Closure"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "home\/en",
                "name": null,
                "action": "Closure"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin",
                "name": null,
                "action": "Closure"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "login",
                "name": "login",
                "action": "App\Http\Controllers\Auth\LoginController@showLoginForm"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "login",
                "name": null,
                "action": "App\Http\Controllers\Auth\LoginController@login"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "logout",
                "name": "logout",
                "action": "App\Http\Controllers\Auth\LoginController@logout"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "register",
                "name": "register",
                "action": "App\Http\Controllers\Auth\RegisterController@showRegistrationForm"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "register",
                "name": null,
                "action": "App\Http\Controllers\Auth\RegisterController@register"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "password\/reset",
                "name": "password.request",
                "action": "App\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "password\/email",
                "name": "password.email",
                "action": "App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "password\/reset\/{token}",
                "name": "password.reset",
                "action": "App\Http\Controllers\Auth\ResetPasswordController@showResetForm"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "password\/reset",
                "name": "password.update",
                "action": "App\Http\Controllers\Auth\ResetPasswordController@reset"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "password\/confirm",
                "name": "password.confirm",
                "action": "App\Http\Controllers\Auth\ConfirmPasswordController@showConfirmForm"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "password\/confirm",
                "name": null,
                "action": "App\Http\Controllers\Auth\ConfirmPasswordController@confirm"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "home\/{locale}\/{forID}",
                "name": "home",
                "action": "App\Http\Controllers\HomeController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "portfolio\/{locale}",
                "name": "portfolio",
                "action": "App\Http\Controllers\HomeController@portfolio"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "about\/{locale}",
                "name": "about",
                "action": "App\Http\Controllers\HomeController@about"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "contact\/{locale}",
                "name": "contact",
                "action": "App\Http\Controllers\HomeController@contact"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "createTranslate",
                "name": "createTranslate",
                "action": "App\Http\Controllers\HomeController@createTranslate"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "destroyAll",
                "name": "destroyAll",
                "action": "App\Http\Controllers\adminControllers\ContactController@destroyAll"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}",
                "name": "dashboard",
                "action": "App\Http\Controllers\adminControllers\AdminController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/category",
                "name": "category.index",
                "action": "App\Http\Controllers\adminControllers\CategoryController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/category\/create",
                "name": "category.create",
                "action": "App\Http\Controllers\adminControllers\CategoryController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/category",
                "name": "category.store",
                "action": "App\Http\Controllers\adminControllers\CategoryController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/category\/{category}",
                "name": "category.show",
                "action": "App\Http\Controllers\adminControllers\CategoryController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/category\/{category}\/edit",
                "name": "category.edit",
                "action": "App\Http\Controllers\adminControllers\CategoryController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/category\/{category}",
                "name": "category.update",
                "action": "App\Http\Controllers\adminControllers\CategoryController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/category\/{category}",
                "name": "category.destroy",
                "action": "App\Http\Controllers\adminControllers\CategoryController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/sub-category",
                "name": "sub-category.index",
                "action": "App\Http\Controllers\adminControllers\SubCategoryController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/sub-category\/create",
                "name": "sub-category.create",
                "action": "App\Http\Controllers\adminControllers\SubCategoryController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/sub-category",
                "name": "sub-category.store",
                "action": "App\Http\Controllers\adminControllers\SubCategoryController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/sub-category\/{sub_category}",
                "name": "sub-category.show",
                "action": "App\Http\Controllers\adminControllers\SubCategoryController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/sub-category\/{sub_category}\/edit",
                "name": "sub-category.edit",
                "action": "App\Http\Controllers\adminControllers\SubCategoryController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/sub-category\/{sub_category}",
                "name": "sub-category.update",
                "action": "App\Http\Controllers\adminControllers\SubCategoryController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/sub-category\/{sub_category}",
                "name": "sub-category.destroy",
                "action": "App\Http\Controllers\adminControllers\SubCategoryController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/product",
                "name": "product.index",
                "action": "App\Http\Controllers\adminControllers\ProductController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/product\/create",
                "name": "product.create",
                "action": "App\Http\Controllers\adminControllers\ProductController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/product",
                "name": "product.store",
                "action": "App\Http\Controllers\adminControllers\ProductController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/product\/{product}",
                "name": "product.show",
                "action": "App\Http\Controllers\adminControllers\ProductController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/product\/{product}\/edit",
                "name": "product.edit",
                "action": "App\Http\Controllers\adminControllers\ProductController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/product\/{product}",
                "name": "product.update",
                "action": "App\Http\Controllers\adminControllers\ProductController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/product\/{product}",
                "name": "product.destroy",
                "action": "App\Http\Controllers\adminControllers\ProductController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/attribute",
                "name": "attribute.index",
                "action": "App\Http\Controllers\adminControllers\AttributeController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/attribute\/create",
                "name": "attribute.create",
                "action": "App\Http\Controllers\adminControllers\AttributeController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/attribute",
                "name": "attribute.store",
                "action": "App\Http\Controllers\adminControllers\AttributeController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/attribute\/{attribute}",
                "name": "attribute.show",
                "action": "App\Http\Controllers\adminControllers\AttributeController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/attribute\/{attribute}\/edit",
                "name": "attribute.edit",
                "action": "App\Http\Controllers\adminControllers\AttributeController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/attribute\/{attribute}",
                "name": "attribute.update",
                "action": "App\Http\Controllers\adminControllers\AttributeController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/attribute\/{attribute}",
                "name": "attribute.destroy",
                "action": "App\Http\Controllers\adminControllers\AttributeController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/contact",
                "name": "contact.index",
                "action": "App\Http\Controllers\adminControllers\ContactController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/contact\/create",
                "name": "contact.create",
                "action": "App\Http\Controllers\adminControllers\ContactController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/contact",
                "name": "contact.store",
                "action": "App\Http\Controllers\adminControllers\ContactController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/contact\/{contact}",
                "name": "contact.show",
                "action": "App\Http\Controllers\adminControllers\ContactController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/contact\/{contact}\/edit",
                "name": "contact.edit",
                "action": "App\Http\Controllers\adminControllers\ContactController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/contact\/{contact}",
                "name": "contact.update",
                "action": "App\Http\Controllers\adminControllers\ContactController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/contact\/{contact}",
                "name": "contact.destroy",
                "action": "App\Http\Controllers\adminControllers\ContactController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/image",
                "name": "image.index",
                "action": "App\Http\Controllers\adminControllers\ImageController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/image\/create",
                "name": "image.create",
                "action": "App\Http\Controllers\adminControllers\ImageController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/image",
                "name": "image.store",
                "action": "App\Http\Controllers\adminControllers\ImageController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/image\/{image}",
                "name": "image.show",
                "action": "App\Http\Controllers\adminControllers\ImageController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/image\/{image}\/edit",
                "name": "image.edit",
                "action": "App\Http\Controllers\adminControllers\ImageController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/image\/{image}",
                "name": "image.update",
                "action": "App\Http\Controllers\adminControllers\ImageController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/image\/{image}",
                "name": "image.destroy",
                "action": "App\Http\Controllers\adminControllers\ImageController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/about",
                "name": "about.index",
                "action": "App\Http\Controllers\adminControllers\AboutController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/about\/create",
                "name": "about.create",
                "action": "App\Http\Controllers\adminControllers\AboutController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/about",
                "name": "about.store",
                "action": "App\Http\Controllers\adminControllers\AboutController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/about\/{about}",
                "name": "about.show",
                "action": "App\Http\Controllers\adminControllers\AboutController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/about\/{about}\/edit",
                "name": "about.edit",
                "action": "App\Http\Controllers\adminControllers\AboutController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/about\/{about}",
                "name": "about.update",
                "action": "App\Http\Controllers\adminControllers\AboutController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/about\/{about}",
                "name": "about.destroy",
                "action": "App\Http\Controllers\adminControllers\AboutController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/info",
                "name": "info.index",
                "action": "App\Http\Controllers\adminControllers\InfoController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/info\/create",
                "name": "info.create",
                "action": "App\Http\Controllers\adminControllers\InfoController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/info",
                "name": "info.store",
                "action": "App\Http\Controllers\adminControllers\InfoController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/info\/{info}",
                "name": "info.show",
                "action": "App\Http\Controllers\adminControllers\InfoController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/info\/{info}\/edit",
                "name": "info.edit",
                "action": "App\Http\Controllers\adminControllers\InfoController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/info\/{info}",
                "name": "info.update",
                "action": "App\Http\Controllers\adminControllers\InfoController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/info\/{info}",
                "name": "info.destroy",
                "action": "App\Http\Controllers\adminControllers\InfoController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/slide",
                "name": "slide.index",
                "action": "App\Http\Controllers\adminControllers\SlideController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/slide\/create",
                "name": "slide.create",
                "action": "App\Http\Controllers\adminControllers\SlideController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/slide",
                "name": "slide.store",
                "action": "App\Http\Controllers\adminControllers\SlideController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/slide\/{slide}",
                "name": "slide.show",
                "action": "App\Http\Controllers\adminControllers\SlideController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/slide\/{slide}\/edit",
                "name": "slide.edit",
                "action": "App\Http\Controllers\adminControllers\SlideController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/slide\/{slide}",
                "name": "slide.update",
                "action": "App\Http\Controllers\adminControllers\SlideController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/slide\/{slide}",
                "name": "slide.destroy",
                "action": "App\Http\Controllers\adminControllers\SlideController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/partner",
                "name": "partner.index",
                "action": "App\Http\Controllers\adminControllers\PartnerController@index"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/partner\/create",
                "name": "partner.create",
                "action": "App\Http\Controllers\adminControllers\PartnerController@create"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "admin\/{locale}\/partner",
                "name": "partner.store",
                "action": "App\Http\Controllers\adminControllers\PartnerController@store"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/partner\/{partner}",
                "name": "partner.show",
                "action": "App\Http\Controllers\adminControllers\PartnerController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "admin\/{locale}\/partner\/{partner}\/edit",
                "name": "partner.edit",
                "action": "App\Http\Controllers\adminControllers\PartnerController@edit"
            }, {
                "host": null,
                "methods": ["PUT", "PATCH"],
                "uri": "admin\/{locale}\/partner\/{partner}",
                "name": "partner.update",
                "action": "App\Http\Controllers\adminControllers\PartnerController@update"
            }, {
                "host": null,
                "methods": ["DELETE"],
                "uri": "admin\/{locale}\/partner\/{partner}",
                "name": "partner.destroy",
                "action": "App\Http\Controllers\adminControllers\PartnerController@destroy"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "content\/{locale}",
                "name": "content",
                "action": "App\Http\Controllers\HomeController@content"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "search\/{locale}",
                "name": "search",
                "action": "App\Http\Controllers\HomeController@search"
            }, {
                "host": null,
                "methods": ["POST"],
                "uri": "stream\/{locale}",
                "name": "stream",
                "action": "App\Http\Controllers\HomeController@stream"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "show\/{locale}\/{id}",
                "name": "show",
                "action": "App\Http\Controllers\HomeController@show"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "streaming\/{locale}\/{id}",
                "name": "streaming",
                "action": "App\Http\Controllers\HomeController@streaming"
            }, {
                "host": null,
                "methods": ["GET", "HEAD"],
                "uri": "policy",
                "name": "policy",
                "action": "App\Http\Controllers\HomeController@policy"
            }],
            prefix: '',

            route: function (name, parameters, route) {
                route = route || this.getByName(name);

                if (!route) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute: function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)) {
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route) {
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters: function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function (match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString: function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName: function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction: function (action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if (!this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function (attributes) {
            if (!attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action: function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route: function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url: function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to: function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route: function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action: function (action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = laroute;
    } else {
        window.laroute = laroute;
    }

}).call(this);

