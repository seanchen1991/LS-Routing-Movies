import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';

class NewMovieForm extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            title: '',
            director: '',
            stars: [],
            metascore: 0
        };
    }

    handleIDChange = (e) => {
        this.setState({
            id: e.target.value
        });
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handleDirectorChange = (e) => {
        this.setState({
            director: e.target.value
        });
    };

    handleMetaChange = (e) => {
        this.setState({
            metascore: e.target.value
        });
    };

    handleStarsChange = (e) => {
        this.setState({
            stars: e.target.value.split(',')
        });
    };

    submitNewMovie = (e) => {
        e.preventDefault();
        const newMovie = this.state;
        this.props.addMovie(newMovie);
        this.setState({
            id: '',
            title: '',
            director: '',
            stars: [],
            metascore: 0 
        });
    };

    render() {
        return (
            <div>
                <input value={this.state.id} onChange={this.handleIDChange} placeholder="ID" />
                <input value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" />
                <input value={this.state.director} onChange={this.handleDirectorChange} placeholder="Director" />
                <input value={this.state.stars} onChange={this.handleStarsChange} placeholder="Stars" />
                <input value={this.state.metascore} onChange={this.handleMetaChange} placeholder="Metascore" />
                <button onClick={this.submitNewMovie}>Add Movie</button>
            </div>
        );
    }
}

export default connect(null, { addMovie })(NewMovieForm);