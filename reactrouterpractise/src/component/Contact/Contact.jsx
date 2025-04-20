function Contact() {
  return (
    <div className="flex mt-10 mb-5">
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
        <div className="flex items-center mt-4 ">
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div className="ml-4 text-md tracker-wide font-semibold w-40">
            +44 1234556789
          </div>
        </div>
        <div className="flex items-center mt-4">
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div className="ml-4 tracking-wide font-semibold">info@acme.org</div>
        </div>
      </div>
      <form className="flex-1 flex flex-col [&>*]:border-1 [&>*]:border-gray-300 [&>*]:rounded-lg items-start justify-center gap-4 [&>input]:w-full px-5 [&>input]:h-10 [&>input]:pl-2">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telephone Number" />
        <button
          type="submit"
          className="w-30 bg-red-500 text-white hover:bg-orange-300 hover:text-black mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
