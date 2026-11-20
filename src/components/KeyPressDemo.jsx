
import { useKeyPress } from '../hooks/useKeyPress'

export default function KeyPressDemo() {
  const isPressed = useKeyPress('Enter')

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">
        Keyboard Detector
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Demonstrates useKeyPress
      </p>

      <div className={`mt-5 rounded-xl p-6 text-center ${
        isPressed ? 'bg-emerald-50' : 'bg-slate-50'
      }`}>
        <p className="text-sm text-slate-500">
          Press and hold the Enter key
        </p>

        <p className={`mt-3 text-2xl font-bold ${
          isPressed ? 'text-emerald-700' : 'text-slate-800'
        }`}>
          {isPressed ? 'ENTER PRESSED!' : 'Waiting...'}
        </p>
      </div>
    </section>
  )
}
