import * as React from 'react';
import Head from 'next/head';

export default function Index() {
    return (
        <div>
            <Head>
                <title>This page has a title 🤔</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="String" key="description" />
            </Head>

            <h1>This page has a title 🤔</h1>
        </div>
    );
}
