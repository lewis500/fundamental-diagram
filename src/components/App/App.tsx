import React, { FunctionComponent, useContext, useReducer } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useTimer } from "src/useTimerHook";
import * as params from "src/constants";
import {
  AppContext,
  reducer,
  initialState,
  ActionTypes as AT
} from "src/ducks";
import VK from "src/components/VK";
import useStyles from "./styleApp";

const EMPTY = {},
  WIDTH = 600,
  HEIGHT = WIDTH / params.GR;
const App: FunctionComponent<{}> = () => {
  const { state, dispatch } = useContext(AppContext),
    { play } = state,
    classes = useStyles(EMPTY);

  useTimer((dt: number) => {
    dt /= params.delta;
    dispatch({ type: AT.TICK, payload: Math.min(dt, 0.05) });
  }, play);

  return (
    <div className={classes.main}>
      <Paper className={classes.paper} elevation={2}>
        {/* <Sliders /> */}
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => dispatch({ type: AT.SET_PLAY, payload: !play })}
        >
          {play ? "PAUSE" : "PLAY"}
        </Button>
      </Paper>
      <VK height={HEIGHT} width={WIDTH} />
    </div>
  );
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <App />
    </AppContext.Provider>
  );
};
