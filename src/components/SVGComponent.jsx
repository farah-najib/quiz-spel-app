
const SVGComponent = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
        <style type="text/css">
            {
                '\n  #Pulse{fill: none; stroke: #D38911; stroke-width: 5; transform: rotateX(80deg);}\n  #side{fill:#875382;}\n  #front{fill:#CE85CA;}\n  #light{fill:#EBCBEA;}\n  .particles{fill:none;stroke:#DD913E;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:12,200; opacity:.7;}\n  .Particles_active .particles{ animation: sparks .7s; }\n  #light-mask rect{ animation: highlight 4s infinite; }\n\n  ._transformer{transform-box: fill-box; transform-origin: center;}\n\n  @keyframes highlight {\n    0% { transform: translate(-100px,0) rotate(-50deg); }\n    30%  { transform: translate(100px,0) rotate(-50deg); }\n    100%  { transform: translate(100px,0) rotate(-50deg); }\n  }\n  @keyframes idle {\n    0% { transform: translate(0,-5px); }\n    100%  { transform: translate(0,5px); }\n  }\n  @keyframes sparks {\n    0% { stroke-dasharray: 20,200; stroke-width: 5px; }\n    100%  { stroke-dasharray: 4,200; stroke-width: 0px; stroke-dashoffset: -180; }\n  }\n'
            }
        </style>
        <linearGradient id="light-gradient">
            <stop offset="0%" stopColor="#FFFF6CF3" />
            <stop offset="10%" stopColor="#FFF" />
            <stop offset="90%" stopColor="#FFF" />
            <stop offset="100%" stopColor="#FFFF6CF3" />
        </linearGradient>
        <mask id="light-mask">
            <rect
                y={0}
                x={90}
                className="_transformer"
                width={20}
                height={220}
                fill="url(#light-gradient)"
            />
        </mask>
        <defs>
            <path id="question">
                <animate
                    attributeName="d"
                    calMode="spline"
                    values="M 111.3 125.8 C 111.1 126.7 110.7 127.5 110.1 128.2 C 109.5 128.9 108.7 129.2 107.7 129.2 L 86.5 129.2 C 85.6 129.2 84.8 128.9 84.1 128.2 C 83.5 127.6 83.1 126.8 83.1 125.8 C 83.2 122.6 83.7 119.7 84.6 117.2 C 85.5 114.7 86.8 112.5 88.4 110.5 C 90 108.5 92 106.7 94.4 105.1 C 96.8 103.5 99.6 102 102.9 100.7 C 105.9 99.4 107.9 98.2 109 97.1 C 110.1 96 110.7 94.4 110.7 92.2 C 110.7 92 110.7 91.6 110.6 90.9 C 110.6 90.2 110.3 89.5 109.7 88.7 C 109.1 88 108.2 87.3 106.9 86.7 C 105.6 86.1 103.6 85.8 101 85.8 C 98 85.8 95.6 86.1 93.7 86.8 C 91.8 87.5 90.2 88.4 89 89.5 C 87.8 90.6 86.8 91.9 86.1 93.3 C 85.4 94.7 84.8 96.2 84.2 97.5 C 83.8 98.3 83.2 99 82.4 99.4 C 81.6 99.8 80.7 99.9 79.8 99.6 L 64.1 94.5 C 63.3 94.1 62.6 93.6 62.2 92.8 C 61.7 92 61.6 91.2 61.9 90.2 C 62.5 87.7 63.5 84.7 64.8 81.3 C 66.1 77.9 68.2 74.6 71.1 71.4 C 74 68.2 77.8 65.5 82.6 63.3 C 87.4 61.1 93.7 60 101.4 60 C 105.3 60 108.7 60.3 111.8 61 C 114.8 61.6 117.5 62.5 119.9 63.6 C 122.3 64.7 124.3 65.8 125.9 67.1 C 127.6 68.4 129 69.7 130.1 70.9 C 132.7 73.8 134.7 76.8 136.1 79.9 C 137.5 83 138.3 86.5 138.3 90.3 C 138.3 95.2 137.7 99.2 136.5 102.1 C 135.3 105.1 133.8 107.5 132 109.3 C 130.2 111.1 128.2 112.5 126 113.6 C 123.8 114.7 121.7 115.7 119.7 116.7 C 117.7 117.7 115.9 118.9 114.4 120.3 C 112.7 121.5 111.7 123.4 111.3 125.8 Z M 83.3 160.7 L 83.3 141.5 C 83.3 140.6 83.6 139.8 84.3 139.1 C 84.9 138.5 85.7 138.1 86.7 138.1 L 107.6 138.1 C 108.6 138.1 109.4 138.4 110 139.1 C 110.6 139.7 110.9 140.5 110.9 141.5 L 110.9 160.7 C 110.9 161.6 110.6 162.4 110 163.1 C 109.4 163.8 108.6 164.1 107.6 164.1 L 86.7 164.1 C 85.8 164.1 85 163.8 84.3 163.1 C 83.6 162.4 83.3 161.7 83.3 160.7 Z;           M 110.8 125.8 C 110.6 126.7 110.2 127.5 109.7 128.2 C 109.1 128.9 108.3 129.2 107.4 129.2 L 87.1 129.2 C 86.2 129.2 85.5 128.9 84.8 128.2 C 84.2 127.6 83.9 126.8 83.9 125.8 C 84 122.6 84.5 119.7 85.4 117.2 C 86.3 114.7 87.5 112.5 89.1 110.5 C 90.7 108.5 92.6 106.7 94.9 105.1 C 97.2 103.5 99.9 102 103 100.7 C 105.8 99.4 107.8 98.2 108.9 97.1 C 110 96 110.5 94.4 110.5 92.2 C 110.5 92 110.5 91.6 110.4 90.9 C 110.4 90.2 110.1 89.5 109.5 88.7 C 109 88 108.1 87.3 106.8 86.7 C 105.5 86.1 103.6 85.8 101.1 85.8 C 98.3 85.8 95.9 86.1 94.1 86.8 C 92.3 87.5 90.8 88.4 89.6 89.5 C 88.4 90.6 87.5 91.9 86.8 93.3 C 86.1 94.7 85.5 96.2 85 97.5 C 84.6 98.3 84.1 99 83.3 99.4 C 82.5 99.8 81.7 99.9 80.8 99.6 L 65.8 94.5 C 65 94.1 64.4 93.6 63.9 92.8 C 63.5 92 63.4 91.2 63.6 90.2 C 64.2 87.7 65.2 84.7 66.4 81.3 C 67.6 77.9 69.6 74.6 72.4 71.4 C 75.1 68.2 78.8 65.5 83.4 63.3 C 88 61.1 94 60 101.4 60 C 105.1 60 108.4 60.3 111.3 61 C 114.2 61.6 116.8 62.5 119 63.6 C 121.3 64.7 123.2 65.8 124.8 67.1 C 126.4 68.4 127.7 69.7 128.8 70.9 C 131.3 73.8 133.2 76.8 134.6 79.9 C 136 83 136.7 86.5 136.7 90.3 C 136.7 95.2 136.1 99.2 135 102.1 C 133.8 105.1 132.4 107.5 130.7 109.3 C 129 111.1 127 112.5 124.9 113.6 C 122.8 114.7 120.8 115.7 118.8 116.7 C 116.9 117.7 115.2 118.9 113.7 120.3 C 112.2 121.5 111.2 123.4 110.8 125.8 Z M 84 160.7 L 84 141.5 C 84 140.6 84.3 139.8 84.9 139.1 C 85.5 138.5 86.3 138.1 87.2 138.1 L 107.2 138.1 C 108.2 138.1 109 138.4 109.5 139.1 C 110.1 139.7 110.4 140.5 110.4 141.5 L 110.4 160.7 C 110.4 161.6 110.1 162.4 109.5 163.1 C 108.9 163.8 108.1 164.1 107.2 164.1 L 87.2 164.1 C 86.3 164.1 85.6 163.8 84.9 163.1 C 84.4 162.4 84 161.7 84 160.7 Z;           M 111.3 125.8 C 111.1 126.7 110.7 127.5 110.1 128.2 C 109.5 128.9 108.7 129.2 107.7 129.2 L 86.5 129.2 C 85.6 129.2 84.8 128.9 84.1 128.2 C 83.5 127.6 83.1 126.8 83.1 125.8 C 83.2 122.6 83.7 119.7 84.6 117.2 C 85.5 114.7 86.8 112.5 88.4 110.5 C 90 108.5 92 106.7 94.4 105.1 C 96.8 103.5 99.6 102 102.9 100.7 C 105.9 99.4 107.9 98.2 109 97.1 C 110.1 96 110.7 94.4 110.7 92.2 C 110.7 92 110.7 91.6 110.6 90.9 C 110.6 90.2 110.3 89.5 109.7 88.7 C 109.1 88 108.2 87.3 106.9 86.7 C 105.6 86.1 103.6 85.8 101 85.8 C 98 85.8 95.6 86.1 93.7 86.8 C 91.8 87.5 90.2 88.4 89 89.5 C 87.8 90.6 86.8 91.9 86.1 93.3 C 85.4 94.7 84.8 96.2 84.2 97.5 C 83.8 98.3 83.2 99 82.4 99.4 C 81.6 99.8 80.7 99.9 79.8 99.6 L 64.1 94.5 C 63.3 94.1 62.6 93.6 62.2 92.8 C 61.7 92 61.6 91.2 61.9 90.2 C 62.5 87.7 63.5 84.7 64.8 81.3 C 66.1 77.9 68.2 74.6 71.1 71.4 C 74 68.2 77.8 65.5 82.6 63.3 C 87.4 61.1 93.7 60 101.4 60 C 105.3 60 108.7 60.3 111.8 61 C 114.8 61.6 117.5 62.5 119.9 63.6 C 122.3 64.7 124.3 65.8 125.9 67.1 C 127.6 68.4 129 69.7 130.1 70.9 C 132.7 73.8 134.7 76.8 136.1 79.9 C 137.5 83 138.3 86.5 138.3 90.3 C 138.3 95.2 137.7 99.2 136.5 102.1 C 135.3 105.1 133.8 107.5 132 109.3 C 130.2 111.1 128.2 112.5 126 113.6 C 123.8 114.7 121.7 115.7 119.7 116.7 C 117.7 117.7 115.9 118.9 114.4 120.3 C 112.7 121.5 111.7 123.4 111.3 125.8 Z M 83.3 160.7 L 83.3 141.5 C 83.3 140.6 83.6 139.8 84.3 139.1 C 84.9 138.5 85.7 138.1 86.7 138.1 L 107.6 138.1 C 108.6 138.1 109.4 138.4 110 139.1 C 110.6 139.7 110.9 140.5 110.9 141.5 L 110.9 160.7 C 110.9 161.6 110.6 162.4 110 163.1 C 109.4 163.8 108.6 164.1 107.6 164.1 L 86.7 164.1 C 85.8 164.1 85 163.8 84.3 163.1 C 83.6 162.4 83.3 161.7 83.3 160.7 Z"
                    dur="5s"
                    keySpline=".42,0,.58,1;.42,0,.58,1"
                    repeatCount="indefinite"
                />
            </path>
        </defs>
        <circle id="Pulse" className="_transformer" cx={100} cy={167} r={0}>
            <animate
                id="doPulse"
                attributeName="r"
                values="0;85;"
                dur=".8s"
                begin="jump.begin + .5s"
                restart="whenNotActive"
                calcMode="spline"
                keySplines="0,0,.58,1"
            />
            <animate
                attributeName="stroke-width"
                values="5;12;"
                dur=".8s"
                begin="doPulse.begin"
            />
            <animate
                attributeName="opacity"
                values="0.5;1;1;0"
                keyTimes="0;0.2;0.5;1"
                dur=".8s"
                begin="doPulse.begin"
            />
        </circle>
        <g id="Particles">
            <line className="particles" x1={80} y1={162.9} x2={42} y2={59.1} />
            <line
                className="particles"
                x1={90.1}
                y1={148.8}
                x2={59.8}
                y2={28.8}
            />
            <line
                className="particles"
                x1={107.9}
                y1={155.6}
                x2={124.9}
                y2={15.9}
            />
            <line
                className="particles"
                x1={94.4}
                y1={160.4}
                x2={154.3}
                y2={7.2}
            />
            <line
                className="particles"
                x1={119.3}
                y1={157}
                x2={159.2}
                y2={75.5}
            />
            <line className="particles" x1={98} y1={169} x2={87.7} y2={10.7} />
            <line
                className="particles"
                x1={80.4}
                y1={147.6}
                x2={63.2}
                y2={14.1}
            />
            <set
                attributeName="class"
                to="Particles_active"
                dur=".7s"
                begin="jump.begin + .5s"
            />
        </g>
        <g id="Sign" className="_transformer">
            <path id="side">
                <animate
                    attributeName="d"
                    calMode="spline"
                    values="M 105.4 60.9 C 109.3 60.9 112.7 61.2 115.8 61.9 C 118.8 62.5 121.5 63.4 123.9 64.5 C 126.3 65.6 128.3 66.7 129.9 68 C 131.6 69.3 133 70.6 134.1 71.8 C 136.7 74.7 138.7 77.7 140.1 80.8 C 141.5 83.9 142.3 87.4 142.3 91.2 C 142.3 96.1 141.7 100.1 140.5 103 C 139.3 106 137.8 108.4 136 110.2 C 134.2 112 132.2 113.4 130 114.5 C 127.8 115.6 125.7 116.6 123.7 117.6 C 121.7 118.6 119.9 119.8 118.4 121.2 C 116.9 122.6 115.9 124.5 115.4 126.9 C 115.2 127.8 114.8 128.6 114.2 129.3 C 113.6 130 112.8 130.3 111.8 130.3 L 90.5 130.3 C 89.6 130.3 87.1 130.5 84.1 128.3 L 113.1 98.2 L 111 87.7 C 109.7 87.1 107.7 86.8 105.1 86.8 C 102.1 86.8 99.7 87.1 97.8 87.8 C 95.9 88.5 94.3 89.4 93.1 90.5 C 91.9 91.6 90.9 92.9 90.2 94.3 C 89.5 95.7 88.9 97.2 88.3 98.5 C 87.9 99.3 87.3 100 86.5 100.4 C 85.7 100.8 81 99.9 80 99.7 L 105.4 60.9 Z M 107.5 138.2 C 108.5 138.2 113.3 139.5 113.9 140.2 C 114.5 140.8 114.8 141.6 114.8 142.6 L 114.8 161.8 C 114.8 162.7 114.5 163.5 113.9 164.2 C 113.3 164.9 112.5 165.2 111.5 165.2 L 90.7 165.2 C 89.8 165.2 85.7 164.7 84.3 163.2 L 107.5 138.2 Z;           M 105.4 60.9 C 109.3 60.9 112.7 61.2 115.8 61.9 C 118.8 62.5 122.8 64.1 125.2 65.2 C 127.6 66.3 129.6 67.4 131.2 68.7 C 132.9 70 134.3 71.3 135.4 72.5 C 138 75.4 139.4 78.2 140.9 81.4 C 142.3 84.5 143.1 88 143.1 91.8 C 143.1 96.7 142.5 100.7 141.3 103.6 C 140.1 106.6 139.2 109.1 137.3 110.9 C 135.4 112.7 133.5 114.1 131.3 115.2 C 129.1 116.3 127 117.3 125 118.3 C 123 119.3 121.2 120.5 119.7 121.9 C 118.2 123.3 117.2 125.2 116.7 127.6 C 116.5 128.5 116.1 129.3 115.5 130 C 114.9 130.7 114.1 131 113.1 131 L 91.8 131 C 90.9 131 86.7 130.3 84.5 127.9 L 113.2 98.2 L 111 87.7 C 109.7 87.1 108.3 86.4 105.7 86.8 C 102.8 87.2 101.6 87.8 99.7 88.5 C 97.8 89.2 96.2 90.1 95 91.2 C 93.8 92.3 92.8 93.6 92.1 95 C 91.4 96.4 90.8 97.9 90.2 99.2 C 89.8 100 89.2 100.7 88.4 101.1 C 87.6 101.5 80.9 99.6 80 99.3 L 105.4 60.9 Z M 107.5 138.2 C 108.5 138.2 114.7 140.2 115.3 140.9 C 115.9 141.5 116.2 142.3 116.2 143.3 L 116.2 162.5 C 116.2 163.4 115.9 164.2 115.3 164.9 C 114.7 165.6 113.9 165.9 112.9 165.9 L 92 165.9 C 91.1 165.9 86 164.7 84.6 162.7 L 107.5 138.2 Z;           M 105.4 60.9 C 109.3 60.9 112.7 61.2 115.8 61.9 C 118.8 62.5 121.5 63.4 123.9 64.5 C 126.3 65.6 128.3 66.7 129.9 68 C 131.6 69.3 133 70.6 134.1 71.8 C 136.7 74.7 138.7 77.7 140.1 80.8 C 141.5 83.9 142.3 87.4 142.3 91.2 C 142.3 96.1 141.7 100.1 140.5 103 C 139.3 106 137.8 108.4 136 110.2 C 134.2 112 132.2 113.4 130 114.5 C 127.8 115.6 125.7 116.6 123.7 117.6 C 121.7 118.6 119.9 119.8 118.4 121.2 C 116.9 122.6 115.9 124.5 115.4 126.9 C 115.2 127.8 114.8 128.6 114.2 129.3 C 113.6 130 112.8 130.3 111.8 130.3 L 90.5 130.3 C 89.6 130.3 87.1 130.5 84.1 128.3 L 113.1 98.2 L 111 87.7 C 109.7 87.1 107.7 86.8 105.1 86.8 C 102.1 86.8 99.7 87.1 97.8 87.8 C 95.9 88.5 94.3 89.4 93.1 90.5 C 91.9 91.6 90.9 92.9 90.2 94.3 C 89.5 95.7 88.9 97.2 88.3 98.5 C 87.9 99.3 87.3 100 86.5 100.4 C 85.7 100.8 81 99.9 80 99.7 L 105.4 60.9 Z M 107.5 138.2 C 108.5 138.2 113.3 139.5 113.9 140.2 C 114.5 140.8 114.8 141.6 114.8 142.6 L 114.8 161.8 C 114.8 162.7 114.5 163.5 113.9 164.2 C 113.3 164.9 112.5 165.2 111.5 165.2 L 90.7 165.2 C 89.8 165.2 85.7 164.7 84.3 163.2 L 107.5 138.2 Z;"
                    keySpline=".42,0,.58,1;.42,0,.58,1"
                    dur="5s"
                    repeatCount="indefinite"
                />
            </path>
            <use id="front" href="#question" />
            <use id="light" href="#question" mask="url(#light-mask)" />
            <animateTransform
                id="idle"
                attributeName="transform"
                type="translate"
                values="0,0;0,-5;0,0"
                dur="6s"
                begin="0s;jump.end"
                end="click"
                repeatCount="indefinite"
            />
            <animateTransform
                id="jump"
                attributeName="transform"
                type="translate"
                calMode="spline"
                values="0,0;0,7;0,-35;0,7;0,0"
                keyTimes="0;0.1;0.35;0.6;1"
                keySpline="0,0,.58,1;0,0,.58,1;.42,0,1,1;0,0,.58,1"
                dur="1s"
                begin="idle.end"
            />
            <animateTransform
                attributeName="transform"
                type="scale"
                additive="sum"
                values="1,1;1.1,0.8;0.9,1.2;1.1,0.8;1,1"
                keyTimes="0;0.1;0.35;0.7;1"
                dur="1s"
                begin="idle.end"
            />
        </g>
    </svg>
)
export default SVGComponent
