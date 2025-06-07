export const Loading = () => {
  return (
    <div className="flex gap-2 font-medium justify-center items-center py-5">
      <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p>Carregando...</p>
    </div>
  );
};
