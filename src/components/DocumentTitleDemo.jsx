
import { useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function DocumentTitleDemo() {
  const [title, setTitle] = useState('Hooks Toolkit')

  useDocumentTitle(title)

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">
        Document Title
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Demonstrates useDocumentTitle
      </p>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter a browser title..."
        className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500"
      />

      <p className="mt-4 text-sm text-slate-600">
        Current browser title:
        <span className="ml-1 font-medium text-emerald-700">
          {title}
        </span>
      </p>
    </section>
  )
}
