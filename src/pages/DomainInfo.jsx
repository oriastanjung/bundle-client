import React from 'react'

function DomainInfo() {
  return (
    <section class="w-full flex gap-5">
      <div class="bg-white h-1/2 w-1/12 px-4 py-4">
        <img src="/logo-rh.png" alt="" />
        <h1 class="font-bold mt-4">
          Red Hat Certified <br />
          System <br />
          Administrator Exam
        </h1>
        <p class="text-[8px] mt-5">Infinite Learning Indonesia</p>
        <button
          class="px-3 mt-2 font-bold py-1 bg-gray-300 border w-full text-center text-xs"
        >
          Select Language
        </button>
      </div>
      <div class="w-11/12 bg-lime-100 px-10 pt-10">
        <h1 class="font-bold text-lg">Exam Station Information.</h1>
        <form action="POST">
          <p class="w-2/4 text-justify">
            Your exam station (domain number) = x
            
            <br />
            The x number will be given by your mentors
          </p>
          <div class="flex justify-start mb-5">
            <button
              type="submit"
              class="px-3 mt-2 border-black font-bold py-1 bg-gray-300 border text-center text-xs"
            >
              Start Exam
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default DomainInfo