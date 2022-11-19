# CNTF

Content Negotiation Theoretical Framework [*CNTF*](https://w3id.org/cntf/) is a website that collects and categorises **C**ontent **N**egotiation *CN* features into different groups: styles, dimensions, etc. CNTF aims to collect use cases of CN, highlight existing solutions if available, or suggest plausible ways to advance them. CNTF also provides an ontology describing its content, and is also intended to be used to disseminate our new proposals for advancing CN, making it a sustainable and up-to-date digital survey of CN.

CNTF is developped using [Angular](https://angular.io/), you can refere to the [angular documentation](https://angular.io/docs) if needed when extending this project.

## Install dependencies 

Run `npm install` to install all the required dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Generate new component

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Citation
To cite this resource, please use the following BibTex:

```
@website{cntf:2022,
  author = {{Taghzouti, Yousouf and Zimmermann, Antoine and Lefrançois, Maxime }},
  title = {A portal for the state of the art of content negotiation},
  date = {2022},
  url = {https://w3id.org/cntf/}
}
```

Or the following RDF:

```
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix sdo: <https://schema.org/> .
@prefix wiki: <https://www.wikidata.org/wiki/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
<https://w3id.org/cntf/>
    a sdo:WebSite , owl:NamedIndividual ;
    sdo:codeRepository <https://github.com/youctagh/cntf/> ;
    dcterms:type wiki:Q35127 ; # "website"
    dcterms:creator "Yousouf Taghzouti","Antoine Zimmermann","Maxime Lefrançois" ;
    dcterms:date "2022"^^xsd:gYear ;
    dcterms:title "A portal for the state of the art of content negotiation".
```


## Contacts

**Yousouf Taghzouti**  
*PhD at EMSE*  
<yousouf.taghzouti@emse.fr>  
<https://orcid.org/0000-0003-4509-9537>

**Antoine Zimmermann**  
*Professor at EMSE*  
<antoine.zimmermann@emse.fr>  
<https://orcid.org/0000-0003-1502-6986>

**Maxime Lefrançois**  
*Professor at EMSE*  
<maxime.lefrancois@emse.fr>  
<https://orcid.org/0000-0001-9814-8991>
