"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var app_routes_1 = require("./app.routes");
/**PrimeNG Dependecy for BSServices  */
var captcha_1 = require("primeng/captcha");
var api_1 = require("primeng/api");
var accordion_1 = require("primeng/accordion");
var autocomplete_1 = require("primeng/autocomplete");
var breadcrumb_1 = require("primeng/breadcrumb");
var button_1 = require("primeng/button");
var calendar_1 = require("primeng/calendar");
var card_1 = require("primeng/card");
var carousel_1 = require("primeng/carousel");
var chart_1 = require("primeng/chart");
var checkbox_1 = require("primeng/checkbox");
var chips_1 = require("primeng/chips");
var codehighlighter_1 = require("primeng/codehighlighter");
var confirmdialog_1 = require("primeng/confirmdialog");
var colorpicker_1 = require("primeng/colorpicker");
var contextmenu_1 = require("primeng/contextmenu");
var dataview_1 = require("primeng/dataview");
var dialog_1 = require("primeng/dialog");
var dropdown_1 = require("primeng/dropdown");
var editor_1 = require("primeng/editor");
var fieldset_1 = require("primeng/fieldset");
var fileupload_1 = require("primeng/fileupload");
var galleria_1 = require("primeng/galleria");
var growl_1 = require("primeng/growl");
var inplace_1 = require("primeng/inplace");
var inputmask_1 = require("primeng/inputmask");
var inputswitch_1 = require("primeng/inputswitch");
var inputtext_1 = require("primeng/inputtext");
var inputtextarea_1 = require("primeng/inputtextarea");
var lightbox_1 = require("primeng/lightbox");
var listbox_1 = require("primeng/listbox");
var megamenu_1 = require("primeng/megamenu");
var menu_1 = require("primeng/menu");
var menubar_1 = require("primeng/menubar");
var messages_1 = require("primeng/messages");
var message_1 = require("primeng/message");
var multiselect_1 = require("primeng/multiselect");
var orderlist_1 = require("primeng/orderlist");
var organizationchart_1 = require("primeng/organizationchart");
var overlaypanel_1 = require("primeng/overlaypanel");
var paginator_1 = require("primeng/paginator");
var panel_1 = require("primeng/panel");
var panelmenu_1 = require("primeng/panelmenu");
var password_1 = require("primeng/password");
var picklist_1 = require("primeng/picklist");
var progressbar_1 = require("primeng/progressbar");
var radiobutton_1 = require("primeng/radiobutton");
var rating_1 = require("primeng/rating");
var schedule_1 = require("primeng/schedule");
var scrollpanel_1 = require("primeng/scrollpanel");
var selectbutton_1 = require("primeng/selectbutton");
var slidemenu_1 = require("primeng/slidemenu");
var slider_1 = require("primeng/slider");
var spinner_1 = require("primeng/spinner");
var splitbutton_1 = require("primeng/splitbutton");
var steps_1 = require("primeng/steps");
var tabmenu_1 = require("primeng/tabmenu");
var table_1 = require("primeng/table");
var tabview_1 = require("primeng/tabview");
var terminal_1 = require("primeng/terminal");
var tieredmenu_1 = require("primeng/tieredmenu");
var toast_1 = require("primeng/toast");
var togglebutton_1 = require("primeng/togglebutton");
var toolbar_1 = require("primeng/toolbar");
var tooltip_1 = require("primeng/tooltip");
var tree_1 = require("primeng/tree");
var treetable_1 = require("primeng/treetable");
var app_component_1 = require("./app.component");
var app_rightpanel_component_1 = require("./app.rightpanel.component");
var app_profile_component_1 = require("./app.profile.component");
var app_menu_component_1 = require("./app.menu.component");
var app_megamenu_component_1 = require("./app.megamenu.component");
var app_breadcrumb_component_1 = require("./app.breadcrumb.component");
var app_topbar_component_1 = require("./app.topbar.component");
var app_footer_component_1 = require("./app.footer.component");
var dashboarddemo_component_1 = require("./demo/view/dashboarddemo.component");
var sampledemo_component_1 = require("./demo/view/sampledemo.component");
var formsdemo_component_1 = require("./demo/view/formsdemo.component");
var datademo_component_1 = require("./demo/view/datademo.component");
var panelsdemo_component_1 = require("./demo/view/panelsdemo.component");
var overlaysdemo_component_1 = require("./demo/view/overlaysdemo.component");
var menusdemo_component_1 = require("./demo/view/menusdemo.component");
var messagesdemo_component_1 = require("./demo/view/messagesdemo.component");
var miscdemo_component_1 = require("./demo/view/miscdemo.component");
var emptydemo_component_1 = require("./demo/view/emptydemo.component");
var chartsdemo_component_1 = require("./demo/view/chartsdemo.component");
var filedemo_component_1 = require("./demo/view/filedemo.component");
var documentation_component_1 = require("./demo/view/documentation.component");
var breadcrumb_service_1 = require("./breadcrumb.service");
/*Components BootSolitions */
var bs_grid_component_1 = require("./base/components/bs-grid/bs-grid.component");
var bs_date_component_1 = require("./base/components/bs-date/bs-date.component");
var bs_loading_component_1 = require("././base/components/bs-loading/bs-loading.component");
/* Diretivas */
var BSGuardRoute_service_1 = require("./base/services/BSGuardRoute.service");
var BSFocus_directive_1 = require("./base/directive/BSFocus.directive");
/*BS Services */
var BSMessage_service_1 = require("./base/services/BSMessage.service");
var BSResource_service_1 = require("./base/services/BSResource.service");
var BSUtils_service_1 = require("./base/services/BSUtils.service");
var BSArrays_service_1 = require("./base/services/BSArrays.service");
/* Components Business */
var perfil_1 = require("./corporativo/perfil/perfil");
var usuario_1 = require("./corporativo/usuario/usuario");
var pagina_construcao_1 = require("./pagina-construcao");
var app_model_services_1 = require("./model/app-model.services");
var BSAuthInterceptor_1 = require("./base/services/BSAuthInterceptor");
var login_component_1 = require("./acesso/login.component");
var BSAuth_service_1 = require("./base/services/BSAuth.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var BSSetarCombo_1 = require("./base/directive/BSSetarCombo");
var modulo_1 = require("./corporativo/modulo/modulo");
var funcionalidade_1 = require("./corporativo/funcionalidade/funcionalidade");
var permissao_1 = require("./corporativo/permissao/permissao");
/* ej2 */
var ej2_angular_dropdowns_1 = require("@syncfusion/ej2-angular-dropdowns");
var sacado_1 = require("./formalizacao/sacado/sacado");
var aluno_1 = require("./cadastro/aluno/aluno");
var professor_1 = require("./cadastro/professor/professor");
var disciplina_1 = require("./cadastro/disciplina/disciplina");
var turma_1 = require("./cadastro/turma/turma");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routes_1.AppRoutes,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                accordion_1.AccordionModule,
                autocomplete_1.AutoCompleteModule,
                breadcrumb_1.BreadcrumbModule,
                button_1.ButtonModule,
                calendar_1.CalendarModule,
                card_1.CardModule,
                carousel_1.CarouselModule,
                chart_1.ChartModule,
                checkbox_1.CheckboxModule,
                chips_1.ChipsModule,
                codehighlighter_1.CodeHighlighterModule,
                confirmdialog_1.ConfirmDialogModule,
                colorpicker_1.ColorPickerModule,
                contextmenu_1.ContextMenuModule,
                dataview_1.DataViewModule,
                dialog_1.DialogModule,
                dropdown_1.DropdownModule,
                editor_1.EditorModule,
                fieldset_1.FieldsetModule,
                fileupload_1.FileUploadModule,
                galleria_1.GalleriaModule,
                growl_1.GrowlModule,
                inplace_1.InplaceModule,
                inputmask_1.InputMaskModule,
                inputswitch_1.InputSwitchModule,
                inputtext_1.InputTextModule,
                inputtextarea_1.InputTextareaModule,
                lightbox_1.LightboxModule,
                listbox_1.ListboxModule,
                megamenu_1.MegaMenuModule,
                menu_1.MenuModule,
                menubar_1.MenubarModule,
                message_1.MessageModule,
                messages_1.MessagesModule,
                multiselect_1.MultiSelectModule,
                orderlist_1.OrderListModule,
                organizationchart_1.OrganizationChartModule,
                overlaypanel_1.OverlayPanelModule,
                paginator_1.PaginatorModule,
                panel_1.PanelModule,
                panelmenu_1.PanelMenuModule,
                password_1.PasswordModule,
                picklist_1.PickListModule,
                progressbar_1.ProgressBarModule,
                radiobutton_1.RadioButtonModule,
                rating_1.RatingModule,
                schedule_1.ScheduleModule,
                scrollpanel_1.ScrollPanelModule,
                selectbutton_1.SelectButtonModule,
                slidemenu_1.SlideMenuModule,
                slider_1.SliderModule,
                spinner_1.SpinnerModule,
                splitbutton_1.SplitButtonModule,
                steps_1.StepsModule,
                table_1.TableModule,
                tabmenu_1.TabMenuModule,
                tabview_1.TabViewModule,
                terminal_1.TerminalModule,
                tieredmenu_1.TieredMenuModule,
                toast_1.ToastModule,
                togglebutton_1.ToggleButtonModule,
                toolbar_1.ToolbarModule,
                tooltip_1.TooltipModule,
                tree_1.TreeModule,
                treetable_1.TreeTableModule,
                captcha_1.CaptchaModule,
                /* ej2 */
                ej2_angular_dropdowns_1.ComboBoxModule
            ],
            declarations: [
                app_component_1.AppComponent,
                app_rightpanel_component_1.AppRightPanelComponent,
                app_menu_component_1.AppMenuComponent,
                app_menu_component_1.AppSubMenuComponent,
                app_megamenu_component_1.AppMegamenuComponent,
                app_breadcrumb_component_1.AppBreadcrumbComponent,
                app_topbar_component_1.AppTopBarComponent,
                app_footer_component_1.AppFooterComponent,
                app_profile_component_1.AppProfileComponent,
                dashboarddemo_component_1.DashboardDemoComponent,
                sampledemo_component_1.SampleDemoComponent,
                formsdemo_component_1.FormsDemoComponent,
                datademo_component_1.DataDemoComponent,
                panelsdemo_component_1.PanelsDemoComponent,
                overlaysdemo_component_1.OverlaysDemoComponent,
                menusdemo_component_1.MenusDemoComponent,
                messagesdemo_component_1.MessagesDemoComponent,
                messagesdemo_component_1.MessagesDemoComponent,
                miscdemo_component_1.MiscDemoComponent,
                chartsdemo_component_1.ChartsDemoComponent,
                emptydemo_component_1.EmptyDemoComponent,
                filedemo_component_1.FileDemoComponent,
                documentation_component_1.DocumentationComponent,
                /** BS Components */
                bs_loading_component_1.BSLoading, BSFocus_directive_1.BSFocusDirective, bs_grid_component_1.BSGridComponent, bs_date_component_1.BSDateComponent, BSSetarCombo_1.BSSetarCombo,
                /* Components BS-Business */
                perfil_1.Perfil, usuario_1.Usuario, pagina_construcao_1.PaginaConstrucao, login_component_1.LoginComponent, dashboard_component_1.DashboardComponent, modulo_1.Modulo, funcionalidade_1.Funcionalidade,
                 permissao_1.Permissao, sacado_1.Sacado,aluno_1.Aluno,professor_1.Professor,disciplina_1.Disciplina,turma_1.Turma

            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: BSAuthInterceptor_1.AuthInterceptor,
                    multi: true,
                },
                { provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy },
                breadcrumb_service_1.BreadcrumbService,
                api_1.MessageService,
                api_1.ConfirmationService,
                /* BS-SERVICE   */
                BSMessage_service_1.BSMessage, BSUtils_service_1.BSUtils, BSGuardRoute_service_1.BSGuardRoute, BSArrays_service_1.BSArrays, BSAuth_service_1.BSAuth,
                /**BS-RESORUCE */
                BSResource_service_1.BSResource, app_model_services_1.PerfilResource, app_model_services_1.AcessoResource, app_model_services_1.UsuarioResource, app_model_services_1.ModuloResource, app_model_services_1.FuncionalidadeResource, app_model_services_1.PermissaoResource,
                 app_model_services_1.SacadoResource,app_model_services_1.AlunoResource, app_model_services_1.ProfessorResource, app_model_services_1.TurmaResource, app_model_services_1.DisciplinaResource
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
