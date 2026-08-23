interface ProductLike {
  id: string;
  name: string;
  price: number;
}

export function getPaymentLink(product: ProductLike): string {
  const name = product.name.toLowerCase();

  if (name.includes('canva')) {
    return 'https://pay.kirvano.com/938feedf-3de6-4860-9058-6fb62fb86e44';
  }
  if (name.includes('capcut')) {
    return 'https://pay.kirvano.com/c42d9a91-6ffe-4d9a-a091-ffa597859ad8';
  }
  if (name.includes('envato elements (2 meses)')) {
    return 'https://pay.kirvano.com/6bf0f6a8-4abc-485a-8742-578fa5a6cb84';
  }
  if (name.includes('envato elements (3 meses)')) {
    return 'https://pay.kirvano.com/630c1a90-3cfd-477b-9f4c-0ace9eda3cfa';
  }
  if (name === 'freepik premium (3 meses)') {
    return 'https://pay.kirvano.com/7053f9fc-143f-4884-af07-40d6659e7f98';
  }
  if (name === 'freepik premium (2 meses)') {
    return 'https://pay.kirvano.com/13cf057b-b532-438b-99a4-6af24a171962';
  }
  if (name === 'freepik premium') {
    return 'https://pay.kirvano.com/de06653e-b03c-48cd-89e1-31cda242efec';
  }
  if (name.includes('gemini advanced')) {
    return 'https://wa.me/558896261696?text=Queria+saber+mais+sobre+o+Gemini+de+18+meses&utm_source=chatgpt.com';
  }
  if (name === 'gemini pro (1 mês)') {
    return 'https://pay.kirvano.com/97c06d62-658c-4b45-87e1-e1ecbc4d4cea';
  }
  if (name.includes('netflix')) {
    return 'https://pay.kirvano.com/a2fb8599-2286-4305-871f-b5fd589044c9';
  }
  if (name.includes('hbo max')) {
    return 'https://pay.kirvano.com/eb140e78-7ced-4926-bd93-1ad48543a4e7';
  }
  if (name.includes('spotify')) {
    return 'https://pay.kirvano.com/fef9ddfc-be51-42dc-b17b-04bca176271e';
  }
  if (name.includes('iptv')) {
    const message = `Olá, gostaria de finalizar a compra do ${product.name}. Total: R$ ${product.price.toFixed(2)}`;
    return `https://wa.me/558896261696?text=${encodeURIComponent(message)}`;
  }

  // Fallback: WhatsApp genérico com os dados do produto
  const message = `Olá, gostaria de comprar o seguinte produto: ${product.name}. Preço: R$ ${product.price.toFixed(2)}`;
  return `https://wa.me/558896261696?text=${encodeURIComponent(message)}`;
}
