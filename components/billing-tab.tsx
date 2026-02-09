import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const currentPackage = {
  name: "Premium",
  type: "Prepaid",
  price: "$114.00 / month",
  status: "Paid" as const,
  paidDate: "Feb 10, 2026",
}

const scheduledPackage = {
  name: "Enterprise",
  type: "Prepaid",
  price: "$345.00 / month",
  status: "Unpaid" as const,
  chargeDate: "Feb 20, 2026",
}

const ratePlans = [
  {
    channel: "Viber",
    planName: "Viber Standard",
    pricePerMessage: "$0.0350",
    type: "Default" as const,
  },
  {
    channel: "WhatsApp",
    planName: "WA Business Pro",
    pricePerMessage: "$0.0450",
    type: "Custom" as const,
  },
  {
    channel: "Email",
    planName: "Email Basic",
    pricePerMessage: "$0.0020",
    type: "Default" as const,
  },
]

const globalBalance = {
  remaining: "$1,284.50",
  currency: "USD",
}

const channelBalances = [
  {
    channel: "Viber",
    remaining: 24800,
    total: 40000,
    currency: "USD",
    remainingAmount: "$868.00",
  },
  {
    channel: "WhatsApp",
    remaining: 22200,
    total: 35000,
    currency: "USD",
    remainingAmount: "$999.00",
  },
  {
    channel: "Email",
    remaining: 18480,
    total: 25000,
    currency: "USD",
    remainingAmount: "$36.96",
  },
]

function formatNumber(num: number) {
  return num.toLocaleString()
}

function getStatusBadge(status: string) {
  const lower = status.toLowerCase()
  if (lower === "active" || lower === "paid") {
    return (
      <Badge className="border-transparent bg-[#4caf50] text-white hover:bg-[#4caf50]">
        {status}
      </Badge>
    )
  }
  if (lower === "unpaid") {
    return (
      <Badge className="border-transparent bg-[#f44336] text-white hover:bg-[#f44336]">
        {status}
      </Badge>
    )
  }
  return (
    <Badge className="border-transparent bg-[#9e9e9e] text-white hover:bg-[#9e9e9e]">
      {status}
    </Badge>
  )
}

function getTypeText(type: "Default" | "Custom") {
  if (type === "Default") {
    return (
      <span className="text-sm text-[#3c4043]">
        {type}
      </span>
    )
  }
  return (
    <span className="text-sm text-[#3c4043]">
      {type}
    </span>
  )
}

export function BillingTab() {
  return (
    <div className="flex flex-col gap-8 py-6">
      {/* Package Section */}
      <section>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5f6368]">
          Package
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Current Package Card */}
          <div className="rounded-lg border border-[#dadce0] bg-white">
            <div className="border-b border-[#dadce0] bg-[#f8f9fa] px-5 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#5f6368]">
                Current Package
              </span>
            </div>
            <div className="flex flex-col gap-4 px-5 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5f6368]">Name</span>
                <span className="text-sm font-medium text-[#202124]">
                  {currentPackage.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5f6368]">Type</span>
                <span className="text-sm text-[#3c4043]">
                  {currentPackage.type}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5f6368]">Price</span>
                <span className="text-sm font-medium text-[#202124]">
                  {currentPackage.price}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5f6368]">Status</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#202124]">
                    {currentPackage.paidDate}
                  </span>
                  {getStatusBadge(currentPackage.status)}
                </div>
              </div>
            </div>
          </div>

          {/* Scheduled Package Card */}
          <div className="rounded-lg border border-[#dadce0] bg-white">
            <div className="border-b border-[#dadce0] bg-[#f8f9fa] px-5 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#5f6368]">
                Scheduled Package
              </span>
            </div>
            <div className="flex flex-col gap-4 px-5 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5f6368]">Name</span>
                <span className="text-sm font-medium text-[#202124]">
                  {scheduledPackage.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5f6368]">Type</span>
                <span className="text-sm text-[#3c4043]">
                  {scheduledPackage.type}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5f6368]">Price</span>
                <span className="text-sm font-medium text-[#202124]">
                  {scheduledPackage.price}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5f6368]">Charge date</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#202124]">
                    {scheduledPackage.chargeDate}
                  </span>
                  {getStatusBadge(scheduledPackage.status)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Plans Section */}
      <section>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5f6368]">
          Rate Plans
        </h3>
        <div className="overflow-hidden rounded border border-[#dadce0]">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#f8f9fa] hover:bg-[#f8f9fa]">
                <TableHead className="text-xs font-medium text-[#5f6368]">
                  Channel
                </TableHead>
                <TableHead className="text-xs font-medium text-[#5f6368]">
                  Rate plan name
                </TableHead>
                <TableHead className="text-xs font-medium text-[#5f6368]">
                  Type
                </TableHead>
                <TableHead className="text-xs font-medium text-[#5f6368]">
                  Price per message
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ratePlans.map((plan) => (
                <TableRow key={plan.channel} className="hover:bg-[#f8f9fa]">
                  <TableCell className="text-sm font-medium text-[#202124]">
                    {plan.channel}
                  </TableCell>
                  <TableCell className="text-sm text-[#3c4043]">
                    {plan.planName}
                  </TableCell>
                  <TableCell>
                    {getTypeText(plan.type)}
                  </TableCell>
                  <TableCell className="text-sm text-[#3c4043]">
                    {plan.pricePerMessage}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Balance Section */}
      <section>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5f6368]">
          Balance
        </h3>

        <div className="flex flex-col gap-4">
          {/* Global Balance - standalone card */}
          <div className="rounded border border-[#dadce0] bg-[#f8f9fa] px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-wide text-[#5f6368]">
                  Global Balance
                </span>
                <span className="text-xs text-[#80868b]">
                  Total remaining across all channels
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-semibold text-[#202124]">
                  {globalBalance.remaining}
                </span>
                <span className="text-sm text-[#80868b]">
                  {globalBalance.currency}
                </span>
              </div>
            </div>
          </div>

          {/* Channel Balances - grid of cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {channelBalances.map((balance) => {
              const percentRemaining = Math.round(
                (balance.remaining / balance.total) * 100
              )

              return (
                <div
                  key={balance.channel}
                  className="rounded border border-[#dadce0] px-5 py-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#202124]">
                      {balance.channel}
                    </span>
                    <span className="text-xs text-[#80868b]">
                      {balance.remainingAmount} {balance.currency}
                    </span>
                  </div>

                  <div className="mb-2">
                    <Progress
                      value={percentRemaining}
                      className="h-1.5 bg-[#e8eaed] [&>div]:bg-[#1a73e8]"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#3c4043]">
                      <span className="font-medium text-[#202124]">
                        {formatNumber(balance.remaining)}
                      </span>
                      {" / "}
                      {formatNumber(balance.total)} messages
                    </span>
                    <span className="text-xs font-medium text-[#1a73e8]">
                      {percentRemaining}% left
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
