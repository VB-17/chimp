import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { faqContent } from "../lib/constants";

function FAQ() {
  return (
    <div className="w-full pt-4">
      <div className="mx-auto w-full">
        {faqContent.map(({ title, description }) => (
          <>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg py-4 text-left text-sm font-medium">
                    <span className="text-lg">{title}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 transition-transform duration-200`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pb-4 text-sm text-white/70 leading-normal">
                    {description}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
