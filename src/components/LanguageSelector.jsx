const LanguageSelector = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="h-28 w-28 rounded-full overflow-hidden bg-white/10 border border-white/15 flex items-center justify-center">
            <img
              src="/burgmenbijelilogo.jpg"
              alt="BURGMEN Logo"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-[0.3em] text-white">
            Odaberite jezik
          </h1>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => onSelect('bs')}
            className="rounded-full border border-white/15 bg-white/10 px-6 py-4 text-lg font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
          >
            Bosanski
          </button>
          <button
            onClick={() => onSelect('en')}
            className="rounded-full border border-white/15 bg-white/10 px-6 py-4 text-lg font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
