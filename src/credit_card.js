import React from 'react';

class CreditCardInput extends React.Component {

    constructor(props) {
        super();
        this.state = {
            cardNumber: [],
            inp0: '',
            inp1: '',
            inp2: '',
            inp3: ''
        };
        this.changeFocus = this.changeFocus.bind(this);
        this.pasteCreditNumber = this.pasteCreditNumber.bind(this);
        this.changehandler = this.changehandler.bind(this);
    }

    changehandler(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeFocus(e) {
        var inpId = e.target.attributes['id'].value;
        if (e.target.value.length >= parseInt(e.target.attributes["maxLength"].value)) {
            document.getElementById(inpId).nextElementSibling.focus();
        }
        else if (e.target.value.length === 0) {
            document.getElementById(inpId).previousElementSibling.focus();
        }
    }

    pasteCreditNumber(e) {
        var cardNumberPastedValue = (e.clipboardData.getData('text/plain'));
        var { cardNumber } = this.state;

        cardNumber = cardNumberPastedValue.match(/.{1,4}/g);

        document.getElementById('ip3').focus();
        this.setState({
            inp0: cardNumber[0],
            inp1: cardNumber[1],
            inp2: cardNumber[2],
            inp3: cardNumber[3]
        })
    }

    render() {
        return (
            <div>
                <label>
                    Card Number*
                </label>
                <input
                    type="text"
                    id='ip0'
                    name="inp0"
                    size="16"
                    value={this.state.inp0 ? this.state.inp0 : ''}
                    onChange={this.changehandler.bind(this)}
                    onPaste={this.pasteCreditNumber.bind(this)}
                    onKeyUp={this.changeFocus.bind(this)}
                    maxLength="4" />
                <input
                    type="text"
                    id='ip1'
                    name="inp1"
                    size="16"
                    value={this.state.inp1 ? this.state.inp1 : ''}
                    onChange={this.changehandler.bind(this)}
                    onPaste={this.pasteCreditNumber.bind(this)}
                    onKeyUp={this.changeFocus.bind(this)}
                    maxLength="4" />
                <input
                    type="text"
                    id='ip2'
                    name="inp2"
                    size="16"
                    value={this.state.inp2 ? this.state.inp2 : ''}
                    onChange={this.changehandler.bind(this)}
                    onPaste={this.pasteCreditNumber.bind(this)}
                    onKeyUp={this.changeFocus.bind(this)}
                    maxLength="4" />
                <input
                    type="text"
                    id='ip3'
                    name="inp3"
                    size="16"
                    value={this.state.inp3 ? this.state.inp3 : ''}
                    onChange={this.changehandler.bind(this)}
                    onPaste={this.pasteCreditNumber.bind(this)}
                    onKeyUp={this.changeFocus.bind(this)}
                    maxLength="4" />
            </div>
        )
    }
}

export default CreditCardInput;
