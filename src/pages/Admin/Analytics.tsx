import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";




const Analytics = () => {
    const totalUsers = 1200; // Example data
    const totalTransactions = 850; // Example data
    const totalAgents = 300; // Example data

  const max = Math.max(totalUsers, totalTransactions, totalAgents);

  const getWidth = (value: number) =>
    `${Math.round((value / max) * 100)}%`;

  return (
    <div className="space-y-6">
      {/* Top summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            {totalUsers}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Transactions</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-green-600">
            {totalTransactions}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Agents</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-blue-600">
            {totalAgents}
          </CardContent>
        </Card>
      </div>

      {/* Visual comparison (chart-like bars) */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Users */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Users
            </p>
            <div className="h-3 bg-muted rounded">
              <div
                className="h-3 bg-primary rounded"
                style={{ width: getWidth(totalUsers) }}
              />
            </div>
          </div>

          {/* Transactions */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Transactions
            </p>
            <div className="h-3 bg-muted rounded">
              <div
                className="h-3 bg-green-600 rounded"
                style={{ width: getWidth(totalTransactions) }}
              />
            </div>
          </div>

          {/* Agents */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Agents
            </p>
            <div className="h-3 bg-muted rounded">
              <div
                className="h-3 bg-blue-600 rounded"
                style={{ width: getWidth(totalAgents) }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics
