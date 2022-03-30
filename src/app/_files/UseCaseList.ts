import { RequirementService } from "../service/requirement/requirement.service";
import { UseCaseService } from "../service/usecase/use-case.service";
import { Reference } from "./ReferencesList";
import { Requirement } from "./RequirementList";

export const useCases: UseCase[] = [
    {
        "id": 1,
        "title": "Multiple formats and multilingual site",
        "description": "Desc 1",
        "link": "/usecase/mfml",
        "requirementIDs": [-1],
    },
    {
        "id": 2,
        "title": "Archiving versions",
        "description": "Desc 2",
        "link": "/usecase/archive",
        "requirementIDs": [-1],
    },
    {
        "id": 3,
        "title": "Capability matching",
        "description": "Desc 3",
        "link": "/usecase/capability",
        "requirementIDs": [-1],
    },
    {
        "id": 4,
        "title": "Smart building",
        "description": "Desc 4",
        "link": "/usecase/smart-building",
        "requirementIDs": [-1],
    }, {
        "id": 5,
        "title": 'Negotiate RDF shapes',
        "description": `John is a researcher interested in the evolution of youth unemployment in different societies; 
        he needs data in the form of RDF data graphs. 
        To do this, he queries the data graphs available in various web APIs queried by the university portal. 
        These scenarios are plausible:

        <ul>
        <li>
        <b>Scenario 1</b>  The shape is also important: 
        John needs a representation that conforms to a specific shape. Therefore, vocabulary negotiation is not enough 
        because he would have to manually validate all returned data graphs with the desired vocabularies.
        </li>
        <li>
        <b>Scenario 2</b>  Flexibility vs rigidity: 
        In scenario 1, the negotiation can be rigid in case John wants <b>all</b> the constraints to be valid, 
        and prefers not to have an answer otherwise. Else, the negotiation can be flexible in case John agrees 
        to receive a representation even if it does not satisfy all the constraints.
        </li>
        <li>
        <b>Scenario 3</b>  Not all constraints are equally important: 
        For John, not all shape constraints have the same degree of importance. He therefore wants a way to express 
        this importance for each constraint and to obtain the representation that minimises the violation rate.
        </li>
        </ul>
        `,
        "link": '',
        "solutions": [
            {
                "id": 1,
                "description": '',
            }
        ],
        "requirementIDs": [6],
        "requirements": [],
        "references": [],
        "links": [],
    },

];
export interface UseCase {
    id: number;
    title: string;
    description: string;
    link: string,
    solutions?: UseCaseSolution[],
    requirements?: Requirement[],
    requirementIDs: number[]
    references?: Reference[],
    links?: string[],
}

export interface UseCaseSolution {
    id: number;
    description: string;
}