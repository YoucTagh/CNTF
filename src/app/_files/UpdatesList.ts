
export const updates: Update[] = [
    {
        "id": 1,
        "date": new Date('2021-10-11T00:00:00'),
        "additions": [
            "Initial creation of the CNTF as a Wiki GitLab."
        ],
    },
    {
        "id": 2,
        "date": new Date('2021-10-18T00:00:00'),
        "additions": [
            "Create a sidebar to navigate the Wiki.",
            "Add links in the pages for navigation.",
            "Add definition of basic terms: user, client, server, etc.",
            "Create maintenance pages, useful links and abbreviations."
        ],
    },
    {
        "id": 3,
        "date": new Date('2021-10-28T00:00:00'),
        "additions": [
            "Fix the navigation links bug.",
            "Add four content negotiation use cases: mfml, archiving, capabilities and smart building.",
            "Add content negotiation dimensions: media type, language, encoding, character set, capabilities."
        ],
    },
    {
        "id": 4,
        "date": new Date('2021-12-02T00:00:00'),
        "additions": [
            "Migrate CNTF to a web application using angular.",
            "Setup the sidenav with navigation buttons and icons."
        ],
    },
    {
        "id": 5,
        "date": new Date('2021-12-06T00:00:00'),
        "additions": [
            "Migrate methodology, terminology, contribution and abbreviation pages.",
            "Create a Reference page with three sorting options: author, date and title.",
            "Add abstract show/hide feature in the Reference page."
        ],
    },
    {
        "id": 6,
        "date": new Date('2021-12-17T00:00:00'),
        "additions": [
            "Migrate content negotiation use cases and dimensions.",
            "Add IDs to the references to navigate to them from other concepts.",
        ],
    },
    {
        "id": 7,
        "date": new Date('2022-01-27T00:00:00'),
        "additions": [
            "Add CI/CD pipelines to the project.",
            "Add a new home page.",
            "Fix assets not showing bug.",
            "Fix the link to references bug.",
            "Add new terms with references if any."
        ],
    },
    {
        "id": 8,
        "date": new Date('2022-02-09T00:00:00'),
        "additions": [
            "Add basic content negotiation styles description: proactive, reactive and transparent.",
            "Add basic requirements.",
        ],
    },
    {
        "id": 8,
        "date": new Date('2022-03-08T00:00:00'),
        "additions": [
            "Add new content negotiation use cases: accuracy, CRS, entailment regime, formatting, OWL profile, RDF shape, summary, vocabulary.",
            "The new content negotiation use cases contain new sections: solutions, links and other use cases.",
        ],
    },
    {
        "id": 9,
        "date": new Date('2022-03-15T00:00:00'),
        "additions": [
            "Add a new section CN tool that list some CN implementations.",
            "Enhance the content.",
        ],
    },
    {
        "id": 10,
        "date": new Date('2022-03-30T00:00:00'),
        "additions": [
            "Add new CN Dimensions: accuracy, authorization, crs, entailment regime, formatting, owl profile, summary, vocabulary.",
            "Add CN Styles: transparent, active, conditional, adaptive.",
            "Add CN Conveyance style: headers based and URL based.",
            "Update section CN tool to Addition.",
            "Add CN Classification.",
        ],
    },
];

export const futureUpdates: string[] = [
    "Develop an experimentation space to test conneg use cases.",
    "Add conneg formalization.",
];

export interface Update {
    id: number;
    date: Date;
    additions: string[];
}
