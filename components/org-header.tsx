import { ArrowLeft } from "lucide-react"

export function OrgHeader() {
  return (
    <div className="flex flex-col gap-6">
      {/* Title row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <button type="button" className="text-[#5f6368] hover:text-[#202124] transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-normal text-[#202124]">PmGroup</h1>
        </div>
        <div className="text-right text-xs text-[#9e9e9e]">
          <p>Created at 9 Feb 2026 18:12 (GMT +07:00)</p>
          <p>Modified at 9 Feb 2026 18:13 (GMT +07:00)</p>
        </div>
      </div>

      {/* Info card */}
      <div className="grid grid-cols-4 rounded-md border border-[#e0e0e0] bg-white">
        <div className="border-r border-[#e0e0e0] px-5 py-4">
          <p className="mb-1 text-xs text-[#9e9e9e]">Name</p>
          <p className="text-sm font-medium text-[#202124]">PmGroup</p>
        </div>
        <div className="border-r border-[#e0e0e0] px-5 py-4">
          <p className="mb-1 text-xs text-[#9e9e9e]">{"Owner's email"}</p>
          <p className="text-sm font-medium text-[#202124]">vladyslav.huba@pm.group</p>
        </div>
        <div className="border-r border-[#e0e0e0] px-5 py-4">
          <p className="mb-1 text-xs text-[#9e9e9e]">MW User ID</p>
          <p className="text-sm font-medium text-[#202124]">17044</p>
        </div>
        <div className="px-5 py-4">
          <p className="mb-1 text-xs text-[#9e9e9e]">{"Izonet's account ID"}</p>
          <p className="text-sm font-medium text-[#202124]">16945</p>
        </div>
      </div>
    </div>
  )
}
