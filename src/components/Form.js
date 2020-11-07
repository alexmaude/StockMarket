import React from 'react';
import Dropdown from 'react-dropdown';
import '../App.css';

const reactFormContainer = document.querySelector('.react-form-container')

export class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            symbol: '',
            media: '',
            date: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    render() {
        return(
            <form className='react-form' onSubmit={this.handleSubmit}>
                <fieldset className='form-group'>
                    <Form htmlFor='formSymbol' title='Stock Symbol:' />

                    <input id='formSymbol' className='form-input' name='symbol' type='text' value={this.state.symbol} />
                </fieldset>

                <fieldset className='form-group'>
                    <Form htmlFor='formMedia' title='Social Media:' />

                    <input id='formMedia' className='form-input' name='media' type='text' value={this.state.media} />
                </fieldset>

                <fieldset className='form-group'>
                    <Form htmlFor='formDate' title='Subject:'/>

                    <input id='formDate' className='form-input' name='date' type='date' value={this.state.date} />
                </fieldset>

                <div className='form-group'>
                    <input id='formButton' className='btn' type='submit' placeholder='Get Recommendations' />
                </div>
            </form>
        )
    }

    handleSubmit = (e, message) => {
        e.preventDefault()

        let formData = {
            formSymbol: this.state.symbol,
            formMedia: this.state.media,
            formDate: this.state.date
        }

        if (formData.formSymbol.length < 1 || formData.formMedia.length < 1 || formData.formSDate.length ) {
            return false
        }

        this.setState({
            symbol: '',
            media: '',
            date: ''
        })
    }
}