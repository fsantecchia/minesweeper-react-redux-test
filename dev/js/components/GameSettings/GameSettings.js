import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

require('./GameSettings.scss');

class GameSettings extends React.Component {
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
                        <Button color="info">Restart</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default GameSettings;
