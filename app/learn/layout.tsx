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
      <div className="min-h-[2vh]" />
      <div className="flex flex-row">
        <div className="md:w-[600px] lg:w-32 h-16"/>

        <div className="mx-auto">
            {children}
        </div>

      </div>
    </div>
  );
}
