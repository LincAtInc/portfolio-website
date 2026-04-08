import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Domain-to-brand routing middleware.
 * Reads the hostname and sets x-brand header so the app knows which brand to render.
 * Each domain gets its own brand identity from the same design system.
 */

const domainBrandMap: Record<string, string> = {
  // Portfolio — Lincoln's personal site
  "lincolnmitchell.io": "portfolio",
  "www.lincolnmitchell.io": "portfolio",

  // INC Consultancy — Interfaces-N-Creatives
  "interfacesncreatives.com": "inc",
  "www.interfacesncreatives.com": "inc",

  // Local development — flip to "inc" to see consultancy site
  "localhost": "portfolio",
};

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] ?? "localhost";
  const brand = domainBrandMap[hostname] ?? "portfolio";

  const response = NextResponse.next();
  response.headers.set("x-brand", brand);

  // Also pass as cookie so client components can read it
  response.cookies.set("brand", brand, { path: "/" });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
