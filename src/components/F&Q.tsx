import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fq } from "@/data/index";

export function FQ() {
  return (
    <Accordion type="single" collapsible className="w-full text-white">
      {fq.map((item) => (
        <AccordionItem value={item.id} key={item.id} className="border-b border-gray-700">
          <AccordionTrigger className="p-4 text-lg md:text-xl lg:text-2xl">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="p-4 text-base md:text-lg lg:text-xl text-[rgb(198,198,198)]">
            {item.Answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
