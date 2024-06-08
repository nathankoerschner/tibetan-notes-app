import * as React from "react";
import Svg, { Path, G, Rect, Mask, Text, TSpan, Defs } from "react-native-svg";

function PechaCard({ title = "Unnamed", description = "", hexColor = "#0F2497" }) {
  return (
    <Svg
      width={553}
      height={187}
      viewBox="0 0 553 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path fill="#FAFAFA" d="M0 0H553V187H0z" />
      <G filter="url(#filter0_dd_0_1)">
        <Rect
          x={4}
          width={545}
          height={179}
          rx={2}
          fill={hexColor}
          shapeRendering="crispEdges"
        />
        <Path fill="#333" fillOpacity={0.2} d="M61 33H492V146H61z" />
        <Path stroke="#D4AF37" strokeWidth={2} d="M61 33H492V146H61z" />
        <Path stroke="#D4AF37" strokeWidth={2} d="M69 41H484V138H69z" />
        <Path stroke="#D4AF37" strokeWidth={2} d="M69 41H117V138H69z" />
        <Path stroke="#D4AF37" strokeWidth={2} d="M139 41H414V138H139z" />
        <Mask
          id="a"
          maskUnits="userSpaceOnUse"
          x={146}
          y={44}
          width={261}
          height={45}
          fill="#000"
        >
          <Path fill="#fff" d="M146 44H407V89H146z" />
          <Path d="M146 44h261v43.5H146V44z" />
        </Mask>
        <Path d="M407 86.5H146v2h261v-2z" fill="#F0F0F2" mask="url(#a)" />
        <Text
          fill="#FAFAFA"
          style={{
            whiteSpace: "pre",
            textAnchor: "middle",
          }}
          fontFamily="Noto Serif Tibetan"
          fontSize={16}
          fontWeight="bold"
          letterSpacing="0em"
        >
          <TSpan x="50%" y={66.686}>
            {title}
          </TSpan>
        </Text>
        <Text
          fill="#FAFAFA"
          style={{
            whiteSpace: "pre",
            textAnchor: "middle",
          }}
          fontFamily="Noto Serif Tibetan"
          fontSize={14}
          letterSpacing="0em"
        >
          <TSpan x="50%" y={114.069}>
            {description}
          </TSpan>
        </Text>
        <Path stroke="#D4AF37" strokeWidth={2} d="M436 41H484V138H436z" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default PechaCard;

