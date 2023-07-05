import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { LuHardHat } from "react-icons/lu";

function ConstructionBanner() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Alert variant="warning">
        <Alert.Heading>Sitio en construcción <LuHardHat size={90}/></Alert.Heading>
      </Alert>
    </Container>
  );
}

export default ConstructionBanner;
