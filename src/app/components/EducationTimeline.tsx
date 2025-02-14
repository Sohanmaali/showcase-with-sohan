export default function EducationTimeline() {
  return (
    <>
      <div className="mb-5 flex gap-4">
        <div className="w-12 h-12 flex justify-center items-center text-yellow-400 text-xl bg-[#202022] rounded-md  shadow border-t border-l border-[#FFD16A]  shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-yellow-400"
            viewBox="0 0 512 512"
            fill="none"
            stroke="currentColor"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Book</title>
            <path d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288" />
          </svg>
        </div>
        <div className="mt-2">
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </div>
      </div>

      {/* <ol className="relative border-s border-gray-200 dark:border-gray-700 md:ms-20  ms-16">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-800 dark:text-blue-300"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 5.09L6.26 7 12 9.91 17.74 7 12 5.09zM4 10v10h2v-6h2v6h8v-6h2v6h2V10h2v12H2V10h2z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
          </h3>

          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on January 13th, 2022
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Currently pursuing a B.Sc. in Biotechnology with a focus on Botany,
            Zoology, and Chemistry at Government College, Khategaon.
            Demonstrated excellence in coursework related to plant biology,
            animal science, genetics, and chemical processes.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-800 dark:text-blue-300"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 5.09L6.26 7 12 9.91 17.74 7 12 5.09zM4 10v10h2v-6h2v6h8v-6h2v6h2V10h2v12H2V10h2z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Barkatullah Vishwavidyalaya, Bhopal
          </h3>

          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on January 13th, 2022
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Currently pursuing a B.Sc. in Biotechnology with a focus on Botany,
            Zoology, and Chemistry at Government College, Khategaon.
            Demonstrated excellence in coursework related to plant biology,
            animal science, genetics, and chemical processes.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-800 dark:text-blue-300"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 5.09L6.26 7 12 9.91 17.74 7 12 5.09zM4 10v10h2v-6h2v6h8v-6h2v6h2V10h2v12H2V10h2z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Govt High School Khategaon
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 7th, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Completed 12th grade with a specialization in Biology, demonstrating
            a strong foundation in biological sciences. Achieved 79% in the
            12th-grade board examinations.
          </p>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-800 dark:text-blue-300"
            >
              <path d="M12 2 2 7v2h20V7l-10-5zm-6 9v8h12v-8h2v10H4V11h2zm4 0v4h4v-4h-4z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Library v1.2.2
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 2nd, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol> */}
       <div
  className="[--background:#fff] [--color:#000] [--muted:#242424] [--muted-foreground:#9c9c9c] [--border:#2e2e2e] [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-white[box-shadow:var(--shadow)]"
>
  <div
    className="[--tl-color:#daa520] [--tl-rounded:9999px] [--tl-bullet-size:25px] [--tl-line-width:3px] [--offset:calc(var(--tl-bullet-size)/2+var(--tl-line-width)/2)] [&amp;_[data-child=bullet]]:left-[calc((var(--tl-bullet-size)/2+var(--tl-line-width)/2)*-1)] [&amp;_[data-child=bullet]]:right-auto [&amp;_[data-child=body]]:pl-[var(--offset)] [&amp;_[data-tl=item]]:before:[--timeline-line-left:calc(var(--tl-line-width)*-1)] [&amp;_[data-tl=item]]:before:[var(--timeline-line-right:auto)] [&amp;_[data-tl=item]]:pl-[var(--offset)] p-4 pl-8"
    data-align="left"
    role="group"
  >
    <div
      className="[--item-border-color:#424242] [--tli-border-style:dotted] [--item-line:var(--tl-line-width)_var(--tli-border-style,solid)_var(--item-border-color)] [&amp;_[data-child=bullet]]:data-[line-active]:border-[var(--tli-color,var(--tl-color))] group relative text-left text-zinc-600 dark:text-zinc-500 [&amp;:where(:not(:last-of-type))]:[--timeline-line-display:block] [&amp;:where(:not(:first-of-type))]:mt-8 pb-4 dark:[--item-border-color:#424242] before:absolute before:pointer-events-none before:top-0 before:left-[var(--timeline-line-left,0)] before:right-[var(--timeline-line-right,0)] before:-bottom-8 before:[display:var(--timeline-line-display,none)] before:[border-inline-start:var(--item-line)] [&amp;:where([data-line-active])]:before:border-[var(--tli-color,var(--tl-color))]"
      data-line-active="true"
      data-tl="item"
    >
      <div
        className="bg-[#fff] border-[var(--muted)] text-[var(--muted)] border-solid [border-width:var(--tli-line-width,var(--tl-line-width))] absolute top-0 h-[var(--tl-bullet-size)] w-[var(--tl-bullet-size)] rounded-[var(--tl-rounded)] flex items-center justify-center cursor-pointer"
        data-active="true"
        data-child="bullet"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          stroke-linejoin="round"
          stroke-linecap="round"
          viewBox="0 0 24 24"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M12 3l0 6"></path>
          <path d="M12 15l0 6"></path>
        </svg>
      </div>

      <div className="" data-child="body">
        <span className="font-semibold leading-none font-mono text-sky-600"
          >Commits</span
        >

        <div className="mt-0" role="group">
          <p
            className="flex flex-row flex-nowrap items-center gap-2 text-zinc-600 dark:text-zinc-500"
          >
            <span className="text-sm font-normal font-mono line-clamp-1"
              >john doe</span
            >
          </p>
        </div>

        <div
          className="text-sm font-normal font-mono [&amp;_*]:font-mono mt-2 white-space-break-spaces flex-col items-start scrollbar markdown-body line-clamp-2"
        >
          remove docs as they get moved to primer/design.
        </div>
        <div
          className="relative text-sm flex flex-row items-center gap-2 w-max [text-align:inherit] mt-2"
          role="group"
        >
          <time className="flex flex-row items-center gap-2 font-mono"
            >on Aug 24, 2023</time
          >
          <button
            className="!absolute -bottom-6 left-0 text-sky-600 text-sm mt-2 font-mono hover:underline"
            type="button"
          >
            Show more
          </button>
        </div>
      </div>
    </div>

    <div
      className="[--item-border-color:#424242] [--tli-border-style:solid] [--item-line:var(--tl-line-width)_var(--tli-border-style,solid)_var(--item-border-color)] [&amp;_[data-child=bullet]]:data-[line-active]:border-[var(--tli-color,var(--tl-color))] group relative text-left text-zinc-600 dark:text-zinc-500 [&amp;:where(:not(:last-of-type))]:[--timeline-line-display:block] [&amp;:where(:not(:first-of-type))]:mt-8 pb-4 dark:[--item-border-color:#424242] before:absolute before:pointer-events-none before:top-0 before:left-[var(--timeline-line-left,0)] before:right-[var(--timeline-line-right,0)] before:-bottom-8 before:[display:var(--timeline-line-display,none)] before:[border-inline-start:var(--item-line)] [&amp;:where([data-line-active])]:before:border-[var(--tli-color,var(--tl-color))]"
      data-tl="item"
    >
      <div
        className="bg-[#fff] border-[var(--muted)] text-[var(--muted)] border-solid [border-width:var(--tli-line-width,var(--tl-line-width))] absolute top-0 h-[var(--tl-bullet-size)] w-[var(--tl-bullet-size)] rounded-[var(--tl-rounded)] flex items-center justify-center cursor-pointer"
        data-child="bullet"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          stroke-linejoin="round"
          stroke-linecap="round"
          viewBox="0 0 24 24"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M7 8l0 8"></path>
          <path d="M9 18h6a2 2 0 0 0 2 -2v-5"></path>
          <path d="M14 14l3 -3l3 3"></path>
        </svg>
      </div>

      <div className="" data-child="body">
        <span className="font-semibold leading-none font-mono text-sky-600"
          >Branch</span
        >

        <div className="mt-0" role="group">
          <p
            className="flex flex-row flex-nowrap items-center gap-2 text-zinc-600 dark:text-zinc-500"
          >
            <span className="text-sm font-normal font-mono line-clamp-1"
              >jane doe</span
            >
          </p>
        </div>

        <div
          className="text-sm font-normal font-mono [&amp;_*]:font-mono mt-2 white-space-break-spaces flex-col items-start scrollbar markdown-body line-clamp-2"
        >
          handcrafted with &lt;3
        </div>

        <div
          className="relative text-sm flex flex-row items-center gap-2 w-max [text-align:inherit] mt-2"
          role="group"
        >
          <time className="flex flex-row items-center gap-2 font-mono"
            >on Feb 4, 2023</time
          >
          <button
            className="!absolute -bottom-6 left-0 text-sky-600 text-sm mt-2 font-mono hover:underline"
            type="button"
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  </div>
</div> 
    </>
  );
}
