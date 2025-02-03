import { Card } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Package2, AlertTriangle } from "lucide-react"
import StatCard from "@/components/Dashboard/StatCard"

const Inventory = () => {
  // Sample data - would be replaced with real data later
  const inventoryStats = {
    totalItems: "2,345",
    lowStock: "12",
    expiringItems: "8",
  }

  const sampleInventory = [
    { id: 1, name: "Paracetamol 500mg", stock: 150, expiry: "2025-12-31", status: "In Stock" },
    { id: 2, name: "Amoxicillin 250mg", stock: 80, expiry: "2025-06-30", status: "Low Stock" },
    { id: 3, name: "Vitamin C 1000mg", stock: 200, expiry: "2026-01-31", status: "In Stock" },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Inventory Management</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Items"
          value={inventoryStats.totalItems}
          icon={Package2}
        />
        <StatCard
          title="Low Stock Items"
          value={inventoryStats.lowStock}
          icon={AlertTriangle}
          trend={{ value: 2, isPositive: false }}
        />
        <StatCard
          title="Expiring Soon"
          value={inventoryStats.expiringItems}
          icon={AlertTriangle}
          trend={{ value: 5, isPositive: false }}
        />
      </div>

      <Card className="mt-6">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>{item.expiry}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}

export default Inventory