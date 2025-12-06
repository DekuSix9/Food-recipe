

const ContactUs = () => {
    return (
        <div className="  font-poppins">
           
                <div className=" bg-red-600 text-center py-22 text-white">
                     <h1 className="text-5xl font-bold">Contact Us</h1>
                <p className="max-w-2xl mx-auto px-4 text-lg mt-4">
              Get in touch with Platea! Whether you have a question, need assistance,
                our team is here to help. Reach out to us
                    today for a seamless experience.
                  </p>
                </div>

       <div className="max-w-full md:max-w-[80%] lg:max-w-[60%] mx-auto px-4 md:px-8 py-16">
      <form className="space-y-6">

         {/* Name */}
     <div>
       <label className="block font-semibold mb-2">YOUR NAME</label>
      <input
        type="text"
        className="border border-gray-400 shadow-xsm w-full p-3 rounded-md" />
     </div>

       {/* Subject */}
    <div>
      <label className="block font-semibold mb-2">SUBJECT</label>
      <input
        type="text"
        className="border border-gray-400 shadow-xsm w-full p-3 rounded-md" />
    </div>

    {/* Email */}
    <div>
      <label className="block font-semibold mb-2">EMAIL ADDRESS</label>
      <input
        type="email"
        className="border border-gray-400 shadow-xsm w-full p-3 rounded-md"/>
    </div>

    {/* Message */}
    <div>
      <label className="block font-semibold mb-2">YOUR MESSAGE</label>
      <textarea
        className="border border-gray-400 shadow-xsm w-full p-3 h-32 rounded-md " >

        </textarea>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="bg-red-600 hover:bg-black text-white px-6 py-3 
      rounded-md font-semibold transition-all w-full sm:w-auto">
      SEND MESSAGE
    </button>

  </form>
</div>

            
        </div>
    );
};

export default ContactUs;