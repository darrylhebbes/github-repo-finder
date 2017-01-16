import React, { PropTypes } from 'react';
import cx from 'classnames';

const Message = ({ msgColor, headerMsg, bodyMsg }) => (
    <div className={cx('ui', 'message', 'p2', msgColor)}>
      <div className="content">
        <div className="header">{headerMsg}</div>
        <p>{bodyMsg}</p>
      </div>
    </div>
);

Message.propTypes = {
    msgColor: PropTypes.string,
    headerMsg: PropTypes.string,
    bodyMsg: PropTypes.string
};

export default Message;
