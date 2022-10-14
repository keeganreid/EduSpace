import React from "react";
import * as Survey from "survey-react";
import '../styles/Styles.css';
import "survey-react/survey.css";
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
      //classes.mainRoot += " sv_qstn";
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
      /* if (options.question.getType() === "matrixdropdown") {
        classes.root += " sq-root-rat";
    }*/

      if (options.question.getType() === "radiogroup") {
        classes.root += " sq-root-cb";
      }
    }
  };

  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }
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
                    "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",
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
                    "Please rank these impacts by fears. Where 1 is the impact your fear the most and 3 you fear the least. Please select numbers in front of the impact text accordingly",
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
                        "What regions are you willing to sell the solution/products to?"
                    },
                    {
                      name: "business",
                      title:
                        "What type of business are you willing to sell the solutio/product to? "
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
                    "🔧Why are considering an evaluation/certification of your Solution/Product?",
                  // isRequired: true,
                  hasOther: true,
                  otherText: "Others",
                  colCount: 4,
                  // "choicesOrder": "asc",
                  choices: [
                    {
                      value: "government",
                      text: "Government bid "
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

        /******************************* End of Likelihood ********************************** */
      ],
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
      <div>The component after onComplete event
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


function functionalitySurvey() {


  return (
    <div className="functionalitySurvey">
      <h1>Survey</h1>
      <h2>Checkbox - none of the above and select all</h2>
      <SurveyComponent />
      <button style={{'float':'right'}}>
        click to go back
      </button>
    </div>
  )
}

export default functionalitySurvey