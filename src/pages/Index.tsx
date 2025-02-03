import { Package, DollarSign, Users, AlertCircle } from "lucide-react";
import MainLayout from "@/components/Layout/MainLayout";
import StatCard from "@/components/Dashboard/StatCard";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back to PharmaCare</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Inventory"
          value="2,459"
          icon={Package}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Total Sales"
          value="$12,458"
          icon={DollarSign}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Total Customers"
          value="1,257"
          icon={Users}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Low Stock Items"
          value="12"
          icon={AlertCircle}
          trend={{ value: 2, isPositive: false }}
        />
      </div>
    </MainLayout>
  );
};

export default Dashboard;