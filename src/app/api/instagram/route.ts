import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache de 1 hora

export async function GET() {
  try {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Token do Instagram não configurado. Adicione INSTAGRAM_ACCESS_TOKEN no seu .env.local.' },
        { status: 500 }
      );
    }

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&limit=8&access_token=${token}`;
    
    const res = await fetch(url);
    
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Erro ao buscar dados do Instagram:', errorData);
      return NextResponse.json(
        { error: 'Falha ao buscar dados na API do Instagram' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro na rota da API do Instagram:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor' },
      { status: 500 }
    );
  }
}
