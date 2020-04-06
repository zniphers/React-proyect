import React from 'react';
import {Form, Button} from 'react-bootstrap';

import PencilIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ListItem(props){
    return (
        <Form className="form-flebox">
            { /* Checkbox */ }
            <Form.Group controlId="formBasicCheckbox" className="checkbox-form">
                <Form.Check type="checkbox" />
            </Form.Group>
            { /* Input type text */ }
            <Form.Group className="input-text-form">    
                <Form.Control type="text" onChange={(e) => props.editTextFn(props.id, e)} value={props.content} disabled={props.disable} />
                <Form.Text className="text-muted">
                    {props.date}
                </Form.Text>
            </Form.Group>
            { /* Buttons */ }
            <Form.Group className="save-btn-form">
                {
                    //Expresión ternaria
                    props.disable ? <div></div> : <Button variant="primary">Guardar</Button>                    
                }
            </Form.Group>
            { /* Botón de editar */ }
            <Form.Group className="option-btn-form">
                <Button variant="warning" onClick={() => props.editFn(props.id)}>
                    <PencilIcon />
                </Button>
            </Form.Group>
            { /* Botón de borrar */}
            <Form.Group className="option-btn-form" onClick={() => props.deleteFn(props.id)}>
                <Button variant="danger">
                    <DeleteIcon />
                </Button>
            </Form.Group>            
        </Form>
    )
}