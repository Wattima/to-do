import ToDoList from "../components/ToDoList";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home(){
    return (<div>
        <NavBar />
        <ToDoList/>
        <Footer/>
        </div>
    )
}

export default Home;