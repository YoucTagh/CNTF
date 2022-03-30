export const terms: Term[] = [
    {
        "id": 1,
        "title": "User",
        "descriptions": [
            {
                "description": "A person who uses or operates something.",
                "reference": -1
            },
        ]
    },
    {
        "id": 2,
        "title": "User-Agent",
        "descriptions": [
            {
                "description": "A user agent is any software that retrieves, renders and facilitates end user interaction with Web content.",
                "reference": -1
            },
            {
                "description": "The client which initiates a request. These are often browsers, editors, spiders (web-traversing robots), or other end user tools.",
                "reference": 55
            },
        ],
    },
    {
        "id": 3,
        "title": "Client",
        "descriptions": [
            {
                "description": "A program that establishes connections for the purpose of sending requests.",
                "reference": 55
            }
        ],
    },
    {
        "id": 4,
        "title": "Server",
        "descriptions": [
            {
                "description": "An application program that accepts connections in order to service requests by sending back responses. Any given program may be capable of being both a client and a server; our use of these terms refers only to the role being performed by the program for a particular connection, rather than to the program's capabilities in general. Likewise, any server may act as an origin server, proxy, gateway, or tunnel, switching behavior based on the nature of each request.",
                "reference": 55
            }
        ],
    },
    {
        "id": 5,
        "title": "Resource",
        "descriptions": [
            {
                "description": "A network data object or service that can be identified by a URI, as defined in section 3.2. Resources may be available in multiple representations (e.g. multiple languages, data formats, size, and resolutions) or vary in other ways.",
                "reference": 55
            },
            {
                "description": `The term "resource" is used in a general sense
                for whatever might be identified by a URI.  Familiar examples
                include an electronic document, an image, a source of information
                with a consistent purpose (e.g., "today's weather report for Los
                Angeles"), a service (e.g., an HTTP-to-SMS gateway), and a
                collection of other resources.  A resource is not necessarily
                accessible via the Internet; e.g., human beings, corporations, and
                bound books in a library can also be resources.  Likewise,
                abstract concepts can be resources, such as the operators and
                operands of a mathematical equation, the types of a relationship
                (e.g., "parent" or "employee"), or numeric values (e.g., zero,
                one, and infinity).`,
                "reference": 19

            }
        ],
    },
    {
        "id": 6,
        "title": "Variant",
        "descriptions": [
            {
                "description": "A resource may have one, or more than one, representation(s) associated with it at any given instant. Each of these representations is termed a `varriant'. Use of the term `variant' does not necessarily imply that the resource is subject to content negotiation.",
                "reference": 55
            }
        ],
    },
    {
        "id": 7,
        "title": "Link",
        "descriptions": [
            {
                "description": `A link can be viewed as a statement of the form "link context has a
                link relation type resource at link target, which has target
                attributes.`,
                "reference": 45
            }
        ],
    },
    {
        "id": 8,
        "title": "Cache",
        "descriptions": [
            {
                "description": `
                A program's local store of response messages and the subsystem that controls its message storage, retrieval, and deletion. 
                A cache stores cacheable responses in order to reduce the response time and network bandwidth consumption on future, 
                equivalent requests. Any client or server may include a cache, though a cache cannot be used by a server that is 
                acting as a tunnel.
                `,
                "reference": 55
            }
        ],
    },
    {
        "id": 9,
        "title": "Profile",
        "descriptions": [
            {
                "description": `
                A description of structural and/or semantic constraints on representations of resources that apply in 
                addition to the constraints inherently indicated by their MIME type.
                `,
                "reference": 2
            },
            {
                "description": `
                A whitespace-separated list of IRIs identifying specific constraints or conventions that apply to an ALPS document.  A
                profile must not change the semantics of the resource representation when processed without profile knowledge, so
                that clients both with and without knowledge of a profiled resource can safely use the same representation.  The profile
                parameter may also be used by clients to express their preferences in the content negotiation process.  It is recommended
                that document authors use IRIs that can be dereferenced and that they provide useful documentation at that IRI.
                `,
                "reference": 58
            }
        ],
    },
    {
        "id": 10,
        "title": "Capability",
        "descriptions": [
            {
                "description": "An attribute of a sender or receiver (often the receiver)which indicates an ability to generate or process a particular type of message content.",
                "reference": 53
            }
        ],
    },
    {
        "id": 11,
        "title": "Content negotiation",
        "descriptions": [
            {
                "description": "The mechanism for selecting the appropriate representation when servicing a request, as described in section 12. The representation of entities in any response can be negotiated (including error responses).",
                "reference": 55
            }
        ],
    },
    {
        "id": 12,
        "title": "Negotiable resource",
        "descriptions": [
            {
                "description": "A data resource which has multiple representations (variants) associated with it. Selection of an appropriate variant for transmission in a message is accomplished by content negotiation between the sender and recipient.",
                "reference": 53
            }
        ],
    },

    {
        "id": 13,
        "title": "Preference",
        "descriptions": [
            {
                "description": "An attribute of a sender or receiver (often the receiver) which indicates an preference to generate or process one particular type of message content over another, even if both are possible.",
                "reference": -1
            }
        ],
    },
    {
        "id": 14,
        "title": "Original Resource",
        "descriptions": [
            {
                "description": "An Original Resource is a resource that exists or used to exist, and for which access to one of its prior states may be required.",
                "reference": 52
            }
        ],
    },
    {
        "id": 15,
        "title": "Memento",
        "descriptions": [
            {
                "description": " A Memento for an Original Resource is a resource that encapsulates a prior state of the Original Resource. A Memento for an Original Resource as it existed at time T is a resource that encapsulates the state the Original Resource had at time T.",
                "reference": 52
            }
        ],
    },
    {
        "id": 16,
        "title": "TimeGate",
        "descriptions": [
            {
                "description": "A TimeGate for an Original Resource is a resource that is capable of datetime negotiation to support access to prior states of the Original Resource.",
                "reference": 52
            }
        ],
    },
    {
        "id": 17,
        "title": "TimeMap",
        "descriptions": [
            {
                "description": "A TimeMap for an Original Resource is a resource from which a list of URIs of Mementos of the Original Resource is available.",
                "reference": 52
            }
        ],
    },
    {
        "id": 18,
        "title": "Style of negotiation",
        "descriptions": [
            {
                "description": "Represents how content negotiation takes place, e.g., who selects the best representation?",
                "reference": -1
            }
        ],
    },
    {
        "id": 19,
        "title": "Dimension of negotiation",
        "descriptions": [
            {
                "description": "The constraints that the server has taken into consideration when selecting the best representation.",
                "reference": -1
            }
        ],
    },

];


export const termsResemblance: TermsResemblance[] = [
    {
        "id": 1,
        "title": "Media Type vs MIME type vs Content type",
        "description": `
                <b>Media Type</b> is the proper technical term. 
                <b>Content-Type</b> is the name of the HTTP header field used to specify the media type.
                <b>MIME Type</b> is the former name for Media Type.
                `,
        "reference": -1
    },
    {
        "id": 2,
        "title": "Adaptation vs Personalization",
        "description": `
            <b>Personalising</b> is the same as adapting towards a specific user, or in other words, <b>Personalisation</b> 
            systems represent a specific subtype of general adaptation systems.
        `,
        "reference": 57
    },
]
export interface Term {
    id: number;
    title: string;
    descriptions: TermDescription[];
}

interface TermDescription {
    description: string;
    reference: string | number;
}

export interface TermsResemblance {
    id: number;
    title: string;
    description: string;
    reference: number;
}