import Image from "next/image";
import Link from "next/link";
import { MdFormatListBulleted } from "react-icons/md";
import SkeletonCourseList from "../_skeletons/SkeletonCourseList";

const OneCourse = ({ course, loading }) => {
  return !loading ? (
    <Link
      href={`/course-Details/${course?.id}`}
      className="bg-[#1f2b46] shadow-md rounded-lg hover:shadow-md hover:cursor-pointer hover:shadow-gray-600 hover:border hover:border-primary hover:transition-all hover:duration-150"
    >
      <Image
        alt="image-course"
        src={course?.attributes?.image?.data?.attributes?.url}
        width={400}
        height={350}
        className="h-[200px] object-cover rounded-t-lg"
      />

      <div className="flex justify-between items-center p-2">
        <div className="p-2 ">
          <h1 className="line-clamp-1">{course?.attributes?.title}</h1>
          <span className="flex items-center text-sm text-gray-500 gap-2 ">
            <MdFormatListBulleted />
            {course?.attributes?.category}
          </span>
        </div>

        <h1 className="text-primary text-[18px]">${course.attributes.price}</h1>
      </div>
    </Link>
  ) : (
    <SkeletonCourseList />
  );
};

export default OneCourse;
