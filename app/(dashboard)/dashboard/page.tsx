import StatsOverview from '@/components/dashboard/stats-overview';
import RecentProposals from '@/components/dashboard/recent-proposals';
import ActivityFeed from '@/components/dashboard/activity-feed';

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">ダッシュボード</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <StatsOverview />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <RecentProposals />
        <ActivityFeed />
      </div>
    </div>
  );
}
