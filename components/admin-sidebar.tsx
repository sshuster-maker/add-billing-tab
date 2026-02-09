import { Send, LayoutGrid, Search, Settings } from "lucide-react"

const navItems = [
  { icon: Send, label: "Email Broadcasts" },
  { icon: LayoutGrid, label: "Organizations", active: true },
  { icon: Search, label: "Check email" },
]

export function AdminSidebar() {
  return (
    <aside className="flex h-screen w-56 flex-col border-r border-[#e0e0e0] bg-white">
      <nav className="flex flex-1 flex-col gap-0.5 px-3 pt-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
              item.active
                ? "bg-[#e8f0fe] font-medium text-[#1a73e8]"
                : "text-[#5f6368] hover:bg-[#f1f3f4]"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="border-t border-[#e0e0e0] px-3 py-3">
        <button type="button" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#5f6368] hover:bg-[#f1f3f4] w-full transition-colors">
          <Settings className="h-5 w-5" />
          <span>Back to admin panel</span>
        </button>
      </div>
    </aside>
  )
}
