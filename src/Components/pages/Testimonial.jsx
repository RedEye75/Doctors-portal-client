import React from "react";

const Testimonial = ({ data }) => {
  const { image, location, name, description, id } = data;
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4  w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <p class="leading-relaxed mb-6">{description}</p>
                <a class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={image}
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      {name}
                    </span>
                    <span class="text-gray-500 text-sm">{location}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
