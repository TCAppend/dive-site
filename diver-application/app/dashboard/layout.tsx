import  Sidebar from "../ui/dashboard/sidebar/sidebar";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex min-h-screen">
    <div className=" fixed h-full z-50">
        <Sidebar />
    </div>

    <div className="flex-1 p-5 md:ml-72 ml-0">
        {children}
    </div>
</div>
    )};