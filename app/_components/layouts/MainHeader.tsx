import React from 'react';
import Link from 'next/link';

export default function MainHeader() {
  const categoryItems = [
    '일본쇼핑',
    '건강/건강식품',
    '화장품/뷰티',
    '다이어트',
    '남성용품',
    '생활/잡화',
    '식품',
    '기획전',
  ];

  const categoryLinks = categoryItems.map((item, index) => ({
    label: item,
    path: `/category/${index + 1}`,
    isActive: false,
  }));

  const userLinks = [
    { label: '회원가입', path: '/signup' },
    { label: '로그인', path: '/login' },
    { label: '주문배송', path: '/orders' },
    { label: '고객센터', path: '/support' },
  ];

  return (
    <header className="my-10 flex h-10 items-center justify-between">
      <div className="flex gap-x-8">
        <div className="text-5xl font-bold">백엔샵</div>
        <nav className="flex items-center gap-x-4">
          {categoryLinks.map(({ label, path }) => (
            <Link key={label} className="font-medium" href={path}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex gap-x-4">
        {userLinks.map(({ label, path }) => (
          <div key={label}>
            <Link className="text-xs" href={path}>
              {label}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
}
