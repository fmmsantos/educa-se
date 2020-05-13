


import { FornecedoresService } from './fornecedor/fornecedores.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routes';




//import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { CarService } from './demo/service/carservice';
import { CountryService } from './demo/service/countryservice';
import { EventService } from './demo/service/eventservice';
import { NodeService } from './demo/service/nodeservice';
import { BreadcrumbService } from './breadcrumb.service';
import { FornecedorCadastroComponent } from './fornecedor/fornecedor-cadastro/fornecedor-cadastro.component';
import { FornecedorBuscarComponent } from './fornecedor/fornecedor-buscar/fornecedor-buscar.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { HttpModule } from '@angular/http';


import { CaptchaModule } from 'primeng/captcha';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { GrowlModule } from 'primeng/growl';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScheduleModule } from 'primeng/schedule';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { AppComponent } from './app.component';
import { AppRightPanelComponent } from './app.rightpanel.component';
import { AppProfileComponent } from './app.profile.component';
import { AppMenuComponent, AppSubMenuComponent } from './app.menu.component';
import { AppMegamenuComponent } from './app.megamenu.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
/**
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';

import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component'; */
import { BSGuardRoute } from './base/services/BSGuardRoute.service';
import { BSFocusDirective } from './base/directive/BSFocus.directive';


/*Components BootSolitions */
import { BSGridComponent } from './base/components/bs-grid/bs-grid.component';
import { BSDateComponent } from './base/components/bs-date/bs-date.component';
import { BSLoading } from '././base/components/bs-loading/bs-loading.component';


/*BS Services */
import { BSMessage } from './base/services/BSMessage.service';
import { BSResource } from './base/services/BSResource.service';
import { BSUtils } from './base/services/BSUtils.service';
import { BSArrays } from './base/services/BSArrays.service';


/* Components Business */


import { AlunoResource, ProfessorResource, DisciplinaResource, TurmaResource, DiarioResource, UsuarioResource, AcessoResource, RegistroAulaResource } from './model/app-model.services';
import { AuthInterceptor } from './base/services/BSAuthInterceptor';

import { BSAuth } from './base/services/BSAuth.service';


import { BSSetarCombo } from './base/directive/BSSetarCombo';
//import { AuthService } from '.login/auth.service';




/* ej2 */
//import { ComboBoxModule } from './ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns';

import { Aluno} from './cadastro/aluno/aluno';
import { Professor} from './cadastro/professor/professor';
import { Disciplina} from './cadastro/disciplina/disciplina';
import { Turma } from './cadastro/turma/turma';
import { Diario } from './cadastro/diario/diario';
import { Usuario } from './cadastro/usuario/usuario';
import {Login } from './cadastro/login/login';
import { Usuarioo } from './cadastro/login/usuarioo';
import { ProfessorGuarde } from './guarde/professorGuard';
import { RegistroAula } from './cadastro/registro_aula/registro';





@NgModule({
  imports: [
    ListboxModule,
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ColorPickerModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    GrowlModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ScheduleModule,
    ScrollPanelModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    DataTableModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ColorPickerModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    GrowlModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ScheduleModule,
    ScrollPanelModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    CaptchaModule,


      /* ej2 */
      //ComboBoxModule
  ],


  declarations: [
    AppComponent,
    AppRightPanelComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    AppMegamenuComponent,
    AppBreadcrumbComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppProfileComponent,
   Usuarioo,

    FornecedorCadastroComponent,
    FornecedorBuscarComponent,

     AppRightPanelComponent,
     AppMenuComponent,
    AppSubMenuComponent,
    AppMegamenuComponent,
    AppBreadcrumbComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppProfileComponent,
    DashboardDemoComponent,
    /**ChartsDemoComponent ,

    SampleDemoComponent,
    FormsDemoComponent,
    DataDemoComponent,
    PanelsDemoComponent,
    OverlaysDemoComponent,
    MenusDemoComponent,
    MessagesDemoComponent,
    MessagesDemoComponent,
    MiscDemoComponent,

    EmptyDemoComponent,
    FileDemoComponent,
    DocumentationComponent,
    DashboardDemoComponent,
    SampleDemoComponent,
    FormsDemoComponent,
    DataDemoComponent,
    PanelsDemoComponent,
    OverlaysDemoComponent,
    MenusDemoComponent,
    MessagesDemoComponent,
    MessagesDemoComponent,
    MiscDemoComponent,

    EmptyDemoComponent,
    FileDemoComponent,
    DocumentationComponent, */

    /** BS Components */
    BSLoading ,BSFocusDirective, BSGridComponent,BSDateComponent,BSSetarCombo,

    /* Components BS-Business */
   Aluno,Professor,Disciplina,Turma,Diario, Usuario,Login,RegistroAula
  ],



  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,

      multi   : true,

    },



    { provide: LocationStrategy,
         useClass: HashLocationStrategy },
    CarService, CountryService, EventService, NodeService, BreadcrumbService, FornecedoresService
,BreadcrumbService,
      MessageService,
      ConfirmationService,
      /* BS-SERVICE   */
      BSMessage,BSUtils , BSGuardRoute , BSArrays,BSAuth,

      /**BS-RESORUCE */
      BSResource, AlunoResource, ProfessorResource, DisciplinaResource, TurmaResource, DiarioResource,UsuarioResource, AcessoResource,ProfessorGuarde,RegistroAulaResource
      //,AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
