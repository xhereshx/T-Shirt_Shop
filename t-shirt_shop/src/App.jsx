import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./Components/NavBar";
import T_Shirts from "./Components/T_Shirts";
import Data from "./Data/T_Shirts.json";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Basket from "./Components/Basket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // details = (id) => {
  //   let detail;
  //   Data.map((postDetail, index) => {
  //     // return <h1>{postDetail.photo}</h1>;
  //     // if (postDetail.id === id) {
  //     detail = postDetail;
  //     console.log(detail);
  //     console.log(postDetail);
  //     // }
  //   });
  //   this.setState({
  //     tShirtDetail: detail,
  //   });
  //   // console.log(tShirtDetail);
  // };
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <div className="main_page_flexbox">
                {Data.map((postDetail, index) => {
                  return <T_Shirts key={index} postDetail={postDetail} />;
                })}
              </div>
            </Route>
            <Route path="/o_nás" component={About}></Route>
            {/* path="/Onás" */}
            {/* component={About} */}
            <Route path="/košík" component={Basket}></Route>
          </Switch>
        </BrowserRouter>
        {/* <T_Shirts /> */}
        {/* <p>nikam nejezdi </p> */}

        {/* {PostData} */}
        {/* {console.log(detail)} */}
        {/* {console.log(tShirtDetail)} */}
      </div>
    );
  }
}

export default App;
