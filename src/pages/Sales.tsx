import { Card } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { DollarSign, TrendingUp, ShoppingCart } from "lucide-react"
import StatCard from "@/components/Dashboard/StatCard"

const Sales = () => {
  // Sample data - would be replaced with real data later
  const salesStats = {
    totalSales: "$12,345",
    todaySales: "$1,234",
    averageOrder: "$45",
  }

  const recentSales = [
    { id: 1, date: "2024-02-03", items: 3, total: "$125.00", status: "Completed" },
    { id: 2, date: "2024-02-03", items: 2, total: "$85.50", status: "Completed" },
    { id: 3, date: "2024-02-03", items: 1, total: "$45.00", status: "Processing" },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Sales Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Sales"
          value={salesStats.totalSales}
          icon={DollarSign}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Today's Sales"
          value={salesStats.todaySales}
          icon={TrendingUp}
        />
        <StatCard
          title="Average Order Value"
          value={salesStats.averageOrder}
          icon={ShoppingCart}
        />
      </div>

      <Card className="mt-6">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Sales</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell>{sale.items}</TableCell>
                  <TableCell>{sale.total}</TableCell>
                  <TableCell>{sale.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}

export default Sales