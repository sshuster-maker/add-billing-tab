"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search } from "lucide-react"

export function UsersTab() {
  return (
    <div className="flex flex-col gap-4 py-4">
      {/* Filters */}
      <div className="flex items-end gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#9e9e9e]">Team</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-40 border-[#e0e0e0] bg-white text-sm text-[#424242]">
              <SelectValue placeholder="All teams" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All teams</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9e9e9e]" />
          <Input
            placeholder="Search by name or email"
            className="border-[#e0e0e0] bg-white pl-9 text-sm text-[#424242] placeholder:text-[#bdbdbd]"
          />
        </div>

        <Button className="bg-[#1a73e8] px-6 text-sm font-medium text-white hover:bg-[#1765cc]">
          APPLY
        </Button>
        <Button variant="ghost" className="px-4 text-sm font-medium text-[#1a73e8] hover:bg-[#e8f0fe]">
          RESET
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-md border border-[#e0e0e0]">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#fafafa] hover:bg-[#fafafa]">
              <TableHead className="text-[#616161] font-medium">User name</TableHead>
              <TableHead className="text-[#616161] font-medium">User email</TableHead>
              <TableHead className="text-[#616161] font-medium">Status</TableHead>
              <TableHead className="text-[#616161] font-medium">Role</TableHead>
              <TableHead className="text-[#616161] font-medium">Team ID</TableHead>
              <TableHead className="text-[#616161] font-medium">Create date</TableHead>
              <TableHead className="text-[#616161] font-medium">Modified date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-[#212121]">Pm Group</TableCell>
              <TableCell className="text-[#424242]">vladyslav.huba@pm.group</TableCell>
              <TableCell>
                <Badge className="bg-[#4caf50] text-white hover:bg-[#4caf50]">Active</Badge>
              </TableCell>
              <TableCell className="text-[#424242]">mw-owner</TableCell>
              <TableCell className="text-[#424242]">17175</TableCell>
              <TableCell className="text-[#424242]">09 Feb 2026 18:12</TableCell>
              <TableCell className="text-[#424242]">09 Feb 2026 18:12</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
