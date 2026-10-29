import { Outlet } from "react-router-dom";
import AdminHeader from "../components/layout/AdminHeader";
import AdminAside from "../components/layout/AdminAside";

export default function AdminLayout() {
  return (
    <div className="flex flex-col">
      <AdminHeader />

      <div className="flex flex-1">
        <AdminAside />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
