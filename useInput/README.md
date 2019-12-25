# Usage

```js
import useInput from "@nooks/use-input"

import React from 'react';

const App = () => {
    const noAt = value => !value.includes("@");
    const name = useInput("Mr. ", noAt);
    return (
        <div className="App">
            <h1>hello</h1>
            <input placeholder="Name" {...name.props}/>
        </div>
    )
};
```