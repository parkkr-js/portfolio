
export const Section = ({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) => (
  <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 text-white">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="text-lg font-semibold text-blue-500">{title}</h3>
    </div>
    {children}
  </div>
);


