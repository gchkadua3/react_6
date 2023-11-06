const HelloWorldButton = () => {
    const showMessage = (message) => {
      window.alert(message);
    }
  
    const helloMessage = "Hello, World";
  
    return (
      <button onClick={() => showMessage(helloMessage)}>Click me</button>
    );
  }
  
  export default HelloWorldButton;