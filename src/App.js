{
    "_id" : "veterinary",
    "form" : {
        "pages" : [ 
            {
                "elements" : [ 
                    {
                        "type" : "panel",
                        "elements" : [ 
                            {
                                "type" : "html",
                                "name" : "income_intro",
                                "html" : "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>   Pet Owners Survey   </h1>    <div class='intro__body wysiwyg'>       <p>PetCare Hospital is a full service veterinary hospital located in Bangalore. In this section, you will be asked about your Pet Details.</p>       <p>It will be handy to have the following in front of you:</p>       <ul>        \t<li>        \t\tWe provide quality and compassionate health care to your pet with a personal touch        \t</li>        \t<li>        \t\t<p>We hope to promote and strengthen the bond between our clients, their pets, and our hospital family</p>       \t</li>        \t<li>        \t\tWe strive to give you and your pet the best veterinary care        \t</li>       </ul>         </div> </article>"
                            }
                        ],
                        "name" : "panel1"
                    }
                ],
                "name" : "page0"
            }, 
            {
                "elements" : [ 
                    {
                        "name" : "petName",
                        "type" : "text",
                        "title" : "What is your pet's name?",
                        "isRequired" : true
                    }, 
                    {
                        "name" : "age",
                        "type" : "multipletext",
                        "title" : "How old is your pet?",
                        "items" : [ 
                            {
                                "name" : "Years",
                                "inputType" : "number",
                                "validators" : [ 
                                    {
                                        "type" : "numeric",
                                        "minValue" : 0,
                                        "maxValue" : 69
                                    }
                                ]
                            }, 
                            {
                                "name" : "Months",
                                "inputType" : "number",
                                "validators" : [ 
                                    {
                                        "type" : "numeric",
                                        "minValue" : 1,
                                        "maxValue" : 12
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        "type" : "checkbox",
                        "name" : "bestDogs",
                        "title" : "Which of the following breeds best describes your dog? (Check all that apply)",
                        "colCount" : 4,
                        "choices" : [ 
                            "Afghan Hound", 
                            "American Cocker Spaniel", 
                            "Begale", 
                            "Airedale Terrier", 
                            "Boston Terrier", 
                            "Boxer", 
                            "Bulldog", 
                            "Cavalier King Charles Spaniel", 
                            "Chihuahua", 
                            "Dachshund", 
                            "Dalmatian", 
                            "Doberman Pinscher", 
                            "German Shepherd", 
                            "Golden Retriever", 
                            "Great Dane", 
                            "Labrador Retriever", 
                            "Maltese", 
                            "Miniature Pinscher", 
                            "Miniature Schnauzer", 
                            " Pembroke Welsh Corgi", 
                            "Pomeranian", 
                            "Poodle", 
                            "Pug", 
                            "Rhodesian Ridgeback", 
                            "Rottweiler", 
                            "Shetland Sheepdog", 
                            "Shih Tzu", 
                            " Yorkshire Terrier"
                        ]
                    }, 
                    {
                        "type" : "checkbox",
                        "name" : "bestCats",
                        "title" : "Which of the following breeds best describes your cat? (Check all that apply)",
                        "colCount" : 4,
                        "choices" : [ 
                            "Abyssinian", 
                            "American Shorthair", 
                            "Birman", 
                            "British Shorthair", 
                            "Burmese", 
                            "Cornish Rex", 
                            "Devon Rex", 
                            "Exotic Shorthair", 
                            "Maine Coon", 
                            "Norwegian Forest   ", 
                            "Ocicat", 
                            "Oriental", 
                            "Persian", 
                            "Ragdoll", 
                            "Russian Blue", 
                            "Scottish Fold", 
                            "Siamese", 
                            "Siberian", 
                            "Sphynx", 
                            "Tomkinese"
                        ]
                    }, 
                    {
                        "type" : "checkbox",
                        "name" : "behavioralProblems",
                        "title" : "Which, if any, of the following behavioral problems does your pet have? (Check all that apply)",
                        "colCount" : 1,
                        "choices" : [ 
                            "Aggression", 
                            "ACompulsive disorders", 
                            "Phobias", 
                            "Separation anxiety"
                        ]
                    }, 
                    {
                        "type" : "checkbox",
                        "name" : "strangersMeetFirst",
                        "title" : "Which of the following behaviors does your pet typically exhibit when first meeting a stranger? (Check all that apply)",
                        "colCount" : 1,
                        "choices" : [ 
                            "Tries to bite or nip", 
                            "Looks away or hangs head", 
                            "Seeks attention", 
                            "Urinates"
                        ]
                    }, 
                    {
                        "type" : "radiogroup",
                        "name" : "aroundStrangers",
                        "title" : "How nervous is your pet when it is around strangers?",
                        "colCount" : 1,
                        "choices" : [ 
                            "Extremely nervous", 
                            "Very nervous", 
                            "Moderately nervous", 
                            "Slightly nervous", 
                            "Not at all nervous"
                        ]
                    }, 
                    {
                        "type" : "radiogroup",
                        "name" : "aggresive",
                        "title" : "How aggressive is your pet with strangers?",
                        "colCount" : 1,
                        "choices" : [ 
                            "Extremely aggressive", 
                            "Very aggressive", 
                            "Moderately aggressive", 
                            "Slightly aggressive", 
                            "Not at all aggressive"
                        ]
                    }, 
                    {
                        "type" : "radiogroup",
                        "name" : "friendly",
                        "title" : "How friendly is your pet with strangers?",
                        "colCount" : 1,
                        "choices" : [ 
                            "Extremely friendly", 
                            "Very friendly", 
                            "Moderately friendly", 
                            "Slightly friendly", 
                            "Not at all friendly"
                        ]
                    }, 
                    {
                        "type" : "text",
                        "name" : "visitVeterinarian",
                        "title" : "In a typical year, how many times does your pet visit a veterinarian?",
                        "validators" : [ 
                            {
                                "type" : "numeric",
                                "minValue" : 0,
                                "maxValue" : 400
                            }
                        ],
                        "inputType" : "number"
                    }, 
                    {
                        "type" : "text",
                        "name" : "teethCleaned",
                        "title" : "In a typical year, how many times does your pet have its teeth cleaned?",
                        "validators" : [ 
                            {
                                "type" : "numeric",
                                "minValue" : 0,
                                "maxValue" : 400
                            }
                        ],
                        "inputType" : "number"
                    }, 
                    {
                        "type" : "checkbox",
                        "name" : "veterinaryServices",
                        "title" : "Which, if any, of the following veterinary specialty services has your pet received? (Check all that apply)",
                        "choices" : [ 
                            "Radiation oncology", 
                            "Internal medicine", 
                            "Rehabilitation", 
                            "Ophthalmology", 
                            "Neurology", 
                            "Animal behavior", 
                            "Oncology", 
                            "Radiology", 
                            "Cardiology", 
                            "Surgery"
                        ],
                        "colCount" : 2
                    }, 
                    {
                        "type" : "text",
                        "name" : "noOfPetshousehold",
                        "title" : "How many pets currently live in your household?",
                        "validators" : [ 
                            {
                                "type" : "numeric",
                                "minValue" : 0,
                                "maxValue" : 400
                            }
                        ],
                        "inputType" : "number"
                    }, 
                    {
                        "type" : "radiogroup",
                        "name" : "insurance",
                        "title" : "Do you have medical insurance for your pet, or not?",
                        "choices" : [ 
                            "Yes, I do", 
                            "No, I do not"
                        ]
                    }, 
                    {
                        "type" : "text",
                        "name" : "mealsEat",
                        "title" : "In a typical day, how many meals does your pet eat?",
                        "validators" : [ 
                            {
                                "type" : "numeric",
                                "minValue" : 0,
                                "maxValue" : 400
                            }
                        ],
                        "inputType" : "number"
                    }, 
                    {
                        "type" : "text",
                        "name" : "outdoors",
                        "title" : "In a typical day, about how many times does your pet go outdoors?",
                        "validators" : [ 
                            {
                                "type" : "numeric",
                                "minValue" : 0,
                                "maxValue" : 400
                            }
                        ],
                        "inputType" : "number"
                    }, 
                    {
                        "type" : "text",
                        "name" : "spendAlone",
                        "title" : "In a typical day, about how many hours does your pet spend alone?",
                        "validators" : [ 
                            {
                                "type" : "numeric",
                                "minValue" : 0,
                                "maxValue" : 400
                            }
                        ],
                        "inputType" : "number"
                    }, 
                    {
                        "type" : "radiogroup",
                        "name" : "sleep",
                        "title" : "Where does your pet typically sleep at night?",
                        "choices" : [ 
                            "In bed with me", 
                            "In bed with another member of the household", 
                            "Outside without shelter", 
                            "Outside with shelter", 
                            "Inside on the floor", 
                            "Inside on a raised platform", 
                            "Inside in a pet basket or pet bed", 
                            "Inside in a crate or kennel"
                        ],
                        "colCount" : 2
                    }, 
                    {
                        "type" : "radiogroup",
                        "name" : "training",
                        "title" : "How much training has your pet received?",
                        "choices" : [ 
                            "A great deal", 
                            "A lot", 
                            "A moderate amount", 
                            "A little", 
                            "None at all"
                        ],
                        "colCount" : 2
                    }, 
                    {
                        "type" : "checkbox",
                        "name" : "whyPet",
                        "title" : "Why do you have a pet? (Check all that apply)",
                        "choices" : [ 
                            "Hunting", 
                            "Disability assistance", 
                            "Companionship", 
                            "Protection", 
                            "Herding"
                        ],
                        "colCount" : 2
                    }
                ],
                "name" : "page1"
            }
        ]
    },
    "__v" : 0
}
