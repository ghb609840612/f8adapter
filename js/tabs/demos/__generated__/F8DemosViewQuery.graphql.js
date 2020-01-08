/**
 * @flow
 * @relayHash 661d9f4af374878da0f0364a82cd85ae
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type F8DemosViewQueryVariables = {||};
export type F8DemosViewQueryResponse = {|
  +demos: ?$ReadOnlyArray<?{|
    +title: ?string,
    +description: ?string,
    +booking: ?string,
    +location: ?string,
    +links: ?$ReadOnlyArray<?{|
      +title: ?string,
      +url: ?string,
    |}>,
    +logo: ?string,
    +logoHeight: ?number,
    +logoWidth: ?number,
    +devGarage: ?boolean,
  |}>
|};
export type F8DemosViewQuery = {|
  variables: F8DemosViewQueryVariables,
  response: F8DemosViewQueryResponse,
|};
*/


/*
query F8DemosViewQuery {
  demos {
    title
    description
    booking
    location
    links {
      title
      url
    }
    logo
    logoHeight
    logoWidth
    devGarage
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "booking",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "location",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "links",
  "storageKey": null,
  "args": null,
  "concreteType": "DemoLink",
  "plural": true,
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logoHeight",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logoWidth",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "devGarage",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "F8DemosViewQuery",
  "id": null,
  "text": "query F8DemosViewQuery {\n  demos {\n    title\n    description\n    booking\n    location\n    links {\n      title\n      url\n    }\n    logo\n    logoHeight\n    logoWidth\n    devGarage\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "F8DemosViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "demos",
        "storageKey": null,
        "args": null,
        "concreteType": "Demo",
        "plural": true,
        "selections": [
          v0,
          v1,
          v2,
          v3,
          v4,
          v5,
          v6,
          v7,
          v8
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "F8DemosViewQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "demos",
        "storageKey": null,
        "args": null,
        "concreteType": "Demo",
        "plural": true,
        "selections": [
          v0,
          v1,
          v2,
          v3,
          v4,
          v5,
          v6,
          v7,
          v8,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ff8813257da8158810e594c6620227b6';
module.exports = node;
