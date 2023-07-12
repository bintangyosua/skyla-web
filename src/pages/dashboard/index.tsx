import LayoutComponent from "@/components/LayoutComponent/LayoutComponent";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  console.log("session:" + session, "status:" + status);
  return (
    <LayoutComponent>
      <div className="w-[1136px] mx-auto">
        <h2>Dashboard</h2>
      </div>
    </LayoutComponent>
  );
}
