import SidebarKnowledge from "../../components/learn/Sidebar";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <SidebarKnowledge />
      <div className="md:h:w-60" />
      <div className="min-h-[2vh]" />
      {children}
    </div>
  );
}
