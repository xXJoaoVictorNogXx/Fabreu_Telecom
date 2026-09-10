"use client";

import React, { useEffect, useState } from 'react';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInstagram() {
      try {
        const response = await fetch('/api/instagram');
        
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || 'Falha ao carregar o feed do Instagram');
        }
        
        const result = await response.json();
        
        if (result.error) {
           throw new Error(result.error);
        }
        
        setPosts(result.data || []);
      } catch (err: any) {
        setError(err.message || 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }

    fetchInstagram();
  }, []);

  return (
    <section className="py-24 bg-[var(--color-roxo-900)] border-t border-[var(--color-linha)]">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow justify-center mb-4">Redes Sociais</span>
          <h2 className="text-4xl md:text-5xl mb-6">Fique por dentro no <span className="text-[var(--color-magenta)]">Instagram</span></h2>
          <p className="text-lg text-[var(--color-cinza)] max-w-2xl mx-auto">
            Acompanhe nossas novidades, dicas de tecnologia e os bastidores da Fabreu Telecom.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
             <div className="w-10 h-10 border-4 border-[var(--color-roxo-700)] border-t-[var(--color-magenta)] rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="bg-[var(--color-roxo-800)] border border-[var(--color-linha)] rounded-xl p-8 text-center text-[var(--color-cinza)] max-w-2xl mx-auto">
             <p className="mb-2 text-white text-lg">⚠️ Não foi possível carregar as publicações.</p>
             <p className="text-sm opacity-80 mb-4">{error}</p>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-linha">
               Siga-nos no Instagram
             </a>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[var(--color-roxo-850)] border border-[var(--color-linha)] rounded-xl overflow-hidden hover:-translate-y-2 hover:border-[var(--color-magenta)] transition-all duration-300 shadow-lg flex flex-col"
              >
                <div className="aspect-square bg-[var(--color-roxo-800)] relative overflow-hidden">
                  {post.media_type === 'VIDEO' ? (
                    <video 
                       src={post.media_url} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       muted 
                       loop 
                       playsInline 
                    />
                  ) : (
                    <img 
                      src={post.media_url} 
                      alt={post.caption || 'Instagram Post'} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {/* Ícones para Vídeo ou Carrossel */}
                  {post.media_type === 'VIDEO' && (
                     <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full backdrop-blur-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                     </div>
                  )}
                  {post.media_type === 'CAROUSEL_ALBUM' && (
                     <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-md backdrop-blur-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                     </div>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--color-cinza)] line-clamp-3 mb-3 flex-1">
                    {post.caption || 'Acompanhe as novidades da Fabreu Telecom.'}
                  </p>
                  <p className="text-xs text-[var(--color-amarelo)] font-medium mt-auto">
                    {new Date(post.timestamp).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
