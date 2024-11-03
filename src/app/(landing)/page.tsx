import CourseSection from "@/components/global/course-section";
import HomeBanner from "@/components/global/home-banner";
import PopularTopics from "@/components/global/popular-topics";
import Testimonial from "@/components/global/testimonial";

export default function Homepage() {
  return (
    <main className="flex flex-col">
      <HomeBanner />
      <PopularTopics />
      <CourseSection />
      <Testimonial />
    </main>
  );
}
