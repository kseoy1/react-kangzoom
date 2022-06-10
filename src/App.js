import { Container, Grid } from "@mui/material";
import Board from "./component/Card/Board";
import Layout from "./component/Layout";
import { getList } from "./util";

function App() {
  
  return (
    <Layout>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Board />
        </Grid>
      </Container>
    </Layout>
  );
}

export default App;
