import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from '@nextui-org/react';
import Link from 'next/link';

export default function LoginCard() {
  return (
    <Card
      className="flex w-full max-w-[30rem] justify-center border px-10 py-5"
      radius="sm"
      shadow="none"
    >
      <CardHeader className="justify-center text-3xl font-bold">
        로그인
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <Input type="email" label="Email" size="sm" radius="sm" />
            <Input type="password" label="Password" size="sm" radius="sm" />
          </div>
          <Button
            radius="sm"
            size="lg"
            className="bg-indigo-700 text-xl font-semibold text-white"
          >
            로그인
          </Button>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex h-5 w-full justify-center space-x-4">
          <Link href="/">아이디 찾기</Link>
          <Divider orientation="vertical" className="h-full" />
          <Link href="/">비밀번호 찾기</Link>
        </div>
      </CardFooter>
    </Card>
  );
}
