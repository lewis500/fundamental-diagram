import React, {
  createElement as CE,
  useContext,
  useMemo,
  FC,
  memo
} from "react";
import { scaleLinear } from "d3-scale";
import { AppContext, getRange, vkMap } from "src/ducks";
import * as params from "src/constants";
import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TeX from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";
import mo from "memoize-one";

const getVScale = mo(height =>
    scaleLinear()
      .range([height, 0])
      .domain([0, params.vf * 1.2])
  ),
  getXScale = mo(height =>
    scaleLinear()
      .range([height, 0])
      .domain([0, params.total - params.carLength])
  ),
  getKScale = mo(width =>
    scaleLinear()
      .range([0, width])
      .domain([0, params.kj + .008])
  ),
  M = {
    top: 25,
    bottom: 30,
    left: 20,
    right: 90
  },
  gTranslate = `translate(${M.left},${M.top})`;

const Road = memo<{
    className: string;
    height: number;
    width: number;
  }>(({ height, className, width }) =>
    CE("path", { className, strokeWidth: width, d: `M0,0L0,${height}` })
  ),
  KAxis = memo<{
    mathClass: string;
    height: number;
    width: number;
  }>(({ mathClass, height, width }) => (
    <g transform={`translate(0,${height})`}>
      <path
        d={`M0,0L${width},0`}
        fill="none"
        stroke="black"
        markerEnd="url(#arrow)"
      />
      <foreignObject
        width="90"
        height="75"
        transform={`translate(${width + 10},-10)`}
      >
        <span className={mathClass}>
          <TeX math="k \; \text{(veh/km)}" />
        </span>
      </foreignObject>
    </g>
  )),
  VAxis = memo<{ mathClass: string; height: number }>(
    ({ mathClass, height }) => {
      return (
        <g>
          <path
            d={`M0,0L0,${height}`}
            fill="none"
            stroke="black"
            markerEnd="url(#arrow)"
            markerStart="url(#arrow)"
          />
          <foreignObject
            width="90"
            height="75"
            transform={"translate(-10,-25)"}
          >
            <span className={mathClass}>
              <TeX math="v \; \text{(km/hr)}" />
            </span>
          </foreignObject>
        </g>
      );
    }
  );

const VK: FC<{ width: number; height: number }> = ({ width, height }) => {
  const { state } = useContext(AppContext),
    vk = vkMap[state.vk],
    vScale = getVScale(height),
    kScale = getKScale(width),
    xScale = getXScale(height),
    [roadWidth, carLength, carWidth, Mask] = useMemo(
      () => [
        height - xScale(params.roadWidth),
        height - xScale(params.carLength),
        height - xScale(params.carWidth),
        <mask id="myMask">
          <rect width={width} height={height} fill="white" />
        </mask>
      ],
      [width, height]
    ),
    classes = useStyles({
      width: width + M.right + M.left,
      height: height + M.top + M.bottom
    });

  const vPath = useMemo(
    () =>
      getRange(70)
        .map((v, i, k) => (v / (k.length - 1)) * params.kj)
        .reduce((a, k) => a + kScale(k) + "," + vScale(vk(k)) + " ", "M"),
    [kScale, vScale]
  );
  return (
    <svg className={classes.svg}>
      <g transform={gTranslate}>
        <VAxis height={height} mathClass={classes.math} />
        <KAxis height={height} width={width} mathClass={classes.math} />
            {Mask}
            <g mask="url(#myMask)">
        {state.lanes.map((d, i) => (
          <g key={d.k} transform={`translate(${kScale(d.k)},0)`}>
            <Road className={classes.road} width={roadWidth} height={height} />
            {d.cars.map((x, j) => (
              <rect
                key={j}
                className={classes.car}
                y={xScale(x)}
                x={-carWidth / 2}
                height={carLength}
                width={carWidth}
              />
            ))}
          </g>
        ))}
        <path className={classes.path} d={vPath} />
</g>
      </g>
    </svg>
  );
};
export default VK;

const useStyles = makeStyles<{}, { width: number; height: number }>({
  math: {
    fontSize: "12px"
  },
  path: {
    strokeWidth: "4px",
    fill: "none",
    stroke: colors.lightBlue["A700"],
    opacity: 0.7
  },
  road: {
    stroke: colors.grey["300"]
  },
  car: {
    fill: colors.purple["A200"],
    rx: 1,
    ry: 1,
    stroke: "none"
  },
  svg: ({ width, height }) => ({
    width,
    height,
    display: "block",
    "& text": {
      fontFamily: "Puritan, san-serif",
      fontSize: "11px"
    }
  }),
  text: {
    textAlign: "center",
    fontSize: "10px"
    // fontFamily: "Puritan, sans-serif"
  }
});
