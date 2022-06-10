import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Card from ".";
import { globalState } from "../../atom/common";
import { getList } from "../../util";

const Board = () => {
  const dummy = getList();
  const [update] = useRecoilState(globalState);

  useEffect(() => {}, [update.noUseNumbering, dummy]);

  return (
    <>
      {dummy &&
        dummy.reverse().map((item, i) => {
          return (
            <Grid item xs={6} key={i}>
              <Card data={item} />
            </Grid>
          );
        })}
    </>
  );
};

export default Board;
