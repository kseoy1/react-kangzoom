import { Container, Grid } from "@mui/material";
import data from "./dummy/data";
import Card from "./component/Card";
import Layout from "./component/Layout";

function App() {
  const dummy = data();

  return (
    <Layout>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          {dummy.map((item, i) => {
            return (
              <Grid item xs={6} key={i}>
                <Card data={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
}

export default App;
