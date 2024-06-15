'use client';

import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { api } from '@/app/_api/api';

interface Item {
  id: number;
  itemDetail: string;
  itemNm: string;
  price: number;
  regTime: string;
  sellStatCd: string;
  updateTime: string;
}

export default function Home() {
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    async function getData() {
      const res = await api.get<Item>('/product/test');
      return res.data;
    }

    getData().then((data) => {
      setItem(data);
    });
  }, []);

  return (
    <main>
      <div>
        {item ? (
          <>
            <p>제품명: {item.itemNm}</p>
            <p>가격: {item.price}원</p>
          </>
        ) : (
          <p>로딩 중...</p>
        )}
      </div>
      <Button>버튼 테스트</Button>
    </main>
  );
}
