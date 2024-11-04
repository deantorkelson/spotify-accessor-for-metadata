import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import blackLogo from "src/static/black-logo.png";
import "./TextInput.css";

interface TextInputProps {
  placeholder: string;
  submit: any;
}

export class TextInput extends React.Component<TextInputProps, {}> {
  private text = "";

  render() {
    return (
      <Form className="input" inline>
        <Form.Control
          className="text-input"
          placeholder={this.props.placeholder}
          type="text"
          onKeyPress={(event: any) => {
            if (event.key === "Enter") {
              event.preventDefault();
              this.props.submit();
            }
          }}
          onChange={(value: any) => (this.text = value.target.value)}
        />
        <Button
          className="submit"
          type="button"
          variant="outline-success"
          onClick={() => this.props.submit(this.text)}
        >
          <img className="submit-img" src={blackLogo} alt="Submit" />
        </Button>
      </Form>
    );
  }
}

export default TextInput;
