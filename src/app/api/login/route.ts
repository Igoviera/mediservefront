import { NextResponse } from 'next/server';
import users from '@/data/users.json';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return NextResponse.json({ success: true, message: 'login feito' });
  } else {
    return NextResponse.json({ success: false, message: 'erro' }, { status: 401 });
  }
}
