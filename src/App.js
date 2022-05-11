import { Container, Grid } from "@mui/material";
import data from "./dummy/data";
import Card from "./component/Card";

function App() {
  const dummy = data();
  return (
    <Container>
      <Grid container spacing={6}>
        {/* dummy data로 map 함수 사용해서 컴포넌트 개수만큼 리턴 */}
        {dummy.map((item, i) => {
          return (
            <Grid item xs={6} key={i}>
              <Card data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
