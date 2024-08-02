import { cn } from "@/lib/utils";

type ProtectedRouteProps = {
  className?: string;
};

export function ProtectedRoute({ className }: ProtectedRouteProps) {
  return <div className={cn("", className)}>ProtectedRoute</div>;
}
