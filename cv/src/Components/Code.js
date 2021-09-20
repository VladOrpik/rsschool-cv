import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import '../Components/experiencestyle.css'
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/shadesOfPurple';

export const Code = ({ example }) => {
    return (
        <div className='experience'>
            <Jumbotron fluid>
                <Container fluid>
                    <h4 className="display-3">Example Code</h4>

                    <Highlight  {...defaultProps} theme={theme} code={example.code} language="jsx">
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre className="codeExample-list__item__example" style={style}>
                                {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line, i })}>
                                        {line.map((token, key) => (
                                            <span {...getTokenProps({ token, key })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </Container>
            </Jumbotron>
        </div >
    )
}