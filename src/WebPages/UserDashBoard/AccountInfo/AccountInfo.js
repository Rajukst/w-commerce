import React from 'react';
import { useOrdersQuery } from '../../../redux/allFeatures/orders/orderApi';

const AccountInfo = () => {
    const { data: orders, isLoading, } = useOrdersQuery() || {};


    return (
        <div className="AddressInfo">
          <h4>Billing Address</h4>
          <div className="blogComment">
          <div className="nameNdEmail">
                <div className="name">
                  <div className="mainInfo">
                    <div className="infoHead">
                      <div className="title">
                        <h6>Name:</h6>
                      </div>
                      <div className="inputTitle">
                      <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                        
                        />
                        
                      </div>
                      <div className="title">
                        <h6>Phone:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                        
                        />
                      </div>
                      <div className="title">
                        <h6>Email:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type="email"
                          name=""
                          id=""
                          required
                         
                        
                        />
                      </div>
                      <div className="title">
                        <h6>Address:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                         
                        />
                      </div>
                      <div className="titles">
                        <h6>District:</h6>
                      </div>
                      <div className="inputTitles">
                      <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                         
                        />
                      </div>
                      <div className="title">
                        <h6>State:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                    
                        />
                      </div>
                      <div className="title">
                        <h6>Zip Code:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="postCMNT">
                <button type="submit" className="mb-5 shopBTN">
                 Update
                </button>
              </div>
          </div>
        </div>
    );
};

export default AccountInfo;