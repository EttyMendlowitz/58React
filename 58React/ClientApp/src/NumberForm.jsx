import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class NumberForm extends React.Component {


    render() {
        return (<div className="row">
            <div className="col-md-12">
                <button onClick={this.props.onAddClick} className="btn btn-success btn-lg w-100">Add</button>
            </div>
            <div style={{ maxHeight: 500 }}>
            </div>
        </div>

        )
    }
}

export default NumberForm;