import { HirelyFaq } from "@hirely/sdk";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SectionLayout from "@/components/ui/SectionLayout";

interface IProps {
    faqs: HirelyFaq[];
}
const Faqs = ({ faqs }: IProps) => {
    return <>
        <SectionLayout>
            <h2 className="font-semibold text-sm uppercase">Faqs</h2>
            <div className="flex items-center justify-center mt-6">
                <Accordion defaultValue={[faqs[0]._id]} className="w-full">
                    {faqs.map((faq) => (
                        <AccordionItem key={faq._id} value={faq._id}>
                            <AccordionTrigger className={"text-sm tracking-tight font-medium"}>{faq.question}</AccordionTrigger>
                            <AccordionContent className={"text-xs md:text-sm tracking-tight text-gray-500"}>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </SectionLayout>

    </>;
};

export default Faqs;