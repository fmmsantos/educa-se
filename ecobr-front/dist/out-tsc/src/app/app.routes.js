"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sacado_1 = require("./formalizacao/sacado/sacado");
var router_1 = require("@angular/router");
/**BS-Business*/
var perfil_1 = require("./corporativo/perfil/perfil");
var usuario_1 = require("./corporativo/usuario/usuario");
var pagina_construcao_1 = require("./pagina-construcao");
var login_component_1 = require("./acesso/login.component");
var BSGuardRoute_service_1 = require("./base/services/BSGuardRoute.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var modulo_1 = require("./corporativo/modulo/modulo");
var funcionalidade_1 = require("./corporativo/funcionalidade/funcionalidade");
var permissao_1 = require("./corporativo/permissao/permissao");
exports.routes = [
    { path: '', component: login_component_1.LoginComponent, canActivate: [BSGuardRoute_service_1.BSGuardRoute] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dash', component: dashboard_component_1.DashboardComponent, canActivate: [BSGuardRoute_service_1.BSGuardRoute] },
    { path: 'modulo', component: modulo_1.Modulo, canActivate: [BSGuardRoute_service_1.BSGuardRoute] },
    { path: 'funcionalidade', component: funcionalidade_1.Funcionalidade, canActivate: [BSGuardRoute_service_1.BSGuardRoute] },
    { path: 'permissao', component: permissao_1.Permissao, canActivate: [BSGuardRoute_service_1.BSGuardRoute] },
    { path: 'perfil', component: perfil_1.Perfil, canActivate: [BSGuardRoute_service_1.BSGuardRoute] },
    { path: 'usuario', component: usuario_1.Usuario, canActivate: [BSGuardRoute_service_1.BSGuardRoute] },
    { path: 'sacado', component: sacado_1.Sacado, canActivate: [BSGuardRoute_service_1.BSGuardRoute] },
    { path: 'pagina-construcao', component: pagina_construcao_1.PaginaConstrucao, canActivate: [BSGuardRoute_service_1.BSGuardRoute] }
];
exports.AppRoutes = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map