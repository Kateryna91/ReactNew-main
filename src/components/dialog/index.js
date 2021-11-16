import React, {useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './dialog.css';


const DialogPage = () => {

    const [state, setState] = useState({
        displayBasic: false,
        displayBasic2: false,
        displayModal: false,
        displayMaximizable: false,
        displayPosition: false,
        displayResponsive: false,
        position: 'center'
    });
    const onClick = (name, position) => {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        setState(state);
    }

    const onHide= (name) => {
        setState({
            [`${name}`]: false
        });
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => this.onHide(name)} autoFocus />
            </div>
        );
    }

    return (
        <>
            <h1>Приклад діалогового вікна</h1>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />

            <Dialog header="Header" visible={state.displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Dialog>
        </>
    )
}

export default DialogPage
