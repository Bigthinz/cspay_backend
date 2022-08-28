{
    "responseId": "01be7451-d85f-4104-99e2-81d57f2c59ca",
    "queryResult": {
        "responseMessages": [
            {
                "text": {
                    "text": [
                        "To complete your payment, I will first need to collect your payment details."
                    ],
                    "allowPlaybackInterruption": false
                },
                "message": "text"
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
        "webhookPayloads": [],
        "webhookStatuses": [],
        "languageCode": "en",
        "parameters": {
            "fields": {
                "sessionId": {
                    "stringValue": "123456788",
                    "kind": "stringValue"
                },
                "verified": {
                    "stringValue": "false",
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
            "name": "projects/grecords/locations/us-central1/agents/8660fa0e-390d-4cd3-a960-553066b8111b/intents/4c294160-2156-4bfc-bb59-1cbe1b7f9515",
            "displayName": "payDues",
            "priority": 0,
            "isFallback": false,
            "description": ""
        },
        "intentDetectionConfidence": 0.3416995406150818,
        "diagnosticInfo": {
            "fields": {
                "Triggered Transition Names": {
                    "listValue": {
                        "values": [
                            {
                                "stringValue": "8454731e-6d4f-4527-944f-9a51a85326ae",
                                "kind": "stringValue"
                            },
                            {
                                "stringValue": "583768e2-5cbd-4c15-b0db-488bb74db431",
                                "kind": "stringValue"
                            }
                        ]
                    },
                    "kind": "listValue"
                },
                "Transition Targets Chain": {
                    "listValue": {
                        "values": [
                            {
                                "structValue": {
                                    "fields": {
                                        "TargetPage": {
                                            "stringValue": "6b65002f-9fb9-4662-9a97-f6a5df599b04",
                                            "kind": "stringValue"
                                        }
                                    }
                                },
                                "kind": "structValue"
                            },
                            {
                                "structValue": {
                                    "fields": {
                                        "TargetPage": {
                                            "stringValue": "08514530-0d99-46eb-9e82-653b5ab8e12e",
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
                "Alternative Matched Intents": {
                    "listValue": {
                        "values": [
                            {
                                "structValue": {
                                    "fields": {
                                        "Id": {
                                            "stringValue": "4c294160-2156-4bfc-bb59-1cbe1b7f9515",
                                            "kind": "stringValue"
                                        },
                                        "Score": {
                                            "numberValue": 0.3416995406150818,
                                            "kind": "numberValue"
                                        },
                                        "Type": {
                                            "stringValue": "NLU",
                                            "kind": "stringValue"
                                        },
                                        "Active": {
                                            "boolValue": true,
                                            "kind": "boolValue"
                                        },
                                        "DisplayName": {
                                            "stringValue": "payDues",
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
                "Execution Sequence": {
                    "listValue": {
                        "values": [
                            {
                                "structValue": {
                                    "fields": {
                                        "Step 1": {
                                            "structValue": {
                                                "fields": {
                                                    "Type": {
                                                        "stringValue": "INITIAL_STATE",
                                                        "kind": "stringValue"
                                                    },
                                                    "InitialState": {
                                                        "structValue": {
                                                            "fields": {
                                                                "SessionParameters": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "paydues": {
                                                                                "stringValue": "payDues",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "verified": {
                                                                                "stringValue": "false",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "email": {
                                                                                "nullValue": "NULL_VALUE",
                                                                                "kind": "nullValue"
                                                                            },
                                                                            "sessionId": {
                                                                                "stringValue": "123456788",
                                                                                "kind": "stringValue"
                                                                            }
                                                                        }
                                                                    },
                                                                    "kind": "structValue"
                                                                },
                                                                "MatchedIntent": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "Type": {
                                                                                "stringValue": "NLU",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "DisplayName": {
                                                                                "stringValue": "payDues",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Active": {
                                                                                "boolValue": true,
                                                                                "kind": "boolValue"
                                                                            },
                                                                            "Score": {
                                                                                "numberValue": 0.3416995406150818,
                                                                                "kind": "numberValue"
                                                                            },
                                                                            "Id": {
                                                                                "stringValue": "4c294160-2156-4bfc-bb59-1cbe1b7f9515",
                                                                                "kind": "stringValue"
                                                                            }
                                                                        }
                                                                    },
                                                                    "kind": "structValue"
                                                                },
                                                                "FlowState": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "PageState": {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "FormFilled": {
                                                                                            "boolValue": false,
                                                                                            "kind": "boolValue"
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
                                                                                        "Name": {
                                                                                            "stringValue": "Pay Dues",
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
                                                                            "Name": {
                                                                                "stringValue": "Default Start Flow",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Version": {
                                                                                "numberValue": 0,
                                                                                "kind": "numberValue"
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
                                        "Step 2": {
                                            "structValue": {
                                                "fields": {
                                                    "Type": {
                                                        "stringValue": "STATE_MACHINE",
                                                        "kind": "stringValue"
                                                    },
                                                    "StateMachine": {
                                                        "structValue": {
                                                            "fields": {
                                                                "FlowState": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "PageState": {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "ActiveParameter": {
                                                                                            "stringValue": "firstname",
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
                                                                                        "Name": {
                                                                                            "stringValue": "Pay Dues",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "Status": {
                                                                                            "stringValue": "TRANSITION_ROUTING",
                                                                                            "kind": "stringValue"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            },
                                                                            "Name": {
                                                                                "stringValue": "Default Start Flow",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Version": {
                                                                                "numberValue": 0,
                                                                                "kind": "numberValue"
                                                                            },
                                                                            "FlowId": {
                                                                                "stringValue": "00000000-0000-0000-0000-000000000000",
                                                                                "kind": "stringValue"
                                                                            }
                                                                        }
                                                                    },
                                                                    "kind": "structValue"
                                                                },
                                                                "FlowLevelTransition": {
                                                                    "boolValue": true,
                                                                    "kind": "boolValue"
                                                                },
                                                                "TriggeredTransitionRouteId": {
                                                                    "stringValue": "8454731e-6d4f-4527-944f-9a51a85326ae",
                                                                    "kind": "stringValue"
                                                                },
                                                                "TargetPage": {
                                                                    "stringValue": "6b65002f-9fb9-4662-9a97-f6a5df599b04",
                                                                    "kind": "stringValue"
                                                                },
                                                                "TriggeredIntent": {
                                                                    "stringValue": "payDues",
                                                                    "kind": "stringValue"
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
                                                                        "values": []
                                                                    },
                                                                    "kind": "listValue"
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
                                                    "FunctionExecution": {
                                                        "structValue": {
                                                            "fields": {
                                                                "Responses": {
                                                                    "listValue": {
                                                                        "values": []
                                                                    },
                                                                    "kind": "listValue"
                                                                }
                                                            }
                                                        },
                                                        "kind": "structValue"
                                                    },
                                                    "StateMachine": {
                                                        "structValue": {
                                                            "fields": {
                                                                "FlowState": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "PageState": {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "PageId": {
                                                                                            "stringValue": "6b65002f-9fb9-4662-9a97-f6a5df599b04",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "Status": {
                                                                                            "stringValue": "TRANSITION_ROUTING",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "Name": {
                                                                                            "stringValue": "Pay Dues Menu",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "FormFilled": {
                                                                                            "boolValue": true,
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
                                                                },
                                                                "TriggeredCondition": {
                                                                    "stringValue": "$session.params.email = null OR $session.params.email = undefined",
                                                                    "kind": "stringValue"
                                                                },
                                                                "TriggeredTransitionRouteId": {
                                                                    "stringValue": "583768e2-5cbd-4c15-b0db-488bb74db431",
                                                                    "kind": "stringValue"
                                                                },
                                                                "TargetPage": {
                                                                    "stringValue": "08514530-0d99-46eb-9e82-653b5ab8e12e",
                                                                    "kind": "stringValue"
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
                            },
                            {
                                "structValue": {
                                    "fields": {
                                        "Step 4": {
                                            "structValue": {
                                                "fields": {
                                                    "StateMachine": {
                                                        "structValue": {
                                                            "fields": {
                                                                "FlowState": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "Name": {
                                                                                "stringValue": "Default Start Flow",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "Version": {
                                                                                "numberValue": 0,
                                                                                "kind": "numberValue"
                                                                            },
                                                                            "FlowId": {
                                                                                "stringValue": "00000000-0000-0000-0000-000000000000",
                                                                                "kind": "stringValue"
                                                                            },
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
                                                                                        "Status": {
                                                                                            "stringValue": "ENTERING_PAGE",
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
                                                    },
                                                    "Type": {
                                                        "stringValue": "STATE_MACHINE",
                                                        "kind": "stringValue"
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
                                                                                        "responseType": {
                                                                                            "stringValue": "ENTRY_PROMPT",
                                                                                            "kind": "stringValue"
                                                                                        },
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
                                                                                                                    "stringValue": "To complete your payment, I will first need to collect your payment details.",
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
                                                                                                                    "stringValue": "To complete your payment, I will first need to collect your payment details.",
                                                                                                                    "kind": "stringValue"
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "kind": "listValue"
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
                                        "Step 5": {
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
                                                                                        "responseType": {
                                                                                            "stringValue": "ENTRY_PROMPT",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "text": {
                                                                                            "structValue": {
                                                                                                "fields": {
                                                                                                    "text": {
                                                                                                        "listValue": {
                                                                                                            "values": [
                                                                                                                {
                                                                                                                    "stringValue": "To complete your payment, I will first need to collect your payment details.",
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
                                                                                                                    "stringValue": "To complete your payment, I will first need to collect your payment details.",
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
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "kind": "structValue"
                                                                            },
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
                                                                                                                    "stringValue": "What is your first name?",
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
                                                    },
                                                    "StateMachine": {
                                                        "structValue": {
                                                            "fields": {
                                                                "FlowState": {
                                                                    "structValue": {
                                                                        "fields": {
                                                                            "Name": {
                                                                                "stringValue": "Default Start Flow",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "FlowId": {
                                                                                "stringValue": "00000000-0000-0000-0000-000000000000",
                                                                                "kind": "stringValue"
                                                                            },
                                                                            "PageState": {
                                                                                "structValue": {
                                                                                    "fields": {
                                                                                        "PageId": {
                                                                                            "stringValue": "08514530-0d99-46eb-9e82-653b5ab8e12e",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "Name": {
                                                                                            "stringValue": "Pay Dues",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "Status": {
                                                                                            "stringValue": "PROCESSING_FORM",
                                                                                            "kind": "stringValue"
                                                                                        },
                                                                                        "ActiveParameter": {
                                                                                            "stringValue": "firstname",
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
                            }
                        ]
                    },
                    "kind": "listValue"
                },
                "Session Id": {
                    "stringValue": "123456788",
                    "kind": "stringValue"
                }
            }
        },
        "match": {
            "intent": {
                "trainingPhrases": [],
                "parameters": [],
                "labels": {},
                "name": "projects/grecords/locations/us-central1/agents/8660fa0e-390d-4cd3-a960-553066b8111b/intents/4c294160-2156-4bfc-bb59-1cbe1b7f9515",
                "displayName": "payDues",
                "priority": 0,
                "isFallback": false,
                "description": ""
            },
            "parameters": null,
            "resolvedInput": "pay",
            "matchType": "INTENT",
            "confidence": 0.3416995406150818,
            "event": ""
        },
        "sentimentAnalysisResult": null,
        "text": "pay",
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