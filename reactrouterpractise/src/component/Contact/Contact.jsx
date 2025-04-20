function Contact() {
  return (
    <div className="flex">
      <div className="bg-gray-100 flex-1 text-left rounded-lg pl-5 py-5">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Get in touch:
        </h1>
        <p>Fill in the form to start a conversation</p>
        <div className="flex items-center mt-8">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="ml-4 text-md tracking-wide font-semibold w-40">
            Acme Inc,Street,State,Postal Code
          </p>
        </div>
      </div>
      <form className="flex-1">
        <input type="text" placeholder="Full Name" />
      </form>
    </div>
  );
}

export default Contact;
