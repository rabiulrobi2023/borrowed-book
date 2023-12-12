const WeAreBest = () => {
  return (
   
      <div className="footer p-10  text-base-content mt-10 gap-8 max-w-[1280px] mx-auto">
        <div>
          <p className="text-2xl">
            Why We are The <span className="text-[#F3A847]">Best</span>
          </p>
          <p className="text-justify">
            Book House Haven of Knowledge and Exploration" Our
            library stands as a beacon of knowledge and inspiration, offering an
            unparalleled experience to its visitors. With an impressive
            collection of important books, we take pride in being the best in
            our field. Our library is more than just a repository of books; it's
            a sanctuary for seekers of wisdom and curious minds. We prioritize
            accessibility and inclusivity, ensuring that everyone in our
            community can access the wealth of information within our walls. Our
            dedicated staff, state-of-the-art facilities, and a commitment to
            constantly expanding our collection set us apart. We host engaging
            events, encourage lifelong learning, and foster a love for reading.
            In an age of digital distractions, our library remains a steadfast
            guardian of the printed word. We are the best because we cherish the
            enduring power of books, preserving and sharing knowledge for
            generations to come.
          </p>
        </div>

        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-orange-500 text-white border-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
  
  );
};

export default WeAreBest;
