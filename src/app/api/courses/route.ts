import { NextResponse } from 'next/server';
import courses from './data.json';

export async function GET(request:Request) {
  return NextResponse.json(courses);
}

export async function POST(request:Request) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id:courses.length +1, 
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);

  return NextResponse.json(courses);
}