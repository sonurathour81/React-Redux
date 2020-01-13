JsonPlaceholder = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json =>this.setState({ allData: json })
 )
}

export default JsonPlaceholder;


