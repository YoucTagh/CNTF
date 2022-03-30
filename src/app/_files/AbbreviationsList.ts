export const abbreviations: Abbreviation[] = [
    {
        "id": 1,
        "title": "DL",
        "description": "International Workshop on **D**escription **L**ogics.",
        "type": 1
    },
    {
        "id": 2,
        "title": "KR",
        "description": "International Conference on the Principles of **K**nowledge Representation and **R**easoning.",
        "type": 1
    },
    {
        "id": 3,
        "title": "CSL",
        "description": "Annual Conference of the European Association for **C**omputer **S**cience **L**ogic.",
        "type": 1
    },
    {
        "id": 4,
        "title": "AiML",
        "description": "**A**dvances **i**n **M**odal **L**ogic.",
        "type": 1
    },
    {
        "id": 5,
        "title": "AAAI",
        "description": "**A**ssociation for the **A**dvancement of **A**rtificial **I**ntelligence.",
        "type": 1
    },
    {
        "id": 6,
        "title": "CADE",
        "description": "International **C**onference on **A**utomated **De**duction.",
        "type": 1
    },
    {
        "id": 7,
        "title": "LICS",
        "description": "IEEE Symposium on **L**ogic **i**n **C**omputer **S**cience.",
        "type": 1
    },
    {
        "id": 8,
        "title": "LPAR",
        "description": "International Conference on **L**ogic for **P**rogramming, **A**rtificial Intelligence, and **R**easoning.",
        "type": 1
    },
    {
        "id": 9,
        "title": "FOCS",
        "description": "Annual Symposium on the **F**oundations **o**f **C**omputer **S**cience.",
        "type": 1
    },
    {
        "id": 10,
        "title": "IJCAI",
        "description": "**I**nternational **J**oint **C**onference on **A**rtificial **I**ntelligence.",
        "type": 1
    },
    {
        "id": 11,
        "title": "IJCAR",
        "description": "**I**nternational **J**oint **C**onference on **A**utomated **R**easoning.",
        "type": 1
    },
    {
        "id": 12,
        "title": "ICALP",
        "description": "**I**nternational **C**olloquium on **A**utomata, **L**anguages and **P**rogramming.",
        "type": 1
    },

    {
        "id": 13,
        "title": "OWLED",
        "description": "**OWL**: **E**xperiences and **D**irections (Workshop).",
        "type": 1
    },
    {
        "id": 14,
        "title": "FoSSaCS",
        "description": "International Conference on **F**oundations **o**f **S**oftware **S**cience **a**nd **C**omputational **S**tructures.",
        "type": 1
    },
    {
        "id": 15,
        "title": "TABLEAUX",
        "description": "International Conference on Analytic **Tableaux** and Related Methods.",
        "type": 1
    },
    {
        "id": 16,
        "title": "LNCS",
        "description": "**L**ecture **N**otes in **C**omputer **S**cience.",
        "type": 2
    },
    {
        "id": 17,
        "title": "LNAI",
        "description": "**L**ecture **N**otes in **A**rtificial **I**ntelligence.",
        "type": 2
    },
    {
        "id": 18,
        "title": "API",
        "description": "**A**pplication **P**rogramming **I**nterface.",
        "type": 3
    },
    {
        "id": 19,
        "title": "DC",
        "description": "**D**ublin **C**ore.",
        "type": 3
    },
    {
        "id": 20,
        "title": "DCAT",
        "description": "**D**ata **Cat**alog Vocabulary.",
        "type": 3
    },
    {
        "id": 21,
        "title": "FOAF",
        "description": "**F**riend **o**f **a** **F**riend.",
        "type": 3
    },
    {
        "id": 22,
        "title": "HTTP",
        "description": "**H**yper**t**ext **T**ransfer **P**rotocol.",
        "type": 3
    },
    {
        "id": 23,
        "title": "IRI",
        "description": "**I**nternationalized **R**esource **I**dentifier.",
        "type": 3
    },
    {
        "id": 24,
        "title": "ISBN",
        "description": "**I**nternational **S**tandard **B**ook **N**umber.",
        "type": 3
    },
    {
        "id": 25,
        "title": "JSON",
        "description": "**J**ava**S**cript **O**bject **N**otation.",
        "type": 3
    },
    {
        "id": 26,
        "title": "OWL",
        "description": "**W**eb **O**ntology **L**anguage.",
        "type": 3
    },
    {
        "id": 27,
        "title": "RDF",
        "description": "**R**esource **D**escription **F**ramework.",
        "type": 3
    },
    {
        "id": 28,
        "title": "URI",
        "description": "**U**niform **R**esource **I**dentifier.",
        "type": 3
    },
    {
        "id": 29,
        "title": "URL",
        "description": "**U**niform **R**esource **L**ocator.",
        "type": 3
    },
    
    {
        "id": 30,
        "title": "URN",
        "description": "**U**niform **R**esource **N**ame.",
        "type": 3
    },
    
    {
        "id": 31,
        "title": "W3C",
        "description": "The **W**orld **W**ide **W**eb **C**onsortium.",
        "type": 3
    },
    
    {
        "id": 32,
        "title": "XML",
        "description": "E**x**tensible **M**arkup **L**anguage.",
        "type": 3
    },

];

export class Abbreviation {
    constructor(public id: number, public title: string, public description: string, public type: number) { }
}