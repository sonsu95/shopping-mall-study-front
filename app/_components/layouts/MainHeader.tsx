import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

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
    <Navbar isBordered maxWidth="full" classNames={{ wrapper: 'px-0' }}>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden font-bold text-inherit sm:block">백엔샵</p>
        </NavbarBrand>
        <NavbarContent className="gap-3">
          {categoryLinks.map((category) => {
            return (
              <NavbarItem isActive={category.isActive}>
                <Link href={category.path}>{category.label}</Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3">
        {userLinks.map((userLink) => {
          return (
            <NavbarItem>
              <Link href={userLink.path}>{userLink.label}</Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </Navbar>
  );
}
