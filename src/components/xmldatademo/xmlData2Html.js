import React, { PropTypes } from 'react';

class XmlData2Html extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <h1>Xml Data to Html Demo</h1>
                <table className="table">
                    <thead>
                        <th>col1</th>
                        <th>col2</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>row1col1</td>
                            <td>row1col2</td>
                        </tr>
                        <tr>
                            <td>row2col1</td>
                            <td>row2col2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default XmlData2Html;