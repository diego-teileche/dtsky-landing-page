interface componentsProps {
  id: string
  name: string
  style?: string
  text?: string
  text1?: string
  text2?: string
  description: string
  documentation?: string
  note?: string
  component: string
  code?: string
  properties?: string[]
  property?: string
  hrefProperty?: boolean
  slug: string
  type?: string
}

export const componentsData: componentsProps[] = [
  {
    id: "0",
    name: "DT Flashslide Button",
    text: "Button",
    description:
      "A sleek and modern button component that incorporates a dynamic sliding effect, enhancing user interaction and visual appeal. Perfect for adding a touch of sophistication to any interface",
    component: "DTFlashslideButton",
    code: `
      <DTFlashslideButton
        href="#"
        text="Button"
      />
    `,
    properties: [
      '"--size": string',
      '"--bg": string',
      '"--arrow-bg": string',
      '"--arrow-color": string',
    ],
    property: `"--size": "100px"`,
    hrefProperty: true,
    slug: "dt-flashslide-button",
    type: "button",
  },
  {
    id: "1",
    name: "DT Hoverhue Button",
    text: "Button",
    description:
      "This modern button component boasts a captivating hover effect that dynamically changes its color, adding a vibrant and engaging element to your user interface. Ideal for creating visually striking interactive buttons",
    component: "DTHoverhueButton",
    code: `
      <DTHoverhueButton
        href="#"
        text="Button"
      />
    `,
    properties: [
      '"--p": string',
      '"--bg": string',
      '"--color": string',
      '"--fontSize": string',
    ],
    property: `"--size": "100px"`,
    hrefProperty: true,
    slug: "dt-hoverhue-button",
    type: "button",
  },
  {
    id: "2",
    name: "DT Lightning Button",
    text: "Button",
    description:
      "A contemporary button component that delivers a striking visual impact with its unique lightning animation. Designed to enhance user interaction, it brings a dynamic and energetic feel to any web application",
    component: "DTLightningButton",
    code: `
      <DTLightningButton>
        Click Me
      </DTLightningButton>
    `,
    properties: [
      "'--p': string",
      "'--color': string",
      "'--tracking': string",
      "'borderColor': string",
      "'hoverColor': string",
      "'layerColor': string",
    ],
    property: `"--p": "25px 30px"`,
    hrefProperty: true,
    slug: "dt-lightning-button",
    type: "button",
  },
  {
    id: "3",
    name: "DT Like Button",
    text: "Button",
    description:
      "A modern, interactive button component designed to provide immediate visual feedback with a smooth like animation. Perfect for social media integrations and enhancing user engagement with a touch of elegance",
    component: "DTLikeButton",
    code: `
      <DTLikeButton
        onClick={() => {}}
        text="Like!"
      />
    `,
    properties: [
      '"--containerSize": string',
      '"--rounded": string',
      '"--shadow": string',
      '"--bg": string',
      '"--hoverWidth": string',
      '"--textColor": string',
      '"--textLeft": string',
      '"--text-fontSite": string',
      '"--like-p": string',
      '"--likeSize": string',
      '"--likeColor": string',
      '"--like-fontSize": string',
    ],
    property: `"--rounded": "10px"`,
    hrefProperty: false,
    slug: "dt-like-button",
    type: "button",
  },
  {
    id: "4",
    name: "DT Modern Button",
    text: "Modern Button",
    description:
      "A versatile button component that embodies simplicity and elegance, designed with a minimalist approach. Its modern aesthetics and intuitive interaction make it a perfect fit for any contemporary web application",
    component: "DTModernButton",
    code: `
      <DTModernButton href="#">
        Button
      </DTModernButton>
    `,
    properties: [
      '"--color": string',
      '"--gradient1": string',
      '"--gradient2": string',
      '"--gradient3": string',
      '"--p": string',
      '"--rounded": string',
      '"--bg": string',
      '"--fontSize": string',
    ],
    property: `"--p": "25px 30px"`,
    hrefProperty: true,
    slug: "dt-modern-button",
    type: "button",
  },
  {
    id: "5",
    name: "DT Neumorphism Button",
    text: "Button",
    description:
      "This button component embraces the trendy neumorphism design, offering a soft, tactile feel that mimics real-world objects. Its modern aesthetic adds a subtle depth and elegance to your user interface",
    note: "I recommend using a background color of #f0f0f0 or basically white. In the future, I will give you the functionality to choose colors.",
    component: "DTNeumorphismButton",
    code: `
      <DTNeumorphismButton href="#">
        Button
      </DTNeumorphismButton>
    `,
    properties: [
      '"--color": string',
      '"--p": string',
      '"--fontSize": string',
      '"--rounded": string',
      '"--bg": string',
      '"--shadow1": string',
      '"--shadow2": string',
    ],
    property: `"--p": "25px 30px"`,
    hrefProperty: true,
    slug: "dt-neumorphism-button",
    type: "button",
  },
  {
    id: "6",
    name: "DT Row Button",
    text: "Button",
    description:
      "A modern button component featuring an integrated arrow icon next to the text. It guides user interaction seamlessly, enhancing navigational cues and creating a streamlined, visually engaging experience. Ideal for intuitive and responsive designs",
    component: "DTRowButton",
    code: `
      <DTRowButton
        href="#"
        text="Button"
      />
    `,
    properties: [
      '"--w": string',
      '"--h": string',
      '"--bg": string',
      '"--gap": string',
      '"--color": string',
      '"--tracking": string',
      '"--fontSize": string',
      '"--bgHover": string',
      '"--color-hover": string',
      '"--line-h": string',
      '"--line-hover-w": string',
    ],
    property: `"--w": "25px"`,
    hrefProperty: true,
    slug: "dt-row-button",
    type: "button",
  },
  {
    id: "7",
    name: "DT Squares Button",
    text: "Button",
    description:
      "This button component features small squares in the corners as part of its design, adding a unique and modern touch. It's perfect for enhancing visual interest while maintaining a sleek, professional look.",
    component: "DTSquaresButton",
    code: `
      <DTSquaresButton href="#">
        Button
      </DTSquaresButton>
    `,
    properties: [
      '"--fontSize": string',
      '"--p": string',
      '"--bg": string',
      '"--squareSize": string',
    ],
    property: `"--p": "25px 30px"`,
    hrefProperty: true,
    slug: "dt-squares-button",
    type: "button",
  },
  {
    id: "8",
    name: "DT FlashEdge Card",
    text: "Card",
    description:
      "A sleek card component featuring a dynamic flash effect along its edges. This modern design element enhances visual appeal and creates a sophisticated, engaging user experience. Ideal for highlighting key information in any application.",
    component: "DTFlashEdgeCard",
    code: `
      <DTFlashEdgeCard>
        Card
      </DTFlashEdgeCard>
    `,
    properties: [
      '"--size": string',
      '"--rounded": string',
      '"--inset": string',
      '"--bg": string',
    ],
    property: `"--size": "100px"`,
    slug: "dt-flashedge-card",
    type: "card",
  },
  {
    id: "9",
    name: "DT FlipFlux Card",
    text: "Card",
    description:
      "A captivating card component with a unique flip animation that dynamically reveals content on hover. This modern and interactive design element enhances user engagement, making information display both stylish and functional.",
    component: "DTFlipFluxCard",
    code: `
      <DTFlipFluxCard
        childrenBack=""
        childrenFront=""
      />
    `,
    properties: [
      '"--w": string',
      '"--h": string',
      '"--bgFront": string',
      '"--bgBack": string',
    ],
    property: `"--w": "50px"`,
    slug: "dt-flipflux-card",
    type: "card",
  },
  {
    id: "10",
    name: "DT FlipFrame Card",
    text: "Card",
    description:
      "A modern card component featuring a smooth flip animation that reveals content on hover. This innovative design enhances user engagement by providing a stylish and interactive way to display information. Ideal for creating dynamic and visually appealing interfaces.",
    component: "DTFlipFrameCard",
    code: `
      <DTFlipFrameCard
        img1=""
        img2=""
      >
        Card
      </DTFlipFrameCard>
    `,
    properties: ['"--w": string', '"--h": string'],
    property: `"--w": "50px"`,
    slug: "dt-flipframe-card",
    type: "card",
  },
  {
    id: "11",
    name: "DT Glass Card",
    text: "Card",
    description:
      "A sophisticated card component utilizing a glassmorphism design, offering a frosted glass effect that adds depth and modernity to your user interface. It's perfect for creating sleek and stylish content displays.",
    component: "DTGlassCard",
    code: `
      <DTGlassCard>
        Card
      </DTGlassCard>
    `,
    properties: ['"--p": string', '"--rounded": string'],
    property: `"--p": "5px"`,
    slug: "dt-glass-card",
    type: "card",
  },
  {
    id: "12",
    name: "DT HoverHustle Cards",
    text: "Card",
    description:
      "Modern card components featuring dynamic hover animations that bring content to life. These cards enhance user interaction and engagement, providing a stylish way to present information on your web applications.",
    component: "DTHoverHustleCards",
    code: `
      <DTHoverHustleCards
        children1=""
        children2=""
        children3=""
        children4=""
      />
    `,
    properties: [
      '"--size": string',
      '"--bg": string',
      '"--p": string',
      '"--rounded": string',
    ],
    property: `"--p": "5px"`,
    slug: "dt-hoverhustle-card",
    type: "card",
  },
  {
    id: "13",
    name: "DT InvertedBorder Card",
    text: "",
    description:
      "A contemporary card component featuring an inverted border design. This modern look enhances visual depth, making your content stand out with a sleek, sophisticated touch. Perfect for creating engaging user interfaces.",
    note: "I recommend that the background color be #fff (completely white). In the future, I will add the functionality to change the border color so that the effect can be appreciated with any background color.",
    component: "DTInvertedBorderCard",
    code: `
      <DTInvertedBorderCard>
        Card
      </DTInvertedBorderCard>
    `,
    properties: ['"--size": string', '"--upBg": string', '"--downBg": string'],
    property: `"--size": "100px"`,
    slug: "dt-invertedborder-card",
    type: "card",
  },
  {
    id: "14",
    name: "DT RevealGlass Card",
    text: "Card",
    description:
      "This modern card component features a glassmorphism effect and reveals its content upon hover. Its sleek design and interactive nature enhance user engagement, making it an elegant addition to any web application.",
    component: "DTRevealGlassCard",
    code: `
      <DTRevealGlassCard>
        Card
      </DTRevealGlassCard>
    `,
    properties: [
      '"--w"?: string',
      '"--h"?: string',
      '"--rounded"?: string',
      '"--p"?: string',
    ],
    property: `"--w": "100px"`,
    slug: "dt-revealglass-card",
    type: "card",
  },
  /* {
    id: "15",
    name: "DT Circles Loader",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda atque, dolor libero omnis sed magnam impedit ipsa sit asperiores.",
    documentation: "How to use the Card component...",
    component: "DTCirclesLoader",
    code: `
      <DTCirclesLoader />
    `,
    properties: [
      '"--size": string',
      '"--circle1": string',
      '"--circle2": string',
      '"--circle3": string',
      '"--circle4": string',
    ],
    property: `"--circle1": "#216ad6"`,
    slug: "dt-circles-loader",
    type: "loader",
  },
  {
    id: "15",
    name: "DT CircleShift Loader",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda atque, dolor libero omnis sed magnam impedit ipsa sit asperiores.",
    documentation: "How to use the Card component...",
    component: "DTCircleShiftLoader",
    code: `
      <DTCircleShiftLoader />
    `,
    properties: [
      '"--circleSize": string',
      '"--circle1": string',
      '"--circle2": string',
      '"--circle3": string',
      '"--circle4": string',
    ],
    property: `"--circle1": "#216ad6"`,
    slug: "dt-circleshift-loader",
    type: "loader",
  },
  {
    id: "16",
    name: "DT Collider Loader",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda atque, dolor libero omnis sed magnam impedit ipsa sit asperiores.",
    documentation: "How to use the Card component...",
    component: "DTColliderLoader",
    code: `
      <DTColliderLoader />
    `,
    properties: ['"--size": string'],
    property: `"--size": "100px"`,
    slug: "dt-collider-loader",
    type: "loader",
  }, */
  {
    id: "17",
    name: "DT Spectrum Loader",
    description:
      "A vibrant and modern loader component that displays a spectrum of colors, providing a visually engaging way to indicate loading processes. Its dynamic design enhances user experience during wait times in any web application.",
    note: "I recommend changing the color of '--insetBg' to match the background color for a better appreciation of the effect.",
    component: "DTSpectrumLoader",
    code: `
      <DTSpectrumLoader />
    `,
    properties: [
      '"--h": string',
      '"--color": string',
      '"--pointColor": string',
      '"--insetBg": string',
    ],
    property: `"--h": "50px"`,
    slug: "dt-spectrum-loader",
    type: "loader",
  },
  {
    id: "18",
    name: "DT Squares Loader",
    description:
      "A modern loader component that features small squares in its design, providing a unique and visually engaging loading animation. This dynamic loader enhances user experience during wait times with its contemporary look.",
    component: "DTSquaresLoader",
    code: `
      <DTSquaresLoader />
    `,
    properties: ['"--size": string', '"--color": string'],
    property: `"--size": "100px"`,
    slug: "dt-squares-loader",
    type: "loader",
  },
  {
    id: "19",
    name: "DT Typing Loader",
    description:
      "This modern loader features a typing effect, accompanied by dynamic lightning borders and a beautiful hover animation. It adds an engaging and visually striking element to your application's loading experience.",
    component: "DTTypingLoader",
    code: `
      <DTTypingLoader />
    `,
    properties: [
      '"--size": string',
      '"--bg": string',
      '"--textColor": string',
      '"--loaderColor": string',
      '"--hover-textColor": string',
      '"--tracking": string',
      '"--typingEffect-width": string',
    ],
    property: `"--size": "100px"`,
    slug: "dt-typing-loader",
    type: "loader",
  },
  {
    id: "20",
    name: "DT Alien",
    description:
      "A unique component featuring the face of an alien. This eye-catching design adds a playful and modern touch to your application, sure to captivate user attention. Perfect for creative and out-of-the-box interfaces.",
    component: "DTAlien",
    code: `
      <DTAlien />
    `,
    properties: ['"--size": string'],
    property: `"--size": "100px"`,
    slug: "dt-alien",
    type: "random",
  },
  /* {
    id: "21",
    name: "DT ClimbCube",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda atque, dolor libero omnis sed magnam impedit ipsa sit asperiores.",
    documentation: "How to use the Card component...",
    component: "DTClimbCube",
    code: `
      <DTClimbCube />
    `,
    properties: ['"--size": string'],
    property: `"--size": "100px"`,
    slug: "dt-climbcube",
    type: "random",
  }, */
  /* {
    id: "22",
    name: "DT FocusText",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda atque, dolor libero omnis sed magnam impedit ipsa sit asperiores.",
    documentation: "How to use the Card component...",
    component: "DTFocusText",
    code: `
      <DTFocusText text="Diego" />
    `,
    properties: ['"--gap": string', '"--p": string', '"--color": string'],
    property: `"--p": "10px"`,
    slug: "dt-focustext",
    type: "random",
  }, */
  {
    id: "23",
    name: "DT GhostCubes",
    description:
      "A modern component showcasing two rotating cubes stacked vertically. This sleek design element adds a dynamic and contemporary feel to your application, enhancing visual appeal with its innovative animation.",
    component: "DTGhostCubes",
    code: `
      <DTGhostCubes />
    `,
    properties: ['"--clr": string', '"--size": string'],
    property: `"--size": "100px"`,
    slug: "dt-ghostcubes",
    type: "random",
  },
  {
    id: "24",
    name: "DT HookedCircles",
    description:
      "A contemporary component featuring two interlocked circles designed with a modern aesthetic. This unique element adds a stylish and innovative touch to your application's visual design.",
    component: "DTHookedCircles",
    code: `
      <DTHookedCircles />
    `,
    properties: ['"--size": string'],
    property: `"--size": "100px"`,
    slug: "dt-hookedcircles",
    type: "random",
  },
  {
    id: "25",
    name: "DT InfernoRing",
    description:
      "A striking component featuring a ring engulfed in a dynamic flame effect. This modern design element adds intense visual appeal and a captivating energy to your application's interface.",
    component: "DTInfernoRing",
    code: `
      <DTInfernoRing />
    `,
    properties: ['"--size": string'],
    property: `"--size": "100px"`,
    slug: "dt-infernoring",
    type: "random",
  },
  {
    id: "26",
    name: "DT StackedSpectra",
    description:
      "A vibrant component featuring stacked layers with a spectrum of colors. This modern design element adds depth and dynamic visual appeal to your application, making it stand out with a unique, colorful touch.",
    component: "DTStackedSpectra",
    code: `
      <DTStackedSpectra />
    `,
    properties: ['"--size": string'],
    property: `"--size": "100px"`,
    slug: "dt-stackedspectra",
    type: "random",
  },
  {
    id: "27",
    name: "DT SyncHavoc",
    description:
      "A powerful component featuring synchronized, chaotic animations that captivate and engage users. This modern design adds dynamic energy and visual excitement to your application's interface, making it truly stand out.",
    component: "DTSyncHavoc",
    code: `
      <DTSyncHavoc />
    `,
    properties: ['"--size": string'],
    property: `"--size": "100px"`,
    slug: "dt-synchavoc",
    type: "random",
  },
  /* {
    id: "28",
    name: "DT TextCube3d",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda atque, dolor libero omnis sed magnam impedit ipsa sit asperiores.",
    documentation: "How to use the Card component...",
    component: "DTTextCube3d",
    code: `
      <DTTextCube3d text="DTSky" />
    `,
    properties: [
      '"--size": string',
      '"--color": string',
      '"--fontSize": string',
    ],
    property: `"--size": "100px"`,
    slug: "dt-textcube3d",
    type: "random",
  }, */
  {
    id: "29",
    name: "DT ModernSwitch",
    description:
      "A sleek and intuitive switch component designed with a contemporary aesthetic. This modern switch enhances user interaction with a clean, responsive design, perfect for seamlessly integrating into any user interface.",
    component: "DTModernSwitch",
    code: `
      <DTModernSwitch />
    `,
    properties: ['"--size": string'],
    property: `"--size": "100px"`,
    slug: "dt-modernswitch",
    type: "switch",
  },
  {
    id: "30",
    name: "DT GhostText",
    text1: "DTSky",
    text2: "React",
    description:
      "A modern text component featuring a ghostly transparency effect. This sleek design adds a mysterious and elegant touch to your application, making text elements stand out with a subtle yet striking visual appeal.",
    component: "DTGhostText",
    code: `
      <DTGhostText
        text1="DTSky"
        text2="React"
      />
    `,
    properties: ['"--fontSize": string', '"--color": string'],
    property: `"--fontSize": "100px"`,
    slug: "dt-ghosttext",
    type: "text",
  },
  {
    id: "31",
    name: "DT GlitchText",
    text: "DTSky",
    description:
      "A striking text component featuring a glitch effect that mimics digital distortion. This modern design adds a dynamic and edgy visual element to your application, capturing attention with its unique style.",
    component: "DTGlitchText",
    code: `
      <DTGlitchText text="DTSky" />
    `,
    properties: ['"--fontSize": string', '"--color": string'],
    property: `"--fontSize": "100px"`,
    slug: "dt-glitchtext",
    type: "text",
  },
  {
    id: "32",
    name: "DT IlluminationText",
    text: "DTSky",
    description:
      "A modern text component featuring an illuminating effect that brightens upon interaction. This design adds a vibrant and eye-catching element to your application, enhancing the visual appeal with a touch of brilliance.",
    component: "DTIlluminationText",
    code: `
      <DTIlluminationText text="DTSky" />
    `,
    properties: [
      '"--fontSize": string',
      '"--color": string',
      '"--layerColor": string',
    ],
    property: `"--fontSize": "100px"`,
    slug: "dt-illuminationtext",
    type: "text",
  },
  {
    id: "33",
    name: "DT MagicText",
    text: "DTSky",
    description:
      "A dynamic text component featuring enchanting animations that create a magical effect. This modern design element adds a captivating and whimsical touch to your application, making text elements come alive with charm and elegance.",
    component: "DTMagicText",
    code: `
      <DTMagicText text="DTSky" />
    `,
    properties: ['"--fontSize": string'],
    property: `"--fontSize": "100px"`,
    slug: "dt-magictext",
    type: "text",
  },
  {
    id: "34",
    name: "DT NeonText",
    text: "DTSky",
    description:
      "A vibrant text component featuring a glowing neon effect. This modern design element adds a bold and eye-catching look to your application, making text elements pop with a striking, luminous style.",
    note: "I recommend changing the background color of '--layerBg' to match the container's background color for the effect to be properly appreciated.",
    component: "DTNeonText",
    code: `
      <DTNeonText text="DTSky" />
    `,
    properties: ['"--size": string', '"--layerBg": string'],
    property: `"--size": "100px"`,
    slug: "dt-neontext",
    type: "text",
  },
]
