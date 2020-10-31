var Ziggy = {
    namedRoutes: {
        "login": {"uri": "login", "methods": ["GET", "HEAD"], "domain": null},
        "logout": {"uri": "logout", "methods": ["POST"], "domain": null},
        "register": {"uri": "register", "methods": ["GET", "HEAD"], "domain": null},
        "password.request": {"uri": "password\/reset", "methods": ["GET", "HEAD"], "domain": null},
        "password.email": {"uri": "password\/email", "methods": ["POST"], "domain": null},
        "password.reset": {"uri": "password\/reset\/{token}", "methods": ["GET", "HEAD"], "domain": null},
        "password.update": {"uri": "password\/reset", "methods": ["POST"], "domain": null},
        "password.confirm": {"uri": "password\/confirm", "methods": ["GET", "HEAD"], "domain": null},
        "home": {"uri": "home\/{locale}\/{forID}", "methods": ["GET", "HEAD"], "domain": null},
        "portfolio": {"uri": "portfolio\/{locale}", "methods": ["GET", "HEAD"], "domain": null},
        "about": {"uri": "about\/{locale}", "methods": ["GET", "HEAD"], "domain": null},
        "contact": {"uri": "contact\/{locale}", "methods": ["GET", "HEAD"], "domain": null},
        "createTranslate": {"uri": "createTranslate", "methods": ["GET", "HEAD"], "domain": null},
        "destroyAll": {"uri": "destroyAll", "methods": ["POST"], "domain": null},
        "dashboard": {"uri": "admin\/{locale}", "methods": ["GET", "HEAD"], "domain": null},
        "category.index": {"uri": "admin\/{locale}\/category", "methods": ["GET", "HEAD"], "domain": null},
        "category.create": {"uri": "admin\/{locale}\/category\/create", "methods": ["GET", "HEAD"], "domain": null},
        "category.store": {"uri": "admin\/{locale}\/category", "methods": ["POST"], "domain": null},
        "category.show": {"uri": "admin\/{locale}\/category\/{category}", "methods": ["GET", "HEAD"], "domain": null},
        "category.edit": {
            "uri": "admin\/{locale}\/category\/{category}\/edit",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "category.update": {
            "uri": "admin\/{locale}\/category\/{category}",
            "methods": ["PUT", "PATCH"],
            "domain": null
        },
        "category.destroy": {"uri": "admin\/{locale}\/category\/{category}", "methods": ["DELETE"], "domain": null},
        "sub-category.index": {"uri": "admin\/{locale}\/sub-category", "methods": ["GET", "HEAD"], "domain": null},
        "sub-category.create": {
            "uri": "admin\/{locale}\/sub-category\/create",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "sub-category.store": {"uri": "admin\/{locale}\/sub-category", "methods": ["POST"], "domain": null},
        "sub-category.show": {
            "uri": "admin\/{locale}\/sub-category\/{sub_category}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "sub-category.edit": {
            "uri": "admin\/{locale}\/sub-category\/{sub_category}\/edit",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "sub-category.update": {
            "uri": "admin\/{locale}\/sub-category\/{sub_category}",
            "methods": ["PUT", "PATCH"],
            "domain": null
        },
        "sub-category.destroy": {
            "uri": "admin\/{locale}\/sub-category\/{sub_category}",
            "methods": ["DELETE"],
            "domain": null
        },
        "product.index": {"uri": "admin\/{locale}\/product", "methods": ["GET", "HEAD"], "domain": null},
        "product.create": {"uri": "admin\/{locale}\/product\/create", "methods": ["GET", "HEAD"], "domain": null},
        "product.store": {"uri": "admin\/{locale}\/product", "methods": ["POST"], "domain": null},
        "product.show": {"uri": "admin\/{locale}\/product\/{product}", "methods": ["GET", "HEAD"], "domain": null},
        "product.edit": {
            "uri": "admin\/{locale}\/product\/{product}\/edit",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "product.update": {"uri": "admin\/{locale}\/product\/{product}", "methods": ["PUT", "PATCH"], "domain": null},
        "product.destroy": {"uri": "admin\/{locale}\/product\/{product}", "methods": ["DELETE"], "domain": null},
        "attribute.index": {"uri": "admin\/{locale}\/attribute", "methods": ["GET", "HEAD"], "domain": null},
        "attribute.create": {"uri": "admin\/{locale}\/attribute\/create", "methods": ["GET", "HEAD"], "domain": null},
        "attribute.store": {"uri": "admin\/{locale}\/attribute", "methods": ["POST"], "domain": null},
        "attribute.show": {
            "uri": "admin\/{locale}\/attribute\/{attribute}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "attribute.edit": {
            "uri": "admin\/{locale}\/attribute\/{attribute}\/edit",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "attribute.update": {
            "uri": "admin\/{locale}\/attribute\/{attribute}",
            "methods": ["PUT", "PATCH"],
            "domain": null
        },
        "attribute.destroy": {"uri": "admin\/{locale}\/attribute\/{attribute}", "methods": ["DELETE"], "domain": null},
        "contact.index": {"uri": "admin\/{locale}\/contact", "methods": ["GET", "HEAD"], "domain": null},
        "contact.create": {"uri": "admin\/{locale}\/contact\/create", "methods": ["GET", "HEAD"], "domain": null},
        "contact.store": {"uri": "admin\/{locale}\/contact", "methods": ["POST"], "domain": null},
        "contact.show": {"uri": "admin\/{locale}\/contact\/{contact}", "methods": ["GET", "HEAD"], "domain": null},
        "contact.edit": {
            "uri": "admin\/{locale}\/contact\/{contact}\/edit",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "contact.update": {"uri": "admin\/{locale}\/contact\/{contact}", "methods": ["PUT", "PATCH"], "domain": null},
        "contact.destroy": {"uri": "admin\/{locale}\/contact\/{contact}", "methods": ["DELETE"], "domain": null},
        "image.index": {"uri": "admin\/{locale}\/image", "methods": ["GET", "HEAD"], "domain": null},
        "image.create": {"uri": "admin\/{locale}\/image\/create", "methods": ["GET", "HEAD"], "domain": null},
        "image.store": {"uri": "admin\/{locale}\/image", "methods": ["POST"], "domain": null},
        "image.show": {"uri": "admin\/{locale}\/image\/{image}", "methods": ["GET", "HEAD"], "domain": null},
        "image.edit": {"uri": "admin\/{locale}\/image\/{image}\/edit", "methods": ["GET", "HEAD"], "domain": null},
        "image.update": {"uri": "admin\/{locale}\/image\/{image}", "methods": ["PUT", "PATCH"], "domain": null},
        "image.destroy": {"uri": "admin\/{locale}\/image\/{image}", "methods": ["DELETE"], "domain": null},
        "about.index": {"uri": "admin\/{locale}\/about", "methods": ["GET", "HEAD"], "domain": null},
        "about.create": {"uri": "admin\/{locale}\/about\/create", "methods": ["GET", "HEAD"], "domain": null},
        "about.store": {"uri": "admin\/{locale}\/about", "methods": ["POST"], "domain": null},
        "about.show": {"uri": "admin\/{locale}\/about\/{about}", "methods": ["GET", "HEAD"], "domain": null},
        "about.edit": {"uri": "admin\/{locale}\/about\/{about}\/edit", "methods": ["GET", "HEAD"], "domain": null},
        "about.update": {"uri": "admin\/{locale}\/about\/{about}", "methods": ["PUT", "PATCH"], "domain": null},
        "about.destroy": {"uri": "admin\/{locale}\/about\/{about}", "methods": ["DELETE"], "domain": null},
        "info.index": {"uri": "admin\/{locale}\/info", "methods": ["GET", "HEAD"], "domain": null},
        "info.create": {"uri": "admin\/{locale}\/info\/create", "methods": ["GET", "HEAD"], "domain": null},
        "info.store": {"uri": "admin\/{locale}\/info", "methods": ["POST"], "domain": null},
        "info.show": {"uri": "admin\/{locale}\/info\/{info}", "methods": ["GET", "HEAD"], "domain": null},
        "info.edit": {"uri": "admin\/{locale}\/info\/{info}\/edit", "methods": ["GET", "HEAD"], "domain": null},
        "info.update": {"uri": "admin\/{locale}\/info\/{info}", "methods": ["PUT", "PATCH"], "domain": null},
        "info.destroy": {"uri": "admin\/{locale}\/info\/{info}", "methods": ["DELETE"], "domain": null},
        "slide.index": {"uri": "admin\/{locale}\/slide", "methods": ["GET", "HEAD"], "domain": null},
        "slide.create": {"uri": "admin\/{locale}\/slide\/create", "methods": ["GET", "HEAD"], "domain": null},
        "slide.store": {"uri": "admin\/{locale}\/slide", "methods": ["POST"], "domain": null},
        "slide.show": {"uri": "admin\/{locale}\/slide\/{slide}", "methods": ["GET", "HEAD"], "domain": null},
        "slide.edit": {"uri": "admin\/{locale}\/slide\/{slide}\/edit", "methods": ["GET", "HEAD"], "domain": null},
        "slide.update": {"uri": "admin\/{locale}\/slide\/{slide}", "methods": ["PUT", "PATCH"], "domain": null},
        "slide.destroy": {"uri": "admin\/{locale}\/slide\/{slide}", "methods": ["DELETE"], "domain": null},
        "partner.index": {"uri": "admin\/{locale}\/partner", "methods": ["GET", "HEAD"], "domain": null},
        "partner.create": {"uri": "admin\/{locale}\/partner\/create", "methods": ["GET", "HEAD"], "domain": null},
        "partner.store": {"uri": "admin\/{locale}\/partner", "methods": ["POST"], "domain": null},
        "partner.show": {"uri": "admin\/{locale}\/partner\/{partner}", "methods": ["GET", "HEAD"], "domain": null},
        "partner.edit": {
            "uri": "admin\/{locale}\/partner\/{partner}\/edit",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "partner.update": {"uri": "admin\/{locale}\/partner\/{partner}", "methods": ["PUT", "PATCH"], "domain": null},
        "partner.destroy": {"uri": "admin\/{locale}\/partner\/{partner}", "methods": ["DELETE"], "domain": null},
        "content": {"uri": "content\/{locale}", "methods": ["GET", "HEAD"], "domain": null},
        "search": {"uri": "search\/{locale}", "methods": ["POST"], "domain": null},
        "stream": {"uri": "stream\/{locale}", "methods": ["POST"], "domain": null},
        "show": {"uri": "show\/{locale}\/{id}", "methods": ["GET", "HEAD"], "domain": null},
        "streaming": {"uri": "streaming\/{locale}\/{id}", "methods": ["GET", "HEAD"], "domain": null},
        "policy": {"uri": "policy", "methods": ["GET", "HEAD"], "domain": null}
    },
    baseUrl: 'http://localhost/',
    baseProtocol: 'http',
    baseDomain: 'localhost',
    basePort: false,
    defaultParameters: []
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    for (var name in window.Ziggy.namedRoutes) {
        Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
    }
}

export {
    Ziggy
}
