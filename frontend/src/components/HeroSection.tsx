

const HeroSection = () => {
  return (
    <section className="h-[93vh] text-white flex flex-col items-center justify-center">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Upload and Recieve

        <span className="sm:block">  File Easily. </span>
      </h1>

      <p className="mx-auto text-sm mt-4 max-w-xl sm:text-lg/relaxed text-slate-200 opacity-75">
        Share your pdf, docs, images and many more in less than 1 minute , without any signup/signin and email verification
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/upload"
        >
          Upload
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/recieve"
        >
          Have a code?
        </a>
      </div>
    </div>
  </div>
  <div className="h-[80px]"></div>
</section>
  )
}

export default HeroSection