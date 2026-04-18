import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "What happens to my customer data if I leave?",
    a: "Full export to Excel at any time. Customers, orders, and financial history come with you. No lock-in.",
  },
  {
    q: "How long does it take to move off my current tools?",
    a: "First event live in under an hour if your details are ready. Spreadsheet import is manual today. If you have more than a few hundred past customers, contact us before signing up.",
  },
  {
    q: "What payment methods are supported?",
    a: "Bank transfer, QRIS, and card payments through an integrated gateway. Payments auto-confirm when cleared. No manual cross-checking of bank statements.",
  },
  {
    q: "What if I outgrow it?",
    a: "The deep analytics layer (cohort analysis, LTV, pricing optimization) is not built yet. Acara fits operators running events, not data teams analyzing them.",
  },
  {
    q: "Is this for one-off events?",
    a: "No. Acara is built for recurring events. If you run one conference a year, a general ticketing tool will fit you better.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. $200 covers a full year. If you cancel mid-year, you keep access until the term ends and can export everything before it expires.",
  },
];

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border-b border-rule"
        >
          <AccordionTrigger className="py-6 min-h-11 text-left font-display text-2xl md:text-3xl hover:no-underline data-[state=open]:text-accent-ink">
            <span className="flex items-baseline gap-5">
              <span className="num text-xs text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.q}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-7 pl-12 pr-8 text-base leading-relaxed text-ink-muted">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
