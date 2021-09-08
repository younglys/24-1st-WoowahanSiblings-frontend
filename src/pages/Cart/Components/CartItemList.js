import React, { Component } from "react";
import "./CartItemList.scss";

export default class CartItemList extends Component {
  render() {
    return (
      <div className="cartItemList">
        <ul className="itemClassify">
          <div className="tit">
            <div className="headerRight">
              <i class="fas fa-tint"></i>
              <div className="tit">냉장식품</div>
            </div>

            <div className="headerLeft">
              <i class="fas fa-chevron-up"></i>
            </div>
          </div>
          <li className="item">
            <div className="bodyRight">
              <span className="ico"></span>
              <img src="/" alt="img" />
            </div>
            <div className="bodyLeft">
              <div className="itemName"></div>
              <div className="quantityControl">
                <input></input>
              </div>
              <div className="itemPrice">
                <span className="price"></span>
              </div>
            </div>
          </li>

          <li className="item">
            <div className="bodyRight">
              <span className="ico"></span>
              <img src="/" alt="img" />
            </div>
            <div className="bodyLeft">
              <div className="itemName"></div>
              <div className="quantityControl">
                <input></input>
              </div>
              <div className="itemPrice">
                <span className="price"></span>
              </div>
            </div>
          </li>

          <li className="item">
            <div className="bodyRight">
              <span className="ico"></span>
              <img src="/" alt="img" />
            </div>
            <div className="bodyLeft">
              <div className="itemName"></div>
              <div className="quantityControl">
                <input></input>
              </div>
              <div className="itemPrice">
                <span className="price"></span>
              </div>
            </div>
          </li>
        </ul>
        <ul className="itemClassify">
          <div className="tit">
            <div className="headerRight">
              <i class="fas fa-tint"></i>
              <div className="tit">냉장식품</div>
            </div>

            <div className="headerLeft">
              <i class="fas fa-chevron-up"></i>
            </div>
          </div>
          <li className="item">
            <div className="bodyRight">
              <span className="ico"></span>
              <img src="/" alt="img" />
            </div>
            <div className="bodyLeft">
              <div className="itemName"></div>
              <div className="quantityControl">
                <input></input>
              </div>
              <div className="itemPrice">
                <span className="price"></span>
              </div>
            </div>
          </li>

          <li className="item">
            <div className="bodyRight">
              <span className="ico"></span>
              <img src="/" alt="img" />
            </div>
            <div className="bodyLeft">
              <div className="itemName"></div>
              <div className="quantityControl">
                <input></input>
              </div>
              <div className="itemPrice">
                <span className="price"></span>
              </div>
            </div>
          </li>

          <li className="item">
            <div className="bodyRight">
              <span className="ico"></span>
              <img src="/" alt="img" />
            </div>
            <div className="bodyLeft">
              <div className="itemName"></div>
              <div className="quantityControl">
                <input></input>
              </div>
              <div className="itemPrice">
                <span className="price"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
