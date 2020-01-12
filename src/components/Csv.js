import React, { Component } from 'react'
import CSVReader from "react-csv-reader";

export default class CSV extends Component {
    render() {
        return (
            <section className="content-header">
             <div className="container">
                <CSVReader
                cssClass="react-csv-input"
                label="Select CSV with secret Death Star statistics"
                onFileLoaded={handleForce}
                />
                <p>and then open the console</p>
            </div>
            </section>
        )
    }
}
