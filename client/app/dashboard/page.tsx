"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Activity, AlertTriangle, TrendingUp, Users, Zap } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const eventData = [
  { time: "00:00", events: 120 },
  { time: "04:00", events: 89 },
  { time: "08:00", events: 234 },
  { time: "12:00", events: 456 },
  { time: "16:00", events: 378 },
  { time: "20:00", events: 289 },
]

const topEvents = [
  { name: "page_view", count: 12543, change: "+12%" },
  { name: "button_click", count: 8932, change: "+8%" },
  { name: "form_submit", count: 3421, change: "-3%" },
  { name: "user_signup", count: 1876, change: "+24%" },
  { name: "purchase", count: 892, change: "+15%" },
]

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Select defaultValue="24h">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">Last 1 hour</SelectItem>
              <SelectItem value="6h">Last 6 hours</SelectItem>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+180.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events/Minute</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">31.4</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+19%</span> from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">2 critical</span>, 1 warning
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Events Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Events Over Time</CardTitle>
            <CardDescription>Real-time event tracking for the last 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={eventData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="events" stroke="#4F46E5" strokeWidth={2} dot={{ fill: "#4F46E5" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Events */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Top Events</CardTitle>
            <CardDescription>Most tracked events in the last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topEvents.map((event, index) => (
                <div key={event.name} className="flex items-center">
                  <div className="flex items-center space-x-2 flex-1">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    <div className="font-medium text-sm">{event.name}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium">{event.count.toLocaleString()}</div>
                    <Badge variant={event.change.startsWith("+") ? "default" : "destructive"} className="text-xs">
                      {event.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
          <CardDescription>Latest anomalies and threshold breaches</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <div>
                  <p className="font-medium">High event volume detected</p>
                  <p className="text-sm text-muted-foreground">page_view events exceeded 500/min threshold</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="destructive">Critical</Badge>
                <span className="text-sm text-muted-foreground">2 min ago</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="font-medium">Unusual user behavior</p>
                  <p className="text-sm text-muted-foreground">50% increase in form_submit events from mobile users</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Warning</Badge>
                <span className="text-sm text-muted-foreground">15 min ago</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">Positive trend detected</p>
                  <p className="text-sm text-muted-foreground">user_signup events up 24% compared to yesterday</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="default" className="bg-green-100 text-green-800">
                  Info
                </Badge>
                <span className="text-sm text-muted-foreground">1 hour ago</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
