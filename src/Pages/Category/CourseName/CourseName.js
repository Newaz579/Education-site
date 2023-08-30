import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseName = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-mauve.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <h5>Here have {(courses.length) - 1} courses. Which teaches you efficiently </h5>
            {
                courses.map(course =>
                    <p key={course.id}>
                        <Link to={`/course/${course.id}`}>
                            {course.name}
                        </Link>
                    </p>)
            }
        </div>
    );
};

export default CourseName;