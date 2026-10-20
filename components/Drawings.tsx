export function FactoryDrawing() {
  return (
    <svg
      className="drawing drawing--factory"
      viewBox="0 0 900 640"
      role="img"
      aria-labelledby="factory-title factory-desc"
    >
      <title id="factory-title">Ilustrasi lantai produksi pabrik kosmetik</title>
      <desc id="factory-desc">
        Tiga tangki pencampuran, jalur pengisian botol, konveyor, meja kendali mutu, dan tumpukan
        kardus di dalam sebuah pabrik.
      </desc>

      <rect x="0" y="520" width="900" height="120" className="draw-pale" />
      <rect x="0" y="520" width="900" height="12" className="draw-ink" />
      <rect x="34" y="48" width="18" height="484" className="draw-ink" />
      <rect x="848" y="48" width="18" height="484" className="draw-ink" />
      <rect x="34" y="48" width="832" height="18" className="draw-ink" />

      <rect x="74" y="84" width="250" height="116" className="draw-mid" />
      <rect x="74" y="84" width="250" height="10" className="draw-ink" />
      <rect x="154" y="84" width="10" height="116" className="draw-pale" />
      <rect x="234" y="84" width="10" height="116" className="draw-pale" />
      <rect x="74" y="128" width="250" height="10" className="draw-pale" />

      <g className="draw-tanks">
        <rect x="82" y="252" width="72" height="150" rx="16" className="draw-mid" />
        <ellipse cx="118" cy="252" rx="36" ry="13" className="draw-ink" />
        <rect x="94" y="222" width="48" height="34" className="draw-ink" />
        <rect x="106" y="206" width="24" height="20" className="draw-accent" />
        <circle cx="118" cy="330" r="18" className="draw-pale" />
        <path d="M118 330 L118 316 M118 330 L129 337" className="draw-stroke" />
        <rect x="110" y="402" width="16" height="118" className="draw-ink" />

        <rect x="174" y="252" width="72" height="150" rx="16" className="draw-mid" />
        <ellipse cx="210" cy="252" rx="36" ry="13" className="draw-ink" />
        <rect x="186" y="222" width="48" height="34" className="draw-ink" />
        <rect x="198" y="206" width="24" height="20" className="draw-accent" />
        <circle cx="210" cy="330" r="18" className="draw-pale" />
        <path d="M210 330 L210 316 M210 330 L221 337" className="draw-stroke" />
        <rect x="202" y="402" width="16" height="118" className="draw-ink" />

        <rect x="266" y="252" width="72" height="150" rx="16" className="draw-mid" />
        <ellipse cx="302" cy="252" rx="36" ry="13" className="draw-ink" />
        <rect x="278" y="222" width="48" height="34" className="draw-ink" />
        <rect x="290" y="206" width="24" height="20" className="draw-accent" />
        <circle cx="302" cy="330" r="18" className="draw-pale" />
        <path d="M302 330 L302 316 M302 330 L313 337" className="draw-stroke" />
        <rect x="294" y="402" width="16" height="118" className="draw-ink" />
      </g>

      <path d="M154 206 L154 180 L330 180 L330 312" className="draw-pipe" />
      <path d="M246 206 L246 180" className="draw-pipe" />
      <path d="M338 206 L338 180" className="draw-pipe" />

      <g className="draw-filler">
        <rect x="330" y="300" width="118" height="70" className="draw-ink" />
        <rect x="348" y="318" width="82" height="34" className="draw-pale" />
        <rect x="382" y="370" width="14" height="52" className="draw-ink" />
        <rect x="372" y="420" width="34" height="14" className="draw-accent" />
      </g>

      <g className="draw-conveyor">
        <rect x="264" y="446" width="470" height="20" className="draw-ink" />
        <rect x="264" y="466" width="470" height="10" className="draw-mid" />
        <rect x="292" y="476" width="14" height="44" className="draw-ink" />
        <rect x="690" y="476" width="14" height="44" className="draw-ink" />
        {[300, 370, 440, 510, 580, 650].map((x) => (
          <g key={x}>
            <rect x={x} y="410" width="34" height="36" rx="7" className="draw-accent" />
            <rect x={x + 8} y="398" width="18" height="14" className="draw-ink" />
            <rect x={x + 6} y="424" width="22" height="8" className="draw-pale" />
          </g>
        ))}
      </g>

      <g className="draw-qc">
        <rect x="606" y="382" width="118" height="10" className="draw-ink" />
        <rect x="614" y="392" width="10" height="128" className="draw-ink" />
        <rect x="706" y="392" width="10" height="128" className="draw-ink" />
        <rect x="630" y="318" width="72" height="52" className="draw-ink" />
        <rect x="638" y="326" width="56" height="36" className="draw-accent" />
        <path d="M646 352 L658 338 L668 346 L680 330 L686 334" className="draw-stroke-pale" />
        <rect x="754" y="402" width="64" height="118" className="draw-mid" />
        <rect x="768" y="418" width="36" height="10" className="draw-pale" />
        <rect x="768" y="440" width="36" height="10" className="draw-pale" />
        <rect x="768" y="462" width="36" height="10" className="draw-pale" />
      </g>

      <g className="draw-worker">
        <circle cx="562" cy="306" r="25" className="draw-ink" />
        <path d="M534 350 Q562 324 590 350 L596 436 L528 436 Z" className="draw-mid" />
        <rect x="528" y="436" width="28" height="84" className="draw-ink" />
        <rect x="568" y="436" width="28" height="84" className="draw-ink" />
        <path d="M590 358 L626 392" className="draw-arm" />
        <circle cx="628" cy="396" r="11" className="draw-accent" />
        <path d="M534 358 L506 392" className="draw-arm" />
        <rect x="548" y="338" width="28" height="8" className="draw-pale" />
      </g>

      <g className="draw-boxes">
        <rect x="754" y="448" width="76" height="72" className="draw-pale" />
        <rect x="762" y="456" width="60" height="8" className="draw-mid" />
        <rect x="762" y="476" width="44" height="8" className="draw-mid" />
        <rect x="826" y="476" width="44" height="44" className="draw-mid" />
        <rect x="826" y="432" width="44" height="44" className="draw-pale" />
      </g>

      <g className="draw-vent">
        <rect x="500" y="92" width="126" height="16" className="draw-ink" />
        <rect x="510" y="108" width="106" height="10" className="draw-mid" />
        <path d="M532 108 L532 84 L576 84 L576 108" className="draw-pipe" />
      </g>

      <path d="M72 552 L828 552" className="draw-floor-mark" />
      <path d="M72 572 L210 572" className="draw-floor-mark" />
      <path d="M244 572 L382 572" className="draw-floor-mark" />
      <path d="M416 572 L554 572" className="draw-floor-mark" />
      <path d="M588 572 L726 572" className="draw-floor-mark" />
      <path d="M760 572 L828 572" className="draw-floor-mark" />
    </svg>
  );
}

export function WorkshopDrawing() {
  return (
    <svg
      className="drawing drawing--workshop"
      viewBox="0 0 900 640"
      role="img"
      aria-labelledby="workshop-title workshop-desc"
    >
      <title id="workshop-title">Ilustrasi ruang pelatihan industri</title>
      <desc id="workshop-desc">
        Ruang praktik dengan papan diagram, dinding peralatan, meja kerja, lengan robot, dan
        seorang peserta yang sedang belajar.
      </desc>

      <rect x="0" y="520" width="900" height="120" className="draw-pale" />
      <rect x="0" y="520" width="900" height="12" className="draw-ink" />

      <rect x="52" y="62" width="360" height="224" className="draw-mid" />
      <rect x="52" y="62" width="360" height="12" className="draw-ink" />
      <rect x="68" y="90" width="86" height="54" className="draw-pale" />
      <rect x="182" y="90" width="86" height="54" className="draw-pale" />
      <rect x="296" y="90" width="86" height="54" className="draw-pale" />
      <path d="M154 117 L182 117" className="draw-arrow" />
      <path d="M268 117 L296 117" className="draw-arrow" />
      <path d="M111 144 L111 174 L225 174 L225 198" className="draw-arrow" />
      <path d="M339 144 L339 174 L225 174" className="draw-arrow" />
      <rect x="176" y="198" width="98" height="38" className="draw-accent" />
      <rect x="80" y="232" width="210" height="10" className="draw-pale" />
      <rect x="80" y="252" width="150" height="10" className="draw-pale" />

      <g className="draw-tools">
        <rect x="448" y="78" width="404" height="164" className="draw-pale" />
        <rect x="448" y="78" width="404" height="12" className="draw-ink" />
        <rect x="484" y="116" width="18" height="86" className="draw-ink" />
        <rect x="470" y="108" width="46" height="18" className="draw-ink" />
        <path d="M552 112 L590 112 L590 126 L566 126 L566 196 L548 196 L548 126 L552 112 Z" className="draw-ink" />
        <rect x="632" y="112" width="18" height="90" className="draw-mid" />
        <rect x="616" y="104" width="50" height="20" className="draw-mid" />
        <circle cx="641" cy="200" r="14" className="draw-mid" />
        <path d="M706 112 L742 112 L742 132 L724 132 L724 196 L706 196 Z" className="draw-ink" />
        <rect x="784" y="112" width="26" height="86" className="draw-mid" />
        <rect x="770" y="104" width="54" height="16" className="draw-ink" />
      </g>

      <g className="draw-bench">
        <rect x="74" y="362" width="486" height="24" className="draw-ink" />
        <rect x="94" y="386" width="16" height="142" className="draw-ink" />
        <rect x="522" y="386" width="16" height="142" className="draw-ink" />
        <rect x="136" y="330" width="60" height="18" className="draw-mid" />
        <rect x="154" y="316" width="24" height="16" className="draw-mid" />
        <rect x="230" y="330" width="96" height="32" className="draw-mid" />
        <rect x="244" y="314" width="28" height="16" className="draw-ink" />
        <rect x="284" y="314" width="28" height="16" className="draw-ink" />
        <circle cx="352" cy="344" r="18" className="draw-accent" />
        <rect x="338" y="326" width="28" height="8" className="draw-ink" />
        <rect x="410" y="322" width="86" height="40" className="draw-pale" />
        <rect x="418" y="330" width="28" height="24" className="draw-ink" />
        <rect x="452" y="330" width="34" height="8" className="draw-mid" />
        <rect x="452" y="344" width="24" height="8" className="draw-mid" />
        <rect x="110" y="400" width="70" height="82" className="draw-mid" />
        <rect x="118" y="412" width="54" height="10" className="draw-pale" />
        <rect x="118" y="432" width="54" height="10" className="draw-pale" />
      </g>

      <g className="draw-robot">
        <rect x="622" y="468" width="188" height="30" className="draw-ink" />
        <rect x="684" y="430" width="64" height="38" className="draw-mid" />
        <path d="M716 430 L716 348 L782 348" className="draw-arm-strong" />
        <circle cx="716" cy="430" r="18" className="draw-accent" />
        <circle cx="716" cy="348" r="18" className="draw-accent" />
        <path d="M782 348 L814 314" className="draw-arm-strong" />
        <rect x="806" y="292" width="30" height="22" className="draw-ink" />
        <path d="M806 300 L794 300 M806 310 L794 310" className="draw-arm-strong" />
        <rect x="790" y="290" width="12" height="32" className="draw-accent" />
      </g>

      <g className="draw-learner">
        <circle cx="400" cy="268" r="22" className="draw-ink" />
        <path d="M376 306 Q400 288 424 306 L430 390 L370 390 Z" className="draw-mid" />
        <path d="M428 316 L466 350" className="draw-arm" />
        <circle cx="470" cy="354" r="9" className="draw-accent" />
        <path d="M378 390 L368 498" className="draw-leg" />
        <path d="M422 390 L432 498" className="draw-leg" />
        <rect x="386" y="300" width="28" height="8" className="draw-accent" />
      </g>

      <g className="draw-board-person">
        <circle cx="88" cy="318" r="16" className="draw-ink" />
        <path d="M70 344 Q88 332 106 344 L112 430 L64 430 Z" className="draw-mid" />
        <path d="M106 354 L132 330" className="draw-arm" />
        <path d="M70 430 L62 498 M106 430 L114 498" className="draw-leg" />
      </g>

      <g className="draw-safety">
        <path d="M556 410 Q574 392 592 410 L592 430 L556 430 Z" className="draw-accent" />
        <rect x="550" y="430" width="48" height="8" className="draw-ink" />
        <rect x="806" y="88" width="22" height="72" className="draw-accent" />
        <rect x="812" y="76" width="10" height="12" className="draw-ink" />
      </g>

      <path d="M48 552 L852 552" className="draw-floor-mark" />
      <path d="M48 572 L186 572" className="draw-floor-mark" />
      <path d="M220 572 L358 572" className="draw-floor-mark" />
      <path d="M392 572 L530 572" className="draw-floor-mark" />
      <path d="M564 572 L702 572" className="draw-floor-mark" />
      <path d="M736 572 L852 572" className="draw-floor-mark" />
    </svg>
  );
}
