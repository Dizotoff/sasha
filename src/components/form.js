import React from "react"

function Form() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        style={{ maxWidth: "600px", flexGrow: "1" }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>

        <button className="subscribe-button" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default Form
