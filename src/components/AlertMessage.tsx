// components/AlertMessage.tsx
import { CheckCircle2, XCircle } from "lucide-react";

interface AlertMessageProps {
  message: string;
  type?: "success" | "error";
  className?: string;
}

export default function AlertMessage({
  message,
  type = "success",
  className,
}: AlertMessageProps) {
  const baseStyle =
    "w-full flex items-center gap-3 px-4 py-3 rounded-md border shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2";
  const typeStyle =
    type === "success"
      ? "border-green-300 bg-green-100 text-green-800"
      : "border-red-300 bg-red-100 text-red-800";

  const Icon = type === "success" ? CheckCircle2 : XCircle;

  return (
    <div className={`${baseStyle} ${typeStyle} ${className}`}>
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
