import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbbreviationComponent } from './abbreviation/abbreviation.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DCapabilityComponent } from './dimension/dcapability/dcapability.component';
import { DCharSetComponent } from './dimension/dchar-set/dchar-set.component';
import { DEncodingComponent } from './dimension/dencoding/dencoding.component';
import { DimensionListComponent } from './dimension/dimension-list/dimension-list.component';
import { DLanguageComponent } from './dimension/dlanguage/dlanguage.component';
import { DMimeComponent } from './dimension/dmime/dmime.component';
import { DProfileComponent } from './dimension/dprofile/dprofile.component';
import { DVersionComponent } from './dimension/dversion/dversion.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaygroundMainComponent } from './playground/playground-main/playground-main.component';
import { ReferenceComponent } from './reference/reference.component';
import { RequirementComponent } from './requirement/requirement.component';
import { SActiveComponent } from './style/sactive/sactive.component';
import { SAdaptiveComponent } from './style/sadaptive/sadaptive.component';
import { SConditionalComponent } from './style/sconditional/sconditional.component';
import { SProactiveComponent } from './style/sproactive/sproactive.component';
import { SReactiveComponent } from './style/sreactive/sreactive.component';
import { STransparentComponent } from './style/stransparent/stransparent.component';
import { StyleListComponent } from './style/style-list/style-list.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { UnderDevelopmentComponent } from './under-development/under-development.component';
import { UpdateComponent } from './update/update.component';
import { ArchiveComponent } from './usecase/archive/archive.component';
import { CapabilityComponent } from './usecase/capability/capability.component';
import { MFMLComponent } from './usecase/mfml/mfml.component';
import { SmartBuildingComponent } from './usecase/smart-building/smart-building.component';
import { RDFShapeComponent } from './usecase/rdf-shape/rdf-shape.component';
import { UsecaseListComponent } from './usecase/usecase-list/usecase-list.component';
import { AccuracyComponent } from './usecase/accuracy/accuracy.component';
import { CrsComponent } from './usecase/crs/crs.component';
import { EntailmentRegimeComponent } from './usecase/entailment-regime/entailment-regime.component';
import { FormattingComponent } from './usecase/formatting/formatting.component';
import { OwlProfileComponent } from './usecase/owl-profile/owl-profile.component';
import { SummaryComponent } from './usecase/summary/summary.component';
import { VocabularyComponent } from './usecase/vocabulary/vocabulary.component';
import { AvailableServerComponent } from './additional/available-server/available-server.component';
import { DAccuracyComponent } from './dimension/daccuracy/daccuracy.component';
import { DAuthorizationComponent } from './dimension/dauthorization/dauthorization.component';
import { DCRSComponent } from './dimension/dcrs/dcrs.component';
import { DEntailmentRegimeComponent } from './dimension/dentailment-regime/dentailment-regime.component';
import { DFormattingComponent } from './dimension/dformatting/dformatting.component';
import { DOwlProfileComponent } from './dimension/dowl-profile/dowl-profile.component';
import { DSummaryComponent } from './dimension/dsummary/dsummary.component';
import { DVocabularyComponent } from './dimension/dvocabulary/dvocabulary.component';
import { CCListComponent } from './constraint-conveyance/cc-list/cc-list.component';
import { CCHeadersComponent } from './constraint-conveyance/cc-headers/cc-headers.component';
import { CCURLComponent } from './constraint-conveyance/cc-url/cc-url.component';
import { ClassificationComponent } from './classification/classification.component';
import { OntologyComponent } from './ontology/ontology.component';
import { OVisualisationComponent } from './ontology/o-visualisation/o-visualisation.component';
import { ODocumentationComponent } from './ontology/o-documentation/o-documentation.component';
import { OTurtleComponent } from './ontology/o-turtle/o-turtle.component';

const routes: Routes = [
  { path: 'dimension', component: DimensionListComponent },
  { path: 'usecase', component: UsecaseListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'terminology', component: TerminologyComponent },
  { path: 'methodology', component: MethodologyComponent },
  { path: 'abbreviation', component: AbbreviationComponent },
  { path: 'usecase/mfml', component: MFMLComponent },
  { path: 'usecase/archive', component: ArchiveComponent },
  { path: 'usecase/capability', component: CapabilityComponent },
  { path: 'usecase/smart-building', component: SmartBuildingComponent },
  { path: 'usecase/rdf-shape', component: RDFShapeComponent },
  { path: 'usecase/accuracy', component: AccuracyComponent },
  { path: 'usecase/crs', component: CrsComponent },
  { path: 'usecase/entailment-regime', component: EntailmentRegimeComponent },
  { path: 'usecase/formatting', component: FormattingComponent },
  { path: 'usecase/owl-profile', component: OwlProfileComponent },
  { path: 'usecase/summary', component: SummaryComponent },
  { path: 'usecase/vocabulary', component: VocabularyComponent },
  { path: 'dimension', component: DimensionListComponent },
  { path: 'dimension/mime', component: DMimeComponent },
  { path: 'dimension/language', component: DLanguageComponent },
  { path: 'dimension/encoding', component: DEncodingComponent },
  { path: 'dimension/charset', component: DCharSetComponent },
  { path: 'dimension/capability', component: DCapabilityComponent },
  { path: 'dimension/profile', component: DProfileComponent },
  { path: 'dimension/version', component: DVersionComponent },
  { path: 'dimension/accuracy', component: DAccuracyComponent },
  { path: 'dimension/authorization', component: DAuthorizationComponent },
  { path: 'dimension/crs', component: DCRSComponent },
  { path: 'dimension/entailment-regime', component: DEntailmentRegimeComponent },
  { path: 'dimension/formatting', component: DFormattingComponent },
  { path: 'dimension/owl-profile', component: DOwlProfileComponent },
  { path: 'dimension/summary', component: DSummaryComponent },
  { path: 'dimension/vocabulary', component: DVocabularyComponent },
  { path: 'style', component: StyleListComponent },
  { path: 'style/proactive', component: SProactiveComponent },
  { path: 'style/reactive', component: SReactiveComponent },
  { path: 'style/transparent', component: STransparentComponent },
  { path: 'style/conditional', component: SConditionalComponent },
  { path: 'style/active', component: SActiveComponent },
  { path: 'style/adaptive', component: SAdaptiveComponent },
  { path: 'requirement', component: RequirementComponent },
  { path: 'cc', component: CCListComponent },
  { path: 'cc/header', component: CCHeadersComponent },
  { path: 'cc/url', component: CCURLComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'additional-info/available-server', component: AvailableServerComponent },
  { path: 'classification', component: ClassificationComponent },
  { path: 'ontology/visualisation', component: OVisualisationComponent },
  { path: 'ontology/documentation', component: ODocumentationComponent },
  { path: 'ontology.ttl', component:OTurtleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
