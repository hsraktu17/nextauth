import prisma from "@/db";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  console.log(body);

  const username = await body.username;
  const email = await body.email;
  const password = await body.password;

  const user = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password,
    },
  });

  console.log({
    username: username,
    email: email,
    password: password,
  });

  return NextResponse.json({
    user,
  });
}
