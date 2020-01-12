import React, { Component } from 'react'


export default class Breadcrumb extends Component {
    render() {
        return (
            <section className="content-header">
                <h1>
                    { this.props.header }
                    <small>{ this.props.subheader }</small>
                </h1>
                <ol className="breadcrumb">
                    {this.props.arrow.map((value) => {
                        return <li class={ value.active }><a href={ value.link }><i className={ value.icon } /> { value.title }</a></li>
                    })}
                </ol>
            </section>
        )
    }
}
