import { CheckCircle2 } from "lucide-react";

interface AlertSuccessProps {
  message: string;
  className?: string;
}

export default function AlertSuccess({ message, className }: AlertSuccessProps) {
  return (
    <div
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-md border border-green-300 bg-green-100 text-green-800 shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2 ${className}`}
    >
      <CheckCircle2 className="w-5 h-5 text-green-600" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
