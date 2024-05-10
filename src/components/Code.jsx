import React, { useEffect } from 'react'
import Prism from 'prismjs'
import '../assets/prism.css'

const Code = ({ code, language}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className='Code'>
      <pre className='pre-code'>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

export default Code