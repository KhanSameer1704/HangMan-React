import Button from "./components/Button/Button";

function App(){
  
  return(
    <div>
      <h1 className="font-semibold text-3xl">hello world!!</h1>
      <Button text="primary" buttontype="button" styleType="primary" onclickHandler={()=>console.log("primary Clicked")}/>
      <Button text="Secondary" buttontype="submit" styleType="secondary" onclickHandler={()=>console.log("secondary clicked")}/>
      <Button text="Warning" buttontype="button" styleType="warning" onclickHandler={()=> console.log("warning clicked")}/>
      <Button text="error" buttontype="button" styleType="error" onclickHandler={()=> console.log("error clicked")}/>
    </div>
    
  );
};

export default App;