import React from 'react';
import { useRouter } from '../context/RouterContext';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center px-6 py-32">
      <div className="max-w-xl text-center space-y-8">
        <div className="inline-flex items-center space-x-3 border border-white/20 px-4 py-1.5 bg-neutral-950">
          <span className="w-2 h-2 bg-white rounded-full" />
          <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-400">
            ERROR 404 // CLASSIFIED RECORD NOT FOUND
          </span>
        </div>

        <h1 className="font-editorial text-6xl sm:text-8xl uppercase tracking-[0.05em] font-light">
          PAGE NOT
          <span className="block italic text-neutral-400 font-normal">
            LOCATED.
          </span>
        </h1>

        <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
          The requested clinical section or formulation endpoint is either under regulatory embargo or does not exist in the Eastetic index.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors"
          >
            Return to Homepage
          </button>
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-4 border border-white/30 text-white text-xs font-technical uppercase tracking-[0.2em] hover:border-white transition-colors"
          >
            View Products Directory
          </button>
        </div>
      </div>
    </div>
  );
};
