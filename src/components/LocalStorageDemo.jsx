
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('savedName', '')

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">
        Saved Name
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Demonstrates useLocalStorage
      </p>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name..."
        className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500"
      />

      <div className="mt-5 rounded-xl bg-emerald-50 p-4">
        <p className="text-sm text-emerald-800">
          Saved name:
          <span className="ml-1 font-semibold">
            {name || 'No name saved yet'}
          </span>
        </p>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Your name will remain saved after refreshing the page.
      </p>
    </section>
  )
}
