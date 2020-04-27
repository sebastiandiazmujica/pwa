import React, { Component } from "react";
class Character extends Component {
  state = {
    likes: 0
  };

  handleClick = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header" id={`label${this.props.character.id}`}>
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={`#test${this.props.character.id}`}
              aria-expanded="false"
              aria-controls={`${this.props.character.id}`}
            >
              {this.props.character.name}
            </button>
          </h2>
        </div>

        <div
          id={`test${this.props.character.id}`}
          className="collapse "
          aria-labelledby={`label${this.props.character.id}`}
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <div className="d-flex display-row">
              <img
                className=""
                src={`${this.props.character.thumbnail.path}/portrait_medium.${this.props.character.thumbnail.extension}`}
              />
              <div>
                <div className="card m-4 p-3">
                  {" "}
                  <p className="">
                    {this.props.character.description}
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      onClick={this.handleClick}
                      className="btn btn-primary"
                    >
                      {`Me gusta ${this.state.likes}`}{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
