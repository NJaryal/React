import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDetailed from 'src/MovieDetailed/MovieDetailed';
import { requestSingleMovieData } from 'src/MovieDetailed/MovieDetailedActions';
import { loadtoDos } from '../lib/service';

export class Movie extends Component {
  componentDidMount() {
    const { match } = this.props;
    const id = match && match.params ? match.params.id : 0;
    this.props.requestSingleMovieData(id);
    loadtoDos()
      .then(({ data }) => this.setState({ todos: data }))
      .catch(() => this.setState({ error: true }))
  }

  render() {
    const { singleMovieData } = this.props;
    return <MovieDetailed singleMovieData={singleMovieData} className="MovieComponent" data-test="Movie"/>;
  }
}

Movie.propTypes = {
  singleMovieData: PropTypes.object,
  match: PropTypes.object,
  requestSingleMovieData: PropTypes.func,
};

const mapStateToProps = state => ({
  singleMovieData: state.MovieDetailedReducer.singleMovieData,
});

const mapDispatchToProps = dispatch => ({
  requestSingleMovieData: (movieId) => {
    dispatch(requestSingleMovieData(movieId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
