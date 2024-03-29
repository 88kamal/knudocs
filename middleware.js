import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let url = req.url

  if (!verify && url.includes('/create')) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "/create") {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (!verify && url.includes('/account')) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "/account") {
    return NextResponse.redirect("http://localhost:3000/");
  }
}