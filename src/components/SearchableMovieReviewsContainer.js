import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a65D3tAsBSb0Ks2TknFKxW43Ud4USyoU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
//provide a searchable interface allowing the user to enter a search term 
//and then receive a list of reviews that match the search terms
//maintain state 
//Optional: should have top-level wrapping element with class searchable-movie-reviews
class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(BASE_URL.concat(this.state.searchTerm))
            .then(res => res.json())
            .then(res => this.setState({ reviews: res.results }));
    }
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input
                        id="search-input"
                        type="text"
                        style={{ width: 300 }}
                        onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.reviews === 'object' &&
                    this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer

