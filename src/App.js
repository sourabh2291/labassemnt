import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";


function App() {
  const res = [{ name: "Free spirit", identity: 1 }, { name: "Achiever", identity: 2 }, { name: "Caregiver", identity: 3 }];

  const option1 = [{ name: "Achievement", type: "one" }, { name: "Conservation", type: "two" }, { name: "Caring", type: "two" }, { name: "Freedom", type: "four" }, { name: "Respect", type: "three" }, { name: "Tradition", type: "three" }, { name: "Enjoyment", type: "one" }, { name: "Stability", type: "two" }, { name: "Equality/Justice", type: "one" }];
  const option2 = [{ name: "Achievement", type: "four" }, { name: "Conservation", type: "two" }, { name: "Caring", type: "one" }, { name: "Freedom", type: "one" }, { name: "Respect", type: "three" }, { name: "Tradition", type: "four" }, { name: "Enjoyment", type: "three" }, { name: "Stability", type: "two" }, { name: "Equality/Justice", type: "two" }];
  const option3 = [{ name: "Achievement", type: "one" }, { name: "Conservation", type: "two" }, { name: "Caring", type: "four" }, { name: "Freedom", type: "two" }, { name: "Respect", type: "one" }, { name: "Tradition", type: "one" }, { name: "Enjoyment", type: "two" }, { name: "Stability", type: "three" }, { name: "Equality/Justice", type: "two" }];
  const option4 = [{ name: "Achievement", type: "" }, { name: "Conservation", type: "" }, { name: "Caring", type: "" }, { name: "Freedom", type: "" }, { name: "Respect", type: "" }, { name: "Tradition", type: "" }, { name: "Enjoyment", type: "" }, { name: "Stability", type: "" }, { name: "Equality/Justice", type: "" }];


  class Todo extends React.Component {
    state = {
      condition: null,
      selectOption: option4
    }

    setOption(option) {
      switch (option.identity) {
        case 1:
          return option1
        case 2:
          return option2
        case 3:
          return option3
        default:
          return option4
      }
    }

    render() {
      return (
        <div>
          <div className='center'>
            {
              res.map((data, k) => (
                <button
                  key={k}
                  className={`button ${this.state.condition === k ? "toggled" : ""}`}
                  onClick={() => {
                    this.setState(() => ({
                      condition: k,
                      selectOption: this.setOption(data)
                    }));

                  }
                  }
                >
                  {data.name}
                </button>
              ))
            }
          </div>
          <div className='circle-container' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
            {
              this.state.selectOption.map((data, i) => (
                <div key={i} className='outer-circle'>
                  {data.type !== "" ? <div className={`inner-circle ${data.type}`}></div> : null}
                  <div className='text'>{data.name}</div>
                </div>
              ))
            }
          </div>
        </div>

      );
    }
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(<Todo />, rootElement);


}

export default App;
