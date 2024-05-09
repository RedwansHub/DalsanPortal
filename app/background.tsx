'use client'

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import BubleParticle from './constant/BubleParticle.json'
export const Background: React.FC = () => {
    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async (container: any) => {
        console.log(container);
    }, []);
    

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: 'transparent'
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onDiv: {
                          selectors: [],
                          enable: false,
                          mode: [],
                          type: "circle"
                        },
                        onHover: {
                          enable: true,
                          mode: "grab",
                          parallax: {
                            enable: true,
                            force: 60,
                            smooth: 10
                          }
                        },
                        resize: true,
                    },
                    modes: {
                        trail: {
                            delay: 1,
                            pauseOnStop: false,
                            quantity: 1,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                            easing: 'ease-out-quad',
                            factor: 100,
                            maxSpeed: 10,
                            speed: 1,
                            div: {
                                distance: 200,
                                duration: 0.4,
                                factor: 140,
                                speed: 1,
                                maxSpeed: 50,
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area:500,
                        },
                        value: 10,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 50 },
                    },
                },
                detectRetina: true,
            }}
            
        />
    );
};
