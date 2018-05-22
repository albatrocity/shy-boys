import React, { Component } from "react";

class BandsInTown extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    const { limit } = this.props;
    return (
      <div>
        <style jsx>{`
          margin-bottom: 1em;
          a,
          .bit-widget .bit-event .bit-button {
            font-weight: normal;
          }
        `}</style>
        <a
          className="bit-widget-initializer"
          data-artist-name="Shy Boys"
          data-display-local-dates="false"
          data-display-past-dates="true"
          data-auto-style="true"
          data-text-color="#402f51"
          data-link-color="#b03177"
          data-font="Fredoka One"
          data-auto-style="true"
          data-popup-background-color="rgba(0,0,0,0)"
          data-background-color="rgba(0,0,0,0)"
          data-display-limit={limit}
          data-link-text-color="#FFFFFF"
        />
      </div>
    );
  }
}

export default BandsInTown;
