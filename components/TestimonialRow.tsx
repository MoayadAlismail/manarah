import { testimonials } from "@/data/testimonials";

export default function TestimonialRow() {
  // TODO: make the cards loop after they're finished
  return (
    <div className="flex">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex-shrink-0 w-80 mx-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-200 mr-3"></div>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.username}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}