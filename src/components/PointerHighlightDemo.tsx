import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function PointerHighlightDemo() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 py-20 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-md p-6">
        <div className="h-40 w-full rounded-lg bg-linear-to-r from-blue-200 to-sky-200" />
        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10">What is CasaAI?</span>
          </PointerHighlight>
        </div>
        <p className="mt-4 text-sm text-black dark:text-white">
        We automate the entire property management lifecycle journey for you.
        From buying, managing, and listing properties - all with AI.
        </p>
      </div>

      <div className="rounded-md p-6">
        <div className="h-40 w-full rounded-lg bg-linear-to-r from-blue-200 to-purple-200" />
        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          <PointerHighlight
            rectangleClassName="bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700 leading-loose"
            pointerClassName="text-red-500 h-3 w-3"
            containerClassName="inline-block mx-1"
          >
            <span className="relative z-10">How can CasaAI help you?</span>
          </PointerHighlight>
        </div>
        <p className="mt-4 text-sm text-black dark:text-white">
        Our AI agent, Rio, has numerous features with a unique purpose to assist you as you start or grow your property business.
        </p>
      </div>

      <div className="rounded-md p-6">
        <div className="h-40 w-full rounded-lg bg-linear-to-r from-blue-200 to-purple-200" />
        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          <PointerHighlight
            rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mx-1"
          >
            <span className="relative z-10">Why should I use CasaAI?</span>
          </PointerHighlight>
        </div>
        <p className="mt-4 text-sm text-black dark:text-white">
        Our deployable dashboard platform's AI-powered features offloads the stress of the entire property management process
        </p>
      </div>

      <div className="rounded-md p-6">
        <div className="h-40 w-full rounded-lg bg-linear-45 from-green-200 to-yellow-200" />
        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          <PointerHighlight
            rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
            pointerClassName="text-green-500 h-3 w-3"
            containerClassName="inline-block ml-1"
          >
            <span className="relative z-10">Who is using CasaAI?</span>
          </PointerHighlight>
        </div>
        <p className="mt-4 text-sm text-black dark:text-white">
        Anyone who is managing multiple properties, buying their first property or listing their property on the market to find a renter.
        </p>
      </div>
    </div>
  );
} 