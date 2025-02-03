import { Card } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Users, Heart, Star } from "lucide-react"
import StatCard from "@/components/Dashboard/StatCard"

const Customers = () => {
  // Sample data - would be replaced with real data later
  const customerStats = {
    totalCustomers: "1,234",
    activeCustomers: "890",
    loyaltyMembers: "456",
  }

  const recentCustomers = [
    { id: 1, name: "John Doe", phone: "123-456-7890", lastVisit: "2024-02-03", status: "Active" },
    { id: 2, name: "Jane Smith", phone: "234-567-8901", lastVisit: "2024-02-02", status: "Active" },
    { id: 3, name: "Bob Johnson", phone: "345-678-9012", lastVisit: "2024-01-30", status: "Inactive" },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Customer Management</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Customers"
          value={customerStats.totalCustomers}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Customers"
          value={customerStats.activeCustomers}
          icon={Heart}
        />
        <StatCard
          title="Loyalty Members"
          value={customerStats.loyaltyMembers}
          icon={Star}
        />
      </div>

      <Card className="mt-6">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Customers</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.lastVisit}</TableCell>
                  <TableCell>{customer.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}

export default Customers