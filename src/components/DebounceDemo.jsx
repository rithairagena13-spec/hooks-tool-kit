
import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

export default function DebounceDemo() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">
        Debounced Input
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Demonstrates useDebounce
      </p>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Start typing..."
        className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500"
      />

      <div className="mt-5 space-y-3 text-sm">
        <p className="text-slate-600">
          Live value: <span className="font-medium text-slate-900">{search || 'Nothing yet'}</span>
        </p>

        <p className="text-slate-600">
          Debounced value: <span className="font-medium text-emerald-700">{debouncedSearch || 'Nothing yet'}</span>
        </p>
      </div>
    </section>
  )
}
