import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icons from './icons';

class Icon extends Component {
    render() {
        return (
            <svg
                className={this.props.className || ''}
                viewBox={Icons[this.props.icon].viewBox}
                dangerouslySetInnerHTML={{ __html: Icons[this.props.icon].data }}
            />
        );
    }

    // shouldComponentUpdate() {
    //   return false;
    // }
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icon;