'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Courses from './components/Courses';
import CourseSearch from './components/CourseSearch';
import LoadingPage from './loading';



const Home = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
    <div>This is our home page.</div>
    <CourseSearch getSearchResults={(results:any) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  )
}

export default Home;