import React from 'react'
import PropTypes from "prop-types";
import { Modal } from 'semantic-ui-react'

const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css' />

export default function ModalContainer(props) {
    const {
        children,
        header,
        trigger,
        actions,
        size
    } = props;
    return (
        <>
            {style}
            <Modal
                trigger={trigger}
                header={header}
                content={children}
                actions={actions}
                size={size}
                description="toto"
            />
        </>
    )
}

ModalContainer.prototype = {
    children: PropTypes.any.isRequired,
    trigger: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired,
    size: PropTypes.string,
}