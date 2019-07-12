import React, {
  createElement as CE,
  useContext,
  useMemo,
  FC,
  memo
} from "react";
import { scaleLinear } from "d3-scale";
import { AppContext, getRange, vkMap, VKType } from "src/ducks";
import * as params from "src/constants";
import * as colors from "@material-ui/core/colors";
import makeStyles from "@material-ui/styles/makeStyles";
import mo from "memoize-one";
import TexLabel from "src/components/TexLabel";

const M = {
    top: 25,
    bottom: 30,
    left: 20,
    right: 90
  },
  gTranslate = `translate(${M.left},${M.top})`;

const KAxis = memo<{
    height: number;
    width: number;
    children?: React.ReactNode[];
  }>(({ height, width, children }) => (
    <g transform={`translate(0,${height})`}>
      <path
        d={`M0,0L${width},0`}
        fill="none"
        stroke="black"
        markerEnd="url(#arrow)"
      />
      {children}
    </g>
  )),
  QAxis = memo<{ height: number; children?: React.ReactNode[] }>(
    ({ height, children }) => (
      <g>
        <path
          d={`M0,0L0,${height}`}
          fill="none"
          stroke="black"
          markerEnd="url(#arrow)"
          markerStart="url(#arrow)"
        />
        {children}
      </g>
    )
  );

const memoizedvalues = mo((width, height) => {
  const qScale = scaleLinear()
      .range([height, 0])
      .domain([0, params.q0 * 1.2]),
    kScale = scaleLinear()
      .range([0, width])
      .domain([0, params.kj + 0.008]),
    Mask = (
      <mask id="myMask">
        <rect width={width} height={height} fill="white" />
      </mask>
    );
  return { qScale, kScale, Mask };
});

const QK: FC<{ width: number; height: number }> = ({ width, height }) => {
  const { state } = useContext(AppContext),
    vk = vkMap[state.vk],
    classes = useStyles({
      width: width + M.right + M.left,
      height: height + M.top + M.bottom
    }),
    { qScale, kScale, Mask } = memoizedvalues(width, height),
    QPath = useMemo(
      () =>
        CE("path", {
          className: classes.path,
          d: getRange(70)
            .map((v, i, k) => (v / (k.length - 1)) * params.kj)
            .reduce(
              (a, k) => a + kScale(k) + "," + qScale(k * vk(k)) + " ",
              "M"
            )
        }),
      [kScale, qScale, vk]
    );
  return (
    <svg className={classes.svg}>
      <g transform={gTranslate}>
        {Mask}
        <g mask="url(#myMask)">{QPath}</g>
        <QAxis height={height}>
          <TexLabel dx={-20} dy={qScale(params.q0) - 10} latexstring="q_0" />
          <TexLabel dx={-10} dy={-25} latexstring="q \; \text{(veh/hr)}" />
        </QAxis>
        <KAxis height={height} width={width}>
          <TexLabel
            dx={
              kScale(
                state.vk === VKType.GREENSHIELDS ? params.kj / 2 : params.k0
              ) - 4
            }
            dy={0}
            latexstring="k_0"
          />
          <TexLabel dx={kScale(params.kj) - 4} dy={0} latexstring="k_j" />
          <TexLabel
            dx={width + 10}
            dy={-10}
            latexstring="k \; \text{(veh/km)}"
          />
        </KAxis>
      </g>
    </svg>
  );
};
export default QK;

const useStyles = makeStyles<{}, { width: number; height: number }>({
  path: {
    strokeWidth: "4px",
    fill: "none",
    stroke: colors.lightBlue["A700"],
    opacity: 0.8
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
  }
});
