type CancelAppointmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
};

export function CancelAppointmentModal({
  isOpen,
  onClose,
  onConfirm,
  loading = false,
}: CancelAppointmentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">
          Cancelar consulta
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Tem certeza que deseja cancelar esta consulta?
          Essa ação não poderá ser desfeita.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300"
            disabled={loading}
          >
            Voltar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Cancelando..." : "Cancelar consulta"}
          </button>
        </div>
      </div>
    </div>
  );
}
