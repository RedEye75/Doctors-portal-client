import React from "react";

const Testimonial = ({ data }) => {
  const { image, location, name, description, id } = data;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4  w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="leading-relaxed mb-6">{description}</p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={image}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {name}
                    </span>
                    <span className="text-gray-500 text-sm">{location}</span>
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
