import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import store from '../../store/store';

require('./MinesweeperCell.scss');

class MinesweeperCell extends React.Component {
    static propTypes = {
        isClicked: PropTypes.bool.isRequired,
        numberOfAdjacentMines: PropTypes.number.isRequired,
        onClickHandler: PropTypes.func.isRequired
    }

    render() {
        let className = classNames({
          'minesweeper-cell': true,
          'minesweeper-cell__clicked': this.props.isClicked
        });

        return (
            <div className={className} onClick={this.handleClick.bind(this)}>
                {this.renderContent()}
            </div>
        );
    }

    renderContent() {
        if (this.props.isClicked) {
            return this.props.hasMine ? 'B' : this.props.numberOfAdjacentMines;
        }
    }

    handleClick(event) {
        if (!this.props.hasFlag) {
            if (this.props.hasMine) {
                alert('BOOM! Game Over');

                window.location.reload();
            } else if (!this.props.isClicked) {
                this.props.onClickHandler(this.props.position)
            }
        }
    }
}

export default MinesweeperCell;
