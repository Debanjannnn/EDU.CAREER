import { NextRequest, NextResponse } from "next/server";

const students = [
  { id: 1, name: "John Doe", education: "B.Tech", skills: ["React", "Node.js"] },
  { id: 2, name: "Jane Smith", education: "M.Sc", skills: ["Python", "AI"] },
];

export async function GET(request: NextRequest) {
  return NextResponse.json({ students });
}
