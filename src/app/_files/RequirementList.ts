import { UseCase } from "./UseCaseList";

export const requirements: Requirement[] = [
    {
        "id": 1,
        "title": "R1",
        "description": "Convey constraints related to the media types.",
        "useCases": [],
        "useCaseIDs": [1, 2],
    },
    {
        "id": 2,
        "title": "R2",
        "description": "Convey encoding constraints.",
        "useCases": [],
        "useCaseIDs": [2],
    },
    {
        "id": 3,
        "title": "R3",
        "description": "Convey language constraints.",
        "useCases": [],
        "useCaseIDs": [1],
    },
    {
        "id": 4,
        "title": "R4",
        "description": "Convey the vocabulary to which the representation should adhere to.",
        "useCases": [],
        "useCaseIDs": [-1],
    },
    {
        "id": 5,
        "title": "R5",
        "description": "Empower the client to indicate its preference for one constraint over another.",
        "useCases": [],
        "useCaseIDs": [-1],
    },
    {
        "id": 6,
        "title": "R6",
        "description": "Compute the violation degree for an RDF graph with respect to a shape document.",
        "useCases": [],
        "useCaseIDs": [5],

    },
    {
        "id": 7,
        "title": "R5",
        "description": "The client needs to convey RDF shape constraints with severities and a violation threshold as preferences.",
        "useCases": [],
        "useCaseIDs": [5],
    },
    {
        "id": 8,
        "title": "R5",
        "description": "The server needs to convey a representation together with the validation report.",
        "useCases": [],
        "useCaseIDs": [5],
    },
    {
        "id": 9,
        "title": "R5",
        "description": "The server needs to convey validation reports an let the client choose a representation.",
        "useCases": [],
        "useCaseIDs": [5],
    },
    {
        "id": 10,
        "title": "R5",
        "description": "The server needs to convey a validation report along with an error code.",
        "useCases": [],
        "useCaseIDs": [5],
    },

];
export interface Requirement {
    id: number;
    title: string;
    description: string;
    useCases: UseCase[];
    useCaseIDs: number[];
}
