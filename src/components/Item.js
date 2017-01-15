import React, { PropTypes } from 'react';

const Item = ({
    name,
    html_url,
    homepage,
    fork,
    description,
    stargazers_count,
    watchers_count,
    language,
}) => (
    <div className="clearfix">
      <div className="col col-6">
        <h5>
          <a href={html_url} rel="noopener noreferrer">{name}</a>
        </h5>
        <div className="description">{description}</div>
        <div className="starred">{stargazers_count}</div>
        <div className="watchers">{watchers_count}</div>
        <div className="language">{language}</div>
        <div className="fork">{fork ? 'fork' : 'is original creator'}</div>
      </div>
    </div>
);

Item.propTypes = {
  name: PropTypes.string,
  fork: PropTypes.bool,
  description: PropTypes.string,
  html_url: PropTypes.string,
  homepage: PropTypes.string,
  stargazers_count: PropTypes.number,
  watchers_count: PropTypes.number,
  language: PropTypes.string
};

export default Item;
