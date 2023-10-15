import blog1 from "@/assets/img/blog/img-1.png";
import blog2 from "@/assets/img/blog/img-2.png";
import blog3 from "@/assets/img/blog/img-3.png";
import { BlogPost } from "../BlogPost";

export function BlogSection() {
  return (
    <section className="blog" id="blog">
      <div className="container mx-auto">
        <h2 className="blog__title h2 mb-[50px] text-center xl:text-left">
          Our Recent Posts
        </h2>

        <div className="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]">
          <BlogPost
            imageSrc={blog1}
            imageAlt="Hands heart"
            link=""
            title="Medical"
            subtitle="10 foods to avoid for your heart health"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum ipsa delectus vero molestiae sit perferendis! Autem eius error, nobis."
          />
          <BlogPost
            imageSrc={blog2}
            imageAlt="Family in beach"
            link=""
            title="Medical"
            subtitle="10 foods to avoid for your heart health"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum ipsa delectus vero molestiae sit perferendis! Autem eius error, nobis."
          />
          <BlogPost
            imageSrc={blog3}
            imageAlt="Doctor working"
            link=""
            title="Medical"
            subtitle="10 foods to avoid for your heart health"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum ipsa delectus vero molestiae sit perferendis! Autem eius error, nobis."
          />
        </div>
      </div>
    </section>
  );
}
