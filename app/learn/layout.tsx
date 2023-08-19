import SidebarKnowledge from "../../components/learn/Sidebar";
import SidebarPopper from "../../components/learn/SidebarPopper";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative px-8">
      <SidebarPopper>
        <SidebarKnowledge hide={false} />
      </SidebarPopper>
      <div className="md:h:w-60" />
      <div className="min-h-[2vh]" />
      {children}
    </div>
  );
}
