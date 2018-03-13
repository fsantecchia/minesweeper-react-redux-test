import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import store from '../../store/store';
import {RESTART_GAME} from '../../actions/actions';

require('./GameSettings.scss');

class GameSettings extends React.Component {
    componentDidMount() {
        this.startGame();
    }

    render() {
        return (
            <div className="game-settings">
                <Form className="game-settings--form" inline>
                    <FormGroup className="mb-2 mr-sm-2">
                        <Label for="columns" className="mr-sm-2">Columns</Label>
                        <Input type="number" id="columns" max="15" min="2" defaultValue="5"/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2">
                        <Label for="rows" className="mr-sm-2">Rows</Label>
                        <Input type="number" id="rows" max="15" min="2" defaultValue="5"/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2">
                        <Label for="mines" className="mr-sm-2">Mines</Label>
                        <Input type="number" id="mines" max="10" min="1" defaultValue="5"/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2">
                        <Button color="info" onClick={this.startGame.bind(this)}>Restart</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }

    startGame() {
        let columns = document.getElementById('columns').value;
        let rows = document.getElementById('rows').value;
        let mines = document.getElementById('mines').value;

        store.dispatch(RESTART_GAME({
            columns: columns,
            rows: rows,
            mines: mines,
            minesPositions: this.generateMinesPositions(rows, columns, mines)
        }));
    }

    generateMinesPositions(rows, columns, mines) {
        let index;
        let minesPositions = [];

        if (mines > columns * rows) {
            alert('Settings Error, mines > (columns * rows)');
        } else {
            while (minesPositions.length < mines) {
                let minePosition = {
                    column: _.random(1, columns),
                    row: _.random(1, rows)
                }

                // If the mine is not included in our array, push it
                if(!_.some(minesPositions, minePosition)) {
                    minesPositions.push(minePosition);
                }
            }
        }

        return minesPositions;
    }
}

export default GameSettings;
