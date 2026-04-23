import React from 'react'
import './App.css'
import Editor from '@monaco-editor/react';
import {MonacoBinding} from "y-monaco"
import { useRef,useMemo } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket'

const App = () => {
  const editorRef = useRef(null); 
  
  const ydoc = useMemo(() => new Y.Doc, []);
  const yText = useMemo(() => ydoc.getText('monaco'), [ydoc]);

const handleMount = (editor) => {
  editorRef.current = editor;

  const provider = new WebsocketProvider(
    "ws://localhost:1234",
    "room-1",
    ydoc
  );

  const monacoBinding = new MonacoBinding(
    yText,
    editorRef.current.getModel(),
    new Set([editorRef.current]),
    provider.awareness
  );
}  

  return (
    <main
     className='h-screen w-full bg-gray-950 flex gap-4 p-4'>   
     <aside 
     className='h-full w-1/4 bg-gray-600 rounded-2xl'>

     </aside>
     <section
     className='h-full w-3/4 bg-gray-800 rounded-2xl overflow-hidden'
     >
     <Editor
        height="100vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme='vs-dark'
        onMount={handleMount}
      />
     </section>
    </main>
  )
}          
export default App