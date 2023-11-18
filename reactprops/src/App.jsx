import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-[50px]"> chai aur react</h1>
      <Card
        heading="
      React is a JavaScript library "
        image="https://media.istockphoto.com/id/1341408852/video/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke.jpg?s=640x640&k=20&c=v2DQUY8IVbli_6FH_9KAs6YWRXlDdYiBJHfp7JFh7NY="
        para="
        for building user interfaces, and it's the best way to build them if you are new to web development."
      ButtonName="Read More"
      />

      <Card
        heading=" Chai Aur React"
        image="https://www.shutterstock.com/image-photo/colorful-smoke-on-dark-background-260nw-569530480.jpg"
        para="I am currently following chai aur react series to learn react 
        and I have made a simple card component using react. This series
        is 16hrs long."
        ButtonName="Learn More"
      />
    </>
  );
}

export default App;
