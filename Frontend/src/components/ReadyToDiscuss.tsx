import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const GRID_SIZE = 40;
const FILLED_BOX_COUNT = 8;

const ReadyToDiscuss: React.FC = () => {
    const filledBoxes = useMemo(() => {
        const boxes = [];
        for (let i = 0; i < FILLED_BOX_COUNT; i++) {
            const topCell = Math.floor(Math.random() * 6);
            const leftCell = Math.floor(Math.random() * 14);
            boxes.push({ topCell, leftCell });
        }
        return boxes;
    }, []);
    const navigate = useNavigate();

    return (
        <section className="w-full flex justify-center items-center bg-black py-16 px-4">
            <div
                className="relative w-full max-w-4xl rounded-[2rem] overflow-hidden p-12 text-center border border-[#1c1c1c]"
                style={{
                    boxShadow:
                        "0px 15px 35px rgba(0,0,0,0.85), 8px 8px 25px rgba(0,0,0,0.6)",
                }}
            >
                {/* Background Grid with Mask */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(80,80,80,0.35) 0.5px, transparent 0.5px),
              linear-gradient(to bottom, rgba(80,80,80,0.35) 0.5px, transparent 0.5px)
            `,
                        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
                        maskImage:
                            "radial-gradient(circle at center, black 60%, transparent 100%)",
                        WebkitMaskImage:
                            "radial-gradient(circle at center, black 60%, transparent 100%)",
                    }}
                ></div>

                {/* Filled boxes (light shaded) */}
                {filledBoxes.map((box, index) => (
                    <div
                        key={index}
                        className="absolute bg-[rgba(255,255,255,0.07)]"
                        style={{
                            top: `${box.topCell * GRID_SIZE}px`,
                            left: `${box.leftCell * GRID_SIZE}px`,
                            width: `${GRID_SIZE}px`,
                            height: `${GRID_SIZE}px`,
                        }}
                    ></div>
                ))}

                {/* Center blue spotlight */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.25)_0%,transparent_70%)]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                        READY TO DISCUSS
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg mb-6">
                        Your Product Needs With{" "}
                        <span className="text-blue-500 font-semibold">
                            Arinya Origin Technology Solutions
                        </span>{" "}
                        Experts?
                    </p>

                    <button onClick={() => navigate("/contact")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReadyToDiscuss;
