import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a65D3tAsBSb0Ks2TknFKxW43Ud4USyoU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// fetch a list of most recent reviews and display them
//Maintain state 
//should have top level wrapping element with class latest movie reviews
class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({ reviews: data.results }))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer

