import { translations } from '../translations';

const ComingSoon = ({ language }) => {
  const content = translations[language]?.maintenance || {
    title: 'Coming Soon',
    message: 'Our website is currently under construction and will be available soon.',
    note: 'Please check back later.',
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-10">
      <div className="relative max-w-3xl w-full overflow-hidden rounded-[2rem] border border-white/15 bg-black/90 p-10 shadow-[0_35px_120px_-45px_rgba(255,255,255,0.55)] backdrop-blur-sm">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white via-transparent to-white opacity-40" />
        <div className="relative z-10 grid gap-8">
          <div className="space-y-4 text-center">
            <span className="inline-block rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/75">
              Under Construction
            </span>
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-[0.35em] text-white">
              {content.title}
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base leading-7 text-gray-300">
              {content.message}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center sm:justify-center">
            <div className="h-px bg-white/10 sm:col-span-2" />
            <div className="text-right text-xs uppercase tracking-[0.35em] text-white/60 sm:text-base">
              {content.note}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Status</p>
              <p className="mt-3 text-sm text-gray-200">Final touches in progress — design and content update.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Soon</p>
              <p className="mt-3 text-sm text-gray-200">Check again soon for the full BURGMEN experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
