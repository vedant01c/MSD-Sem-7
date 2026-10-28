import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Program";
import DepartmentHighlights from "./components/DepartmentHighlight";
import DepartmentNotice from "./components/DepartmentNotice";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme=createTheme({
  palette:{
    primary:{
      main:"#1F5263;"
      
    },
    secondary:{
      main:"#c9dee4"
    }
  }
})

function App(){
  return(
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Hero/>
    <DepartmentHighlights/>
    <Programs/>
    <DepartmentNotice/>
    </ThemeProvider>
  );
}

export default App;