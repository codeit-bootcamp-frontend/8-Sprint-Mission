import { useState } from 'react';

export async function getApi(size = '4') {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=${size}&orderBy=favorite`
  );
  const result = await response.json();
  return result;
}

export async function getApiOrderBy({ order = 'recent', lowerSize = '10' }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=${lowerSize}&orderBy=${order}`
  );
  const result = await response.json();
  return result;
}
