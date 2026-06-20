export default function HelpCenter({ faqData, activeFaq, setActiveFaq }) {
  const handleToggle = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section
      id="sss"
      className="w-full max-w-4xl py-16 border-t border-white/[0.06]"
    >
      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-widest text-cyan uppercase">
          Merkez
        </span>

        <h2 className="font-display text-2xl font-bold text-white mt-1">
          Sıkça Sorulan Sorular
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-white/[0.06] bg-[#0b0b0f] rounded-lg overflow-hidden"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left p-4 font-medium text-sm text-white flex justify-between items-center cursor-pointer"
            >
              <span>{faq.question}</span>
              <span className="text-cyan text-xs">
                {activeFaq === index ? "▲" : "▼"}
              </span>
            </button>

            {activeFaq === index && (
              <div className="bg-white/[0.01] border-t border-white/[0.04]">
                <p className="p-4 text-xs text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}