function ModuleTop({ title, subtitle }) {
  return (
    <div className="flex justify-center items-center h-[300px] mb-12 bg-yellow-200 w-full font-semibold flex-col gap-4 text-center">
      <h2 className="text-4xl">{title}</h2>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
}

export default ModuleTop;
