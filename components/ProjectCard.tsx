import Title from "./Title"

type Props = {
    title: string
    description: string
    href: string
    icon?: "musicmash" | "launchx" | "flute" | "kickbuddy"
}

export default function ProjectCard({ title, description, href, icon }: Props) {
    return (
        <a
            className="mb-4 hover:shadow-lg transition-all duration-100 ease-in no-underline"
            href={href}
            aria-label={title}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded p-4">
                {icon === "kickbuddy" && (
                    <div className="h-8 w-8 ml-2 mr-4">
                        <span className="sr-only">Synk.so</span>
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="700.000000pt"
                            height="700.000000pt"
                            viewBox="0 0 700.000000 700.000000"
                            preserveAspectRatio="xMidYMid meet"
                            className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                        >
                            <g
                                transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)"
                                fill="currentColor"
                                stroke="none"
                            >
                                <path
                                    d="M1299 5635 c-1 0 -3 -1020 -4 -2267 l-1 -2268 898 0 898 0 0 2268 0
2268 -895 0 c-492 0 -896 0 -896 -1z"
                                />
                                <path
                                    d="M4997 5623 c-2 -1 -43 -4 -92 -8 -86 -6 -127 -10 -205 -20 -19 -3
-55 -7 -80 -10 -92 -12 -248 -47 -345 -76 -281 -87 -440 -233 -538 -494 -30
-81 -57 -182 -63 -240 -3 -22 -7 -45 -9 -52 -13 -38 -19 -240 -20 -653 l0
-465 245 1 c233 0 484 10 512 18 7 3 42 7 78 11 66 6 240 34 250 40 3 2 21 6
40 9 60 9 252 76 330 115 345 170 521 463 576 956 4 33 7 244 9 468 l2 409
-344 -4 c-190 -1 -345 -4 -346 -5z"
                                />
                                <path
                                    d="M3645 2746 c1 -281 5 -538 9 -571 62 -534 258 -812 671 -950 44 -15
86 -28 95 -30 8 -2 35 -8 60 -15 53 -14 73 -19 120 -26 19 -3 41 -7 48 -9 25
-9 260 -35 377 -42 66 -4 242 -7 390 -7 l270 -1 0 400 c-1 220 -4 436 -8 480
-56 634 -315 994 -835 1164 -99 33 -294 76 -382 86 -30 3 -71 8 -90 10 -102
14 -170 17 -436 20 l-291 3 2 -512z"
                                />
                            </g>
                        </svg>
                    </div>
                )}
                {icon === "musicmash" && (
                    <div className="h-8 w-8 ml-2 mr-4">
                        <span className="sr-only">Music Mash</span>
                        {/* <svg
                            className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                            viewBox="0 0 267 305"
                        >
                            <g fill="currentColor">
                                <path d="M0 296V8.5H231.5V89L170.5 150L258.5 238H174L86 150L170.5 65.5H58V238L0 296Z" />
                            </g>
                        </svg> */}
                        <svg
                            className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                            viewBox="0 0 400.000000 400.000000"
                        >
                            <g
                                transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
                                fill="currentColor"
                                stroke="none"
                            >
                                <path
                                    d={`M1765 3984 c-145 -18 -168 -23 -390 -84 -50 -13 -81 -26 -256 -108
                                        -228 -106 -492 -314 -660 -519 -191 -232 -349 -547 -407 -810 -44 -197 -52
                                        -266 -52 -434 0 -248 43 -517 110 -684 4 -11 18 -47 31 -80 83 -219 260 -491
                                        433 -667 120 -122 387 -320 501 -372 22 -10 72 -33 110 -51 130 -59 166 -72
                                        348 -119 193 -50 454 -68 652 -46 195 22 411 73 530 125 150 65 201 90 301
                                        145 44 24 193 132 271 195 204 168 385 400 505 645 84 171 126 298 173 515 17
                                        75 35 248 35 328 0 195 -43 471 -102 652 -11 33 -23 69 -28 80 -5 11 -17 40
                                        -27 65 -25 63 -113 234 -154 300 -34 56 -133 192 -179 245 -30 35 -164 169
                                        -208 207 -112 98 -310 230 -417 278 -27 12 -79 36 -115 52 -276 127 -681 185
                                        -1005 142z m883 -886 c62 -15 98 -41 133 -96 73 -115 6 -269 -132 -300 -28 -7
                                        -120 -12 -205 -12 l-154 0 0 -677 c0 -657 -1 -678 -21 -735 -11 -31 -32 -79
                                        -47 -105 -40 -72 -147 -173 -222 -210 -85 -41 -90 -42 -189 -57 -140 -21 -273
                                        11 -397 95 -149 100 -224 241 -224 420 0 177 77 314 238 422 140 94 277 114
                                        490 71 l32 -6 0 525 c0 571 -1 564 57 619 53 51 86 57 351 57 152 1 261 -3
                                    290 -11z`}
                                />
                            </g>
                        </svg>
                    </div>
                )}

                {icon === "launchx" && (
                    <div className="h-8 w-8 ml-2 mr-4">
                        <span className="sr-only">LaunchX</span>
                        <svg
                            className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                            viewBox="0 0 180.000000 180.000000"
                        >
                            <g
                                transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"
                                fill="currentColor"
                                stroke="none"
                            >
                                <path
                                    d="M0 900 l0 -900 900 0 900 0 0 900 0 900 -900 0 -900 0 0 -900z m644
463 l195 -207 -66 -73 c-36 -40 -69 -73 -74 -73 -6 0 -356 370 -441 466 -15
17 -18 30 -13 58 l7 36 99 0 98 0 195 -207z m936 198 c0 -5 -51 -48 -112 -94
-333 -251 -609 -565 -850 -967 -42 -69 -87 -149 -102 -177 l-26 -53 -120 0
c-65 0 -121 4 -125 10 -13 22 153 299 286 476 227 303 467 533 759 730 l125
84 83 0 c45 0 82 -4 82 -9z m-289 -905 c247 -268 294 -323 291 -345 -5 -51 -6
-51 -109 -50 l-98 0 -220 235 c-121 129 -237 254 -258 278 l-37 44 62 80 c35
45 66 80 69 79 3 -1 138 -146 300 -321z"
                                />
                            </g>
                        </svg>
                    </div>
                )}

                {icon === "flute" && (
                    <div className="h-8 w-8 ml-2 mr-4">
                        <span className="sr-only">Floetenbot</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                        >
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                        </svg>
                    </div>
                )}

                <div>
                    <Title variant="h4" thin>
                        {title}
                    </Title>
                    <p className="leading-5 text-gray-700 dark:text-gray-300">{description}</p>
                </div>
            </div>
        </a>
    )
}
