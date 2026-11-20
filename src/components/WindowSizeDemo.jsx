
import { useWindowSize } from '../hooks/useWindowSize'

export default function WindowSizeDemo() {
  const { width, height } = useWindowSize()

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">
        Window Size
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Demonstrates useWindowSize
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Width</p>
          <p className="mt-2 text-2xl font-bold text-slate-800">
            {width}px
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Height</p>
          <p className="mt-2 text-2xl font-bold text-slate-800">
            {height}px
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Resize your browser to see the values change.
      </p>
    </section>
  )
}
