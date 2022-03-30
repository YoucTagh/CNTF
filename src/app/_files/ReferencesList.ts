const importedReferences = [
	{
		"id": 1,
		"type": "article-journal",
		"abstract": "In order for a web server to provide optimised content to different client devices it requires a description of the capabilities of the client known as the delivery context. In previous work we demonstrated DELI, an open-source library that allows Java servlets to resolve HTTP requests containing delivery context information in CC/PP or UAProf formats. Subsequently DELI has been incorporated into the Apache Cocoon XML publishing framework in order to demonstrate how delivery context information can be used in conjunction with content transformation via XSLT. During this work, it was found that it is cumbersome to match this information using constraints written in XPath. Furthermore there is no easy method of abstraction so that common sets of constraints may be reused in multiple stylesheets. This report describes an alternative mechanism for delivery context matching called capability classes (patent pending). This report outlines how to implement capability classes and how they may be applied to various content specialisation techniques such as content transformation, negotiation or generation. It also compares and contrasts capability classes with device classes and media queries.",
		"language": "en",
		"page": "12",
		"source": "Zotero",
		"title": "Using capability classes to classify and match CC/PP and UAProf profiles",
		"author": [
			{
				"family": "Butler",
				"given": "Mark"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2002",
					4,
					16
				]
			]
		}
	},
	{
		"id": 2,
		"type": "webpage",
		"abstract": "This document details approaches for enriching HTTP interactions with information pertaining to the profiles to which resource representations conform. It surveys approaches that were recently introduced to indicate the profile of a resource representation, and to make representations that conform to a profile discoverable. It introduces a generally applicable approach to negotiate for a resource representation that conforms to a profile preferred by a user agent. That approach leverages the existing content negotiation mechanism but applies it to the profile dimension to which it was previously not applied. The document also shows how a server can convey which profiled representations it is able to accept from a user agent.",
		"language": "en",
		"title": "Indicating, Discovering, Negotiating, and Writing Profiled Representations",
		"URL": "https://tools.ietf.org/html/draft-svensson-profiled-representations-00",
		"author": [
			{
				"family": "Verborgh",
				"given": "Ruben"
			},
			{
				"family": "Svensson",
				"given": "Lars"
			},
			{
				"family": "Sompel",
				"given": "Herbert Van",
				"dropping-particle": "de"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					2,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2021"
				]
			]
		}
	},
	{
		"id": 3,
		"type": "report",
		"abstract": "The Hypertext Transfer Protocol (HTTP) is a stateless applicationlevel protocol for distributed, collaborative, hypertext information systems. This document provides an overview of HTTP architecture and its associated terminology, defines the \"http\" and \"https\" Uniform Resource Identifier (URI) schemes, defines the HTTP/1.1 message syntax and parsing requirements, and describes related security concerns for implementations.",
		"language": "en",
		"note": "DOI: 10.17487/rfc7230",
		"number": "RFC7230",
		"page": "RFC7230",
		"publisher": "RFC Editor",
		"source": "DOI.org (Crossref)",
		"title": "Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing",
		"title-short": "Hypertext Transfer Protocol (HTTP/1.1)",
		"URL": "https://www.rfc-editor.org/info/rfc7230",
		"author": [
			{
				"family": "Fielding",
				"given": "R."
			},
			{
				"family": "Reschke",
				"given": "J."
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					2,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2014",
					6
				]
			]
		}
	},
	{
		"id": 4,
		"type": "report",
		"abstract": "This document defines the SHACL Shapes Constraint Language, a language for validating RDF graphs against a set of conditions. These conditions are provided as shapes and other constructs expressed in the form of an RDF graph. RDF graphs that are used in this manner are called \"shapes graphs\" in SHACL and the RDF graphs that are validated against a shapes graph are called \"data graphs\". As SHACL shape graphs are used to validate that data graphs satisfy a set of conditions they can also be viewed as a description of the data graphs that do satisfy these conditions. Such descriptions may be used for a variety of purposes beside validation, including user interface building, code generation and data integration.",
		"language": "en",
		"title": "Shapes Constraint Language (SHACL)",
		"URL": "https://www.w3.org/TR/shacl/",
		"accessed": {
			"date_parts": [
				[
					"2021",
					2,
					12
				]
			]
		},
		"author": [
			{
				"family": "Knublauch",
				"given": "Holger"
			},
			{
				"family": "Kontokostas",
				"given": "Dimitris"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2017",
					7,
					20
				]
			]
		}
	},
	{
		"id": 5,
		"type": "report",
		"genre": "W3C Recommendation",
		"publisher": "World Wide Web Consortium",
		"title": "SPARQL 1.1 Query Language, W3C Recommendation 21 March 2013",
		"URL": "http://www.w3.org/TR/2013/REC-sparql11-query-20130321/",
		"author": [
			{
				"family": "Harris",
				"given": "Steve"
			},
			{
				"family": "Seaborne",
				"given": "Andy"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2013",
					3,
					21
				]
			]
		}
	},
	{
		"id": 6,
		"type": "report",
		"publisher": "Internet Engineering Task Force",
		"title": "Transparent Content Negotiation in HTTP",
		"URL": "https://datatracker.ietf.org/doc/html/rfc2295",
		"author": [
			{
				"family": "Holtman",
				"given": "K."
			},
			{
				"family": "Mutz",
				"given": "A."
			}
		],
		"issued": {
			"date_parts": [
				[
					"1998",
					3
				]
			]
		}
	},
	{
		"id": 7,
		"type": "report",
		"genre": "W3C Working Draft",
		"publisher": "World Wide Web Consortium",
		"title": "Content Negotiation by Profile",
		"URL": "https://www.w3.org/TR/dx-prof-conneg/",
		"author": [
			{
				"family": "Svensson",
				"given": "Lars G."
			},
			{
				"family": "Atkinson",
				"given": "Rob"
			},
			{
				"family": "Car",
				"given": "Nicholas J."
			}
		],
		"issued": {
			"date_parts": [
				[
					"2019",
					11,
					26
				]
			]
		}
	},
	{
		"id": 8,
		"type": "chapter",
		"abstract": "The RDF data model forms a cornerstone of the Semantic Web technology stack. Although there have been diﬀerent proposals for RDF serialization syntaxes, the underlying simple data model enables great ﬂexibility which allows it to be successfully employed in many diﬀerent scenarios and to form the basis on which other technologies are developed. In order to apply an RDF-based approach in practice it is necessary to communicate the structure of the data that is being stored or represented. Data quality is of paramount importance for the acceptance of RDF as a data representation language and it must be enabled by the use of tools that can check if some data conforms to some speciﬁc structure. There have been several recent proposals for RDF validation languages like ShEx and SHACL. In this chapter, we describe both proposals and enumerate some challenges and trends that we foresee with regards to RDF validation. We devote more space to what we consider one of the main challenges, which is to compare ShEx and SHACL and to understand their underlying foundations. To that end, we propose an intermediate language and show how ShEx and SHACL can be converted to it.",
		"container-title": "Current Trends in Semantic Web Technologies: Theory and Practice",
		"event-place": "Cham",
		"ISBN": "978-3-030-06148-7",
		"language": "en",
		"note": "collection-title: Studies in Computational Intelligence\nDOI: 10.1007/978-3-030-06149-4_6",
		"page": "121-151",
		"publisher": "Springer International Publishing",
		"publisher-place": "Cham",
		"source": "DOI.org (Crossref)",
		"title": "Challenges in RDF Validation",
		"URL": "http://link.springer.com/10.1007/978-3-030-06149-4_6",
		"volume": "815",
		"editor": [
			{
				"family": "Alor-Hernández",
				"given": "Giner"
			},
			{
				"family": "Sánchez-Cervantes",
				"given": "José Luis"
			},
			{
				"family": "Rodríguez-González",
				"given": "Alejandro"
			},
			{
				"family": "Valencia-García",
				"given": "Rafael"
			}
		],
		"author": [
			{
				"family": "Labra-Gayo",
				"given": "Jose Emilio"
			},
			{
				"family": "García-González",
				"given": "Herminio"
			},
			{
				"family": "Fernández-Alvarez",
				"given": "Daniel"
			},
			{
				"family": "Prud’hommeaux",
				"given": "Eric"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					4,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2019"
				]
			]
		}
	},
	{
		"id": 9,
		"type": "paper-conference",
		"abstract": "The Shapes Constraint Language (SHACL) is a recent W3C recommendation language for validating RDF data. Specifically, SHACL documents are collections of constraints that enforce particular shapes on an RDF graph. Previous work on the topic has provided theoretical and practical results for the validation problem, but did not consider the standard decision problems of satisfiability and containment, which are crucial for verifying the feasibility of the constraints and important for design and optimization purposes. In this paper, we undertake a thorough study of the different features of SHACL by providing a translation to a new first-order language, called Open image in new window , that precisely captures the semantics of SHACL w.r.t. satisfiability and containment. We study the interaction of SHACL features in this logic and provide the detailed map of decidability and complexity results of the aforementioned decision problems for different SHACL sublanguages. Notably, we prove that both problems are undecidable for the full language, but we present decidable combinations of interesting features.",
		"collection-title": "Lecture Notes in Computer Science",
		"container-title": "The Semantic Web – ISWC 2020",
		"DOI": "10.1007/978-3-030-62419-4_27",
		"event-place": "Cham",
		"ISBN": "978-3-030-62419-4",
		"language": "en",
		"page": "474-493",
		"publisher": "Springer International Publishing",
		"publisher-place": "Cham",
		"source": "Springer Link",
		"title": "SHACL Satisfiability and Containment",
		"author": [
			{
				"family": "Pareti",
				"given": "Paolo"
			},
			{
				"family": "Konstantinidis",
				"given": "George"
			},
			{
				"family": "Mogavero",
				"given": "Fabio"
			},
			{
				"family": "Norman",
				"given": "Timothy J."
			}
		],
		"editor": [
			{
				"family": "Pan",
				"given": "Jeff Z."
			},
			{
				"family": "Tamma",
				"given": "Valentina"
			},
			{
				"family": "Amato",
				"given": "Claudia",
				"non-dropping-particle": "d’"
			},
			{
				"family": "Janowicz",
				"given": "Krzysztof"
			},
			{
				"family": "Fu",
				"given": "Bo"
			},
			{
				"family": "Polleres",
				"given": "Axel"
			},
			{
				"family": "Seneviratne",
				"given": "Oshani"
			},
			{
				"family": "Kagal",
				"given": "Lalana"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2020"
				]
			]
		}
	},
	{
		"id": 10,
		"type": "paper-conference",
		"abstract": "Semantic Web Services enable the dynamic discovery of services based on a formal, explicit specification of the requester needs. The actual Web Services that will be used to satisfy the requester's goal are selected at run-time and, therefore, they are not known beforehand. As a consequence, determining whether the selected services can be trusted becomes an essential issue. In this paper, we propose the use of the Peertrust language to decide if trust can be established between the requester and the service provider. We add modelling elements to the Web Service Modeling Ontology (WSMO) in order to include trust information in the description of Semantic Web Services. In this scenario, we discuss different registry architectures and their implications for the matchmaking process. In addition, we present a matching algorithm for the trust policies introduced.",
		"container-title": "1st International Workshop on Semantic Web Services and Web Process Composition in Conjunction with the 2004 Ieee International Conference on Web Services",
		"page": "81–95",
		"publisher": "Springer",
		"source": "CiteSeer",
		"title": "Trust Negotiation for Semantic Web Services",
		"author": [
			{
				"family": "Olmedilla",
				"given": "Daniel"
			},
			{
				"family": "Lara",
				"given": "Rubén"
			},
			{
				"family": "Polleres",
				"given": "Axel"
			},
			{
				"family": "Lausen",
				"given": "Holger"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2004"
				]
			]
		}
	},
	{
		"id": 11,
		"type": "article-journal",
		"abstract": "This paper presents a new privacy negotiation mechanism for an IoT environment that is both efficient and practical to cope with the IoT special need of seamlessness. This mechanism allows IoT users to express and enforce their personal privacy preferences in a seamless manner while interacting with IoT deployments. A key contribution of the paper is that it addresses the privacy concerns of individual users as well as a group of users where privacy preferences of all individual users are combined into a group privacy profile to be negotiated with the IoT owner. In addition, the proposed mechanism satisfies the privacy requirements of the IoT deployment owner. Finally, the proposed privacy mechanism is agnostic to the actual IoT architecture and can be used over a user-managed, edge-managed or a cloud-managed IoT architecture. Prototypes of the proposed mechanism have been implemented for each of these three architectures, and the results show the capability of the protocol to negotiate privacy while adding insignificant time overhead.",
		"container-title": "Journal of Ambient Intelligence and Humanized Computing",
		"DOI": "10.1007/s12652-021-02959-7",
		"ISSN": "1868-5137, 1868-5145",
		"journalAbbreviation": "J Ambient Intell Human Comput",
		"note": "arXiv: 2103.07781",
		"source": "arXiv.org",
		"title": "Incorporating Individual and Group Privacy Preferences in the Internet of Things",
		"URL": "http://arxiv.org/abs/2103.07781",
		"author": [
			{
				"family": "Alanezi",
				"given": "Khaled"
			},
			{
				"family": "Mishra",
				"given": "Shivakant"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					5,
					3
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2021",
					3,
					4
				]
			]
		}
	},
	{
		"id": 12,
		"type": "chapter",
		"abstract": "The Shapes Constraint Language (SHACL) allows for formalizing constraints over RDF data graphs. A shape groups a set of constraints that may be fulfilled by nodes in the RDF graph. We investigate the problem of containment between SHACL shapes. One shape is contained in a second shape if every graph node meeting the constraints of the first shape also meets the constraints of the second. To decide shape containment, we map SHACL shape graphs into description logic axioms such that shape containment can be answered by description logic reasoning. We identify several, increasingly tight syntactic restrictions of SHACL for which this approach becomes sound and complete.",
		"container-title": "The Semantic Web – ISWC 2020",
		"event-place": "Cham",
		"ISBN": "978-3-030-62418-7",
		"language": "en",
		"note": "collection-title: Lecture Notes in Computer Science\nDOI: 10.1007/978-3-030-62419-4_21",
		"page": "366-383",
		"publisher": "Springer International Publishing",
		"publisher-place": "Cham",
		"source": "DOI.org (Crossref)",
		"title": "Deciding SHACL Shape Containment Through Description Logics Reasoning",
		"URL": "https://link.springer.com/10.1007/978-3-030-62419-4_21",
		"volume": "12506",
		"editor": [
			{
				"family": "Pan",
				"given": "Jeff Z."
			},
			{
				"family": "Tamma",
				"given": "Valentina"
			},
			{
				"family": "Amato",
				"given": "Claudia",
				"non-dropping-particle": "d’"
			},
			{
				"family": "Janowicz",
				"given": "Krzysztof"
			},
			{
				"family": "Fu",
				"given": "Bo"
			},
			{
				"family": "Polleres",
				"given": "Axel"
			},
			{
				"family": "Seneviratne",
				"given": "Oshani"
			},
			{
				"family": "Kagal",
				"given": "Lalana"
			}
		],
		"author": [
			{
				"family": "Leinberger",
				"given": "Martin"
			},
			{
				"family": "Seifer",
				"given": "Philipp"
			},
			{
				"family": "Rienstra",
				"given": "Tjitze"
			},
			{
				"family": "Lämmel",
				"given": "Ralf"
			},
			{
				"family": "Staab",
				"given": "Steffen"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					5,
					27
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2020"
				]
			]
		}
	},
	{
		"id": 13,
		"type": "report",
		"abstract": "The Profiles Vocabulary is an RDF vocabulary created to allow the machine-readable description of profiles of specifications for information resources. It can be used to describe profile hierarchies wherein profiles of specifications may themselves have profiles indicated. It can also link multiple profile resources that make up a profile - guidelines, validation tools, schemas, term lists and so on - to it and allows for those profile resources to be described with formats, roles, and digital artifacts.\n\nThe namespace for PROF terms is http://www.w3.org/ns/dx/prof/.\nThe PROF vocabulary, defined in OWL and encoded in RDF Turtle, is available at prof.ttl.",
		"title": "The Profiles Vocabulary",
		"URL": "https://www.w3.org/TR/dx-prof/",
		"accessed": {
			"date_parts": [
				[
					"2021",
					5,
					27
				]
			]
		},
		"author": [
			{
				"family": "Atkinson",
				"given": "Rob"
			},
			{
				"family": "Car",
				"given": "Nicholas J."
			}
		],
		"issued": {
			"date_parts": [
				[
					"2019",
					12,
					18
				]
			]
		}
	},
	{
		"id": 14,
		"type": "report",
		"abstract": "The Shape Expressions (ShEx) language describes RDF nodes and graph structures. A node constraint describes an RDF node (IRI, blank node or literal) and a shape describes the triples involving nodes in an RDF graph. These descriptions identify predicates and their associated cardinalities and datatypes. ShEx shapes can be used to communicate data structures associated with some process or interface, generate or validate data, or drive user interfaces.\n\nThis document defines the ShEx language. See the Shape Expressions Primer for a non-normative description of ShEx.",
		"title": "Shape Expressions Language 2.1",
		"URL": "http://shex.io/shex-semantics/",
		"accessed": {
			"date_parts": [
				[
					"2021",
					5,
					27
				]
			]
		},
		"author": [
			{
				"family": "Prud'hommeaux",
				"given": "Eric"
			},
			{
				"family": "Boneva",
				"given": "Iovka"
			},
			{
				"family": "Labra Gayo",
				"given": "Jose Emilio"
			}, {
				"family": "Kellogg",
				"given": "Gregg"
			},
		],
		"issued": {
			"date_parts": [
				[
					"2019",
					10,
					8
				]
			]
		}
	},
	{
		"id": 15,
		"type": "paper-conference",
		"collection-title": "Lecture notes in computer science",
		"container-title": "Conceptual modeling - 38th international conference, ER 2019, salvador, brazil, november 4-7, 2019, proceedings",
		"DOI": "10.1007/978-3-030-33223-5\\_37",
		"note": "tex.bibsource: dblp computer science bibliography, https://dblp.org\ntex.biburl: https://dblp.org/rec/conf/er/BonifatiFGHOV19.bib\ntex.timestamp: Fri, 27 Mar 2020 08:55:16 +0100",
		"page": "448–456",
		"publisher": "Springer",
		"title": "Schema validation and evolution for graph databases",
		"URL": "https://doi.org/10.1007/978-3-030-33223-5_37",
		"volume": "11788",
		"author": [
			{
				"family": "Bonifati",
				"given": "Angela"
			},
			{
				"family": "Furniss",
				"given": "Peter"
			},
			{
				"family": "Green",
				"given": "Alastair"
			},
			{
				"family": "Harmer",
				"given": "Russ"
			},
			{
				"family": "Oshurko",
				"given": "Eugenia"
			},
			{
				"family": "Voigt",
				"given": "Hannes"
			}
		],
		"editor": [
			{
				"family": "Laender",
				"given": "Alberto H. F."
			},
			{
				"family": "Pernici",
				"given": "Barbara"
			},
			{
				"family": "Lim",
				"given": "Ee-Peng"
			},
			{
				"family": "Oliveira",
				"given": "José Palazzo M.",
				"non-dropping-particle": "de"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2019"
				]
			]
		}
	},
	{
		"id": 16,
		"type": "article-journal",
		"abstract": "We address the challenges of building a good content adaptation service for mobile devices and propose a decision engine that is user-centric with QoS awareness, which can automatically negotiate for the appropriate adaptation decision to use in the synthesis of an optimal adapted version. The QoS-sensitive approach complements the lossy nature of the transcoding operations. The decision engine will look for the best trade off among various parameters in order to reduce the loss of quality in various domains. Quantitative methods are suggested to measure the QoS of the content versions in various quality domains. Based on the particular user perception and other contextual information on the client capability, the network connection, and the requested content, the proposed negotiation algorithm will determine a content version with a good aggregate score. We have built a prototype document adaptation system for PDF documents to demonstrate the viability of our approach.",
		"container-title": "IEEE Transactions on Software Engineering",
		"DOI": "10.1109/TSE.2003.1265524",
		"ISSN": "1939-3520",
		"issue": "12",
		"note": "event: IEEE Transactions on Software Engineering",
		"page": "1100-1111",
		"source": "IEEE Xplore",
		"title": "User-centric content negotiation for effective adaptation service in mobile computing",
		"volume": "29",
		"author": [
			{
				"family": "Lum",
				"given": "Wai Yip"
			},
			{
				"family": "Lau",
				"given": "F.C.M."
			}
		],
		"URL": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1265524",
		"issued": {
			"date_parts": [
				[
					"2003",
					12
				]
			]
		}
	},
	{
		"id": 17,
		"type": "webpage",
		"title": "Composite Capability/Preference Profiles (CC/PP): Structure and Vocabularies 1.0",
		"URL": "https://www.w3.org/TR/CCPP-struct-vocab/",
		"author": [
			{
				"family": "Graham",
				"given": "Klyne"
			},
			{
				"family": "Reynolds",
				"given": "Franklin"
			},
			{
				"family": "Woodrow",
				"given": "Chris"
			},
			{
				"family": "Ohto",
				"given": "Hidetaka"
			},
			{
				"family": "Hjelm",
				"given": "Johan"
			},
			{
				"family": "H. Butler",
				"given": "Mark"
			},
			{
				"family": "Tran",
				"given": "Luu"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					7,
					19
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2004",
					1,
					15
				]
			]
		}
	},
	{
		"id": 18,
		"type": "chapter",
		"abstract": "ShEx (Shape Expressions) is a language for expressing constraints on RDF graphs. We consider the problem of SPARQL query containment in the presence of ShEx constraints. We first investigate the complexity of the problem according to the fragments considered for SPARQL queries and for ShEx constraints. In particular, we show that the complexity of SPARQL query containment remains the same with or without ShEx constraints. We develop two radically different approaches for solving the problem and we evaluate them. The first approach relies on the joint use of a ShEx validator and a tool for checking query containment without constraints. In a second approach, we show how the problem can be solved by a reduction to a fragment of first-order logic with two variables. This alternative approach allows to take advantage of any of the many existing FOL theorem provers in this context. We evaluate how the two approaches compare experimentally, and report on lessons learned. To the best of our knowledge, this is the first work addressing SPARQL query containment in the presence of ShEx constraints.",
		"container-title": "Advances in Databases and Information Systems",
		"event-place": "Cham",
		"ISBN": "978-3-319-66916-8",
		"language": "en",
		"note": "collection-title: Lecture Notes in Computer Science\nDOI: 10.1007/978-3-319-66917-5_23",
		"page": "343-356",
		"publisher": "Springer International Publishing",
		"publisher-place": "Cham",
		"source": "DOI.org (Crossref)",
		"title": "SPARQL Query Containment with ShEx Constraints",
		"URL": "http://link.springer.com/10.1007/978-3-319-66917-5_23",
		"volume": "10509",
		"editor": [
			{
				"family": "Kirikova",
				"given": "Mārīte"
			},
			{
				"family": "Nørvåg",
				"given": "Kjetil"
			},
			{
				"family": "Papadopoulos",
				"given": "George A."
			}
		],
		"author": [
			{
				"family": "Abbas",
				"given": "Abdullah"
			},
			{
				"family": "Genevès",
				"given": "Pierre"
			},
			{
				"family": "Roisin",
				"given": "Cécile"
			},
			{
				"family": "Layaïda",
				"given": "Nabil"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					9,
					13
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2017"
				]
			]
		}
	},
	{
		"id": 19,
		"type": "article-journal",
		"container-title": "RFC",
		"DOI": "10.17487/RFC2396",
		"page": "1–40",
		"abstract": `A Uniform Resource Identifier (URI) is a compact sequence of
		characters that identifies an abstract or physical resource.  This
		specification defines the generic URI syntax and a process for
		resolving URI references that might be in relative form, along with
		guidelines and security considerations for the use of URIs on the
		Internet.  The URI syntax defines a grammar that is a superset of all
		valid URIs, allowing an implementation to parse the common components
		of a URI reference without knowing the scheme-specific requirements
		of every possible identifier.  This specification does not define a
		generative grammar for URIs; that task is performed by the individual
		specifications of each URI scheme.`,
		"source": "DBLP Computer Science Bibliography",
		"title": "Uniform Resource Identifiers (URI): Generic Syntax",
		"title-short": "Uniform Resource Identifiers (URI)",
		"volume": "2396",
		"URL": "https://datatracker.ietf.org/doc/html/rfc3986",
		"author": [
			{
				"family": "Berners-Lee",
				"given": "Tim"
			},
			{
				"family": "Fielding",
				"given": "Roy T."
			},
			{
				"family": "Masinter",
				"given": "Larry"
			}
		],
		"issued": {
			"date_parts": [
				[
					"1998"
				]
			]
		}
	},
	{
		"id": 20,
		"type": "report",
		"abstract": "JSON Schema is a JSON-based format for describing JSON data using various vocabularies. This document specifies a vocabulary for annotating JSON documents with hyperlinks. These hyperlinks include attributes describing how to manipulate and interact with remote resources through hypermedia environments such as HTTP, as well as determining whether the link is usable based on the instance value. The hyperlink serialization format described in this document is also usable independent of JSON Schema.",
		"genre": "Internet Draft",
		"note": "number-of-pages: 58",
		"number": "draft-handrews-json-schema-hyperschema-02",
		"publisher": "Internet Engineering Task Force",
		"source": "IETF",
		"title": "JSON Hyper-Schema: A Vocabulary for Hypermedia Annotation of JSON",
		"title-short": "JSON Hyper-Schema",
		"URL": "https://datatracker.ietf.org/doc/draft-handrews-json-schema-hyperschema-02",
		"author": [
			{
				"family": "Andrews",
				"given": "Henry"
			},
			{
				"family": "Wright",
				"given": "Austin"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					9,
					28
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2019",
					9,
					17
				]
			]
		}
	},
	{
		"id": 21,
		"type": "book",
		"event-place": "Beijing Köln",
		"ISBN": "978-1-4493-1050-9",
		"language": "en",
		"number-of-pages": "94",
		"publisher": "O'Reilly",
		"publisher-place": "Beijing Köln",
		"source": "K10plus ISBN",
		"title": "REST API design rulebook: designing consistent RESTful Web Service Interfaces",
		"title-short": "REST API design rulebook",
		"author": [
			{
				"family": "Massé",
				"given": "Mark H."
			},
			{
				"family": "Massé",
				"given": "Mark"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2012"
				]
			]
		}
	},
	{
		"id": 22,
		"type": "article-journal",
		"abstract": "In many cases, there are several ways to describe a resource using a structured format such as\nXML or one of the RDF serialisations. In the case of XML documents, for instance, the same content\ncan be encoded using one of several DTDs or XML Schemas, whereas in RDF there is a wide choice\nof RDF vocabularies (classes and properties) available to describe resources of the same type. E.\ng. do all three of foaf, the BBC Core Ontology and the DBPedia ontology contain classes and\nproperties to describe persons. When a User Agent (UA) initiates a request, e. g. a GET request to\nretrieve or a PUT request to create or replace a resource, neither the UA nor the server have any\npossibility to exchange information on how the transmitted resource will be structured. One\nsolution could be to define two new http headers: Accept-Schema and Schema.",
		"language": "en",
		"page": "5",
		"source": "Zotero",
		"title": "An http Header for Metadata Schema Negotiation",
		"author": [
			{
				"family": "Svensson",
				"given": "Lars G"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2016"
				]
			]
		}
	},
	{
		"id": 23,
		"type": "webpage",
		"abstract": "This document defines two new HTTP headers \"Content-Profile\" and \"Accept-Profile\" that enable User Agents and hosts to indicate and negotiate the profile used for representing a specific resource.  In this context, a profile is a description of the structural and/or semantic constraints of a group of documents in addition to the syntactical interpretation provided by more generic MIME types.  Examples of profiles include Dublin Core Application Profiles, XML Schemata, and RDF Shape Expressions.  This document further defines and registers the \"profile\" parameter for the HTTP \"Link\" header and suggests a best practice for the use of the new headers together with the \"Link\" header for the purposes of performing content negotiation and pointing clients to alternate representations.",
		"language": "en",
		"title": "Negotiating Profiles in HTTP",
		"URL": "https://profilenegotiation.github.io/I-D-Accept--Schema/I-D-accept-schema",
		"author": [
			{
				"family": "Svensson",
				"given": "Lars G."
			},
			{
				"family": "Verborgh",
				"given": "Ruben"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					4
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2017",
					9
				]
			]
		}
	},
	{
		"id": 24,
		"type": "paper-conference",
		"container-title": "Proceedings of the workshop on smart descriptions & smarter vocabularies",
		"title": "Your JSON is not my JSON – A case for more fine-grained content negotiation",
		"URL": "https://ruben.verborgh.org/articles/fine-grained-content-negotiation/",
		"author": [
			{
				"family": "Verborgh",
				"given": "Ruben"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2016",
					11
				]
			]
		}
	},
	{
		"id": 25,
		"type": "report",
		"abstract": "The Social Web Protocols are a collection of standards which enable various aspects of decentralised social interaction on the Web. This document describes the purposes of each, and how they fit together.",
		"language": "en",
		"title": "Social Web Protocols",
		"URL": "https://www.w3.org/TR/social-web-protocols/",
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					8
				]
			]
		}
		, "author": [
			{
				"family": "Guy",
				"given": "Amy"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2017",
					12,
					25
				]
			]
		}
	},
	{
		"id": 26,
		"type": "report",
		"abstract": "WebSub provides a common mechanism for communication between publishers of any kind of Web content and their subscribers, based on HTTP web hooks. Subscription requests are relayed through hubs, which validate and verify the request. Hubs then distribute new and updated content to subscribers when it becomes available. WebSub was previously known as PubSubHubbub.",
		"language": "en",
		"title": "WebSub",
		"URL": "https://www.w3.org/TR/websub/",
		"author": [
			{
				"family": "Genestoux",
				"given": "Julien"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					8
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2018",
					1,
					23
				]
			]
		}
	},
	{
		"id": 27,
		"type": "paper-conference",
		"language": "English",
		"title": "CC/PP exchange protocol using HTTP Extension Framework",
		"URL": "https://www.w3.org/TR/NOTE-CCPPexchange",
		"author": [
			{
				"family": "Ohto",
				"given": "Hidetaka"
			},
			{
				"family": "Hjelm",
				"given": "Johan"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					8
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"1999"
				]
			]
		}
	},
	{
		"id": 28,
		"type": "report",
		"language": "english"
		, "author": [
			{
				"family": "",
				"given": "Open Mobile Alliance"
			}
		],
		"title": "User agent profile",
		"URL": "https://www.openmobilealliance.org/release/UAProf/OMA-UAProf-V2_0-20030520-C.PDF",
		"issued": {
			"date_parts": [
				[
					"2003",
					5
				]
			]
		},
		"citation-key": "uaprof_oma:2003"
	},
	{
		"id": 29,
		"type": "paper-conference",
		"abstract": "The introduction of the concept of QoS has led to an extension of the traditional concepts of service and service specification. However, the design of QoS support is usually done without a systematic approach, leading to concepts of QoS support ranging from basic QoS monitoring capabilities to hard real-time guarantees. In more advanced QoS support, intermediate layers should be designed in a way that enables the masking or controlled handling of sporadic QoS violations. To implement this degradation path support across multiple layers, a negotiation of preferred and supportable failure semantics is a requirement. To realize these advanced QoS support features, not only new QoS control mechanisms within the layers have to be developed but the semantics of QoS negotiation protocols between layers must be better understood and subsequently extended. A framework formally based on set theory and relations is presented that allows the specification of QoS hierarchies including a well-defined failure type model. The framework supports the development of QoS negotiation protocols and can be used as a formal base for a structured system analysis.",
		"container-title": "Proceedings. IEEE INFOCOM '98, the Conference on Computer Communications. Seventeenth Annual Joint Conference of the IEEE Computer and Communications Societies. Gateway to the 21st Century (Cat. No.98",
		"DOI": "10.1109/INFCOM.1998.665064",
		"event": "Proceedings. IEEE INFOCOM '98, the Conference on Computer Communications. Seventeenth Annual Joint Conference of the IEEE Computer and Communications Societies. Gateway to the 21st Century (Cat. No.98",
		"note": "ISSN: 0743-166X",
		"page": "472-479 vol.2",
		"source": "IEEE Xplore",
		"title": "Towards formal semantics for QoS support",
		"volume": "2",
		"author": [
			{
				"family": "Richter",
				"given": "J.-P."
			},
			{
				"family": "De Meer",
				"given": "H."
			}
		],
		"issued": {
			"date_parts": [
				[
					"1998",
					3
				]
			]
		}
	},
	{
		"id": 30,
		"type": "paper-conference",
		"abstract": "We propose a method that can find the optimal tradeoff point between transcoding overhead (CPU cost) and storage needed for the various pre-processed content variants (I/O cost). The method selectively pre-adapts a subset of content variants and leaves the generation of the residue to dynamic content adaptation with this pre-adapted subset as an input. We prove bounds regarding the optimality of the algorithm employed. The proposed model creates a collaborative environment across the components of client, proxy and server, based on which we study the distribution of adaptation complexity across these components. We use simulation to verify the projected benefits. The method has been successfully implemented in a trial PDF document content adaptation system.",
		"collection-title": "MobiCom '02",
		"container-title": "Proceedings of the 8th annual international conference on Mobile computing and networking",
		"DOI": "10.1145/570645.570675",
		"event-place": "New York, NY, USA",
		"ISBN": "978-1-58113-486-5",
		"page": "239–250",
		"publisher": "Association for Computing Machinery",
		"publisher-place": "New York, NY, USA",
		"source": "ACM Digital Library",
		"title": "On balancing between transcoding overhead and spatial consumption in content adaptation",
		"URL": "https://doi.org/10.1145/570645.570675",
		"author": [
			{
				"family": "Lum",
				"given": "Wai Yip"
			},
			{
				"family": "Lau",
				"given": "Francis C.M."
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					8
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2002",
					9,
					23
				]
			]
		}
	},
	{
		"id": 31,
		"type": "article-journal",
		"container-title": "RFC",
		"DOI": "10.17487/RFC5234",
		"page": "1–16",
		"source": "DBLP Computer Science Bibliography",
		"title": "Augmented BNF for Syntax Specifications: ABNF",
		"title-short": "Augmented BNF for Syntax Specifications",
		"volume": "5234",
		"author": [
			{
				"family": "Crocker",
				"given": "Dave"
			},
			{
				"family": "Overell",
				"given": "Paul"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2008"
				]
			]
		}
	},
	{
		"id": 32,
		"type": "paper-conference",
		"language": "English",
		"title": "CC/PP: A user side framework for enhanced content negotiation",
		"URL": "https://www.w3.org/TR/NOTE-CCPP/",
		"author": [
			{
				"family": "Reynolds",
				"given": "Franklin"
			},
			{
				"family": "Johan",
				"given": "Hjelm"
			},
			{
				"family": "Spencer",
				"given": "Dawkins"
			},
			{
				"family": "Sandeep",
				"given": "Singhal"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"1999"
				]
			]
		}
	},
	{
		"id": 33,
		"type": "paper-conference",
		"collection-title": "Lecture Notes in Computer Science",
		"container-title": "Mobile Data Management, Second International Conference, MDM 2001, Hong Kong, China, January 8-10, 2001, Proceedings",
		"DOI": "10.1007/3-540-44498-X_20",
		"page": "239–245",
		"publisher": "Springer",
		"source": "DBLP Computer Science Bibliography",
		"title": "CC/PP for Content Negotiation and Contextualization",
		"URL": "https://doi.org/10.1007/3-540-44498-X\\_20",
		"volume": "1987",
		"author": [
			{
				"family": "Suryanarayana",
				"given": "Lalitha"
			},
			{
				"family": "Hjelm",
				"given": "Johan"
			}
		],
		"editor": [
			{
				"family": "Tan",
				"given": "Kian-Lee"
			},
			{
				"family": "Franklin",
				"given": "Michael J."
			},
			{
				"family": "Lui",
				"given": "John C. S."
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2001"
				]
			]
		}
	},
	{
		"id": 34,
		"type": "paper-conference",
		"collection-title": "LNI",
		"container-title": "Information Systems Technology and its Applications, International Conference ISTA'2001, June 13-15, 2001, Kharkiv, Ukraine, Proceedings",
		"page": "185–198",
		"publisher": "GI",
		"source": "DBLP Computer Science Bibliography",
		"title": "CC/PP Negotiation of a mobile station in MExE service environment",
		"URL": "https://dl.gi.de/20.500.12116/30736",
		"volume": "P-2",
		"author": [
			{
				"family": "Sihvonen",
				"given": "Markus"
			}
		],
		"editor": [
			{
				"family": "Godlevsky",
				"given": "Mikhail"
			},
			{
				"family": "Mayr",
				"given": "Heinrich C."
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2001"
				]
			]
		}
	},
	{
		"id": 35,
		"type": "paper-conference",
		"container-title": "Proceedings of the ACIS Fourth International Conference on Software Engineering, Artificial Intelligence, Networking and Parallel/Distributed Computing (SNPD'03), October 16-18, 2003, Lübeck, Germany",
		"page": "413–420",
		"publisher": "ACIS",
		"source": "DBLP Computer Science Bibliography",
		"title": "Using CC/PP to Manage Context Awareness: The @Terminals Approach",
		"title-short": "Using CC/PP to Manage Context Awareness",
		"author": [
			{
				"family": "Nitto",
				"given": "Elisabetta Di"
			},
			{
				"family": "Sassaroli",
				"given": "Giordano"
			},
			{
				"family": "Zuccalà",
				"given": "Maurilio"
			}
		],
		"editor": [
			{
				"family": "Dosch",
				"given": "Walter"
			},
			{
				"family": "Lee",
				"given": "Roger Y."
			}
		],
		"issued": {
			"date_parts": [
				[
					"2003"
				]
			]
		}
	},
	{
		"id": 36,
		"type": "paper-conference",
		"collection-title": "Lecture Notes in Computer Science",
		"container-title": "Mobile Agents for Telecommunication Applications, 5th International Workshop, MATA 2003, Marakech, Morocco, October 8-10, 2003, Proceedings",
		"DOI": "10.1007/978-3-540-39646-8_10",
		"page": "99–110",
		"publisher": "Springer",
		"source": "DBLP Computer Science Bibliography",
		"title": "Delivery Context Negotiated by Mobile Agents Using CC/PP",
		"URL": "https://doi.org/10.1007/978-3-540-39646-8\\_10",
		"volume": "2881",
		"author": [
			{
				"family": "Gil",
				"given": "Rosa"
			},
			{
				"family": "García",
				"given": "Roberto"
			},
			{
				"family": "Delgado",
				"given": "Jaime"
			}
		],
		"editor": [
			{
				"family": "Horlait",
				"given": "Eric"
			},
			{
				"family": "Magedanz",
				"given": "Thomas"
			},
			{
				"family": "Glitho",
				"given": "Roch H."
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2003"
				]
			]
		}
	},
	{
		"id": 37,
		"type": "article-journal",
		"abstract": "Over the past several years, the popularity of the World Wide Web (WWW) has steadily increased. Unfortunately, as a result of over-loaded servers and lack of bandwidth between clients and servers, response times observed by end users have also steadily increased. Response times are often so unbearable that the popular press has relabeled the \"World Wide Web\" the \"World Wide Wait\". In this paper, we propose the use of content negotiation to allow clients and servers to tune response times to meet user demands. In our system, a client can negotiate content to match the bandwidth available between the server and itself. Clients obtain information about the available bandwidth from a SPAND performance predic-tion server [10]. When the available bandwidth is low or the origi-nal page is large, the client requests a smaller version of the document to reduce the response time. Our experiments show that the client is able to identify the subset of transfers that will perform poorly and that transferring a smaller amount of information on these connections helps improve the overall response time. In our system, servers that are limited by the bandwidth leaving their site reduce the quality and thereby the size of the documents being transferred. This allows the servers to serve many more requests when they are under heavy load. Our measurements show that the benefits can be significant, but are very dependent on the ratio of negotiable to non-negotiable content. For example, in a typical mix of 60% image or other negotiable content, a server can increase the number of requests it handles by 50%. When 90% of the content is negotiable, a fourfold increase in Web server throughput is possi-ble.",
		"source": "ResearchGate",
		"title": "Benefits of transparent content negotiation in HTTP",
		"author": [
			{
				"family": "Seshan",
				"given": "Srinivasan"
			},
			{
				"family": "Stemm",
				"given": "Mark"
			},
			{
				"family": "Katz",
				"given": "Randy"
			}
		],
		"URL": "https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.182.2064&rep=rep1&type=pdf",
		"issued": {
			"date_parts": [
				[
					"1998",
					9,
					26
				]
			]
		}
	},
	{
		"id": 38,
		"type": "webpage",
		"abstract": "Semantic Scholar extracted view of &quot;Client-Assisted Memento Aggregation Using the Prefer Header&quot; by Mat Kelly et al.",
		"language": "en",
		"title": "Client-Assisted Memento Aggregation Using the Prefer Header",
		"URL": "https://www.semanticscholar.org/paper/Client-Assisted-Memento-Aggregation-Using-the-Kelly-Alam/ccd611f88f49eba8c2ca02b6a687a6d3a212db52",
		"author": [
			{
				"family": "Kelly",
				"given": "Mat"
			},
			{
				"family": "Alam",
				"given": "Sawood"
			},
			{
				"family": "Nelson",
				"given": "Michael L."
			},
			{
				"family": "Weigle",
				"given": "M."
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2018"
				]
			]
		}
	},
	{
		"id": 39,
		"type": "paper-conference",
		"container-title": "Proceedings of the 38th ACM SIGMOD-SIGACT-SIGAI Symposium on Principles of Database Systems, PODS 2019, Amsterdam, The Netherlands, June 30 - July 5, 2019",
		"DOI": "10.1145/3294052.3319687",
		"page": "303–319",
		"publisher": "ACM",
		"source": "DBLP Computer Science Bibliography",
		"title": "Containment of Shape Expression Schemas for RDF",
		"author": [
			{
				"family": "Staworko",
				"given": "Slawek"
			},
			{
				"family": "Wieczorek",
				"given": "Piotr"
			}
		],
		"editor": [
			{
				"family": "Suciu",
				"given": "Dan"
			},
			{
				"family": "Skritek",
				"given": "Sebastian"
			},
			{
				"family": "Koch",
				"given": "Christoph"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2019"
				]
			]
		}
	},
	{
		"id": 40,
		"type": "article-journal",
		"container-title": "Semantic Web",
		"DOI": "10.3233/SW-180305",
		"issue": "1",
		"page": "95–114",
		"source": "DBLP Computer Science Bibliography",
		"title": "Best practices for publishing, retrieving, and using spatial data on the web",
		"volume": "10",
		"abstract": `Data owners are creating an ever richer set of information resources online,
			and these are being used for more and more applications.
			Spatial data on the Web is becoming ubiquitous and voluminous with the rapid growth of
			location-based services, spatial technologies, dynamic location-based data and services
			published by different organizations. However, the heterogeneity and the peculiarities
			of spatial data, such as the use of different coordinate reference systems,
			make it difficult for data users, Web applications, and services to discover,
			interpret and use the information in the large and distributed system that is the Web.
			To make spatial data more effectively available, this paper summarizes the work of the
			joint W3C/OGC Working Group on Spatial Data on the Web that identifies 14 best practices 
			for publishing spatial data on the Web. The paper extends that work by presenting 
			the identified challenges and rationale for selection of the recommended best practices,
			framed by the set of principles that guided the selection. It describes best practices 
			that are employed to enable publishing, discovery and retrieving (querying) spatial data on the Web,
			and identifies some areas where a best practice has not yet emerged.`,
		"URL": "http://www.semantic-web-journal.net/system/files/swj1711.pdf",
		"author": [
			{
				"family": "Brink",
				"given": "Linda",
				"dropping-particle": "van den"
			},
			{
				"family": "Barnaghi",
				"given": "Payam M."
			},
			{
				"family": "Tandy",
				"given": "Jeremy"
			},
			{
				"family": "Atemezing",
				"given": "Ghislain"
			},
			{
				"family": "Atkinson",
				"given": "Rob"
			},
			{
				"family": "Cochrane",
				"given": "Byron"
			},
			{
				"family": "Fathy",
				"given": "Yasmin"
			},
			{
				"family": "García-Castro",
				"given": "Raúl"
			},
			{
				"family": "Haller",
				"given": "Armin"
			},
			{
				"family": "Harth",
				"given": "Andreas"
			},
			{
				"family": "Janowicz",
				"given": "Krzysztof"
			},
			{
				"family": "Kolozali",
				"given": "Sefki"
			},
			{
				"family": "Leeuwen",
				"given": "Bart",
				"dropping-particle": "van"
			},
			{
				"family": "Lefrançois",
				"given": "Maxime"
			},
			{
				"family": "Lieberman",
				"given": "Joshua"
			},
			{
				"family": "Perego",
				"given": "Andrea"
			},
			{
				"family": "Phuoc",
				"given": "Danh Le"
			},
			{
				"family": "Roberts",
				"given": "Bill"
			},
			{
				"family": "Taylor",
				"given": "Kerry"
			},
			{
				"family": "Troncy",
				"given": "Raphaël"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2019"
				]
			]
		}
	},
	{
		"id": 41,
		"type": "paper-conference",
		"abstract": "This document provides Best Practices related to the publication and usage of data on the Web designed to help support a self-sustaining ecosystem. Data should be discoverable and understandable by humans and machines. Where data is used in some way, whether by the originator of the data or by an external party, such usage should also be discoverable and the efforts of the data publisher recognized. In short, following these Best Practices will facilitate interaction between publishers and consumers.",
		"title": "Data on the Web Best Practices",
		"URL": "https://www.w3.org/TR/2017/REC-dwbp-20170131/",
		"author": [
			{
				"family": "Farias Lóscio",
				"given": "Bernadette"
			},
			{
				"family": "Burle",
				"given": "Caroline"
			},
			{
				"family": "Calegari",
				"given": "Newton"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2017",
					1,
					31
				]
			]
		}
	},
	{
		"id": 42,
		"type": "paper-conference",
		"abstract": "Knowledge Graphs (KGs) have proliferated on the Web since the introduction of knowledge panels to Google search in 2012. KGs are large data-first graph databases with weak inference rules and weakly-constraining data schemes. SHACL, the Shapes Constraint Language, is a W3C recommendation for expressing constraints on graph data as shapes. SHACL shapes serve to validate a KG, to underpin manual KG editing tasks and to offer insight into KG structure. \nWe introduce Inverse Open Path (IOP) rules, a predicate logic formalism which presents specific shapes in the form of paths over connected entities. Although IOP rules express simple shape patterns, they can be augmented with minimum cardinality constraints and also used as a building block for more complex shapes, such as trees and other rule patterns. We define quality measures for IOP rules and propose a novel method to learn high-quality rules from KGs. We show how to build high-quality tree shapes from the IOP rules. Our learning method, SHACLEARNER, is adapted from a state-of-the-art embedding-based open path rule learner (OPRL).\nWe evaluate SHACLEARNER on some real-world massive KGs, including YAGO2s (4M facts), DBpedia 3.8 (11M facts), and Wikidata (8M facts). The experiments show SHACLEARNER can learn informative and intuitive shapes from massive KGs effectively. Our experiments show the learned shapes are diverse in both structural features such as depth and width, and in quality measures.",
		"title": "Learning SHACL shapes from knowledge graphs",
		"author": [
			{
				"family": "Omran",
				"given": "Pouya Ghiasnezhad"
			},
			{
				"family": "Taylor",
				"given": "Kerry L."
			},
			{
				"family": "Méndez",
				"given": "Sergio José Rodríguez"
			},
			{
				"family": "Haller",
				"given": "Armin"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2021"
				]
			]
		}
	},
	{
		"id": 43,
		"type": "paper-conference",
		"collection-title": "Lecture notes in computer science",
		"container-title": "The semantic web - 14th international conference, ESWC 2017, portorož, slovenia, may 28 - june 1, 2017, proceedings, part I",
		"DOI": "10.1007/978-3-319-58068-5\\_33",
		"note": "tex.bibsource: dblp computer science bibliography, https://dblp.org\ntex.biburl: https://dblp.org/rec/conf/esws/CapadisliG0ASB17.bib\ntex.timestamp: Mon, 15 Jun 2020 17:10:07 +0200",
		"page": "537–553",
		"title": "Linked data notifications: A resource-centric communication protocol",
		"URL": "https://doi.org/10.1007/978-3-319-58068-5_33",
		"volume": "10249",
		"author": [
			{
				"family": "Capadisli",
				"given": "Sarven"
			},
			{
				"family": "Guy",
				"given": "Amy"
			},
			{
				"family": "Lange",
				"given": "Christoph"
			},
			{
				"family": "Auer",
				"given": "Sören"
			},
			{
				"family": "Sambra",
				"given": "Andrei Vlad"
			},
			{
				"family": "Berners-Lee",
				"given": "Tim"
			}
		],
		"editor": [
			{
				"family": "Blomqvist",
				"given": "Eva"
			},
			{
				"family": "Maynard",
				"given": "Diana"
			},
			{
				"family": "Gangemi",
				"given": "Aldo"
			},
			{
				"family": "Hoekstra",
				"given": "Rinke"
			},
			{
				"family": "Hitzler",
				"given": "Pascal"
			},
			{
				"family": "Hartig",
				"given": "Olaf"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2017"
				]
			]
		}
	},
	{
		"id": 44,
		"type": "paper-conference",
		"abstract": "RDF aims at being the universal abstract data model for structured data on the Web. However, the vast majority of web services consume and expose non-RDF data, and it is unlikely that all these services be converted to RDF one day. This is especially true for sensors and other devices in the Web of Things, as most RDF formats are verbose while constrained devices prefer to consume and expose data in concise formats. In this paper, we propose an approach to make these services and things reach semantic interoperability, while letting them the freedom to use their preferred formats. Our approach is rooted in the Web's architectural principles and the linked data principles, and relies on the definition of RDF presentations, which describe the link between RDF graphs and their representations. We introduce the RDF Presentation ontology (RDFP) that can be used to model inputs and outputs of procedures of the new Semantic Sensor Network ontology (SOSA/SSN), and input-Data and output Data of interaction patterns of things in the W3C WoT Thing Description ontology. We then propose practical solutions for web agents to be able to discover how a message content can be interpreted as RDF, generated from RDF, or validated, with different Web interaction protocols.",
		"collection-title": "IOT '18",
		"container-title": "Proceedings of the 8th International Conference on the Internet of Things",
		"DOI": "10.1145/3277593.3277618",
		"event-place": "New York, NY, USA",
		"ISBN": "978-1-4503-6564-2",
		"page": "1–8",
		"publisher": "Association for Computing Machinery",
		"publisher-place": "New York, NY, USA",
		"source": "ACM Digital Library",
		"title": "RDF presentation and correct content conveyance for legacy services and the web of things",
		"URL": "https://doi.org/10.1145/3277593.3277618",
		"author": [
			{
				"family": "Lefrançois",
				"given": "Maxime"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2018",
					10,
					15
				]
			]
		}
	},
	{
		"id": 45,
		"type": "article-journal",
		"container-title": "RFC",
		"DOI": "10.17487/RFC5988",
		"note": "tex.bibsource: dblp computer science bibliography, https://dblp.org\ntex.biburl: https://dblp.org/rec/journals/rfc/rfc5988.bib\ntex.timestamp: Tue, 14 May 2019 10:04:41 +0200",
		"page": "1–23",
		"title": "Web linking",
		"URL": "https://doi.org/10.17487/RFC5988",
		"volume": "5988",
		"author": [
			{
				"family": "Nottingham",
				"given": "Mark"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2010"
				]
			]
		}
	},
	{
		"id": 46,
		"type": "article-journal",
		"container-title": "RFC",
		"DOI": "10.17487/RFC6906",
		"note": "tex.bibsource: dblp computer science bibliography, https://dblp.org\ntex.biburl: https://dblp.org/rec/journals/rfc/rfc6906.bib\ntex.timestamp: Tue, 14 May 2019 10:03:19 +0200",
		"page": "1–8",
		"title": "The 'profile' link relation type",
		"URL": "https://doi.org/10.17487/RFC6906",
		"volume": "6906",
		"author": [
			{
				"family": "Wilde",
				"given": "Erik"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2013"
				]
			]
		}
	},
	{
		"id": 47,
		"type": "article-journal",
		"container-title": "RFC",
		"DOI": "10.17487/RFC7231",
		"note": "tex.bibsource: dblp computer science bibliography, https://dblp.org\ntex.biburl: https://dblp.org/rec/journals/rfc/rfc7231.bib\ntex.timestamp: Tue, 14 May 2019 10:01:37 +0200",
		"page": "1–101",
		"title": "Hypertext transfer protocol (HTTP/1.1): Semantics and content",
		"URL": "https://doi.org/10.17487/RFC7231",
		"volume": "7231",
		"author": [
			{
				"family": "Fielding",
				"given": "Roy T."
			},
			{
				"family": "Reschke",
				"given": "Julian F."
			}
		],
		"issued": {
			"date_parts": [
				[
					"2014"
				]
			]
		}
	},
	{
		"id": 48,
		"type": "article-journal",
		"abstract": "The multimedia community is pursuing, among others, the vision of Universal Multimedia Access (UMA). UMA denotes the concept that any multimedia content should be available anywhere, anytime, on any device, tailored to the user's needs and preferences, accessible for the user in a transparent and convenient way. Key to achieving this vision is to realize collaborative adaptive behavior of the involved distributed multimedia system components (server, media-aware network elements like proxies or gateways, and clients), based on intense metadata exchange and multimedia content negotiation, adaptation, or personalization.",
		"title": "Challenges toward adaptive behavior of distributed multimedia systems",
		"issued": {
			"date_parts": [
				[
					"2008"
				]
			]
		},
		"URL": "http://www-itec.uni-klu.ac.at/bib/files/InterSymp_2007_HH_Adaptive_Behavior_DMS.pdf",
		"author": [
			{
				"family": "Hellwagner",
				"given": "Hermann"
			}
		]
	},
	{
		"id": 49,
		"type": "article-journal",
		"container-title": "RFC",
		"DOI": "10.17487/RFC7240",
		"note": "tex.bibsource: dblp computer science bibliography, https://dblp.org\ntex.biburl: https://dblp.org/rec/journals/rfc/rfc7240.bib\ntex.timestamp: Tue, 14 May 2019 10:02:42 +0200",
		"page": "1–17",
		"title": "Prefer header for HTTP",
		"URL": "https://doi.org/10.17487/RFC7240",
		"volume": "7240",
		"author": [
			{
				"family": "Snell",
				"given": "James M."
			}
		],
		"issued": {
			"date_parts": [
				[
					"2014"
				]
			]
		}
	},
	{
		"id": 50,
		"type": "report",
		"abstract": "This document describes the Shape Expression Vocabulary and Term definitions used for describing Shape Expressions [shex-semantics]. This document provides the RDFS [RDF-SCHEMA] vocabulary definition and a description of the JSON-LD context definition for use with defining shape expressions.\n\nAlternate versions of the vocabulary definition exist in Turtle and JSON-LD, which also includes the @context required for metadata descriptions.",
		"title": "Shape Expression Vocabulary",
		"URL": "https://www.w3.org/ns/shex#introduction",
		"author": [
			{
				"family": "Kellogg",
				"given": "Gregg"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					12
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2017",
					7,
					7
				]
			]
		}
	},
	{
		"id": 51,
		"type": "article-journal",
		"abstract": "The World‐Wide Web (W3) initiative is a practical project designed to bring a global information universe into existence using available technology. This article describes the aims, data model, and protocols needed to implement the “web” and compares them with various contemporary systems.",
		"container-title": "Internet Research",
		"DOI": "10.1108/eb047254",
		"ISSN": "1066-2243",
		"issue": "1",
		"note": "publisher: MCB UP Ltd",
		"page": "52-58",
		"source": "Emerald Insight",
		"title": "World‐Wide Web: The Information Universe",
		"title-short": "World‐Wide Web",
		"URL": "https://doi.org/10.1108/eb047254",
		"volume": "2",
		"author": [
			{
				"family": "Berners‐Lee",
				"given": "Tim"
			},
			{
				"family": "Cailliau",
				"given": "Robert"
			},
			{
				"family": "Groff",
				"given": "Jean‐François"
			},
			{
				"family": "Pollermann",
				"given": "Bernd"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2021",
					10,
					19
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"1992",
					1,
					1
				]
			]
		}
	},
	{
		"id": 52,
		"type": "article-journal",
		"container-title": "RFC",
		"DOI": "10.17487/RFC7089",
		"note": "tex.bibsource: dblp computer science bibliography, https://dblp.org\ntex.biburl: https://dblp.org/rec/journals/rfc/rfc7089.bib\ntex.timestamp: Tue, 14 May 2019 10:01:36 +0200",
		"page": "1–50",
		"title": "HTTP framework for time-based access to resource states - memento",
		"URL": "https://doi.org/10.17487/RFC7089",
		"volume": "7089",
		"author": [
			{
				"family": "Sompel",
				"given": "Herbert Van",
				"non-dropping-particle": "de"
			},
			{
				"family": "Nelson",
				"given": "Michael L."
			},
			{
				"family": "Sanderson",
				"given": "Robert"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2013"
				]
			]
		}
	},
	{
		"id": 53,
		"type": "article-journal",
		"container-title": "RFC",
		"DOI": "10.17487/RFC2703",
		"note": "tex.bibsource: dblp computer science bibliography, https://dblp.org\ntex.biburl: https://dblp.org/rec/journals/rfc/rfc2703.bib\ntex.timestamp: Tue, 14 May 2019 10:04:06 +0200",
		"page": "1–20",
		"title": "Protocol-independent content negotiation framework",
		"URL": "https://doi.org/10.17487/RFC2703",
		"volume": "2703",
		"author": [
			{
				"family": "Klyne",
				"given": "Graham"
			}
		],
		"issued": {
			"date_parts": [
				[
					"1999"
				]
			]
		}
	},
	{
		"id": 54,
		"type": "article-journal",
		"container-title": "RFC",
		"DOI": "10.17487/RFC3297",
		"note": "tex.bibsource: dblp computer science bibliography, https://dblp.org\ntex.biburl: https://dblp.org/rec/journals/rfc/rfc3297.bib\ntex.timestamp: Tue, 14 May 2019 10:04:38 +0200",
		"page": "1–46",
		"title": "Content negotiation for messaging services based on email",
		"URL": "https://doi.org/10.17487/RFC3297",
		"volume": "3297",
		"author": [
			{
				"family": "Klyne",
				"given": "Graham"
			},
			{
				"family": "Iwazaki",
				"given": "Ryuji"
			},
			{
				"family": "Crocker",
				"given": "Dave"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2002"
				]
			]
		}
	},
	{
		"id": 55,
		"type": "report",
		"genre": "RFC",
		"number": "2616",
		"publisher": "ietf",
		"title": "Hypertext transfer protocol - HTTP/1.1",
		"URL": "https://doi.org/10.17487/RFC2616",
		"author": [
			{
				"family": "Fielding",
				"given": "Roy T."
			},
			{
				"family": "Gettys",
				"given": "Jim"
			},
			{
				"family": "Mogul",
				"given": "Jeffrey C."
			},
			{
				"family": "Nielsen",
				"given": "Henrik Frystyk"
			},
			{
				"family": "Masinter",
				"given": "Larry"
			},
			{
				"family": "Leach",
				"given": "Paul J."
			},
			{
				"family": "Berners-Lee",
				"given": "Tim"
			}
		],
		"issued": {
			"date_parts": [
				[
					"1999"
				]
			]
		},
		"citation-key": "http_rfc:1999"
	},
	{
		"id": 56,
		"type": "report",
		"language": "english"
		, "author": [
			{
				"family": "",
				"given": "Open Connectivity Foundation"
			}
		],
		"title": "OCF Specification 2.2.5",
		"URL": "https://openconnectivity.org/developer/specifications/",
		"issued": {
			"date_parts": [
				[
					"2022",
					1
				]
			]
		},
		"citation-key": "ocf:2022"
	},
	{
		"id": 57,
		"type": "paper-conference",
		"container-title": "Proceedings of the international conference on knowledge management (i-know)",
		"page": "120–127",
		"title": "Personalisation versus adaptation? a user-centred model approach and its application",
		"author": [
			{
				"family": "García-Barrios",
				"given": "Victor Manuel"
			},
			{
				"family": "Mödritscher",
				"given": "Felix"
			},
			{
				"family": "Gütl",
				"given": "Christian"
			}
		],
		"URL": "https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.73.3343&rep=rep1&type=pdf",
		"issued": {
			"date_parts": [
				[
					"2005"
				]
			]
		},
		"citation-key": "garcia2005personalisation"
	},
	{
		"id": 58,
		"type": "report",
		"abstract": "This document describes ALPS, a data format for defining simple descriptions of application-level semantics, similar in complexity to HTML microformats. An ALPS document can be used as a profile to explain the application semantics of a document with an application- agnostic media type (such as HTML, HAL, Collection+JSON, Siren, etc.). This increases the reusability of profile documents across media types.",
		"genre": "Internet-draft",
		"note": "tex.pagetotal: 33",
		"number": "draft-amundsen-richardson-foster-alps-07",
		"publisher": "Internet Engineering Task Force / Internet Engineering Task Force",
		"title": "Application-level profile semantics (ALPS)",
		"URL": "https://datatracker.ietf.org/doc/html/draft-amundsen-richardson-foster-alps-07",
		"author": [
			{
				"family": "Amundsen",
				"given": "Mike"
			},
			{
				"family": "Richardson",
				"given": "Leonard"
			},
			{
				"family": "Foster",
				"given": "Mark W."
			}
		],
		"issued": {
			"date_parts": [
				[
					"2021",
					5,
					19
				]
			]
		},
		"citation-key": "amundsen-richardson-foster-alps-07"
	}, {
		"id": 59,
		"type": "paper-conference",
		"collection-title": "Lecture notes in computer science",
		"container-title": "The semantic web. Latest advances and new domains - 13th international conference, ESWC 2016, heraklion, crete, greece, may 29 - june 2, 2016, proceedings",
		"DOI": "10.1007/978-3-319-34129-3\\_23",
		"page": "371–386",
		"publisher": "Springer",
		"title": "Supporting arbitrary custom datatypes in RDF and SPARQL",
		"URL": "https://www.emse.fr/~zimmermann/Papers/eswc2016.pdf",
		"volume": "9678",
		"abstract": `
			In the Resource Description Framework, literals are composed of a UNICODE string (the lexical form), a datatype IRI,
			and optionally, when the datatype IRI is rdf:langString, a language tag. Any IRI can take the place of a datatype IRI,
			but the specification only defines the precise meaning of a literal when the datatype IRI is among a predefined subset.
			Custom datatypes have reported use on the Web of Data, and show some advantages in representing some classical structures.
			Yet, their support by RDF processors is rare and implementation specific.
			In this paper, we first present the minimal set of functions that should be defined in order to make a custom
			datatype usable in query answering and reasoning. Based on this, we discuss solutions that would enable:
			(i) data publishers to publish the definition of arbitrary custom datatypes on the Web,
			and (ii) generic RDF processor or SPARQL query engine to discover custom datatypes on-the-fly,
			and to perform operations on them accordingly. Finally, we detail a concrete solution that targets arbitrarily
			complex custom datatypes, we overview its implementation in Jena and ARQ, and we report the results of an experiment
			on a real world DBpedia use case.
		`,
		"author": [
			{
				"family": "Lefrançois",
				"given": "Maxime"
			},
			{
				"family": "Zimmermann",
				"given": "Antoine"
			}
		],
		"editor": [
			{
				"family": "Sack",
				"given": "Harald"
			},
			{
				"family": "Blomqvist",
				"given": "Eva"
			},
			{
				"family": "Aquin",
				"given": "Mathieu",
				"non-dropping-particle": "d'"
			},
			{
				"family": "Ghidini",
				"given": "Chiara"
			},
			{
				"family": "Ponzetto",
				"given": "Simone Paolo"
			},
			{
				"family": "Lange",
				"given": "Christoph"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2016"
				]
			]
		},
		"citation-key": "DBLP:conf/esws/LefrancoisZ16"
	},
	{
		"id": 60,
		"type": "article-journal",
		"abstract": "Dereferencing a URI returns a representation of the current state of the resource identified by that URI. But, on the Web representations of prior states of a resource are also available, for example, as resource versions in Content Management Systems or archival resources in Web Archives such as the Internet Archive. This paper introduces a resource versioning mechanism that is fully based on HTTP and uses datetime as a global version indicator. The approach allows \"follow your nose\" style navigation both from the current time-generic resource to associated time-specific version resources as well as among version resources. The proposed versioning mechanism is congruent with the Architecture of the World Wide Web, and is based on the Memento framework that extends HTTP with transparent content negotiation in the datetime dimension. The paper shows how the versioning approach applies to Linked Data, and by means of a demonstrator built for DBpedia, it also illustrates how it can be used to conduct a time-series analysis across versions of Linked Data descriptions.",
		"container-title": "arXiv:1003.3661 [cs]",
		"note": "arXiv: 1003.3661",
		"source": "arXiv.org",
		"title": "An HTTP-Based Versioning Mechanism for Linked Data",
		"URL": "http://arxiv.org/abs/1003.3661",
		"author": [
			{
				"family": "Van de Sompel",
				"given": "Herbert"
			},
			{
				"family": "Sanderson",
				"given": "Robert"
			},
			{
				"family": "Nelson",
				"given": "Michael L."
			},
			{
				"family": "Balakireva",
				"given": "Lyudmila L."
			},
			{
				"family": "Shankar",
				"given": "Harihar"
			},
			{
				"family": "Ainsworth",
				"given": "Scott"
			}
		],
		"accessed": {
			"date_parts": [
				[
					"2022",
					3,
					3
				]
			]
		},
		"issued": {
			"date_parts": [
				[
					"2010",
					3,
					18
				]
			]
		},
		"citation-key": "vandesompelHTTPBasedVersioningMechanism2010"
	},
	{
		"id": 61,
		"type": "paper-conference",
		"container-title": "Workshop on enterprise and organizational modeling and simulation",
		"page": "121–130",
		"abstract": "Shapes Constraint Language (SHACL) is the new recommendation by W3C consortium to uniform both describing and constraining the content of an RDF graph. Based on the inspiration of model generation from textual requirements specifications, we investigate the possibility of mapping parts of a textual document to shapes described by SHACL. In this contribution, we present our approach of the patterns (based on a grammatical inspection) that indicates candidates of domain description in SHACL language. We argue that the standard methods of linguistics can be supported by ontology resources as Schema.org.",
		"URL": "https://books.google.co.uk/books?id=-iy-DwAAQBAJ&pg=PA120&lpg=PA120&dq=%22SHACL+Shapes+Generation+from+Textual+Documents%22&source=bl&ots=_Se1x68Ptx&sig=ACfU3U1VVx4GS2aPz5x91cST--aXS5oWYw&hl=en&sa=X&ved=2ahUKEwiiqJ_u0qn2AhWt8rsIHUiMDacQ6AF6BAgCEAM#v=onepage&q=%22SHACL%20Shapes%20Generation%20from%20Textual%20Documents%22&f=false",
		"title": "SHACL shapes generation from textual documents",
		"author": [
			{
				"family": "Šenkỳř",
				"given": "David"
			}
		],
		"issued": {
			"date_parts": [
				[
					"2019"
				]
			]
		},
		"citation-key": "vsenkyvr2019shacl"
	}
]

export const references: Reference[] = importedReferences.map(ref => {
	var author = (ref.author) ?
		ref.author.map(author => " " + author.given + " " + author.family + "").toString()
		: "-";
	return {
		"id": ref.id,
		"abstract": (ref.abstract) ? ref.abstract : "",
		"title": ref.title,
		"date": (ref.issued?.date_parts[0][0]) ? parseInt(ref.issued?.date_parts[0][0].toString()) : -1,
		"authors": author,
		"url": (ref.URL) ? ref.URL : "",
	}
});

export interface Reference {
	id: number;
	title: string;
	date: number;
	authors: string;
	abstract: string;
	url: string;
}