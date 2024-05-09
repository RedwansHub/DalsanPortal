export const ConnectedWeb = 
{
    background: {
        color: {
            value: "#ECC30B",
        },
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
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
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
}


export const BubbleWeb = 
{
    background: {
        color: {
            value: "#ECC30B",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onDiv: {
                selectors: [] as string[],
                enable: false,
                mode: [] as string[],
                type: "circle" as const,
            },
            onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                },
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
                easing: "ease-out-quad" as const,
                factor: 100,
                maxSpeed: 10,
                speed: 1,
                div: {
                    distance: 200,
                    duration: 0.4,
                    factor: 140,
                    speed: 1,
                    maxSpeed: 50,
                },
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
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.1,
        },
        shape: {
            type: "circle" as const,
        },
        size: {
            value: { min: 1, max: 50 },
        },
    },
    detectRetina: true,
}
