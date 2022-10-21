import React from "react";
import * as Survey from "survey-react";
import '../styles/Styles.css';
import "survey-react/survey.css";
import AddStoint from "./AddStoint";
import { useNavigate } from "react-router-dom";

Survey.JsonObject.metaData.addProperty("itemvalue", { name: "score:number" });
Survey.matrixDropdownColumnTypes.rating = {
  properties: ["rateValues"]
};



class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    

    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  

  // updates the question class
  onUpdateQuestionCssClasses = (survey, options) => {
    var classes = options.cssClasses;

    classes.title = "sq-title";

    if (options.question.getType() === "imagepicker") {
      classes.root += " sq-root-ip";
      classes.item += " sq-item-ip";
      classes.itemChecked += " sq-itemchecked-ip";
      classes.itemInline += " sq-iteminline-ip";
      classes.label += " sq-label-ip";
      classes.itemControl += " sq-itemcontrol-ip";
      classes.image += " sq-image-ip";
      classes.itemText += " sq-itemtext-ip";
      classes.clearButton += " sq-clearbutton-ip";
      classes.column += " sq-column-ip";
    } else {
      classes.root += " sq-root";
      classes.item += " sq-item";
      classes.label += " sq-label";

      if (options.question.isRequired) {
        classes.title += " sq-title-required";
        classes.root += " sq-root-required";
      }

      if (options.question.getType() === "checkbox") {
        classes.root += " sq-root-cb";
      }

      if (options.question.getType() === "radiogroup") {
        classes.root += " sq-root-cb";
      }
    }
  };

  // if the survey is completed.
  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }
  // the survey questions and options to select and comment, after this the survey is completed
  render() {
    let json = {
      pages: [
        {
          name: "page4",
          elements: [
            {
              type: "panel",
              name: "panel4",

              elements: [
                {
                  type: "matrixdropdown",
                  name: "question2",
                  title:
                    "Please rank how important each is. Where 1 is the least import and 5 you deem most important. Please select numbers in front of the impact text accordingly",
                  columns: [
                    {
                      cellType: "rating",
                      " name": "level",
                      title: "Level",
                      minRateDescription: "most",
                      maxRateDescription: "least"
                    },
                    {
                      name: "comments",
                      title: "Comments/Precision",
                      cellType: "text"
                    }
                  ],
                  choices: [1],
                  cellType: "checkbox",
                  rows: [
                    "Privacy",
                    "Confidentiality",
                    "Integrity",
                    "Availability",
                    "Authenticity"
                  ]
                }
              ]
            }
          ]
        },

        {
          name: "page5",
          elements: [
            {
              type: "panel",
              name: "panel5",

              elements: [
                {
                  type: "matrixdropdown",
                  name: "question3",
                  title:
                  "Please rank how important each is. Where 1 is the least import and 5 you deem most important. Please select numbers in front of the impact text accordingly",
                  columns: [
                    {
                      cellType: "rating",
                      " name": "level",
                      title: "Level",

                      rateValues: [
                        {
                          value: "value1",
                          text: "1"
                        },
                        {
                          value: "value2",
                          text: "2"
                        },
                        {
                          value: "value3",
                          text: "3"
                        }
                      ]
                    },
                    {
                      name: "comments2",
                      title: "Comments/Precision",
                      cellType: "text"
                    }
                  ],
                  choices: [1],
                  cellType: "checkbox",
                  rows: [
                    "Safety",
                    "Reputation & Financial Loss",
                    "Threat Scale"
                  ]
                }
              ]
            }
          ]
        },

        {
          name: "page6",
          elements: [
            {
              type: "panel",
              name: "panel6",
              elements: [
                {
                  type: "multipletext",
                  name: "pricelimit",
                  title: "From a market point of view: ",
                  colCount: 2,
                  items: [
                    {
                      name: "region",
                      title:
                        "Will you buy this tea based on the packaging?"
                    },
                    {
                      name: "business",
                      title:
                        "What type of shop are you willing to sell the tea to? "
                    }
                  ]
                },
                {
                  type: "comment",
                  name: "comment2",
                  title: "Comments/Precision"
                }
              ]
            }
          ]
        },

        {
          name: "page7",
          title: "General Considerations",
          elements: [
            {
              type: "panel",
              name: "panel7",

              elements: [
                {
                  type: "checkbox",
                  name: "car",
                  title:
                    "Why are considering buying this tea?",
                  hasOther: true,
                  otherText: "Others",
                  colCount: 4,
                  choices: [
                    {
                      value: "looks",
                      text: "Looks "
                    },
                    {
                      value: "customer",
                      text: "Customer requirement"
                    },
                    {
                      value: "nice",
                      text: "Nice to have "
                    },
                    {
                      value: "temperature",
                      text: "Temperature"
                    },
                    {
                      value: "improve",
                      text: "Improve security"
                    },
                    {
                      value: "marketing",
                      text: "Marketing"
                    },
                    {
                      value: "notsure",
                      text: "I'm not sure"
                    }
                  ]
                },

                {
                  name: "comment3",
                  title: "Please comment:",
                  type: "comment"

                  //"startWithNewLine": false,
                }
              ]
            }
          ]
        }

        /*end of the survey questions and optios to select */
      ],
      // if this function says on, the numbers of each question will appear on the page.
      showQuestionNumbers: "off",
      completedHtml: "<p><h4>Security Profile Results !!</h4></p>"
    };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
        onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div style={{margin: '1.5%'}}>
        Thank you for completing this survey.
        {/* adding a stoint */}
        <div>
          <AddStoint/>
        </div>
      </div>
    ) : null;
    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    );
  }
}

// function to add a Stoint
// function addStoint() {
//   function increaseStointHandler() {
//     alert("Thanks for clicking me")
//   }

//   return(
//     <>
//       <button onClick={increaseStointHandler}>Add Stoint</button>
//       <h3>You have 0 Stoints</h3>
//     </>
//   )
// }

function functionalitySurvey() {


  return (
    <div className="functionalitySurvey">
      <h1 className="pageHeading">Survey</h1>
      <SurveyComponent />
      {/* <AddStoint /> */}
    </div>
  )
}

export default functionalitySurvey