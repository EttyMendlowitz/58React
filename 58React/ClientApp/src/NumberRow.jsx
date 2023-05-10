import React from 'react';


class NumberRow extends React.Component{

    onSelectedClick = () => {
        this.props.onSelectClick(this.props.number);
    }


    render(){
        const {number, isSelected, isDisabled} = this.props;
        return(
            <tr>
                 <td>{number}</td>
                    <td>
                        <button className={isSelected? "btn btn-danger" : "btn btn-primary"} 
                        disabled={isDisabled}
                        onClick={this.onSelectedClick}>
                            {isSelected ? `Remove from selected` : `Add to Selected`}</button>
                    </td>
                    </tr>
        )
    }
}
export default NumberRow;