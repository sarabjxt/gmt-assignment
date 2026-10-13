const column1Items = [
  "Dissociation",
  "Trauma",
  "Family conflict",
  "Special needs parenting",
  "Depression",
  "Marriage",
];

const column2Items = [
  "Anxiety",
  "Relationships",
  "Children",
  "Teens",
  "Intimacy & connection",
  "…and more.",
];

export function ExpertiseSection() {
  return (
    <section
      aria-label="Our Areas of Expertise"
      className="relative w-full bg-background overflow-x-clip py-[6vmax] md:py-[9vmax]"
    >
      <div className="expertise-fluid-grid w-full">
        {/* Section Heading */}
        <div className="expertise-block-heading flex items-start mb-8 md:mb-0">
          <h3 className="font-heading font-light text-foreground text-h3 leading-[1.15]">
            Our areas of{" "}
            <span className="block font-script text-dark-accent font-normal not-italic text-[1.15em] leading-[0.9] pt-1">
              expertise
            </span>
          </h3>
        </div>

        {/* Column 1 */}
        <div className="col-start-2 col-end-10 md:col-start-10 md:col-end-17 row-start-2 md:row-start-1 flex flex-col justify-start">
          {column1Items.map((item, idx) => (
            <div
              key={item}
              className={`py-[1.15rem] flex items-center ${
                idx < column1Items.length - 1
                  ? "border-b border-foreground/10"
                  : "border-b border-foreground/10 md:border-b-0"
              }`}
            >
              <p className="font-sans font-normal uppercase tracking-[0.14em] text-[0.85rem] md:text-[0.94rem] leading-[1.8em] text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="col-start-2 col-end-10 md:col-start-18 md:col-end-25 row-start-3 md:row-start-1 flex flex-col justify-start">
          {column2Items.map((item, idx) => (
            <div
              key={item}
              className={`py-[1.15rem] flex items-center ${
                idx < column2Items.length - 1
                  ? "border-b border-foreground/10"
                  : ""
              }`}
            >
              <p className="font-sans font-normal uppercase tracking-[0.14em] text-[0.85rem] md:text-[0.94rem] leading-[1.8em] text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
