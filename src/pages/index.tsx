import * as React from 'react';
import logoPng from '../images/logo.png';
import heroBg from '../images/bg.webp';
import theInvisibleBg from '../images/theInvisible.webp';
import blocoLogo from '../images/bloco.png';
import sennoLogo from '../images/senno.png';
import beLogo from '../images/be.png';
import fruitstepsLogo from '../images/fruitsteps.png';
import letsTalkBg from '../images/letsTalk.jpg';

function HeroSection() {
    return (
        <div className="relative h-1/2">
            <img src={heroBg} alt="Hero" className="absolute top-0 w-screen" />

            <div className="container mx-auto relative text-white">
                <img src={logoPng} alt="Logo" className="z-10" />

                <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-64 z-10">
                        <h2 className="font-bold text-4xl mb-4">/ WE BUILD THE FOUNDATION</h2>
                        <p>
                            You don&#39;t see us – and you shouldn&#39;t have to. Across, beneath and above, we build
                            the gears that move mountains at every click.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TheInvisibleSection() {
    return (
        <div className="relative h-1/2">
            <img src={theInvisibleBg} alt="Invisible" className="absolute top-0 w-screen" />

            <div className="flex place-content-center align-middle px-4 pt-20">
                <div className="w-1/2 z-10">
                    <h2 className="text-green font-bold text-4xl mb-4">/ THE INVISIBLE</h2>
                    <p className="text-xl">
                        OpenFlowLabs is a software engineering company who creates the invisible technology that makes
                        every action and data entry possible. Solutions for the most imperceptible interactions and the
                        structure to support tech revolutions.
                    </p>
                </div>
            </div>
        </div>
    );
}

function HowSection() {
    return (
        <div className="flex place-content-center align-middle p-4">
            <div className="w-2/3">
                <div className="flex place-content-center align-middle gap-x-4">
                    <p>
                        DESIGN, PLANNING AND EXECUTION OF SOFTWARE DEVELOPMENT WORK APPLYING THE LATEST KNOWLEDGE TO
                        SECURE THE APPLICATIONS ORGANISING PROCESSES AND WORKFLOWS IN AND AROUND THE DEVELOPMENT WORK
                        COLLABORATING WITH STAKEHOLDERS DURING AND AFTER THE CREATIVE PROCESS
                    </p>

                    <h2 className="text-green font-bold text-4xl">/HOW</h2>
                </div>

                <div className="grid gap-14 grid-cols-2 mt-16">
                    <div>
                        <h4 className="font-bold text-2xl mb-4">/Think</h4>
                        Together, we help to transform ideas into real products and services. With our partners,
                        throughout the world, we design the technology of products, apps and services that make real
                        change in the world.
                    </div>

                    <div>
                        <h4 className="font-bold text-2xl mb-4">/Engineer</h4>
                        We design, plan, develop code, manage the project and collaborations and find the perfect tools
                        to build the technology needed for the project. In more simple words, we take care of it.
                    </div>

                    <div>
                        <h4 className="font-bold text-2xl mb-4">/Hire</h4>
                        We understand the crucial importance of building the right team. We find and harvest the ideal
                        knowledge to build long and fruitful relationships.
                    </div>

                    <div>
                        <h4 className="font-bold text-2xl mb-4">/Consult</h4>
                        We can show you some light at the end of the tunnel – we fix bugs, find tools, hire people,
                        build technologies and create processes. All of that we can introduce to you while working with
                        you on the project. In short consulting.
                    </div>
                </div>
            </div>
        </div>
    );
}

function PattersSection() {
    return (
        <div className="flex place-content-center align-middle p-4 mt-10">
            <div className="w-2/3">
                <h2 className="text-green font-bold text-4xl mb-4">/Partners</h2>
                <div className="flex gap-x-3 place-content-center align-middle">
                    <a href="https://www.blocolab.com/english" target="_blank" rel="noreferrer">
                        <img src={blocoLogo} alt="Bloco Logo" className="h-12" />
                    </a>
                    <a href="https://www.fruitsteps.com/" target="_blank" rel="noreferrer">
                        <img src={sennoLogo} alt="Senno Logo" className="h-12" />
                    </a>
                    <a href="https://www.blocolab.com/be-eng" target="_blank" rel="noreferrer">
                        <img src={beLogo} alt="Be Logo" className="h-12" />
                    </a>
                    <a href="https://senno.ai/" target="_blank" rel="noreferrer">
                        <img src={fruitstepsLogo} alt="Fruitsteps Logo" className="h-12" />
                    </a>
                </div>
            </div>
        </div>
    );
}

function LetsTalkSection() {
    return (
        <div className="flex place-content-center align-middle p-4 mt-24 relative">
            <img src={letsTalkBg} alt="Lets talk BG" className="absolute" />
            <div className="w-2/3 z-10">
                <div className="flex place-content-between gap-x-3">
                    <div>
                        <h4 className="text-green text-xl mb-2 font-bold">LET&#39;S TALK</h4>
                        <h5 className="text-xl"> WEHAVE A LOT TO SHARE.</h5>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <a className="font-bold" href="mailto:contact@openflowlabs.com">
                            contact@openflowlabs.com
                        </a>
                        <div>
                            Wylerringstrasse 36 <br /> CH-3014 Bern, Switzerland
                        </div>
                        <div>
                            Mourato Coelho, 217 <br />
                            São Paulo-SP, Brazil
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const IndexPage: React.FC = () => {
    return (
        <div className="">
            <div className="h-screen">
                <HeroSection />
                <TheInvisibleSection />
                <HowSection />
                <PattersSection />
                <LetsTalkSection />
            </div>
        </div>
    );
};

export default IndexPage;
