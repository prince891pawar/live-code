import React, { useRef, useMemo, useState, useEffect } from 'react'
import './App.css'
import Editor from '@monaco-editor/react';
import { MonacoBinding } from "y-monaco"
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket'
  
const App = () => {
  const editorRef = useRef(null);

  const [userName, setUserName] = useState(() => {
    return new URLSearchParams(window.location.search).get("username") || ""
  })

  const [users, setUsers] = useState([])

  const ydoc = useMemo(() => new Y.Doc(), []);
  const yText = useMemo(() => ydoc.getText('monaco'), [ydoc]);

  const handleMount = (editor) => {
    editorRef.current = editor;

    new MonacoBinding(
      yText,
      editor.getModel(),
      new Set([editor]),
    )
  }

  const handleJoin = (e) => {
    e.preventDefault()
    const name = e.target.username.value.trim()
    if (!name) return;

    setUserName(name)
    window.history.pushState({}, "", "?username=" + name)
  }

  useEffect(() => {
    if (userName) {
      const provider = new WebsocketProvider(
        "ws://localhost:1234",
        "room-1",
        ydoc
      );

      provider.awareness.setLocalStateField("user", { name: userName })

      provider.awareness.on("change", () => {
        const states = Array.from(provider.awareness.getStates().values())

        setUsers(
          states
            .map(state => state.user)
            .filter(Boolean)
        )
      })

      const handleBeforeUnload = () => {
        provider.awareness.setLocalStateField("user", null)
      }

      window.addEventListener("beforeunload", handleBeforeUnload)

      return () => {
        provider.disconnect()
        window.removeEventListener("beforeunload", handleBeforeUnload)
      }
    }
  }, [userName, ydoc])

  if (!userName) {
    return (
      <main className='h-screen w-full bg-gray-950 flex items-center justify-center'>
        <form onSubmit={handleJoin} className='flex flex-col gap-4'>
          <input
            type="text"
            placeholder="username"
            name="username"
            className='p-2 rounded-lg bg-amber-100 text-black'
          />
          <button className='p-2 rounded-lg bg-amber-50 font-bold'>
            Join
          </button>
        </form>
      </main>
    )
  }

  return (
    <main className='h-screen w-full bg-gray-950 flex gap-4 p-4'>
      <aside className='h-full w-1/4 bg-gray-600 rounded-2xl'>
        <h2 className='text-2xl font-bold p-4 border-b border-gray-300'>Users</h2>

        <ul className='p-4'>
          {users.map((user, index) => (
            <li key={index} className='p-2 bg-gray-800 text-white rounded mb-2'>
              {user.name}
            </li>
          ))}
        </ul>
      </aside>

      <section className='h-full w-3/4 bg-gray-800 rounded-2xl overflow-hidden'>
        <Editor
          height="100%"
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