import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(properties) {
    return (
        <html {...properties.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,400;0,700;1,300&display=swap"
                    rel="stylesheet"
                />
                {properties.headComponents}
            </head>
            <body {...properties.bodyAttributes}>
                {properties.preBodyComponents}
                {/* eslint-disable-next-line react-perf/jsx-no-new-object-as-prop */}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: properties.body }} />
                {properties.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
