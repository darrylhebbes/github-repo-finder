import React, { PropTypes } from 'react';

const Item = ({
    full_name,
    html_url,
    homepage,
    fork,
    description,
    stargazers_count,
    watchers_count,
    language
}) => (
    <div className="clearfix listItem p2 mt1">
      <div className="col col-8">
        <div className="repoName"><a href={html_url} rel="noopener noreferrer">{full_name}</a></div>
        <div className="description">{description}</div>
      </div>
      <div className="col col-4 itemDetails">
        <div className="starred">Stars: <span>{stargazers_count}</span></div>
        <div className="watchers">Watchers: <span>{watchers_count}</span></div>
        <div className="language">Language: <span>{language}</span></div>
        <div className="fork">Forked?: <span>{fork ? 'Yes' : 'No'}</span></div>        
      </div>
    </div>
);

Item.propTypes = {
    full_name: PropTypes.string,
    fork: PropTypes.bool,
    description: PropTypes.string,
    html_url: PropTypes.string,
    homepage: PropTypes.string,
    stargazers_count: PropTypes.number,
    watchers_count: PropTypes.number,
    language: PropTypes.string
};

export default Item;
