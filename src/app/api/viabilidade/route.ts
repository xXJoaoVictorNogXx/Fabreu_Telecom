import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nome,
      whatsapp,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      tipoInstalacao,
      plano,
      referencia,
    } = body;

    if (!nome || !whatsapp || !rua || !numero || !bairro || !cidade) {
      return NextResponse.json(
        { error: 'Por favor, preencha todos os campos obrigatórios (*).' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const emailTo = process.env.EMAIL_TO || user;

    if (!host || !user || !pass) {
      console.warn('⚠️ Configurações de e-mail SMTP não foram encontradas no .env.local.');
      return NextResponse.json(
        { 
          error: 'As configurações de e-mail (SMTP) ainda não foram definidas no servidor. Configure o arquivo .env.local.' 
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, 
      auth: {
        user,
        pass,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #20033c; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">Nova Consulta de Viabilidade</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #ff007f;">Fabreu Telecom</p>
        </div>
        <div style="padding: 24px;">
          <h3 style="color: #20033c; border-bottom: 2px solid #facc15; padding-bottom: 8px; margin-top: 0;">Dados do Cliente</h3>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/55${whatsapp.replace(/\D/g, '')}" target="_blank" style="color: #25D366; font-weight: bold;">${whatsapp}</a></p>
          
          <h3 style="color: #20033c; border-bottom: 2px solid #facc15; padding-bottom: 8px; margin-top: 24px;">Endereço de Consulta</h3>
          <p><strong>CEP:</strong> ${cep || 'Não informado'}</p>
          <p><strong>Rua/Avenida:</strong> ${rua}, Nº ${numero}</p>
          <p><strong>Bairro:</strong> ${bairro}</p>
          <p><strong>Cidade:</strong> ${cidade}</p>
          <p><strong>Ponto de Referência:</strong> ${referencia || 'Nenhum informado'}</p>

          <h3 style="color: #20033c; border-bottom: 2px solid #facc15; padding-bottom: 8px; margin-top: 24px;">Detalhes do Pedido</h3>
          <p><strong>Tipo de Instalação:</strong> ${tipoInstalacao || 'Residencial'}</p>
          <p><strong>Plano de Interesse:</strong> ${plano || 'Ainda não sei'}</p>
        </div>
        <div style="background-color: #f9f9f9; padding: 12px 20px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;">
          E-mail enviado automaticamente pelo formulário do site Fabreu Telecom.
        </div>
      </div>
    `;

    // Envia o e-mail
    await transporter.sendMail({
      from: `"Viabilidade Fabreu Telecom" <${user}>`,
      to: emailTo,
      subject: `📍 Nova Consulta de Viabilidade: ${nome} - ${cidade}`,
      replyTo: user,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Consulta de viabilidade enviada com sucesso!' });
  } catch (error: any) {
    console.error('Erro ao enviar e-mail de viabilidade:', error);
    return NextResponse.json(
      { error: 'Falha ao enviar a solicitação. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
