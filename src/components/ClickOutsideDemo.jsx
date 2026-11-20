
import { useCallback, useRef, useState } from 'react'
import { useClickOutside } from '../hooks/useClickOutside'

export default function ClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  useClickOutside(menuRef, closeMenu)

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">
        Click Outside
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Demonstrates useClickOutside
      </p>

      <div className="relative mt-5" ref={menuRef}>
        <button
          onClick={() => setIsOpen(previous => !previous)}
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>

        {isOpen && (
          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">
              Menu is open!
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Click inside this menu to keep it open.
              Click outside to close it.
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-sm font-medium text-red-600"
            >
              Close Menu
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
