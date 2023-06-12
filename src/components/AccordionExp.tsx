import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';

function AccordionExp() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    <Stack gap={3}>
                        <div className="bg-warning border">First item</div>
                        <div className="bg-warning border">Second item</div>
                        <div className="bg-warning border">Third item</div>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    <Stack gap={3}>
                        <div className="bg-warning border">First item</div>
                        <div className="bg-warning border">Second item</div>
                        <div className="bg-warning border">Third item</div>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Accordion;