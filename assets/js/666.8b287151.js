(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{1099:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"swaggersettingsbase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swaggersettingsbase"}},[t._v("#")]),t._v(" SwaggerSettingsBase "),e("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { SwaggerSettingsBase } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/swagger"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.0.0-rc.5/packages/swagger/src/interfaces/SwaggerSettings.ts#L0-L0"}},[t._v("/packages/swagger/src/interfaces/SwaggerSettings.ts")])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("div",{staticClass:"language-typescript"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" SwaggerSettingsBase "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * The url subpath to access to the documentation.\n     */\n    path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Specify the spec version you want to generate.\n     */\n    specVersion?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecVersions.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecVersions")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Swagger file name. By default swagger.json\n     */\n    fileName?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),e("a",{pre:!0,attrs:{href:"/api/swagger/decorators/Hidden.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Hidden")])]),t._v(" documentation. "),e("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/method/Use.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Use")])]),t._v(" this to hide documentation link in the dropdown.\n     */\n    hidden?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The documentation key used by `@"),e("a",{pre:!0,attrs:{href:"/api/swagger/decorators/Docs.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Docs")])]),t._v("` decorator to create several swagger documentations.\n     */\n    doc?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The path to the CSS file.\n     */\n    cssPath?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The path to the JS file.\n     */\n    jsPath?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The path to the ejs file to create html page.\n     */\n    viewPath?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" | false"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * SwaggerUI options. See "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/configuration.md"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     */\n    options?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/swagger/interfaces/SwaggerUIOptions.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("SwaggerUIOptions")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Display the search field in the navbar.\n     */\n    showExplorer?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Load the base spec documentation "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" the specified path.\n     */\n    specPath?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Write the `swagger.json` spec documentation on the specified path.\n     */\n    outFile?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),e("h2",{attrs:{id:"members"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("The url subpath to access to the documentation.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("specVersion?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecVersions.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecVersions")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Specify the spec version you want to generate.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("fileName?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Swagger file name. By default swagger.json")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("hidden?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Hidden documentation. Use this to hide documentation link in the dropdown.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("doc?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("The documentation key used by "),e("code",[t._v("@Docs")]),t._v(" decorator to create several swagger documentations.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("cssPath?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("The path to the CSS file.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("jsPath?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("The path to the JS file.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("viewPath?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" | false"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("The path to the ejs file to create html page.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("options?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/swagger/interfaces/SwaggerUIOptions.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("SwaggerUIOptions")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("SwaggerUI options. See (https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/configuration.md)")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("showExplorer?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Display the search field in the navbar.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("specPath?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Load the base spec documentation from the specified path.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("outFile?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Write the "),e("code",[t._v("swagger.json")]),t._v(" spec documentation on the specified path.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);