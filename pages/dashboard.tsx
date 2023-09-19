interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return <main className="bg-black">Hello World! | Dashboard</main>;
};

export default Dashboard;
