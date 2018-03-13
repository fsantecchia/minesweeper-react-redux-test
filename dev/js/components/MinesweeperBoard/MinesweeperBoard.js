import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import MinesweeperCell from '../MinesweeperCell/MinesweeperCell';

import store from '../../store/store';
import {CELL_CLICKED, CELL_FLAGGED, CELL_UNFLAGGED} from '../../actions/actions';

require('./MinesweeperBoard.scss');

class MinesweeperBoard extends React.Component {
    static propTypes = {
        game: PropTypes.object.isRequired,
        settings: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="minesweeper-board">
                {this.renderRows()}
            </div>
        );
    }

    renderRows() {
        let index;
        let rows = [];

        for (index = 1; index <= this.props.settings.rows; index++) {
            rows.push(
                <div key={index} className='minesweeper-board--row'>
                    {this.renderCells(index)}
                </div>
            );
        }

        return rows;
    }

    renderCells(rowNumber) {

        let index;
        let cells = [];

        for (index = 1; index <= this.props.settings.columns; index++) {
            let position = {
                column: index,
                row: rowNumber
            };
            let hasMine = _.some(this.props.game.mines, position);
            let props = {
                hasFlag: _.some(this.props.game.flaggedCells, position),
                hasMine: hasMine,
                isClicked: _.some(this.props.game.clickedCells, position),
                key: index,
                numberOfAdjacentMines: hasMine ? 99 : this.getNumberOfAdjacentMines(position),
                onClickHandler: this.onClickCell.bind(this),
                onRightClickHandler: this.onRightClickCellHandler.bind(this),
                position: position
            };

            cells.push(<MinesweeperCell {...props}/>);
        }

        return cells;
    }

    getAdjacentCells(position) {
        let cellColumn = position.column;
        let cellRow = position.row;

        return [
            //topLeft
            {
                column: cellColumn - 1,
                row: cellRow - 1
            },
            //top
            {
                column: cellColumn,
                row: cellRow - 1
            },
            //topRight
            {
                column: cellColumn + 1,
                row: cellRow - 1
            },
            //right
            {
                column: cellColumn + 1,
                row: cellRow
            },
            //bottomRight
            {
                column: cellColumn + 1,
                row: cellRow + 1
            },
            //bottom
            {
                column: cellColumn,
                row: cellRow + 1
            },
            //bottomLeft
            {
                column: cellColumn - 1,
                row: cellRow + 1
            },
            //left
            {
                column: cellColumn - 1,
                row: cellRow
            }
        ];
    }

    getNumberOfAdjacentMines(cell) {
        let numberOfAdjacentMines = 0;

        this.props.game.mines.forEach(mine => {
            if (this.isGivenPositionAdjacentToTheCell(mine, cell)) {
                numberOfAdjacentMines++;
            }
        });

        return numberOfAdjacentMines;
    }

    isGivenPositionAdjacentToTheCell(anotherPosition, cell) {
        return _.some(this.getAdjacentCells(cell), anotherPosition);
    }

    onClickCell(cell) {
        let newClickedCells = _.clone(this.props.game.clickedCells);
        newClickedCells.push(cell);
        this.clickAdjacentCells(cell, newClickedCells);

        store.dispatch(CELL_CLICKED(newClickedCells));
    }

    clickAdjacentCells(cell, newClickedCells) {
        let numberOfAdjacentMines = this.getNumberOfAdjacentMines(cell)

        //if numberOfAdjacentMines === 0 && the cell position exists in the current game then open adjacentCells
        if (numberOfAdjacentMines === 0 && cell.row >= 1 && cell.column >= 1 && cell.row <= this.props.settings.rows && cell.column <= this.props.settings.columns) {
            this.getAdjacentCells(cell).forEach(adjacentCell => {
                if (!_.some(newClickedCells, adjacentCell)) {
                    //If it's not clicked then mark as clicked and delete the flag if exists
                    newClickedCells.push(adjacentCell);
                    this.unflagCell(adjacentCell);

                    this.clickAdjacentCells(adjacentCell, newClickedCells);
                }
            });
        }
    }

    onRightClickCellHandler(cell) {
        if (_.some(this.props.game.flaggedCells, cell)) {
            store.dispatch(CELL_UNFLAGGED(cell));
        } else if (this.props.game.remainingFlags > 0) {
            store.dispatch(CELL_FLAGGED(cell));
        }
    }

    unflagCell(cell) {
        if (_.some(this.props.game.flaggedCells, cell)) {
            store.dispatch(CELL_UNFLAGGED(cell));
        }
    }
}

export default MinesweeperBoard;
