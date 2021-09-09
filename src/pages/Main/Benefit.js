import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Benefit extends Component {
  render() {
    const { title, benefitList } = this.props;
    return (
      <div className="benefit">
        <div className="benefitGoods">
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>
        <div className="benefitList">
          <ul className="benefitListImg">
            {benefitList.map(benefit => {
              return (
                <li key={benefit.id}>
                  <Link to="/detail" className="thumbGoods">
                    <img src={benefit.image_list} />
                  </Link>
                  <div className="innerInfo">
                    <span className="innerInfo1">{benefit.infomation}</span>
                    <span className="innerInfo2">{benefit.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Benefit;
