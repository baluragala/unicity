import React from 'react';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {title: ''};
        this.titleEle = null;
    }

    handleChange(e) {
        this.setState({title: e.target.value})
    }

    submit(e) {
        console.log(this.titleEle.value);
        e.preventDefault();
    }

    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.submit}>
                <input type="text" id="name" ref={refToCtrl => this.titleEle = refToCtrl}></input>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default AddProduct