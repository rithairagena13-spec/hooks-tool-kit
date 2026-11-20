
import { useToggle } from '../hooks/useToggle'

export default function ToggleDemo() {
  const [isOn, toggle] = useToggle()

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Toggle
          </h2>
          <p className="text-sm text-slate-500">
            Demonstrates useToggle
          </p>
        </div>

        <span className={`rounded-full px-4 py-1 text-sm font-medium ${
          isOn
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-slate-100 text-slate-600'
        }`}>
          {isOn ? 'ON' : 'OFF'}
        </span>
      </div>

      <button
        onClick={toggle}
        className="mt-6 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </section>
  )
}
