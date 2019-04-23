import React, { PropTypes } from 'react';
import $ from 'jquery';
import XmlDataApi  from '../../api/mockXmlDataApi';

class XmlData2Html extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cols : [
                {id: 1, name: 'Subject 1'}, 
                {id: 2, name: 'Subject 2'}, 
                {id: 3, name: 'Subject 3'}
            ],
            rows: []
        };
    }

    componentDidMount() {
        XmlDataApi.getDemoExamResult()
        .then(data => this.parseXmlData(data))
        .catch(ex => { 
            throw(ex); 
        });
    }

    parseXmlData(data) {
        //ref link: https://stackoverflow.com/questions/16113188/convert-xml-to-html-using-jquery-javascript
        let parsedData = $.parseXML(data);
        let dataRootNode = $(parsedData).find('nested-root');
        let rows=[];
        dataRootNode.children().each((idx, resultNode)=> {
            let rowData = {
                rollNum: $(resultNode).attr('rollnum')
            };
            $(resultNode).children().each((jdx, subjectNode) => {
                rowData[$(subjectNode).prop('id')] = $(subjectNode).text();
            });
            rows.push(rowData);
        });

        console.log(rows);
        this.setState({cols: this.state.cols, rows: rows});
    }

    render() {
        return (
            <div>
                <h1>Xml Data to Html Demo</h1>
                <table className="table">
                    <thead>
                        <th>Roll Number</th>
                        {this.state.cols.map(col => <th key={col.id}>{col.name}</th>)}
                    </thead>
                    <tbody>
                        {this.state.rows.map(row => { 
                            <tr>
                                <td>row1col1</td>
                                <td>row1col2</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default XmlData2Html;