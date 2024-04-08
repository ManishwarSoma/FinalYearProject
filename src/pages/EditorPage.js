import React, { useState } from 'react'

const EditorPage = () => {
  const [clients, setClients] = useState([{socketId: 1, username: 'Rakesh' }, {socketId: 1, username: 'Rakesh' } ]);
  return <div className='mainWrap'>
    <div className='aside'>
      <div className='asideInner'>
        <h3>Connected</h3>
        <div className='clientsList'>

        </div>
      </div>
    </div>
    <div className='editorWrap'></div>

  </div>
}
/////

export default EditorPage
