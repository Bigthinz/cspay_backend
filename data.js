{
    "responseId": "e3c029de-7952-4951-ae55-a59e33fafffd",
    "queryResult": {
        "responseMessages": [
            {
                "text": {
                    "text": [
                        "Welcome  😀, I am the virtual agent of CSITSA.  I can assist you with payment of dues, check your balance and ask questions about your payment, and I can also tell you more about CSITSA. How can I help?"
                    ],
                    "allowPlaybackInterruption": false
                },
                "message": "text"
            },
            {
                "payload": {
                    "fields": {
                        "richContent": {
                            "listValue": {
                                "values": [
                                    {
                                        "listValue": {
                                            "values": [
                                                {
                                                    "structValue": {
                                                        "fields": {
                                                            "type": {
                                                                "stringValue": "chips",
                                                                "kind": "stringValue"
                                                            },
                                                            "options": {
                                                                "listValue": {
                                                                    "values": [
                                                                        {
                                                                            "structValue": {
                                                                                "fields": {
                                                                                    "text": {
                                                                                        "stringValue": "SRC Dues",
                                                                                        "kind": "stringValue"
                                                                                    },
                                                                                    "id": {
                                                                                        "stringValue": "1",
                                                                                        "kind": "stringValue"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "kind": "structValue"
                                                                        },
                                                                        {
                                                                            "structValue": {
                                                                                "fields": {
                                                                                    "text": {
                                                                                        "stringValue": "Departmental Dues",
                                                                                        "kind": "stringValue"
                                                                                    },
                                                                                    "id": {
                                                                                        "stringValue": "2",
                                                                                        "kind": "stringValue"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "kind": "structValue"
                                                                        },
                                                                        {
                                                                            "structValue": {
                                                                                "fields": {
                                                                                    "id": {
                                                                                        "stringValue": "3",
                                                                                        "kind": "stringValue"
                                                                                    },
                                                                                    "text": {
                                                                                        "stringValue": "Testimonial",
                                                                                        "kind": "stringValue"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "kind": "structValue"
                                                                        },
                                                                        {
                                                                            "structValue": {
                                                                                "fields": {
                                                                                    "id": {
                                                                                        "stringValue": "4",
                                                                                        "kind": "stringValue"
                                                                                    },
                                                                                    "text": {
                                                                                        "stringValue": "Vetting Forms",
                                                                                        "kind": "stringValue"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "kind": "structValue"
                                                                        }
                                                                    ]
                                                                },
                                                                "kind": "listValue"
                                                            }
                                                        }
                                                    },
                                                    "kind": "structValue"
                                                }
                                            ]
                                        },
                                        "kind": "listValue"
                                    }
                                ]
                            },
                            "kind": "listValue"
                        }
                    }
                },
                "message": "payload"
            },
            {
                "text": {
                    "text": [
                        "What is your first name?"
                    ],
                    "allowPlaybackInterruption": false
                },
                "message": "text"
            }
        ],
        "webhookPayloads": [
            {
                "fields": {}
            }
        ],
        "webhookStatuses": [
            {
                "details": [],
                "code": 0,
                "message": ""
            }
        ],
        "languageCode": "en",
        "parameters": {
            "fields": {
                "verified": {
                    "stringValue": "false",
                    "kind": "stringValue"
                },
                "sessionId": {
                    "stringValue": "123456788",
                    "kind": "stringValue"
                },
                "paydues": {
                    "stringValue": "payDues",
                    "kind": "stringValue"
                },
                "email": {
                    "nullValue": "NULL_VALUE",
                    "kind": "nullValue"
                }
            }
        },
        "currentPage": {
            "transitionRoutes": [],
            "eventHandlers": [],
            "transitionRouteGroups": [],
            "name": "projects/grecords/locations/us-central1/agents/8660fa0e-390d-4cd3-a960-553066b8111b/flows/00000000-0000-0000-0000-000000000000/pages/08514530-0d99-46eb-9e82-653b5ab8e12e",
            "displayName": "Pay Dues",
            "form": null,
            "entryFulfillment": null
        },
        "intent": {
            "trainingPhrases": [],
            "parameters": [],
            "labels": {},
            "name": "projects/grecords/locations/us-central1/agents/8660fa0e-390d-4cd3-a960-553066b8111b/intents/00000000-0000-0000-0000-000000000000",
            "displayName": "Default Welcome Intent",
            "priority": 0,
            "isFallback": false,
            "description": ""
        },
        "intentDetectionConfidence": 1,
        "diagnosticInfo": {
            "fields": {
                "Session Id": {
                    "stringValue": "123456788",
                    "kind": "stringValue"
                },
                "Execution Sequence": {
                    "listValue": {
                        "values": [
                            {
                                "structValue": {
                                    "fields": {
                                        "Step 1": {
                                            "structValue": {
                                                "fields": {
                                                    "InitialState": {
                                                        "structValue": {
                                                            "fields": {
                                                                "FlowState": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "PageState": {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "Name": {
                                                                                            "stringValue": "Pay Dues",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "PageId": {
                                                                                            "stringValue": "08514530-0d99-46eb-9e82-653b5ab8e12e",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "FormFilled": {
                                                                                            "boolValue": false,
                                                                                            "kind": "boolValue"
                                                                                        },
                                                                                        "ActiveParameter": {
                                                                                            "stringValue": "firstname",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "Status": {
                                                                                            "stringValue": "PROCESSING_FORM",
                                                                                            "kind": "stringValue"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            },
                                                                            "FlowId": {
                                                                                "stringValue": "00000000-0000-0000-0000-000000000000",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Version": {
                                                                                "numberValue": 0,
                                                                                "kind": "numberValue"
                                                                            },
                                                                            "Name": {
                                                                                "stringValue": "Default Start Flow",
                                                                                "kind": "stringValue"
                                                                            }
                                                                        }
                                                                    },
                                                                    "kind": "structValue"
                                                                },
                                                                "MatchedIntent": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "Active": {
                                                                                "boolValue": true,
                                                                                "kind": "boolValue"
                                                                            },
                                                                            "DisplayName": {
                                                                                "stringValue": "Default Welcome Intent",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Type": {
                                                                                "stringValue": "NLU",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Id": {
                                                                                "stringValue": "00000000-0000-0000-0000-000000000000",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Score": {
                                                                                "numberValue": 1,
                                                                                "kind": "numberValue"
                                                                            }
                                                                        }
                                                                    },
                                                                    "kind": "structValue"
                                                                },
                                                                "SessionParameters": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "sessionId": {
                                                                                "stringValue": "123456788",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "paydues": {
                                                                                "stringValue": "payDues",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "email": {
                                                                                "nullValue": "NULL_VALUE",
                                                                                "kind": "nullValue"
                                                                            },
                                                                            "verified": {
                                                                                "stringValue": "false",
                                                                                "kind": "stringValue"
                                                                            }
                                                                        }
                                                                    },
                                                                    "kind": "structValue"
                                                                }
                                                            }
                                                        },
                                                        "kind": "structValue"
                                                    },
                                                    "Type": {
                                                        "stringValue": "INITIAL_STATE",
                                                        "kind": "stringValue"
                                                    }
                                                }
                                            },
                                            "kind": "structValue"
                                        }
                                    }
                                },
                                "kind": "structValue"
                            },
                            {
                                "structValue": {
                                    "fields": {
                                        "Step 2": {
                                            "structValue": {
                                                "fields": {
                                                    "FunctionExecution": {
                                                        "structValue": {
                                                            "fields": {
                                                                "Responses": {
                                                                    "listValue": {
                                                                        "values": [
                                                                            {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "source": {
                                                                                            "stringValue": "VIRTUAL_AGENT",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "text": {
                                                                                            "structValue": {
                                                                                                "fields": {
                                                                                                    "redactedText": {
                                                                                                        "listValue": {
                                                                                                            "values": [
                                                                                                                {
                                                                                                                    "stringValue": "Welcome  😀, I am the virtual agent of CSITSA.  I can assist you with payment of dues, check your balance and ask questions about your payment, and I can also tell you more about CSITSA. How can I help?",
                                                                                                                    "kind": "stringValue"
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "kind": "listValue"
                                                                                                    },
                                                                                                    "text": {
                                                                                                        "listValue": {
                                                                                                            "values": [
                                                                                                                {
                                                                                                                    "stringValue": "Welcome  😀, I am the virtual agent of CSITSA.  I can assist you with payment of dues, check your balance and ask questions about your payment, and I can also tell you more about CSITSA. How can I help?",
                                                                                                                    "kind": "stringValue"
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "kind": "listValue"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "kind": "structValue"
                                                                                        },
                                                                                        "responseType": {
                                                                                            "stringValue": "HANDLER_PROMPT",
                                                                                            "kind": "stringValue"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            },
                                                                            {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "payload": {
                                                                                            "structValue": {
                                                                                                "fields": {
                                                                                                    "richContent": {
                                                                                                        "listValue": {
                                                                                                            "values": [
                                                                                                                {
                                                                                                                    "listValue": {
                                                                                                                        "values": [
                                                                                                                            {
                                                                                                                                "structValue": {
                                                                                                                                    "fields": {
                                                                                                                                        "type": {
                                                                                                                                            "stringValue": "chips",
                                                                                                                                            "kind": "stringValue"
                                                                                                                                        },
                                                                                                                                        "options": {
                                                                                                                                            "listValue": {
                                                                                                                                                "values": [
                                                                                                                                                    {
                                                                                                                                                        "structValue": {
                                                                                                                                                            "fields": {
                                                                                                                                                                "id": {
                                                                                                                                                                    "stringValue": "1",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                },
                                                                                                                                                                "text": {
                                                                                                                                                                    "stringValue": "SRC Dues",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                        "kind": "structValue"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "structValue": {
                                                                                                                                                            "fields": {
                                                                                                                                                                "text": {
                                                                                                                                                                    "stringValue": "Departmental Dues",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                },
                                                                                                                                                                "id": {
                                                                                                                                                                    "stringValue": "2",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                        "kind": "structValue"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "structValue": {
                                                                                                                                                            "fields": {
                                                                                                                                                                "id": {
                                                                                                                                                                    "stringValue": "3",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                },
                                                                                                                                                                "text": {
                                                                                                                                                                    "stringValue": "Testimonial",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                        "kind": "structValue"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "structValue": {
                                                                                                                                                            "fields": {
                                                                                                                                                                "id": {
                                                                                                                                                                    "stringValue": "4",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                },
                                                                                                                                                                "text": {
                                                                                                                                                                    "stringValue": "Vetting Forms",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                        "kind": "structValue"
                                                                                                                                                    }
                                                                                                                                                ]
                                                                                                                                            },
                                                                                                                                            "kind": "listValue"
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "kind": "structValue"
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    "kind": "listValue"
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "kind": "listValue"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "kind": "structValue"
                                                                                        },
                                                                                        "responseType": {
                                                                                            "stringValue": "HANDLER_PROMPT",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "source": {
                                                                                            "stringValue": "VIRTUAL_AGENT",
                                                                                            "kind": "stringValue"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "kind": "listValue"
                                                                },
                                                                "Webhook": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "Latency": {
                                                                                "stringValue": "470 ms",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Status": {
                                                                                "stringValue": "OK",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Unauthorized FulfillmentResponse": {
                                                                                "boolValue": false,
                                                                                "kind": "boolValue"
                                                                            },
                                                                            "URL": {
                                                                                "stringValue": "https://fd2b-102-176-94-210.ngrok.io/api/messages",
                                                                                "kind": "stringValue"
                                                                            }
                                                                        }
                                                                    },
                                                                    "kind": "structValue"
                                                                }
                                                            }
                                                        },
                                                        "kind": "structValue"
                                                    },
                                                    "Type": {
                                                        "stringValue": "STATE_MACHINE",
                                                        "kind": "stringValue"
                                                    },
                                                    "StateMachine": {
                                                        "structValue": {
                                                            "fields": {
                                                                "TriggeredTransitionRouteId": {
                                                                    "stringValue": "bf0770ed-bc26-40f7-9e68-4250a8a34a5c",
                                                                    "kind": "stringValue"
                                                                },
                                                                "TriggeredIntent": {
                                                                    "stringValue": "Default Welcome Intent",
                                                                    "kind": "stringValue"
                                                                },
                                                                "FlowLevelTransition": {
                                                                    "boolValue": true,
                                                                    "kind": "boolValue"
                                                                },
                                                                "FlowState": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "PageState": {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "Name": {
                                                                                            "stringValue": "Pay Dues",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "FormFilled": {
                                                                                            "boolValue": false,
                                                                                            "kind": "boolValue"
                                                                                        },
                                                                                        "Status": {
                                                                                            "stringValue": "TRANSITION_ROUTING",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "ActiveParameter": {
                                                                                            "stringValue": "firstname",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "PageId": {
                                                                                            "stringValue": "08514530-0d99-46eb-9e82-653b5ab8e12e",
                                                                                            "kind": "stringValue"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            },
                                                                            "Version": {
                                                                                "numberValue": 0,
                                                                                "kind": "numberValue"
                                                                            },
                                                                            "Name": {
                                                                                "stringValue": "Default Start Flow",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "FlowId": {
                                                                                "stringValue": "00000000-0000-0000-0000-000000000000",
                                                                                "kind": "stringValue"
                                                                            }
                                                                        }
                                                                    },
                                                                    "kind": "structValue"
                                                                }
                                                            }
                                                        },
                                                        "kind": "structValue"
                                                    }
                                                }
                                            },
                                            "kind": "structValue"
                                        }
                                    }
                                },
                                "kind": "structValue"
                            },
                            {
                                "structValue": {
                                    "fields": {
                                        "Step 3": {
                                            "structValue": {
                                                "fields": {
                                                    "StateMachine": {
                                                        "structValue": {
                                                            "fields": {
                                                                "FlowState": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "PageState": {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "Name": {
                                                                                            "stringValue": "Pay Dues",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "ActiveParameter": {
                                                                                            "stringValue": "firstname",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "PageId": {
                                                                                            "stringValue": "08514530-0d99-46eb-9e82-653b5ab8e12e",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "Status": {
                                                                                            "stringValue": "PROCESSING_FORM",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "FormFilled": {
                                                                                            "boolValue": false,
                                                                                            "kind": "boolValue"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            },
                                                                            "Version": {
                                                                                "numberValue": 0,
                                                                                "kind": "numberValue"
                                                                            },
                                                                            "Name": {
                                                                                "stringValue": "Default Start Flow",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "FlowId": {
                                                                                "stringValue": "00000000-0000-0000-0000-000000000000",
                                                                                "kind": "stringValue"
                                                                            }
                                                                        }
                                                                    },
                                                                    "kind": "structValue"
                                                                }
                                                            }
                                                        },
                                                        "kind": "structValue"
                                                    },
                                                    "FunctionExecution": {
                                                        "structValue": {
                                                            "fields": {
                                                                "Responses": {
                                                                    "listValue": {
                                                                        "values": [
                                                                            {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "source": {
                                                                                            "stringValue": "VIRTUAL_AGENT",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "text": {
                                                                                            "structValue": {
                                                                                                "fields": {
                                                                                                    "text": {
                                                                                                        "listValue": {
                                                                                                            "values": [
                                                                                                                {
                                                                                                                    "stringValue": "Welcome  😀, I am the virtual agent of CSITSA.  I can assist you with payment of dues, check your balance and ask questions about your payment, and I can also tell you more about CSITSA. How can I help?",
                                                                                                                    "kind": "stringValue"
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "kind": "listValue"
                                                                                                    },
                                                                                                    "redactedText": {
                                                                                                        "listValue": {
                                                                                                            "values": [
                                                                                                                {
                                                                                                                    "stringValue": "Welcome  😀, I am the virtual agent of CSITSA.  I can assist you with payment of dues, check your balance and ask questions about your payment, and I can also tell you more about CSITSA. How can I help?",
                                                                                                                    "kind": "stringValue"
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "kind": "listValue"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "kind": "structValue"
                                                                                        },
                                                                                        "responseType": {
                                                                                            "stringValue": "HANDLER_PROMPT",
                                                                                            "kind": "stringValue"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            },
                                                                            {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "responseType": {
                                                                                            "stringValue": "HANDLER_PROMPT",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "payload": {
                                                                                            "structValue": {
                                                                                                "fields": {
                                                                                                    "richContent": {
                                                                                                        "listValue": {
                                                                                                            "values": [
                                                                                                                {
                                                                                                                    "listValue": {
                                                                                                                        "values": [
                                                                                                                            {
                                                                                                                                "structValue": {
                                                                                                                                    "fields": {
                                                                                                                                        "type": {
                                                                                                                                            "stringValue": "chips",
                                                                                                                                            "kind": "stringValue"
                                                                                                                                        },
                                                                                                                                        "options": {
                                                                                                                                            "listValue": {
                                                                                                                                                "values": [
                                                                                                                                                    {
                                                                                                                                                        "structValue": {
                                                                                                                                                            "fields": {
                                                                                                                                                                "id": {
                                                                                                                                                                    "stringValue": "1",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                },
                                                                                                                                                                "text": {
                                                                                                                                                                    "stringValue": "SRC Dues",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                        "kind": "structValue"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "structValue": {
                                                                                                                                                            "fields": {
                                                                                                                                                                "id": {
                                                                                                                                                                    "stringValue": "2",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                },
                                                                                                                                                                "text": {
                                                                                                                                                                    "stringValue": "Departmental Dues",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                        "kind": "structValue"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "structValue": {
                                                                                                                                                            "fields": {
                                                                                                                                                                "id": {
                                                                                                                                                                    "stringValue": "3",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                },
                                                                                                                                                                "text": {
                                                                                                                                                                    "stringValue": "Testimonial",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                        "kind": "structValue"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "structValue": {
                                                                                                                                                            "fields": {
                                                                                                                                                                "id": {
                                                                                                                                                                    "stringValue": "4",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                },
                                                                                                                                                                "text": {
                                                                                                                                                                    "stringValue": "Vetting Forms",
                                                                                                                                                                    "kind": "stringValue"
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                        "kind": "structValue"
                                                                                                                                                    }
                                                                                                                                                ]
                                                                                                                                            },
                                                                                                                                            "kind": "listValue"
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "kind": "structValue"
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    "kind": "listValue"
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "kind": "listValue"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "kind": "structValue"
                                                                                        },
                                                                                        "source": {
                                                                                            "stringValue": "VIRTUAL_AGENT",
                                                                                            "kind": "stringValue"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            },
                                                                            {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "text": {
                                                                                            "structValue": {
                                                                                                "fields": {
                                                                                                    "redactedText": {
                                                                                                        "listValue": {
                                                                                                            "values": [
                                                                                                                {
                                                                                                                    "stringValue": "What is your first name?",
                                                                                                                    "kind": "stringValue"
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "kind": "listValue"
                                                                                                    },
                                                                                                    "text": {
                                                                                                        "listValue": {
                                                                                                            "values": [
                                                                                                                {
                                                                                                                    "stringValue": "What is your first name?",
                                                                                                                    "kind": "stringValue"
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "kind": "listValue"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "kind": "structValue"
                                                                                        },
                                                                                        "source": {
                                                                                            "stringValue": "VIRTUAL_AGENT",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "responseType": {
                                                                                            "stringValue": "PARAMETER_PROMPT",
                                                                                            "kind": "stringValue"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "kind": "listValue"
                                                                }
                                                            }
                                                        },
                                                        "kind": "structValue"
                                                    },
                                                    "Type": {
                                                        "stringValue": "STATE_MACHINE",
                                                        "kind": "stringValue"
                                                    }
                                                }
                                            },
                                            "kind": "structValue"
                                        }
                                    }
                                },
                                "kind": "structValue"
                            }
                        ]
                    },
                    "kind": "listValue"
                },
                "Alternative Matched Intents": {
                    "listValue": {
                        "values": [
                            {
                                "structValue": {
                                    "fields": {
                                        "DisplayName": {
                                            "stringValue": "Default Welcome Intent",
                                            "kind": "stringValue"
                                        },
                                        "Id": {
                                            "stringValue": "00000000-0000-0000-0000-000000000000",
                                            "kind": "stringValue"
                                        },
                                        "Score": {
                                            "numberValue": 1,
                                            "kind": "numberValue"
                                        },
                                        "Type": {
                                            "stringValue": "NLU",
                                            "kind": "stringValue"
                                        },
                                        "Active": {
                                            "boolValue": true,
                                            "kind": "boolValue"
                                        }
                                    }
                                },
                                "kind": "structValue"
                            }
                        ]
                    },
                    "kind": "listValue"
                },
                "Transition Targets Chain": {
                    "listValue": {
                        "values": []
                    },
                    "kind": "listValue"
                },
                "Webhook Latencies (ms)": {
                    "listValue": {
                        "values": [
                            {
                                "numberValue": 470,
                                "kind": "numberValue"
                            }
                        ]
                    },
                    "kind": "listValue"
                },
                "Triggered Transition Names": {
                    "listValue": {
                        "values": [
                            {
                                "stringValue": "bf0770ed-bc26-40f7-9e68-4250a8a34a5c",
                                "kind": "stringValue"
                            }
                        ]
                    },
                    "kind": "listValue"
                }
            }
        },
        "match": {
            "intent": {
                "trainingPhrases": [],
                "parameters": [],
                "labels": {},
                "name": "projects/grecords/locations/us-central1/agents/8660fa0e-390d-4cd3-a960-553066b8111b/intents/00000000-0000-0000-0000-000000000000",
                "displayName": "Default Welcome Intent",
                "priority": 0,
                "isFallback": false,
                "description": ""
            },
            "parameters": null,
            "resolvedInput": "hi",
            "matchType": "INTENT",
            "confidence": 1,
            "event": ""
        },
        "sentimentAnalysisResult": null,
        "text": "hi",
        "query": "text"
    },
    "outputAudio": {
        "type": "Buffer",
        "data": []
    },
    "outputAudioConfig": null,
    "responseType": "FINAL",
    "allowCancellation": false
}