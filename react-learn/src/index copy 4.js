import React from 'react';
import ReactDOM from 'react-dom';

const content = '<div>hello</div><p>react</p>';

const div = (
  <div dangerouslySetInnerHTML={{
    __html: content
  }}>
    {/* {content} */}
  </div>
)

ReactDOM.render(div, document.getElementById('root'));
