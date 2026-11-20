
import { useOnlineStatus } from '../hooks/useOnlineStatus'

export default function OnlineStatusDemo() {
  const isOnline = useOnlineStatus()

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">
        Online Status
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Demonstrates useOnlineStatus
      </p>

      <div className={`mt-5 flex items-center gap-3 rounded-xl p-4 ${
        isOnline ? 'bg-emerald-50' : 'bg-red-50'
      }`}>
        <span className={`h-3 w-3 rounded-full ${
          isOnline ? 'bg-emerald-500' : 'bg-red-500'
        }`} />

        <div>
          <p className={`font-semibold ${
            isOnline ? 'text-emerald-700' : 'text-red-700'
          }`}>
            {isOnline ? 'You are Online' : 'You are Offline'}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {isOnline
              ? 'Your browser reports a network connection.'
              : 'Your browser reports no network connection.'}
          </p>
        </div>

        
      </div>
    </section>
  )
}
