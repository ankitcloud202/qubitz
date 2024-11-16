import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import GridPattern from './ui/grid-pattern'
import { cn } from '@/lib/utils'

const HomePage=() =>{
  return (
    <div className="min-h-screen bg-[#000000f0] relative">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left relative">
          <div className="absolute inset-0 -z-10 w-[70%]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-[100px] rounded-3xl" />
            </div>
            <h1 className="text-4xl font-light text-white sm:text-5xl md:text-6xl">
              Welcome to <span className="">Qubitz</span>
            </h1>
            <p className="mt-3 text-base text-white/80 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              Unleash the power of AI to revolutionize your workflow. Qubitz brings cutting-edge generative AI technology to your fingertips.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href="#"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-700 hover:bg-indigo-800 md:py-4 md:text-lg md:px-10"
                >
                  Find your usecase
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="#"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Create app
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl">
            {/* <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Qubitz AI Illustration"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            /> */}
            <iframe width="600" height="600" src="https://www.youtube.com/embed/rc95VGXvJoE?si=c7E9hV42qjt-BDCF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </main>
      <GridPattern
        z={50}
        width={80}
        height={80}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  )
}

export default HomePage