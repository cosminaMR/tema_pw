import React from 'react';

import {Toast} from 'react-bootstrap';
import './toast.css'

export const MToast = (props) => {
   const toastCss = {
        position: 'fixed',
        top:'10px',
        right:'10px',
        zIndex: '1',
        boxShadow: '0 4px 8px 0'
    };
    return (
        <div style={props.children.showw? toastCss:null}>
        {/* <div style={toastCss}>  */}
            <Toast className={"border border-success bg-success text-white"} showw={props.children.showw}>
                <Toast.Header className={"bg-success text-white"} closeButton={false}>
                    <strong className="mr-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>
                Employee saved successfully.
                </Toast.Body>
            </Toast>
        </div>

    );
};
