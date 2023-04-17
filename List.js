class List extends React.Component {
  state = {};

  persons = ["Josh", "Mike", "Tom", "Nickey", "Mia", "Bradly"];

  handleRemove = (e) => {
    let person = e.target.parentElement.value;
    e.target.parentElement.remove();
    this.persons.splice(person, 1);
    console.log(this.persons);
  };

  listPerson = () =>
    this.persons.map((person, idx) => (
      <li value={idx}>
        {person}
        <button onClick={this.handleRemove}>Delete</button>
      </li>
    ));

  render() {
    return (
      <>
        <ul>{this.listPerson()}</ul>
      </>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
