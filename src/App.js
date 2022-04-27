import { Button, Grid } from "@mui/material";

function App() {
  return <div className="App">
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Button variant="contained">123</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained">123</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained">123</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained">123</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained">123</Button>
      </Grid>
    </Grid>
  </div>;
}

export default App;