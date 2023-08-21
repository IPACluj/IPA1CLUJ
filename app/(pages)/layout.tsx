import Sidebar from "@/components/sidebar";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:pl-32 ">
      
      {children}
    </div>
  );
};

export default ChatLayout;
