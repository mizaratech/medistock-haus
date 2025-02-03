import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { FileText, TrendingUp, PieChart } from "lucide-react"
import StatCard from "@/components/Dashboard/StatCard"

const Reports = () => {
  // Sample data - would be replaced with real data later
  const reportStats = {
    totalReports: "24",
    growth: "+15%",
    insights: "12",
  }

  const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 2000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 2390 },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Reports & Analytics</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Reports"
          value={reportStats.totalReports}
          icon={FileText}
        />
        <StatCard
          title="Growth"
          value={reportStats.growth}
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Key Insights"
          value={reportStats.insights}
          icon={PieChart}
        />
      </div>

      <Card className="mt-6">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Reports