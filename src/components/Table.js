import React, { Component } from 'react'


const [table, setTable] = useState([])
// fetch table

const fetchTable = () => {
    fetch('')
    .then(result => result.json())
    .then(data => setTable(data.hits))
    .catch(error => Console.log(err))
};

export default class CSV extends Component {
    render() {
        return (
            <section className="content">
                <div>
                    
                </div>
            </section>
        )
    }
}
