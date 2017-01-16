import React, { PropTypes } from 'react';
import Item from './Item';

const List = ({ results, resultCount, searchedTerm }) => (
  <div className="ui link repositories">

    {resultCount > 0 ? <p>Found {resultCount} repositories for <strong>{searchedTerm}</strong></p> : null}
    {resultCount > 0 ? results.map((item, index) => <Item key={index} {...item} />) : null}
  </div>
);

List.propTypes = {
  results: PropTypes.array,
  resultCount: PropTypes.number
};

export default List;
