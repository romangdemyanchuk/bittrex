import React from "react";
import './tableCategories.css'

const TableCategories = () => {
    return (
        <div>
            <div className="fields-name">
                <div className="field-name markets">
                    Market
                </div>
                <div className="field-name currency">
                    Currency
                </div>
                <div className="field-name volume">
                    Volume
                </div>
                <div className="field-name change">
                    Change
                </div>
                <div className="field-name price">
                    Last Price
                </div>
                <div className="field-name high">
                    24HR High
                </div>
                <div className="field-name low">
                    24HR Low
                </div>
                <div className="field-name spread">
                    % Spread
                </div>
                <div className="field-name added">
                    Added
                </div>
            </div>
        </div>
    )
};
export default TableCategories