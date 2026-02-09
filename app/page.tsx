"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { OrgHeader } from "@/components/org-header"
import { UsersTab } from "@/components/users-tab"
import { BillingTab } from "@/components/billing-tab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabs = [
  { value: "users", label: "USERS" },
  { value: "teams", label: "TEAMS" },
  { value: "integration-keys", label: "INTEGRATION KEYS" },
  { value: "prices", label: "PRICES" },
  { value: "billing", label: "BILLING" },
]

export default function Page() {
  return (
    <div className="flex h-screen bg-white">
      <AdminSidebar />

      <main className="flex-1 overflow-auto px-8 py-6">
        <OrgHeader />

        <div className="mt-8">
          <Tabs defaultValue="billing">
            <TabsList className="h-auto gap-0 rounded-none border-b border-[#e0e0e0] bg-transparent p-0">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-none border-b-2 border-transparent px-5 py-3 text-sm font-medium text-[#5f6368] shadow-none data-[state=active]:border-[#1a73e8] data-[state=active]:bg-transparent data-[state=active]:text-[#1a73e8] data-[state=active]:shadow-none"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="users">
              <UsersTab />
            </TabsContent>

            <TabsContent value="teams">
              <div className="py-8 text-center text-sm text-[#9e9e9e]">
                No teams data available.
              </div>
            </TabsContent>

            <TabsContent value="integration-keys">
              <div className="py-8 text-center text-sm text-[#9e9e9e]">
                No integration keys data available.
              </div>
            </TabsContent>

            <TabsContent value="prices">
              <div className="py-8 text-center text-sm text-[#9e9e9e]">
                No pricing data available.
              </div>
            </TabsContent>

            <TabsContent value="billing">
              <BillingTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
