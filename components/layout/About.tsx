import Image from "next/image";

import Container from "@/components/layout/Container";



export default function About() {

return (

<section className="relative overflow-hidden bg-white py-6 md:py-6">

<Image

src="/patterns/Pattern wo Background.svg"

alt=""

fill

className="pointer-events-none object-cover opacity-[0.035]"

/>



<Container className="relative">

<div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

<div className="mx-auto max-w-[600px] text-center lg:mx-0 lg:text-left">

<p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">

About Whaleora

</p>



{/* Lora Applied via font-heading */}

<h2 className="mt-5 font-heading text-4xl leading-[1.1] tracking-tight text-[#0F2643] md:text-5xl lg:text-6xl">

Safety shouldn&apos;t feel scary.

</h2>



<div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-[#5F6F77]">

<p>

Whaleora exists to make personal safety simple, reliable and

beautifully designed. We believe preparedness should become part

of everyday life—not something people think about only after an

emergency.

</p>



<p>

Through thoughtfully crafted products, awareness programmes and

institutional partnerships, we are building an ecosystem where

safety feels calm, accessible and empowering.

</p>

</div>

</div>



<div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[520px]">

<div className="absolute h-72 w-72 rounded-full bg-[#DA6D40]/10 blur-[100px] md:h-96 md:w-96" />

<Image

src="/images/Spray MockUP.png"

alt="Whaleora safety products"

width={560}

height={560}

className="relative h-auto max-h-[500px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(15,38,67,0.12)]"

/>

</div>

</div>

</Container>

</section>

);

} 

