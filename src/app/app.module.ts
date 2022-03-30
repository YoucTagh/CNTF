import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { materials } from '../app/material/material.module';
import { DimensionListComponent } from './dimension/dimension-list/dimension-list.component';
import { UsecaseListComponent } from './usecase/usecase-list/usecase-list.component';
import { MFMLComponent } from './usecase/mfml/mfml.component';
import { DMimeComponent } from './dimension/dmime/dmime.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReferenceComponent } from './reference/reference.component';
import { FormsModule } from '@angular/forms';
import { ContributeComponent } from './contribute/contribute.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { AbbreviationComponent } from './abbreviation/abbreviation.component';
import { BoldStarPipe } from './pipes/BoldStarPipe';
import { ArchiveComponent } from './usecase/archive/archive.component';
import { CapabilityComponent } from './usecase/capability/capability.component';
import { SmartBuildingComponent } from './usecase/smart-building/smart-building.component';
import { DLanguageComponent } from './dimension/dlanguage/dlanguage.component';
import { DEncodingComponent } from './dimension/dencoding/dencoding.component';
import { DCharSetComponent } from './dimension/dchar-set/dchar-set.component';
import { DCapabilityComponent } from './dimension/dcapability/dcapability.component';
import { DProfileComponent } from './dimension/dprofile/dprofile.component';
import { DVersionComponent } from './dimension/dversion/dversion.component';
import { StyleListComponent } from './style/style-list/style-list.component';
import { SProactiveComponent } from './style/sproactive/sproactive.component';
import { SReactiveComponent } from './style/sreactive/sreactive.component';
import { STransparentComponent } from './style/stransparent/stransparent.component';
import { SConditionalComponent } from './style/sconditional/sconditional.component';
import { SActiveComponent } from './style/sactive/sactive.component';
import { SAdaptiveComponent } from './style/sadaptive/sadaptive.component';
import { RequirementComponent } from './requirement/requirement.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { UpdateComponent } from './update/update.component';
import { PlaygroundMainComponent } from './playground/playground-main/playground-main.component';
import { UnderDevelopmentComponent } from './under-development/under-development.component';
import { HeaderItemComponent } from './playground/header-item/header-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RDFShapeComponent } from './usecase/rdf-shape/rdf-shape.component';
import { VocabularyComponent } from './usecase/vocabulary/vocabulary.component';
import { CrsComponent } from './usecase/crs/crs.component';
import { AccuracyComponent } from './usecase/accuracy/accuracy.component';
import { FormattingComponent } from './usecase/formatting/formatting.component';
import { SummaryComponent } from './usecase/summary/summary.component';
import { OwlProfileComponent } from './usecase/owl-profile/owl-profile.component';
import { EntailmentRegimeComponent } from './usecase/entailment-regime/entailment-regime.component';
import { DConveyanceListComponent } from './dimension/d-conveyance/dconveyance-list/dconveyance-list.component';
import { AvailableImplComponent } from './tool/available-impl/available-impl.component';
import { AvailableServerComponent } from './tool/available-server/available-server.component';

@NgModule({
  declarations: [
    AppComponent,
    DimensionListComponent,
    UsecaseListComponent,
    MFMLComponent,
    DMimeComponent,
    HomeComponent,
    PageNotFoundComponent,
    ReferenceComponent,
    ContributeComponent,
    TerminologyComponent,
    MethodologyComponent,
    AbbreviationComponent,
    BoldStarPipe,
    ArchiveComponent,
    CapabilityComponent,
    SmartBuildingComponent,
    DLanguageComponent,
    DEncodingComponent,
    DCharSetComponent,
    DCapabilityComponent,
    DProfileComponent,
    DVersionComponent,
    StyleListComponent,
    SProactiveComponent,
    SReactiveComponent,
    STransparentComponent,
    SConditionalComponent,
    SActiveComponent,
    SAdaptiveComponent,
    RequirementComponent,
    MaintenanceComponent,
    UpdateComponent,
    AvailableServerComponent,
    PlaygroundMainComponent,
    UnderDevelopmentComponent,
    HeaderItemComponent,
    RDFShapeComponent,
    VocabularyComponent,
    CrsComponent,
    AccuracyComponent,
    FormattingComponent,
    SummaryComponent,
    OwlProfileComponent,
    EntailmentRegimeComponent,
    DConveyanceListComponent,
    AvailableImplComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materials,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }