import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children, role }: { children: React.ReactNode; role: string }) {
  const userRole = useSelector((state:any) => state.auth.role);
  const router = useRouter();

  useEffect(() => {
    if (userRole !== role) {
      router.push("/"); // Redirect if not admin
    }
  }, [userRole, router, role]);

  return <>{userRole === role ? children : null}</>;
}
