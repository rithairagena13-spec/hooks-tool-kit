
import ToggleDemo from './components/ToggleDemo'
import DebounceDemo from './components/DebounceDemo'
import DocumentTitleDemo from './components/DocumentTitleDemo'
import LocalStorageDemo from './components/LocalStorageDemo'
import WindowSizeDemo from './components/WindowSizeDemo'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Hooks Toolkit
        </h1>

        <p className="mt-2 text-slate-500">
          Explore eight reusable React Hooks.
        </p>

        <div className="mt-8">
          <ToggleDemo />
        </div>
<div className="mt-6">
  <DebounceDemo />
</div>

<div className="mt-6">
  <DocumentTitleDemo />
</div>

<div className="mt-6">
  <LocalStorageDemo />
</div>
<div className="mt-6">
  <WindowSizeDemo />
</div>

      </div>
    </main>
  )
}
